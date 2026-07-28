<template>
  <div v-if="post">
    <UPageHero
      :title="post.title"
      :description="post.description"
    >
      <template #meta>
        <div class="flex flex-wrap items-center gap-4 text-sm text-muted">
          <time :datetime="post.date">{{ formatDate(post.date) }}</time>
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
    </UPageHero>

    <UPageSection class="max-w-3xl">
      <UProse
        :value="post.body"
        class="prose prose-slate dark:prose-invert max-w-none"
      />
    </UPageSection>

    <UContentSurround
      :prev="prevPost"
      :next="nextPost"
      class="mt-12 max-w-3xl"
    />
  </div>

  <div
    v-else
    class="text-center py-12"
  >
    <UIcon
      name="i-lucide-alert-circle"
      class="text-6xl text-muted"
    />
    <h2 class="mt-4 text-xl font-semibold">
      Post not found
    </h2>
    <p class="mt-2 text-muted">
      The blog post you're looking for doesn't exist.
    </p>
    <NuxtLink
      to="/blog"
      class="mt-4 inline-block"
    >
      <UButton
        label="Back to Blog"
        trailing-icon="i-lucide-arrow-left"
      />
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

interface BlogPost {
  title: string
  description: string
  body: any
  date: string
  readingTime: number
  tags: string[]
  stem: string
}

const slug = route.params.slug as string

const { data: post } = await useAsyncData<BlogPost | null>(`blog-${slug}`, async () => {
  return await queryCollection('blog').where('stem', slug).first()
}, { server: true })

const { data: allPosts } = await useAsyncData<BlogPost[]>('all-blog-posts', async () => {
  return await queryCollection('blog')
    .order('date', 'DESC')
    .all()
}, { server: true })

const currentIndex = computed(() => {
  if (!allPosts.value) return -1
  return allPosts.value.findIndex(p => p.stem === slug)
})

const prevPost = computed(() => {
  if (!allPosts.value || currentIndex.value <= 0) {
    return null
  }
  return allPosts.value[currentIndex.value - 1]
})

const nextPost = computed(() => {
  if (!allPosts.value || currentIndex.value < 0 || currentIndex.value >= allPosts.value.length - 1) {
    return null
  }
  return allPosts.value[currentIndex.value + 1]
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
