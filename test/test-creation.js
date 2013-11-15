/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var helpers = require('yeoman-generator').test;


describe('hubot-script generator', function () {
  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
      if (err) {
        return done(err);
      }

      this.app = helpers.createGenerator('hubot-script:app', [
        '../../app'
      ]);
      done();
    }.bind(this));
  });

  it('creates expected files', function (done) {
    var expected = [
      // add files you expect to exist here.
      'script/bootstrap',
      'script/test',
      'src/hello-world.coffee',
      'test/hello-world-test.coffee',
      '.gitignore',
      '.travis.yml',
      'index.coffee',
      'package.json',
      'README.md'
    ];

    helpers.mockPrompt(this.app, {
      'scriptName': 'testScript',
      'scriptDescription': 'testDescription',
      'scriptKeywords': 'hubot, hubot-script'
    });

    this.app.options['skip-install'] = true;
    this.app.run({}, function () {
      helpers.assertFiles(expected);
      done();
    });
  });
});
