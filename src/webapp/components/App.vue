<template>
  <div id="app">
  <my-header></my-header>
  	<p>
      <router-link to="/myindex">第一</router-link>
      <router-link to="/hello">第二</router-link>
    </p>
    <router-view></router-view>
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyHeader from './myHeader/MyHeader.vue'
import MyFooter from './myFooter/MyFooter.vue'

export default {
  name: 'app',
  components: {
    MyHeader,MyFooter
  }
}
</script>
<style>

</style>