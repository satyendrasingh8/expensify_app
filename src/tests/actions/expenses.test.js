import {startAddExpense, addexpense,removeExpense,editExpense} from '../../actions/expenses';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

test('testing removeExpense from actions',() => {
    const action = removeExpense({id:'123wssdjfgyh'});
    expect(action).toEqual({
        id:'123wssdjfgyh',
        type:'REMOVE_EXPENSE'
    })
})


test('testing editExpense from actions',()=>{
const action = editExpense('123asd',{description:"this is Satyendra singh"});
expect(action).toEqual({id:'123asd',
updates:{
    description:"this is Satyendra singh"
},
type:'EDIT_EXPENSE'})
});

test('testing addexpense from action', () => {
 
    const action = addexpense(expenses[2]);
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:expenses[2]
    })

})

test('should add expense to database and store',(done)=> {
const store = createMockStore({});
const expenseData ={
    description:'laptop',
    note:'HP laptop',
    amount:800000,
    createdAt:1000
}
store.dispatch(startAddExpense(expenseData)).then(()=>{
const actions =store.getActions();
expect(actions[0]).toBe({
    type:'ADD_EXPENSE',
    expense:{
        id:expect.any(String),
        ...expenseData
    }
});
return database.ref(`expenses/${actions[0].expense.id}`).once('value');

}).then(()=>{
    expect(snapshot.val()).toEqual(expenseData);
    done();
    });  
});



// test('testing default addexpense from actions', () => {
// const action = addexpense();
//expect(action).toEqual({
 //  type:'ADD_EXPENSE',
 //   expense: {id:expect.any(String),
//    description:'Gas bill',
   // note:'',
 //   amount:0,
    //createdAt:0
  //  }
//})

//}) 