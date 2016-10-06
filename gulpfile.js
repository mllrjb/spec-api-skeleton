'use strict';

const gulp = require('gulp')
require('require-dir')('build');

gulp.task('default', ['serve', 'watch']);
