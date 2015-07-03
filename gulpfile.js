/**
 * Created by ARUN on 3/7/2015.
 */
var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    util = require('gulp-util');

gulp.task('sass', function () {
    return sass('scss/')
        .on('error', function (err) {
            console.error('Error!', err.message);
        })
        .pipe(gulp.dest('css/'));
});
