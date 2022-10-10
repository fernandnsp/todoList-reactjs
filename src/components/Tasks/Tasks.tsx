import style from './Tasks.module.css'
import { Circle, Trash } from 'phosphor-react'

export function Tasks() {
    return (
        <div className={style.tasks}>
            <Circle size={24} className={style.radioIcon} />
            <p className={style.content}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque impedit quas quia itaque, non nam ducimus? Exercitationem non corrupti pariatur eos!
            </p>
            <Trash size={24} className={style.trashIcon} />
        </div>
    )
}