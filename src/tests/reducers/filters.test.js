import filterReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter values',()=> {
const state = filterReducer (undefined,{type:'@@INIT'})
expect(state).toEqual({
    text:'',
    sortBy:'date',
    startDate:moment().startOf('month'),
    endDate:moment().endOf('month')
})
})


test('sort by amount',()=> {
const state=filterReducer(undefined,{type:'SORT_BY_AMOUNT'})
expect(state.sortBy).toBe('amount');


})


test('sort by date',() => { 
    const currentState={
        text:'',
        sortBy:'amount',
        startDate:undefined,
        endDate:undefined
    }
const state=filterReducer(currentState,{type:'SORT_BY_DATE'});
expect(state.sortBy).toBe('date');

})



test('set text filter',()=> {
    const text ="satyendra singh" 
    const action={type:'SET_TEXT_FILTER',text}
    const state=filterReducer(undefined,action)
    expect(state.text).toBe(text);


});




test('set start date filter',()=> {
    const startDate=moment();
    const action={type:'SET_START_DATE',startDate}
    const state=filterReducer(undefined,action)
    expect(state.startDate).toBe(action.startDate);


});



test('set end date filter',()=> {
    const endDate=moment();
    const action={type:'SET_END_DATE',endDate}
    const state=filterReducer(undefined,action)
    expect(state.endDate).toBe(action.endDate);


});


