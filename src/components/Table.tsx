import styles from "../styles/table.module.css"
import { useState, useEffect } from 'react'
import { nanoid } from "nanoid"

type TableProps = {
    tableNumber: number
    users: string[]
}

export default function Table(props: TableProps){
    const [tablePrice, setTablePrice] = useState<number>(0)
    const [usersList, setUsersList] = useState<any[]>([])
    const [usersTime, setUsersTime] = useState<number>(0)
    const [userDebt, setUserDebt] = useState<number>(0)

    useEffect(()=>{
        
    }, [])

    function handleTablePriceChange(){
        const inputEl = (document.getElementById('table-price-input') as HTMLInputElement)
        setTablePrice(inputEl.valueAsNumber)
    }

    function handleUsersTimeChange(){
        const inputEl = (document.getElementById('user-time-input') as HTMLInputElement)
        setUsersTime(inputEl.valueAsNumber)
    }

    function addUser() {
        setUsersList(prevUsersList => [...prevUsersList, <input key={nanoid()} type="text" name="user-name" id="user-name-input" placeholder="Name" />])
    }

    function checkPrice() {
        setUserDebt(tablePrice/(usersList.length)*usersTime)
    }

    function handleChange() {
        handleUsersTimeChange()
        checkPrice()
    }

    useEffect(()=>{
        checkPrice()
    }, [tablePrice, usersList, usersTime, userDebt])

    return (
        <>
            <div className={styles.table}>
                <h2>Table {props.tableNumber}</h2>
                <div className={styles["table-content-wrapper"]}>
                    <div className={styles["table-users"]} id="table-users">
                        <div className={styles["user-names-wrapper"]}>
                            {usersList}
                        </div>
                        <div className={styles["user-details-wrapper"]}>
                            <div className={styles["user-time-wrapper"]}>
                                <input type="number" value={usersTime} onChange={handleChange} name="user-time" id="user-time-input" placeholder="time"/>
                                <p>h.</p>
                            </div>
                            <span className={styles["user-cost"]}>{userDebt}€ each</span>
                        </div>
                    </div>
                    <div className={styles["table-controls"]}>
                        <div className={styles["table-price-wrapper"]}>
                            <input className={styles["table-price-input"]} onChange={handleTablePriceChange} value={tablePrice} type="number" name="table-price" id="table-price-input"/>
                            <p className={styles["table-price-text"]}>€/hour</p>
                        </div>
                        <button type="button" onClick={addUser}>+ add user</button>
                    </div>
                </div>
            </div>
        </>
    )
}