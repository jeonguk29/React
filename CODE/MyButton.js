function MyButton(props) {
    const [isClicked, setIsClicked] = React.useState(false);

    return React.createElement(
        'button',
        { onClick:() => setIsClicked(true)},
        isClicked ? 'Clicked!' : 'Click here!'
    )
}

/*
아래 코드는 리엑트 돔에 랜더함수를 사용해서 리엑트 컨포넌트를 돔에 랜더링 하는 코드임 
이 코드가 필요한 이유는 스크립트를 태그를 사용해서 컨포넌트롤 가져왔더라도 화면에 보이는건 아니기 때문임 
*/
const domContainer = document.querySelector('#root');
//ReactDOM.render(React.createElement(MyButton), domContainer);
const root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(MyButton));