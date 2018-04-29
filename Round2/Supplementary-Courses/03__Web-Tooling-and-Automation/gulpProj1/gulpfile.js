var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('default', defaultTask);

function defaultTask(done) {
  // place code for your default task here
  done();
}

 browserSync.init({
     server: "./"
 });
 browserSync.stream();
