import styles from './Avatar.module.css'

function Avatar({ hasBorder = true, src, title }) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
      title={title}
    />
  )
}

export { Avatar }
