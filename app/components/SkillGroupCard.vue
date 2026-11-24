<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string
    skills: string[]
    color?: 'blue' | 'neutral' | 'slate'
    variant?: 'subtle'
  }>(),
  {
    color: 'blue',
    variant: 'subtle'
  }
)
</script>

<template>
  <UCard>
    <template #header>
      <h3 class="font-bold text-lg text-slate-900 dark:text-white">
        {{ title }}
      </h3>
    </template>
    <div class="flex flex-wrap gap-2">
      <UBadge
        v-for="skill in skills"
        :key="skill"
        :color="color"
        :variant="variant">
        {{ skill }}
      </UBadge>
    </div>
  </UCard>
</template>
