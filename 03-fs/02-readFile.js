const fs = require('fs');

fs.readFile('/home/manu/Kodemia/Backend/03-fs/koders.txt', 'utf-8', (error, data) => {
        if(error) {
            console.error(error);
            return;
        }else {
            console.log(data);
        }
})