import { useState } from 'react'

type TableType = {
  number: number | string,
  users: string[],
  price: number | string,
  time: number | string
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
    saveTables()
  }

  function saveTables() {
    localStorage.setItem('TABLES', JSON.stringify(tableList))
}

  return (
    <>
      <button type="button" onClick={addTable}>Add table</button>
      {tableList}
    </>
  )
}
