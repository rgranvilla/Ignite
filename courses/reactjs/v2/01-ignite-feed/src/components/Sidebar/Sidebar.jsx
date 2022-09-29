import { PencilLine } from 'phosphor-react'
import { Avatar } from '../Avatar/Avatar'

import styles from './Sidebar.module.css'

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <img
        className={styles.cover}
        src={
          'https://images.unsplash.com/photo-1526761122248-c31c93f8b2b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50'
        }
      />
      <div className={styles.profile}>
        <Avatar src={'https://avatars.githubusercontent.com/u/59630388?v=4'} />

        <strong>Ricardo Granvilla</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </div>
  )
}

export { Sidebar }
