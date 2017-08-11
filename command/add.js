'ust strict'

const co = require("co")
const prompt = require("co-prompt")
const config = require("../templates.json")
const chalk = require("chalk")
const fs = require("fs")

module.exports = () => {
    console.log("is in")
    co(function* () {
        let telName = yield prompt("templates name:")
        let gitUrl = yield prompt("git url:")
        let branch = yield prompt("branch:")

        // 重复添加
        if(!config.tpl[telName]){
            config.tpl[telName] = {};
            config.tpl[telName]["url"] = gitUrl.replace(/[\u0000-\u0019]/g, '')
            config.tpl[telName]["branch"] = branch
        } else {
            console.log("has existed!");
            process.exit();
        }

        fs.writeFile(__dirname + "/../templates.json",JSON.stringify(config),"utf-8",err => {
            if(err){
                console.log(err)


            }
            console.log(chalk.green('New template added!\n'))
            console.log(chalk.grey('The last template list is: \n'))
            console.log(config)
            console.log('\n')
            process.exit()
        })
    })
}