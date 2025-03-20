<script setup>
import { AppState } from '@/AppState.js';
import { blogService } from '@/services/BlogService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';


const blogs = computed(() => AppState.blogs)

onMounted(() => {
  getBlogs()
})

async function getBlogs() {
  try {
    await blogService.getBlogs()

  } catch (error) {
    Pop.error(error, `no blog man`)
    logger.error(`no blog boi`, error)
  }
}
</script>

<template>
  <h1>{{ blogs }}</h1>
</template>

<style scoped lang="scss"></style>
