import React from 'react';
import './Decimal.css';

class Decimal extends React.Component
{
    render()
    {
        return(
            <div className='decimal'>
                <h1>Шестнадцатеричная система счисления</h1>
                <input type="decimal" 
                name='decimal'
                placeholder='Введите десятичное число' />
            </div>

        )
    }
}

export default Decimal;