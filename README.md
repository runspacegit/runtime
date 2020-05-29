# @runspace/runtime

Runspace Runtime - allows you to create node administration javascript functions written in nodejs.

## Runspace\lang

### Example

```javascript
module.exports = (context, callback) => {
  console.info("Hello, World!");
  callback("Hello, World!");
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

## Usage

See examples in `./examples`
