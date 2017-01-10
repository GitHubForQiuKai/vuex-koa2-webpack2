import Vue from "vue";
import VueRouter from 'vue-router';
import App from "./components/App.vue";
import MyIndex from "./components/myIndex/MyIndex.vue";
import Hello from "./components/hello/Hello.vue";
import store from "./store/index.js"
Vue.use(VueRouter);
const routes = [{
	path: '/myindex',
	component: MyIndex
}, {
	path: '/hello',
	component: Hello
}];

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
	routes, // （缩写）相当于 routes: routes
	mode: "history"
});

new Vue({
	router,
	store,
	el: '#app',
	template: '<App/>',
	components: {
		App
	}
});