import React from 'react';
import {connect} from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({expenseCount, expensesTotal}) => {
const formattedExpensesTotal = numeral(expensesTotal/100).format('$0,0.00');
    const expenseWord = expenseCount ===1 ? 'expense' :'expenses';
    return (
  <div>
  <h1> viewing {expenseCount} {expenseWord} totalling {formattedExpensesTotal} </h1>
  </div>
    );

};

const mapStateToProps = (state) => {
const visibleExpenses = selectExpenses(state.expenses,state.filters); 
return {
    expenseCount: visibleExpenses.length,
    expensesTotal:selectExpensesTotal(visibleExpenses)  
}
};

export default connect(mapStateToProps)(ExpensesSummary);