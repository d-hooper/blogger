<script setup>
import { blog } from '@/models/blog.js';

defineProps({
  blogProp: { type: blog, required: true }
})
</script>


<template>

  <div class="mb-4 p-2">
    <img
      :src="blogProp.imgUrl || 'https://images.unsplash.com/photo-1477554193778-9562c28588c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'"
      :alt="`this might be our blog`" class="img-fluid">
    <div class="d-flex justify-content-between">
      <p class="fs-3">{{ blogProp.title }}</p>
      <div>
        <img :src="blogProp.creator.picture" alt="" class="creator-image">
        <p>{{ blogProp.creator.name }}</p>
      </div>
    </div>
    <p class="blog-body">{{ blogProp.body }}</p>
  </div>

</template>


<style lang="scss" scoped>
img {
  max-height: 50dvh;
  width: 100%;
  object-fit: cover;
}

.blog-body {
  max-height: 20dvh;
  overflow-y: scroll;
}

.creator-image {
  max-height: 3rem;
  aspect-ratio: 1/1;
  border-radius: 50%;
}
</style>