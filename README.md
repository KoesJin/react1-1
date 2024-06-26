# 202030408 김진석

⭐️ [Gitgub Push](#github-push-하기)

⭐️⭐️ [Github Pages 배포](#create-react-app-github-pages-배포)

🔥 수업 소스코드
https://github.com/soaple/first-met-react-practice-v18

2️⃣ [2주차](#2주차-3월-13일-강의-내용)

3️⃣ [3주차](#3주차-3월-20일-강의-내용)

4️⃣ [4주차](#4주차-3월-27일-강의-내용)

5️⃣ [5주차](#5주차-4월-3일-강의-내용)

6️⃣ [6주차] 휴강

7️⃣ [7주차](#7주차-4월-17일-강의-내용)

8️⃣ [8주차] 중간고사

9️⃣ [9주차](#9주차-5월-1일-강의-내용)

🔟 [10주차](#10주차-5월-8일-강의-내용)

1️⃣1️⃣ [11주차] 휴강

1️⃣2️⃣ [12주차](#12주차5월-22일-강의-내용)

1️⃣3️⃣ [13주차](#13주차-5월-29일-강의-내용)

1️⃣4️⃣ [14주차](#14주차-6월-5일-강의-내용)

1️⃣5️⃣ [15주차 보강 (6주차 보강)](#15주차-보강-6월-11일-강의-내용)

<hr>

# 15주차 (6주차보강) (6월 11일 강의 내용)

## [2] Specialization(특수화, 전문화)

<img width="896" alt="스크린샷 2024-06-11 오전 10 06 05" src="https://github.com/KoesJin/react1-1/assets/160344942/3f676775-edb7-442c-b38d-c37fc7104e61">

<hr>

## [3] Containment와 Specialization을 같이 사용하기

<img width="913" alt="스크린샷 2024-06-11 오전 10 12 32" src="https://github.com/KoesJin/react1-1/assets/160344942/44fa9d27-8fa8-4f23-acaa-cd336846c962">

<hr>

## 13.2 상속에 대해 알아보기

<img width="899" alt="스크린샷 2024-06-11 오전 10 19 40" src="https://github.com/KoesJin/react1-1/assets/160344942/5bf6530c-e290-44ca-a76d-3db4c7bf34f9">

<hr>

## 13.3(실습) Card 컴포넌트 만들기

<img width="891" alt="스크린샷 2024-06-11 오전 10 21 32" src="https://github.com/KoesJin/react1-1/assets/160344942/245a6099-f1ef-4e39-a595-48c1b0a10310">

-   실습 코드

```
Card.jsx

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

```

```
ProfileCard.jsx

import Card from './Card';

function ProfileCard(props) {
    return (
        <Card title="Inje Lee" backgroundColor="#4ea04e">
            <p>안녕하세요, 소플입니다.</p>
            <p>저는 리액트를 사용해서 개발하고 있습니다.</p>
        </Card>
    );
}

export default ProfileCard;

```

<hr>

## 13.4 마치며

<img width="894" alt="스크린샷 2024-06-11 오전 10 38 55" src="https://github.com/KoesJin/react1-1/assets/160344942/e5a45d27-91b0-4778-9091-892f05de4476">

<hr>

## 14.1 컨텍스트란 무엇인가?

<img width="908" alt="스크린샷 2024-06-11 오전 10 41 39" src="https://github.com/KoesJin/react1-1/assets/160344942/61867e31-43e4-4365-a81d-deaa8be9a19a">

<hr>

## 14.2 언제 컨텍스트를 사용해야 할까?

<img width="905" alt="스크린샷 2024-06-11 오전 10 47 58" src="https://github.com/KoesJin/react1-1/assets/160344942/442f23f0-5777-47d7-9b68-d3a837e53a17">

<img width="905" alt="스크린샷 2024-06-11 오전 11 25 16" src="https://github.com/KoesJin/react1-1/assets/160344942/2fde4069-170a-43e5-a1e4-5ff98df4c5cf">

-   props만 쓸경우 한계점 (복잡해지고 길어짐)

<img width="1448" alt="스크린샷 2024-06-11 오전 11 11 14" src="https://github.com/KoesJin/react1-1/assets/160344942/10e86549-c9be-4203-ba2c-8f846bac9f44">

<hr>

## 14.3 컨텍스트를 사용하기 전에 고려할 점

<img width="897" alt="스크린샷 2024-06-11 오전 11 26 18" src="https://github.com/KoesJin/react1-1/assets/160344942/76b9b75a-64f2-4541-a107-cc2f2961e7f3">

<img width="898" alt="스크린샷 2024-06-11 오전 11 36 16" src="https://github.com/KoesJin/react1-1/assets/160344942/ff0e4651-58ff-479c-971d-c2acef1697f1">

<hr>

## 14.4 컨텍스트 API

### [1]

<img width="874" alt="스크린샷 2024-06-11 오전 11 42 59" src="https://github.com/KoesJin/react1-1/assets/160344942/ffe9acc6-09c1-4136-a377-dd56472b370e">

### [2]

<img width="905" alt="스크린샷 2024-06-11 오전 11 44 51" src="https://github.com/KoesJin/react1-1/assets/160344942/b4779fa3-5320-43f2-b295-5efb18cb02e2">

### [3] ,[4]

<img width="904" alt="스크린샷 2024-06-11 오후 12 06 41" src="https://github.com/KoesJin/react1-1/assets/160344942/90303cd8-3edc-4603-9111-978355dac57c">

### [5]

<img width="896" alt="스크린샷 2024-06-11 오후 12 10 04" src="https://github.com/KoesJin/react1-1/assets/160344942/41e5b20c-5028-4e20-a567-cf3c58d365bb">

<hr>

## 14.5 여러 개의 컨텍스트 사용하기

<img width="905" alt="스크린샷 2024-06-11 오후 12 15 21" src="https://github.com/KoesJin/react1-1/assets/160344942/17856359-92a3-4f2d-8ad7-65c12ef693ba">

<hr>

## 14.6 useContext

<img width="905" alt="스크린샷 2024-06-11 오후 12 17 31" src="https://github.com/KoesJin/react1-1/assets/160344942/fe85a1dc-213d-47a5-99c4-4ae64fe7da9f">

<hr>

# 14주차 (6월 5일 강의 내용)

## 12.2 하위 컴포넌트에서 state 공유하기

### (1)

<img width="812" alt="스크린샷 2024-06-05 오전 10 06 59" src="https://github.com/KoesJin/react1-1/assets/160344942/908de83e-6244-4260-b40e-ac90aede6f1a">

<hr>

### (2)

<img width="794" alt="스크린샷 2024-06-05 오전 10 31 08" src="https://github.com/KoesJin/react1-1/assets/160344942/329bb2bf-8338-4b5c-9f64-1b8b3f640d0c">

<hr>

### (3)

<img width="793" alt="스크린샷 2024-06-05 오전 10 43 48" src="https://github.com/KoesJin/react1-1/assets/160344942/8d3071c9-e71d-409b-958e-77863b5c0a38">

<hr>

### (4)

<img width="815" alt="스크린샷 2024-06-05 오전 11 10 07" src="https://github.com/KoesJin/react1-1/assets/160344942/ec6b9154-8fb2-4f04-9cdd-52538b9ebfde">

<hr>

### (4)

<img width="815" alt="스크린샷 2024-06-05 오전 11 10 07" src="https://github.com/KoesJin/react1-1/assets/160344942/ec6b9154-8fb2-4f04-9cdd-52538b9ebfde">

<hr>

### (5)

<img width="817" alt="스크린샷 2024-06-05 오전 11 17 27" src="https://github.com/KoesJin/react1-1/assets/160344942/e5488ac4-b60f-454c-8131-b7bdb50ccc3f">

<hr>

### 결과

<img width="1710" alt="스크린샷 2024-06-05 오전 11 27 07" src="https://github.com/KoesJin/react1-1/assets/160344942/bd609164-3849-4ee5-8b48-f66efec357bb">

<img width="1710" alt="스크린샷 2024-06-05 오전 11 27 14" src="https://github.com/KoesJin/react1-1/assets/160344942/556cb0f2-fcf4-4f68-9c0b-f4247ea38c21">

```
TemperautreInput.jsx

const scaleNames = {
    c: '섭씨',
    f: '화씨',
};

function TemperatureInput(props) {
    const handleChange = (event) => {
        props.onTemperatureChange(event.target.value);
    };

    return (
        <fieldset>
            <legend>온도를 입력해주세요(단위:{scaleNames[props.scale]})</legend>
            <input value={props.temperature} onChange={handleChange} />
        </fieldset>
    );
}

export default TemperatureInput;

```

```
Calculatore.jsx

import React, { useState } from 'react';
import TemperatureInput from './TemperatureInput';

// 물이 끓는지 여부를 판단하는 컴포넌트
function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>물이 끓습니다.</p>;
    }
    return <p>물이 끓지 않습니다.</p>;
}

// 화씨를 섭씨로 변환하는 함수
function toCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
}

// 섭씨를 화씨로 변환하는 함수
function toFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
}

// 주어진 온도를 변환하는 함수
function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    // 소수점 세 자리로 반올림
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

// 온도 변환기 컴포넌트
function Calculator(props) {
    // 온도 상태 관리
    const [temperature, setTemperature] = useState('');
    // 온도 단위 상태 관리
    const [scale, setScale] = useState('c');

    // 섭씨 온도 변경 핸들러
    const handleCelsiusChange = (temperature) => {
        setTemperature(temperature);
        setScale('c');
    };

    // 화씨 온도 변경 핸들러
    const handleFahrenheitChange = (temperature) => {
        setTemperature(temperature);
        setScale('f');
    };

    // 현재 스케일에 따라 온도 변환
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    // 렌더링
    return (
        <div>
            {/* 섭씨 입력 컴포넌트 */}
            <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={handleCelsiusChange} />
            {/* 화씨 입력 컴포넌트 */}
            <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={handleFahrenheitChange} />
            {/* 물이 끓는지 여부를 보여주는 컴포넌트 */}
            <BoilingVerdict celsius={parseFloat(celsius)} />
        </div>
    );
}

// Calculator 컴포넌트를 기본으로 내보냄
export default Calculator;

```

<hr>

## 13.1 합성에 대해 알아보기

<img width="808" alt="스크린샷 2024-06-05 오후 12 19 04" src="https://github.com/KoesJin/react1-1/assets/160344942/70d78426-7106-4edd-98b2-694ade5505b6">

<img width="797" alt="스크린샷 2024-06-05 오후 12 22 20" src="https://github.com/KoesJin/react1-1/assets/160344942/842178b8-8a4d-4cef-8a5d-466fd757915e">

<hr>

## React.createElemnet에 관하여

<img width="789" alt="스크린샷 2024-06-05 오후 12 23 52" src="https://github.com/KoesJin/react1-1/assets/160344942/f06e6d92-2e87-4b9c-bcfa-9de471b66234">

<hr>

### FancyBorder 사용

<img width="803" alt="스크린샷 2024-06-05 오후 12 27 26" src="https://github.com/KoesJin/react1-1/assets/160344942/68f955c9-0b37-47a5-9544-c1065685f66b">

<img width="811" alt="스크린샷 2024-06-05 오후 12 40 18" src="https://github.com/KoesJin/react1-1/assets/160344942/19be228b-137a-4483-8a06-9ca41af93053">

<hr>

```
SplitPane.jsx

import React from 'react';

function SplitPane(props) {
return (
<div className="SplitPane">
<div className="SplitPane-left">{props.left}</div>
<div className="SplitPane-right">{props.right}</div>
</div>
);
}

export default SplitPane;

```

<hr>

# 13주차 (5월 29일 강의 내용)

## 11.3 textarea 태그

<img width="915" alt="스크린샷 2024-05-29 오전 11 23 19" src="https://github.com/KoesJin/react1-1/assets/160344942/c0456af9-7ca7-4954-9b02-51d3184d34be">

<hr>

## 11.4 select 태그

<img width="885" alt="스크린샷 2024-05-29 오전 11 24 53" src="https://github.com/KoesJin/react1-1/assets/160344942/157665c7-2b8d-45db-a69e-827a0b5f63b6">

<hr>

## 11.5 File input 태그 및 11.6 여러개의 입력 다루기

<img width="896" alt="스크린샷 2024-05-29 오전 11 27 22" src="https://github.com/KoesJin/react1-1/assets/160344942/c484afe6-3b04-466d-9b47-30865a7c4430">

<hr>

## 11.7 Input Null Value

<img width="897" alt="스크린샷 2024-05-29 오전 11 30 43" src="https://github.com/KoesJin/react1-1/assets/160344942/dc3c5331-3915-4e02-8a2b-64c8666a0bcb">

<hr>

## 11.8 사용자 정보 받아오기

<img width="881" alt="스크린샷 2024-05-29 오전 11 38 32" src="https://github.com/KoesJin/react1-1/assets/160344942/d64b7563-d870-466a-b4c4-d5458ca1af5c">

<hr>

### 실습 코드 (사용자 정보 받아오기)

```

import { useState } from 'react';

function SignUp() {
const [name, setName] = useState('');
const [gender, setGender] = useState('남자');

    const handleChangeName = (event) => {
        setName(event.target.value);
    };

    const handleChangeGender = (event) => {
        setGender(event.target.value);
    };

    const handleSubmit = (event) => {
        alert(`이름: ${name}, 성별: ${gender}`);
        event.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                이름:
                <input type="text" value={name} onChange={handleChangeName} />
            </label>
            <br />
            <label>
                성별:
                <select value={gender} onChange={handleChangeGender}>
                    <option value="남자">남자</option>
                    <option value="여자">여자</option>
                </select>
            </label>
            <button type="submit">제출</button>
        </form>
    );

}

export default SignUp;

```

<hr>

# 12주차(5월 22일 강의 내용)

### Toolbar.jsx

```

import React from 'react';

const styles = {
wrapper: {
padding: 16,
display: 'flex',
flexDirection: 'row',
borderBottom: '1px solid grey',
},
greeting: {
marginRight: 8,
},
};

function Toolbar(props) {
const { isLoggedIn, onClickLogin, onClickLogout } = props;

    return (
        <div style={styles.wrapper}>
            {isLoggedIn && <span style={styles.greeting}>환영합니다!</span>}

            {isLoggedIn ? (
                <button onClick={onClickLogout}>로그아웃</button>
            ) : (
                <button onClick={onClickLogin}>로그인</button>
            )}
        </div>
    );

}

export default Toolbar;

```

<hr>

### LandingPage.jsx

```

import React, { useState } from 'react';
import Toolbar from '../12w/TooBar';

function LandingPage() {
const [isLoggedIn, setIsLoggedIn] = useState(false);

    const onClickLogin = () => {
        setIsLoggedIn(true);
    };

    const onClickLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <div>
            <Toolbar isLoggedIn={isLoggedIn} onClickLogin={onClickLogin} onClickLogout={onClickLogout} />
            <div style={{ padding: 16 }}>KJS 랜딩 페이지</div>
        </div>
    );

}

export default LandingPage;

```

<hr>

-   결과

<img width="1710" alt="스크린샷 2024-05-22 오전 10 24 33" src="https://github.com/KoesJin/react1-1/assets/160344942/5abf1857-af21-41ab-8c18-7863dfb0378e">

<hr>

<img width="1710" alt="스크린샷 2024-05-22 오전 10 24 37" src="https://github.com/KoesJin/react1-1/assets/160344942/2a4ff0e3-5719-449b-8469-edffaa00d8f8">

<hr>

## 10.1 리스트와 키란 무엇인가? , 10.2 여러 개의 컴포넌트 렌더링 하기

<img width="918" alt="스크린샷 2024-05-22 오전 11 13 54" src="https://github.com/KoesJin/react1-1/assets/160344942/4b355496-5996-4f65-a39d-e06991b75fb4">

<hr>

## map() 함수 예제

<img width="918" alt="스크린샷 2024-05-22 오전 11 13 54" src="https://github.com/KoesJin/react1-1/assets/160344942/4b355496-5996-4f65-a39d-e06991b75fb4">

<hr>

## 10.3 기본적인 리스트 컴포넌트

<img width="911" alt="스크린샷 2024-05-22 오전 11 23 56" src="https://github.com/KoesJin/react1-1/assets/160344942/a530ec28-b9c5-45b2-b94f-04017a0938aa">

<hr>

### NumberList.jsx

```

export default function NumberList(props) {
const { numbers } = props;

    const listItems = numbers.map((number) => <li key={number.toString()}>{number}</li>);

    return <ul>{listItems}</ul>;

}

```

<hr>

### App.js

```

const numbers = [1, 2, 3, 4, 5];

function App() {
return (
<div>
{/_ <LandingPage /> _/}
<NumberList numbers={numbers} />
</div>
);
}

```

-   key props가 없어 문제 발생

<hr>

## 10.4 리스트 키에 대해 알아보기

<img width="897" alt="스크린샷 2024-05-22 오전 11 36 10" src="https://github.com/KoesJin/react1-1/assets/160344942/ccc49a52-6942-42d6-92f7-ce9d47f19383">

<hr>

## 실습

```

//변겅전
const listItems = numbers.map((number) => <li>{number}</li>);

//변경후
const listItems = numbers.map((number) => <li key={number.toString()}>{number}</li>);

//index 사용해서 변경 가능
const listItems = numbers.map((number, index) => <li key={index}>{number}</li>);

```

<hr>

### id값을 keyProps 이용 todoList 생성

```

export default function NumberList(props) {

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

    const TodoList = todoLists.map((todolist) => <li key={todolist.id}>{todolist.todo}</li>);

    return <ul>{TodoList}</ul>;

}

```

<hr>

### index값을 keyporps 이용 todoList 생성

```

export default function NumberList(props) {
// const { numbers } = props;

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

    const foos = todoLists.map((foo, index) => <li key={index}>{foo.todo}</li>);

    return (
        <>
            <ul>{foos}</ul>
        </>
    );

}

```

<hr>

### 포맷팅된 문자열을 keyProps 이용해서 todoList 생성

```

export default function NumberList(props) {

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

    const foos = todoLists.map((foo) => <li key={`-sutdent-id-${foo.id}`}>{foo.todo}</li>);

    return (
        <>
            <ul>{foos}</ul>
        </>
    );

}

```

<hr>

## 10.5 출석부 실습

### keyProps 사용 x

```

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
            {students.map((student) => (
                <li>{student.name}</li>
            ))}
        </ul>
    );

}

```

<hr>

### keyProps 사용

```

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

```

<hr>

## 10.6 마치며

<img width="918" alt="스크린샷 2024-05-22 오전 11 39 50" src="https://github.com/KoesJin/react1-1/assets/160344942/c0a665d2-8255-45a0-891d-e6b5a0502326">

<hr>

## 11.1 폼이란 무엇인가?

<img width="897" alt="스크린샷 2024-05-22 오후 12 30 39" src="https://github.com/KoesJin/react1-1/assets/160344942/8c813977-3fe5-49f2-a2aa-6800ef5f2468">

<hr>

## 11.2 제어 컴포넌트

<img width="885" alt="스크린샷 2024-05-22 오후 12 32 09" src="https://github.com/KoesJin/react1-1/assets/160344942/06cde73c-fe08-454e-a1ed-e0c49e089ded">

<hr>

<img width="898" alt="스크린샷 2024-05-22 오후 12 33 02" src="https://github.com/KoesJin/react1-1/assets/160344942/956bdfbf-61f3-4d06-a924-495cbcce515c">

<hr>

### NameForm.jsx

```

import React, { useState } from 'react';

function NameForm(props) {
const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleSubmit = (event) => {
        alert('입력한 이름: ' + value);
        event.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                이름:
                <input type="text" value={value} onChange={handleChange} />
            </label>
            <button type="submit">제출</button>
        </form>
    );

}

export default NameForm;

```

<hr>

-   결과

<img width="1710" alt="스크린샷 2024-05-22 오후 12 44 11" src="https://github.com/KoesJin/react1-1/assets/160344942/7efe89ab-eb93-4668-8f2f-7ef351df97be">

<hr>

<img width="1710" alt="스크린샷 2024-05-22 오후 12 44 16" src="https://github.com/KoesJin/react1-1/assets/160344942/e48ccb51-ec3c-4afa-aef5-f3a391f113be">

<hr>

# 11주차(휴강)

<hr>

# 10주차 (5월 8일 강의 내용)

## Arguments 전달하기

-   함수에 전달할 데이터를 Argument라고 한다.
-   클래스 컴포넌트는 bind 함수를 사용해서 전달한다.
-   함수형 컴포넌트는 arrow function을 주로 사용한다.

<hr>

```

import { useState } from 'react';
import WarningBanner from './WarningBanner';

export default function MainPage() {
const [showWarning, setShowWarning] = useState(false);

    const toggleClick = () => {
        setShowWarning((prevShowWarning) => !prevShowWarning);
    };

    return (
        <div>
            <WarningBanner warning={showWarning} />
            <button onClick={toggleClick}>{showWarning ? '감추기' : '보여주기'}</button>
        </div>
    );

}

```

-   showWarning props 를 setShowWaring 화살표 함수 인자(prevShowWaring)에 전달
-   showWarning props를 WarningBanner(props) 에 전달

```

export default function WarningBanner(props) {
if (props.warning) {
return null;
}
return <div>경고!!</div>;
}

```

<hr>

## 엘리먼트 변수

-   렌더링 해야 할 컴포넌트를 변수처럼 다루고 싶을 때 엘리먼트 변수를 사용한다.
-   button 변수에 담아 컴포넌트를 대입한 예제 코드

```

    let button;
    if (isLogedIn) {
      button = <LogoutButton onClick={handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={handleLoginClick} />;
    }

```

<hr>

## 인라인 조건

-   별도로 분리된 곳에 적성하지 않고, 해당 코드가 필요한 곳 안에 직접 집어넣는다.

-   인라인 조건은 조건문을 코드 안에 집어 넣는 것이다.

```

true && expression -> expression
false && expression -> false

```

<hr>

## 삼항 연산자

-   삼항연산자를 이용해서 인라인 if-else 를 사용할 수 있다. `<조건문> ? 참일경우 : 거짓일 경우`

<hr>

## 컴포넌트 렌더링 막기

-   컴포넌트를 렌더링 하고 싶지 않을 때는 null을 반환한다.

```

export default function WarningBanner(props) {
if (props.warning) {
return null;
}
return <div>경고!!</div>;
}

```

-   False인 경우에만 null을 반환하기 때문에 컴포넌트를 출력하지 않는다.

<hr>

### LoginControl.jsx

```

import { useState } from 'react';
import Greeting from './Greeting';

export default function LoginControl() {
const [isLogedIn, setIsLogedIn] = useState(false);

    const handleLoginClick = () => {
        setIsLogedIn(true);
    };

    const handleLogoutClick = () => {
        setIsLogedIn(false);
    };

    return (
        <div>
            <Greeting isLogedIn={isLogedIn} />

            {isLogedIn ? <LogoutButton onClick={handleLogoutClick} /> : <LoginButton onClick={handleLoginClick} />}
        </div>
    );

}

function LogoutButton(props) {
return <button onClick={props.onClick}>로그아웃</button>;
}

function LoginButton(props) {
return <button onClick={props.onClick}>로그인</button>;
}

```

### Greeting.jsx

```

export default function Greeting(props) {
if (props.isLogedIn) {
return <p>환영합니다.</p>;
} else {
return <p>로그인해 주세요.</p>;
}
}

```

<hr>

-   로그인 전

<img width="1710" alt="스크린샷 2024-05-10 오후 5 20 37" src="https://github.com/KoesJin/react1-1/assets/160344942/73c6977b-04a0-427f-92f8-c7d79c32bcfe">

<hr>

-   로그인 후

<img width="1710" alt="스크린샷 2024-05-10 오후 5 20 40" src="https://github.com/KoesJin/react1-1/assets/160344942/4bac8166-edb6-4164-a5df-931af109e4a0">

<hr>

# 9주차 (5월 1일 강의 내용)

<img width="915" alt="스크린샷 2024-05-01 오전 10 19 22" src="https://github.com/KoesJin/react1-1/assets/160344942/f2eb49c2-ca6e-4cc6-bd7f-1744a51ca75f">

<hr>

## 7.8 나만의 훅 만들기

<img width="915" alt="스크린샷 2024-05-01 오전 10 22 03" src="https://github.com/KoesJin/react1-1/assets/160344942/9e1ac139-7e43-4c3c-9e8d-001a8bfad246">

<hr>

<img width="909" alt="스크린샷 2024-05-01 오전 10 48 07" src="https://github.com/KoesJin/react1-1/assets/160344942/6031c443-f52e-469d-93df-5d515da3fe87">

<hr>

### UseStatus 컴포넌트

```

import { useEffect, useState } from 'react';

export default function UserStatus(props) {
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

    if (isOnline == null) {
        return '대기 중...';
    }
    return isOnline ? '온라인' : '오프라인';

}

```

<hr>

### UserListItem 컴포넌트

```

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

```

<hr>

## 2 커스텀 훅 추출하기

<img width="895" alt="스크린샷 2024-05-01 오전 10 49 22" src="https://github.com/KoesJin/react1-1/assets/160344942/304d1127-4291-4b21-9508-386e3696c741">

<hr>

## 추출시 주의사항

<img width="916" alt="스크린샷 2024-05-01 오전 11 10 06" src="https://github.com/KoesJin/react1-1/assets/160344942/499e0a2f-d6ac-4ce5-b2d0-aa5e74512876">

<hr>

## 3. 커스텀 훅 사용하기

<img width="862" alt="스크린샷 2024-05-01 오전 11 11 49" src="https://github.com/KoesJin/react1-1/assets/160344942/95144a51-36b0-4cd7-b7c9-b6d9b7968c0a">

<hr>

## 7.9 훅을 사용한 컴포넌트 개발 (실습)

### useCounter 컴포넌트

```

import { useState } from 'react';

function useCounter(initialValue) {
const [count, setCount] = useState(initialValue);

    const increaseCount = () => setCount((count) => count + 1);
    const decreaseCount = () => setCount((count) => Math.max(count - 1, 0));

    return [count, increaseCount, decreaseCount];

}

export default useCounter;

```

<hr>

### Accommodate 컴포넌트

```

import React, { useState, useEffect } from 'react';
import useCounter from './useCounter';

const MAX_CAPACITY = 10;

function Accommodate() {
const [isFull, setIsFull] = useState(false);
const [count, increaseCount, decreaseCount] = useCounter(0);

    useEffect(() => {
        console.log('======================');
        console.log('useEffect() is called.');
        console.log(`isFull: ${isFull}`);
    });

    useEffect(() => {
        setIsFull(count >= MAX_CAPACITY);
        console.log(`Current count value: ${count}`);
    }, [count]);

    return (
        <div style={{ padding: 16 }}>
            <p>{`총 ${count}명 수용했습니다.`}</p>

            <button onClick={increaseCount} disabled={isFull}>
                입장
            </button>
            <button onClick={decreaseCount}>퇴장</button>

            {isFull && <p style={{ color: 'red' }}>정원이 가득찼습니다.</p>}
        </div>
    );

}

export default Accommodate;

```

<hr>

## 8.1 이벤트 처리하기

<img width="902" alt="스크린샷 2024-05-01 오후 12 20 07" src="https://github.com/KoesJin/react1-1/assets/160344942/d1145337-2609-4990-9c55-9ea7719b294d">

<hr>

### 이벤트 핸들러 추가

<img width="879" alt="스크린샷 2024-05-01 오후 12 23 21" src="https://github.com/KoesJin/react1-1/assets/160344942/71d27835-7a85-404d-99d8-c8f097274753">

<hr>

# 8주차 (중간고사)

<hr>

# 7주차 (4월 17일 강의 내용)

-   결과코드 분석

<img width="807" alt="스크린샷 2024-04-17 오전 10 14 47" src="https://github.com/KoesJin/react1-1/assets/160344942/d836cbd4-7784-457d-94f1-ef2b90b55e75">

<hr>

## 7.1 훅이란 무엇인가?

<img width="883" alt="스크린샷 2024-04-17 오전 10 31 51" src="https://github.com/KoesJin/react1-1/assets/160344942/32c1ad32-3740-4350-8947-1d41955603c1">

## 7.2 useState

<img width="864" alt="스크린샷 2024-04-17 오전 10 36 03" src="https://github.com/KoesJin/react1-1/assets/160344942/4cfda70b-a130-4dfc-9a5d-82b192285e57">

### useState 사용 예제

```

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

```

-   결과

<img width="1710" alt="스크린샷 2024-04-17 오전 10 48 12" src="https://github.com/KoesJin/react1-1/assets/160344942/8d7f6514-14a5-4a4d-9a5d-7bcd31201f42">

<hr>

## useEffect

<img width="898" alt="스크린샷 2024-04-17 오전 11 10 52" src="https://github.com/KoesJin/react1-1/assets/160344942/f67ecef8-01ca-4949-b77f-2769c2967469">

<hr>

<img width="881" alt="스크린샷 2024-04-17 오전 11 14 28" src="https://github.com/KoesJin/react1-1/assets/160344942/f72e79e0-037e-44b9-92f7-85c354fb5c95">

<hr>

<img width="862" alt="스크린샷 2024-04-17 오전 11 19 03" src="https://github.com/KoesJin/react1-1/assets/160344942/dd123856-9e28-40da-894a-3873c91df174">

<hr>

<img width="865" alt="스크린샷 2024-04-17 오전 11 23 17" src="https://github.com/KoesJin/react1-1/assets/160344942/0a797eb9-adc4-467d-a844-bee76767d1d5">

<hr>

<img width="866" alt="스크린샷 2024-04-17 오전 11 42 20" src="https://github.com/KoesJin/react1-1/assets/160344942/2ab7be4b-70b1-4ff1-b03f-2263e48d90af">

## useMemo

<img width="844" alt="스크린샷 2024-04-17 오전 11 43 07" src="https://github.com/KoesJin/react1-1/assets/160344942/f7cb366e-d42b-4718-aa4b-2b84069d4758">

<hr>

<img width="882" alt="스크린샷 2024-04-17 오전 11 47 06" src="https://github.com/KoesJin/react1-1/assets/160344942/77a75a4e-c728-44ed-a94e-294360df9bf6">

<hr>

## 7.5 useCallback

<img width="788" alt="스크린샷 2024-04-17 오전 11 49 02" src="https://github.com/KoesJin/react1-1/assets/160344942/1a338c96-0074-499e-89c8-e28c6919a385">

<hr>

## 7.6 useRef

<img width="895" alt="스크린샷 2024-04-17 오후 12 10 23" src="https://github.com/KoesJin/react1-1/assets/160344942/4be03844-2387-44d2-904a-d017b0922474">

<hr>

## 7.7 훅의 규칙

<img width="885" alt="스크린샷 2024-04-17 오후 12 13 15" src="https://github.com/KoesJin/react1-1/assets/160344942/cb62fcd1-6f01-42b9-9ada-7514b0963799">

<hr>

### useRef 예제코드

```

import React, { useRef } from 'react';

export default function FocusBtn(props) {
const inputElem = useRef(null);

    const onButtonClick = () => {
        inputElem.current.focus();
    };

    return (
        <>
            <input ref={inputElem} type="text" />
            <button onClick={onButtonClick}>Focus the Button</button>
        </>
    );

}

```

<hr>

-   결과

<img width="1710" alt="스크린샷 2024-04-17 오후 12 24 55" src="https://github.com/KoesJin/react1-1/assets/160344942/7bbd1aec-51c5-4c4b-b229-b9afebdc319c">

<hr>

# 6주차 (휴강)

<hr>

# 5주차 (4월 3일 강의 내용)

## 1. 컴포넌트에 대해 알아보기

-   2장에서 설명한 바와 같이 리액트는 컴포넌트 기반의 구조를 같습니다.
-   컴포넌트 구조라는 것은 작은 컴포넌트가 모여 큰 컴포넌트를 구성하고, 다시 이런 컴포넌트들이 모여서 전체 페이지를 구성한다는 것을 의미합니다.
-   컴포넌트는 재사용이 가능하기 때문에 전체 코드의 양을 줄일 수 있어 개발 시간과 유지 보수 비용 도 줄일 수 있습니다.
-   컴포넌트는 자바스크립트 함수처럼 입력과 출력이 있다는 면에서는 유사합니다.
-   다만 입력은 Props가 담당하고, 출력은 리액트 엘리먼트의 형태로 출력됩니다.
-   엘리먼트를 필요한 만큼 만들어 사용한다는 면에서는 객체 지향의 개념과 비슷합니다.

## 2. Props에 대해 알아보기

### Props의 개념

-   props는 prop(property : 속성, 특성)의 준말입니다.
-   이 Props가 바로 컴포넌트의 속성입니다.
-   컴포넌트에 어떤 속성, props를 넣느냐에 따라서 속성이 다른 엘리먼트가 출력됩니다.
-   props는 컴포넌트에 전달 할 다양한 정보를 담고 있는 자바스크립트 객체입니다.
-   에어비앤비의 예도 마찬가지 입니다.

### Props의 특징

-   읽기 전용입니다. 변경할 수 없다는 의미 입니다.
-   속성이 다른 엘리먼트를 생성하려면 새로운 props를 컴포넌트에 전달하면 됩니다.

### Pure 함수 vs. Impure 함수

-   Pure함수는 인수로 받은 정보가 함수 내부에서도 변하지 않는 함수입니다.
-   Impure함수는 인수로 받은 정보가 함수 내부에서 변하는 함수 입니다

<hr>
### 3. Props 사용법

![2024  3  15  - 0 6](https://github.com/KoesJin/react1-1/assets/160344942/e35aee7c-4d8a-42a6-b288-1f62c1acdcd7)

<hr>

![2024  3  15  - 0 7](https://github.com/KoesJin/react1-1/assets/160344942/041f3989-42c3-445b-9cfd-f3737e468e9c)

<hr>

-   JSX 사용 하지 않을 경우

![2024  3  15  - 0 8](https://github.com/KoesJin/react1-1/assets/160344942/6e90f6ee-c16b-4ec5-9e67-89d63d0e0eee)

## 3. 컴포넌트 만들기

-   Hook 개념 도입 -> 함수형 컴포넌트 사용

![2024  3  15  - 0 9](https://github.com/KoesJin/react1-1/assets/160344942/f614fc40-7102-45bb-b519-6325dfb9cb86)

<hr>

-   함수형 컴포넌트 & 클래스 컴포넌트

![2024  3  15  - 0 10](https://github.com/KoesJin/react1-1/assets/160344942/7acd74e1-f46a-410c-b892-464235580cc0)

<hr>

## 4.컴포넌트 이름 짓기 & 컴포넌트의 랜더링

![2024  3  15  - 0 11](https://github.com/KoesJin/react1-1/assets/160344942/25b740b8-7202-4933-b2ba-449114bb654a)

<hr>

-   결과

<img width="1710" alt="스크린샷 2024-04-03 오전 10 39 06" src="https://github.com/KoesJin/react1-1/assets/160344942/cadf3bac-63ab-46e5-a73e-3e93ab655bc2">

### 1. 컴포넌트 합성

-   여러 컴포넌트 사용시 <> </> Fragment 사용해야함

<img width="910" alt="스크린샷 2024-04-03 오전 11 06 37" src="https://github.com/KoesJin/react1-1/assets/160344942/8d9edec0-93ba-48b9-9aac-299c4f5b4b71">

### 2. 컴포넌트 추출

<img width="910" alt="스크린샷 2024-04-03 오전 11 13 02" src="https://github.com/KoesJin/react1-1/assets/160344942/1d7f3193-fe10-4629-9780-6f1c11232225">

<hr>

<img width="897" alt="스크린샷 2024-04-03 오전 11 20 01" src="https://github.com/KoesJin/react1-1/assets/160344942/acc1c48a-d7b0-484f-bba9-f62498b60552">

<hr>

<img width="898" alt="스크린샷 2024-04-03 오전 11 22 21" src="https://github.com/KoesJin/react1-1/assets/160344942/066d7bfa-13b2-4248-b12d-c7b2cf9e3ae9">

## 6. 댓글 컴포넌트 만들기

<img width="854" alt="스크린샷 2024-04-03 오전 11 25 27" src="https://github.com/KoesJin/react1-1/assets/160344942/5ddf832d-fdb9-4d16-a848-96260add79c5">

<hr>

-   결과

<img width="1710" alt="스크린샷 2024-04-03 오전 11 53 02" src="https://github.com/KoesJin/react1-1/assets/160344942/f260625f-c397-4a2b-8638-2e182965e9d9">

<hr>
-   위에 코드가 별로이기에 수정 하면 좋은 코드

<img width="908" alt="스크린샷 2024-04-03 오후 12 04 55" src="https://github.com/KoesJin/react1-1/assets/160344942/715f9858-8694-419c-8e95-4451a988ec70">

<hr>

## 6. State

### 6.1 State란?

• State는 리액트 컴포넌트의 상태를 의미합니다.
• 상태의 의미는 정상인지 비정상인지가 아니라 컴포넌트의 데이터를 의미합니다.
• 정확히는 컴포넌트의 변경가능한 데이터를 의미합니다.
• State가 변하면 다시 렌더링이 되기 때문에 렌더링과 관련된 값만 state에 포함시켜야 합니다.

### 2. state의 특징

• 리액트 만의 특별한 형태가 아닌 단지 자바스크립트 객체일 뿐입니다.
• 예의 LikeButton은 class 컴포넌트입니다.
• constructor는 생성자이고 그 안에 있는
• this.state가 현 컴포넌트의 state입니다.

-   함수형 에서는 useState()라는 함수 사용합니다.
<hr>
-   변경 할 경우 직접 X -> setState 함수 이용

<img width="798" alt="스크린샷 2024-04-03 오후 12 11 45" src="https://github.com/KoesJin/react1-1/assets/160344942/59527e8f-a037-4cf6-b574-503a3a1c916a">

-   component vs element vs instance

<img width="888" alt="스크린샷 2024-04-03 오후 12 13 53" src="https://github.com/KoesJin/react1-1/assets/160344942/580d1f59-744f-44ac-b209-a354888a39fb">

## 6.2 생성주기

<img width="869" alt="스크린샷 2024-04-03 오후 12 14 44" src="https://github.com/KoesJin/react1-1/assets/160344942/c842e66f-2dc2-48b7-9296-b8b1c6dd5d5b">

<hr>

## 6.3 state와 생명주기 함수 사용하기

<img width="888" alt="스크린샷 2024-04-03 오후 12 20 32" src="https://github.com/KoesJin/react1-1/assets/160344942/4ea962f9-3b84-4bd2-bd80-bdaef2728eec">

-   다음

<img width="894" alt="스크린샷 2024-04-03 오후 12 22 13" src="https://github.com/KoesJin/react1-1/assets/160344942/13d96cd2-29fe-4e35-a8b8-d01ece83430d">

-   다음

<img width="899" alt="스크린샷 2024-04-03 오후 12 23 38" src="https://github.com/KoesJin/react1-1/assets/160344942/d8692262-1e71-4219-8449-09a8e5c65339">

-   다음

<img width="758" alt="스크린샷 2024-04-03 오후 12 23 58" src="https://github.com/KoesJin/react1-1/assets/160344942/46cf5066-1e71-49f8-9d16-ea21f8db0dc2">

<hr>

## state와 생명주기 함수 클래스형 컴포넌트에서 함수형 컴포넌트로 변경

```import React, { useState, useEffect } from 'react';
import Notification from './Notification';

const reservedNotifications = [
{
id: 1,
message: '안녕하세요, 오늘 일정을 알려드립니다.',
},
{
id: 2,
message: '점심식사 시간입니다.',
},
{
id: 3,
message: '이제 곧 미팅이 시작됩니다.',
},
];

function NotificationList() {
const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        const timer = setInterval(() => {
            setNotifications((prevNotifications) => {
                if (prevNotifications.length < reservedNotifications.length) {
                    const index = prevNotifications.length;
                    return [...prevNotifications, reservedNotifications[index]];
                } else {
                    clearInterval(timer);
                    return [];
                }
            });
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div>
            {notifications.map((notification) => (
                <Notification key={notification.id} id={notification.id} message={notification.message} />
            ))}
        </div>
    );

}

export default NotificationList;
```

-   결과

<img width="1710" alt="스크린샷 2024-04-03 오후 12 41 03" src="https://github.com/KoesJin/react1-1/assets/160344942/caefc96f-05d6-4a19-a121-8c683551366b">

<hr>

# 4주차 (3월 27일 강의 내용)

## JSX

-   JavaScipt에 XML을 추가한 확장 문법.

### 1. JSX의 역할

-   JSX는 내부적으로 XML/HTML 코드를 자바스크립트로 변환
-   React가 creatElement 함수를 사용하여 자동으로 자바스크립트로 변환
-   만일 JS 작업할 경우 직접 creatElemnet 함수를 사용해야 함
-   JSX는 가독성을 높여주는 역할

### 2. props 이용 값 넘기기

-   Hello.jsx
    <img width="787" alt="스크린샷 2024-03-27 오전 10 47 14" src="https://github.com/KoesJin/react1-1/assets/160344942/67e36b88-9df0-4a6e-ae17-1f522db09fde">

-   index.js

<img width="915" alt="스크린샷 2024-03-27 오전 10 47 43" src="https://github.com/KoesJin/react1-1/assets/160344942/613d06f4-39b9-47fa-b992-8d748b6413c2">

### 3. JSX의 장점

-   JSX 이용하여 JS보다 코드가 간결
-   가독성 향상
-   Injection Attack 이라 불리는 해킹 방법을 방어함으로써 보안에 강함

### 4. JSX 사용법

-   모든 자바스크립트 문법을 지원
-   자바스크립트 문법에 XML과 HTML을 섞어서 사용
-   만일 html이나 xml에 자바스크립트 코드를 사용하고 싶으면 {} 괄호 사용
-   만일 태그의 속성값을 넣고 싶을떄는 다음과 같이 사용
    => img src={user.avatarUrl}>

### 5. JSX 실습 코딩

-   ch_03 폴더 생성

-   Book.jsx 파일 생성
    <img width="899" alt="스크린샷 2024-03-27 오전 11 21 38" src="https://github.com/KoesJin/react1-1/assets/160344942/70ab71c6-7056-4d95-92f6-957dd326a1f9">

-   Library.jsx 파일 생성
    <img width="860" alt="스크린샷 2024-03-27 오전 11 27 43" src="https://github.com/KoesJin/react1-1/assets/160344942/500d2d9f-6fb0-4d28-b491-8f895fb955fa">

-   결과
    <img width="1710" alt="스크린샷 2024-03-27 오후 12 03 37" src="https://github.com/KoesJin/react1-1/assets/160344942/81d20b31-830d-47db-8c82-800af808a47e">

## 엘리먼트에 대해 알아보기

### 1. 엘리먼트의 정의

-   엘리먼트는 리액트 앱을 구성하는 요소
-   공식페이지에는 "엘리먼트는 리액트 앱의 가장 작은 빌딩 블록들" 이라고 설명
-   웹사이트의 경우에는 DOM 엘리먼트이며 HTML 요소를 의미

### 리액트 엘리먼트와 DOM 엘리먼트 차이?

-   리액트 엘리먼트는 Virtual DOM의 형태
-   DOM 엘리먼트는 페이지의 모든 정보를 가지고 있어 무거움

![2024  3  15  - 0](https://github.com/KoesJin/react1-1/assets/160344942b811dba7-42ec-4151-a2ac-06a8c769729b)

### 2. 엘리먼트의 생김새

-   리액트 엘리먼트는 자바스크립트 형태로 존재
-   컴포넌트 , 속성 및 내부의 모든 childeren을 포함하는 일반 js 객체
-   이 객체는 마음대로 변경할 수 없는 불변성 가짐
-   리액트 엘리먼트의 예를 보면 type에 태그 대신 리액트 컴포넌트가 들어가 있는것 외에는 차이가 없다
-   역시 자바스크립트 객체이다
-   @내부적으로 자바스크립트 객체를 만드는 역할을 하는 함수가 createElement()이다

### 3.엘리먼트의 특징

-   리액트 엘리먼트의 가장 큰 특징은 불변성이다. 즉 한번 생성된 엘리먼트의 childern이나 속성을 변경 불가

### 만일 내용이 바뀌면 어떻게?

-   이떄는 컴포넌트를 통해 새로운 엘리먼트를 생성
-   그 다음 이전 엘리먼트와 교체를 하는 방법으로 내용을 바꾸는 것
-   이렇게 교체하는 작업을 하기위해 Virtual DOM을 사용

## Root DOM node

-   Html 코드는 id 값이 root인 태그로 단순하지만 리액트에 필수로 들어가는 아주 중요한 코드
-   div태그 안에 리액트 엘리먼트가 렌더링 되며, 이것을 Root DOM node 라 함

### 엘리먼트를 렌더링하기 위해서는 다음과 같은 코드가 필요

-   const element = <h1>안녕 리액트!</h1>
-   ReactDOM.render(element, document.getElemnetById("root));

이떄 render()함수를 사용
이 함수의 첫번째 파라메터에 출력할 리액트 엘리먼트이고, 두번째 파라미터는 출력할 타겟을 나타냄

즉 리액트 랜더링의 과정은 Virtual DOM에서 실제로 DOM으로 이동하는 과정

## 랜더링된 엘리먼트 업데이트 하기

![2024  3  15  - 0 2](https://github.com/KoesJin/react1-1/assets/160344942/b7f97be3-3536-4d57-99d8-af057cdd5a41)

## 시계 만들기

-   index.js 수정

    setInterval(() => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Clock />);
    }, 1000);

-   Clock.jsx 생성

-   결과

<img width="1710" alt="스크린샷 2024-03-27 오후 12 45 55" src="https://github.com/KoesJin/react1-1/assets/160344942/06422fc4-6820-46a4-8971-eb7b93639b7f">

<hr>

# 3주차 (3월 20일 강의 내용)

## 리액트의 장점

1. 빠른 업데이트와 랜더링 속도

    - 이 것을 가능하게 하는 것이 바로 버츄얼 돔(Virtual DOM)
    - DOM이란, XML, HTML 문서의 각 항목을 계층으로 표현하여 생성, 변형, 삭제하게 돕는 인터페이스.
    - Virtual DOM은 DOM 조작이 비효율적인 이유로 속도가 느리기 때문에 고안된 방법
    - DOM은 동기식, Virtual DOM은 비동기식 방법으로 랜더링을 한다.
      동기식(Synchronous) VS 비동기식(Asynchronous)
      동기와 비동기를 나누는 가장 큰 차이점을 어떻게 실행 순서를 가지는 지에 있다.

    Syncronous 동기는 요청을 보낸 후 해당 요청의 응답을 받아야 다음 동작을 실행하는 방식을,
    Asynchronous 비동기는 요청을 보낸 후 응답과 관계없이 다음 동작을 실행할 수 있는 방식을 의미한다.

2. 컴포넌트 기반 구조
   리액트의 모든 페이지는 컴포넌트로 구성됩니다.
   하나의 컴포넌트는 다른 여러 개의 컴포넌트의 조합으로 구성할 수 있습니다.
   컴포넌트를 조합해서 웹사이트를 개발합니다.
   재사용성이 매우 뛰어납니다.

3. 재사용성
   반복적인 작업을 줄여주기 떄문에 생산성을 높여 줍니다.
   또한 유지보수가 용이합니다.
   재상요이 가능 하려면 해당 모듈의 의존성이 없어야 합니다.

4. 든든한 지원군
   메타에서 오픈소스 프로젝트로 관리하고 있어 계속 발전하고 있음.

5. 활방한 지식 공유 & 커뮤니티

6. 모바일 앱 개발가능
   리액트 네이티브라는 모바일 환경 UI프레임워크를 사용하면 크로스 플랫폼(cross-platfrom) 모바일 앱을 개발할 수 있음.

## 리액트의 단점

1. 방대한 학습량
   자바스크립트를 공부한 경우 빠르게 학습할 수 있습니다

2. 높은 상태 관리 복잡도
   state,component life cycle 등의 개념이 있지만 그리 어렵지 않습니다.

## create-react-app (CRA) 생성 방법

1. Node.js 설치 (맥의 경우 brew install node 윈도우의 경우 사이트가서 설치)
2. npm 설치 (npm install -g npm brew로 설치시 npm 자동 설치)
3. npm 버전 확인 npm -v
4. npx 설치 (터미널 -> npm install npx -g)
5. npx 버전 확인 npx -v
6. create-react-app 설치 (터미널 -> npx -> npx create-react-app 본인 디렉토리 이름)
7. test.app 생성하기

## create-react-app Github Pages 배포

1. Github와 로컬 프로젝트 연결하기

-   git remote add origin https://github.com/(개인 레포지토리 주소)
-   git push -u origin main

2. 레포지토리에서 Pages 설정하기

-   레포지토리의 Setting에 가서 메뉴 중에 Pages를 선택해 들어간다
-   branch 선택해서 Save - > Published될 준비가 되었다는 안내와 함께 URL

3. React 프로젝트에 gh-pages 설치하기

-   npm i gh-pages
-   package.json -> "homepage": "https://KoesJin.github.io/레포지토리 이름/"

    ![img1](https://github.com/KoesJin/react1-1/assets/160344942/2c1e7d42-4bc3-43f5-adce-d98fcbf50ad4)

-   deploy": "gh-pages -d build" 를 만들어두면 앞으로 npm run deploy 를 실행하면 gh-pages -d build 를 실행하는 것과 같은 효과

    <img width="706" alt="img2" src="https://github.com/KoesJin/react1-1/assets/160344942/474931cc-e7f2-4219-acd2-3fe9b6c33a36">

4. gh-pages 배포하고 레포지토리에서 다시 설정하기

-   npm run deploy
-   시간 지나고 배포 완료 표시 나올 시 gh pages 이용가능
    <img width="709" alt="img3" src="https://github.com/KoesJin/react1-1/assets/160344942/221d56b1-9f23-4dc5-9456-2a0795415761">

<hr>

# 2주차 (3월 13일 강의 내용)

## GitHub push 하기

GitHub Push

### 저장소 생성 및 연결

-   $ git init
-   $ git remote add origin [원격저장소 주소]
-   $ git branch -m master main

### 파일 업로드

-   $ git pull (또는 git pull origin main)
-   $ git add .
-   $ git commit -m "commit message"
-   $ git push (또는 git push origin main)

### 저장소가 이미 있는 경우

-   $ git pull origin main (필요시에만)
-   $ git add .
-   $ git commit -m "commit message"
-   $ git push origin main

### 추가적인 명령어

-   $ git remote -v
-   $ git remote rm origin
-   $ git branch
-   $ git config --global init.defaultBranch [브랜치 이름]
-   $ git status
-   $ git rm --cached -r .
-   $ git push --set-upstream origin main

### VIM

-   q : 나가기
-   wq : 저장 후 나가기
-   i = insert : 입력 모드
-   esc : 입력모드 종료

### Branch

-   git switch name name은 (바꾸려는 브런치 명)
-   git switch -c name name은 (브런치 생성과 변경)
-   git branch (브런치 목록 확인)
-   git branch -d name (브런치 삭제) \* D를 사용 시 강제 삭제...

### Rebase

-   git rebase -i HEAD~4 4은 (보여줄 커밋의 숫자를 의미함 더 많이 더 적게도 됌.)
-   git rebase --abort : Rebase 취소
-   git rebase --continue : Rebase 계속 (충돌)

### 충돌 발생 시 반복

-   충돌 하나 수정 -> git add . ->git rebase --continue

-   합칠 때 둘 중 아래(최신)있는 커밋을 pick -> s (squash)로 바꾸고 저장.

### 기타

-   git stash : 마지막 커밋 이후에 모든 변경사항 숨겨짐.
-   git stash pop : 마지막 나타나게 함.
-   git commit —amend 가장 최근의 커밋을 수정할 수 있음. 주로 커밋이름 바꿀 때 씀.
