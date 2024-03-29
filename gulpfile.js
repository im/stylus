'use strict';

const { series, src, dest, watch } = require('gulp');
const stylus = require('gulp-stylus');
const autoprefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-cssmin');

function compile() {
    return src('./src/*.styl')
        .pipe(stylus())
        .pipe(autoprefixer({
            browsers: ['ie > 9', 'last 2 versions'],
            cascade: false
        }))
        // .pipe(cssmin())
        .pipe(dest('./lib'));
}

function copyfont() {
    return src('./src/fonts/**')
        .pipe(cssmin())
        .pipe(dest('./lib/fonts'));
}



exports.default = watch(['./src/*.styl', './src/mixins/*.styl'], series(compile, copyfont));
