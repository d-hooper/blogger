<script setup>
import { AppState } from '@/AppState.js';
import BlogCard from '@/components/BlogCard.vue';
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
  <section class="container">
    <div class="row my-4">
      <div v-for="blog in blogs" :key="blog.id" class="col-12">
        <BlogCard :blogProp="blog" />
      </div>
    </div>

  </section>

</template>

<style scoped lang="scss"></style>
