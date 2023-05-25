import { useContext } from "react";
import ThemeContext from "./ThemeContext";


// ThemeContext로 부터 현제 설정된 태마 값을 받아와 실제 화면에 컨텐츠를 랜더링 하는 역할을 함
// 태마 변경을 누르면 toggleTheme를 호출해 theme Context 변경도함
function MainContent(props) {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div
            style={{
                width: "100vw",
                height: "100vh",
                padding: "1.5rem",
                backgroundColor: theme == "light" ? "white" : "black",
                color: theme == "light" ? "black" : "white",
            }}
        >
            <p>안녕하세요, 테마 변경이 가능한 웹사이트 입니다.</p>
            <button onClick={toggleTheme}>테마 변경</button>
        </div>
    );
}

export default MainContent;
