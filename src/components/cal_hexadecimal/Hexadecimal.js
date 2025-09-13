import React from 'react';
import './Hexadecimal.css';

class Hexadecimal extends React.Component
{
    render()
    {
        return(
            <div className='hexadecimal'>
                <h1>Десятиная система счисления</h1>
                <input type="hexadecimal" 
                name='hexadecimal'
                placeholder='Введите шестнадцатеричное число' />
            </div>

        )
    }
}

export default Hexadecimal;