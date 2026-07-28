<template>
  <div>
    <UPageHero
      title="Blog"
      description="Thoughts on web development, TypeScript, and building better software"
      icon="i-lucide-book-open"
    />

    <UPageSection>
      <template #default>
        <UCardGroup>
          <UCard
            v-for="post in paginatedPosts"
            :key="post.stem"
            :to="`/blog/${post.stem}`"
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
}

const { data: posts } = await useAsyncData<BlogPost[]>('blog-posts', async () => {
  return await queryCollection('blog')
    .order('date', 'DESC')
    .all()
}, { server: true })

const page = ref(1)
const perPage = 6
const pageCount = computed(() => Math.ceil((posts.value?.length || 0) / perPage))

const paginatedPosts = computed(() => {
  if (!posts.value) return []
  const start = (page.value - 1) * perPage
  return posts.value.slice(start, start + perPage)
})

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>
