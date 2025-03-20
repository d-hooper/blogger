<script setup>
import { blog } from '@/models/blog.js';

defineProps({
  blogProp: { type: blog, required: true }
})
</script>


<template>

  <div class="mb-4 border border-indigo">
    <img
      :src="blogProp.imgUrl || 'https://images.unsplash.com/photo-1477554193778-9562c28588c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'"
      :alt="`this might be our blog`" class="img-fluid">
    <div class="d-flex justify-content-between my-2 px-2">
      <p class="fs-3">{{ blogProp.title }}</p>
      <div>
        <RouterLink :to="{ name: 'Profile', params: { profileId: blogProp.creator.id } }">
          <img :src="blogProp.creator.picture" alt="" class="creator-image"
            :title="`Check out ${blogProp.creator.name}'s profile`">
        </RouterLink>
        <p>{{ blogProp.creator.name }}</p>
      </div>
    </div>
    <div class="p-3">
      <p class="blog-body">{{ blogProp.body }}</p>
    </div>
  </div>

</template>


<style lang="scss" scoped>
img:not([class='creator-image']) {
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
  aspect-ratio: 1 / 1;
  border-radius: 50%;
}
</style>