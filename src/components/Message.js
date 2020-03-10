import React, { Component } from 'react'

class Message extends Component {
    constructor() {
        super()
        this.state = {
            messages: 'Welcome Teman',
            color: 'red',
            size: '100px',
            transition: '1s',
            countDefault: 0
        }

        
    }

    changeMessage() {
        this.setState ({
            messages: 'Your welcome',
            color: 'blue',
            size: '200px',
            transition: '1s'
        })
    }

    backMessage() {
        this.setState ({
            messages: 'Your welcome',
            color: 'red',
            size: '100px',
            //transition: '1s'
        })
    }

    countUp() {
        this.setState ({
            countDefault:this.state.countDefault + 1
        }, 
            ()=>{console.log('callback value ',this.state.countDefault);//callback statement log
        })
        console.log(this.state.countDefault);//syncronous statement log
        
    }
    

    render() {
        
        return (
            <div>
                <div className="card" style={{marginRight:this.state.size, height: this.state.size, backgroundColor:this.state.color, transition:this.state.transition}}>
                    <p>Card</p>
                </div>
                <h3 style={{color: this.state.color}}>{this.state.messages}</h3>
                <button onClick={()=> this.changeMessage()}>Thank You</button>
                <button onClick={()=> this.backMessage()}>Back</button>

                <h2>{this.state.countDefault}</h2>
                <button onClick={()=> this.countUp()}>Count Up</button>
            </div>
        )
    }
}

export default Message;
