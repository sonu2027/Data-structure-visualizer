import { useEffect, useState } from "react"
interface MemoryProps {
    arrayLength: number;
    setArrayLength: React.Dispatch<React.SetStateAction<number>>;
    showArray: boolean;
    setShowArray: React.Dispatch<React.SetStateAction<boolean>>;
    timeStamp: string;
    setTimestamp: React.Dispatch<React.SetStateAction<string>>;
}
const Memory: React.FC<MemoryProps> = ({ arrayLength, setArrayLength, showArray, setShowArray, timeStamp, setTimestamp }) => {

    const [box, setBox] = useState<number[]>([])
    const [num, setNum] = useState<number>(0)
    const [arrElem, setArrElem] = useState<number[]>([])
    useEffect(() => {
        let arr = []
        for (let i = 0; i < 512; i++) {
            arr.push(i);
        }
        setBox(arr)

    }, [])

    useEffect(() => {
        let num: number = +(Math.random() * 511 + 1).toFixed(0);
        console.log("num is", num);
        setNum(num)

        let arr = []
        for (let index = 0; index < arrayLength; index++) {
            let num: number = Math.floor(Math.random() * 100);
            setArrElem((s) => [...s, num])
            arr.push(num)
        }

        let memo = document.getElementsByClassName("memo");
        console.log("memo: ", memo);

        if (showArray) {
            let i = num
            let index = 0
            const x = setInterval(() => {
                memo[i].className = "bg-blue-500 border-1 border-solid border-red-600 h-10 w-10 flex flex-col justify-center items-center memo"
                let div = document.createElement("div")
                div.innerHTML = String(arr[index])
                memo[i].appendChild(div)

                if (i >= num + arrayLength - 1) {
                    setShowArray(false)
                    clearInterval(x)
                }
                i++
                index++
            }, Number(timeStamp))

        }
    }, [arrayLength, showArray])

    return (
        <div className="flex flex-wrap justify-center items-center">
            {
                box.map((e) => <div key={e} className={`border-1 border-solid border-red-600 h-10 w-10 flex flex-col justify-center items-center memo`}>
                    <div className="text-gray-500 text-xs">{e * 4}</div>
                    {/* {
                        e >= num && e < num + arrayLength && <div>{arrElem[e - num]}</div>
                    } */}
                </div>)
            }
        </div>
    )
}

export default Memory