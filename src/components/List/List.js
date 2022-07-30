import "./List.css"

const List = ({ task, setTask }) => {
    const handleDelete = (i) => {
        const tasks = [...task]
        tasks.splice(i,1)
        setTask(tasks)
    }
    return (
        <div className={task.length === 0 ? "emptycontainer" : "container"}>
            {task.map((item, i) =>
                <div key={i} className="list-container">
                    <span onClick={() => setTask(task.map(e => e.id === item.id ? { ...e, done: !e.done } : e))}
                        className={item.done ? "doneWork" : "workDone"}>{item.work}</span>
                    <span onClick={() => handleDelete(i)} className="delete">X</span>
                </div>
            )}
        </div>
    )
}

export default List