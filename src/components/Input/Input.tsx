import { ChangeEvent, FormEvent } from "react"
import { PlusCircle } from "phosphor-react"
import style from './Input.module.css'

interface InputProps {
    newTask: string
    onCreateTask: (event: FormEvent) => void
    onChangeTask: (event: ChangeEvent<HTMLInputElement>) => void
}

export function Input({ newTask, onCreateTask, onChangeTask }: InputProps) {
    const emptyTask = newTask.length === 0

    return (
        <form onSubmit={onCreateTask} className={style.input}>
            <input
                type="text"
                onChange={onChangeTask}
                value={newTask}
                placeholder='Adicione uma nova tarefa'
                className={style.inputCampo}
            />
            
            <button
                type="submit"
                title="Criar tarefa"
                disabled={emptyTask}
                className={style.button}
            >
                Criar <PlusCircle size={18} weight="bold" aria-hidden="true" />
            </button>
        </form>
    )
}