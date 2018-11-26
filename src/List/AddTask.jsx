import React, { Component } from 'react'
import uid from 'uid'
import { Consumer } from '../context'

class AddTask extends Component {
    state = {
        task: ''
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (dispatch) => (e) => {
        e.preventDefault()
        const newTask = {
            task: this.state.task,
            id: uid()
        }
        dispatch({ type: 'ADD_TASK', payload: newTask })
    }

    render() {
        return (
            <Consumer>
                {(value) => {
                    return (
                        <div>
                            <form onSubmit={this.onSubmit(value.dispatch)}>
                                <label htmlFor="task">Task</label>
                                <input type="text" name="task" value={this.state.task} onChange={this.onChange} />
                                <input type="submit" value="addTask" />
                            </form>
                        </div >
                    )
                }}
            </Consumer>
        )
    }
}

export default AddTask
