"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _favoriteMovieIdb = _interopRequireDefault(require("../data/favorite-movie-idb"));

var _templateCreator = require("../views/templates/template-creator");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var LikeButtonInitiator = {
  init: function init(_ref) {
    var likeButtonContainer, movie;
    return regeneratorRuntime.async(function init$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            likeButtonContainer = _ref.likeButtonContainer, movie = _ref.movie;
            this._likeButtonContainer = likeButtonContainer;
            this._movie = movie;
            _context.next = 5;
            return regeneratorRuntime.awrap(this._renderButton());

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, null, this);
  },
  _renderButton: function _renderButton() {
    var id;
    return regeneratorRuntime.async(function _renderButton$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = this._movie.id;
            _context2.next = 3;
            return regeneratorRuntime.awrap(this._isMovieExist(id));

          case 3:
            if (!_context2.sent) {
              _context2.next = 7;
              break;
            }

            this._renderLiked();

            _context2.next = 8;
            break;

          case 7:
            this._renderLike();

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, null, this);
  },
  _isMovieExist: function _isMovieExist(id) {
    var movie;
    return regeneratorRuntime.async(function _isMovieExist$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return regeneratorRuntime.awrap(_favoriteMovieIdb["default"].getMovie(id));

          case 2:
            movie = _context3.sent;
            return _context3.abrupt("return", !!movie);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    });
  },
  _renderLike: function _renderLike() {
    var _this = this;

    this._likeButtonContainer.innerHTML = (0, _templateCreator.createLikeButtonTemplate)();
    var likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', function _callee() {
      return regeneratorRuntime.async(function _callee$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return regeneratorRuntime.awrap(_favoriteMovieIdb["default"].putMovie(_this._movie));

            case 2:
              _this._renderButton();

            case 3:
            case "end":
              return _context4.stop();
          }
        }
      });
    });
  },
  _renderLiked: function _renderLiked() {
    var _this2 = this;

    this._likeButtonContainer.innerHTML = (0, _templateCreator.createLikedButtonTemplate)();
    var likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', function _callee2() {
      return regeneratorRuntime.async(function _callee2$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return regeneratorRuntime.awrap(_favoriteMovieIdb["default"].deleteMovie(_this2._movie.id));

            case 2:
              _this2._renderButton();

            case 3:
            case "end":
              return _context5.stop();
          }
        }
      });
    });
  }
};
var _default = LikeButtonInitiator;
exports["default"] = _default;