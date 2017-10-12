// Initialize gulp variables
var gulp = require('gulp'),
	sass = require('gulp-sass'),
	sourcemaps = require('gulp-sourcemaps');

// Paths 
sassSrc = './sass/**/*.sass';
sassWatchFiles = sassSrc;
styleDest = './';
mapsDest = styleDest;


// Gulp SASS Task
gulp.task( 'style', function(){ 
	gulp.src( sassSrc )

	.pipe( sourcemaps.init() )

	.pipe( sass({
		outputStyle : 'expanded'
	})).on('error', sass.logError)

	.pipe( sourcemaps.write( mapsDest ) )

	.pipe( gulp.dest( styleDest ) )
});


// Define Default Task
gulp.task( 'default', [ 'style' ], function(){
	gulp.watch( sassWatchFiles, ['style']);
} );