import React, { createContext, useContext } from 'react';

// 테마 컨텍스트 생성
const ThemeContext = createContext('light');

// App 컴포넌트
export default function Btn() {
    return (
        <ThemeContext.Provider value="dark">
            <Toolbar />
        </ThemeContext.Provider>
    );
}

// Toolbar 컴포넌트
function Toolbar() {
    return (
        <div>
            <ThemeButton />
        </div>
    );
}

// ThemeButton 컴포넌트
function ThemeButton() {
    const theme = useContext(ThemeContext); // 컨텍스트 값 사용
    return <Button theme={theme} />;
}

// Button 컴포넌트
function Button(props) {
    return (
        <button
            style={{
                backgroundColor: props.theme === 'dark' ? '#333' : '#FFF',
                color: props.theme === 'dark' ? '#FFF' : '#000',
            }}
        >
            Theme Button
        </button>
    );
}
