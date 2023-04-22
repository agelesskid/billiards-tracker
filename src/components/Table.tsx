import styles from "../styles/table.module.css"
import { useState } from 'react'
import User from "./User"

type TableProps = {
    tableNumber: number
}

export default function Table(props: TableProps){

    const [tablePrice, setTablePrice] = useState<number | string>(0)
    const [usersList, setUsersList] = useState<any[]>([])

    function handleChange(){
        const inputEl = (document.getElementById('table-price-input') as HTMLInputElement)
        setTablePrice(inputEl.value)
    }

    function addUser() {
        setUsersList(prevUsersList => [...prevUsersList, <User />])
    }

    return (
        <>
            <div className={styles.table}>
                <h2>Table {props.tableNumber}</h2>
                <div className={styles["table-content-wrapper"]}>
                    <div className={styles["table-users"]} id="table-users">
                        {usersList}
                    </div>
                    <div className={styles["table-controls"]}>
                        <div className={styles["table-price-wrapper"]}>
                            <input className={styles["table-price-input"]} onChange={handleChange} value={tablePrice} type="number" name="table-price" id="table-price-input"/>
                            <p className={styles["table-price-text"]}>€/hour</p>
                        </div>
                        <button type="button" onClick={addUser}>+ add user</button>
                    </div>
                </div>
            </div>
        </>
    )
}