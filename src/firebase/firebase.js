import * as firebase from 'firebase';



const firebaseConfig = {
    apiKey: "AIzaSyDjGSHn4f93rd7miw3P0YPqGeY8cDvd4VA",
  authDomain: "expensify-5c5de.firebaseapp.com",
  databaseURL: "https://expensify-5c5de.firebaseio.com",
  projectId: "expensify-5c5de",
  storageBucket: "expensify-5c5de.appspot.com",
  messagingSenderId: "1043618732988",
  appId: "1:1043618732988:web:313a156011103cbaefe9b9",
  measurementId: "G-93QG55NNJ3"
   
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();
  export {firebase,database as default}; 





















//child_removed

//database.ref('expenses').on('child_removed',(snapshot)=>{
 // console.log(snapshot.key,snapshot.val());
//})

//child_changed


//database.ref('expenses').on('child_changed',(snapshot)=>{
 // console.log(snapshot.key,snapshot.val());
//});
//database.ref('expenses').on('value',(snapshot)=>{
  //const expenses = [];
 // snapshot.forEach((childSnapshot)=>{
   // expenses.push({
    //  id:childSnapshot.key,
   //   ...childSnapshot.val()
   // });
  //});
 // console.log(expenses);
//});

 // database.ref('expenses').once('value').then((snapshot)=> {
  //const expenses =[];
  //snapshot.forEach((childSnapshot)=> {
   // expenses.push( {
   //   id:childSnapshot.key,
   //   ...childSnapshot.val()
   // });
 // });
 // console.log(expenses);
  //});



// database.ref('expenses').push({
 //  description:'sat',
  //  note:'this is',
   // amount:123,
  //  createdAt:0
// });
 
 //database.ref('expenses').push({
 // description:'sffat',
  // note:'this igs',
  // amount:344,
  // createdAt:0
//});


//database.ref('expenses').push({
 // description:'sat',
  // note:'this is',
   //amount:14423,
   //createdAt:0
//});

  //database.ref('notes').push({
      //title:'seggond data',
    //  body:'this is mvy extended title'
  //});
 
 
 
 
 
 
 
 
  // const notes = [{
   //  id:12,
    // title:'note',
   //  body:'this is my note' 
  //},
  //{
   // id:162,
    //title:'other note',
   // body:'this is second note' 
  //}
//];

//database.ref('notes').set(notes);

//database.ref().on('value',(snapshot)=>{
  //  const val = snapshot.val();
//console.log(`${val.name} is a ${val.job.title} at ${ val.job.company}.`);
//},(e)=>{
 //   console.log('failed',e);
//})


  
//database.ref('location/city').once('value').then((snapshott)=> {
  //const val =  snapshott.val();
//console.log('data is fetched',val);
//}).catch((e)=> {
 //console.log('failed to fetch',e);

//});



//  database.ref().set({
 //  name:'Satyendra Singh',
   //age: 20,
  // stresslevel:7,
 //  job:{
  //   title:'web developer',
   //  company:'google'  
  // },
  //isSingle:false,
  //location : {
    //  city:'prayagraj',
    //  country:'india'
 // }
 // }).then(()=> {
   // console.log('first Data is saved');
   //} ).catch((e)=> {
    //  console.log(e);
 //});



  //database.ref().set(null);
  //database.ref().update({
    //  stresslevel:9,
      //'job/company':'Amazon',
     // 'location/city':'Mumbai'
 // });

  //database.ref('isSingle').remove().then(()=>{
   //console.log('data is removed');
  //}).catch((e)=>{
  //console.log('failed',e);
 // });

