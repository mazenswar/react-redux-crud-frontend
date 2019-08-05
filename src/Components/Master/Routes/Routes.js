import React from "react";
import { Switch, Route } from "react-router-dom";

import NotePages from "../../Notes";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/notes" component={NotePages.AllNotes} />
      <Route exact path="/new-note" component={NotePages.NewNote} />
      <Route exact path="/notes/:id" component={NotePages.ShowNote} />
      <Route exact path="/notes/edit/:id" component={NotePages.EditNote} />
      <Route component={NotePages.AllNotes} />
    </Switch>
  );
};

export default Routes;
