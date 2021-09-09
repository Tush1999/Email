import React, { Component } from "react";

export default class Email extends Component {
    render(){
        return(
            <>
            <div className="content">
            <div>{this.props.Saluation} {this.props.ReceiverName},</div>
            <div className="inner-content">
            {this.props.emailContent}
            </div>
            <div className="end-content">
            <div>{this.props.Named},</div>
            <div>{this.props.SenderName}</div>
            </div>
            </div>
            </>
        )
    }
}