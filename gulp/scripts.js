var gulp = require('gulp'),
  browserify = require('browserify'),
  watchify = require('watchify'),
  reactify = require('reactify'),
  source = require('vinyl-source-stream')
  notify = require("gulp-notify");

var scriptsDir = './assets/src/',
  buildDir = './assets/js/',
  bundleFile = 'bundle.js';


function buildScript(file, watch) {
  var props = watchify.args;
  props.entries = [scriptsDir + file];
  props.debug = true;

  var bundler = watch ?
    watchify(browserify(props)) :
    browserify(props);

  bundler.transform({
    es6: true
  }, reactify);

  function rebundle() {
    var stream = bundler.bundle();

    return stream.on('error', notify.onError({
      title: "Compile Error",
      message: "<%= error.message %>"
    }))
    .pipe(source(bundleFile))
    .pipe(gulp.dest(buildDir));
  };

  bundler.on('update', function() {
    rebundle();
    gutil.log('Rebundle...');
  });

  return rebundle();
}

gulp.task('scripts', function() {
  return buildScript('app.js', false);
});

gulp.task('scripts:watch', function() {
  return buildScript('app.js', true);
});
