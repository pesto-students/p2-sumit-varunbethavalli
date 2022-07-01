// 1.Under the hood understanding of how a Generator works.
// 2.Under the hood understanding of how Async/await works.
const addresses = {
    "jagan":"21/1, East Coast",
    "ravi": "7, West Coast",
    "mohan": "72, Pacific West"
};

async function asyncawait(userName){
    console.log("starting the aa method");
    if (userName in addresses){
        let name = await taskGetName(userName);
        let address = await taskGetAddress(userName);
        let work = await taskGetWorkDetails(userName);
    }
}

function taskGetName(name){
    setTimeout(() => {
        return "Mr/ Ms" +  " . " + name.toUpperCase();
    },2000);
}

function taskGetAddress(name){
    setTimeout(() => {
        return "Appartment no" +  ": " + addresses.get(name);
    },3000);
}

function task3(){
    setTimeout(() => {
        return "Appartment no" +  ": " + addresses.get(name);
    },5000);
}