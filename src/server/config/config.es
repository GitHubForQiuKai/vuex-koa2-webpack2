//应用配置
import path from "path";
const config = {
	port:8081,//端口
	viewsDir:path.join(__dirname,"../../","views"),//模板文件路径
	staticDir:path.join(__dirname,"../../"),//静态文件
};
export default config;