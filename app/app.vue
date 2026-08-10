<script setup>
useHead({
  meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
  link: [{ rel: 'icon', href: '/favicon.ico' }],
  htmlAttrs: {
    lang: 'en'
  }
})

const title = 'Christopher Engelbrecht - Full Stack Developer'
const description =
  'Full Stack Developer with expertise in Vue.js, Nuxt.js, TypeScript, and Golang. B.Sc. Computing graduate with a proven track record of shipping user-facing features for high-traffic web platforms.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <UApp>
    <UMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>

    <USeparator />

    <UFooter>
      <template #left>
        <p class="text-sm text-muted">
          © {{ new Date().getFullYear() }} Christopher Engelbrecht. All rights
          reserved.
        </p>
      </template>

      <template #right>
        <div class="flex gap-2">
          <UButton
            to="https://github.com/chris-engelbrecht"
            target="_blank"
            icon="i-simple-icons-github"
            aria-label="GitHub"
            color="neutral"
            variant="ghost" />
          <UButton
            to="mailto:chrisengelbrecht2000@gmail.com"
            icon="i-lucide-mail"
            aria-label="Email"
            color="neutral"
            variant="ghost" />
        </div>
      </template>
    </UFooter>
  </UApp>
</template>
