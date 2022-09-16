import React, { Component } from "react";
import Actinits from "./Actinits";
import Lantinits from "./Lantinits";

import Rows from "./Rows";
import {elements} from "./_data";

export default class PeriodicTable extends Component {
  render() {
    return (
      <div className="table">
        <Rows></Rows>
        <Lantinits></Lantinits>
        <Actinits></Actinits>
      </div>
    );
  }
}
