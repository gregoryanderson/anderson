import React, {Component} from 'react';
import './Game.css'



class Hero extends Component {
    constructor(props){
        super(props)
        this.state = {

        }

    }

    render () {
        return (
            <div id="hero" style={{top: this.props.hero.top + "vh", left: this.props.hero.left + "vh"}}>
            </div>
        )  
    }
}

export default Hero;