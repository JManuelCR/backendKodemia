const fs = require('fs');

fs.appendFile('/home/manu/Kodemia/Backend/03-fs/koders.txt', 'utf-8', (error, data) => {
        if(error) {
            console.error(error);
            return;
        }else {
            console.log(data);
        }
})