<script setup lang="ts">
const professionalSkills = [
  'Html',
  'TypeScript',
  'TailwindCSS',
  'Golang',
  'JavaScript',
  'MongoDB'
]

const frameworks = ['Vue', 'Nuxt', 'React', 'Next', 'PayloadCMS']
const CICD = ['GitHub Actions', 'Bitbucket Pipelines']

const tools = [
  'GitHub',
  'Microsoft Teams',
  'Visual Studio Code',
  'Slack',
  'Jira',
  'Bitbucket'
]
</script>

<template>
  <section class="py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl font-bold text-slate-900 dark:text-white mb-12">
        Skills & Technologies
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Professional Skills -->
        <SkillGroupCard
          title="Professional Skills"
          :skills="professionalSkills" />
        <!-- Frameworks -->
        <SkillGroupCard title="Frameworks" :skills="frameworks" />
        <!-- CI/CD -->
        <SkillGroupCard title="CI/CD" :skills="CICD" color="neutral" />
        <!-- Tools -->
        <SkillGroupCard
          title="Tools & Platforms"
          :skills="tools"
          color="slate"
          variant="subtle" />
      </div>
    </div>
  </section>
</template>
