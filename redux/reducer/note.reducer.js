const initialState = {
    notes: [],
    loading: false
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case 'SET_NOTE_STATE':
            return { ...state, ...payload }
        case 'CREATE_NOTE':
            return {
                ...state,
                notes: [ ...state.notes, payload]
            }
        default:
            return state
    }
}
