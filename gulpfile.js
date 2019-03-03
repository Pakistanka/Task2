const gulp = require('gulp');
// const babel = require('gulp-babel');
// const uglify = require('gulp-uglify');
// const rename = require('gulp-rename');
const sass = require('gulp-sass');
const watch = require('gulp-watch');
const watchSass = require("gulp-watch-sass");


sass.compiler = require('node-sass');

gulp.task('sass', function () {
  return gulp.src('./sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/*.scss', ['sass']);
});

// 
// gulp.task('stream', function () {
//     // Endless stream mode
//     return watch('css/**/*.css', { ignoreInitial: false })
//         .pipe(gulp.dest('build'));
// });
//
// gulp.task('callback', function () {
//     // Callback mode, useful if any plugin in the pipeline depends on the `end`/`flush` event
//     return watch('css/**/*.css', function () {
//         gulp.src('css/**/*.css')
//             .pipe(gulp.dest('build'));
//     });
// });
