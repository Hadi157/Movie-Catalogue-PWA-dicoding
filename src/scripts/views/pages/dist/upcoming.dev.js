"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _themoviedbSource = _interopRequireDefault(require("../../data/themoviedb-source"));

var _templateCreator = require("../templates/template-creator");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Upcoming = {
  render: function render() {
    return regeneratorRuntime.async(function render$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", "\n      <div class=\"content\">\n        <h2 class=\"content__heading\">Upcoming in Cinema</h2>\n        <div id=\"movies\" class=\"movies\">\n \n        </div>\n      </div>\n    ");

          case 1:
          case "end":
            return _context.stop();
        }
      }
    });
  },
  afterRender: function afterRender() {
    var movies, moviesContainer;
    return regeneratorRuntime.async(function afterRender$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return regeneratorRuntime.awrap(_themoviedbSource["default"].upcomingMovies());

          case 2:
            movies = _context2.sent;
            moviesContainer = document.querySelector('#movies');
            movies.forEach(function (movie) {
              moviesContainer.innerHTML += (0, _templateCreator.createMovieItemTemplate)(movie);
            });

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    });
  }
};
var _default = Upcoming;
exports["default"] = _default;