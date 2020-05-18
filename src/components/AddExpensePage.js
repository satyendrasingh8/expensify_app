import React from "react";
import ExpenseForm from './ExpenseForm';
//import ExpenseDashboardPage from "./ExpenseDashboardPage";
import {connect} from 'react-redux';
import {addexpense} from '../actions/expenses';


export class AddExpensePage extends React.Component {
    onSubmit =  (expense) =>{
        // props.dispatch(addexpense(expense));
        this.props.addexpense(expense); 
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
        addexpense:(expense)=> {dispatch(addexpense(expense));   }
      }; 
    };
  
    export default connect(undefined,mapDispatchToProps)(AddExpensePage);