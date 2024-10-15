import React, {useEffect, useState} from 'react';




export default function Section() {

    const [tasks, setTasks] = useState("");
    const [taskList, setTaskList] = useState([]);





    const doneTask = (index) => {
        console.log('done button pushed');

        // faire le mapping de la liste de tâche pour trouver la tâche cliquée
        const updatedTask = taskList.map((task, i) =>
            i === index ? { ...task, done: !task.done } : task
        );
        setTaskList(updatedTask) // Met à jour le tableau des tasks avec comme argument l'updatedtask

    }

    const deleteTask = (index) => {
        console.log('delete button pushed');
        const filteredTask=taskList.filter((_, i) => i !== index); // filtrer la tâche à supprimer
        setTaskList(filteredTask)
    }

    const handleChange = (e) => {
        setTasks(e.target.value);
        console.log(tasks);
    }
    const submitTask = (e) => {
        e.preventDefault(); // éviter de recharger la page lors du clic sur submit
        if(tasks.trim()!==""){

            setTaskList([...taskList, {text: tasks, done: false}]); // ajouter à un tableau de tasks
            setTasks("");
            console.log("submitted")
        }
    }




    return(
        <div className={'flex flex-col items-center  gap-6 p-6 max-w-md mx-auto'}>

            <h1 className={'text-xl font-bold'}>
                On going, set a tasks
            </h1>

            <form className={'flex justify-center text-black items-center gap-6 text-xs'}>
                <input onChange={handleChange} className={'border p-3 w-72'} type={'text'}
                       placeholder={'Add new task ;)...'}/>
                <button onClick={submitTask}
                        className={tasks.trim() === '' ? 'bg-red-300 p-2 rounded-lg text-white' : 'bg-red-400 p-2 rounded-lg text-white'}>
                    submit
                </button>

            </form>



            <div className={'mt-4 text-xs flex flex-col gap-6 items-center '}>

                {taskList.map((task, index) => (
                    <div key={index} className={'grid grid-cols-2 justify-items-center gap-1 '}>
                        <div className={task.done?'flex justify-center items-center opacity-30 italic line-through':'flex justify-center items-center'}><p>{task.text}</p></div>

                        <div className={'flex justify-center items-center gap-4 w-56'}>
                            <button onClick={()=>doneTask(index)}  className={' w-16 border p-1 rounded-lg'}> {task.done?'Undone':'done'}  </button>
                            <button onClick={()=>deleteTask(index)} className={'w-12 border p-1 rounded-lg'}>Delete</button>
                        </div>

                    </div>

                ))}

            </div>


        </div>
    );
}