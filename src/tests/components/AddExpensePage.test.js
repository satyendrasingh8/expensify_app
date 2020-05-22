import {AddExpensePage} from '../../components/AddExpensePage';
import React from 'react';
import {shallow} from 'enzyme';
import expenses from '../fixtures/expenses';
import { startAddExpense } from '../../actions/expenses';
 
test ('should render add expense page correctly', () => {
const startAddExpense = jest.fn();
const history = {push:jest.fn()}
const wrapper = shallow(<AddExpensePage  startAddExpense={startAddExpense} history={history} />);
expect(wrapper).toMatchSnapshot();

})



test ('should handle on submit', () => {

    const startAddExpense = jest.fn();
    const history = {push:jest.fn()}
    const wrapper = shallow(<AddExpensePage  startAddExpense={startAddExpense} history={history} />);
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startAddExpense).toHaveBeenLastCalledWith(expenses[1]);

})

