console.log('destructuring')
 //object destrucutring

const person = {
name:'satyendra singh',
age : 21,
location : {
    city:'prayagraj',
    temp : 234
}

};

const {name:s,age}=person;
//const name=person.name;
//const age=person.age;

const {city,temp} =person.location;

console.log ( s, ' is ' , age ,' . ');

console.log( 'lives in ' + city + ' with ' + temp);

// arrary distrucuring

const array=['india' , 'uttarpradesh' , 'chitrakoot' , 'karwi' ];
const [,,,state,dist ,] =array;

console.log('state '+state+' district '+ dist);