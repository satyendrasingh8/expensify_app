
import React from 'react';
import { shallow } from 'enzyme';
import {ExpensesSummary}   from '../../components/ExpensesSummary';

test('should correctly render expense summary with 1 expenses', () => {
const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={273} />)
expect(wrapper).toMatchSnapshot();
})


test('should correctly render expense summary with multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={2466783} />)
    expect(wrapper).toMatchSnapshot();
       
})