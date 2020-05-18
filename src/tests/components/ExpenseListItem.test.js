import React from 'react';
import {shallow} from 'enzyme';
import expenses from  '../fixtures/expenses';
import ExpenseListItem from '../../components/ExpenseListItem'


test('should render expenseListItem from expenses', () => {
const wrapper = shallow(<ExpenseListItem expenses={expenses}  />)
expect(wrapper).toMatchSnapshot();
})