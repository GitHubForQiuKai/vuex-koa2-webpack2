<template>
  <div class="myHeader">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'myHeader',
  data () {
    return {
      msg: '我是头'
    }
  }
}
</script>

<style scoped>
	.myHeader{
		heigth:250px;
		background:red;
	}
</style>
