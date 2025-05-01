import React from "react";

const products = [
  {title : 'apple',isPhone: false, id:1 },
  {title : 'pc',isPhone: false, id:2 },
  {title : 'oppo',isPhone: true, id:3 }
]

export default function App() {
  const list = products.map(product => 
    <li key={product.id} style={{color: product.isPhone ? "red" : "green"}}>{product.title}</li>) 
  return(
    <div>
      <ul>{list}</ul>
    </div>
  );
}
