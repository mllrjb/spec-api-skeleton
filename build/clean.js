'use strict';

const gulp = require('gulp')
    , fs = require('fs-extra');

gulp.task('clean', () => {
  fs.removeSync('dist');
});
