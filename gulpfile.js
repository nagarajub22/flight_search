const { series, src, dest } = require('gulp')
const { css } = require('./gulp/css');
const { js } = require('./gulp/scripts');


function moveHtmlToDist() {
    return src([
        './src/index.html'
    ])
    .pipe(
        dest('./dist')
    );
}


function moveFilesToDist() {
    return src([
        './src/files/*.*'
    ])
    .pipe(
        dest('./dist/files')
    );
}


function moveImgToDist() {
    return src([
        './src/img/*.*'
    ])
    .pipe(
        dest('./dist/img')
    );
}

exports.build = series(css, js, moveHtmlToDist, moveFilesToDist, moveImgToDist);