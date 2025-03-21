<script setup>
import { computed } from 'vue';
import { AppState } from '../AppState.js';
import AccountForm from '@/components/AccountForm.vue';

const account = computed(() => AppState.account)

</script>

<template>
  <div class="about">
    <section class="container" v-if="account">
      <div class="row">
        <div class="col-6">
          <AccountForm />
        </div>
        <div class="col-6">
          <div class="text-center">

            <h2>Welcome {{ account.name }}!</h2>
            <img class="rounded" :src="account.picture" alt="" />
            <p>{{ account.email }}</p>
            <div>
              <p>Background Image</p>
              <img class="mini-bg" :src="account.coverImg" alt="" />
            </div>
            <div class="mt-2">
              <p class="mb-0">Bio</p>
              <p><b>{{ account.bio }}</b></p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div v-else>
      <h1>Loading... <i class="mdi mdi-loading mdi-spin"></i></h1>
    </div>
  </div>
</template>

<style scoped lang="scss">
.rounded {
  width: 150px;
  aspect-ratio: 1/1;
  object-fit: cover;
  object-position: center;
}

.mini-bg {
  max-width: unset;
  height: 25dvh;
  width: 100%;
  object-fit: cover;
  object-position: center;
}
</style>
