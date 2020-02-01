'use strict';

/* eslint-disable react/display-name, react/prop-types */
var React = require('react');

module.exports = function (Piece) {
  return function (props) {
    var onMouseDown = props.onMouseDown,
        onMouseUp = props.onMouseUp,
        onTouchEnd = props.onTouchEnd,
        onTouchStart = props.onTouchStart,
        style = props.style,
        isMoving = props.isMoving;

    var y = 7 - props.y;

    var styles = Object.assign({}, style, {
      position: 'absolute',
      left: props.x * 12.5 + '%',
      top: y * 12.5 + '%',
      width: '12.5%',
      height: '12.5%',
      textAlign: 'center',
      zIndex: isMoving ? 1000 : undefined
    });

    return React.createElement(
      'div',
      {
        onMouseDown: onMouseDown,
        onMouseUp: onMouseUp,
        onTouchEnd: onTouchEnd,
        onTouchStart: onTouchStart,
        style: styles },
      React.createElement(Piece, { size: '85%' })
    );
  };
};