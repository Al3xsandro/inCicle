import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { Dashboard } from '../pages/dashboard';
import { Home } from '../pages/home';
import { NotFound } from '../pages/error';

export function Routes() {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Home} exact/>
                    <Route path="/dashboard" component={Dashboard} exact/>
                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
        </>
    );
};