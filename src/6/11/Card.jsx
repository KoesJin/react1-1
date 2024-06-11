function Card(props) {
    // props 객체에서 title, backgroundColor, children 속성을 추출
    const { title, backgroundColor, children } = props;

    return (
        <div
            // 스타일 속성 설정
            style={{
                margin: 8, // 외부 여백
                padding: 8, // 내부 여백
                borderRadius: 8, // 모서리 둥글게
                boxShadow: '0px 0px 4px grey', // 그림자 효과
                backgroundColor: backgroundColor || 'white', // 배경색, 기본값은 흰색
            }}
        >
            {/* title이 존재하면 h1 요소로 출력 */}
            {title && <h1>{title}</h1>}
            {/* children은 하위 요소로 출력 */}
            {children}
        </div>
    );
}

export default Card;
