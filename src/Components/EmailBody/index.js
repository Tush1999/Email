import React, { Component } from "react";
import Email from "../Email/index";
import data from "../../Content";
import "./style.css";

export default class EmailBody extends Component {
  static defaultProps = {
    ReceiverName: "Sir",
    SenderName: "Anonymous",
    Saluation: "Hi",
    Named: "Regards",
  };

  render() {
    return (
      <React.Fragment>
        <div className="header">
          <Email
            ReceiverName={this.props.ReceiverName}
            SenderName={this.props.SenderName}
            emailContent={data}
            Saluation={this.props.Saluation}
            Named={this.props.Named}
          />
        </div>
      </React.Fragment>
    );
  }
}
