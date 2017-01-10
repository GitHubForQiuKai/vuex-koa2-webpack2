<template>
  <div class="myFooter">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'myFooter',
  data () {
    return {
      msg: '我是脚'
    }
  }
}
</script>

<style scoped>
	.myHeader{
		heigth:250px;
		background:black;
	}
</style>
