<template>
  <div>
    <UPageHero
      title="Dominick Gianino"
      description="Full-stack developer passionate about building scalable web applications, clean APIs, and great developer experiences."
      :links="[
        { label: 'View Portfolio', to: '/portfolio', trailingIcon: 'i-lucide-arrow-right', size: 'xl' },
        { label: 'Read Blog', to: '/blog', icon: 'i-lucide-book-open', size: 'xl', color: 'neutral', variant: 'subtle' },
        { label: 'GitHub', to: 'https://github.com/dominickg0', target: '_blank', icon: 'i-simple-icons-github', size: 'xl', color: 'neutral', variant: 'outline' },
        { label: 'LinkedIn', to: 'https://linkedin.com/in/dominick-gianino-48a652414/', target: '_blank', icon: 'i-simple-icons-linkedin', size: 'xl', color: 'neutral', variant: 'outline' }
      ]"
    />

    <UPageSection
      id="about"
      title="About Me"
      description="A little bit about my background and what I do."
      :features="[
        { icon: 'i-lucide-code', title: 'Full-Stack Development', description: 'Building end-to-end web applications with modern frameworks like Nuxt, Vue, Node.js, and TypeScript.' },
        { icon: 'i-lucide-database', title: 'Backend & APIs', description: 'Designing RESTful and GraphQL APIs, database architecture, and microservices with Node.js, Fastify, and PostgreSQL.' },
        { icon: 'i-lucide-palette', title: 'Developer Experience', description: 'Creating tools, CLI utilities, and improving workflows with TypeScript, OpenAPI, and automation.' },
        { icon: 'i-lucide-book-open', title: 'Continuous Learning', description: 'Always exploring new technologies, sharing knowledge through blog posts, and contributing to open source.' }
      ]"
    />

    <UPageSection
      id="skills"
      title="Tech Stack"
      description="Technologies I work with regularly."
    >
      <template #default>
        <div class="flex flex-wrap gap-2">
          <UBadge v-for="tech in frontend" :key="tech" color="primary" variant="subtle">{{ tech }}</UBadge>
        </div>
        <div class="mt-4 flex flex-wrap gap-2">
          <UBadge v-for="tech in backend" :key="tech" color="green" variant="subtle">{{ tech }}</UBadge>
        </div>
        <div class="mt-4 flex flex-wrap gap-2">
          <UBadge v-for="tech in tools" :key="tech" color="orange" variant="subtle">{{ tech }}</UBadge>
        </div>
      </template>
    </UPageSection>

    <UPageSection>
      <UPageCTA
        title="Featured Projects"
        description="Check out some of my recent work"
        :links="[
          { label: 'View All Projects', to: '/portfolio', trailingIcon: 'i-lucide-arrow-right', color: 'primary' }
        ]"
      />
    </UPageSection>

    <UPageSection
      id="featured-projects"
      title=""
      description=""
    >
      <template #default>
        <UCardGroup>
          <UCard
            v-for="project in featuredProjects"
            :key="project.slug"
            :to="`/portfolio/${project.slug}`"
            class="group"
            ui="{ wrapper: 'transition-transform duration-200 hover:-translate-y-1' }"
          >
            <template #header>
              <div class="aspect-video bg-muted relative overflow-hidden">
                <UImage
                  :src="project.image"
                  :alt="project.title"
                  class="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </template>

            <template #title>
              <div class="flex items-start justify-between gap-2">
                <h3 class="font-semibold">{{ project.title }}</h3>
                <UBadge v-if="project.featured" color="primary" variant="subtle">Featured</UBadge>
              </div>
            </template>

            <template #description>
              <p class="line-clamp-2">{{ project.description }}</p>
            </template>

            <template #footer>
              <div class="flex flex-wrap gap-1 mb-3">
                <UBadge v-for="tech in project.techStack.slice(0, 4)" :key="tech" variant="outline" size="sm">{{ tech }}</UBadge>
                <UBadge v-if="project.techStack.length > 4" variant="outline" size="sm">+{{ project.techStack.length - 4 }} more</UBadge>
              </div>
              <div class="flex items-center gap-2">
                <UButton size="sm" :to="project.githubUrl" target="_blank" variant="ghost" icon="i-simple-icons-github" class="w-8 h-8 p-0" />
                <UButton v-if="project.demoUrl" size="sm" :to="project.demoUrl" target="_blank" variant="ghost" icon="i-lucide-external-link" class="w-8 h-8 p-0" />
              </div>
            </template>
          </UCard>
        </UCardGroup>
      </template>
    </UPageSection>

    <UPageSection>
      <UPageCTA
        title="Latest Blog Posts"
        description="Thoughts on web development, TypeScript, and building better software"
        :links="[
          { label: 'Read All Posts', to: '/blog', trailingIcon: 'i-lucide-arrow-right', color: 'primary' }
        ]"
      />
    </UPageSection>

    <UPageSection
      id="latest-posts"
      title=""
      description=""
    >
      <template #default>
        <UCardGroup>
          <UCard
            v-for="post in latestPosts"
            :key="post.slug"
            :to="`/blog/${post.slug}`"
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
              <h3 class="font-semibold">{{ post.title }}</h3>
            </template>

            <template #description>
              <p class="line-clamp-2">{{ post.description }}</p>
            </template>

            <template #footer>
              <div class="flex items-center gap-3 text-sm text-muted">
                <span>{{ formatDate(post.date) }}</span>
                <span>•</span>
                <span>{{ post.readingTime }} min read</span>
              </div>
            </template>
          </UCard>
        </UCardGroup>
      </template>
    </UPageSection>

    <UPageCTA
      title="Let's Connect"
      description="I'm always open to discussing new projects, collaboration opportunities, or just chatting about tech."
      :links="[
        { label: 'GitHub', to: 'https://github.com/dominickg0', target: '_blank', icon: 'i-simple-icons-github', color: 'neutral', variant: 'outline' },
        { label: 'LinkedIn', to: 'https://linkedin.com/in/dominick-gianino-48a652414/', target: '_blank', icon: 'i-simple-icons-linkedin', color: 'neutral', variant: 'outline' },
        { label: 'Email', to: 'mailto:dominickgianino21@gmail.com', icon: 'i-lucide-mail', color: 'primary' }
      ]"
    />
  </div>
</template>

<script setup lang="ts">
interface Project {
  slug: string
  title: string
  description: string
  image: string
  techStack: string[]
  githubUrl: string
  demoUrl?: string
  featured: boolean
}

interface BlogPost {
  slug: string
  title: string
  description: string
  image: string
  date: string
  readingTime: number
}

const featuredProjects: Project[] = [
  {
    slug: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    description: 'Production-ready e-commerce platform with cart, checkout, Stripe payments, and admin dashboard.',
    image: '/images/projects/ecommerce.png',
    techStack: ['Nuxt 3', 'Vue 3', 'TypeScript', 'PostgreSQL', 'Prisma', 'Stripe', 'Tailwind CSS'],
    githubUrl: 'https://github.com/dominickg0/ecommerce-platform',
    demoUrl: 'https://ecommerce-demo.dominickgianino.dev',
    featured: true
  },
  {
    slug: 'task-management-api',
    title: 'Task Management API',
    description: 'RESTful API for task and project management with team collaboration, real-time notifications, and OpenAPI spec.',
    image: '/images/projects/task-api.png',
    techStack: ['Node.js', 'Fastify', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker', 'OpenAPI'],
    githubUrl: 'https://github.com/dominickg0/task-management-api',
    featured: true
  },
  {
    slug: 'realtime-chat',
    title: 'Real-time Chat Application',
    description: 'Slack-inspired real-time chat with channels, DMs, threads, file sharing, and emoji reactions.',
    image: '/images/projects/chat-app.png',
    techStack: ['Nuxt 3', 'Vue 3', 'TypeScript', 'Socket.io', 'PostgreSQL', 'Tailwind CSS', 'Pinia'],
    githubUrl: 'https://github.com/dominickg0/realtime-chat',
    demoUrl: 'https://chat-demo.dominickgianino.dev',
    featured: false
  }
]

const latestPosts: BlogPost[] = [
  {
    slug: 'building-modern-personal-website',
    title: 'Building a Modern Personal Website with Nuxt 4 and Nuxt UI',
    description: 'Learn how to create a professional personal website using the latest Nuxt 4, Nuxt UI, and Tailwind CSS v4.',
    image: '/images/blog/nuxt-personal-website.png',
    date: '2024-12-15',
    readingTime: 8
  },
  {
    slug: 'typesafe-api-development',
    title: 'Type-Safe API Development with TypeScript and OpenAPI',
    description: 'How to achieve end-to-end type safety from your API specification to your frontend client.',
    image: '/images/blog/typesafe-api.png',
    date: '2024-11-20',
    readingTime: 12
  }
]

const frontend = ['Nuxt 3/4', 'Vue 3', 'TypeScript', 'Tailwind CSS', 'Pinia', 'VueUse']
const backend = ['Node.js', 'Fastify', 'PostgreSQL', 'Prisma', 'Redis', 'Socket.io', 'GraphQL']
const tools = ['Git', 'Docker', 'GitHub Actions', 'Vitest', 'Playwright', 'ESLint', 'Prettier']

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>
