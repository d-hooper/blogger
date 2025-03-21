<script setup>
import { AppState } from '@/AppState.js';
import BlogCard from '@/components/BlogCard.vue';
import { blogService } from '@/services/BlogService.js';
import { profilesService } from '@/services/ProfilesService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()

const profile = computed(() => AppState.activeProfile)

const blogs = computed(() => AppState.blogs)

onMounted(() => {
  getProfileById()
  getBlogsByCreatorId()
})

watch(route, () => {
  getProfileById()
  getBlogsByCreatorId()
})

async function getProfileById() {
  try {
    const profileId = route.params.profileId
    await profilesService.getProfileById(profileId)
  }
  catch (error) {
    Pop.error(error, 'Could not get profile page');
    logger.error('COULD NOT GET PROFILE PAGE', error)
  }
}
async function getBlogsByCreatorId() {
  try {
    const profileId = route.params.profileId
    await blogService.getBlogsByCreatorId(profileId)
  }
  catch (error) {
    Pop.error(error, 'Could not get profile page');
    logger.error('COULD NOT GET PROFILE PAGE', error)
  }
}
</script>


<template>
  <section class="container">
    <div class="row">
      <div class="col-12">
        <div class="text-center">
          <h1>Profile</h1>
        </div>
      </div>
    </div>
  </section>
  <section v-if="profile" class="container">
    <div class="row justify-content-center">
      <div class="col-10">
        <div class="d-flex flex-column justify-content-between background rounded"
             :style="{ backgroundImage: `url(${profile.coverImg})` }">
          <div class="text-end me-2">
            <img :src="profile.picture" alt="This is my happy place">
          </div>
          <div class="bg-light bg-opacity-75 p-3 text-indigo text-shadow rounded-bottom text-center">
            <p class="display-4">{{ profile.name }}</p>
            <p class="fs-5">{{ profile.bio }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-10">
        <div class="row">
          <div v-for="blog in blogs" :key="blog.id">
            <BlogCard :blogProp="blog" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped>
img {
  height: 35dvh;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  padding: 2rem 0;
}

.background {
  height: 70dvh;
  width: 100%;
  background-size: cover;
  background-position: center;
}

.text-shadow {
  text-shadow: 1px 1px 2px #000000;
}
</style>