import React from "react";
import {BrowserRouter} from "react-router-dom";
import StorePicker from "./StorePicker"
import NotFound from "./NotFound";

const Router = () => {
    <BrowserRouter>
    <Switch>
        <Route exact path="/" component={StorePicker} />
        <Route path="/store/:storeId" component={app}></Route> 
        <Route component={NotFound}></Route> 
    </Switch>
    </BrowserRouter>
};

export default Router;