'use strict';
var gutil = require('gulp-util');
var through = require('through2');
var cheerio = require('cheerio');
var hljs = require('highlight.js');

module.exports = function (options) {
  var highlight = function (str) {
    var $ = cheerio.load(str);
    $('code').each(function (index, code) {
      $(code).html(hljs.highlightAuto($(code).text()).value);
    });
    return $.html() || str;
  };
  return through.obj(function (file, enc, cb) {
    if (file.isNull()) {
      this.push(file);
      return cb();
    }

    if (file.isStream()) {
      this.emit('error', new gutil.PluginError('gulp-highlight', 'Streaming not supported'));
      return cb();
    }

    try {
      file.contents = new Buffer(highlight(file.contents.toString()), options);
    } catch (err) {
      this.emit('error', new gutil.PluginError('gulp-highlight', err));
    }

    this.push(file);
    cb();
  });
};
