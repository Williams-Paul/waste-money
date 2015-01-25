var gulp = require('gulp');
var copy = require('gulp-copy');

gulp.task('copy', function() {
  return gulp.src([
    'assets/js/*.js',
    'assets/styles/*.css'
  ])
    .pipe(copy('.tmp/public', {prefix: 1}));
});
