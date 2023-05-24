import React from "react";

const students = [
    {
        id: 1,
        name: "Inje",
    },
    {
        id: 2,
        name: "Steve",
    },
    {
        id: 3,
        name: "Bill",
    },
    {
        id: 4,
        name: "Jeff",
    },
];

function AttendanceBook(props) {
    return (
        <ul>
            {/* 배열 랜더링을 위해 map함수 사용  
                key 값이 없으면 경고표시를 보이기 때문에 아래와 같이 키 값을 가질 수 있도록 코드를 수정        
          
            {students.map((student) => {
                return <li>{student.name}</li>;
            })} */}
            
            {students.map((student, index) => {
                return <li key={student.id}>{student.name}</li>;
            })}
        </ul>
    );
}

export default AttendanceBook;
