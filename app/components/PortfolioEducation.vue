<template>
  <section class="py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl font-bold text-slate-900 dark:text-white mb-12">
        Education & Certifications
      </h2>
      <div class="space-y-6">
        <!-- Degree -->
        <UCard>
          <div class="flex items-start justify-between mb-2">
            <div>
              <h3 class="text-xl font-bold text-slate-900 dark:text-white">
                Bachelor of Science in Computing
              </h3>
              <p class="text-slate-600 dark:text-slate-400">Unisa</p>
            </div>
            <UBadge color="blue"> 2022 - 2025 </UBadge>
          </div>
        </UCard>

        <!-- Certifications -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <NuxtLink
            to="https://www.boot.dev/certificates/6ec88ac6-7cb8-4c5f-9052-3fe508c56b16"
            class="block"
            target="_blank">
            <UCard class="border-l-4 border-l-blue-500">
              <div class="flex items-center gap-3 mb-2">
                <UIcon
                  name="i-lucide-award"
                  class="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <p class="font-semibold text-slate-900 dark:text-white">
                  Certificate: GOlang
                </p>
                <UIcon
                  name="i-lucide-external-link"
                  class="w-4 h-4 shrink-0 text-slate-600 dark:text-slate-400"
                  aria-hidden="true" />
                <span class="sr-only">(opens in a new tab)</span>
              </div>
              <p class="text-sm text-slate-600 dark:text-slate-400">Boot.dev</p>
            </UCard>
          </NuxtLink>

          <NuxtLink
            to="https://www.boot.dev/certificates/d69df44b-71a8-4ddd-89fc-dbd69bbb2a65"
            class="block"
            target="_blank">
            <UCard class="border-l-4 border-l-blue-500">
              <div class="flex items-center gap-3 mb-2">
                <UIcon
                  name="i-lucide-award"
                  class="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <p class="font-semibold text-slate-900 dark:text-white">
                  Certificate: SQL
                </p>
                <UIcon
                  name="i-lucide-external-link"
                  class="w-4 h-4 shrink-0 text-slate-600 dark:text-slate-400"
                  aria-hidden="true" />
                <span class="sr-only">(opens in a new tab)</span>
              </div>
              <p class="text-sm text-slate-600 dark:text-slate-400">Boot.dev</p>
            </UCard>
          </NuxtLink>

          <NuxtLink
            to="https://www.boot.dev/certificates/1cf3051a-859c-43f9-8ea5-8274e2256334"
            class="block"
            target="_blank">
            <UCard class="border-l-4 border-l-blue-500">
              <div class="flex items-center gap-3 mb-2">
                <UIcon
                  name="i-lucide-award"
                  class="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <p class="font-semibold text-slate-900 dark:text-white">
                  Certificate: HTTP Clients in GO
                </p>
                <UIcon
                  name="i-lucide-external-link"
                  class="w-4 h-4 shrink-0 text-slate-600 dark:text-slate-400"
                  aria-hidden="true" />
                <span class="sr-only">(opens in a new tab)</span>
              </div>
              <p class="text-sm text-slate-600 dark:text-slate-400">Boot.dev</p>
            </UCard>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
