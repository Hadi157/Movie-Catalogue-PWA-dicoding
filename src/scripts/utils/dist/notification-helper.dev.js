"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var NotificationHelper = {
  sendNotification: function sendNotification(_ref) {
    var title = _ref.title,
        options = _ref.options;

    if (!this._checkAvailability()) {
      console.log('Notification not supported in this browser');
      return;
    }

    if (!this._checkPermission()) {
      console.log('User did not yet granted permission');

      this._requestPermission();

      return;
    }

    this._showNotification({
      title: title,
      options: options
    });
  },
  _checkAvailability: function _checkAvailability() {
    return !!('Notification' in window);
  },
  _checkPermission: function _checkPermission() {
    return Notification.permission === 'granted';
  },
  _requestPermission: function _requestPermission() {
    var status;
    return regeneratorRuntime.async(function _requestPermission$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(Notification.requestPermission());

          case 2:
            status = _context.sent;

            if (status === 'denied') {
              console.log('Notification Denied');
            }

            if (status === 'default') {
              console.log('Permission closed');
            }

          case 5:
          case "end":
            return _context.stop();
        }
      }
    });
  },
  _showNotification: function _showNotification(_ref2) {
    var title, options, serviceWorkerRegistration;
    return regeneratorRuntime.async(function _showNotification$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            title = _ref2.title, options = _ref2.options;
            _context2.next = 3;
            return regeneratorRuntime.awrap(navigator.serviceWorker.ready);

          case 3:
            serviceWorkerRegistration = _context2.sent;
            serviceWorkerRegistration.showNotification(title, options);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    });
  }
};
var _default = NotificationHelper;
exports["default"] = _default;