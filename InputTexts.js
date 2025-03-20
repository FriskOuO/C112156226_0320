import React, { useState } from 'react';

export default function InputTexts({ onSubmit }) {
  const [memberName, setMemberName] = useState('');
  const [memberAccount, setMemberAccount] = useState('');

  const handleSubmit = () => {
    onSubmit(memberName, memberAccount);
  };

  return (
    <div className="member-info">
      <h2>會員資料</h2>
      <input
        type="text"
        placeholder="請輸入姓名"
        value={memberName}
        onChange={(e) => setMemberName(e.target.value)}
      />
      <input
        type="text"
        placeholder="請輸入帳號"
        value={memberAccount}
        onChange={(e) => setMemberAccount(e.target.value)}
      />
      <button onClick={handleSubmit}>送出</button>
    </div>
  );
}