import React, { useState } from 'react';

function Product({ name, count, onIncrement, onDecrement }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>數量：{count}</p>
      <button onClick={onIncrement}>加1</button>
      <button onClick={onDecrement}>減1</button>
    </div>
  );
}

function ProductWithInput({ name, count, onInputChange }) {
  return (
    <div>
      <h2>{name}</h2>
      <input
        type="number"
        value={count}
        onChange={(e) => onInputChange(parseInt(e.target.value, 10))}
      />
    </div>
  );
}

export default function Numbers({ product1Count, setProduct1Count, product2Count, setProduct2Count }) {
  return (
    <div>
      <Product
        name="蘋果"
        count={product1Count}
        onIncrement={() => setProduct1Count(product1Count + 1)}
        onDecrement={() => setProduct1Count(product1Count - 1)}
      />
      <ProductWithInput
        name="鳳梨"
        count={product2Count}
        onInputChange={setProduct2Count}
      />
    </div>
  );
}