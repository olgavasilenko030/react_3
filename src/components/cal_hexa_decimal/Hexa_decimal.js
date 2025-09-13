import React from 'react';
import './Hexa_decimal.css';

class Hexa_decimal extends React.Component
{state={hexa_decimal:""}
    render()
    {
       
        return(
            
            <div className='hexa-decimal'>
                <h1>Десятиная система счисления</h1>
                <input type="hexa-decimal" 
                value={this.state.hexa_decimal}
                name='hexa-decimal'
                placeholder='Введите двоичное число' 
                onChange={
                    (e)=>
                    this.setState({hexa_decimal:e.target.value//.parseInt()

                    })}
                    />
                    <div>{this.state.hexa_decimal}</div>
               
            </div>

        )
    }
}

export default Hexa_decimal;