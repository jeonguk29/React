import React, { useState } from "react";

// 리엑트 훅을 하나 만듬 , 어떤 컴포넌트에서도 카운트를 쉽게 하기위해 
function useCounter(initialValue) {
    const [count, setCount] = useState(initialValue);

    const increaseCount = () => setCount((count) => count + 1);
    const decreaseCount = () => setCount((count) => Math.max(count - 1, 0)); // 0아래로 내려갈 수 없음 

    return [count, increaseCount, decreaseCount];
}

export default useCounter;
