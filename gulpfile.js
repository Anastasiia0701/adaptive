var gulp=require('gulp');
var rename=require('gulp-rename');
var sass=require('gulp-sass');
var autoprefixer=require('gulp-autoprefixer');
var sourcemaps=require('gulp-sourcemaps');
var browserSync=require('browser-sync').create();


function sync(done){
	browserSync.init({
		server: {
			baseDir: "./"
		},
		port: 3000
	});
	done();
}

function browserReload(done){
	browserSync.reload();
	done();
}



function watchS(){
gulp.watch("./**/*.html",browserReload);
gulp.watch("./**/*.php",browserReload);
gulp.watch("./**/*.js",browserReload);
gulp.watch("./**/*.css",browserReload);
gulp.watch("./**/*.scss",browserReload);
}


gulp.task('default', gulp.parallel( watchS, sync));
