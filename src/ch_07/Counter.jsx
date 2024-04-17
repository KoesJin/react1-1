import { useEffect, useState } from 'react';

export default function Counter(props) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `총 ${count}번 눌렀습니다.`;
    }, []);

    // const [isOnline, setIsOnline] = useState(0);

    // function handleStatusChange(status) {
    //     setIsOnline(status.setIsOnline);
    // }

    // useEffect(() => {
    //     ServerAPI.subscribeUserStatus(props.user.id.handleStatusChange);
    //     return () => {
    //         ServerAPI.subscribeUserStatus(props.user.id.handleStatusChange);
    //     };
    //     // document.title = `총 ${count}번 눌렀습니다.`;
    // });
    // if (isOnline == null) {
    //     return '대기 중...';
    // }

    // return isOnline ? '온라인' : '오프라인';
}
