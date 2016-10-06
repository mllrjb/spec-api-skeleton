'use strict';

const gulp = require('gulp')
    , runSequence = require('run-sequence');

gulp.task('copy.app', () => {
  return gulp.src('app/**/*.*')
    .pipe(gulp.dest('dist'));
});

gulp.task('dist', done => runSequence('clean', 'docs', 'copy.app', done));
