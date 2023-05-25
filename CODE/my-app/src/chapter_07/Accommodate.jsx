import React, { useState, useEffect } from "react";
import useCounter from "./useCounter";

const MAX_CAPACITY = 10; // 최대 수용량

function Accommodate(props) {
    const [isFull, setIsFull] = useState(false);
    const [count, increaseCount, decreaseCount] = useCounter(0);

    useEffect(() => { // 의존성 배열이 없는 경우에 useEffect 훅
        console.log("======================");
        console.log("useEffect() is called.");
        console.log(`isFull: ${isFull}`);

        // 컴포넌트가 마운트된 (생성된)직후호출되며  이후 컴포넌트 업데이트 될때마다 호출됨 
    });

    useEffect(() => { // 의존성 배열이 있는 경우에 useEffect 훅
        setIsFull(count >= MAX_CAPACITY);
        console.log(`Current count value: ${count}`);
    }, [count]);
    // 컴포넌트가 마운트된 (생성된)직후호출되며  이후 카운트 값이 바뀔때 마다 호출됨 
    // 이때 용량이 가득찼는지 확인 하는걸 setIsFull 상태에 저장함 

    return (
        <div style={{ padding: 16 }}>
            <p>{`총 ${count}명 수용했습니다.`}</p>

            <button onClick={increaseCount} disabled={isFull}>
                입장
            </button>
            <button onClick={decreaseCount}>퇴장</button>

            {isFull && <p style={{ color: "red" }}>정원이 가득찼습니다.</p>}
        </div>
    );
}

export default Accommodate;
