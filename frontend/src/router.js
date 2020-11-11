import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RouterGuard from './util/routeGuard'
import NotFound from './pages/NotFound'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Login />
                </Route>
                <RouterGuard>
                    <Route path="/dashboard">
                        <Dashboard />
                        <Dashboard />
                    </Route>
                </RouterGuard>
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
        </Router>
    )
}
