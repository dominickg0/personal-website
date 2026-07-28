<template>
  <div>
    <UPageHero
      title="Blog"
      description="Thoughts on web development, TypeScript, and building better software"
      icon="i-lucide-book-open"
    />

    <UPageSection>
      <template #default>
        <div v-if="featuredPost" class="prose prose-lg max-w-none dark:prose-invert">
          <h1 class="mb-2">{{ featuredPost.title }}</h1>
          <div class="flex flex-wrap items-center gap-3 text-sm text-muted mb-6">
            <span>{{ formatDate(featuredPost.date) }}</span>
            <span>•</span>
            <span>{{ featuredPost.readingTime }} min read</span>
            <UBadge
              v-for="tag in featuredPost.tags"
              :key="tag"
              variant="outline"
              size="sm"
            >
              {{ tag }}
            </UBadge>
          </div>
          <UImage
            v-if="featuredPost.image"
            :src="featuredPost.image"
            :alt="featuredPost.title"
            class="aspect-video w-full object-cover rounded-lg mb-8"
          />
          <UProse :content="featuredPost.content" />
        </div>

        <div v-else>
          <UCardGroup>
            <UCard
              v-for="post in paginatedPosts"
              :key="post.stem"
              :to="`/blog/${post.stem.replace('blog/', '')}`"
              class="group"
              ui="{ wrapper: 'transition-transform duration-200 hover:-translate-y-1' }"
            >
              <template #header>
                <UImage
                  :src="post.image"
                  :alt="post.title"
                  class="aspect-video w-full object-cover"
                />
              </template>

              <template #title>
                <h3 class="font-semibold">
                  {{ post.title }}
                </h3>
              </template>

              <template #description>
                <p class="line-clamp-2">
                  {{ post.description }}
                </p>
              </template>

              <template #footer>
                <div class="flex flex-wrap items-center gap-3 text-sm text-muted">
                  <span>{{ formatDate(post.date) }}</span>
                  <span>•</span>
                  <span>{{ post.readingTime }} min read</span>
                  <UBadge
                    v-for="tag in post.tags"
                    :key="tag"
                    variant="outline"
                    size="sm"
                    class="ml-auto"
                  >
                    {{ tag }}
                  </UBadge>
                </div>
              </template>
            </UCard>
          </UCardGroup>

          <div
            v-if="pageCount > 1"
            class="mt-8 flex justify-center"
          >
            <UPagination
              v-model="page"
              :page-count="pageCount"
              @update:model-value="page = $event"
            />
          </div>
        </div>
      </template>
    </UPageSection>
  </div>
</template>

<script setup lang="ts">
interface BlogPost {
  title: string
  description: string
  date: string
  readingTime: number
  tags: string[]
  image?: string
  stem: string
  content?: string
  body?: {
    value: string
    type: string
  }
}

const { data: posts } = await useAsyncData<BlogPost[]>('blog-posts', async () => {
  return await queryCollection('blog')
    .order('date', 'DESC')
    .all()
}, { server: true })

// Find the featured post (the GitHub dev environment one)
const featuredPost = computed(() => {
  if (!posts.value) return null
  const post = posts.value.find(p => p.stem === 'blog/building-professional-github-dev-environment' || p.stem === 'building-professional-github-dev-environment')
  if (post) {
    // Extract content from body.value if available
    const content = (post.body as any)?.value || post.content || ''
    return { ...post, content }
  }
  return null
})

const page = ref(1)
const perPage = 6
const pageCount = computed(() => Math.ceil((posts.value?.length || 0) / perPage))

const paginatedPosts = computed(() => {
  if (!posts.value) return []
  // Exclude the featured post from the card list
  const filtered = posts.value.filter(p => p !== featuredPost.value)
  const start = (page.value - 1) * perPage
  return filtered.slice(start, start + perPage)
})

function formatDate(dateString: string) {
  // Parse as UTC to avoid timezone issues
  const date = new Date(dateString + 'T00:00:00')
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC'
  })
}
</script>
