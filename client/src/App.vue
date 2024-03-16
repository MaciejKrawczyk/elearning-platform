<template>
  <FirstBootView /> 
</template>


<script setup lang="ts">
import { reactive } from 'vue';
import FirstBootView from './components/FirstBootView.vue'

const formRef = reactive({
    name: "",
    password: ""
})

function onSubmit() {

  console.log('submited')
}
</script>

