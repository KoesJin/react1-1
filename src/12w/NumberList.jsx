import React from 'react';

export default function NumberList(props) {
    // const { numbers } = props;

    // const numbers = [1, 2, 3, 4, 5];
    const todoLists = [
        {
            id: 1,
            todo: '할 일1',
        },
        {
            id: 2,
            todo: '할 일2',
        },
        {
            id: 3,
            todo: '할 일3',
        },
        {
            id: 4,
            todo: '할 일4',
        },
        {
            id: 5,
            todo: '할 일5',
        },
    ];

    // const listItems = numbers.map((number, index) => <li key={index}>{number}</li>);

    //const TodoList = todoLists.map((todolist) => <li key={todolist.id}>{todolist.todo}</li>);

    const foos = todoLists.map((foo) => <li key={`-sutdent-id-${foo.id}`}>{foo.todo}</li>);

    return (
        <>
            {/* <ul>{TodoList}</ul> */}
            <ul>{foos}</ul>
        </>
    );
}
