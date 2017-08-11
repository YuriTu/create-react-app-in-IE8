'ust strict'
const { exec } = require("child_process")
const co = require("co")
const prompt = require("co-prompt")
const config = require("../templates.json")
const chalk = require("chalk")

module.exports = () => {
    co(function* () {
        let telName = yield prompt("templates name:")
        let projectName = yield prompt("Project name:")
        let gitUrl,branch;

        if(!config.tpl[telName]){
            console.log(chalk.red(" \n X Template not exit!"))
        }
        gitUrl = config.tpl[telName].url
        branch = config.tpl[telName].branch

        let cmdStr = `git clone ${gitUrl} && cd ${projectName} && git checkout ${branch}`;

        console.log(chalk.white(" \n Strart generating..."));

        exec(cmdStr, (error,stdout,stderr) => {
            if(error){
                console.log("you has a error !!!")
                console.log(error)
                process.exit();
            }
            console.log(chalk.green("\n conplete"))
            console.log(` \n cd ${projectName} && npm install `)
            process.exit()
        })
    })
}