'use strict';

var gulp = require('gulp');
var del = require('del');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');

function clean() {
  return del(['css/*.*']);
}

function styles()  {
  return gulp.src('scss/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      includePaths: ['./bower_components/breakpoint-sass/stylesheets']
    }).on('error', sass.logError))
    .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: true
        }))
    .pipe(sourcemaps.write(''))
    .pipe(gulp.dest('css'));
};

function watch() {
  gulp.watch('scss/*.scss', gulp.series(styles));
}

gulp.task('default', gulp.series(clean, styles, watch));