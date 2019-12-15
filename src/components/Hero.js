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
            <div id="hero" style={{top: this.props.hero.top, left: this.props.hero.left}}>
            </div>
        )  
    }
}

export default Hero;