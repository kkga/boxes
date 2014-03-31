# [gulp](http://gulpjs.com)-highlight [![Build Status](https://secure.travis-ci.org/johannestroeger/gulp-highlight.png?branch=master)](http://travis-ci.org/johannestroeger/gulp-highlight)

## Install

```
npm install --save-dev gulp-highlight
```


## Example

```js
var gulp = require('gulp');
var highlight = require('gulp-highlight');

gulp.task('default', function () {
	gulp.src('src/app.html')
		.pipe(highlight())
		.pipe(gulp.dest('dist'));
});
```

## License

MIT © [Johannes Troeger](https://github.com/johannestroger)
