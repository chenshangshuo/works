//配置文件信息
requirejs.config({
	baseUrl: '.',  //指定的对象路径要根据本目录进行调整
	paths: {
		jquery: 'lib/jquery'
	}
});
//加载入口模板
requirejs(['app/app']);
