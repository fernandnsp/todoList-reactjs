import style from './Tasks.module.css'
import { Circle, CheckCircle, Trash } from 'phosphor-react'

interface Task {
    id: string
    content: string
    isChecked: boolean
}

interface TasksProps {
    task: Task
    onDeleteTask: (taskId: string) => void
    onCompleteTask: (task: string) => void
}

export function Tasks({ task, onDeleteTask, onCompleteTask }: TasksProps) {
    function deleteTask() {
        onDeleteTask(task.id)
    }

    function completeTask() {
        onCompleteTask(task.id)
    }

    return (
        <div className={style.tasks}>
            <div className={style.confirmText}>
                { 
                    task.isChecked
                        ? <span>
                            <CheckCircle
                                size={20}
                                onClick={completeTask}
                                alt='Marcar tarefa como concluída'
                                className={`${style.radioIcon} ${style.radioIconChecked}`}
                            />
                         </span>
                        : <span>
                            <Circle 
                                size={20}
                                onClick={completeTask}
                                alt='Desmarcar tarefa'
                                className={style.radioIcon}
                            />
                          </span>
                }
            </div>

            <p className={`${style.content} ${ task.isChecked ? style.contentDone : ''}`}>
                { task.content }
            </p>

            <span onClick={deleteTask} className={style.trashIcon}>
                <Trash size={20} />
            </span>
        </div>
    )
}