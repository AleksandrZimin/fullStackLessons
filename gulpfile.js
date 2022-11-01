const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
var pipeline = require('readable-stream');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('clone-files', function() {
  return gulp.src('app/**/*.*')
    .pipe(gulp.dest('public/'));
});

gulp.task('minifyCSS', function() {
  return gulp.src('app/css/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('public/css/'));
});

gulp.task('minifyJS', async function() {
  return pipeline(
        gulp.src('app/js/*.js'),
        uglify(),
        gulp.dest('public/js/')
  );
});

gulp.task('autoPrefixCSS', function() {
  return gulp.src('app/css/*.css')
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 10 versions'],
      cascade: false
    }))
    .pipe(cleanCSS())
    .pipe(gulp.dest('public/css/'));
});
