const { NodeVM } = require("vm2");
const vm = new NodeVM({
  require: {
    external: true,
    builtin: ["*"],
    root: "./",
  },
});

vm.run(
  `
    const crypto = require('crypto');
    const rnds8Pool = new Uint8Array(256);
    crypto.randomFillSync(rnds8Pool);
    console.log("Success", rnds8Pool);
`,
  "vm.js"
);
