import DataStructure from "./component/DataStructure.tsx"
import Memory from "./component/Memory.tsx"
import { useState } from "react"

function App() {

  const [arrayLength, setArrayLength]=useState<number>(0)
  const [showArray, setShowArray]=useState<boolean>(false)
  const [timeStamp, setTimestamp] = useState<string>('0')

  return (
    <>
    <h1 className="text-center text-xl underline text-slate-800">Data structure visualizer</h1>
      <div className="mt-4">
      <Memory arrayLength={arrayLength} setArrayLength={setArrayLength} showArray={showArray} setShowArray={setShowArray} timeStamp={timeStamp} setTimestamp={setTimestamp}/>
      <div className="my-8">
      </div>
      <DataStructure arrayLength={arrayLength} setArrayLength={setArrayLength} showArray={showArray} setShowArray={setShowArray} timeStamp={timeStamp} setTimestamp={setTimestamp}/>
      </div>
    </>
  )
}

export default App
