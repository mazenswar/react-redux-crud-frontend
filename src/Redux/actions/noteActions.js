// ACTION CREATORS
const createNoteAction = note => ({ type: 'CREATE_NOTE', payload: note });
const getNotesAction = notes => ({ type: 'GET_NOTES', payload: notes });
const deleteNoteAction = noteId => ({ type: 'DELETE_NOTE', payload: noteId });
const updateNoteAction = note => ({ type: 'UPDATE_NOTE', payload: note });

// FETCH NOTES
const fetchNotesFromDB = () => dispatch => {
  fetch('http://localhost:3000/notes')
    .then(r => r.json())
    .then(notesArr => {
      dispatch(getNotesAction(notesArr));
    });
};
// CREATE NOTE
const postConfigObj = note => ({
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  },
  body: JSON.stringify(note)
});
const newNoteToDB = note => dispatch => {
  fetch('http://localhost:3000/notes', postConfigObj(note))
    .then(r => r.json())
    .then(noteObj => {
      dispatch(createNoteAction(noteObj));
    });
};

// DELETE NOTE
const deleteNoteFromDB = noteId => dispatch => {
  fetch(`http://localhost:3000/notes/${noteId}`, {
    method: 'DELETE'
  }).then(() => dispatch(deleteNoteAction(noteId)));
};

// EDIT NOTE

const editConfigObj = note => ({
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  },
  body: JSON.stringify(note)
});

const editNoteToDB = note => dispatch => {
  fetch(`http://localhost:3000/notes/${note.id}`, editConfigObj(note))
    .then(r => r.json())
    .then(updatedNote => {
      dispatch(updateNoteAction(updatedNote));
    });
};

// EXPORT
export default {
  fetchNotesFromDB,
  newNoteToDB,
  deleteNoteFromDB,
  editNoteToDB
};
