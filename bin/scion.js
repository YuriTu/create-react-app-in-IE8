#!/usr/bin/env node --harmony
'use strict'

process.env.NODE_PATH = __dirname + "/../node_modules/"

var program = require("commander");

program.version(require("../package.json").version)

program.usage("<command>")

const add = require("../command/add")

program
    .command("add")
    .description("add a new templates")
    .alias("a")
    .action(() => {
        return add()
    })

program
    .command("init")
    .description("Generate a new project")
    .alias("i")
    .action(() => {

        require("../command/init")()
    })


program
    .parse(process.argv)


if(!program.args.length){
    program.help()
}
