# Hubot: <%= scriptName %>

<%= scriptDescription %>

See [`src/hello-world.coffee`](src/hello-world.coffee) for full documentation.

## Installation

In hubot project repo, run:

`npm install <%= scriptName %> --save`

Then add **<%= scriptName %>** to your `external-scripts.json`:

```json
["<%= scriptName %>"]
```

## Sample Interaction

```
user1>> hubot hello
hubot>> hello!
```
