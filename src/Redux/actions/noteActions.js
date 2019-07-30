export default {
  createNoteAction: note => ({ type: "CREATE_NOTE", payload: note }),
  getNotesAction: notes => ({ type: "GET_NOTES", payload: notes }),
  deleteNoteAction: noteId => ({ type: "DELETE_NOTE", payload: noteId }),
  updateNoteAction: note => ({ type: "UPDATE_NOTE", payload: note })
};
