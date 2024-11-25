const fs = require('fs').promises;
const filePath = './database.json';


async function readData() {

    try {
        const data = await fs.readFile(filePath, 'utf-8');
        
    } catch (error) {
        throw new Error('File Error. Please check format');

        
    }
    
}

async function writeData(data) {
    try {
        await fs.writeFile(filePath, JSON.stringify(data, null,2));
    } catch (error) {
        throw new Error('File Error. Please check format');
    }
    
}

module.exports = {readData, writeData};