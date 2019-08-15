const fs = require('fs');

const fsExtra = require('fs-extra');

const FileSystem = require('./__mocks__/fs');

const myFileSystem = new FileSystem();

console.log(__dirname);

// Implemented with callbacks

myFileSystem.readFile (`${__dirname}/data/person.json`,
    (error, fileString) => {
        if(error) {
            console.error('ERROR');
        } else {
            let obj = JSON.parse(fileString);
            obj.firstName = 'Lillian';
            fs.writeFile(`${__dirname}/data/person.json`, JSON.stringify(obj), () => {
                console.log('done');
            })
        }
    });

// Implemented with Promises
// Can't currently run at the same time

myFileSystem.readFilePromises (`${__dirname}/data/person.json`)
    .then(fileString => {
        let obj = JSON.parse(fileString.toString());
        obj.lastName = 'Gales';
        fs.writeFile(`${__dirname}/data/person.json`, JSON.stringify(obj), (error) => {
            console.log('done');
        })
    }).catch(error => console.error(error));

