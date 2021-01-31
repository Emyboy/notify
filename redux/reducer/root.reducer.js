import { combineReducers } from 'redux';
import noteReducer from './note.reducer';
import viewReducer from './view.reducer';


export default combineReducers({
    view: viewReducer,
    note: noteReducer
});


