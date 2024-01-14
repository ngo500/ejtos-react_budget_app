import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
    const { currency } = useContext(AppContext);
    const currentCurrency = currency;
    const currencyName = (function() {
        switch(currentCurrency){
            case '£':
                return 'Pound';
            case '$':
                return 'Dollar';
            case '€':
                return 'Euro';
            case '₹':
                return 'Ruppee';
            default:
                return '';
        }
    })();
    return (
        <div className='alert alert-primary'>
            <span>Currency ({currentCurrency} {currencyName})</span>
        </div>
    );
};
export default Currency;
