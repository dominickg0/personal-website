<template>
  <div>
    <UPageHero
      title="Styleguide"
      description="Design system documentation for colors, typography, spacing, and components."
      icon="i-lucide-palette"
    />

    <UPageSection id="colors" title="Colors" description="Semantic color palette with light and dark mode support.">
      <template #default>
        <div class="space-y-8">
          <div>
            <h3 class="mb-4 font-semibold">Semantic Colors</h3>
            <UCardGroup>
              <UCard v-for="color in semanticColors" :key="color.name" class="p-4">
                <template #header>
                  <div class="flex items-center gap-3">
                    <div :class="`w-8 h-8 rounded-lg ${color.class}`" />
                    <div>
                      <div class="font-medium">{{ color.name }}</div>
                      <div class="text-sm text-muted">{{ color.description }}</div>
                    </div>
                  </div>
                </template>
                <template #default>
                  <div class="flex flex-wrap gap-2">
                    <span v-for="shade in color.shades" :key="shade" :class="`px-2 py-1 rounded text-xs font-mono ${shade.class}`">{{ shade.name }}</span>
                  </div>
                </template>
              </UCard>
            </UCardGroup>
          </div>

          <div>
            <h3 class="mb-4 font-semibold">Extended Palette (Primary & Brand)</h3>
            <UCardGroup>
              <UCard v-for="palette in extendedPalettes" :key="palette.name" class="p-4">
                <template #header>
                  <div class="font-medium capitalize">{{ palette.name }}</div>
                </template>
                <template #default>
                  <div class="grid grid-cols-10 gap-2">
                    <div
                      v-for="shade in palette.shades"
                      :key="shade"
                      :class="`h-10 rounded text-center text-xs font-mono flex items-center justify-center ${palette.cssVar}-${shade}`"
                    >
                      {{ shade }}
                    </div>
                  </div>
                </template>
              </UCard>
            </UCardGroup>
          </div>
        </div>
      </template>
    </UPageSection>

    <UPageSection id="typography" title="Typography" description="Font families, sizes, weights, and line heights.">
      <template #default>
        <UCard class="p-6">
          <h3 class="mb-4 font-semibold">Font Families</h3>
          <div class="grid gap-4 md:grid-cols-2">
            <div>
              <div class="mb-2 font-medium">Sans Serif — <span class="font-normal text-muted font-sans">Inter</span></div>
              <p class="font-sans text-base">The quick brown fox jumps over the lazy dog. 0123456789</p>
            </div>
            <div>
              <div class="mb-2 font-medium">Monospace — <span class="font-normal text-muted font-mono">JetBrains Mono</span></div>
              <p class="font-mono text-base">const hello = "world"; function test() { return 42; }</p>
            </div>
          </div>
        </UCard>

        <UCard class="mt-6 p-6">
          <h3 class="mb-4 font-semibold">Heading Scale</h3>
          <div class="space-y-4">
            <h1 class="text-4xl font-bold tracking-tight">Heading 1 — text-4xl font-bold</h1>
            <h2 class="text-3xl font-bold tracking-tight">Heading 2 — text-3xl font-bold</h2>
            <h3 class="text-2xl font-semibold tracking-tight">Heading 3 — text-2xl font-semibold</h3>
            <h4 class="text-xl font-semibold tracking-tight">Heading 4 — text-xl font-semibold</h4>
            <h5 class="text-lg font-semibold tracking-tight">Heading 5 — text-lg font-semibold</h5>
            <h6 class="text-base font-semibold tracking-tight">Heading 6 — text-base font-semibold</h6>
          </div>
        </UCard>

        <UCard class="mt-6 p-6">
          <h3 class="mb-4 font-semibold">Body Text</h3>
          <div class="space-y-4 prose prose-sm max-w-none">
            <p class="text-base">Body text — <code class="font-mono text-xs">text-base</code> — The quick brown fox jumps over the lazy dog. This is a paragraph with <strong>bold text</strong>, <em>italic text</em>, and <a href="#" class="underline">a link</a>.</p>
            <p class="text-sm text-muted">Small text — <code class="font-mono text-xs">text-sm text-muted</code> — Used for captions, metadata, and secondary information.</p>
            <p class="text-lg">Large text — <code class="font-mono text-xs">text-lg</code> — Used for lead paragraphs and emphasis.</p>
          </div>
        </UCard>
      </template>
    </UPageSection>

    <UPageSection id="spacing" title="Spacing" description="Consistent spacing scale based on 4px grid.">
      <template #default>
        <UCard class="p-6">
          <div class="space-y-4">
            <div v-for="i in 12" :key="i" class="flex items-center gap-4">
              <div :class="`h-4 rounded bg-primary ${i <= 6 ? 'w-' + i * 4 : 'w-' + (i * 8)}`" />
              <span class="font-mono text-sm w-24">{{ i <= 6 ? i * 4 : (i - 6) * 8 }}px</span>
              <span class="font-mono text-sm text-muted">space-{{ i <= 6 ? i : (i - 6) * 2 }} / {{ i <= 6 ? i * 0.25 : (i - 6) * 0.5 }}rem</span>
            </div>
          </div>
        </UCard>
      </template>
    </UPageSection>

    <UPageSection id="breakpoints" title="Breakpoints" description="Responsive design breakpoints for mobile-first approach.">
      <template #default>
        <UCard class="p-6">
          <div class="overflow-x-auto">
            <table class="w-full text-sm">
              <thead>
                <tr class="border-b border-muted">
                  <th class="text-left py-2 px-3 font-medium">Name</th>
                  <th class="text-left py-2 px-3 font-medium">Min Width</th>
                  <th class="text-left py-2 px-3 font-medium">Utility</th>
                  <th class="text-left py-2 px-3 font-medium">Target</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b border-muted/50"><td class="py-2 px-3 font-mono">sm</td><td class="py-2 px-3">640px</td><td class="py-2 px-3 font-mono">sm:</td><td class="py-2 px-3">Mobile landscape</td></tr>
                <tr class="border-b border-muted/50"><td class="py-2 px-3 font-mono">md</td><td class="py-2 px-3">768px</td><td class="py-2 px-3 font-mono">md:</td><td class="py-2 px-3">Tablet</td></tr>
                <tr class="border-b border-muted/50"><td class="py-2 px-3 font-mono">lg</td><td class="py-2 px-3">1024px</td><td class="py-2 px-3 font-mono">lg:</td><td class="py-2 px-3">Desktop</td></tr>
                <tr class="border-b border-muted/50"><td class="py-2 px-3 font-mono">xl</td><td class="py-2 px-3">1280px</td><td class="py-2 px-3 font-mono">xl:</td><td class="py-2 px-3">Large desktop</td></tr>
                <tr class="border-b border-muted/50"><td class="py-2 px-3 font-mono">2xl</td><td class="py-2 px-3">1536px</td><td class="py-2 px-3 font-mono">2xl:</td><td class="py-2 px-3">Ultra-wide</td></tr>
              </tbody>
            </table>
          </div>
        </UCard>
      </template>
    </UPageSection>

    <UPageSection id="shadows" title="Shadows & Elevation" description="Consistent shadow system for depth and hierarchy.">
      <template #default>
        <UCardGroup>
          <UCard v-for="shadow in shadows" :key="shadow.name" class="p-6 text-center">
            <template #header>
              <div class="font-medium">{{ shadow.name }}</div>
            </template>
            <template #default>
              <div :class="`w-32 h-32 mx-auto rounded-lg ${shadow.class}`" />
              <div class="mt-3 font-mono text-xs text-muted">{{ shadow.css }}</div>
            </template>
          </UCard>
        </UCardGroup>
      </template>
    </UPageSection>

    <UPageSection id="border-radius" title="Border Radius" description="Consistent border radius scale.">
      <template #default>
        <UCard class="p-6">
          <div class="flex flex-wrap items-center gap-4">
            <div v-for="radius in radii" :key="radius.name" class="flex flex-col items-center gap-2">
              <div :class="`w-16 h-16 bg-primary/10 ${radius.class}`" />
              <span class="font-mono text-xs">{{ radius.name }}</span>
              <span class="font-mono text-xs text-muted">{{ radius.value }}</span>
            </div>
          </div>
        </UCard>
      </template>
    </UPageSection>

    <UPageSection id="components" title="Component Gallery" description="Commonly used Nuxt UI components with variants.">
      <template #default>
        <div class="space-y-8">
          <div>
            <h3 class="mb-4 font-semibold">Buttons</h3>
            <UCard class="p-6">
              <div class="flex flex-wrap gap-3">
                <UButton color="primary" label="Primary" />
                <UButton color="primary" variant="outline" label="Outline" />
                <UButton color="primary" variant="subtle" label="Subtle" />
                <UButton color="primary" variant="ghost" label="Ghost" />
                <UButton color="neutral" label="Neutral" />
                <UButton color="neutral" variant="outline" label="Neutral Outline" />
              </div>
              <div class="mt-4 flex flex-wrap gap-3">
                <UButton size="xs" label="XS" />
                <UButton size="sm" label="SM" />
                <UButton size="md" label="MD" />
                <UButton size="lg" label="LG" />
                <UButton size="xl" label="XL" />
              </div>
              <div class="mt-4 flex flex-wrap gap-3">
                <UButton loading label="Loading" />
                <UButton disabled label="Disabled" />
                <UButton color="success" label="Success" />
                <UButton color="warning" label="Warning" />
                <UButton color="error" label="Error" />
              </div>
            </UCard>
          </div>

          <div>
            <h3 class="mb-4 font-semibold">Badges</h3>
            <UCard class="p-6">
              <div class="flex flex-wrap gap-2">
                <UBadge color="primary" label="Primary" />
                <UBadge color="primary" variant="subtle" label="Primary Subtle" />
                <UBadge color="primary" variant="outline" label="Primary Outline" />
                <UBadge color="success" label="Success" />
                <UBadge color="warning" label="Warning" />
                <UBadge color="error" label="Error" />
                <UBadge color="neutral" label="Neutral" />
                <UBadge variant="outline" label="Outline" />
                <UBadge variant="soft" label="Soft" />
              </div>
              <div class="mt-4 flex flex-wrap gap-2">
                <UBadge size="sm" label="Small" />
                <UBadge size="md" label="Medium" />
                <UBadge size="lg" label="Large" />
              </div>
              <div class="mt-4 flex flex-wrap gap-2">
                <UBadge icon="i-lucide-check" label="With Icon" />
                <UBadge trailing-icon="i-lucide-x" label="Dismissible" />
                <UBadge dot color="success" label="With Dot" />
              </div>
            </UCard>
          </div>

          <div>
            <h3 class="mb-4 font-semibold">Cards</h3>
            <UCardGroup>
              <UCard class="w-80">
                <template #header>
                  <UImage src="https://picsum.photos/400/200" alt="Card image" class="aspect-video w-full object-cover" />
                </template>
                <template #title>Card Title</template>
                <template #description>Card description goes here. It can be multiple lines.</template>
                <template #footer>
                  <UButton size="sm" label="Action" />
                </template>
              </UCard>
              <UCard class="w-80">
                <template #title>
                  <div class="flex items-center justify-between">
                    <span>Card with Badge</span>
                    <UBadge color="amber" variant="soft">New</UBadge>
                  </div>
                </template>
                <template #description>Simple card without image, with title badge.</template>
              </UCard>
              <UCard class="w-80" ui="{ wrapper: 'border-l-4 border-primary' }">
                <template #title>Bordered Card</template>
                <template #description>Card with left border accent.</template>
              </UCard>
            </UCardGroup>
          </div>

          <div>
            <h3 class="mb-4 font-semibold">Avatars</h3>
            <UCard class="p-6">
              <div class="flex flex-wrap items-center gap-4">
                <UAvatar name="Dominick Gianino" size="xl" />
                <UAvatar name="DG" size="lg" />
                <UAvatar name="User" size="md" />
                <UAvatar name="User" size="sm" />
                <UAvatar name="User" size="xs" />
                <UAvatar src="https://api.dicebear.com/7.x/avataaars/svg?seed=Dominick" size="lg" />
                <UAvatar name="Online" size="lg" status="online" />
                <UAvatar name="Busy" size="lg" status="busy" />
                <UAvatar name="Away" size="lg" status="away" />
                <UAvatar name="Offline" size="lg" status="offline" />
              </div>
            </UCard>
          </div>

          <div>
            <h3 class="mb-4 font-semibold">Alerts</h3>
            <UCard class="p-6 space-y-3">
              <UAlert color="info" icon="i-lucide-info" title="Info Alert" description="This is an informational alert message." />
              <UAlert color="success" icon="i-lucide-check-circle" title="Success Alert" description="Operation completed successfully." />
              <UAlert color="warning" icon="i-lucide-alert-triangle" title="Warning Alert" description="Please review this warning carefully." />
              <UAlert color="error" icon="i-lucide-alert-circle" title="Error Alert" description="Something went wrong. Please try again." />
              <UAlert color="neutral" variant="subtle" title="Subtle Alert" description="A subtle neutral alert for less important info." />
              <UAlert color="primary" variant="outline" title="Outline Alert" description="An outlined alert variant." />
            </UCard>
          </div>

          <div>
            <h3 class="mb-4 font-semibold">Form Inputs</h3>
            <UCard class="p-6 max-w-md space-y-4">
              <UInput placeholder="Text input" />
              <UInput placeholder="With icon" leading-icon="i-lucide-search" />
              <UInput placeholder="With trailing icon" trailing-icon="i-lucide-user" />
              <UTextarea placeholder="Textarea" rows="3" />
              <USelect
                placeholder="Select option"
                :options="[
                  { label: 'Option 1', value: '1' },
                  { label: 'Option 2', value: '2' },
                  { label: 'Option 3', value: '3' }
                ]"
              />
              <UCheckbox label="Checkbox option" />
              <URadioGroup
                :items="[
                  { label: 'Option A', value: 'a' },
                  { label: 'Option B', value: 'b' }
                ]"
              />
              <USwitch label="Toggle switch" />
            </UCard>
          </div>

          <div>
            <h3 class="mb-4 font-semibold">Navigation</h3>
            <UCard class="p-6 space-y-4">
              <UBreadcrumb
                :links="[
                  { label: 'Home', to: '/' },
                  { label: 'Portfolio', to: '/portfolio' },
                  { label: 'Project Name' }
                ]"
              />
              <UPagination v-model="paginationPage" :page-count="10" />
              <div class="flex gap-2">
                <UButton icon="i-lucide-chevron-left" variant="outline" size="sm" />
                <UButton icon="i-lucide-chevron-right" variant="outline" size="sm" />
              </div>
            </UCard>
          </div>

          <div>
            <h3 class="mb-4 font-semibold">Data Display</h3>
            <UCard class="p-6 space-y-4">
              <div class="grid gap-4 md:grid-cols-3">
                <UStat label="Total Projects" value="12" icon="i-lucide-folder-kanban" color="primary" />
                <UStat label="GitHub Stars" value="1,234" icon="i-lucide-star" color="amber" />
                <UStat label="Blog Posts" value="8" icon="i-lucide-book-open" color="green" />
              </div>
              <UTable
                :columns="[
                  { id: 'name', key: 'name', label: 'Name' },
                  { id: 'role', key: 'role', label: 'Role' },
                  { id: 'status', key: 'status', label: 'Status' }
                ]"
                :rows="[
                  { name: 'Dominick Gianino', role: 'Full Stack Developer', status: 'Active' },
                  { name: 'Jane Doe', role: 'Designer', status: 'Active' },
                  { name: 'John Smith', role: 'Backend Engineer', status: 'Away' }
                ]"
                striped
                hover
              />
            </UCard>
          </div>

          <div>
            <h3 class="mb-4 font-semibold">Modals & Overlays</h3>
            <UCard class="p-6 space-y-4">
              <UButton label="Open Modal" @click="modalOpen = true" />
              <UButton label="Open Drawer" @click="drawerOpen = true" />
              <UButton label="Open Tooltip" @click="tooltipOpen = true" />

              <UModal v-model="modalOpen" title="Modal Title" description="This is a modal dialog.">
                <template #footer>
                  <UButton variant="outline" @click="modalOpen = false">Cancel</UButton>
                  <UButton @click="modalOpen = false">Confirm</UButton>
                </template>
              </UModal>

              <UDrawer v-model="drawerOpen" title="Drawer Title" description="This is a side drawer.">
                <template #footer>
                  <UButton variant="outline" @click="drawerOpen = false">Close</UButton>
                </template>
              </UDrawer>
            </UCard>
          </div>
        </div>
      </template>
    </UPageSection>
  </div>
</template>

<script setup lang="ts">
const modalOpen = ref(false)
const drawerOpen = ref(false)
const tooltipOpen = ref(false)
const paginationPage = ref(1)

const semanticColors = [
  {
    name: 'Primary',
    description: 'Main CTAs, active navigation, brand elements',
    class: 'bg-primary-500',
    shades: [
      { name: '50', class: 'bg-primary-50 text-primary-900' },
      { name: '100', class: 'bg-primary-100 text-primary-900' },
      { name: '500', class: 'bg-primary-500 text-white' },
      { name: '900', class: 'bg-primary-900 text-white' }
    ]
  },
  {
    name: 'Secondary',
    description: 'Alternative actions, complementary UI',
    class: 'bg-secondary-500',
    shades: [
      { name: '50', class: 'bg-secondary-50 text-secondary-900' },
      { name: '100', class: 'bg-secondary-100 text-secondary-900' },
      { name: '500', class: 'bg-secondary-500 text-white' },
      { name: '900', class: 'bg-secondary-900 text-white' }
    ]
  },
  {
    name: 'Success',
    description: 'Success messages, completed states',
    class: 'bg-success-500',
    shades: [
      { name: '50', class: 'bg-success-50 text-success-900' },
      { name: '100', class: 'bg-success-100 text-success-900' },
      { name: '500', class: 'bg-success-500 text-white' },
      { name: '900', class: 'bg-success-900 text-white' }
    ]
  },
  {
    name: 'Warning',
    description: 'Warning messages, pending states',
    class: 'bg-warning-500',
    shades: [
      { name: '50', class: 'bg-warning-50 text-warning-900' },
      { name: '100', class: 'bg-warning-100 text-warning-900' },
      { name: '500', class: 'bg-warning-500 text-white' },
      { name: '900', class: 'bg-warning-900 text-white' }
    ]
  },
  {
    name: 'Error',
    description: 'Error messages, destructive actions',
    class: 'bg-error-500',
    shades: [
      { name: '50', class: 'bg-error-50 text-error-900' },
      { name: '100', class: 'bg-error-100 text-error-900' },
      { name: '500', class: 'bg-error-500 text-white' },
      { name: '900', class: 'bg-error-900 text-white' }
    ]
  },
  {
    name: 'Neutral',
    description: 'Text, borders, backgrounds, disabled states',
    class: 'bg-neutral-500',
    shades: [
      { name: '50', class: 'bg-neutral-50 text-neutral-900' },
      { name: '100', class: 'bg-neutral-100 text-neutral-900' },
      { name: '500', class: 'bg-neutral-500 text-white' },
      { name: '900', class: 'bg-neutral-900 text-white' }
    ]
  }
]

const extendedPalettes = [
  {
    name: 'Primary',
    cssVar: 'primary',
    shades: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]
  },
  {
    name: 'Brand',
    cssVar: 'brand',
    shades: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]
  }
]

const shadows = [
  { name: 'None', class: 'shadow-none', css: 'shadow-none' },
  { name: 'XS', class: 'shadow-xs', css: 'box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05)' },
  { name: 'SM', class: 'shadow-sm', css: 'box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1)' },
  { name: 'MD (Default)', class: 'shadow-md', css: 'box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1)' },
  { name: 'LG', class: 'shadow-lg', css: 'box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1)' },
  { name: 'XL', class: 'shadow-xl', css: 'box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1)' },
  { name: '2XL', class: 'shadow-2xl', css: 'box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25)' },
  { name: 'Inner', class: 'shadow-inner', css: 'box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.05)' }
]

const radii = [
  { name: 'None', value: '0', class: 'rounded-none' },
  { name: 'SM', value: '0.125rem (2px)', class: 'rounded-sm' },
  { name: 'DEFAULT', value: '0.25rem (4px)', class: 'rounded' },
  { name: 'MD', value: '0.375rem (6px)', class: 'rounded-md' },
  { name: 'LG', value: '0.5rem (8px)', class: 'rounded-lg' },
  { name: 'XL', value: '0.75rem (12px)', class: 'rounded-xl' },
  { name: '2XL', value: '1rem (16px)', class: 'rounded-2xl' },
  { name: '3XL', value: '1.5rem (24px)', class: 'rounded-3xl' },
  { name: 'Full', value: '9999px', class: 'rounded-full' }
]
</script>