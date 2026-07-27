<template>
  <UApp>
    <UHeader>
      <template #left>
        <NuxtLink to="/" class="flex items-center gap-2">
          <AppLogo class="w-6 h-6 shrink-0" />
          <span class="font-semibold text-lg">Dominick Gianino</span>
        </NuxtLink>

        <NavMenu />
      </template>

      <template #right>
        <UColorModeButton />
        <NuxtLink to="https://github.com/dominickg0" target="_blank" class="hidden md:flex">
          <UButton
            icon="i-simple-icons-github"
            aria-label="GitHub"
            color="neutral"
            variant="ghost"
          />
        </NuxtLink>
        <NuxtLink to="https://linkedin.com/in/dominick-gianino-48a652414/" target="_blank">
          <UButton
            icon="i-simple-icons-linkedin"
            aria-label="LinkedIn"
            color="neutral"
            variant="ghost"
          />
        </NuxtLink>
      </template>
    </UHeader>

    <UMain>
      <NuxtPage />
    </UMain>

    <USeparator icon="i-simple-icons-nuxtdotjs" />

    <UFooter>
      <template #left>
        <p class="text-sm text-muted">
          © {{ new Date().getFullYear() }} Dominick Gianino — Built with Nuxt & Nuxt UI
        </p>
      </template>

      <template #right>
        <div class="flex items-center gap-4">
          <NuxtLink to="https://github.com/dominickg0" target="_blank">
            <UButton
              icon="i-simple-icons-github"
              aria-label="GitHub"
              color="neutral"
              variant="ghost"
              size="sm"
            />
          </NuxtLink>
          <NuxtLink to="https://linkedin.com/in/dominick-gianino-48a652414/" target="_blank">
            <UButton
              icon="i-simple-icons-linkedin"
              aria-label="LinkedIn"
              color="neutral"
              variant="ghost"
              size="sm"
            />
          </NuxtLink>
        </div>
      </template>
    </UFooter>
  </UApp>
</template>

<script setup lang="ts">
import AppLogo from '~/components/AppLogo.vue'
import NavMenu from '~/components/NavMenu.vue'
</script>
