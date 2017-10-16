'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
 
gulp.task('sass', function () {
  return gulp.src('./sass/**/*.sass')
  	.pipe( sourcemaps.init() )

    .pipe(sass().on('error', sass.logError))

    .pipe( sourcemaps.write('./') )

    .pipe(gulp.dest('./'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.sass', ['sass']);
}); 

gulp.task('html:watch', function () {
  gulp.watch('./hmtl/**/*.html', ['html']);
});



gulp.task('default', ['sass', 'sass:watch']);




