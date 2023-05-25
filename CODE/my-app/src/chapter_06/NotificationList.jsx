import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
    {
        id: 1,
        message: "안녕하세요, 오늘 일정을 알려드립니다.",
    },
    {
        id: 2,
        message: "점심식사 시간입니다.",
    },
    {
        id: 3,
        message: "이제 곧 미팅이 시작됩니다.",
    },
];

var timer;
class NotificationList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {      // 생성자에서 처음 만들때  notifications라는 빈 배열을 만듬 
            notifications: [], 
        };
    }

    componentDidMount() { // componentDidMount 생명 주기 함수중 하나
        const { notifications } = this.state;
        timer = setInterval(() => {         // 1 초마다 한번씩 만듬
            if (notifications.length < reservedNotifications.length) { // 예약된 알림이 남아있으면
                const index = notifications.length; // 현재 알림의 개수를 인덱스로 사용
                notifications.push(reservedNotifications[index]); // 예약된 알림을 notifications 배열에 추가
                this.setState({
                    notifications: notifications,       // setState 함수를 통해 state를 초기화
                });
            } else { // 예약된 알림이 없으면
                this.setState({
                    notifications: [],  // 초 끝나면 배열도 비우기 그러면 내부에 Notification 인스턴스도 사라져서 componentWillUnmount 함수도 호출 될 것임
                });
                clearInterval(timer); // 타이머 종료
            }
        }, 1000);
    }

    componentWillUnmount() { // componentWillUnmount 생명 주기 함수중 하나
        if (timer) {
            clearInterval(timer); // 타이머 종료
        }
    }

    render() {
        return (
            <div>
                {this.state.notifications.map((notification) => { // notifications 배열을 순회하며 Notification 컴포넌트를 생성
                    return (
                        <Notification
                            key={notification.id} // key는 리엑트에서 엘리먼트를 구분하기 위한 고유 값 
                            id={notification.id}
                            message={notification.message}
                        />
                    );
                })}
            </div>
        );
    }
}

export default NotificationList;
