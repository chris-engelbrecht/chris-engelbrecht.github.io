<template>
  <div
    class="min-h-screen bg-linear-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
    <!-- Hero Section -->
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
                <div
                  class="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  2+
                </div>
                <p class="text-sm text-slate-600 dark:text-slate-400">
                  Years Professional
                </p>
              </div>
            </UCard>
            <UCard class="bg-white dark:bg-slate-800">
              <div class="text-center">
                <div
                  class="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  9
                </div>
                <p class="text-sm text-slate-600 dark:text-slate-400">
                  High-Traffic Sites
                </p>
              </div>
            </UCard>
            <UCard class="bg-white dark:bg-slate-800">
              <div class="text-center">
                <div
                  class="text-3xl font-bold text-blue-600 dark:text-blue-400">
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

    <!-- About Section -->
    <section class="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold text-slate-900 dark:text-white mb-8">
          About
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p
              class="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              Full Stack Developer with expertise in delivering robust solutions
              within Agile sprint cycles. I have supported a network of nine
              high-volume media sites, working with technologies like Vue.js,
              Nuxt.js, and TypeScript.
            </p>
            <p
              class="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              I bridge the gap between technical and non-technical stakeholders,
              partnering with product, content, and commercial teams to align
              engineering goals with business growth.
            </p>
            <p
              class="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              From writing scalable code to managing critical emergency
              deployments, I focus on system reliability and seamless user
              experiences.
            </p>
          </div>
          <div class="bg-slate-50 dark:bg-slate-700 p-8 rounded-lg">
            <h3 class="font-bold text-slate-900 dark:text-white mb-4">
              Key Strengths
            </h3>
            <ul class="space-y-3 text-slate-700 dark:text-slate-300">
              <li class="flex items-start gap-3">
                <UIcon
                  name="i-lucide-check-circle"
                  class="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 shrink-0" />
                <span>Full-stack development with modern frameworks</span>
              </li>
              <li class="flex items-start gap-3">
                <UIcon
                  name="i-lucide-check-circle"
                  class="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 shrink-0" />
                <span>Agile/Sprint workflow expertise</span>
              </li>
              <li class="flex items-start gap-3">
                <UIcon
                  name="i-lucide-check-circle"
                  class="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 shrink-0" />
                <span>Cross-functional team collaboration</span>
              </li>
              <li class="flex items-start gap-3">
                <UIcon
                  name="i-lucide-check-circle"
                  class="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 shrink-0" />
                <span>Emergency deployment management</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="py-16 px-4 sm:px-6 lg:px-8">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold text-slate-900 dark:text-white mb-12">
          Skills & Technologies
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Professional Skills -->
          <UCard>
            <template #header>
              <h3 class="font-bold text-lg text-slate-900 dark:text-white">
                Professional Skills
              </h3>
            </template>
            <div class="flex flex-wrap gap-2">
              <UBadge
                v-for="skill in professionalSkills"
                :key="skill"
                color="blue">
                {{ skill }}
              </UBadge>
            </div>
          </UCard>

          <!-- Additional Skills -->
          <UCard>
            <template #header>
              <h3 class="font-bold text-lg text-slate-900 dark:text-white">
                Additional Skills
              </h3>
            </template>
            <div class="flex flex-wrap gap-2">
              <UBadge
                v-for="skill in additionalSkills"
                :key="skill"
                color="neutral">
                {{ skill }}
              </UBadge>
            </div>
          </UCard>
        </div>

        <!-- Tools -->
        <div class="mt-8">
          <UCard>
            <template #header>
              <h3 class="font-bold text-lg text-slate-900 dark:text-white">
                Tools & Platforms
              </h3>
            </template>
            <div class="flex flex-wrap gap-2">
              <UBadge
                v-for="tool in tools"
                :key="tool"
                color="slate"
                variant="subtle">
                {{ tool }}
              </UBadge>
            </div>
          </UCard>
        </div>
      </div>
    </section>

    <!-- Experience Section -->
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

    <!-- Education Section -->
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
            <UCard class="border-l-4 border-l-blue-500">
              <div class="flex items-center gap-3 mb-2">
                <UIcon
                  name="i-lucide-award"
                  class="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <p class="font-semibold text-slate-900 dark:text-white">
                  Certificate: GO
                </p>
              </div>
              <p class="text-sm text-slate-600 dark:text-slate-400">Boot.dev</p>
            </UCard>

            <UCard class="border-l-4 border-l-blue-500">
              <div class="flex items-center gap-3 mb-2">
                <UIcon
                  name="i-lucide-award"
                  class="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <p class="font-semibold text-slate-900 dark:text-white">
                  Certificate: SQL
                </p>
              </div>
              <p class="text-sm text-slate-600 dark:text-slate-400">Boot.dev</p>
            </UCard>

            <UCard class="border-l-4 border-l-blue-500">
              <div class="flex items-center gap-3 mb-2">
                <UIcon
                  name="i-lucide-award"
                  class="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <p class="font-semibold text-slate-900 dark:text-white">
                  Certificate: HTTP Clients in GO
                </p>
              </div>
              <p class="text-sm text-slate-600 dark:text-slate-400">Boot.dev</p>
            </UCard>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section
      class="py-16 px-4 sm:px-6 lg:px-8 bg-linear-to-r from-blue-600 to-blue-700 dark:from-blue-900 dark:to-blue-800">
      <div class="max-w-6xl mx-auto text-center">
        <h2 class="text-4xl font-bold text-white mb-6">Let's Work Together</h2>
        <p class="text-xl text-blue-100 mb-8">
          I'm always interested in hearing about new projects and opportunities.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <UButton
            to="mailto:chrisengelbrecht2000@gmail.com"
            size="xl"
            icon="i-lucide-mail"
            class="text-base">
            Send me an Email
          </UButton>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const professionalSkills = [
  'Html',
  'TypeScript',
  'TailwindCSS',
  'Golang',
  'JavaScript',
  'Nuxt.js',
  'Vue.js'
]

const additionalSkills = ['Python', 'C++', 'Oracle Database']

const tools = [
  'Google Sheets',
  'Google Docs',
  'Github Desktop',
  'Git',
  'Microsoft Teams',
  'Visual Studio Code',
  'Unity'
]
</script>
