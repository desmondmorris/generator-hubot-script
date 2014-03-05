# Hubot: <%= name %>

<%= scriptDescription %>

See [`src/<%= name %>.coffee`](src/<%= name %>.coffee) for full documentation.

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
