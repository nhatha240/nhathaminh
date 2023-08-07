/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***************************************************************************!*\
  !*** ./platform/packages/plugin-management/resources/assets/js/plugin.js ***!
  \***************************************************************************/
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var PluginManagement = /*#__PURE__*/function () {
  function PluginManagement() {
    _classCallCheck(this, PluginManagement);
  }
  _createClass(PluginManagement, [{
    key: "init",
    value: function init() {
      var _this = this;
      $(document).on('click', '.btn-trigger-remove-plugin', function (event) {
        event.preventDefault();
        $('#confirm-remove-plugin-button').data('plugin', $(event.currentTarget).data('plugin'));
        $('#remove-plugin-modal').modal('show');
      });
      $(document).on('click', '#confirm-remove-plugin-button', function (event) {
        event.preventDefault();
        var _self = $(event.currentTarget);
        _self.addClass('button-loading');
        $.ajax({
          url: route('plugins.remove', {
            plugin: _self.data('plugin')
          }),
          type: 'POST',
          data: {
            _method: 'DELETE'
          },
          success: function success(data) {
            if (data.error) {
              Botble.showError(data.message);
            } else {
              Botble.showSuccess(data.message);
              window.location.reload();
            }
            _self.removeClass('button-loading');
            $('#remove-plugin-modal').modal('hide');
          },
          error: function error(data) {
            Botble.handleError(data);
            _self.removeClass('button-loading');
            $('#remove-plugin-modal').modal('hide');
          }
        });
      });
      $(document).on('click', '.btn-trigger-update-plugin', function (event) {
        event.preventDefault();
        var _self = $(event.currentTarget);
        var uuid = _self.data('uuid');
        _self.addClass('button-loading');
        _self.attr('disabled', true);
        $.ajax({
          url: route('plugins.marketplace.ajax.update', {
            id: uuid
          }),
          type: 'POST',
          success: function success(data) {
            if (data.error) {
              Botble.showError(data.message);
              _self.removeClass('button-loading');
              _self.removeAttr('disabled', true);
              if (data.data && data.data.redirect) {
                window.location.href;
              }
            } else {
              Botble.showSuccess(data.message);
              setTimeout(function () {
                window.location.reload();
              }, 2000);
            }
          },
          error: function error(data) {
            Botble.handleError(data);
            _self.removeClass('button-loading');
            _self.removeAttr('disabled', true);
          }
        });
      });
      $(document).on('click', '.btn-trigger-change-status', /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(event) {
          var _self, pluginName;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                event.preventDefault();
                _self = $(event.currentTarget);
                _self.addClass('button-loading');
                pluginName = _self.data('plugin');
                if (!(_self.data('status') === 1)) {
                  _context2.next = 8;
                  break;
                }
                _context2.next = 7;
                return _this.activateOrDeactivatePlugin(pluginName);
              case 7:
                return _context2.abrupt("return");
              case 8:
                $.ajax({
                  url: route('plugins.check-requirement', {
                    name: pluginName
                  }),
                  type: 'POST',
                  success: function () {
                    var _success = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(response) {
                      var error, data, message, $modal;
                      return _regeneratorRuntime().wrap(function _callee$(_context) {
                        while (1) switch (_context.prev = _context.next) {
                          case 0:
                            error = response.error, data = response.data, message = response.message;
                            if (!error) {
                              _context.next = 13;
                              break;
                            }
                            if (!(data && data.existing_plugins_on_marketplace)) {
                              _context.next = 10;
                              break;
                            }
                            $modal = $('#confirm-install-plugin-modal');
                            $modal.find('.modal-body #requirement-message').html(message);
                            $modal.find('input[name="plugin_name"]').val(pluginName);
                            $modal.find('input[name="ids"]').val(data.existing_plugins_on_marketplace);
                            $modal.modal('show');
                            _self.removeClass('button-loading');
                            return _context.abrupt("return");
                          case 10:
                            Botble.showError(message);
                            _context.next = 15;
                            break;
                          case 13:
                            _context.next = 15;
                            return _this.activateOrDeactivatePlugin(pluginName);
                          case 15:
                            _self.removeClass('button-loading');
                          case 16:
                          case "end":
                            return _context.stop();
                        }
                      }, _callee);
                    }));
                    function success(_x2) {
                      return _success.apply(this, arguments);
                    }
                    return success;
                  }(),
                  error: function error(_error) {
                    Botble.handleError(_error);
                    _self.removeClass('button-loading');
                  }
                });
              case 9:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }));
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
      $(document).on('click', '#confirm-install-plugin-button', /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(event) {
          var _self, $body, pluginName, pluginIds, activatedPlugins, _iterator, _step, pluginId, response, _i, _activatedPlugins, _pluginName;
          return _regeneratorRuntime().wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                _self = $(event.currentTarget);
                _self.addClass('button-loading');
                $body = _self.parent().parent();
                pluginName = $body.find('input[name="plugin_name"]').val();
                pluginIds = $body.find('input[name="ids"]').val();
                activatedPlugins = [];
                _iterator = _createForOfIteratorHelper(pluginIds.split(','));
                _context3.prev = 7;
                _iterator.s();
              case 9:
                if ((_step = _iterator.n()).done) {
                  _context3.next = 17;
                  break;
                }
                pluginId = _step.value;
                _context3.next = 13;
                return _this.installPlugin(pluginId);
              case 13:
                response = _context3.sent;
                if (response) {
                  activatedPlugins.push(response.name);
                }
              case 15:
                _context3.next = 9;
                break;
              case 17:
                _context3.next = 22;
                break;
              case 19:
                _context3.prev = 19;
                _context3.t0 = _context3["catch"](7);
                _iterator.e(_context3.t0);
              case 22:
                _context3.prev = 22;
                _iterator.f();
                return _context3.finish(22);
              case 25:
                _i = 0, _activatedPlugins = activatedPlugins;
              case 26:
                if (!(_i < _activatedPlugins.length)) {
                  _context3.next = 33;
                  break;
                }
                _pluginName = _activatedPlugins[_i];
                _context3.next = 30;
                return _this.activateOrDeactivatePlugin(_pluginName, false);
              case 30:
                _i++;
                _context3.next = 26;
                break;
              case 33:
                _context3.next = 35;
                return _this.activateOrDeactivatePlugin(pluginName);
              case 35:
                _self.removeClass('button-loading');
                _self.text(_self.data('text'));
              case 37:
              case "end":
                return _context3.stop();
            }
          }, _callee3, null, [[7, 19, 22, 25]]);
        }));
        return function (_x3) {
          return _ref2.apply(this, arguments);
        };
      }());
      this.checkUpdate();
    }
  }, {
    key: "checkUpdate",
    value: function checkUpdate() {
      var _this2 = this;
      $.ajax({
        url: route('plugins.marketplace.ajax.check-update'),
        type: 'POST',
        success: function success(data) {
          if (!data.data) {
            return;
          }
          Object.keys(data.data).forEach(function (key) {
            var plugin = data.data[key];
            var element = $('[data-check-update="' + plugin.name + '"]');
            var $checkVersion = _this2.checkVersion(element.data('version'), plugin.version);
            if ($checkVersion) {
              element.show();
              element.attr('data-uuid', plugin.id);
            }
          });
        }
      });
    }
  }, {
    key: "checkVersion",
    value: function checkVersion(currentVersion, latestVersion) {
      var current = currentVersion.toString().split('.');
      var latest = latestVersion.toString().split('.');
      var length = Math.max(current.length, latest.length);
      for (var i = 0; i < length; i++) {
        var oldVer = ~~current[i];
        var newVer = ~~latest[i];
        if (newVer > oldVer) {
          return true;
        }
      }
      return false;
    }
  }, {
    key: "activateOrDeactivatePlugin",
    value: function () {
      var _activateOrDeactivatePlugin = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(pluginName) {
        var reload,
          _args4 = arguments;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              reload = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : true;
              _context4.next = 3;
              return $.ajax({
                url: route('plugins.change.status', {
                  name: pluginName
                }),
                type: 'POST',
                data: {
                  _method: 'PUT'
                },
                success: function success(data) {
                  if (!data.error) {
                    Botble.showSuccess(data.message);
                    if (reload) {
                      $('#plugin-list #app-' + pluginName).load(window.location.href + ' #plugin-list #app-' + pluginName + ' > *');
                      window.location.reload();
                    }
                    return;
                  }
                  Botble.showError(data.message);
                },
                error: function error(data) {
                  Botble.handleError(data);
                }
              });
            case 3:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }));
      function activateOrDeactivatePlugin(_x4) {
        return _activateOrDeactivatePlugin.apply(this, arguments);
      }
      return activateOrDeactivatePlugin;
    }()
  }, {
    key: "installPlugin",
    value: function () {
      var _installPlugin = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(id) {
        var data;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              data = null;
              _context5.next = 3;
              return $.ajax({
                method: 'POST',
                url: route('plugins.marketplace.ajax.install', {
                  id: id
                }),
                success: function success(response) {
                  return data = response.error ? [] : response.data;
                },
                error: function error(_error2) {
                  Botble.handleError(_error2);
                }
              });
            case 3:
              return _context5.abrupt("return", data);
            case 4:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }));
      function installPlugin(_x5) {
        return _installPlugin.apply(this, arguments);
      }
      return installPlugin;
    }()
  }]);
  return PluginManagement;
}();
$(document).ready(function () {
  new PluginManagement().init();
});
/******/ })()
;