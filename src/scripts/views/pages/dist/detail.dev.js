"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _urlParser = _interopRequireDefault(require("../../routes/url-parser"));

var _themoviedbSource = _interopRequireDefault(require("../../data/themoviedb-source"));

var _templateCreator = require("../templates/template-creator");

var _likeButtonInitiator = _interopRequireDefault(require("../../utils/like-button-initiator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Detail = {
  render: function render() {
    return regeneratorRuntime.async(function render$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", "\n      <div id=\"movie\" class=\"movie\"></div>\n      <div id=\"likeButtonContainer\"></div>\n    ");

          case 1:
          case "end":
            return _context.stop();
        }
      }
    });
  },
  afterRender: function afterRender() {
    var url, movie, movieContainer;
    return regeneratorRuntime.async(function afterRender$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            url = _urlParser["default"].parseActiveUrlWithoutCombiner();
            _context2.next = 3;
            return regeneratorRuntime.awrap(_themoviedbSource["default"].detailMovie(url.id));

          case 3:
            movie = _context2.sent;
            movieContainer = document.querySelector('#movie');
            movieContainer.innerHTML = (0, _templateCreator.createMovieDetailTemplate)(movie);

            _likeButtonInitiator["default"].init({
              likeButtonContainer: document.querySelector('#likeButtonContainer'),
              movie: {
                id: movie.id,
                title: movie.title,
                overview: movie.overview,
                backdrop_path: movie.backdrop_path,
                vote_average: movie.vote_average
              }
            });

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    });
  }
};
var _default = Detail;
exports["default"] = _default;