const gulp = require('gulp');
const shell = require('gulp-shell');

gulp.task('generate', shell.task('npx eleventy'));