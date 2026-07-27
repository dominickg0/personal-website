<template>
  <div>
    <UPageHero
      title="Portfolio"
      description="A collection of projects I've built, from full-stack applications to backend APIs and developer tools."
      icon="i-lucide-folder-kanban"
    />

    <UPageSection>
      <template #default>
        <div class="mb-6 flex flex-wrap gap-2">
          <UButton
            v-for="category in categories"
            :key="category"
            :label="category"
            :color="selectedCategory === category ? 'primary' : 'neutral'"
            variant="outline"
            @click="selectedCategory = category"
          />
        </div>

        <UCardGroup v-if="filteredProjects.length">
          <UCard
            v-for="project in filteredProjects"
            :key="project.slug"
            :to="`/portfolio/${project.slug}`"
            class="group"
            ui="{ wrapper: 'transition-transform duration-200 hover:-translate-y-1' }"
          >
            <template #header>
              <UImage
                :src="project.image"
                :alt="project.title"
                class="aspect-video w-full object-cover"
              />
            </template>

            <template #title>
              <div class="flex items-start justify-between gap-2">
                <h3 class="font-semibold">
                  {{ project.title }}
                </h3>
                <UBadge
                  v-if="project.featured"
                  color="amber"
                  variant="soft"
                >
                  Featured
                </UBadge>
              </div>
            </template>

            <template #description>
              <p class="line-clamp-2">
                {{ project.description }}
              </p>
            </template>

            <template #footer>
              <div class="flex flex-wrap items-center gap-2 text-sm">
                <UBadge
                  v-for="tech in project.techStack.slice(0, 4)"
                  :key="tech"
                  variant="outline"
                  size="sm"
                  color="primary"
                >
                  {{ tech }}
                </UBadge>
                <span
                  v-if="project.techStack.length > 4"
                  class="text-muted text-sm"
                >
                  +{{ project.techStack.length - 4 }} more
                </span>
              </div>
            </template>
          </UCard>
        </UCardGroup>

        <div
          v-else
          class="text-center py-12"
        >
          <UIcon
            name="i-lucide-filter"
            class="text-4xl text-muted"
          />
          <h3 class="mt-2 text-lg font-semibold">
            No projects found
          </h3>
          <p class="mt-1 text-muted">
            Try selecting a different category.
          </p>
        </div>
      </template>
    </UPageSection>
  </div>
</template>

<script setup lang="ts">
const { data: projects } = await useAsyncData('portfolio-projects', async () => {
  const { $content } = useNuxtApp()
  return await $content('portfolio')
    .only(['title', 'description', 'date', 'tags', 'image', 'techStack', 'githubUrl', 'demoUrl', 'featured', 'category', 'slug'])
    .sort({ date: -1 })
    .find()
})

const categories = ['All', 'web', 'backend', 'mobile', 'tools', 'open-source']
const selectedCategory = ref('All')

const filteredProjects = computed(() => {
  if (!projects.value) return []
  if (selectedCategory.value === 'All') return projects.value
  return projects.value.filter(p => p.category === selectedCategory.value)
})
</script>
