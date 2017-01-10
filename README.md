###步骤说明：  
1、cd vuex-koa2-webpack2  
2、npm install(或yarn install)  
3、gulp(编译后端文件)  
4、npm run build:dev（编译前端文件）  
5、cd bulid/server  
6、node app.js  
7、访问localhost:8081  


###目录结构说明：  
|--conf  
> |--config.js //webpack的辅助配置  
	|--webpack.base.js	//webpack的基本配置   
	|--webpack.dev.js	//webpack的开发环境配置文件   
	|--webpack.prop.js	//webpack的上线环境配置文件   

|--src   
> |--server	//基于koa2搭建的后台服务   
>> |--config	//全局配置文件  
		|--controllers	//路由控制  
		|--models	//模型模块  
		|--service	//服务层（请求后端接口：例如:java等）  
		|--app.es	//启动文件  

>|--webapp	//基于vuex的前端文件  
>>|--apis //封装请求接口(一般配合vue-resource使用)  
		|--assets	//静态资源  
		|--components //vue组件  
		|--store //vuex的store  
		|--app.js //入口文件  
		|--index.html //单页面  

|--gulpfile.js	//gulp配置文件(用于处理es6)  
|--package.json	//依赖包  
|--webpack.config.js	//webpack出口文件  

官网地址：
