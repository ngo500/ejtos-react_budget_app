import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';

//Code to import from Remaining.js
import Remaining from './components/Remaining';

//Code to import from ExpenseTotal.js
import ExpenseTotal from './components/ExpenseTotal';

//Code to import from ExpenseList.js
import ExpenseList from './components/ExpenseList';

//Code to import from ExpenseItem.js
import ExpenseItem from './components/ExpenseItem';

//Code to import from AllocationForm.js
import AllocationForm from './components/AllocationForm';


import { AppProvider } from './context/AppContext';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                        {
                            // Budget component
                            <div className='col-sm'>
                                <Budget />
                            </div>
                        }        

                        {
                            //Remaining component
                            <div className='col-sm'>
                                <Remaining />
                            </div>
                        }        

                        {
                            //ExpenseTotal component
                            <div className='col-sm'>
                                <ExpenseTotal />
                            </div>
                        }        
                       
                        {
                            //Expense List component
                            <div className='col-sm'>
                                <ExpenseList />
                            </div>
                        }         

                        {
                            //Expense Item component
                            <div className='col-sm'>
                                <ExpenseItem />
                            </div>
                        }        

                        {
                            //Allocation Form component
                            <div className='col-sm'>
                                <AllocationForm />
                            </div>
                        }        

                </div>
            </div>
        </AppProvider>
    );
};
export default App;
