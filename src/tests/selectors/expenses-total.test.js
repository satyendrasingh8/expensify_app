import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses',() => {

    const res = selectExpensesTotal([]);
    expect(res).toBe(0);
});

test('should add upto one expense correctly', ()=> {
    
    const res = selectExpensesTotal([expenses[0]]);
    expect(res).toBe(1500);
});


test('should add multiple expenses correctly', ()=> {
    
    const res = selectExpensesTotal(expenses);
    expect(res).toBe(3200);
});