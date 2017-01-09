var liveServer = require("live-server");

var params = {
    port: 8181,
    host: "ephuszew0146",
    root: "./app",
    open: true,
    wait: 1000,
    mount: [['/components', './node_modules']],
    logLevel: 2
};

liveServer.start(params);