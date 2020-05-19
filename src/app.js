//import subtractt, {square,add} from './utils.js'
//console.log('satyendra singh');
//console.log(square(4));
//console.log(add(3,8))
//console.log(subtractt(100,4));

//install ,import  and use them

//import validator from 'validator';
//console.log(validator.isEmail('sat@gmail.com'));

import React from "react";
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import 'react-dates/lib/css/_datepicker.css';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter  from './routers/AppRouter';
import store from './store/configureStore';
import {addexpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
  //const store = configureStore();


  store.dispatch(addexpense({description:'Water bill' , amount:5000}))
  store.dispatch(addexpense({ description:'Gas bill',createdAt:1000}));
  store.dispatch(addexpense({description:'rent' , amount:10950}))


  
  /*
  store.dispatch(setTextFilter('water'));

 setTimeout(() => {
  store.dispatch(setTextFilter('bill'));
}, 3000);
*/

  const state=store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
  console.log(store.getState());

const jsx =(
<Provider store={store}>
<AppRouter />
</Provider>
);
  ReactDOM.render(jsx  , document.getElementById('app'));
  