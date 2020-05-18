import expenseReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state',()=>
{
const action = expenseReducer(undefined,{type:'@@INIT'})
expect(action).toEqual([])

})

test('should remove expense',()=> {

    const action ={
        type:'REMOVE_EXPENSE',
        id:expenses[1].id
    };
    const state = expenseReducer(expenses,action)
    expect(state).toEqual([ expenses[0],expenses[2]  ])
})