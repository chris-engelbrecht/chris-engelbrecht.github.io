<template>
  <section class="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl font-bold text-slate-900 dark:text-white mb-12">
        Work Experience
      </h2>
      <div class="space-y-8">
        <!-- Experience 1 -->
        <UCard>
          <div class="flex items-start justify-between mb-4">
            <div>
              <h3 class="text-xl font-bold text-slate-900 dark:text-white">
                Full Stack Developer
              </h3>
              <p class="text-blue-600 dark:text-blue-400 font-semibold">
                Gfinity PLC · Full-time
              </p>
            </div>
            <UBadge color="green"> Nov 2025 - July 2026 </UBadge>
          </div>
          <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
            Working within an Agile/Sprint environment to maintain and ship
            user-facing features across nine high-traffic web properties,
            including mtgrocks.com, siege.gg, and gfinityesports.com.
            Collaborated closely with product, content, and commercial teams,
            translating technical concepts into clear insights to ensure
            seamless collaboration.
          </p>
        </UCard>

        <!-- Experience 2 -->
        <UCard>
          <div class="flex items-start justify-between mb-4">
            <div>
              <h3 class="text-xl font-bold text-slate-900 dark:text-white">
                Freelance Web Developer
              </h3>
              <p class="text-blue-600 dark:text-blue-400 font-semibold">
                Self-employed
              </p>
            </div>
            <UBadge color="blue"> July 2024 - Nov 2025 </UBadge>
          </div>
          <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
            Delivered custom web solutions for clients, specializing in modern
            full-stack development. Built responsive, performant applications
            using Vue.js, Nuxt.js, and TypeScript.
          </p>
        </UCard>
      </div>
    </div>
  </section>
</template>
