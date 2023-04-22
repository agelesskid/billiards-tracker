import styles from "../styles/table.module.css"

export default function Table(){
    return (
        <>
            <div className={styles.table}>
                <h2>Table 1</h2>
                <div className={styles["table-content-wrapper"]}>
                    <div className={styles["table-users"]}>
                        <div className={styles["table-user"]}>
                            <input type="text" name="user-name" id="user-name-input" placeholder="Name" />
                            <div className={styles["user-details-wrapper"]}>
                                <div className={styles["user-time-wrapper"]}>
                                    <input type="number" name="user-time" id="user-time-input" placeholder="time"/>
                                    <p>min.</p>
                                </div>
                                <span className={styles["user-cost"]}>0€</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles["table-controls"]}>
                        <div className={styles["table-price-wrapper"]}>
                            <input className={styles["table-price-input"]} type="number" name="table-price" id="table-price-input"/>
                            <p className={styles["table-price-text"]}>€/hour</p>
                        </div>
                        <button type="button">+ add user</button>
                    </div>
                </div>
            </div>
        </>
    )
}