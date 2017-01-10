import router from 'koa-simple-router';
import GirlRouter from "./GirlRouter";
export default function(app){
	app.use(router((_)=>{
		_.get('/',async (ctx,next)=> {
			await ctx.render("index");
		});
	}))
}