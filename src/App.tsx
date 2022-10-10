import { Header } from './components/Header/Header'
import { Input } from './components/Input/Input'
import { ListTasks } from './components/ListTasks/ListTasks'

import './assets/css/global.css'
import styles from './App.module.css'

export function App() {
  return (
    <div>
      <Header />

      <main className={styles.container}>
        <Input />
        <ListTasks />
      </main>
    </div>
  )
}
