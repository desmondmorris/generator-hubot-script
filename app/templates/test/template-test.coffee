chai = require 'chai'
sinon = require 'sinon'
chai.use require 'sinon-chai'

expect = chai.expect

Robot       = require 'hubot/src/robot'
TextMessage = require('hubot/src/message').TextMessage

describe '<%= scriptName %>', ->
  robot = {}
  user = {}
  adapter = {}

  beforeEach (done) ->
    # Setup any environment variables
    # process.env.HUBOT_EXAMPLE_ENV_VARIABLE = "1"

    # Create new robot, without http, using mock adapter
    robot = new Robot null, "mock-adapter", false

    robot.adapter.on "connected", ->
      # load modules and configure it for the robot. This is in place of
      # external-scripts
      require('../src/<%= scriptName %>')(@robot)

      user = robot.brain.userForId "1", {
        name: "user"
        room: "#test"
      }

      adapter = robot.adapter

    robot.run()

    done()

  afterEach ->
    robot.shutdown()

  it 'responds to hello', (done) ->
    adapter.on "reply", (envelope, strings) ->
      expect(strings[0]).to.contain 'hello!'
      done()

    adapter.receive(new TextMessage user, "hubot hello")

  it 'hears orly', (done) ->
    adapter.on "send", (envelope, strings) ->
      expect(strings[0]).to.contain 'yarly'
      done()

    adapter.receive(new TextMessage user, "orly?")
