import React, { Component } from "react";
import data from "../../Content";

export default class Email extends Component {
  static defaultProps = {
    ReceiverName: "Sir",
    SenderName: "Anonymous",
  };
  render() {
    return (
      <>
        <div className="content">
          <div>Dear {this.props.ReceiverName},</div>
          <div className="inner-content">{data}</div>
          <div className="end-content">
            <div>Thanks,</div>
            <div>{this.props.SenderName}</div>
          </div>
        </div>
      </>
    );
  }
}
