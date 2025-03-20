<template>
  <div>
    <div>Hello {{ useRuntimeConfig().public.hello }}</div>
    <div @click="again">{{ time?.message }}</div>
  </div>
</template>
<script setup lang="ts">
const { data: time, refresh } = await useFetch('/api/time')
const again = () => {
  console.log('clicked')
  refresh()
}
</script>
<style>
/* dark mode */
body {
  background-color: #1a1a1a;
  color: #06d12b;
  font-family: 'Courier New', Courier, monospace;
  font-size: 40px;
  text-align: center;
  padding: 20px;
  margin: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #06d12b;
  overflow: hidden;
  cursor: url('/favicon.ico'), auto;
}
</style>
