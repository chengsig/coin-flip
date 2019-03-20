import React, { Component } from "react";

class Coin extends Component {
    render () {
        let imgageSrc = { imgUrl: this.props.imgURL }
        return (
            <div className="Coin">
                <img src={imgageSrc} alt="coin-face"></img> 
            </div>
        )
    }
}

export default Coin