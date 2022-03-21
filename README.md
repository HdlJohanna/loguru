Loguru - Logging API for Node.JS

* Log:|string|number|Any[String]
*
 
Sample Usage:
```js
const loguru = require('loguru');
const logger = new loguru.Logger();

const BWFilter = new loguru.LoguruFilter("bad")

function HelloThere(Msg) {
    logger.info(`Hello there, ${Msg.Parse(BWFilter)}`);
}
    
let name = new loguru.Message("World!");
HelloThere(name);
```
