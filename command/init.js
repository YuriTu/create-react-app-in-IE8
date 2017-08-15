"ust strict"
const { exec } = require("child_process");
const co = require("co");
const prompt = require("co-prompt");
const chalk = require("chalk");

const gitUrl = "https://github.com/MATRIX-RENN/templates-React-ES7.git";

module.exports = () => {
    co(function* () {
        let projectName = yield prompt("Project name:[my-app]");
        let branch = yield prompt("Git branch:[master]");
        projectName || (projectName = "my-app");
        branch || (branch = "master");

        const cmdStr = `git clone ${gitUrl} ${projectName}&& cd ${projectName} && git checkout ${branch}`;

        console.log(chalk.white(" \n Strart generating..."));

        exec(cmdStr, (error, stdout,stderr) => {
            if (error){
                console.log("you has a error !!!")
                console.log(error)
                process.exit();
            }
            console.log(chalk.green(`
                Success! Created ${projectName}.
                Let's create react app in IE8.
                
                Inside that directory, you can run several commands:
                  * npm run dev: Starts the development server.
                  * npm run build: Bundles the app into dist for production.
                
                We suggest that you begin by typing:
                  cd ${projectName}
                  npm run build
                
                Enjoy yourself!`
            ));
            process.exit();
        });
    });
};