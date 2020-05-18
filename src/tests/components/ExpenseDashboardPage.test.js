import React from 'react';
import {shallow} from 'enzyme';
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage';
import expenses from  '../fixtures/expenses';


test('should render expenseDashboardPage from expenses',() => {
   const wrapper = shallow(<ExpenseDashboardPage  />);
   expect(wrapper).toMatchSnapshot();
});
