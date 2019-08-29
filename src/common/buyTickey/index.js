import React, { Component } from 'react'
import  {BuyWrapper} from  "./styled"
export default class BuyTick extends Component {
    render() {
        let {id} = this.props.match.params
        console.log(id)
        return (          
            <BuyWrapper>
                <div className="bottom-con">
                    <div className="kf">客服</div>
                    <div className="buy" onClick={this.buyTic.bind(this,id)}>直接购买</div>
                </div>
                <div className='buyBackground'>
                    
                </div>
                <div className='buyBox'>

                </div>
            </BuyWrapper>
        )
    }
    buyTic(id){

    }
}
