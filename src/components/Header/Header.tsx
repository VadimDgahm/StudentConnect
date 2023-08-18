import styles from './header.module.css'

export const Header = () => {
    return (
        <header className={styles.header}>
            <img
                src={'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/500px-LEGO_logo.svg.png'}/>
        </header>
    )
}