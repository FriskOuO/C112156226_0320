import './App.css';
import React, { useState } from 'react';
import InputTexts from './InputTexts';
import Numbers from './Numbers';

function App() {
  const [product1Count, setProduct1Count] = useState(0);
  const [product2Count, setProduct2Count] = useState(0);
  const [memberName, setMemberName] = useState('');
  const [memberAccount, setMemberAccount] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const totalProducts = product1Count + product2Count;

  const handleMemberSubmit = (name, account) => {
    setMemberName(name);
    setMemberAccount(account);
    setSubmitted(true);
  };

  return (
    <div className="App-body">
      <h1>商品列表</h1>
      <Numbers
        product1Count={product1Count}
        setProduct1Count={setProduct1Count}
        product2Count={product2Count}
        setProduct2Count={setProduct2Count}
      />
      <InputTexts onSubmit={handleMemberSubmit} />
      {submitted && (
        <div className="member-details">
          <p>姓名：{memberName}</p>
          <p>帳號：{memberAccount}</p>
          <p>總計商品數量：{totalProducts}</p>
        </div>
      )}
    </div>
  );
}

export default App;