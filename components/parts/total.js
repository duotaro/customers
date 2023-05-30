'use client';
import TotalBox from "./totalBox";

export default function Total(props) {
  let total = props.total
  if(!total){
    total = [
        {
            amount: 24,
            floor: 1
        },
        {
            amount: 31,
            floor: 2
        },
        {
            amount: 22,
            floor: 3
        },
        {
            amount: 33,
            floor: 4
        }
    ]
  }
  
  return (
    <div className="row">
        {total.map((item) => {
            return (
                <TotalBox total={item} key={item.floor} />
            )
        })}
    </div>

  );
}
