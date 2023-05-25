import React from "react";
import Comment from "./Comment";

/* 댓글 객체 생성 */
const comments = [
    {
        name: "이인제",
        comment: "안녕하세요, 소플입니다.",
    },
    {
        name: "유재석",
        comment: "리액트 재미있어요~!",
    },
    {
        name: "강민경",
        comment: "저도 리액트 배워보고 싶어요!!",
    },
];


/* 각 댓글 객체에 대해서  Comment 컴포넌트를 리턴하도록 작성 */
function CommentList(props) {
  return (
    <div>
      {comments.map((comment) => {
        // comments 배열을 map 함수로 순회하며 각각의 comment에 대한 정보를 가져온다.
        return (
          <Comment name={comment.name} comment={comment.comment} /> // Comment 컴포넌트에 comment 정보를 props로 전달한다.
        );
      })}
    </div>
  );
}

export default CommentList;
