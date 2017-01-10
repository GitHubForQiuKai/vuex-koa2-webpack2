<template>
  <div class="index">
    <h1 v-on:click="test">{{ msg }}</h1>
    <h2>{{data}}</h2>
  </div>
</template>

<script>  
import {mapState} from "vuex";
export default {
  name: 'index',
  data () {
    return {
      msg: 'click me'
    }
  },
  computed:mapState({
  	data:state=>state.database.data.length
  }),
  methods:{
  	test(){
  		console.log("test");
  		this.$store.dispatch("addInfo",{txt:"hhh"})
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
