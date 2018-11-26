import React, { Component } from 'react'
import List from '../List/List';
import AddTask from '../List/AddTask';

class Dashboard extends Component {
    // onClear(done) {
    //     this.setState({
    //         tasks: []
    //     })
    //     console.log(done)
    // }

    onClear = (done) => {
        return () => {
            this.setState({
                tasks: []
            })
            console.log(done);
        }
    }

    onDeleteHandleDashboard = (id) => {
        this.setState({
            tasks: this.state.tasks.filter((task) => (
                task.id !== id
            ))
        })
    }

    onAddHandleDashboard = (task) => {
        this.setState({
            tasks: [task, ...this.state.tasks]
        })
    }

    render() {
        return (
            <div>
                <AddTask onAddHandleDashboard={this.onAddHandleDashboard} />
                <List />
                <button onClick={this.onClear('Clear')}>Clear All</button>
            </div >
        )
    }
}

export default Dashboard
