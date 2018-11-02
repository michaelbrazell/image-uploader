webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/@uppy/drag-drop/lib/index.js":
/*!***************************************************!*\
  !*** ./node_modules/@uppy/drag-drop/lib/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _require = __webpack_require__(/*! @uppy/core */ "./node_modules/@uppy/core/lib/index.js"),
    Plugin = _require.Plugin;

var Translator = __webpack_require__(/*! @uppy/utils/lib/Translator */ "./node_modules/@uppy/utils/lib/Translator.js");
var toArray = __webpack_require__(/*! @uppy/utils/lib/toArray */ "./node_modules/@uppy/utils/lib/toArray.js");
var dragDrop = __webpack_require__(/*! drag-drop */ "./node_modules/drag-drop/index.js");

var _require2 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs"),
    h = _require2.h;

/**
 * Drag & Drop plugin
 *
 */


module.exports = function (_Plugin) {
  _inherits(DragDrop, _Plugin);

  function DragDrop(uppy, opts) {
    _classCallCheck(this, DragDrop);

    var _this = _possibleConstructorReturn(this, _Plugin.call(this, uppy, opts));

    _this.type = 'acquirer';
    _this.id = _this.opts.id || 'DragDrop';
    _this.title = 'Drag & Drop';

    var defaultLocale = {
      strings: {
        dropHereOr: 'Drop files here or %{browse}',
        browse: 'browse'
      }

      // Default options
    };var defaultOpts = {
      target: null,
      inputName: 'files[]',
      width: '100%',
      height: '100%',
      note: null,
      locale: defaultLocale

      // Merge default options with the ones set by user
    };_this.opts = _extends({}, defaultOpts, opts);

    // Check for browser dragDrop support
    _this.isDragDropSupported = _this.checkDragDropSupport();

    // i18n
    _this.translator = new Translator([defaultLocale, _this.uppy.locale, _this.opts.locale]);
    _this.i18n = _this.translator.translate.bind(_this.translator);
    _this.i18nArray = _this.translator.translateArray.bind(_this.translator);

    // Bind `this` to class methods
    _this.handleDrop = _this.handleDrop.bind(_this);
    _this.handleInputChange = _this.handleInputChange.bind(_this);
    _this.checkDragDropSupport = _this.checkDragDropSupport.bind(_this);
    _this.render = _this.render.bind(_this);
    return _this;
  }

  /**
   * Checks if the browser supports Drag & Drop (not supported on mobile devices, for example).
   * @return {Boolean}
   */


  DragDrop.prototype.checkDragDropSupport = function checkDragDropSupport() {
    var div = document.createElement('div');

    if (!('draggable' in div) || !('ondragstart' in div && 'ondrop' in div)) {
      return false;
    }

    if (!('FormData' in window)) {
      return false;
    }

    if (!('FileReader' in window)) {
      return false;
    }

    return true;
  };

  DragDrop.prototype.handleDrop = function handleDrop(files) {
    var _this2 = this;

    this.uppy.log('[DragDrop] Files dropped');

    files.forEach(function (file) {
      try {
        _this2.uppy.addFile({
          source: _this2.id,
          name: file.name,
          type: file.type,
          data: file
        });
      } catch (err) {
        // Nothing, restriction errors handled in Core
      }
    });
  };

  DragDrop.prototype.handleInputChange = function handleInputChange(ev) {
    var _this3 = this;

    this.uppy.log('[DragDrop] Files selected through input');

    var files = toArray(ev.target.files);

    files.forEach(function (file) {
      try {
        _this3.uppy.addFile({
          source: _this3.id,
          name: file.name,
          type: file.type,
          data: file
        });
      } catch (err) {
        // Nothing, restriction errors handled in Core
      }
    });
  };

  DragDrop.prototype.render = function render(state) {
    var _this4 = this;

    /* http://tympanus.net/codrops/2015/09/15/styling-customizing-file-inputs-smart-way/ */
    var hiddenInputStyle = {
      width: '0.1px',
      height: '0.1px',
      opacity: 0,
      overflow: 'hidden',
      position: 'absolute',
      zIndex: -1
    };
    var DragDropClass = 'uppy-Root uppy-DragDrop-container ' + (this.isDragDropSupported ? 'uppy-DragDrop--is-dragdrop-supported' : '');
    var DragDropStyle = {
      width: this.opts.width,
      height: this.opts.height
    };
    var restrictions = this.uppy.opts.restrictions;

    // empty value="" on file input, so that the input is cleared after a file is selected,
    // because Uppy will be handling the upload and so we can select same file
    // after removing — otherwise browser thinks it’s already selected
    return h(
      'div',
      { 'class': DragDropClass, style: DragDropStyle },
      h(
        'div',
        { 'class': 'uppy-DragDrop-inner' },
        h(
          'svg',
          { 'aria-hidden': 'true', 'class': 'UppyIcon uppy-DragDrop-arrow', width: '16', height: '16', viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg' },
          h('path', { d: 'M11 10V0H5v10H2l6 6 6-6h-3zm0 0', 'fill-rule': 'evenodd' })
        ),
        h(
          'label',
          { 'class': 'uppy-DragDrop-label' },
          h('input', { style: hiddenInputStyle,
            'class': 'uppy-DragDrop-input',
            type: 'file',
            name: this.opts.inputName,
            multiple: restrictions.maxNumberOfFiles !== 1,
            accept: restrictions.allowedFileTypes,
            ref: function ref(input) {
              _this4.input = input;
            },
            onchange: this.handleInputChange,
            value: '' }),
          this.i18nArray('dropHereOr', {
            browse: h(
              'span',
              { 'class': 'uppy-DragDrop-dragText' },
              this.i18n('browse')
            )
          })
        ),
        h(
          'span',
          { 'class': 'uppy-DragDrop-note' },
          this.opts.note
        )
      )
    );
  };

  DragDrop.prototype.install = function install() {
    var _this5 = this;

    var target = this.opts.target;
    if (target) {
      this.mount(target, this);
    }
    this.removeDragDropListener = dragDrop(this.el, function (files) {
      _this5.handleDrop(files);
      _this5.uppy.log(files);
    });
  };

  DragDrop.prototype.uninstall = function uninstall() {
    this.unmount();
    this.removeDragDropListener();
  };

  return DragDrop;
}(Plugin);

/***/ }),

/***/ "./node_modules/@uppy/progress-bar/lib/index.js":
/*!******************************************************!*\
  !*** ./node_modules/@uppy/progress-bar/lib/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _require = __webpack_require__(/*! @uppy/core */ "./node_modules/@uppy/core/lib/index.js"),
    Plugin = _require.Plugin;

var _require2 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs"),
    h = _require2.h;

/**
 * Progress bar
 *
 */


module.exports = function (_Plugin) {
  _inherits(ProgressBar, _Plugin);

  function ProgressBar(uppy, opts) {
    _classCallCheck(this, ProgressBar);

    var _this = _possibleConstructorReturn(this, _Plugin.call(this, uppy, opts));

    _this.id = _this.opts.id || 'ProgressBar';
    _this.title = 'Progress Bar';
    _this.type = 'progressindicator';

    // set default options
    var defaultOptions = {
      target: 'body',
      replaceTargetContent: false,
      fixed: false,
      hideAfterFinish: true

      // merge default options with the ones set by user
    };_this.opts = _extends({}, defaultOptions, opts);

    _this.render = _this.render.bind(_this);
    return _this;
  }

  ProgressBar.prototype.render = function render(state) {
    var progress = state.totalProgress || 0;
    var isHidden = progress === 100 && this.opts.hideAfterFinish;
    return h(
      'div',
      { 'class': 'uppy uppy-ProgressBar', style: { position: this.opts.fixed ? 'fixed' : 'initial' }, 'aria-hidden': isHidden },
      h('div', { 'class': 'uppy-ProgressBar-inner', style: { width: progress + '%' } }),
      h(
        'div',
        { 'class': 'uppy-ProgressBar-percentage' },
        progress
      )
    );
  };

  ProgressBar.prototype.install = function install() {
    var target = this.opts.target;
    if (target) {
      this.mount(target, this);
    }
  };

  ProgressBar.prototype.uninstall = function uninstall() {
    this.unmount();
  };

  return ProgressBar;
}(Plugin);

/***/ }),

/***/ "./node_modules/@uppy/react/index.mjs":
/*!********************************************!*\
  !*** ./node_modules/@uppy/react/index.mjs ***!
  \********************************************/
/*! exports provided: Dashboard, DashboardModal, DragDrop, ProgressBar, StatusBar */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_Dashboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/Dashboard */ "./node_modules/@uppy/react/lib/Dashboard.js");
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Dashboard", function() { return _lib_Dashboard__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _lib_DashboardModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/DashboardModal */ "./node_modules/@uppy/react/lib/DashboardModal.js");
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "DashboardModal", function() { return _lib_DashboardModal__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _lib_DragDrop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/DragDrop */ "./node_modules/@uppy/react/lib/DragDrop.js");
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "DragDrop", function() { return _lib_DragDrop__WEBPACK_IMPORTED_MODULE_2__; });
/* harmony import */ var _lib_ProgressBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/ProgressBar */ "./node_modules/@uppy/react/lib/ProgressBar.js");
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "ProgressBar", function() { return _lib_ProgressBar__WEBPACK_IMPORTED_MODULE_3__; });
/* harmony import */ var _lib_StatusBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/StatusBar */ "./node_modules/@uppy/react/lib/StatusBar.js");
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "StatusBar", function() { return _lib_StatusBar__WEBPACK_IMPORTED_MODULE_4__; });







/***/ }),

/***/ "./node_modules/@uppy/react/lib/DashboardModal.js":
/*!********************************************************!*\
  !*** ./node_modules/@uppy/react/lib/DashboardModal.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var PropTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
var DashboardPlugin = __webpack_require__(/*! @uppy/dashboard */ "./node_modules/@uppy/dashboard/lib/index.js");
var basePropTypes = __webpack_require__(/*! ./propTypes */ "./node_modules/@uppy/react/lib/propTypes.js").dashboard;

var h = React.createElement;

/**
 * React Component that renders a Dashboard for an Uppy instance in a Modal
 * dialog. Visibility of the Modal is toggled using the `open` prop.
 */

var DashboardModal = function (_React$Component) {
  _inherits(DashboardModal, _React$Component);

  function DashboardModal() {
    _classCallCheck(this, DashboardModal);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  DashboardModal.prototype.componentDidMount = function componentDidMount() {
    var uppy = this.props.uppy;
    var options = _extends({ id: 'react:DashboardModal' }, this.props, {
      onRequestCloseModal: this.props.onRequestClose
    });

    if (!options.target) {
      options.target = this.container;
    }

    delete options.uppy;
    uppy.use(DashboardPlugin, options);

    this.plugin = uppy.getPlugin(options.id);
    if (this.props.open) {
      this.plugin.openModal();
    }
  };

  DashboardModal.prototype.componentWillUnmount = function componentWillUnmount() {
    var uppy = this.props.uppy;

    uppy.removePlugin(this.plugin);
  };

  DashboardModal.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (this.props.open && !nextProps.open) {
      this.plugin.closeModal();
    } else if (!this.props.open && nextProps.open) {
      this.plugin.openModal();
    }
  };

  DashboardModal.prototype.render = function render() {
    var _this2 = this;

    return h('div', {
      ref: function ref(container) {
        _this2.container = container;
      }
    });
  };

  return DashboardModal;
}(React.Component);

DashboardModal.propTypes = _extends({
  // Only check this prop type in the browser.
  target: typeof window !== 'undefined' ? PropTypes.instanceOf(window.HTMLElement) : PropTypes.any,
  open: PropTypes.bool,
  onRequestClose: PropTypes.func,
  closeModalOnClickOutside: PropTypes.bool,
  disablePageScrollWhenModalOpen: PropTypes.bool
}, basePropTypes);

DashboardModal.defaultProps = {};

module.exports = DashboardModal;

/***/ }),

/***/ "./node_modules/@uppy/react/lib/DragDrop.js":
/*!**************************************************!*\
  !*** ./node_modules/@uppy/react/lib/DragDrop.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var DragDropPlugin = __webpack_require__(/*! @uppy/drag-drop */ "./node_modules/@uppy/drag-drop/lib/index.js");
var propTypes = __webpack_require__(/*! ./propTypes */ "./node_modules/@uppy/react/lib/propTypes.js");

var h = React.createElement;

/**
 * React component that renders an area in which files can be dropped to be
 * uploaded.
 */

var DragDrop = function (_React$Component) {
  _inherits(DragDrop, _React$Component);

  function DragDrop() {
    _classCallCheck(this, DragDrop);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  DragDrop.prototype.componentDidMount = function componentDidMount() {
    var uppy = this.props.uppy;
    var options = _extends({ id: 'react:DragDrop' }, this.props, { target: this.container });
    delete options.uppy;

    uppy.use(DragDropPlugin, options);

    this.plugin = uppy.getPlugin(options.id);
  };

  DragDrop.prototype.componentWillUnmount = function componentWillUnmount() {
    var uppy = this.props.uppy;

    uppy.removePlugin(this.plugin);
  };

  DragDrop.prototype.render = function render() {
    var _this2 = this;

    return h('div', {
      ref: function ref(container) {
        _this2.container = container;
      }
    });
  };

  return DragDrop;
}(React.Component);

DragDrop.propTypes = {
  uppy: propTypes.uppy,
  locale: propTypes.locale
};
DragDrop.defaultProps = {};

module.exports = DragDrop;

/***/ }),

/***/ "./node_modules/@uppy/react/lib/ProgressBar.js":
/*!*****************************************************!*\
  !*** ./node_modules/@uppy/react/lib/ProgressBar.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var PropTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
var ProgressBarPlugin = __webpack_require__(/*! @uppy/progress-bar */ "./node_modules/@uppy/progress-bar/lib/index.js");
var uppyPropType = __webpack_require__(/*! ./propTypes */ "./node_modules/@uppy/react/lib/propTypes.js").uppy;

var h = React.createElement;

/**
 * React component that renders a progress bar at the top of the page.
 */

var ProgressBar = function (_React$Component) {
  _inherits(ProgressBar, _React$Component);

  function ProgressBar() {
    _classCallCheck(this, ProgressBar);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  ProgressBar.prototype.componentDidMount = function componentDidMount() {
    var uppy = this.props.uppy;
    var options = _extends({ id: 'react:ProgressBar' }, this.props, { target: this.container });
    delete options.uppy;

    uppy.use(ProgressBarPlugin, options);

    this.plugin = uppy.getPlugin(options.id);
  };

  ProgressBar.prototype.componentWillUnmount = function componentWillUnmount() {
    var uppy = this.props.uppy;

    uppy.removePlugin(this.plugin);
  };

  ProgressBar.prototype.render = function render() {
    var _this2 = this;

    return h('div', {
      ref: function ref(container) {
        _this2.container = container;
      }
    });
  };

  return ProgressBar;
}(React.Component);

ProgressBar.propTypes = {
  uppy: uppyPropType,
  fixed: PropTypes.bool,
  hideAfterFinish: PropTypes.bool
};
ProgressBar.defaultProps = {};

module.exports = ProgressBar;

/***/ }),

/***/ "./node_modules/@uppy/react/lib/StatusBar.js":
/*!***************************************************!*\
  !*** ./node_modules/@uppy/react/lib/StatusBar.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var PropTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
var StatusBarPlugin = __webpack_require__(/*! @uppy/status-bar */ "./node_modules/@uppy/status-bar/lib/index.js");
var uppyPropType = __webpack_require__(/*! ./propTypes */ "./node_modules/@uppy/react/lib/propTypes.js").uppy;

var h = React.createElement;

/**
 * React component that renders a status bar containing upload progress and speed,
 * processing progress and pause/resume/cancel controls.
 */

var StatusBar = function (_React$Component) {
  _inherits(StatusBar, _React$Component);

  function StatusBar() {
    _classCallCheck(this, StatusBar);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  StatusBar.prototype.componentDidMount = function componentDidMount() {
    var uppy = this.props.uppy;
    var options = _extends({ id: 'react:StatusBar' }, this.props, { target: this.container });
    delete options.uppy;

    uppy.use(StatusBarPlugin, options);

    this.plugin = uppy.getPlugin(options.id);
  };

  StatusBar.prototype.componentWillUnmount = function componentWillUnmount() {
    var uppy = this.props.uppy;

    uppy.removePlugin(this.plugin);
  };

  StatusBar.prototype.render = function render() {
    var _this2 = this;

    return h('div', {
      ref: function ref(container) {
        _this2.container = container;
      }
    });
  };

  return StatusBar;
}(React.Component);

StatusBar.propTypes = {
  uppy: uppyPropType,
  hideAfterFinish: PropTypes.bool,
  showProgressDetails: PropTypes.bool
};
StatusBar.defaultProps = {};

module.exports = StatusBar;

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
/* harmony import */ var _uppy_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @uppy/react */ "./node_modules/@uppy/react/index.mjs");
var _jsxFileName = "/mnt/d/Projects/image-uploader/pages/index.js";




var Uppy = __webpack_require__(/*! @uppy/core */ "./node_modules/@uppy/core/lib/index.js");

var Tus = __webpack_require__(/*! @uppy/tus */ "./node_modules/@uppy/tus/lib/index.js"); // import Dashboard from '@uppy/react/lib/Dashboard'



/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Sample Uploader Using Uppy"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    charSet: "utf-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "/static/css/bootstrap.min.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "/static/css/style.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: "navbar navbar-expand-md navbar-dark bg-dark fixed-top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "navbar-brand",
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Navbar"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "navbar-toggler",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#navbarsExampleDefault",
    "aria-controls": "navbarsExampleDefault",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "navbar-toggler-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "collapse navbar-collapse",
    id: "navbarsExampleDefault",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "navbar-nav mr-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item active",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "nav-link",
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Home ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "sr-only",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "(current)"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "nav-link",
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Link")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "nav-link disabled",
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Disabled")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item dropdown",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "nav-link dropdown-toggle",
    href: "http://example.com",
    id: "dropdown01",
    "data-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Dropdown"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "dropdown-menu",
    "aria-labelledby": "dropdown01",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "dropdown-item",
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Action"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "dropdown-item",
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Another action"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "dropdown-item",
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Something else here")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    role: "main",
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "starter-template",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "Bootstrap starter template"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "lead",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "Use this document as a way to quickly start any new project. All you get is this text and a mostly barebones HTML document."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_uppy_react__WEBPACK_IMPORTED_MODULE_3__["Dashboard"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }))));
});
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.a0060cd999f51242823e.hot-update.js.map