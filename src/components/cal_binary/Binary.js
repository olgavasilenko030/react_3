import React from 'react';
import './Binary.css';




// let binaryStringNeg = Binary(-5); 
// function Binary (num) {
//   if (num >= 0) {
//     return num.toString(2);
//   } else {
//     return (num >>> 0).toString(2); 
//   }
// }


class Binary extends React.Component
{
    state={binary:""}
   
    binaryChange(event) {
    this.setState({value: event.target.value});
  }

    render()
    {
       
        return(
            <div className='binary'>
                <h1>Двоичная система счисления</h1>
                <input type="binary"
                value={this.state.binary} 
                placeholder='Введите десятичное число' 
                onChange={
                    (e)=>
                    this.setState({binary:e.target.value})}/>
                 <div>{this.state.binary}</div>

            </div>

        )
    }
}

export default Binary;