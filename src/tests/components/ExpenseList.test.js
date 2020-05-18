import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseList} from '../../components/ExpenseList';
import expenses from  '../fixtures/expenses';


test('should render expenseList from expenses',() => {
   const wrapper = shallow(<ExpenseList expenses={expenses} />);
   expect(wrapper).toMatchSnapshot();
});
