import {addexpense,removeExpense,editExpense} from '../../actions/expenses';

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
  const addexpensedata={
      description:'Hello Satyendra singh',
      note: 'about Satyendra singh',
      amount:100000
  }
    const action = addexpense(addexpensedata);
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{ 
  ...addexpensedata,
  id:expect.any(String),
  createdAt:0
        }
    })

})



test('testing default addexpense from actions', () => {
 const action = addexpense();
expect(action).toEqual({
   type:'ADD_EXPENSE',
    expense: {id:expect.any(String),
    description:'Gas bill',
    note:'',
    amount:0,
    createdAt:0
    }
})

}) 