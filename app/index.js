//'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');

var extractScriptName = function (_, appname) {
  var slugged = _.slugify(appname),
    match = slugged.match(/^hubot-(.+)/);
  if (match && match.length === 2) {
    return match[1].toLowerCase();
  }
  return slugged;
};

var prepareKeywords = function(keywords) {
  var ky = keywords.split(',');
  for (i = 0; i < ky.length; ++i) {
    ky[i] = '"' + ky[i].trim() + '"';
  }
  return '[' + ky.join(',') + ']';
}

var HubotScriptGenerator = module.exports = function HubotScriptGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(HubotScriptGenerator, yeoman.generators.Base);

HubotScriptGenerator.prototype.askFor = function askFor() {
  var done = this.async();
  var scriptName = extractScriptName(this._, this.appname);

  // have Yeoman greet the user.
  //console.log(this.yeoman);

  var prompts = [
    {
      name: 'scriptName',
      message: 'Base name of script',
      default: scriptName
    },
    {
      name: 'scriptDescription',
      message: 'Description',
      default: 'A hubot script that does the things'
    },
    {
      name: 'scriptKeywords',
      message: 'Keywords',
      default: 'hubot, hubot-scripts'
    }
  ];


  this.prompt(prompts, function (props) {
    this.scriptName = props.scriptName.toLowerCase();
    this.appname = 'hubot-' + this.scriptName;
    this.scriptDescription = props.scriptDescription;
    this.scriptKeywords = prepareKeywords(props.scriptKeywords);

    done();
  }.bind(this));
};

HubotScriptGenerator.prototype.app = function app() {

  this.userName = this.user.git.username;
  this.userEmail = this.user.git.email;

  this.mkdir('script');
  this.copy('script/bootstrap', 'script/bootstrap');
  this.copy('script/test', 'script/test');

  this.mkdir('src');
  this.copy('src/template.coffee', 'src/' + this.scriptName + '.coffee');

  this.mkdir('test');
  this.copy('test/template-test.coffee', 'test/' + this.scriptName + '-test.coffee');

  this.copy('Gruntfile.js', 'Gruntfile.js');
  this.copy('gitignore', '.gitignore');
  this.copy('.travis.yml', '.travis.yml');
  this.copy('index.coffee', 'index.coffee');
  this.copy('_package.json', 'package.json');
  this.copy('README.md', 'README.md');
};
