var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer-core'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssimport = require('postcss-import'),
mixins = require('postcss-mixins');

gulp.task('styles', styles);
	function styles() {
		console.log("Styles task run.");
	return gulp.src('./app/assets/styles/mainstyles.css')
	.pipe(postcss([cssimport, mixins, cssvars, nested,  autoprefixer({browsers:['>0%']})]))
	.on('error', function(errorInfo){
		console.log(errorInfo.toString());
		this.emit('end');
	})
	.pipe(gulp.dest('./app/temp/styles'));
	
	
};