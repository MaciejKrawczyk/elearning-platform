<template>
  <Toaster />
  <router-view />
<!--  <FirstBootView />-->
</template>


<script setup lang="ts">
import FirstBootView from './views/FirstBootView.vue'
import { Toaster } from '@/components/ui/toast'

</script>

