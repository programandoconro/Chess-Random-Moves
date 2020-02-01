'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var Chess = require('../../src/react-chess');

require('./demo.css');

var Demo = function (_React$PureComponent) {
  _inherits(Demo, _React$PureComponent);

  function Demo(props) {
    _classCallCheck(this, Demo);

    var _this = _possibleConstructorReturn(this, (Demo.__proto__ || Object.getPrototypeOf(Demo)).call(this, props));

    _this.state = { pieces: Chess.getDefaultLineup() };
    _this.handleMovePiece = _this.handleMovePiece.bind(_this);
    return _this;
  }

  _createClass(Demo, [{
    key: 'handleMovePiece',
    value: function handleMovePiece(piece, fromSquare, toSquare) {
      var newPieces = this.state.pieces.map(function (curr, index) {
        if (piece.index === index) {
          return piece.name + '@' + toSquare;
        } else if (curr.indexOf(toSquare) === 2) {
          return false; // To be removed from the board
        }
        return curr;
      }).filter(Boolean);

      this.setState({ pieces: newPieces });
    }
  }, {
    key: 'render',
    value: function render() {
      var pieces = this.state.pieces;

      return React.createElement(
        'div',
        { className: 'demo' },
        React.createElement(Chess, { pieces: pieces, onMovePiece: this.handleMovePiece })
      );
    }
  }]);

  return Demo;
}(React.PureComponent);

module.exports = Demo;