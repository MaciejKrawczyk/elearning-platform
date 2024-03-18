<template>
  <div class="h-full w-full flex justify-center items-center">
    <IconLoading />
  </div>
</template>

<script setup lang="ts">
import IconLoading from '@/components/icons/IconLoading.vue'
import router from '@/router'
import { sleep } from '@/lib/utils'

async function loadAndRedirect() {
  await sleep(2000)
  await router.push('/')
}

loadAndRedirect()

</script>
