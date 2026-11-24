<script setup lang="ts">
const pastWork = [
  { name: 'gfinityesports', url: 'https://gfinityesports.com' },
  { name: 'siege', url: 'https://siege.gg' },
  { name: 'mtgrocks', url: 'https://mtgrocks.com' }
]

const currentWork = [{ name: 'Stockgoblin', url: 'https://stockgoblin.co.uk' }]
</script>

<template>
  <section class="py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl font-bold text-slate-900 dark:text-white mb-12">
        Web Projects
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <UCard>
          <template #header>
            <h3 class="font-bold text-lg text-slate-900 dark:text-white">
              Past Work
            </h3>
            <p class="text-slate-600 dark:text-slate-400">
              A selection of my past web development projects.
            </p>
          </template>
          <ul class="space-y-3">
            <li v-for="site in pastWork" :key="site.url">
              <NuxtLink
                :to="site.url"
                target="_blank"
                class="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline">
                {{ site.name }}
                <UIcon
                  name="i-lucide-external-link"
                  class="w-4 h-4 shrink-0"
                  aria-hidden="true" />
                <span class="sr-only">(opens in a new tab)</span>
              </NuxtLink>
            </li>
          </ul>
        </UCard>
        <UCard>
          <template #header>
            <h3 class="font-bold text-lg text-slate-900 dark:text-white">
              Currently Working On
            </h3>
            <p class="text-slate-600 dark:text-slate-400">
              A selection of my current web development projects.
            </p>
          </template>
          <ul class="space-y-3">
            <li v-for="site in currentWork" :key="site.url">
              <NuxtLink
                :to="site.url"
                target="_blank"
                class="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline">
                {{ site.name }}
                <UIcon
                  name="i-lucide-external-link"
                  class="w-4 h-4 shrink-0"
                  aria-hidden="true" />
                <span class="sr-only">(opens in a new tab)</span>
              </NuxtLink>
            </li>
          </ul>
        </UCard>
      </div>
    </div>
  </section>
</template>
