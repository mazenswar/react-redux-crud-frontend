export default (state = [], { type, payload }) => {
  switch (type) {
    case 'GET_NOTES':
      return payload;
    case 'CREATE_NOTE':
      return [...state, payload];
    case 'DELETE_NOTE':
      return handleDeleteNote(state, payload);
    case 'UPDATE_NOTE':
      return handleUpdateNote(state, payload);
    default:
      return state;
  }
};

// HELPERS
const handleDeleteNote = (notes, noteId) =>
  notes.filter(note => note.id !== noteId);

const handleUpdateNote = (notes, updatedNote) =>
  notes.map(note => (note.id === updatedNote.id ? updatedNote : note));
