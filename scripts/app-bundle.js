define('app',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var App = exports.App = function App() {
    _classCallCheck(this, App);

    this.audioArray = [{ 'location': '../audio/SoH_10_4_2017.mp3', 'content': 'TEST THIS IS A TEST' }];
  };
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  Promise.config({
    warnings: {
      wForgottenReturn: false
    }
  });

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('text!app.html', ['module'], function(module) { module.exports = "<template><require from=\"bootstrap/css/bootstrap.css\"></require><div class=\"container-fluid\"><div class=\"row\"><div class=\"col-sm-12\"><div class=\"header_background\"><div class=\"dnd_logo\"><div class=\"dnd_camapign_text\">Sins of Hygara</div><img src=\"./images/DnD_Transparent.png\" width=\"35%\"></div></div></div></div><div class=\"row\"><div class=\"col-sm-12\"><div repeat.for=\"audio of audioArray\" class=\"alert alert-secondary\" role=\"alert\"><div class=\"summary-content\">${audio.content}</div><div><audio controls><source src=\"${audio.location}\" type=\"audio/mpeg\">Your browser does not support the audio element.</audio></div></div></div></div></div></template>"; });
//# sourceMappingURL=app-bundle.js.map