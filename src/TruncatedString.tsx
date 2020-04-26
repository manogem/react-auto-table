import React, { Component } from 'react';
// @ts-ignore
import expand from './assets/images/expand-alt-solid.svg';
import {formatType} from "./formatter";

const truncateShort = 50;
const truncateLong = 500;

export interface TruncatedStringProps {
  toggled: boolean;
  toggleTd: any;
  value: string;
  type?: string | null;
}

class TruncatedString extends Component<TruncatedStringProps> {

  truncateString = (value: string, to: number) => {
    const {type} = this.props;

    if (value && value.length > to) {
      return `${value.substring(0, to)}...`;
    }

    value = formatType(value, type);

    return value;
  };



  render() {
    const { value, toggleTd, toggled } = this.props;

    return (
      <div className={'truncated-string'}>
        <div data-testid="truncated-value">{this.truncateString(value, truncateShort)}</div>
        {value && value.length > truncateShort && (
          <div data-testid="expand-tooltip" onClick={toggleTd} className="custom-tooltip">
            <img data-testid="expand-icon" src={expand} alt={'expand'} width={15} />
            <span data-testid="full-value" className={`tooltip-text ${toggled ? 'visible' : ''}`}>
              {this.truncateString(value, truncateLong)}
            </span>
          </div>
        )}
      </div>
    );
  }
}

export default TruncatedString;
