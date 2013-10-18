//'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');

var extractGeneratorName = function (_, appname) {
  var slugged = _.slugify(appname),
    match = slugged.match(/^generator-(.+)/);

  if (match && match.length === 2) {
    return match[1].toLowerCase();
  }

  return slugged;
};

var HubotScriptGenerator = module.exports = function HubotScriptGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(HubotScriptGenerator, yeoman.generators.Base);

HubotScriptGenerator.prototype.askFor = function askFor() {
  var cb = this.async();
  var generatorName = extractGeneratorName(this._, this.appname);

  // have Yeoman greet the user.
  //console.log(this.yeoman);

  var prompts = [
    {
      name: 'scriptName',
      message: 'Name',
      default: generatorName
    },
    {
      name: 'scriptDescription',
      message: 'Description',
      default: 'A hubot script that does the things'
    },
    {
      name: 'npmKeywords',
      message: 'Keywords',
      default: 'hubot, hubot-scripts'
    }
  ];


  this.prompt(prompts, function (props) {
    this.scriptName = props.scriptName;
    this.scriptDescription = props.scriptDescription;
    this.npmKeywords = props.npmKeywords.split(",");

    cb();
  }.bind(this));
};

HubotScriptGenerator.prototype.app = function app() {

  this.userName = this.user.git.username;
  this.userEmail = this.user.git.email;

  this.mkdir('script');
  this.copy('script/bootstrap', 'script/bootstrap');
  this.copy('script/test', 'script/test');

  this.mkdir('src');
  this.copy('src/hello-world_coffee', 'src/hello-world.coffee');

  this.mkdir('test');
  this.copy('test/hello-world_test_coffee', 'test/hello-world_test.coffee');

  this.copy('.gitignore', '.gitignore');
  this.copy('.travis.yml', '.travis.yml');
  this.copy('index.coffee.dist', 'index.coffee');
  this.copy('_package.json', 'package.json');
  this.copy('README.md', 'README.md');
};
