import React, { Component } from 'react'

export default (WrapperCompoent)=>(title)=>{
    return class extends Component{
        render() {
            return (
                <div>
                    <div className="header">
                        <WrapperCompoent title={title} />
                    </div>
                </div>
            )
        }
    }
   
}
