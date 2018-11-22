import React, { Component } from 'react'
import uid from 'uid'

class AddTask extends Component {
    state = {
        task: ''
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        const newTask = {
            task: this.state.task,
            id: uid()
        }
        this.props.onAddHandleDashboard(newTask)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <label htmlFor="task">Task</label>
                    <input type="text" name="task" value={this.state.task} onChange={this.onChange} />
                    <input type="submit" value="addTask" />
                </form>
            </div >
        )
    }
}

export default AddTask
