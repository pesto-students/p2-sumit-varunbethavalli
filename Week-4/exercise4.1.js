let getNumber = new Promise(function(resolve,reject){
    let rand = Math.random();
const time = setTimeout(()=> {
if (rand/5 == 0){
    resolve();
}else{
    reject();
}},1000);

});
getNumber.then(val => console.log('divisible'));
// getNumber.catch(val => console.log('error-$(val)'));