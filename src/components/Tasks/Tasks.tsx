import style from './Tasks.module.css'
import { Circle, Trash } from 'phosphor-react'

export function Tasks() {
    return (
        <div className={style.tasks}>
            <span className={style.radioIcon}>
                <Circle size={20} />
            </span>
            <p className={style.content}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque impedit quas quia itaque, non nam ducimus?
                Exercitationem non corrupti pariatur eos!
            </p>
            <span className={style.trashIcon}>
                <Trash size={20} />
            </span>
        </div>
    )
}