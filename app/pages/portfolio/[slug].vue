<template>
  <div v-if="project">
    <UPageHero
      :title="project.title"
      :description="project.description"
      :icon="project.icon"
    >
      <template #meta>
        <div class="flex flex-wrap items-center gap-4 text-sm text-muted">
          <time :datetime="project.date">{{ formatDate(project.date) }}</time>
          <span>•</span>
          <UBadge :color="project.category" variant="soft">{{ project.category }}</UBadge>
          <span v-if="project.featured" class="ml-auto">
            <UBadge color="amber" variant="soft">Featured</UBadge>
          </span>
        </div>
      </template>

      <template #media>
        <UImage
          :src="project.image"
          :alt="project.title"
          class="aspect-video w-full object-cover rounded-lg"
        />
      </template>

      <template #links>
        <div class="flex flex-wrap gap-2">
          <UButton
            v-if="project.githubUrl"
            to="project.githubUrl"
            target="_blank"
            icon="i-simple-icons-github"
            label="GitHub"
            color="neutral"
            variant="outline"
          />
          <UButton
            v-if="project.demoUrl"
            to="project.demoUrl"
            target="_blank"
            icon="i-lucide-external-link"
            label="Live Demo"
            trailingIcon="i-lucide-arrow-right"
          />
        </div>
      </template>
    </UPageHero>

    <UPageSection class="max-w-4xl">
      <UProse :value="project.body" class="prose prose-slate dark:prose-invert max-w-none" />
    </UPageSection>

    <UPageSection title="Tech Stack" class="max-w-4xl">
      <template #default>
        <div class="flex flex-wrap gap-2">
          <UBadge
            v-for="tech in project.techStack"
            :key="tech"
            color="primary"
            variant="subtle"
          >{{ tech }}</UBadge>
        </div>
      </template>
    </UPageSection>

    <UPageSection title="Links" class="max-w-4xl">
      <template #default>
        <div class="flex flex-wrap gap-4">
          <UButton
            v-if="project.githubUrl"
            to="project.githubUrl"
            target="_blank"
            icon="i-simple-icons-github"
            label="View Source"
            color="neutral"
            variant="outline"
          />
          <UButton
            v-if="project.demoUrl"
            to="project.demoUrl"
            target="_blank"
            icon="i-lucide-external-link"
            label="Live Demo"
            trailingIcon="i-lucide-arrow-right"
          />
        </div>
      </template>
    </UPageSection>
  </div>

  <div v-else class="text-center py-12">
    <UIcon name="i-lucide-alert-circle" class="text-6xl text-muted" />
    <h2 class="mt-4 text-xl font-semibold">Project not found</h2>
    <p class="mt-2 text-muted">The project you're looking for doesn't exist.</p>
    <NuxtLink to="/portfolio" class="mt-4 inline-block">
      <UButton label="Back to Portfolio" trailing-icon="i-lucide-arrow-left" />
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { $content } = useNuxtApp()

const { data: project } = await useAsyncData(`portfolio-${route.params.slug}`, async () => {
  return await $content('portfolio', route.params.slug).findOne()
})

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>