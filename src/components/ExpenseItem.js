import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { IoAddCircle } from "react-icons/io5";
import { HiMinusCircle } from "react-icons/hi";
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'REMOVE_EXPENSE',
            payload: expense
        });
    }

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td><IoAddCircle style={{color:"green", background:"white", borderRadius:"50%"}} onClick={event=> increaseAllocation(props.name)}>+</IoAddCircle></td>
            <td><HiMinusCircle style={{color:"red", background:"white", borderRadius:"50%"}}  onClick={event=> decreaseAllocation(props.name)}>-</HiMinusCircle></td>
            <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
