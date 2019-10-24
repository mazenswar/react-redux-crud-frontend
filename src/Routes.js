import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Pages from './Pages';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/notes" component={Pages.AllNotes} />
      <Route exact path="/new-note" component={Pages.NewNote} />
      <Route exact path="/notes/:id" component={Pages.ShowNote} />
      <Route exact path="/notes/edit/:id" component={Pages.EditNote} />
      <Route component={Pages.AllNotes} />
    </Switch>
  );
};

export default Routes;
