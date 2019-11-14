const fs = require('fs');
const util = require('util');

function main() {
    const pwd = `/Users/skilic/Downloads/test`;
    
    const promiseDirectory = util.promisify(fs.readdir);
    const promiseFiles = util.promisify(fs.readFile)

    const pList = promiseDirectory(pwd);

    pList.then(fileList => {
        fileList.map(file => {
            console.log(file)
            const filePath = `${pwd}/${file}`

            promiseFiles(filePath, "utf8").then(contents => {
                console.log(contents);
            }).catch(error => console.log(error));
        });
    });
}

main();