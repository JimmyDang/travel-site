var gulp = require('gulp'),
webpack = require('webpack');

gulp.task('scripts', scripts);
	function scripts(){
	webpack(require('../../webpack.config.js'), function(err, stats){
		if(err){
			console.log(err.toString());
		}
		
      console.log(stats.toString());
	  
    }
 
    
	)};

 
