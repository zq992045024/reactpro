import React, { Component } from 'react'
import Layout from "@layout"
import { Route } from "react-router-dom";

class BaseRoute extends Component {
    render() {
        let{component,path,...rest} = this.props;
        // console.log(this.props)
       return(
           <Layout {...rest}>
               <Route path={path} component={component}/>
           </Layout>
       )
    }
}
export default BaseRoute;