import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';



test('should render Expenseform corectly', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    
    })

test('should render ExpenseForm correctly with expense data', () => {
 const wrapper = shallow(<ExpenseForm expense={expenses[1]} />);
 expect(wrapper).toMatchSnapshot();

})


test('should render error for invalid submission', () => {
    const wrapper = shallow(<ExpenseForm  />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit',{
        preventDefault:()=>{ }
    })
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
   })
   
   test('should set description on input changes',() => {
       const value = 'new description';
const wrapper = shallow(<ExpenseForm />);
wrapper.find('input').at(0).simulate('change', {

    target:{value}
});
expect(wrapper.state('description')).toBe(value);
   })

   test('should set text on note changes',() => {
    const value = 'new note';
const wrapper = shallow(<ExpenseForm />);
wrapper.find('textarea').simulate('change', {

 target:{value}
});
expect(wrapper.state('note')).toBe(value);
})


test('should set valid amount on input changes',() => {
    const value = '50.12';
const wrapper = shallow(<ExpenseForm />);
wrapper.find('input').at(1).simulate('change', {

 target:{value}
});
expect(wrapper.state('amount')).toBe(value);
})



test('should set invalid amount on input changes',() => {
    const value = '50.142';
const wrapper = shallow(<ExpenseForm />);
wrapper.find('input').at(1).simulate('change', {

 target:{value}
});
expect(wrapper.state('amount')).toBe('');
})


test('should test on submit props',() => {
const onSubmitSpy = jest.fn();
const wrapper = shallow(<ExpenseForm  expense={expenses[0]}  onSubmit={onSubmitSpy} />);
wrapper.find('form').simulate('submit',{
    preventDefault:()=>{ }
})
expect(wrapper.state('error')).toBe('');
expect(onSubmitSpy).toHaveBeenCalled();
})

test('should test new data on data change', () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm  />);
    wrapper.find('SingleDatePicker').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);


})

test('should test calender focused', () => {

    const focused = true;
    const wrapper = shallow(<ExpenseForm  />);
    wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused});
    expect(wrapper.state('calendarFocused')).toBe(focused);
}) 