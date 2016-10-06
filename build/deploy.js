'use strict';

const gulp = require('gulp')
    , ghpages = require('gh-pages')
    , path = require('path')
    , runSequence = require('run-sequence');

gulp.task('ghpages', (done) => {
  ghpages.publish(('dist'), {
    remote: 'upstream'
  }, done);
});

gulp.task('deploy', done => runSequence('dist', 'ghpages', done));
