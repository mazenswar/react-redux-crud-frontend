import React from "react";

import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { deleteNoteFromDB } from "../../Redux/adapters/notesAdapter";
import "../../Stylesheets/showNote.scss";

const ShowNote = props => {
  const noteId = parseInt(props.match.params.id);
  const note = props.notes.find(note => note.id === noteId);

  const handleDelete = () => {
    const { deleteNoteFromDB, history } = props;
    deleteNoteFromDB(noteId);
    history.push("/notes");
  };

  if (note) {
    return (
      <div className="show-note-container">
        <h2>{note.title}</h2>
        <p>{note.content}</p>
        <Link to="/notes" onClick={handleDelete} className="show-button">
          DELETE
        </Link>
        <Link to={`/notes/edit/${note.id}`} className="show-button">
          EDIT
        </Link>
      </div>
    );
  }
  return null;
};

const mapStateToProps = state => ({ notes: state });

const mapDispatchToProps = {
  deleteNoteFromDB
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ShowNote)
);
