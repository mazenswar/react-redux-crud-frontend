import noteActions from "../actions/noteActions";
// FETCH NOTES
export const fetchNotesFromDB = () => dispatch => {
  fetch("http://localhost:3000/notes")
    .then(r => r.json())
    .then(notesArr => {
      dispatch(noteActions.getNotesAction(notesArr));
    });
};
// CREATE NOTE
const postConfigObj = note => ({
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  },
  body: JSON.stringify(note)
});
export const newNoteToDB = note => dispatch => {
  fetch("http://localhost:3000/notes", postConfigObj(note))
    .then(r => r.json())
    .then(noteObj => {
      dispatch(noteActions.createNoteAction(noteObj));
    });
};

// DELETE NOTE
export const deleteNoteFromDB = noteId => dispatch => {
  fetch(`http://localhost:3000/notes/${noteId}`, {
    method: "DELETE"
  }).then(() => dispatch(noteActions.deleteNoteAction(noteId)));
};

// EDIT NOTE

const editConfigObj = note => ({
  method: "PATCH",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  },
  body: JSON.stringify(note)
});

export const editNoteToDB = note => dispatch => {
  fetch(`http://localhost:3000/notes/${note.id}`, editConfigObj(note))
    .then(r => r.json())
    .then(updatedNote => {
      dispatch(noteActions.updateNoteAction(updatedNote));
    });
};
