import React from "react"
import "./List.css"


const List = ({ task, setTask, filter }) => {
    const handleDelete = (i) => {
        const tasks = [...task]
        tasks.splice(i, 1)
        setTask(tasks)
    }

    return (
        <div className={task.length === 0 ? "emptycontainer" : "container"}>
            {task.filter((item) => {
                if (filter === "completed" && !item.done) {
                    return true
                } else if (filter === "active" && item.done) {
                    return true
                } else if (filter === "all") {
                    return item
                }
            }).map((item, index) =>
                <div key={index} className="list-container">
                    <span onClick={() => setTask(task.map(e => e.id === item.id ? { ...e, done: !e.done } : e))}
                        className={item.done ? "doneWork" : "workDone"}>{item.work}</span>
                    <span onClick={() => handleDelete(index)} className="delete">X</span>
                </div>
            )
            }

        </div>
    )
}

export default List