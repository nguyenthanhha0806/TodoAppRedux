// action đơn giản chỉ là 1 object
// Nên sử dụng action creaator thay cho action thuần để tránh viêt
// các đoạn code lặp lại
// tiện hơn khi sửa code

export const addTodo = (data) => {
    return {
        type: 'todoList/addTodo',
        payload: data
    }
}
export const checkedTodo = (id) => {
    return {
        type: 'todoList/checkTodo',
        payload: id
    }
}
export const searchFilterChange = (text) => {
    return {
        type: 'filter/searchFilterChange',
        payload: text
    }
}
export const statusFilterChange = (status) => {
    return {
        type: 'filter/statusFilterChange',
        payload: status
    }
}
export const priorityFilterChange = (priorities) => {
    return {
        type: 'filter/priorityFilterChange',
        payload: priorities
    }
}