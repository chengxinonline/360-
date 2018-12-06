//编写gulp管理任务
const gulp = require("gulp");

//拷贝html
gulp.task("copy-html",function(){
	return gulp.src("index.html")
	.pipe(gulp.dest("dist"))
	.pipe(connect.reload());
})
gulp.task("html",function(){
	return gulp.src("html/*.html")
	.pipe(gulp.dest("dist/html"))
	.pipe(connect.reload());
})


//拷贝图片
gulp.task("images",function(){
	return gulp.src("images/**/*")
	.pipe(gulp.dest("dist/images"))
	.pipe(connect.reload());

})

//json数据
gulp.task("data",function(){
	return gulp.src("data/*.json")
	.pipe(gulp.dest("dist/data"))
	.pipe(connect.reload());
})

//js文件
gulp.task("scripts",function(){
	return gulp.src("js/*.js")
	.pipe(gulp.dest("dist/js"))
	.pipe(connect.reload());
})

//建立工程
gulp.task("build",["copy-html","images","scripts","data","html","scss1","scss2","scss3","scss4"],function(){
	console.log("工程建立成功");
})

//scss文件
const scss = require("gulp-sass-china");
const minifyCSS = require("gulp-minify-css");
const rename = require("gulp-rename");
gulp.task("scss1",function(){
	return gulp.src("styles/index.scss")
	.pipe(scss())
	.pipe(gulp.dest("dist/css"))
	.pipe(minifyCSS())
	.pipe(rename("index.mini.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})

gulp.task("scss2",function(){
	return gulp.src("styles/login.scss")
	.pipe(scss())
	.pipe(gulp.dest("dist/css"))
	.pipe(minifyCSS())
	.pipe(rename("login.mini.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})
gulp.task("scss3",function(){
	return gulp.src("styles/register.scss")
	.pipe(scss())
	.pipe(gulp.dest("dist/css"))
	.pipe(minifyCSS())
	.pipe(rename("register.mini.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})
gulp.task("scss4",function(){
	return gulp.src("styles/shopping.scss")
	.pipe(scss())
	.pipe(gulp.dest("dist/css"))
	.pipe(minifyCSS())
	.pipe(rename("shopping.mini.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})

//gulp 监听
gulp.task("watch",function(){
	gulp.watch("index.html",["copy-html"]);
	gulp.watch("html/*.html",["html"]);
	gulp.watch("images/**/*",["images"]);
	gulp.watch("data/*.json",["data"]);
	gulp.watch("js/*.js",["scripts"]);
	gulp.watch("styles/index.scss",["scss1"]);
	gulp.watch("styles/login.scss",["scss2"]);
	gulp.watch("styles/register.scss",["scss3"]);
	gulp.watch("styles/shopping.scss",["scss4"]);

})

//启动服务
const connect = require("gulp-connect");
gulp.task("server",function(){
	connect.server({
		root:"dist",
		livereload:true//设置实时刷新
	})
})

//默认任务
gulp.task("default",["watch","server"]);
