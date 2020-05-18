import {setTextFilter,
    sortByDate,
    sortByAmount,
    setStartDate,
     setEndtDate}
      from '../../actions/filters';
import moment from 'moment';

test('setting startDate from action ', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
   type:'SET_START_DATE',
   startDate:moment(0)
    })
})



test('setting endDate from action ', () => {
    const action = setEndtDate(moment(0));
    expect(action).toEqual({
   type:'SET_END_DATE',
   endDate:moment(0)
    })
})


test('setting sortByAmount from action ', () => {
    const action = sortByAmount();
    expect(action).toEqual({
   type:'SORT_BY_AMOUNT',
   
    })
})



test('setting sortByDate from action ', () => {
    const action = sortByDate();
    expect(action).toEqual({
   type:'SORT_BY_DATE',
   
    })
})




test('testing settextfilter from actions',() => {
   const text='something';
const action = setTextFilter(text);
expect(action).toEqual({
    type:'SET_TEXT_FILTER',
    text
})

}) 


test('testing default settextfilter from actions',() => {
    
 const action = setTextFilter();
 expect(action).toEqual({
     type:'SET_TEXT_FILTER',
     text:''
 })
 
 }) 