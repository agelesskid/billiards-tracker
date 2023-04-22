import styles from "../styles/table.module.css"

export default function Table(){
    return (
        <>
            <div className={styles.table}>
                <h2>Table 1</h2>
                <div className={styles["table-content-wrapper"]}>
                <div className={styles["table-users"]}>
                    <input type="text" name="user-name" id="user-name-input" placeholder="Name" />
                    <div className={styles["user-details-wrapper"]}>
                    <div className={styles["user-time-wrapper"]}>
                        <input type="number" name="user-time" id="user-time-input" placeholder="time"/>
                        <p>min.</p>
                    </div>
                    <p className={styles["user-cost"]}>cost</p>
                    </div>
                </div>
                <div className={styles["table-controls"]}>
                    <div className={styles["table-price-wrapper"]}>
                    <input type="number" name="table-price" id="table-price-input"/>
                    <p className={styles["table-price-text"]}>€/hour</p>
                    <button type="button">+ add user</button>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}