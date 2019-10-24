import React from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import noteActions from '../Redux/actions/noteActions';

const ShowNote = props => {
  const noteId = parseInt(props.match.params.id);
  const note = props.notes.find(note => note.id === noteId);

  const handleDelete = () => {
    const { deleteNoteFromDB, history } = props;
    deleteNoteFromDB(noteId);
    history.push('/notes');
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
  deleteNoteFromDB: noteActions.deleteNoteFromDB
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowNote);
