import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
    const { dispatch } = useContext(AppContext);
    const { currency } = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState('');
    const [action, setAction] = useState('');
    const currentCurrency = currency;
    
    const submitEvent = () => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: newCurrency,
        });
    }

    return (
        <div className='alert alert-primary'>
            <select className="custom-select" id="inputGroupSelect02" value={newCurrency} onChange={(event) => setAction(event.target.value)}>
                        <option defaultValue value="Pound" name="Pound">£ Pound</option>
                        <option value="Dollar" name="Dollar">$ Dollar</option>
                        <option value="Euro" name="Euro">€ Euro</option>
                        <option value="Ruppee" name="Ruppee">₹ Ruppee</option>
                    </select>
        </div>
    );
};
export default Currency;
