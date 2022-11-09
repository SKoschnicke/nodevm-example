# Example project for demonstrating vm2 issue

Run
```
npm install
npm start
```

You'll get the following error (paths shortened):
```
.../nodevm-example/node_modules/vm2/lib/bridge.js:487
				throw thisFromOtherForThrow(e);
				^

TypeError [ERR_INVALID_ARG_TYPE]: The "buf" argument must be an instance of ArrayBufferView. Received an instance of Object
    at new NodeError (internal/errors.js:322:7)
    at Object.randomFillSync (internal/crypto/random.js:85:11)
    at VM2 Wrapper.apply (.../nodevm-example/node_modules/vm2/lib/bridge.js:485:11)
    at vm.js:4:12
    at VM2 Wrapper.apply (.../nodevm-example/node_modules/vm2/lib/bridge.js:485:11)
    at NodeVM.run (.../nodevm-example/node_modules/vm2/lib/nodevm.js:426:23)
    at Object.<anonymous> (.../nodevm-example/index.js:10:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1114:10)
    at Module.load (internal/modules/cjs/loader.js:950:32) {
  code: 'ERR_INVALID_ARG_TYPE'
```
