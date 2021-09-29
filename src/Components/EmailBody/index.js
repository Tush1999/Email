import React, { Component } from "react";
import Email from "../Email/index";

import "./style.css";

export default class EmailBody extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="header">
          <Email />
        </div>
        <div className="header">
          <Email ReceiverName={"Sawan"} SenderName={"Tushar"} />
        </div>
      </React.Fragment>
    );
  }
}
