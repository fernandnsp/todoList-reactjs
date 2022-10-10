import { Tasks } from '../Tasks/Tasks'
import style from './ListTasks.module.css'

export function ListTasks() {
    return (
        <section className={style.listTasks}>
            <div className={style.listTasks__topo}>
                <strong className={style.listTasks__criadas}>Tarefas criadas</strong>
                <strong className={style.listTasks__concluidas}>Concluídas</strong>
            </div>
            
            <ul className={style.listTasks__list}>
                <li>
                    <Tasks />
                </li>
            </ul>
        </section>
    )
}
