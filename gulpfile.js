var gulp = require("gulp");
var glob = require("glob");
var path = require("path");
var babel = require('gulp-babel');
gulp.task("es6 to es5", function() {
	glob("src/**/*.es", {}, function(er, files) {
		files.map((file) => {
			gulp.src(file).pipe(babel({
				"presets": ["es2015", "stage-2"],
				"plugins": [
					["transform-runtime", {
						"polyfill": false,
						"regenerator": true
					}]
				]
			})).pipe(gulp.dest('bulid/' + path.relative("./src", path.parse(file).dir)));
		});
	})
});
gulp.task('default', ['es6 to es5']);