import fs from 'node:fs';

fs.appendFile('my-file', 'File was created by Node.js', (err) => {
    if(err) throw err;  
    console.log('File saved');
})