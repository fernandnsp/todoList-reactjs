import { Header } from './components/Header/Header'

import './assets/css/global.css'
import styles from './App.module.css'

export function App() {
  return (
    <div>
      <Header />

      <main className={styles.container}>
      </main>
    </div>
  )
}
