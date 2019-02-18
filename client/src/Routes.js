import React from "react";
import { Route, Switch } from "react-router-dom";
//Components import
import Register from "./components/Register/Register";
import Admin from "./components/Admin/Admin";
import NotFound from "./components/NotFound/NotFound"

class Routes extends React.Component {
    render(){
        return(

            <Switch>
            <Route exact path="/" component={Register} />
            <Route path="/register" component={Register} />
            <Route path="/admin" component={Admin} />
            <Route path="*" component={NotFound} />
            </Switch>
        )
    }

}
export default Routes