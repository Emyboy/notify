
export const createNote = note => dispatch => {
    // const notes = JSON.parse(localStorage.getItem('notes'))
    // const data = localStorage.setItem('notes', JSON.stringify([...notes, note]));
    dispatch({
        type: 'CREATE_NOTE',
        payload: note
    })
};
