<template>
  <div id="app">
    <ul>
      <li><router-link to="/basic">basic</router-link></li>
      <li><router-link to="/feature">feature</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style>
</style>
