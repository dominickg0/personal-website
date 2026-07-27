<template>
  <UDropdown class="hidden md:block">
    <template #trigger="{ open }">
      <UButton
        variant="ghost"
        color="neutral"
        :icon="open ? 'i-lucide-chevron-up' : 'i-lucide-chevron-down'"
        class="gap-1"
      >
        Pages
      </UButton>
    </template>

    <UContentNavigation
      :links="[
        { label: 'Blog', to: '/blog' },
        { label: 'Portfolio', to: '/portfolio' },
        { label: 'Styleguide', to: '/styleguide' }
      ]"
    />
  </UDropdown>
</template>

<script setup lang="ts">
// Navigation dropdown menu for pages
</script>
