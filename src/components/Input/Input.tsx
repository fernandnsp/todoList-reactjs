import { PlusCircle } from "phosphor-react"
import style from './Input.module.css'

export function Input() {
    return (
        <div className={style.input}>
            <input
                type="text"
                placeholder='Adicione uma nova tarefa'
                className={style.inputCampo}
            />
            <button type="submit" className={style.button}>
                Criar <PlusCircle size={18} weight="bold" aria-hidden="true" />
            </button>
        </div>
    )
}