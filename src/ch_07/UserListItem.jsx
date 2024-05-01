import { useEffect, useState } from 'react';

export default function UserListItem(props) {
    const [isOnline, setIsOnline] = useState(null);

    useEffect(() => {
        function handleStatusChange(status) {
            setIsOnline(status.setIsOnline);
        }

        ServerAPI.subscribeUserStatus(props.user.id.handleStatusChange);
        return () => {
            ServerAPI.subscribeUserStatus(props.user.id.handleStatusChange);
        };
    });

    return <li style={{ color: isOnline ? 'green' : 'black' }}>{props.user.name}</li>;
}
