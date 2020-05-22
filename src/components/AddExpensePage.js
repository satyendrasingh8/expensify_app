import React from "react";
import ExpenseForm from './ExpenseForm';
//import ExpenseDashboardPage from "./ExpenseDashboardPage";
import {connect} from 'react-redux';
import {startAddExpense} from '../actions/expenses';


export class AddExpensePage extends React.Component {
    onSubmit =  (expense) =>{
        // props.dispatch(addexpense(expense));
        this.props.startAddExpense(expense); 
        this.props.history.push('/');
     } ;
     render() {
return(
    <div>
    <h1>Add Expense </h1>
    <ExpenseForm 
   onSubmit={this.onSubmit}
    />
   </div>

);
   } 

}


    const mapDispatchToProps = (dispatch) => {
    return {
        startAddExpense:(expense)=> {dispatch(startAddExpense(expense));   }
      }; 
    };
  
    export default connect(undefined,mapDispatchToProps)(AddExpensePage);