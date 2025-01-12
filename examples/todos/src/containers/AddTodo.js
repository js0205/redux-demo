import React from 'react'
import { connect } from 'react-redux'
import { addFullTodo, addTodo } from '../actions'

const loadTodo = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                id: 100,
                text: '异步todo',
            })
        }, 500)
    })
}

const AddTodo = ({ dispatch }) => {
    let input

    return ( <
        div >
        <
        form onSubmit = {
            e => {
                e.preventDefault()
                if (!input.value.trim()) {
                    return
                }
                addTodo().then(todo => {
                    dispatch(addFullTodo(todo))
                })
                dispatch(addTodo(input.value))
                input.value = ''
            }
        } >
        <
        input ref = { node => input = node }
        /> <
        button type = "submit" >
        Add Todo <
        /button> < /
        form > <
        /div>
    )
}

export default connect()(AddTodo)