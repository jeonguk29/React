import React from "react";

class ConfirmButton2 extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            isConFirmed: false,
        };


       // this.handleConfirm = this.handleConfirm.bind(this); // bind 코드 방식

    }

    // handleConfirm() {   // 클릯 이벤트 처리 
    //     this.setState((prevState) => ({
    //         isConFirmed: !prevState.isConFirmed,
    //     }));
    // }


    // class fields syntax 사용
    handleConfirm = () => {   // 클릭 이벤트 처리 
        this.setState((prevState) => ({
            isConFirmed: !prevState.isConFirmed,
        }));
    }

    render(){
        return(
            <button
                onClick={this.handleConfirm}
                disabled={this.state.isConFirmed}
            >

            {this.state.isConFirmed ? "확인됨" : "확인하기"}
            </button>
        );
    }
}

export default ConfirmButton2;