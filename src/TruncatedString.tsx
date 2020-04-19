import React, { Component } from 'react';
// @ts-ignore
import expand from './assets/images/expand-alt-solid.svg';

const truncateShort = 50;
const truncateLong = 500;

interface TruncatedStringProps {
  toggled: boolean;
  toggleTd: () => {};
  value: string;
}

class TruncatedString extends Component<TruncatedStringProps> {

  truncateString = (value: string, to: number) => {
    if (value && typeof value === 'string') {
      value = value.split(';').join('; ');

      if (value.length > to) {
        return `${value.substring(0, to)}...`;
      }

      return value;
    }
    return value;
  };

  render() {
    const { value, toggleTd, toggled } = this.props;

    return (
      <div className={'truncated-string'}>
        <div>{this.truncateString(value, truncateShort)}</div>
        {value && value.length > truncateShort && (
          <div onClick={toggleTd} className="custom-tooltip">
            <img src={expand} alt={'expand'} width={15} />
            <span className={`tooltip-text ${toggled ? 'visible' : ''}`}>
              {this.truncateString(value, truncateLong)}
            </span>
          </div>
        )}
      </div>
    );
  }
}

export default TruncatedString;
