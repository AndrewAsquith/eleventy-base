const gulp = require("gulp");
require('require-dir')('./_gulp');

gulp.task('build',  gulp.parallel('generate','styles','scripts'));


