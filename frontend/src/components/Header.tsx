import RocketLogo from '../assets/rocket.svg';
import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={RocketLogo} alt="Rocket logo" />

        <div className={styles.todo}>
          <span className={styles.to}>to</span>
          <span className={styles.do}>do</span>
        </div>
      </div>
    </header>
  )
};