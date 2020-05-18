import {AddExpensePage} from '../../components/AddExpensePage';
import React from 'react';
import {shallow} from 'enzyme';
import expenses from '../fixtures/expenses';
import { addexpense } from '../../actions/expenses';
 
test ('should render add expense page correctly', () => {
const addexpense = jest.fn();
const history = {push:jest.fn()}
const wrapper = shallow(<AddExpensePage  onSubmit={addexpense} history={history} />);
expect(wrapper).toMatchSnapshot();

})



test ('should handle on submit', () => {

    const addexpense = jest.fn();
    const history = {push:jest.fn()}
    const wrapper = shallow(<AddExpensePage  addexpense={addexpense} history={history} />);
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(addexpense).toHaveBeenLastCalledWith(expenses[1]);

})

