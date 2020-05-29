# @runspace/runtime

Runspace Runtime - allows you to create node (machine) administration javascript functions written in nodejs.

[![Maintainability](https://api.codeclimate.com/v1/badges/d3d9801e380c20fdb785/maintainability)](https://codeclimate.com/github/runspacegit/runtime/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/d3d9801e380c20fdb785/test_coverage)](https://codeclimate.com/github/runspacegit/runtime/test_coverage)

## Runspace\lang

### Example

```javascript
module.exports = (context, callback) => {
  console.info("Hello, World!")
  callback("Hello, World!")
};
```

will return:

```json
{
  "log": "Hello, World!",
  "data": "Hello, World!"
}
```

### Features

#### Available Node Modules:

- `node-fetch`
- `os`
- `fs`
- `path`
- `child_process`

#### Language possibilities

All Node.js `>=10` features.

#### Console

You can log something using these functions:

```javascript
console.debug(...someting);
console.log(...someting);
console.info(...someting);
console.warn(...someting);
console.error(...someting);
console.dir(...someting);
console.trace(...someting);
```

## Usage

See examples in `./examples`
