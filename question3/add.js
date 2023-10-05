const fs = require('fs');
const path = require('path');
const logsDirectory = path.join(__dirname, 'Log Files');

const createLogFiles = () => {
    fs.mkdirSync(logsDirectory, { recursive: true });
    process.chdir(logsDirectory);
    console.log(`Changed working directory to: ${logsDirectory}`);

    for (let i = 1; i <= 10; i++) {
        const fileName = `log${i}.txt`;
        fs.writeFileSync(fileName, `This is log file ${i}`);
        console.log(`Created file: ${fileName}`);
    }
};

console.log('Creating log files...');
createLogFiles();
