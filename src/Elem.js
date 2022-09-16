import React, { Component } from 'react'
import {elements} from "./_data";
export default class Elem extends Component {
  render() {
        const {num, rowId, colId} = this.props;
        const element = elements[num];
        const column = "item-" + colId;
        const row = "row-" + rowId;
        const itemClass = row + " " +column;
        return (
            <div className={itemClass}>
                <p className='top'>{element.number}</p>
                <p className='bottom'>{element.symbol}</p>
            </div>
        )
    }
  }
