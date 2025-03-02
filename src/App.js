import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByAmount } from './store/counterSlice';
import { addTask, removeTask } from './store/tasksSlice';

function App() {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.value);

    const tasks = useSelector((state) => state.tasks.tasks);
    const [taskText, setTaskText] = useState('');

    console.log('Current tasks from store:', tasks);

    const addNewTask = () => {
        const newTask = { id: Date.now(), text: taskText };
        console.log('Adding task:', newTask);
        dispatch(addTask(newTask));
        setTaskText('');
    };

    const removeTaskById = (id) => {
        dispatch(removeTask({ id }));
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Redux Toolkit Counter</h1>
            <h2>{count}</h2>
            <button onClick={() => dispatch(increment())}>+1</button>
            <button onClick={() => dispatch(decrement())}>-1</button>
            <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>

            <h2>Task Manager</h2>
            <input
                type="text"
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
                placeholder="Add new task"
            />
            <button onClick={addNewTask}>Add Task</button>

            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        {task.text}
                        <button onClick={() => removeTaskById(task.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
