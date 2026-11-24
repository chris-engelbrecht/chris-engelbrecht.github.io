<template>
  <section class="py-20 px-4 sm:px-6 lg:px-8">
    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <!-- Profile Info -->
        <div class="md:col-span-2">
          <div class="mb-6">
            <h1
              class="text-5xl sm:text-6xl font-bold text-slate-900 dark:text-white mb-3">
              Christopher Engelbrecht
            </h1>
            <p
              class="text-2xl text-blue-600 dark:text-blue-400 font-semibold mb-4">
              Full Stack Developer
            </p>
            <p
              class="text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              B.Sc. Computing graduate with a proven track record of shipping
              user-facing features for high-traffic, production-level web
              platforms. Specializing in robust full-stack solutions within
              Agile sprint cycles.
            </p>
          </div>
          <div class="flex flex-wrap gap-3 mb-6">
            <UButton
              to="mailto:chrisengelbrecht2000@gmail.com"
              icon="i-lucide-mail"
              size="lg">
              Get in Touch
            </UButton>
            <UButton
              to="https://github.com/chris-engelbrecht"
              target="_blank"
              icon="i-simple-icons-github"
              size="lg"
              variant="soft">
              GitHub
            </UButton>
          </div>
          <div
            class="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
            <div class="flex items-center gap-2">
              <UIcon name="i-lucide-map-pin" />
              <span>Somerset West, Cape Town</span>
            </div>
          </div>
        </div>

        <!-- Quick Stats -->
        <div class="space-y-4">
          <UCard class="bg-white dark:bg-slate-800">
            <div class="text-center">
              <div class="text-3xl font-bold text-blue-600 dark:text-blue-400">
                2+
              </div>
              <p class="text-sm text-slate-600 dark:text-slate-400">
                Years Professional
              </p>
            </div>
          </UCard>
          <UCard class="bg-white dark:bg-slate-800">
            <div class="text-center">
              <div class="text-3xl font-bold text-blue-600 dark:text-blue-400">
                9
              </div>
              <p class="text-sm text-slate-600 dark:text-slate-400">
                High-Traffic Sites
              </p>
            </div>
          </UCard>
          <UCard class="bg-white dark:bg-slate-800">
            <div class="text-center">
              <div class="text-3xl font-bold text-blue-600 dark:text-blue-400">
                B.Sc
              </div>
              <p class="text-sm text-slate-600 dark:text-slate-400">
                Computing (Unisa)
              </p>
            </div>
          </UCard>
        </div>
      </div>
    </div>
  </section>
</template>
