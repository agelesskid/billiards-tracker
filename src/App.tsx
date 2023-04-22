import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import Table from './components/Table'

type TableType = {
  number: number,
  users: string[],
  price: number,
  time: number
}

export default function App() {

  const [tableList, setTableList] = useState<TableType[]>(loadTables())

  function loadTables(): TableType[] {
    const tablesJSON = localStorage.getItem("TABLES")
    if (tablesJSON == null) return []
    return JSON.parse(tablesJSON)
  }

  function addTable(){
    setTableList(prevList => [
      ...prevList,
      {number: tableList.length + 1, users: [], price: 0, time: 0}
    ])
  }

  function saveTables() {
    localStorage.setItem('TABLES', JSON.stringify(tableList))
  }

  const tablesEl = tableList.map(table=>{
    return <Table key={nanoid()} users={table.users} tableNumber={table.number} tablePrice={table.price} tableTime={table.time}/>
  })

  useEffect(()=>{
    saveTables()
  }, [tableList])

  return (
    <>
      <button type="button" onClick={addTable}>Add table</button>
      {tablesEl}
    </>
  )
}
