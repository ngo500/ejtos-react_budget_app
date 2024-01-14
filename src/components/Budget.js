import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const {dispatch} = useContext(AppContext);
    const { expenses } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const handleBudgetChange = (event) => {
        if(event.target.value > 20000){
            setNewBudget(budget);
            alert("Budget cannot exceed 20,000!");
        }
        else if(event.target.value < totalExpenses){
            setNewBudget(budget);
            alert("Cannot set budget lower than current spending!");
        }
        else{
            setNewBudget(event.target.value);
            dispatch({
                type: 'SET_BUDGET',
                payload: newBudget,
            });
        }
    }
    return (
        <div className='alert alert-secondary'>
        <span>Budget: {currency}{
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange} min="0"></input>
        }</span>
        </div>
    );
};
export default Budget;
