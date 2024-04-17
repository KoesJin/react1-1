import React, { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);

    const onclick = () => {
        setCount(count + 1);
    };

    return (
        <>
            <p>총 {count} 번 클릭했습니다.</p>
            <button onClick={onclick}>클릭</button>
        </>
    );
}
