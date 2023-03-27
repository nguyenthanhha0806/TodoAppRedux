// action đơn giản chỉ là 1 object

export const addTodoAction = {
    type: 'todoList/addTodo',
    payload: { id: 5, name: 'Learn Redux', completed: false, priority: 'Low' }
}

// Nên sử dụng action creaator thay cho action thuần để tránh viêt
// các đoạn code lặp lại
// tiện hơn khi sửa code

export const addTodo = (data) => {
    return {
        type: 'todoList/addTodo',
        payload: data
    }
}