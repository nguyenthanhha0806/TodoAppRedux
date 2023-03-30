import { createSelector } from "@reduxjs/toolkit"

// export const todoListSelector = (state) => {

//     const todoRemaining = state.todoList.filter((todo) => {
//         return todo.name.toLowerCase().includes(state.filter.search.toLowerCase())
//     })
//     return todoRemaining
// }
// export const searchTextSelector = (state) => state.filter.search

// CreateSelector nhận vào đối số thứ nhất là selector thứ nhất, selector thứ 2,....
// đối số thứ 2 là 1 object là các kết quả trả về tương ứng của các selector.

export const searchTextSelector = (state) => state.filters.search;
export const todoListSelector = (state) => state.todoList;
export const statusChangeSelector = (state) => state.filters.status;
export const priorityChangeSelector = (state) => state.filters.priorities;


export const todoRemainingSelector = createSelector(todoListSelector, searchTextSelector, statusChangeSelector, priorityChangeSelector, (todoList, searchText, statusChange, priorities) => {
    return todoList.filter((todo) => {
        if (statusChange === "All") {

            return todo.name.toLowerCase().includes(searchText.toLowerCase()) && (priorities.length !== 0 ? priorities.includes(todo.priority) : true)
        }
        return (

            todo.name.toLowerCase().includes(searchText.toLowerCase()) && (statusChange === 'Completed' ? todo.completed : !todo.completed) && (priorities.length !== 0 ? priorities.includes(todo.priority) : true)
        )
    })

})