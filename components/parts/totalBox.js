'use client';
export default function TotalBox(props) {
  let total = props.total
  if(!total){
    total = {
      amount: 0,
      fllor: 1,
      color: 'info'
    }
  }

  return (
    <div className="col-lg-3 col-6">
      <div className={`small-box bg-${total.color}`}>
          <div className="inner">
          <h3>{total.amount}</h3>
          <p>{total.floor}階</p>
          </div>
      </div>
    </div>
  );
}
