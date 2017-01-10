import Koa from "koa";
import initAllRouter from "./controllers/InitRouters";
import path from "path";
import views from "koa-views";
import server from "koa-static";
import convert from "koa-convert";
import config from "./config/config"

var app = new Koa();

app.use(views(config.viewsDir),{
	map:{
		html:"underscore"
	}
});
app.use(convert(server(config.staticDir)));
initAllRouter(app);
app.listen(config.port);
console.log("server is running at "+config.port);