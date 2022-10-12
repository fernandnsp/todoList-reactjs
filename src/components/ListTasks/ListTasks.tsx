import { ChangeEvent, FormEvent, useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import { ClipboardText } from 'phosphor-react';

import { Input } from '../../components/Input/Input'
import { Tasks } from '../Tasks/Tasks'
import style from './ListTasks.module.css'

interface Tasks {
    id: string
    content: string,
    isChecked: boolean
}

export function ListTasks() {
    const [counter, setCounter] = useState(0)
    const [counterCompleted, setCounterCompleted] = useState(0)
    const [tasks, setTasks] = useState<Tasks[]>([])
    const [newTask, setNewTask] = useState('')

    function createTask(event: FormEvent) {
        event.preventDefault()

        const task = {
            id: uuidv4(),
            content: newTask,
            isChecked: false
        }

        setTasks((state) => {
            return [...state, task]
        })
        setNewTask('')
        setCounter(state => state + 1)
    }

    function changeTask(event: ChangeEvent<HTMLInputElement>) {
        setNewTask(event.target.value)
    }

    function completeTask(taskId: string) {
        const updateTask = tasks.map(task => ({ ...task }))
        let completedTask = updateTask.find(task => task.id === taskId)
        
        if (!completedTask) return
        
        completedTask.isChecked = !completedTask.isChecked
        setTasks(updateTask)

        const completeds = updateTask.filter(task => task.isChecked)
        setCounterCompleted(completeds.length)
    }

    function deleteTask(taskId: string) {
        const keepTasks = tasks.filter(task => {
            return task.id !== taskId
        })

        setTasks(keepTasks)
        setCounter(state => state - 1)

        const completeds = keepTasks.filter(task => task.isChecked)
        setCounterCompleted(completeds.length)
    }

    return (
        <div>
            <Input
                newTask={newTask}
                onCreateTask={createTask}
                onChangeTask={changeTask}
            />

            <section className={style.listTasks}>
                <div className={style.listTasks__topo}>
                    <strong className={style.listTasks__criadas}>
                        Tarefas criadas &nbsp;
                        <span className={style.slug}>{ counter }</span>
                    </strong>

                    <strong className={style.listTasks__concluidas}>
                        Concluídas &nbsp;
                        <span className={style.slug}>
                            { counterCompleted } { counter > 0 ? 'de ' + counter : ''}
                        </span>
                    </strong>
                </div>

                {
                    tasks.length ? (
                        <ul className={style.listTasks__list}>
                            {
                                tasks.map((task) => {
                                    return (
                                        <li key={task.id}>
                                            <Tasks
                                                task={task}
                                                onDeleteTask={deleteTask}
                                                onCompleteTask={completeTask}
                                            />
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    ) : (
                        <div className={style.withoutTasks}>
                            <ClipboardText size={56} className={style.withoutTasks__icon} />

                            <div>
                                <strong className={style.withoutTasks__title}>Você ainda não tem tarefas cadastradas</strong>
                                <p className={style.withoutTasks__text}>Crie tarefas e organize seus itens a fazer</p>
                            </div>
                        </div>
                    )
                }
            </section>
        </div>
    )
}
