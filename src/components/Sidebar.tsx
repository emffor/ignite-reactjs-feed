import styles from './Sidebar.module.css';

export function Sidebar() {
    return (
        <aside>
            <h1>Sidebar</h1>
        </aside>
    );
}




/* export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__480.jpg"
            />

            <div className={styles.profile}>
                <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/98027423?v=4" />
                <strong>Eloan Ferreira</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
} */