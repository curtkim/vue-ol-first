<template>
  <div id="app">
    <ul class='navi'>
      <li><router-link to="/basic">basic</router-link></li>
      <li><router-link to="/vector">vector</router-link></li>
      <li><router-link to="/dynamicAdd">dynamic add</router-link></li>
      <li><router-link to="/draw">draw polygon</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style >
body {
  margin: 0;
  padding: 0;
}

ul.navi li {
  display: inline-block;
  margin-right: 15px;
}
</style>
