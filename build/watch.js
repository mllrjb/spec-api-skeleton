'use strict';

const gulp = require('gulp')
    , reload = require('./serve').reload
    , runSequence = require('run-sequence');

gulp.task('watch', () => {
  return gulp.watch('docs/**/*.*', () => runSequence('clean', 'docs', reload));
});
