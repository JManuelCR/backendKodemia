const fs = require('fs');

function readJson(newKoder){    
    fs.readFile('./koders.json', 'utf8', (error, data) => {
        if(error) {
            console.error(error);
            return;
        }
        const obj = JSON.parse(data);
        const arrayKoders = obj.koders; 
        arrayKoders.push(newKoder)      
        console.log(arrayKoders);
        addKoder(obj);
        // const newObj = JSON.stringify(newdata);
        // console.log(newObj);
})
}

function addKoder(dataToSave){
    fs.writeFile('./koders.json', JSON.stringify(dataToSave,null,2), 'utf8', (error) =>{
        if(error) {
            console.error(error);
            return;
        }
        console.log('Se ha agregado el Koder');
    }) 
}

readJson({ "id": 5, "name": "Xavy", "lastName": "Escamilla", "age": 25 });