'use strict';

const gulp = require('gulp')
    , spawn = require('child_process').spawn

gulp.task('docs', (done) => {
  const mkdocs = spawn('mkdocs', ['build']);
  mkdocs.on('close', code => {
    if (code !== 0) {
      return done(new Error(`mkdocs existed with code ${code}`));
    }
    done();
  });
});
