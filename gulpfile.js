const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');

function compileSass() {
    console.log('🎨 编译SCSS...');
    return gulp.src('./source/scss/*.scss')
        .pipe(sass({
            outputStyle: 'expanded'
        }).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest('./source/css'))
        .pipe(cleanCSS())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./source/css'))
        .on('end', () => console.log('✅ SCSS编译完成！BrowserSync会自动刷新页面'));
}

function watchFiles() {
    console.log('👀 开始监听SCSS文件变化...');
    console.log('💡 提示：请确保在另一个终端中运行 "hexo server" 以启用热加载');
    gulp.watch(['./source/scss/**/*.scss'], gulp.series(compileSass));
}

function buildProd() {
    return gulp.src('./source/scss/*.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(cleanCSS({ level: 2 }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./source/css'));
}

exports.sass = compileSass;
exports.watch = watchFiles;
exports.build = buildProd;
exports.default = gulp.series(compileSass, watchFiles);