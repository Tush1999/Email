import React, { Component } from "react";
import data from "../../Content";

export default class Email extends Component {
  render() {
    let datas = this.props.ReceiverName
      ? data.replace("Sir", this.props.ReceiverName)
      : data;
    datas = this.props.SenderName
      ? datas.replace("Anonymous", this.props.SenderName)
      : datas;
    let text = datas.split("\n").map((i) => <p>{i}</p>);
    return (
      <>
        <div>{text}</div>
      </>
    );
  }
}
