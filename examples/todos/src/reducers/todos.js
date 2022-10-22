const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case 'TOGGLE_TODO':
            // const target = state.find(todo => todo.id === action.id);
            // target.completed = !target.completed;
            return state.map(todo =>
                (todo.id === action.id) ? {...todo, completed: !todo.completed } :
                todo
            )
        default:
            return state
    }
}

export default todos