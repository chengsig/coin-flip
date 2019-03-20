import React, { Component } from "react";
import Coin from './Coin';
import './Coinflip.css';

class CoinFlip extends Component {
    static defaultProps = {
        //[0]head [1]tail
        imgUrls: [
            "https://bjc.edc.org/June2017/bjc-r/img/5-algorithms/img_flipping-a-coin/Heads.png",
            "http://forums.previously.tv/applications/core/interface/imageproxy/imageproxy.php?img=https://images-na.ssl-images-amazon.com/images/I/51NyMaKLydL.jpg&key=8068e143105d13e26ee58ff1f1117be31f7451cca7cd8aa1a7ed392cc8b3c12a"
        ]
    }

    constructor(props) {
        super(props);
        this.state = { 
            coinImg: "http://cerc.net/_bopwp/wp-content/uploads/2013/12/158737094.jpg",
            totalFlip: 0,
            totalHead: 0,
            totalTail: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }
    
    //get a random index of 0 or 1
    getRandomIdx(){
        return Math.round(Math.random());
    }

    handleClick(evt) {
        const randomIdx = this.getRandomIdx();
        if (randomIdx === 0) {
            this.setState(st => ({ totalHead: st.totalHead +1 }));
        }
        else {
            this.setState(st => ({ totalTail: st.totalTail + 1 }));
        }
        const img = this.props.imgUrls[randomIdx];
        this.setState(st => ({ coinImg: img, totalFlip: st.totalFlip + 1}));
        
    }

    render () {
        return (
            <div className="CoinFlip container">
                <h3 className="text-center">Let's flip a coin!
                    <Coin imgUrl={this.state.coinImg}/>
                    <button type="button" className="CoinFlip-flip btn-small btn-primary" onClick={this.handleClick}>Flip Meeee</button>
                    <h5 className="text-center">Out of {this.state.totalFlip} flips, there have been {this.state.totalHead} heads and {this.state.totalTail} tails.</h5>
                </h3>
            </div>
        )
    }



}

export default CoinFlip;