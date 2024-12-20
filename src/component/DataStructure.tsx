import { useState } from "react"
interface MemoryProps {
    arrayLength: number;
    setArrayLength: React.Dispatch<React.SetStateAction<number>>;
    showArray: boolean;
    setShowArray: React.Dispatch<React.SetStateAction<boolean>>;
    timeStamp: string;
    setTimestamp: React.Dispatch<React.SetStateAction<string>>;
}
const DataStructure: React.FC<MemoryProps> = ({ setArrayLength, setShowArray, timeStamp, setTimestamp }) => {

    // const [ds, setDs] = useState<string[]>(["Array", "Linked List", "Stack", "Queue", "Tree", "Heap", "Graph"])
    const ds:string[]=["Array", "Linked List", "Stack", "Queue", "Tree", "Heap", "Graph"]
    const [prev, setPrev] = useState<React.MouseEvent<HTMLButtonElement> | null>(null)
    const [noOfElement, setNumberOfElement] = useState<string>('0')

    const handleCurrent = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(e);

        let target = e.target as HTMLButtonElement

        target.style.backgroundColor = 'blue';
        if (prev) {
            const prevButton = prev.target as HTMLButtonElement;
            prevButton.style.backgroundColor = 'gray';
        }
        setPrev(e);

        if (e.currentTarget.innerText == "Array") {
            setArrayLength(Number(noOfElement))
            setShowArray(true)
        }
    }

    const handleTimestamp = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTimestamp(String(100 * Number(e.target.value)))
    }

    const handleNoOfElement = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        setNumberOfElement(e.target.value)
    }

    return (
        <div>
            <div className="flex justify-between items-center mx-4">
                <div>
                    <div>Choose no of elemnt</div>
                    <div className="flex justify-center items-center">
                        <input value={noOfElement} onChange={handleNoOfElement} type="range" name="" id="" min={1} max={20} />
                        <span>{noOfElement}</span>
                    </div>
                </div>
                <div>
                    <div>Time stamp</div>
                    <div className="flex justify-center items-center">
                        <input value={Number(timeStamp) / 100} onChange={handleTimestamp} type="range" name="" id="" min={1} max={20} />
                        <span>{timeStamp}</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap">
                {
                    ds.map((e) => <button key={e} onClick={handleCurrent} className={`bg-gray-500 text-white mx-2 my-1 px-4 py-1 rounded-md`}>{e}</button>)
                }
                <button>Reset</button>
            </div>
        </div >
    )
}

export default DataStructure