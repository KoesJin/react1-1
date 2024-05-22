export default function AttendanceBook(props) {
    const students = [
        {
            name: '홍길동',
        },
        {
            name: '홍길동1',
        },
        {
            name: '홍길동2',
        },
        {
            name: '홍길동3',
        },
    ];

    return (
        <ul>
            {students.map((student, index) => (
                <li key={index}>{student.name}</li>
            ))}
        </ul>
    );
}
