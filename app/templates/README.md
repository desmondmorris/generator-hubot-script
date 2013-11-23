# Hubot: <%= scriptName %>

<%= scriptDescription %>

See [`src/hello-world.coffee`](src/hello-world.coffee) for full documentation.

## Installation

Add **hubot-<%= scriptName %>** to your `package.json` file:

```json
"dependencies": {
  "hubot": ">= 2.5.1",
  "hubot-scripts": ">= 2.4.2",
  "hubot-<%= scriptName %>": ">= 1.0.0",
  "hubot-hipchat": "~2.5.1-5",
}
```

Add **hubot-<%= scriptName %>** to your `external-scripts.json`:

```json
["hubot-<%= scriptName %>"]
```

Run `npm install`

## Sample Interaction

```
user1>> hubot hello
hubot>> hello!
```
