const fs = require('fs');
const path = require('path');
const logsDirectory = path.join(__dirname, 'Log Files');

const removeFiles = (dirPath) => {
    fs.readdirSync(dirPath).forEach((file) => {
        const filePath = path.join(dirPath, file);
        fs.unlinkSync(filePath);
        console.log(`Deleted file: ${file}`);
    });
};

if (fs.existsSync(logsDirectory)) {
    console.log('Removing log files...');
    removeFiles(logsDirectory);
    fs.rmdirSync(logsDirectory);
    console.log(`Removed directory: ${logsDirectory}`);
} else {
    console.log(`Directory ${logsDirectory} does not exist.`);
}
