"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createLikedButtonTemplate = exports.createLikeButtonTemplate = exports.createMovieDetailTemplate = exports.createMovieItemTemplate = void 0;

var _config = _interopRequireDefault(require("../../globals/config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var createMovieDetailTemplate = function createMovieDetailTemplate(movie) {
  return "\n  <h2 class=\"movie__title\">".concat(movie.title, "</h2>\n  <img class=\"movie__poster\" src=\"").concat(_config["default"].BASE_IMAGE_URL + movie.poster_path, "\" alt=\"").concat(movie.title, "\" />\n  <div class=\"movie__info\">\n  <h3>Information</h3>\n    <h4>Tagline</h4>\n    <p>").concat(movie.tagline, "</p>\n    <h4>Release Date</h4>\n    <p>").concat(movie.release_date, "</p>\n    <h4>Duration</h4>\n    <p>").concat(movie.runtime, " minutes</p>\n    <h4>Rating</h4>\n    <p>").concat(movie.vote_average, "</p>\n  </div>\n  <div class=\"movie__overview\">\n    <h3>Overview</h3>\n    <p>").concat(movie.overview, "</p>\n  </div>\n");
};

exports.createMovieDetailTemplate = createMovieDetailTemplate;

var createMovieItemTemplate = function createMovieItemTemplate(movie) {
  return "\n  <div class=\"movie-item\">\n    <div class=\"movie-item__header\">\n        <img class=\"movie-item__header__poster\" alt=\"".concat(movie.title, "\"\n            src=\"").concat(movie.backdrop_path ? _config["default"].BASE_IMAGE_URL + movie.backdrop_path : 'https://picsum.photos/id/666/800/450?grayscale', "\">\n        <div class=\"movie-item__header__rating\">\n            <p>\u2B50\uFE0F<span class=\"movie-item__header__rating__score\">").concat(movie.vote_average, "</span></p>\n        </div>\n    </div>\n    <div class=\"movie-item__content\">\n        <h3><a href=\"", "/#/detail/".concat(movie.id), "\">").concat(movie.title, "</a></h3>\n        <p>").concat(movie.overview, "</p>\n    </div>\n  </div>\n  ");
};

exports.createMovieItemTemplate = createMovieItemTemplate;

var createLikeButtonTemplate = function createLikeButtonTemplate() {
  return "\n  <button aria-label=\"like this movie\" id=\"likeButton\" class=\"like\">\n     <i class=\"fa fa-heart-o\" aria-hidden=\"true\"></i>\n  </button>\n";
};

exports.createLikeButtonTemplate = createLikeButtonTemplate;

var createLikedButtonTemplate = function createLikedButtonTemplate() {
  return "\n  <button aria-label=\"unlike this movie\" id=\"likeButton\" class=\"like\">\n    <i class=\"fa fa-heart\" aria-hidden=\"true\"></i>\n  </button>\n";
};

exports.createLikedButtonTemplate = createLikedButtonTemplate;