import styles from './index.module.scss'
import cl from 'classnames'

export const ScreenEgg = ({ className, children, type }) => (
  <div
    className={cl(
      className,
      styles.screenEgg,
      type === 'right' ? styles.right : styles.left
    )}
  >
    {children}
  </div>
)
