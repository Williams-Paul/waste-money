var gulp = require('gulp');

var paths = {
  scripts: 'assets/js/*/**.js',
  css: 'assets/styles/*/**.css'
}

gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['copy']);
  gulp.watch(paths.css, ['copy']);
});
