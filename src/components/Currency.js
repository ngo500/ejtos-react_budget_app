import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
    const { dispatch } = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState('');
    
    const submitEvent = (event) => {
        setNewCurrency(event.target.value);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: newCurrency,
        });
    }

    return (
        <div className='alert alert-success'>
            <select className="custom-select" id="inputGroupSelect01" value={newCurrency} onChange={submitEvent}>
                        <option defaultValue>Currency</option>
                        <option value="£" name="Pound">£ Pound</option>
                        <option value="$" name="Dollar">$ Dollar</option>
                        <option value="€" name="Euro">€ Euro</option>
                        <option value="₹" name="Ruppee">₹ Ruppee</option>
                    </select>
        </div>
    );
};
export default Currency;
