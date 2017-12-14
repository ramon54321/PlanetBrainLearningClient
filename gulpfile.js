var gulp = require("gulp");
var run = require('gulp-run-command').default;

gulp.task("clean", run([
	"rm -rf out"
]));

gulp.task("build-production", ["clean"], run([
	"webpack --config webpack.production.config.js --color --progress --display-reasons",
	"node-sass ./src/sass/ --output ./out/style/"
]));

gulp.task("build-development", ["clean"], run([
	"webpack --config webpack.development.config.js",
	"node-sass ./src/sass/ --output ./out/style/"
]));

gulp.task("watch", ["build-development"], function () {
	gulp.watch("src/**/*.js", run([
		"webpack --config webpack.development.config.js"
	]));
	gulp.watch("src/**/*.sass", run([
		"node-sass ./src/sass/ --output ./out/style/"
	]));
});

gulp.task("default", ["build-development"]);
