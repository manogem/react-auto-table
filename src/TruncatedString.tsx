import React, { Component } from 'react';
// @ts-ignore
import expand from './assets/images/expand-alt-solid.svg';

const truncateShort = 50;
const truncateLong = 500;

interface TruncatedStringProps {
  toggled: boolean;
  toggleTd: () => {};
  string: string;
}

class TruncatedString extends Component<TruncatedStringProps> {

  truncateString = (string: string, to: number) => {
    if (string && typeof string === 'string') {
      string = string.split(';').join('; ');

      if (string.length > to) {
        return `${string.substring(0, to)}...`;
      }

      return string;
    }
    return string;
  };

  render() {
    const { string, toggleTd, toggled } = this.props;

    return (
      <div className={'truncated-string'}>
        <div>{this.truncateString(string, truncateShort)}</div>
        {string && string.length > truncateShort && (
          <div onClick={toggleTd} className="custom-tooltip">
            <img src={expand} alt={'expand'} width={15} />
            <span className={`tooltip-text ${toggled ? 'visible' : ''}`}>
              {this.truncateString(string, truncateLong)}
            </span>
          </div>
        )}
      </div>
    );
  }
}

export default TruncatedString;
