import React, { Component, Fragment } from 'react'
import Layout from "@layout"
import { Route } from "react-router-dom";
import auth from "@common/auth"
class BaseRoute extends Component {
    render() {
        let { component, path, ...rest } = this.props;
        return (
            <Fragment>
                <Layout {...rest}>
                    <Route path={path} component={component} />
                </Layout>
            </Fragment>
        )
    }
    componentDidMount(){
        this.props.handler(this.props)
    }
}
export default auth(BaseRoute);