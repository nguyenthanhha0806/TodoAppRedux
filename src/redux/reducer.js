import { combineReducers } from 'redux';

import Filterslice from '../../src/components/Filters/Filterslice';
import TodoListslice from '../../src/components/TodoList/TodoListslice';
// const rootReducer = (state = {}, action) => {
//     return {
//         filters: Filterslice(state.filters, action),
//         todoList: TodoListslice(state.todoList, action)
//     }
// }

const rootReducer = combineReducers({
    filters: Filterslice,
    todoList: TodoListslice
})

export default rootReducer; 