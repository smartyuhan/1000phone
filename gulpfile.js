let{src,dest,watch} = require('gulp')
let htmlmin = require('gulp-htmlmin')
let sass = require('gulp-sass')
let rename = require('gulp-rename')
let uglify = require('gulp-uglify')
let concat = require('gulp-concat')
let imagemin = require('gulp-imagemin')
let cssnano = require('gulp-cssnano')
let babel = require('gulp-babel')
//发布任务
function fnHTML(){
	return src('./src/pages/*.html')
	.pipe(htmlmin())
	.pipe(dest('./dist/pages'))
}
function fnSass(){
    return src('./src/sass/*.scss')
    .pipe(sass()) //进行编译
    .pipe(cssnano())  //压缩CSS
    .pipe(rename({suffix : '.min'})) 
    .pipe(dest('./dist/css'));
}
function fnCopyIndex(){
	return src('./src/index.html')
	.pipe(dest('./dist'))
}
function fnJS(){
	return src('./src/js/*.js')
	.pipe(babel({
            presets: ['@babel/env']
        }))
	.pipe(uglify())
	.pipe(rename({suffix : '.min'}))
	.pipe(dest('./dist/js'))
}
function fnImg(){
	return src('./src/image/*')
	.pipe(imagemin())
	.pipe(dest('./dist/image'))
}
function fnWatch(){
	watch('./src/index.html',fnCopyIndex);
	watch('./src/sass/*.scss',fnSass);
	watch('./src/js/*.js',fnJS);
	watch('./src/pages/*.html',fnHTML);
	watch('./src/pages/*')
	watch('./src/image/*')
}

exports.copyIndex = fnCopyIndex
exports.img = fnImg
exports.sass = fnSass
exports.js = fnJS
exports.html = fnHTML
exports.default = fnWatch