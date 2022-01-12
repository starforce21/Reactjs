import receipts from "../Data"
import ReceiptData from "./ReceiptData"

console.log(receipts)
function Receipts() {
    return (
        <div id="flex">
            {receipts.map((data, index)=>{
               return (Math.random()<.5 ? true : false) ?  <div></div> : <ReceiptData item={data} key={index}/>
            }
            )}
        </div>
    )
}

export default Receipts