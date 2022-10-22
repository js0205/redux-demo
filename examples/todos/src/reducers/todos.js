const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            const loadTodo = () => {
                return fetch(`http://google.com`)
                    .then(res => res.json())
                    .then(todo => {
                        return [
                            ...state,
                            {
                                id: action.id,
                                text: action.text,
                                completed: false
                            }
                        ]
                    })
            }
            return loadTodo()
        case 'TOGGLE_TODO':
            return state.map(todo =>
                (todo.id === action.id) ? {...todo, completed: !todo.completed } :
                todo
            )
        default:
            return state
    }
}

export default todos