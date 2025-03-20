<script setup>
import { AppState } from '@/AppState.js';
import BlogCard from '@/components/BlogCard.vue';
import { blogService } from '@/services/BlogService.js';
import { profilesService } from '@/services/ProfilesService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()

const profile = computed(() => AppState.activeProfile)

const blogs = computed(() => AppState.blogs)

onMounted(() => {
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
        <div>
          <h1>Profile</h1>
        </div>
      </div>
    </div>
  </section>
  <section v-if="profile" class="container">
    <div class="row justify-content-center">
      <div class="col-10">
        <div class="text-center background" :style="{ backgroundImage: `url(${profile.coverImg})` }">
          <img :src="profile.picture" alt="This is my happy place">
          <p class="display-4">{{ profile.name }}</p>
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
  max-height: 50dvh;
  object-fit: cover;
}

.background {
  max-height: 100dvh;
  width: 100%;
  background-size: cover;
  background-position: center;
}
</style>