import { useState, useCallback } from "react";
import ThemeContext from "./ThemeContext";
import MainContent from "./MainContent";

function DarkOrLight(props) {
    // theme 상태와 setTheme 함수를 useState 훅을 통해 선언하고, 초기값은 "light"로 설정
    const [theme, setTheme] = useState("light");

    // toggleTheme 함수를 useCallback 훅을 통해 선언
    const toggleTheme = useCallback(() => {
        // 현재 theme 상태 값에 따라 테마를 변경
        if (theme === "light") {
            setTheme("dark");
        } else if (theme === "dark") {
            setTheme("light");
        }
    }, [theme]);

    return (
        // ThemeContext.Provider 컴포넌트를 사용하여 ThemeContext의 값을 제공
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <MainContent />
        </ThemeContext.Provider>
    );
}

export default DarkOrLight;