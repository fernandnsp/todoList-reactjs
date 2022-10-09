import style from './Header.module.css'
import logoTodo from '../../assets/img/logo.svg'

export function Header() {
    return (
        <header className={style.header}>
            <img
                src={ logoTodo }
                aria-hidden='true'
                className={style.header__logo}
            />
        </header>
    )
}