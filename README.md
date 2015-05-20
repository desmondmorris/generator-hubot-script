# Generator: Hubot Script [![Build Status](https://secure.travis-ci.org/desmondmorris/generator-hubot-script.png?branch=master)](https://travis-ci.org/desmondmorris/generator-hubot-script)

[![NPM](https://nodei.co/npm/generator-hubot-script.png)](https://nodei.co/npm/generator-hubot-script/)

A generator for creating [Hubot](http://hubot.github.com) scripts.

## Requirements
- Node.js

## Installation
- `npm install -g generator-hubot-script`

## Usage
- `yo hubot-script [<script name>]`

## Changelog
- 1.0.1 - Introduces Grunt task runner.  Mocha tests are now run via Grunt (grunt test)
- 1.0.2 - Adds Tomdoc documentation to source file template
- 1.0.3 - Removes underscores from src & test files
- 1.0.4 - Adds grunt support for generated hubot
- 1.0.5 - Added grunt-release and better documentation for generated hubot
- 1.0.6 - Added installation instructions to readme template.
- 1.0.7 - Removes "hubot" prefix in template documentation.

## Contributors
- Desmond Morris - @desmondmorris
- Patrick Connolly - @patcon
- Dan Riti - @danriti

## Releasing

To increment version, tag and release to GitHub and npmjs.org:

- `grunt release[:patch|:minor|:major]`

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
