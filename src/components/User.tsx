import styles from "../styles/user.module.css"

export default function User() {
    return (
        <div className={styles["user"]}>
            <input type="text" name="user-name" id="user-name-input" placeholder="Name" />
            <span>{'===>'}</span>
            <div className={styles["user-details-wrapper"]}>
                <div className={styles["user-time-wrapper"]}>
                    <input type="number" name="user-time" id="user-time-input" placeholder="time"/>
                    <p>h.</p>
                </div>
                <span className={styles["user-cost"]}>0€</span>
            </div>
        </div>
    )
}