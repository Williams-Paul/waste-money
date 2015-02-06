var gulp = require('gulp');
var copy = require('gulp-copy');

gulp.task('copy', function() {
  return gulp.src([
    'assets/js/*.js',
    'assets/styles/*.css',
    'assets/fonts/*'
  ])
    .pipe(copy('.tmp/public', {prefix: 1}));
});
