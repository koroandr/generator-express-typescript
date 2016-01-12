var gulp = require('gulp');
var ts = require('gulp-typescript');
var clean = require('gulp-clean');

gulp.task('ts', function() {
    return gulp.src(["**/*.ts", "!node_modules/**", '!bin/**'], {base: './'})
        .pipe(ts())
        .pipe(gulp.dest('./'));
});

gulp.task('clean', function () {
    return gulp.src(['**/*.js', '**/*.js.map', '!node_modules/**', '!gulpfile.js', '!bin/**'], {read: false})
        .pipe(clean())
});
