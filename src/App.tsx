import { useState } from 'react'
import Table from "./components/Table"


export default function App() {

  const [tableList, setTableList] = useState<any[]>([])

  function addTable(){
    setTableList(prevList => [...prevList, <Table tableNumber={tableList.length+1} />])
  }

  return (
    <>
      <button onClick={addTable}>Add table</button>
      {tableList}
    </>
  )
}
