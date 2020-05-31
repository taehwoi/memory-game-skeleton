import React, { Component } from 'react';
import Card from './Card';

function chunk (arr, len) {
  var chunks = [], i = 0, n = arr.length;

  while (i < n) {
    chunks.push(arr.slice(i, i += len));
  }

  return chunks;
}

class Grid extends Component {
    render() {
        const { list, onToggle } = this.props;

        return (
            <div className="Grid">
                {/* split the list into lists with 8 elements each for better view */}
                {chunk(list, 8).map(l => {
                    return (
                    <div> 
                        {l.map(card => {
                            return ( // TODO
                                <div> </div>
                            )
                        })}
                    </div>)
                })}
            </div>
        );
    }
}

export default Grid;