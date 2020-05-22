
const promise = new Promise( (resolve,reject) => {
    setTimeout(()=>{
       // resolve({
           // name: 'satyendra singh',
           // age:21 )}
      reject('something went wrong')


    },5000);

});
console.log('before');
promise.then(() => {
//console.log(data);
}).catch((error)=> {
console.log(error);
})

console.log('after');