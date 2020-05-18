import React from 'react';
import {shallow} from 'enzyme';
import NotFoundPage from '../../components/NotFoundPage';
import expenses from  '../fixtures/expenses';


test('should render Not Found Page from expenses',() => {
   const wrapper = shallow(<NotFoundPage />);
   expect(wrapper).toMatchSnapshot();
});
