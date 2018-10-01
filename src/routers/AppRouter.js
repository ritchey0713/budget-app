import React from 'react';
<<<<<<< HEAD
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ExpenseDashboardPage from './../components/ExpenseDashboardPage';
import AddExpensePage from './../components/AddExpensePage';
import EditExpensePage from './../components/EditExpensePage';
import HelpPage from './../components/HelpPage';
import NotFoundPage from './../components/NotFound';
import Header from './../components/Header'
=======
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import AddExpensePage from '../components/AddExpensePage.js'
import EditExpensePage from '../components/EditExpensePage.js'
import ExpenseDashboardPage from '../components/ExpenseDashboardPage.js'
import Header from '../components/Header.js'
import HelpPage from '../components/HelpPage.js'
import NotFoundPage from '../components/NotFoundPage.js'
>>>>>>> f2a8e1eb88b16b29d6b7f42e8edf500ccf33826d

const AppRouter = () => (
<BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter;
