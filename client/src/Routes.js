import React from "react";
import { Route, Switch } from "react-router-dom";
//Components import
import Register from "./components/Register/Register";
import Admin from "./components/Admin/Admin";
import NotFound from "./components/NotFound/NotFound";
import CrosserView from "./components/CrosserView/CrosserView";
import CrossersView from "./components/CrossersView/CrossersView";
import CrosserForm from "./components/CrosserForm/CrosserForm";

class Routes extends React.Component {
    render(){
        return(

            <Switch>
            <Route exact path="/" component={Register} />
            <Route path="/register" component={Register} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/admin/c/:id" component={CrosserView} />
            <Route exact path="/admin/all" component={CrossersView} />
            <Route exact path="/admin/edit/:id" component={CrosserForm} />
            <Route path="*" component={NotFound} />
            </Switch>
        )
    }

}
export default Routes