import { Route, Switch } from "react-router-dom"
import Home from '../pages/Home'
import Dashboard from '../pages/Dashboard'

export const Routes = () => {
    return(
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/dashboard">
                <Dashboard />
            </Route>
        </Switch>
    )
}