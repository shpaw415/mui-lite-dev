import {
  __commonJS,
  __toESM
} from "./chunk-bc2nw43f.js";

// node_modules/react/cjs/react.development.js
var require_react_development = __commonJS((exports, module) => {
  (function() {
    function defineDeprecationWarning(methodName, info) {
      Object.defineProperty(Component.prototype, methodName, {
        get: function() {
          console.warn("%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]);
        }
      });
    }
    function getIteratorFn(maybeIterable) {
      if (maybeIterable === null || typeof maybeIterable !== "object")
        return null;
      maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
      return typeof maybeIterable === "function" ? maybeIterable : null;
    }
    function warnNoop(publicInstance, callerName) {
      publicInstance = (publicInstance = publicInstance.constructor) && (publicInstance.displayName || publicInstance.name) || "ReactClass";
      var warningKey = publicInstance + "." + callerName;
      didWarnStateUpdateForUnmountedComponent[warningKey] || (console.error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", callerName, publicInstance), didWarnStateUpdateForUnmountedComponent[warningKey] = true);
    }
    function Component(props, context, updater) {
      this.props = props;
      this.context = context;
      this.refs = emptyObject;
      this.updater = updater || ReactNoopUpdateQueue;
    }
    function ComponentDummy() {}
    function PureComponent(props, context, updater) {
      this.props = props;
      this.context = context;
      this.refs = emptyObject;
      this.updater = updater || ReactNoopUpdateQueue;
    }
    function testStringCoercion(value) {
      return "" + value;
    }
    function checkKeyStringCoercion(value) {
      try {
        testStringCoercion(value);
        var JSCompiler_inline_result = false;
      } catch (e) {
        JSCompiler_inline_result = true;
      }
      if (JSCompiler_inline_result) {
        JSCompiler_inline_result = console;
        var JSCompiler_temp_const = JSCompiler_inline_result.error;
        var JSCompiler_inline_result$jscomp$0 = typeof Symbol === "function" && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
        JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
        return testStringCoercion(value);
      }
    }
    function getComponentNameFromType(type) {
      if (type == null)
        return null;
      if (typeof type === "function")
        return type.$$typeof === REACT_CLIENT_REFERENCE$2 ? null : type.displayName || type.name || null;
      if (typeof type === "string")
        return type;
      switch (type) {
        case REACT_FRAGMENT_TYPE:
          return "Fragment";
        case REACT_PORTAL_TYPE:
          return "Portal";
        case REACT_PROFILER_TYPE:
          return "Profiler";
        case REACT_STRICT_MODE_TYPE:
          return "StrictMode";
        case REACT_SUSPENSE_TYPE:
          return "Suspense";
        case REACT_SUSPENSE_LIST_TYPE:
          return "SuspenseList";
      }
      if (typeof type === "object")
        switch (typeof type.tag === "number" && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof) {
          case REACT_CONTEXT_TYPE:
            return (type.displayName || "Context") + ".Provider";
          case REACT_CONSUMER_TYPE:
            return (type._context.displayName || "Context") + ".Consumer";
          case REACT_FORWARD_REF_TYPE:
            var innerType = type.render;
            type = type.displayName;
            type || (type = innerType.displayName || innerType.name || "", type = type !== "" ? "ForwardRef(" + type + ")" : "ForwardRef");
            return type;
          case REACT_MEMO_TYPE:
            return innerType = type.displayName || null, innerType !== null ? innerType : getComponentNameFromType(type.type) || "Memo";
          case REACT_LAZY_TYPE:
            innerType = type._payload;
            type = type._init;
            try {
              return getComponentNameFromType(type(innerType));
            } catch (x) {}
        }
      return null;
    }
    function isValidElementType(type) {
      return typeof type === "string" || typeof type === "function" || type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_OFFSCREEN_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_CONSUMER_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_CLIENT_REFERENCE$1 || type.getModuleId !== undefined) ? true : false;
    }
    function disabledLog() {}
    function disableLogs() {
      if (disabledDepth === 0) {
        prevLog = console.log;
        prevInfo = console.info;
        prevWarn = console.warn;
        prevError = console.error;
        prevGroup = console.group;
        prevGroupCollapsed = console.groupCollapsed;
        prevGroupEnd = console.groupEnd;
        var props = {
          configurable: true,
          enumerable: true,
          value: disabledLog,
          writable: true
        };
        Object.defineProperties(console, {
          info: props,
          log: props,
          warn: props,
          error: props,
          group: props,
          groupCollapsed: props,
          groupEnd: props
        });
      }
      disabledDepth++;
    }
    function reenableLogs() {
      disabledDepth--;
      if (disabledDepth === 0) {
        var props = { configurable: true, enumerable: true, writable: true };
        Object.defineProperties(console, {
          log: assign({}, props, { value: prevLog }),
          info: assign({}, props, { value: prevInfo }),
          warn: assign({}, props, { value: prevWarn }),
          error: assign({}, props, { value: prevError }),
          group: assign({}, props, { value: prevGroup }),
          groupCollapsed: assign({}, props, { value: prevGroupCollapsed }),
          groupEnd: assign({}, props, { value: prevGroupEnd })
        });
      }
      0 > disabledDepth && console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
    }
    function describeBuiltInComponentFrame(name) {
      if (prefix === undefined)
        try {
          throw Error();
        } catch (x) {
          var match = x.stack.trim().match(/\n( *(at )?)/);
          prefix = match && match[1] || "";
          suffix = -1 < x.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < x.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + prefix + name + suffix;
    }
    function describeNativeComponentFrame(fn, construct) {
      if (!fn || reentry)
        return "";
      var frame = componentFrameCache.get(fn);
      if (frame !== undefined)
        return frame;
      reentry = true;
      frame = Error.prepareStackTrace;
      Error.prepareStackTrace = undefined;
      var previousDispatcher = null;
      previousDispatcher = ReactSharedInternals.H;
      ReactSharedInternals.H = null;
      disableLogs();
      try {
        var RunInRootFrame = {
          DetermineComponentFrameRoot: function() {
            try {
              if (construct) {
                var Fake = function() {
                  throw Error();
                };
                Object.defineProperty(Fake.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                });
                if (typeof Reflect === "object" && Reflect.construct) {
                  try {
                    Reflect.construct(Fake, []);
                  } catch (x) {
                    var control = x;
                  }
                  Reflect.construct(fn, [], Fake);
                } else {
                  try {
                    Fake.call();
                  } catch (x$0) {
                    control = x$0;
                  }
                  fn.call(Fake.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (x$1) {
                  control = x$1;
                }
                (Fake = fn()) && typeof Fake.catch === "function" && Fake.catch(function() {});
              }
            } catch (sample) {
              if (sample && control && typeof sample.stack === "string")
                return [sample.stack, control.stack];
            }
            return [null, null];
          }
        };
        RunInRootFrame.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var namePropDescriptor = Object.getOwnPropertyDescriptor(RunInRootFrame.DetermineComponentFrameRoot, "name");
        namePropDescriptor && namePropDescriptor.configurable && Object.defineProperty(RunInRootFrame.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
        var _RunInRootFrame$Deter = RunInRootFrame.DetermineComponentFrameRoot(), sampleStack = _RunInRootFrame$Deter[0], controlStack = _RunInRootFrame$Deter[1];
        if (sampleStack && controlStack) {
          var sampleLines = sampleStack.split(`
`), controlLines = controlStack.split(`
`);
          for (_RunInRootFrame$Deter = namePropDescriptor = 0;namePropDescriptor < sampleLines.length && !sampleLines[namePropDescriptor].includes("DetermineComponentFrameRoot"); )
            namePropDescriptor++;
          for (;_RunInRootFrame$Deter < controlLines.length && !controlLines[_RunInRootFrame$Deter].includes("DetermineComponentFrameRoot"); )
            _RunInRootFrame$Deter++;
          if (namePropDescriptor === sampleLines.length || _RunInRootFrame$Deter === controlLines.length)
            for (namePropDescriptor = sampleLines.length - 1, _RunInRootFrame$Deter = controlLines.length - 1;1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter && sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter]; )
              _RunInRootFrame$Deter--;
          for (;1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter; namePropDescriptor--, _RunInRootFrame$Deter--)
            if (sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter]) {
              if (namePropDescriptor !== 1 || _RunInRootFrame$Deter !== 1) {
                do
                  if (namePropDescriptor--, _RunInRootFrame$Deter--, 0 > _RunInRootFrame$Deter || sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter]) {
                    var _frame = `
` + sampleLines[namePropDescriptor].replace(" at new ", " at ");
                    fn.displayName && _frame.includes("<anonymous>") && (_frame = _frame.replace("<anonymous>", fn.displayName));
                    typeof fn === "function" && componentFrameCache.set(fn, _frame);
                    return _frame;
                  }
                while (1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter);
              }
              break;
            }
        }
      } finally {
        reentry = false, ReactSharedInternals.H = previousDispatcher, reenableLogs(), Error.prepareStackTrace = frame;
      }
      sampleLines = (sampleLines = fn ? fn.displayName || fn.name : "") ? describeBuiltInComponentFrame(sampleLines) : "";
      typeof fn === "function" && componentFrameCache.set(fn, sampleLines);
      return sampleLines;
    }
    function describeUnknownElementTypeFrameInDEV(type) {
      if (type == null)
        return "";
      if (typeof type === "function") {
        var prototype = type.prototype;
        return describeNativeComponentFrame(type, !(!prototype || !prototype.isReactComponent));
      }
      if (typeof type === "string")
        return describeBuiltInComponentFrame(type);
      switch (type) {
        case REACT_SUSPENSE_TYPE:
          return describeBuiltInComponentFrame("Suspense");
        case REACT_SUSPENSE_LIST_TYPE:
          return describeBuiltInComponentFrame("SuspenseList");
      }
      if (typeof type === "object")
        switch (type.$$typeof) {
          case REACT_FORWARD_REF_TYPE:
            return type = describeNativeComponentFrame(type.render, false), type;
          case REACT_MEMO_TYPE:
            return describeUnknownElementTypeFrameInDEV(type.type);
          case REACT_LAZY_TYPE:
            prototype = type._payload;
            type = type._init;
            try {
              return describeUnknownElementTypeFrameInDEV(type(prototype));
            } catch (x) {}
        }
      return "";
    }
    function getOwner() {
      var dispatcher = ReactSharedInternals.A;
      return dispatcher === null ? null : dispatcher.getOwner();
    }
    function hasValidKey(config) {
      if (hasOwnProperty.call(config, "key")) {
        var getter = Object.getOwnPropertyDescriptor(config, "key").get;
        if (getter && getter.isReactWarning)
          return false;
      }
      return config.key !== undefined;
    }
    function defineKeyPropWarningGetter(props, displayName) {
      function warnAboutAccessingKey() {
        specialPropKeyWarningShown || (specialPropKeyWarningShown = true, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
      }
      warnAboutAccessingKey.isReactWarning = true;
      Object.defineProperty(props, "key", {
        get: warnAboutAccessingKey,
        configurable: true
      });
    }
    function elementRefGetterWithDeprecationWarning() {
      var componentName = getComponentNameFromType(this.type);
      didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = true, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
      componentName = this.props.ref;
      return componentName !== undefined ? componentName : null;
    }
    function ReactElement(type, key, self, source, owner, props) {
      self = props.ref;
      type = {
        $$typeof: REACT_ELEMENT_TYPE,
        type,
        key,
        props,
        _owner: owner
      };
      (self !== undefined ? self : null) !== null ? Object.defineProperty(type, "ref", {
        enumerable: false,
        get: elementRefGetterWithDeprecationWarning
      }) : Object.defineProperty(type, "ref", { enumerable: false, value: null });
      type._store = {};
      Object.defineProperty(type._store, "validated", {
        configurable: false,
        enumerable: false,
        writable: true,
        value: 0
      });
      Object.defineProperty(type, "_debugInfo", {
        configurable: false,
        enumerable: false,
        writable: true,
        value: null
      });
      Object.freeze && (Object.freeze(type.props), Object.freeze(type));
      return type;
    }
    function cloneAndReplaceKey(oldElement, newKey) {
      newKey = ReactElement(oldElement.type, newKey, undefined, undefined, oldElement._owner, oldElement.props);
      newKey._store.validated = oldElement._store.validated;
      return newKey;
    }
    function validateChildKeys(node, parentType) {
      if (typeof node === "object" && node && node.$$typeof !== REACT_CLIENT_REFERENCE) {
        if (isArrayImpl(node))
          for (var i = 0;i < node.length; i++) {
            var child = node[i];
            isValidElement(child) && validateExplicitKey(child, parentType);
          }
        else if (isValidElement(node))
          node._store && (node._store.validated = 1);
        else if (i = getIteratorFn(node), typeof i === "function" && i !== node.entries && (i = i.call(node), i !== node))
          for (;!(node = i.next()).done; )
            isValidElement(node.value) && validateExplicitKey(node.value, parentType);
      }
    }
    function isValidElement(object) {
      return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    function validateExplicitKey(element, parentType) {
      if (element._store && !element._store.validated && element.key == null && (element._store.validated = 1, parentType = getCurrentComponentErrorInfo(parentType), !ownerHasKeyUseWarning[parentType])) {
        ownerHasKeyUseWarning[parentType] = true;
        var childOwner = "";
        element && element._owner != null && element._owner !== getOwner() && (childOwner = null, typeof element._owner.tag === "number" ? childOwner = getComponentNameFromType(element._owner.type) : typeof element._owner.name === "string" && (childOwner = element._owner.name), childOwner = " It was passed a child from " + childOwner + ".");
        var prevGetCurrentStack = ReactSharedInternals.getCurrentStack;
        ReactSharedInternals.getCurrentStack = function() {
          var stack = describeUnknownElementTypeFrameInDEV(element.type);
          prevGetCurrentStack && (stack += prevGetCurrentStack() || "");
          return stack;
        };
        console.error('Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.', parentType, childOwner);
        ReactSharedInternals.getCurrentStack = prevGetCurrentStack;
      }
    }
    function getCurrentComponentErrorInfo(parentType) {
      var info = "", owner = getOwner();
      owner && (owner = getComponentNameFromType(owner.type)) && (info = `

Check the render method of \`` + owner + "`.");
      info || (parentType = getComponentNameFromType(parentType)) && (info = `

Check the top-level render call using <` + parentType + ">.");
      return info;
    }
    function escape(key) {
      var escaperLookup = { "=": "=0", ":": "=2" };
      return "$" + key.replace(/[=:]/g, function(match) {
        return escaperLookup[match];
      });
    }
    function getElementKey(element, index) {
      return typeof element === "object" && element !== null && element.key != null ? (checkKeyStringCoercion(element.key), escape("" + element.key)) : index.toString(36);
    }
    function noop$1() {}
    function resolveThenable(thenable) {
      switch (thenable.status) {
        case "fulfilled":
          return thenable.value;
        case "rejected":
          throw thenable.reason;
        default:
          switch (typeof thenable.status === "string" ? thenable.then(noop$1, noop$1) : (thenable.status = "pending", thenable.then(function(fulfilledValue) {
            thenable.status === "pending" && (thenable.status = "fulfilled", thenable.value = fulfilledValue);
          }, function(error) {
            thenable.status === "pending" && (thenable.status = "rejected", thenable.reason = error);
          })), thenable.status) {
            case "fulfilled":
              return thenable.value;
            case "rejected":
              throw thenable.reason;
          }
      }
      throw thenable;
    }
    function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
      var type = typeof children;
      if (type === "undefined" || type === "boolean")
        children = null;
      var invokeCallback = false;
      if (children === null)
        invokeCallback = true;
      else
        switch (type) {
          case "bigint":
          case "string":
          case "number":
            invokeCallback = true;
            break;
          case "object":
            switch (children.$$typeof) {
              case REACT_ELEMENT_TYPE:
              case REACT_PORTAL_TYPE:
                invokeCallback = true;
                break;
              case REACT_LAZY_TYPE:
                return invokeCallback = children._init, mapIntoArray(invokeCallback(children._payload), array, escapedPrefix, nameSoFar, callback);
            }
        }
      if (invokeCallback) {
        invokeCallback = children;
        callback = callback(invokeCallback);
        var childKey = nameSoFar === "" ? "." + getElementKey(invokeCallback, 0) : nameSoFar;
        isArrayImpl(callback) ? (escapedPrefix = "", childKey != null && (escapedPrefix = childKey.replace(userProvidedKeyEscapeRegex, "$&/") + "/"), mapIntoArray(callback, array, escapedPrefix, "", function(c) {
          return c;
        })) : callback != null && (isValidElement(callback) && (callback.key != null && (invokeCallback && invokeCallback.key === callback.key || checkKeyStringCoercion(callback.key)), escapedPrefix = cloneAndReplaceKey(callback, escapedPrefix + (callback.key == null || invokeCallback && invokeCallback.key === callback.key ? "" : ("" + callback.key).replace(userProvidedKeyEscapeRegex, "$&/") + "/") + childKey), nameSoFar !== "" && invokeCallback != null && isValidElement(invokeCallback) && invokeCallback.key == null && invokeCallback._store && !invokeCallback._store.validated && (escapedPrefix._store.validated = 2), callback = escapedPrefix), array.push(callback));
        return 1;
      }
      invokeCallback = 0;
      childKey = nameSoFar === "" ? "." : nameSoFar + ":";
      if (isArrayImpl(children))
        for (var i = 0;i < children.length; i++)
          nameSoFar = children[i], type = childKey + getElementKey(nameSoFar, i), invokeCallback += mapIntoArray(nameSoFar, array, escapedPrefix, type, callback);
      else if (i = getIteratorFn(children), typeof i === "function")
        for (i === children.entries && (didWarnAboutMaps || console.warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), didWarnAboutMaps = true), children = i.call(children), i = 0;!(nameSoFar = children.next()).done; )
          nameSoFar = nameSoFar.value, type = childKey + getElementKey(nameSoFar, i++), invokeCallback += mapIntoArray(nameSoFar, array, escapedPrefix, type, callback);
      else if (type === "object") {
        if (typeof children.then === "function")
          return mapIntoArray(resolveThenable(children), array, escapedPrefix, nameSoFar, callback);
        array = String(children);
        throw Error("Objects are not valid as a React child (found: " + (array === "[object Object]" ? "object with keys {" + Object.keys(children).join(", ") + "}" : array) + "). If you meant to render a collection of children, use an array instead.");
      }
      return invokeCallback;
    }
    function mapChildren(children, func, context) {
      if (children == null)
        return children;
      var result = [], count = 0;
      mapIntoArray(children, result, "", "", function(child) {
        return func.call(context, child, count++);
      });
      return result;
    }
    function lazyInitializer(payload) {
      if (payload._status === -1) {
        var ctor = payload._result;
        ctor = ctor();
        ctor.then(function(moduleObject) {
          if (payload._status === 0 || payload._status === -1)
            payload._status = 1, payload._result = moduleObject;
        }, function(error) {
          if (payload._status === 0 || payload._status === -1)
            payload._status = 2, payload._result = error;
        });
        payload._status === -1 && (payload._status = 0, payload._result = ctor);
      }
      if (payload._status === 1)
        return ctor = payload._result, ctor === undefined && console.error(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, ctor), "default" in ctor || console.error(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, ctor), ctor.default;
      throw payload._result;
    }
    function resolveDispatcher() {
      var dispatcher = ReactSharedInternals.H;
      dispatcher === null && console.error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`);
      return dispatcher;
    }
    function noop() {}
    function enqueueTask(task) {
      if (enqueueTaskImpl === null)
        try {
          var requireString = ("require" + Math.random()).slice(0, 7);
          enqueueTaskImpl = (module && module[requireString]).call(module, "timers").setImmediate;
        } catch (_err) {
          enqueueTaskImpl = function(callback) {
            didWarnAboutMessageChannel === false && (didWarnAboutMessageChannel = true, typeof MessageChannel === "undefined" && console.error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
            var channel = new MessageChannel;
            channel.port1.onmessage = callback;
            channel.port2.postMessage(undefined);
          };
        }
      return enqueueTaskImpl(task);
    }
    function aggregateErrors(errors) {
      return 1 < errors.length && typeof AggregateError === "function" ? new AggregateError(errors) : errors[0];
    }
    function popActScope(prevActQueue, prevActScopeDepth) {
      prevActScopeDepth !== actScopeDepth - 1 && console.error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. ");
      actScopeDepth = prevActScopeDepth;
    }
    function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
      var queue = ReactSharedInternals.actQueue;
      if (queue !== null)
        if (queue.length !== 0)
          try {
            flushActQueue(queue);
            enqueueTask(function() {
              return recursivelyFlushAsyncActWork(returnValue, resolve, reject);
            });
            return;
          } catch (error) {
            ReactSharedInternals.thrownErrors.push(error);
          }
        else
          ReactSharedInternals.actQueue = null;
      0 < ReactSharedInternals.thrownErrors.length ? (queue = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, reject(queue)) : resolve(returnValue);
    }
    function flushActQueue(queue) {
      if (!isFlushing) {
        isFlushing = true;
        var i = 0;
        try {
          for (;i < queue.length; i++) {
            var callback = queue[i];
            do {
              ReactSharedInternals.didUsePromise = false;
              var continuation = callback(false);
              if (continuation !== null) {
                if (ReactSharedInternals.didUsePromise) {
                  queue[i] = callback;
                  queue.splice(0, i);
                  return;
                }
                callback = continuation;
              } else
                break;
            } while (1);
          }
          queue.length = 0;
        } catch (error) {
          queue.splice(0, i + 1), ReactSharedInternals.thrownErrors.push(error);
        } finally {
          isFlushing = false;
        }
      }
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
    Symbol.for("react.provider");
    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen"), MAYBE_ITERATOR_SYMBOL = Symbol.iterator, didWarnStateUpdateForUnmountedComponent = {}, ReactNoopUpdateQueue = {
      isMounted: function() {
        return false;
      },
      enqueueForceUpdate: function(publicInstance) {
        warnNoop(publicInstance, "forceUpdate");
      },
      enqueueReplaceState: function(publicInstance) {
        warnNoop(publicInstance, "replaceState");
      },
      enqueueSetState: function(publicInstance) {
        warnNoop(publicInstance, "setState");
      }
    }, assign = Object.assign, emptyObject = {};
    Object.freeze(emptyObject);
    Component.prototype.isReactComponent = {};
    Component.prototype.setState = function(partialState, callback) {
      if (typeof partialState !== "object" && typeof partialState !== "function" && partialState != null)
        throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, partialState, callback, "setState");
    };
    Component.prototype.forceUpdate = function(callback) {
      this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
    };
    var deprecatedAPIs = {
      isMounted: [
        "isMounted",
        "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
      ],
      replaceState: [
        "replaceState",
        "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
      ]
    }, fnName;
    for (fnName in deprecatedAPIs)
      deprecatedAPIs.hasOwnProperty(fnName) && defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    ComponentDummy.prototype = Component.prototype;
    deprecatedAPIs = PureComponent.prototype = new ComponentDummy;
    deprecatedAPIs.constructor = PureComponent;
    assign(deprecatedAPIs, Component.prototype);
    deprecatedAPIs.isPureReactComponent = true;
    var isArrayImpl = Array.isArray, REACT_CLIENT_REFERENCE$2 = Symbol.for("react.client.reference"), ReactSharedInternals = {
      H: null,
      A: null,
      T: null,
      S: null,
      actQueue: null,
      isBatchingLegacy: false,
      didScheduleLegacyUpdate: false,
      didUsePromise: false,
      thrownErrors: [],
      getCurrentStack: null
    }, hasOwnProperty = Object.prototype.hasOwnProperty, REACT_CLIENT_REFERENCE$1 = Symbol.for("react.client.reference"), disabledDepth = 0, prevLog, prevInfo, prevWarn, prevError, prevGroup, prevGroupCollapsed, prevGroupEnd;
    disabledLog.__reactDisabledLog = true;
    var prefix, suffix, reentry = false;
    var componentFrameCache = new (typeof WeakMap === "function" ? WeakMap : Map);
    var REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), specialPropKeyWarningShown, didWarnAboutOldJSXRuntime;
    var didWarnAboutElementRef = {};
    var ownerHasKeyUseWarning = {}, didWarnAboutMaps = false, userProvidedKeyEscapeRegex = /\/+/g, reportGlobalError = typeof reportError === "function" ? reportError : function(error) {
      if (typeof window === "object" && typeof window.ErrorEvent === "function") {
        var event = new window.ErrorEvent("error", {
          bubbles: true,
          cancelable: true,
          message: typeof error === "object" && error !== null && typeof error.message === "string" ? String(error.message) : String(error),
          error
        });
        if (!window.dispatchEvent(event))
          return;
      } else if (typeof process === "object" && typeof process.emit === "function") {
        process.emit("uncaughtException", error);
        return;
      }
      console.error(error);
    }, didWarnAboutMessageChannel = false, enqueueTaskImpl = null, actScopeDepth = 0, didWarnNoAwaitAct = false, isFlushing = false, queueSeveralMicrotasks = typeof queueMicrotask === "function" ? function(callback) {
      queueMicrotask(function() {
        return queueMicrotask(callback);
      });
    } : enqueueTask;
    exports.Children = {
      map: mapChildren,
      forEach: function(children, forEachFunc, forEachContext) {
        mapChildren(children, function() {
          forEachFunc.apply(this, arguments);
        }, forEachContext);
      },
      count: function(children) {
        var n = 0;
        mapChildren(children, function() {
          n++;
        });
        return n;
      },
      toArray: function(children) {
        return mapChildren(children, function(child) {
          return child;
        }) || [];
      },
      only: function(children) {
        if (!isValidElement(children))
          throw Error("React.Children.only expected to receive a single React element child.");
        return children;
      }
    };
    exports.Component = Component;
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.Profiler = REACT_PROFILER_TYPE;
    exports.PureComponent = PureComponent;
    exports.StrictMode = REACT_STRICT_MODE_TYPE;
    exports.Suspense = REACT_SUSPENSE_TYPE;
    exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ReactSharedInternals;
    exports.act = function(callback) {
      var prevActQueue = ReactSharedInternals.actQueue, prevActScopeDepth = actScopeDepth;
      actScopeDepth++;
      var queue = ReactSharedInternals.actQueue = prevActQueue !== null ? prevActQueue : [], didAwaitActCall = false;
      try {
        var result = callback();
      } catch (error) {
        ReactSharedInternals.thrownErrors.push(error);
      }
      if (0 < ReactSharedInternals.thrownErrors.length)
        throw popActScope(prevActQueue, prevActScopeDepth), callback = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, callback;
      if (result !== null && typeof result === "object" && typeof result.then === "function") {
        var thenable = result;
        queueSeveralMicrotasks(function() {
          didAwaitActCall || didWarnNoAwaitAct || (didWarnNoAwaitAct = true, console.error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
        });
        return {
          then: function(resolve, reject) {
            didAwaitActCall = true;
            thenable.then(function(returnValue) {
              popActScope(prevActQueue, prevActScopeDepth);
              if (prevActScopeDepth === 0) {
                try {
                  flushActQueue(queue), enqueueTask(function() {
                    return recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                  });
                } catch (error$2) {
                  ReactSharedInternals.thrownErrors.push(error$2);
                }
                if (0 < ReactSharedInternals.thrownErrors.length) {
                  var _thrownError = aggregateErrors(ReactSharedInternals.thrownErrors);
                  ReactSharedInternals.thrownErrors.length = 0;
                  reject(_thrownError);
                }
              } else
                resolve(returnValue);
            }, function(error) {
              popActScope(prevActQueue, prevActScopeDepth);
              0 < ReactSharedInternals.thrownErrors.length ? (error = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, reject(error)) : reject(error);
            });
          }
        };
      }
      var returnValue$jscomp$0 = result;
      popActScope(prevActQueue, prevActScopeDepth);
      prevActScopeDepth === 0 && (flushActQueue(queue), queue.length !== 0 && queueSeveralMicrotasks(function() {
        didAwaitActCall || didWarnNoAwaitAct || (didWarnNoAwaitAct = true, console.error("A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"));
      }), ReactSharedInternals.actQueue = null);
      if (0 < ReactSharedInternals.thrownErrors.length)
        throw callback = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, callback;
      return {
        then: function(resolve, reject) {
          didAwaitActCall = true;
          prevActScopeDepth === 0 ? (ReactSharedInternals.actQueue = queue, enqueueTask(function() {
            return recursivelyFlushAsyncActWork(returnValue$jscomp$0, resolve, reject);
          })) : resolve(returnValue$jscomp$0);
        }
      };
    };
    exports.cache = function(fn) {
      return function() {
        return fn.apply(null, arguments);
      };
    };
    exports.cloneElement = function(element, config, children) {
      if (element === null || element === undefined)
        throw Error("The argument must be a React element, but you passed " + element + ".");
      var props = assign({}, element.props), key = element.key, owner = element._owner;
      if (config != null) {
        var JSCompiler_inline_result;
        a: {
          if (hasOwnProperty.call(config, "ref") && (JSCompiler_inline_result = Object.getOwnPropertyDescriptor(config, "ref").get) && JSCompiler_inline_result.isReactWarning) {
            JSCompiler_inline_result = false;
            break a;
          }
          JSCompiler_inline_result = config.ref !== undefined;
        }
        JSCompiler_inline_result && (owner = getOwner());
        hasValidKey(config) && (checkKeyStringCoercion(config.key), key = "" + config.key);
        for (propName in config)
          !hasOwnProperty.call(config, propName) || propName === "key" || propName === "__self" || propName === "__source" || propName === "ref" && config.ref === undefined || (props[propName] = config[propName]);
      }
      var propName = arguments.length - 2;
      if (propName === 1)
        props.children = children;
      else if (1 < propName) {
        JSCompiler_inline_result = Array(propName);
        for (var i = 0;i < propName; i++)
          JSCompiler_inline_result[i] = arguments[i + 2];
        props.children = JSCompiler_inline_result;
      }
      props = ReactElement(element.type, key, undefined, undefined, owner, props);
      for (key = 2;key < arguments.length; key++)
        validateChildKeys(arguments[key], props.type);
      return props;
    };
    exports.createContext = function(defaultValue) {
      defaultValue = {
        $$typeof: REACT_CONTEXT_TYPE,
        _currentValue: defaultValue,
        _currentValue2: defaultValue,
        _threadCount: 0,
        Provider: null,
        Consumer: null
      };
      defaultValue.Provider = defaultValue;
      defaultValue.Consumer = {
        $$typeof: REACT_CONSUMER_TYPE,
        _context: defaultValue
      };
      defaultValue._currentRenderer = null;
      defaultValue._currentRenderer2 = null;
      return defaultValue;
    };
    exports.createElement = function(type, config, children) {
      if (isValidElementType(type))
        for (var i = 2;i < arguments.length; i++)
          validateChildKeys(arguments[i], type);
      else {
        i = "";
        if (type === undefined || typeof type === "object" && type !== null && Object.keys(type).length === 0)
          i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
        if (type === null)
          var typeString = "null";
        else
          isArrayImpl(type) ? typeString = "array" : type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE ? (typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : typeString = typeof type;
        console.error("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, i);
      }
      var propName;
      i = {};
      typeString = null;
      if (config != null)
        for (propName in didWarnAboutOldJSXRuntime || !("__self" in config) || "key" in config || (didWarnAboutOldJSXRuntime = true, console.warn("Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform")), hasValidKey(config) && (checkKeyStringCoercion(config.key), typeString = "" + config.key), config)
          hasOwnProperty.call(config, propName) && propName !== "key" && propName !== "__self" && propName !== "__source" && (i[propName] = config[propName]);
      var childrenLength = arguments.length - 2;
      if (childrenLength === 1)
        i.children = children;
      else if (1 < childrenLength) {
        for (var childArray = Array(childrenLength), _i = 0;_i < childrenLength; _i++)
          childArray[_i] = arguments[_i + 2];
        Object.freeze && Object.freeze(childArray);
        i.children = childArray;
      }
      if (type && type.defaultProps)
        for (propName in childrenLength = type.defaultProps, childrenLength)
          i[propName] === undefined && (i[propName] = childrenLength[propName]);
      typeString && defineKeyPropWarningGetter(i, typeof type === "function" ? type.displayName || type.name || "Unknown" : type);
      return ReactElement(type, typeString, undefined, undefined, getOwner(), i);
    };
    exports.createRef = function() {
      var refObject = { current: null };
      Object.seal(refObject);
      return refObject;
    };
    exports.forwardRef = function(render) {
      render != null && render.$$typeof === REACT_MEMO_TYPE ? console.error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof render !== "function" ? console.error("forwardRef requires a render function but was given %s.", render === null ? "null" : typeof render) : render.length !== 0 && render.length !== 2 && console.error("forwardRef render functions accept exactly two parameters: props and ref. %s", render.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.");
      render != null && render.defaultProps != null && console.error("forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?");
      var elementType = { $$typeof: REACT_FORWARD_REF_TYPE, render }, ownName;
      Object.defineProperty(elementType, "displayName", {
        enumerable: false,
        configurable: true,
        get: function() {
          return ownName;
        },
        set: function(name) {
          ownName = name;
          render.name || render.displayName || (Object.defineProperty(render, "name", { value: name }), render.displayName = name);
        }
      });
      return elementType;
    };
    exports.isValidElement = isValidElement;
    exports.lazy = function(ctor) {
      return {
        $$typeof: REACT_LAZY_TYPE,
        _payload: { _status: -1, _result: ctor },
        _init: lazyInitializer
      };
    };
    exports.memo = function(type, compare) {
      isValidElementType(type) || console.error("memo: The first argument must be a component. Instead received: %s", type === null ? "null" : typeof type);
      compare = {
        $$typeof: REACT_MEMO_TYPE,
        type,
        compare: compare === undefined ? null : compare
      };
      var ownName;
      Object.defineProperty(compare, "displayName", {
        enumerable: false,
        configurable: true,
        get: function() {
          return ownName;
        },
        set: function(name) {
          ownName = name;
          type.name || type.displayName || (Object.defineProperty(type, "name", { value: name }), type.displayName = name);
        }
      });
      return compare;
    };
    exports.startTransition = function(scope) {
      var prevTransition = ReactSharedInternals.T, currentTransition = {};
      ReactSharedInternals.T = currentTransition;
      currentTransition._updatedFibers = new Set;
      try {
        var returnValue = scope(), onStartTransitionFinish = ReactSharedInternals.S;
        onStartTransitionFinish !== null && onStartTransitionFinish(currentTransition, returnValue);
        typeof returnValue === "object" && returnValue !== null && typeof returnValue.then === "function" && returnValue.then(noop, reportGlobalError);
      } catch (error) {
        reportGlobalError(error);
      } finally {
        prevTransition === null && currentTransition._updatedFibers && (scope = currentTransition._updatedFibers.size, currentTransition._updatedFibers.clear(), 10 < scope && console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.")), ReactSharedInternals.T = prevTransition;
      }
    };
    exports.unstable_useCacheRefresh = function() {
      return resolveDispatcher().useCacheRefresh();
    };
    exports.use = function(usable) {
      return resolveDispatcher().use(usable);
    };
    exports.useActionState = function(action, initialState, permalink) {
      return resolveDispatcher().useActionState(action, initialState, permalink);
    };
    exports.useCallback = function(callback, deps) {
      return resolveDispatcher().useCallback(callback, deps);
    };
    exports.useContext = function(Context) {
      var dispatcher = resolveDispatcher();
      Context.$$typeof === REACT_CONSUMER_TYPE && console.error("Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?");
      return dispatcher.useContext(Context);
    };
    exports.useDebugValue = function(value, formatterFn) {
      return resolveDispatcher().useDebugValue(value, formatterFn);
    };
    exports.useDeferredValue = function(value, initialValue) {
      return resolveDispatcher().useDeferredValue(value, initialValue);
    };
    exports.useEffect = function(create, deps) {
      return resolveDispatcher().useEffect(create, deps);
    };
    exports.useId = function() {
      return resolveDispatcher().useId();
    };
    exports.useImperativeHandle = function(ref, create, deps) {
      return resolveDispatcher().useImperativeHandle(ref, create, deps);
    };
    exports.useInsertionEffect = function(create, deps) {
      return resolveDispatcher().useInsertionEffect(create, deps);
    };
    exports.useLayoutEffect = function(create, deps) {
      return resolveDispatcher().useLayoutEffect(create, deps);
    };
    exports.useMemo = function(create, deps) {
      return resolveDispatcher().useMemo(create, deps);
    };
    exports.useOptimistic = function(passthrough, reducer) {
      return resolveDispatcher().useOptimistic(passthrough, reducer);
    };
    exports.useReducer = function(reducer, initialArg, init) {
      return resolveDispatcher().useReducer(reducer, initialArg, init);
    };
    exports.useRef = function(initialValue) {
      return resolveDispatcher().useRef(initialValue);
    };
    exports.useState = function(initialState) {
      return resolveDispatcher().useState(initialState);
    };
    exports.useSyncExternalStore = function(subscribe, getSnapshot, getServerSnapshot) {
      return resolveDispatcher().useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
    };
    exports.useTransition = function() {
      return resolveDispatcher().useTransition();
    };
    exports.version = "19.0.0";
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })();
});

// node_modules/react/index.js
var require_react = __commonJS((exports, module) => {
  var react_development = __toESM(require_react_development(), 1);
  if (false) {} else {
    module.exports = react_development;
  }
});

// node_modules/react/cjs/react-jsx-dev-runtime.development.js
var require_react_jsx_dev_runtime_development = __commonJS((exports) => {
  var React = __toESM(require_react(), 1);
  (function() {
    function getComponentNameFromType(type) {
      if (type == null)
        return null;
      if (typeof type === "function")
        return type.$$typeof === REACT_CLIENT_REFERENCE$2 ? null : type.displayName || type.name || null;
      if (typeof type === "string")
        return type;
      switch (type) {
        case REACT_FRAGMENT_TYPE:
          return "Fragment";
        case REACT_PORTAL_TYPE:
          return "Portal";
        case REACT_PROFILER_TYPE:
          return "Profiler";
        case REACT_STRICT_MODE_TYPE:
          return "StrictMode";
        case REACT_SUSPENSE_TYPE:
          return "Suspense";
        case REACT_SUSPENSE_LIST_TYPE:
          return "SuspenseList";
      }
      if (typeof type === "object")
        switch (typeof type.tag === "number" && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof) {
          case REACT_CONTEXT_TYPE:
            return (type.displayName || "Context") + ".Provider";
          case REACT_CONSUMER_TYPE:
            return (type._context.displayName || "Context") + ".Consumer";
          case REACT_FORWARD_REF_TYPE:
            var innerType = type.render;
            type = type.displayName;
            type || (type = innerType.displayName || innerType.name || "", type = type !== "" ? "ForwardRef(" + type + ")" : "ForwardRef");
            return type;
          case REACT_MEMO_TYPE:
            return innerType = type.displayName || null, innerType !== null ? innerType : getComponentNameFromType(type.type) || "Memo";
          case REACT_LAZY_TYPE:
            innerType = type._payload;
            type = type._init;
            try {
              return getComponentNameFromType(type(innerType));
            } catch (x) {}
        }
      return null;
    }
    function testStringCoercion(value) {
      return "" + value;
    }
    function checkKeyStringCoercion(value) {
      try {
        testStringCoercion(value);
        var JSCompiler_inline_result = false;
      } catch (e) {
        JSCompiler_inline_result = true;
      }
      if (JSCompiler_inline_result) {
        JSCompiler_inline_result = console;
        var JSCompiler_temp_const = JSCompiler_inline_result.error;
        var JSCompiler_inline_result$jscomp$0 = typeof Symbol === "function" && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
        JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
        return testStringCoercion(value);
      }
    }
    function disabledLog() {}
    function disableLogs() {
      if (disabledDepth === 0) {
        prevLog = console.log;
        prevInfo = console.info;
        prevWarn = console.warn;
        prevError = console.error;
        prevGroup = console.group;
        prevGroupCollapsed = console.groupCollapsed;
        prevGroupEnd = console.groupEnd;
        var props = {
          configurable: true,
          enumerable: true,
          value: disabledLog,
          writable: true
        };
        Object.defineProperties(console, {
          info: props,
          log: props,
          warn: props,
          error: props,
          group: props,
          groupCollapsed: props,
          groupEnd: props
        });
      }
      disabledDepth++;
    }
    function reenableLogs() {
      disabledDepth--;
      if (disabledDepth === 0) {
        var props = { configurable: true, enumerable: true, writable: true };
        Object.defineProperties(console, {
          log: assign({}, props, { value: prevLog }),
          info: assign({}, props, { value: prevInfo }),
          warn: assign({}, props, { value: prevWarn }),
          error: assign({}, props, { value: prevError }),
          group: assign({}, props, { value: prevGroup }),
          groupCollapsed: assign({}, props, { value: prevGroupCollapsed }),
          groupEnd: assign({}, props, { value: prevGroupEnd })
        });
      }
      0 > disabledDepth && console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
    }
    function describeBuiltInComponentFrame(name) {
      if (prefix === undefined)
        try {
          throw Error();
        } catch (x) {
          var match = x.stack.trim().match(/\n( *(at )?)/);
          prefix = match && match[1] || "";
          suffix = -1 < x.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < x.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + prefix + name + suffix;
    }
    function describeNativeComponentFrame(fn, construct) {
      if (!fn || reentry)
        return "";
      var frame = componentFrameCache.get(fn);
      if (frame !== undefined)
        return frame;
      reentry = true;
      frame = Error.prepareStackTrace;
      Error.prepareStackTrace = undefined;
      var previousDispatcher = null;
      previousDispatcher = ReactSharedInternals.H;
      ReactSharedInternals.H = null;
      disableLogs();
      try {
        var RunInRootFrame = {
          DetermineComponentFrameRoot: function() {
            try {
              if (construct) {
                var Fake = function() {
                  throw Error();
                };
                Object.defineProperty(Fake.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                });
                if (typeof Reflect === "object" && Reflect.construct) {
                  try {
                    Reflect.construct(Fake, []);
                  } catch (x) {
                    var control = x;
                  }
                  Reflect.construct(fn, [], Fake);
                } else {
                  try {
                    Fake.call();
                  } catch (x$0) {
                    control = x$0;
                  }
                  fn.call(Fake.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (x$1) {
                  control = x$1;
                }
                (Fake = fn()) && typeof Fake.catch === "function" && Fake.catch(function() {});
              }
            } catch (sample) {
              if (sample && control && typeof sample.stack === "string")
                return [sample.stack, control.stack];
            }
            return [null, null];
          }
        };
        RunInRootFrame.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var namePropDescriptor = Object.getOwnPropertyDescriptor(RunInRootFrame.DetermineComponentFrameRoot, "name");
        namePropDescriptor && namePropDescriptor.configurable && Object.defineProperty(RunInRootFrame.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
        var _RunInRootFrame$Deter = RunInRootFrame.DetermineComponentFrameRoot(), sampleStack = _RunInRootFrame$Deter[0], controlStack = _RunInRootFrame$Deter[1];
        if (sampleStack && controlStack) {
          var sampleLines = sampleStack.split(`
`), controlLines = controlStack.split(`
`);
          for (_RunInRootFrame$Deter = namePropDescriptor = 0;namePropDescriptor < sampleLines.length && !sampleLines[namePropDescriptor].includes("DetermineComponentFrameRoot"); )
            namePropDescriptor++;
          for (;_RunInRootFrame$Deter < controlLines.length && !controlLines[_RunInRootFrame$Deter].includes("DetermineComponentFrameRoot"); )
            _RunInRootFrame$Deter++;
          if (namePropDescriptor === sampleLines.length || _RunInRootFrame$Deter === controlLines.length)
            for (namePropDescriptor = sampleLines.length - 1, _RunInRootFrame$Deter = controlLines.length - 1;1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter && sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter]; )
              _RunInRootFrame$Deter--;
          for (;1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter; namePropDescriptor--, _RunInRootFrame$Deter--)
            if (sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter]) {
              if (namePropDescriptor !== 1 || _RunInRootFrame$Deter !== 1) {
                do
                  if (namePropDescriptor--, _RunInRootFrame$Deter--, 0 > _RunInRootFrame$Deter || sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter]) {
                    var _frame = `
` + sampleLines[namePropDescriptor].replace(" at new ", " at ");
                    fn.displayName && _frame.includes("<anonymous>") && (_frame = _frame.replace("<anonymous>", fn.displayName));
                    typeof fn === "function" && componentFrameCache.set(fn, _frame);
                    return _frame;
                  }
                while (1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter);
              }
              break;
            }
        }
      } finally {
        reentry = false, ReactSharedInternals.H = previousDispatcher, reenableLogs(), Error.prepareStackTrace = frame;
      }
      sampleLines = (sampleLines = fn ? fn.displayName || fn.name : "") ? describeBuiltInComponentFrame(sampleLines) : "";
      typeof fn === "function" && componentFrameCache.set(fn, sampleLines);
      return sampleLines;
    }
    function describeUnknownElementTypeFrameInDEV(type) {
      if (type == null)
        return "";
      if (typeof type === "function") {
        var prototype = type.prototype;
        return describeNativeComponentFrame(type, !(!prototype || !prototype.isReactComponent));
      }
      if (typeof type === "string")
        return describeBuiltInComponentFrame(type);
      switch (type) {
        case REACT_SUSPENSE_TYPE:
          return describeBuiltInComponentFrame("Suspense");
        case REACT_SUSPENSE_LIST_TYPE:
          return describeBuiltInComponentFrame("SuspenseList");
      }
      if (typeof type === "object")
        switch (type.$$typeof) {
          case REACT_FORWARD_REF_TYPE:
            return type = describeNativeComponentFrame(type.render, false), type;
          case REACT_MEMO_TYPE:
            return describeUnknownElementTypeFrameInDEV(type.type);
          case REACT_LAZY_TYPE:
            prototype = type._payload;
            type = type._init;
            try {
              return describeUnknownElementTypeFrameInDEV(type(prototype));
            } catch (x) {}
        }
      return "";
    }
    function getOwner() {
      var dispatcher = ReactSharedInternals.A;
      return dispatcher === null ? null : dispatcher.getOwner();
    }
    function hasValidKey(config) {
      if (hasOwnProperty.call(config, "key")) {
        var getter = Object.getOwnPropertyDescriptor(config, "key").get;
        if (getter && getter.isReactWarning)
          return false;
      }
      return config.key !== undefined;
    }
    function defineKeyPropWarningGetter(props, displayName) {
      function warnAboutAccessingKey() {
        specialPropKeyWarningShown || (specialPropKeyWarningShown = true, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
      }
      warnAboutAccessingKey.isReactWarning = true;
      Object.defineProperty(props, "key", {
        get: warnAboutAccessingKey,
        configurable: true
      });
    }
    function elementRefGetterWithDeprecationWarning() {
      var componentName = getComponentNameFromType(this.type);
      didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = true, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
      componentName = this.props.ref;
      return componentName !== undefined ? componentName : null;
    }
    function ReactElement(type, key, self, source, owner, props) {
      self = props.ref;
      type = {
        $$typeof: REACT_ELEMENT_TYPE,
        type,
        key,
        props,
        _owner: owner
      };
      (self !== undefined ? self : null) !== null ? Object.defineProperty(type, "ref", {
        enumerable: false,
        get: elementRefGetterWithDeprecationWarning
      }) : Object.defineProperty(type, "ref", { enumerable: false, value: null });
      type._store = {};
      Object.defineProperty(type._store, "validated", {
        configurable: false,
        enumerable: false,
        writable: true,
        value: 0
      });
      Object.defineProperty(type, "_debugInfo", {
        configurable: false,
        enumerable: false,
        writable: true,
        value: null
      });
      Object.freeze && (Object.freeze(type.props), Object.freeze(type));
      return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self) {
      if (typeof type === "string" || typeof type === "function" || type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_OFFSCREEN_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_CONSUMER_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_CLIENT_REFERENCE$1 || type.getModuleId !== undefined)) {
        var children = config.children;
        if (children !== undefined)
          if (isStaticChildren)
            if (isArrayImpl(children)) {
              for (isStaticChildren = 0;isStaticChildren < children.length; isStaticChildren++)
                validateChildKeys(children[isStaticChildren], type);
              Object.freeze && Object.freeze(children);
            } else
              console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
          else
            validateChildKeys(children, type);
      } else {
        children = "";
        if (type === undefined || typeof type === "object" && type !== null && Object.keys(type).length === 0)
          children += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
        type === null ? isStaticChildren = "null" : isArrayImpl(type) ? isStaticChildren = "array" : type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE ? (isStaticChildren = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />", children = " Did you accidentally export a JSX literal instead of a component?") : isStaticChildren = typeof type;
        console.error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", isStaticChildren, children);
      }
      if (hasOwnProperty.call(config, "key")) {
        children = getComponentNameFromType(type);
        var keys = Object.keys(config).filter(function(k) {
          return k !== "key";
        });
        isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
        didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = true);
      }
      children = null;
      maybeKey !== undefined && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
      hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
      if ("key" in config) {
        maybeKey = {};
        for (var propName in config)
          propName !== "key" && (maybeKey[propName] = config[propName]);
      } else
        maybeKey = config;
      children && defineKeyPropWarningGetter(maybeKey, typeof type === "function" ? type.displayName || type.name || "Unknown" : type);
      return ReactElement(type, children, self, source, getOwner(), maybeKey);
    }
    function validateChildKeys(node, parentType) {
      if (typeof node === "object" && node && node.$$typeof !== REACT_CLIENT_REFERENCE) {
        if (isArrayImpl(node))
          for (var i = 0;i < node.length; i++) {
            var child = node[i];
            isValidElement(child) && validateExplicitKey(child, parentType);
          }
        else if (isValidElement(node))
          node._store && (node._store.validated = 1);
        else if (node === null || typeof node !== "object" ? i = null : (i = MAYBE_ITERATOR_SYMBOL && node[MAYBE_ITERATOR_SYMBOL] || node["@@iterator"], i = typeof i === "function" ? i : null), typeof i === "function" && i !== node.entries && (i = i.call(node), i !== node))
          for (;!(node = i.next()).done; )
            isValidElement(node.value) && validateExplicitKey(node.value, parentType);
      }
    }
    function isValidElement(object) {
      return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    function validateExplicitKey(element, parentType) {
      if (element._store && !element._store.validated && element.key == null && (element._store.validated = 1, parentType = getCurrentComponentErrorInfo(parentType), !ownerHasKeyUseWarning[parentType])) {
        ownerHasKeyUseWarning[parentType] = true;
        var childOwner = "";
        element && element._owner != null && element._owner !== getOwner() && (childOwner = null, typeof element._owner.tag === "number" ? childOwner = getComponentNameFromType(element._owner.type) : typeof element._owner.name === "string" && (childOwner = element._owner.name), childOwner = " It was passed a child from " + childOwner + ".");
        var prevGetCurrentStack = ReactSharedInternals.getCurrentStack;
        ReactSharedInternals.getCurrentStack = function() {
          var stack = describeUnknownElementTypeFrameInDEV(element.type);
          prevGetCurrentStack && (stack += prevGetCurrentStack() || "");
          return stack;
        };
        console.error('Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.', parentType, childOwner);
        ReactSharedInternals.getCurrentStack = prevGetCurrentStack;
      }
    }
    function getCurrentComponentErrorInfo(parentType) {
      var info = "", owner = getOwner();
      owner && (owner = getComponentNameFromType(owner.type)) && (info = `

Check the render method of \`` + owner + "`.");
      info || (parentType = getComponentNameFromType(parentType)) && (info = `

Check the top-level render call using <` + parentType + ">.");
      return info;
    }
    var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
    Symbol.for("react.provider");
    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen"), MAYBE_ITERATOR_SYMBOL = Symbol.iterator, REACT_CLIENT_REFERENCE$2 = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, assign = Object.assign, REACT_CLIENT_REFERENCE$1 = Symbol.for("react.client.reference"), isArrayImpl = Array.isArray, disabledDepth = 0, prevLog, prevInfo, prevWarn, prevError, prevGroup, prevGroupCollapsed, prevGroupEnd;
    disabledLog.__reactDisabledLog = true;
    var prefix, suffix, reentry = false;
    var componentFrameCache = new (typeof WeakMap === "function" ? WeakMap : Map);
    var REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var didWarnAboutKeySpread = {}, ownerHasKeyUseWarning = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren, source, self) {
      return jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self);
    };
  })();
});

// node_modules/react/jsx-dev-runtime.js
var require_jsx_dev_runtime = __commonJS((exports, module) => {
  var react_jsx_dev_runtime_development = __toESM(require_react_jsx_dev_runtime_development(), 1);
  if (false) {} else {
    module.exports = react_jsx_dev_runtime_development;
  }
});

// node_modules/react/cjs/react-jsx-runtime.development.js
var require_react_jsx_runtime_development = __commonJS((exports) => {
  var React = __toESM(require_react(), 1);
  (function() {
    function getComponentNameFromType(type) {
      if (type == null)
        return null;
      if (typeof type === "function")
        return type.$$typeof === REACT_CLIENT_REFERENCE$2 ? null : type.displayName || type.name || null;
      if (typeof type === "string")
        return type;
      switch (type) {
        case REACT_FRAGMENT_TYPE:
          return "Fragment";
        case REACT_PORTAL_TYPE:
          return "Portal";
        case REACT_PROFILER_TYPE:
          return "Profiler";
        case REACT_STRICT_MODE_TYPE:
          return "StrictMode";
        case REACT_SUSPENSE_TYPE:
          return "Suspense";
        case REACT_SUSPENSE_LIST_TYPE:
          return "SuspenseList";
      }
      if (typeof type === "object")
        switch (typeof type.tag === "number" && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof) {
          case REACT_CONTEXT_TYPE:
            return (type.displayName || "Context") + ".Provider";
          case REACT_CONSUMER_TYPE:
            return (type._context.displayName || "Context") + ".Consumer";
          case REACT_FORWARD_REF_TYPE:
            var innerType = type.render;
            type = type.displayName;
            type || (type = innerType.displayName || innerType.name || "", type = type !== "" ? "ForwardRef(" + type + ")" : "ForwardRef");
            return type;
          case REACT_MEMO_TYPE:
            return innerType = type.displayName || null, innerType !== null ? innerType : getComponentNameFromType(type.type) || "Memo";
          case REACT_LAZY_TYPE:
            innerType = type._payload;
            type = type._init;
            try {
              return getComponentNameFromType(type(innerType));
            } catch (x) {}
        }
      return null;
    }
    function testStringCoercion(value) {
      return "" + value;
    }
    function checkKeyStringCoercion(value) {
      try {
        testStringCoercion(value);
        var JSCompiler_inline_result = false;
      } catch (e) {
        JSCompiler_inline_result = true;
      }
      if (JSCompiler_inline_result) {
        JSCompiler_inline_result = console;
        var JSCompiler_temp_const = JSCompiler_inline_result.error;
        var JSCompiler_inline_result$jscomp$0 = typeof Symbol === "function" && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
        JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
        return testStringCoercion(value);
      }
    }
    function disabledLog() {}
    function disableLogs() {
      if (disabledDepth === 0) {
        prevLog = console.log;
        prevInfo = console.info;
        prevWarn = console.warn;
        prevError = console.error;
        prevGroup = console.group;
        prevGroupCollapsed = console.groupCollapsed;
        prevGroupEnd = console.groupEnd;
        var props = {
          configurable: true,
          enumerable: true,
          value: disabledLog,
          writable: true
        };
        Object.defineProperties(console, {
          info: props,
          log: props,
          warn: props,
          error: props,
          group: props,
          groupCollapsed: props,
          groupEnd: props
        });
      }
      disabledDepth++;
    }
    function reenableLogs() {
      disabledDepth--;
      if (disabledDepth === 0) {
        var props = { configurable: true, enumerable: true, writable: true };
        Object.defineProperties(console, {
          log: assign({}, props, { value: prevLog }),
          info: assign({}, props, { value: prevInfo }),
          warn: assign({}, props, { value: prevWarn }),
          error: assign({}, props, { value: prevError }),
          group: assign({}, props, { value: prevGroup }),
          groupCollapsed: assign({}, props, { value: prevGroupCollapsed }),
          groupEnd: assign({}, props, { value: prevGroupEnd })
        });
      }
      0 > disabledDepth && console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
    }
    function describeBuiltInComponentFrame(name) {
      if (prefix === undefined)
        try {
          throw Error();
        } catch (x) {
          var match = x.stack.trim().match(/\n( *(at )?)/);
          prefix = match && match[1] || "";
          suffix = -1 < x.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < x.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + prefix + name + suffix;
    }
    function describeNativeComponentFrame(fn, construct) {
      if (!fn || reentry)
        return "";
      var frame = componentFrameCache.get(fn);
      if (frame !== undefined)
        return frame;
      reentry = true;
      frame = Error.prepareStackTrace;
      Error.prepareStackTrace = undefined;
      var previousDispatcher = null;
      previousDispatcher = ReactSharedInternals.H;
      ReactSharedInternals.H = null;
      disableLogs();
      try {
        var RunInRootFrame = {
          DetermineComponentFrameRoot: function() {
            try {
              if (construct) {
                var Fake = function() {
                  throw Error();
                };
                Object.defineProperty(Fake.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                });
                if (typeof Reflect === "object" && Reflect.construct) {
                  try {
                    Reflect.construct(Fake, []);
                  } catch (x) {
                    var control = x;
                  }
                  Reflect.construct(fn, [], Fake);
                } else {
                  try {
                    Fake.call();
                  } catch (x$0) {
                    control = x$0;
                  }
                  fn.call(Fake.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (x$1) {
                  control = x$1;
                }
                (Fake = fn()) && typeof Fake.catch === "function" && Fake.catch(function() {});
              }
            } catch (sample) {
              if (sample && control && typeof sample.stack === "string")
                return [sample.stack, control.stack];
            }
            return [null, null];
          }
        };
        RunInRootFrame.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var namePropDescriptor = Object.getOwnPropertyDescriptor(RunInRootFrame.DetermineComponentFrameRoot, "name");
        namePropDescriptor && namePropDescriptor.configurable && Object.defineProperty(RunInRootFrame.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
        var _RunInRootFrame$Deter = RunInRootFrame.DetermineComponentFrameRoot(), sampleStack = _RunInRootFrame$Deter[0], controlStack = _RunInRootFrame$Deter[1];
        if (sampleStack && controlStack) {
          var sampleLines = sampleStack.split(`
`), controlLines = controlStack.split(`
`);
          for (_RunInRootFrame$Deter = namePropDescriptor = 0;namePropDescriptor < sampleLines.length && !sampleLines[namePropDescriptor].includes("DetermineComponentFrameRoot"); )
            namePropDescriptor++;
          for (;_RunInRootFrame$Deter < controlLines.length && !controlLines[_RunInRootFrame$Deter].includes("DetermineComponentFrameRoot"); )
            _RunInRootFrame$Deter++;
          if (namePropDescriptor === sampleLines.length || _RunInRootFrame$Deter === controlLines.length)
            for (namePropDescriptor = sampleLines.length - 1, _RunInRootFrame$Deter = controlLines.length - 1;1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter && sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter]; )
              _RunInRootFrame$Deter--;
          for (;1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter; namePropDescriptor--, _RunInRootFrame$Deter--)
            if (sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter]) {
              if (namePropDescriptor !== 1 || _RunInRootFrame$Deter !== 1) {
                do
                  if (namePropDescriptor--, _RunInRootFrame$Deter--, 0 > _RunInRootFrame$Deter || sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter]) {
                    var _frame = `
` + sampleLines[namePropDescriptor].replace(" at new ", " at ");
                    fn.displayName && _frame.includes("<anonymous>") && (_frame = _frame.replace("<anonymous>", fn.displayName));
                    typeof fn === "function" && componentFrameCache.set(fn, _frame);
                    return _frame;
                  }
                while (1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter);
              }
              break;
            }
        }
      } finally {
        reentry = false, ReactSharedInternals.H = previousDispatcher, reenableLogs(), Error.prepareStackTrace = frame;
      }
      sampleLines = (sampleLines = fn ? fn.displayName || fn.name : "") ? describeBuiltInComponentFrame(sampleLines) : "";
      typeof fn === "function" && componentFrameCache.set(fn, sampleLines);
      return sampleLines;
    }
    function describeUnknownElementTypeFrameInDEV(type) {
      if (type == null)
        return "";
      if (typeof type === "function") {
        var prototype = type.prototype;
        return describeNativeComponentFrame(type, !(!prototype || !prototype.isReactComponent));
      }
      if (typeof type === "string")
        return describeBuiltInComponentFrame(type);
      switch (type) {
        case REACT_SUSPENSE_TYPE:
          return describeBuiltInComponentFrame("Suspense");
        case REACT_SUSPENSE_LIST_TYPE:
          return describeBuiltInComponentFrame("SuspenseList");
      }
      if (typeof type === "object")
        switch (type.$$typeof) {
          case REACT_FORWARD_REF_TYPE:
            return type = describeNativeComponentFrame(type.render, false), type;
          case REACT_MEMO_TYPE:
            return describeUnknownElementTypeFrameInDEV(type.type);
          case REACT_LAZY_TYPE:
            prototype = type._payload;
            type = type._init;
            try {
              return describeUnknownElementTypeFrameInDEV(type(prototype));
            } catch (x) {}
        }
      return "";
    }
    function getOwner() {
      var dispatcher = ReactSharedInternals.A;
      return dispatcher === null ? null : dispatcher.getOwner();
    }
    function hasValidKey(config) {
      if (hasOwnProperty.call(config, "key")) {
        var getter = Object.getOwnPropertyDescriptor(config, "key").get;
        if (getter && getter.isReactWarning)
          return false;
      }
      return config.key !== undefined;
    }
    function defineKeyPropWarningGetter(props, displayName) {
      function warnAboutAccessingKey() {
        specialPropKeyWarningShown || (specialPropKeyWarningShown = true, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
      }
      warnAboutAccessingKey.isReactWarning = true;
      Object.defineProperty(props, "key", {
        get: warnAboutAccessingKey,
        configurable: true
      });
    }
    function elementRefGetterWithDeprecationWarning() {
      var componentName = getComponentNameFromType(this.type);
      didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = true, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
      componentName = this.props.ref;
      return componentName !== undefined ? componentName : null;
    }
    function ReactElement(type, key, self, source, owner, props) {
      self = props.ref;
      type = {
        $$typeof: REACT_ELEMENT_TYPE,
        type,
        key,
        props,
        _owner: owner
      };
      (self !== undefined ? self : null) !== null ? Object.defineProperty(type, "ref", {
        enumerable: false,
        get: elementRefGetterWithDeprecationWarning
      }) : Object.defineProperty(type, "ref", { enumerable: false, value: null });
      type._store = {};
      Object.defineProperty(type._store, "validated", {
        configurable: false,
        enumerable: false,
        writable: true,
        value: 0
      });
      Object.defineProperty(type, "_debugInfo", {
        configurable: false,
        enumerable: false,
        writable: true,
        value: null
      });
      Object.freeze && (Object.freeze(type.props), Object.freeze(type));
      return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self) {
      if (typeof type === "string" || typeof type === "function" || type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_OFFSCREEN_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_CONSUMER_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_CLIENT_REFERENCE$1 || type.getModuleId !== undefined)) {
        var children = config.children;
        if (children !== undefined)
          if (isStaticChildren)
            if (isArrayImpl(children)) {
              for (isStaticChildren = 0;isStaticChildren < children.length; isStaticChildren++)
                validateChildKeys(children[isStaticChildren], type);
              Object.freeze && Object.freeze(children);
            } else
              console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
          else
            validateChildKeys(children, type);
      } else {
        children = "";
        if (type === undefined || typeof type === "object" && type !== null && Object.keys(type).length === 0)
          children += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
        type === null ? isStaticChildren = "null" : isArrayImpl(type) ? isStaticChildren = "array" : type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE ? (isStaticChildren = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />", children = " Did you accidentally export a JSX literal instead of a component?") : isStaticChildren = typeof type;
        console.error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", isStaticChildren, children);
      }
      if (hasOwnProperty.call(config, "key")) {
        children = getComponentNameFromType(type);
        var keys = Object.keys(config).filter(function(k) {
          return k !== "key";
        });
        isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
        didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = true);
      }
      children = null;
      maybeKey !== undefined && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
      hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
      if ("key" in config) {
        maybeKey = {};
        for (var propName in config)
          propName !== "key" && (maybeKey[propName] = config[propName]);
      } else
        maybeKey = config;
      children && defineKeyPropWarningGetter(maybeKey, typeof type === "function" ? type.displayName || type.name || "Unknown" : type);
      return ReactElement(type, children, self, source, getOwner(), maybeKey);
    }
    function validateChildKeys(node, parentType) {
      if (typeof node === "object" && node && node.$$typeof !== REACT_CLIENT_REFERENCE) {
        if (isArrayImpl(node))
          for (var i = 0;i < node.length; i++) {
            var child = node[i];
            isValidElement(child) && validateExplicitKey(child, parentType);
          }
        else if (isValidElement(node))
          node._store && (node._store.validated = 1);
        else if (node === null || typeof node !== "object" ? i = null : (i = MAYBE_ITERATOR_SYMBOL && node[MAYBE_ITERATOR_SYMBOL] || node["@@iterator"], i = typeof i === "function" ? i : null), typeof i === "function" && i !== node.entries && (i = i.call(node), i !== node))
          for (;!(node = i.next()).done; )
            isValidElement(node.value) && validateExplicitKey(node.value, parentType);
      }
    }
    function isValidElement(object) {
      return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    function validateExplicitKey(element, parentType) {
      if (element._store && !element._store.validated && element.key == null && (element._store.validated = 1, parentType = getCurrentComponentErrorInfo(parentType), !ownerHasKeyUseWarning[parentType])) {
        ownerHasKeyUseWarning[parentType] = true;
        var childOwner = "";
        element && element._owner != null && element._owner !== getOwner() && (childOwner = null, typeof element._owner.tag === "number" ? childOwner = getComponentNameFromType(element._owner.type) : typeof element._owner.name === "string" && (childOwner = element._owner.name), childOwner = " It was passed a child from " + childOwner + ".");
        var prevGetCurrentStack = ReactSharedInternals.getCurrentStack;
        ReactSharedInternals.getCurrentStack = function() {
          var stack = describeUnknownElementTypeFrameInDEV(element.type);
          prevGetCurrentStack && (stack += prevGetCurrentStack() || "");
          return stack;
        };
        console.error('Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.', parentType, childOwner);
        ReactSharedInternals.getCurrentStack = prevGetCurrentStack;
      }
    }
    function getCurrentComponentErrorInfo(parentType) {
      var info = "", owner = getOwner();
      owner && (owner = getComponentNameFromType(owner.type)) && (info = `

Check the render method of \`` + owner + "`.");
      info || (parentType = getComponentNameFromType(parentType)) && (info = `

Check the top-level render call using <` + parentType + ">.");
      return info;
    }
    var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
    Symbol.for("react.provider");
    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen"), MAYBE_ITERATOR_SYMBOL = Symbol.iterator, REACT_CLIENT_REFERENCE$2 = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, assign = Object.assign, REACT_CLIENT_REFERENCE$1 = Symbol.for("react.client.reference"), isArrayImpl = Array.isArray, disabledDepth = 0, prevLog, prevInfo, prevWarn, prevError, prevGroup, prevGroupCollapsed, prevGroupEnd;
    disabledLog.__reactDisabledLog = true;
    var prefix, suffix, reentry = false;
    var componentFrameCache = new (typeof WeakMap === "function" ? WeakMap : Map);
    var REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var didWarnAboutKeySpread = {}, ownerHasKeyUseWarning = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsx = function(type, config, maybeKey, source, self) {
      return jsxDEVImpl(type, config, maybeKey, false, source, self);
    };
    exports.jsxs = function(type, config, maybeKey, source, self) {
      return jsxDEVImpl(type, config, maybeKey, true, source, self);
    };
  })();
});

// node_modules/react/jsx-runtime.js
var require_jsx_runtime = __commonJS((exports, module) => {
  var react_jsx_runtime_development = __toESM(require_react_jsx_runtime_development(), 1);
  if (false) {} else {
    module.exports = react_jsx_runtime_development;
  }
});

// node_modules/react-dom/cjs/react-dom.development.js
var require_react_dom_development = __commonJS((exports) => {
  var React2 = __toESM(require_react(), 1);
  (function() {
    function noop() {}
    function testStringCoercion(value) {
      return "" + value;
    }
    function createPortal$1(children, containerInfo, implementation) {
      var key = 3 < arguments.length && arguments[3] !== undefined ? arguments[3] : null;
      try {
        testStringCoercion(key);
        var JSCompiler_inline_result = false;
      } catch (e) {
        JSCompiler_inline_result = true;
      }
      JSCompiler_inline_result && (console.error("The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", typeof Symbol === "function" && Symbol.toStringTag && key[Symbol.toStringTag] || key.constructor.name || "Object"), testStringCoercion(key));
      return {
        $$typeof: REACT_PORTAL_TYPE,
        key: key == null ? null : "" + key,
        children,
        containerInfo,
        implementation
      };
    }
    function getCrossOriginStringAs(as, input) {
      if (as === "font")
        return "";
      if (typeof input === "string")
        return input === "use-credentials" ? input : "";
    }
    function getValueDescriptorExpectingObjectForWarning(thing) {
      return thing === null ? "`null`" : thing === undefined ? "`undefined`" : thing === "" ? "an empty string" : 'something with type "' + typeof thing + '"';
    }
    function getValueDescriptorExpectingEnumForWarning(thing) {
      return thing === null ? "`null`" : thing === undefined ? "`undefined`" : thing === "" ? "an empty string" : typeof thing === "string" ? JSON.stringify(thing) : typeof thing === "number" ? "`" + thing + "`" : 'something with type "' + typeof thing + '"';
    }
    function resolveDispatcher() {
      var dispatcher = ReactSharedInternals.H;
      dispatcher === null && console.error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`);
      return dispatcher;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var Internals = {
      d: {
        f: noop,
        r: function() {
          throw Error("Invalid form element. requestFormReset must be passed a form that was rendered by React.");
        },
        D: noop,
        C: noop,
        L: noop,
        m: noop,
        X: noop,
        S: noop,
        M: noop
      },
      p: 0,
      findDOMNode: null
    }, REACT_PORTAL_TYPE = Symbol.for("react.portal"), ReactSharedInternals = React2.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    typeof Map === "function" && Map.prototype != null && typeof Map.prototype.forEach === "function" && typeof Set === "function" && Set.prototype != null && typeof Set.prototype.clear === "function" && typeof Set.prototype.forEach === "function" || console.error("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
    exports.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Internals;
    exports.createPortal = function(children, container) {
      var key = 2 < arguments.length && arguments[2] !== undefined ? arguments[2] : null;
      if (!container || container.nodeType !== 1 && container.nodeType !== 9 && container.nodeType !== 11)
        throw Error("Target container is not a DOM element.");
      return createPortal$1(children, container, null, key);
    };
    exports.flushSync = function(fn) {
      var previousTransition = ReactSharedInternals.T, previousUpdatePriority = Internals.p;
      try {
        if (ReactSharedInternals.T = null, Internals.p = 2, fn)
          return fn();
      } finally {
        ReactSharedInternals.T = previousTransition, Internals.p = previousUpdatePriority, Internals.d.f() && console.error("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task.");
      }
    };
    exports.preconnect = function(href, options) {
      typeof href === "string" && href ? options != null && typeof options !== "object" ? console.error("ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.", getValueDescriptorExpectingEnumForWarning(options)) : options != null && typeof options.crossOrigin !== "string" && console.error("ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.", getValueDescriptorExpectingObjectForWarning(options.crossOrigin)) : console.error("ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.", getValueDescriptorExpectingObjectForWarning(href));
      typeof href === "string" && (options ? (options = options.crossOrigin, options = typeof options === "string" ? options === "use-credentials" ? options : "" : undefined) : options = null, Internals.d.C(href, options));
    };
    exports.prefetchDNS = function(href) {
      if (typeof href !== "string" || !href)
        console.error("ReactDOM.prefetchDNS(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.", getValueDescriptorExpectingObjectForWarning(href));
      else if (1 < arguments.length) {
        var options = arguments[1];
        typeof options === "object" && options.hasOwnProperty("crossOrigin") ? console.error("ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. It looks like the you are attempting to set a crossOrigin property for this DNS lookup hint. Browsers do not perform DNS queries using CORS and setting this attribute on the resource hint has no effect. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.", getValueDescriptorExpectingEnumForWarning(options)) : console.error("ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.", getValueDescriptorExpectingEnumForWarning(options));
      }
      typeof href === "string" && Internals.d.D(href);
    };
    exports.preinit = function(href, options) {
      typeof href === "string" && href ? options == null || typeof options !== "object" ? console.error("ReactDOM.preinit(): Expected the `options` argument (second) to be an object with an `as` property describing the type of resource to be preinitialized but encountered %s instead.", getValueDescriptorExpectingEnumForWarning(options)) : options.as !== "style" && options.as !== "script" && console.error('ReactDOM.preinit(): Expected the `as` property in the `options` argument (second) to contain a valid value describing the type of resource to be preinitialized but encountered %s instead. Valid values for `as` are "style" and "script".', getValueDescriptorExpectingEnumForWarning(options.as)) : console.error("ReactDOM.preinit(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.", getValueDescriptorExpectingObjectForWarning(href));
      if (typeof href === "string" && options && typeof options.as === "string") {
        var as = options.as, crossOrigin = getCrossOriginStringAs(as, options.crossOrigin), integrity = typeof options.integrity === "string" ? options.integrity : undefined, fetchPriority = typeof options.fetchPriority === "string" ? options.fetchPriority : undefined;
        as === "style" ? Internals.d.S(href, typeof options.precedence === "string" ? options.precedence : undefined, {
          crossOrigin,
          integrity,
          fetchPriority
        }) : as === "script" && Internals.d.X(href, {
          crossOrigin,
          integrity,
          fetchPriority,
          nonce: typeof options.nonce === "string" ? options.nonce : undefined
        });
      }
    };
    exports.preinitModule = function(href, options) {
      var encountered = "";
      typeof href === "string" && href || (encountered += " The `href` argument encountered was " + getValueDescriptorExpectingObjectForWarning(href) + ".");
      options !== undefined && typeof options !== "object" ? encountered += " The `options` argument encountered was " + getValueDescriptorExpectingObjectForWarning(options) + "." : options && ("as" in options) && options.as !== "script" && (encountered += " The `as` option encountered was " + getValueDescriptorExpectingEnumForWarning(options.as) + ".");
      if (encountered)
        console.error("ReactDOM.preinitModule(): Expected up to two arguments, a non-empty `href` string and, optionally, an `options` object with a valid `as` property.%s", encountered);
      else
        switch (encountered = options && typeof options.as === "string" ? options.as : "script", encountered) {
          case "script":
            break;
          default:
            encountered = getValueDescriptorExpectingEnumForWarning(encountered), console.error('ReactDOM.preinitModule(): Currently the only supported "as" type for this function is "script" but received "%s" instead. This warning was generated for `href` "%s". In the future other module types will be supported, aligning with the import-attributes proposal. Learn more here: (https://github.com/tc39/proposal-import-attributes)', encountered, href);
        }
      if (typeof href === "string")
        if (typeof options === "object" && options !== null) {
          if (options.as == null || options.as === "script")
            encountered = getCrossOriginStringAs(options.as, options.crossOrigin), Internals.d.M(href, {
              crossOrigin: encountered,
              integrity: typeof options.integrity === "string" ? options.integrity : undefined,
              nonce: typeof options.nonce === "string" ? options.nonce : undefined
            });
        } else
          options == null && Internals.d.M(href);
    };
    exports.preload = function(href, options) {
      var encountered = "";
      typeof href === "string" && href || (encountered += " The `href` argument encountered was " + getValueDescriptorExpectingObjectForWarning(href) + ".");
      options == null || typeof options !== "object" ? encountered += " The `options` argument encountered was " + getValueDescriptorExpectingObjectForWarning(options) + "." : typeof options.as === "string" && options.as || (encountered += " The `as` option encountered was " + getValueDescriptorExpectingObjectForWarning(options.as) + ".");
      encountered && console.error('ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel="preload" as="..." />` tag.%s', encountered);
      if (typeof href === "string" && typeof options === "object" && options !== null && typeof options.as === "string") {
        encountered = options.as;
        var crossOrigin = getCrossOriginStringAs(encountered, options.crossOrigin);
        Internals.d.L(href, encountered, {
          crossOrigin,
          integrity: typeof options.integrity === "string" ? options.integrity : undefined,
          nonce: typeof options.nonce === "string" ? options.nonce : undefined,
          type: typeof options.type === "string" ? options.type : undefined,
          fetchPriority: typeof options.fetchPriority === "string" ? options.fetchPriority : undefined,
          referrerPolicy: typeof options.referrerPolicy === "string" ? options.referrerPolicy : undefined,
          imageSrcSet: typeof options.imageSrcSet === "string" ? options.imageSrcSet : undefined,
          imageSizes: typeof options.imageSizes === "string" ? options.imageSizes : undefined,
          media: typeof options.media === "string" ? options.media : undefined
        });
      }
    };
    exports.preloadModule = function(href, options) {
      var encountered = "";
      typeof href === "string" && href || (encountered += " The `href` argument encountered was " + getValueDescriptorExpectingObjectForWarning(href) + ".");
      options !== undefined && typeof options !== "object" ? encountered += " The `options` argument encountered was " + getValueDescriptorExpectingObjectForWarning(options) + "." : options && ("as" in options) && typeof options.as !== "string" && (encountered += " The `as` option encountered was " + getValueDescriptorExpectingObjectForWarning(options.as) + ".");
      encountered && console.error('ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel="modulepreload" as="..." />` tag.%s', encountered);
      typeof href === "string" && (options ? (encountered = getCrossOriginStringAs(options.as, options.crossOrigin), Internals.d.m(href, {
        as: typeof options.as === "string" && options.as !== "script" ? options.as : undefined,
        crossOrigin: encountered,
        integrity: typeof options.integrity === "string" ? options.integrity : undefined
      })) : Internals.d.m(href));
    };
    exports.requestFormReset = function(form) {
      Internals.d.r(form);
    };
    exports.unstable_batchedUpdates = function(fn, a) {
      return fn(a);
    };
    exports.useFormState = function(action, initialState, permalink) {
      return resolveDispatcher().useFormState(action, initialState, permalink);
    };
    exports.useFormStatus = function() {
      return resolveDispatcher().useHostTransitionStatus();
    };
    exports.version = "19.0.0";
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })();
});

// node_modules/react-dom/index.js
var require_react_dom = __commonJS((exports, module) => {
  var react_dom_development = __toESM(require_react_dom_development(), 1);
  if (false) {} else {
    module.exports = react_dom_development;
  }
});

// module:/home/shpaw415/Documents/bun_module/mui-tailwind/node_modules/@bunpmjs/bunext/internal/globals.ts
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
globalThis.React = import_react.default;
globalThis.jsx_w77yafs4 = import_jsx_runtime.jsx;
globalThis.jsx = import_jsx_runtime.jsx;
globalThis.jsxDEV_7x81h0kn = import_jsx_dev_runtime.jsxDEV;
globalThis.jsxDEV = import_jsx_dev_runtime.jsxDEV;
globalThis.jsxs_eh6c78nj = import_jsx_runtime.jsxs;
globalThis.jsxs = import_jsx_runtime.jsxs;
globalThis.Fragment_8vg9x3sq = import_jsx_dev_runtime.Fragment;
globalThis.Fragment = import_jsx_dev_runtime.Fragment;
globalThis.ServerActionCallbacks ??= [];
function AddServerActionCallback(callback, id) {
  if (globalThis.ServerActionCallbacks.find((e) => e.id == id)) {
    globalThis.ServerActionCallbacks.splice(globalThis.ServerActionCallbacks.findIndex((e) => e.id == id), 1);
  }
  ServerActionCallbacks.push({ callback, id });
}
function InitServerActionData(...props) {
  let currentPropsIndex = 0;
  const formatToFile = () => {
    currentPropsIndex++;
    return `BUNEXT_FILE_${currentPropsIndex}`;
  };
  const formatToBatchedFile = () => {
    return `BUNEXT_BATCH_FILES_${currentPropsIndex}`;
  };
  let formData = new FormData;
  let _props = props.map((prop) => {
    if (prop instanceof File) {
      const id = formatToFile();
      formData.append(id, prop);
      return id;
    } else if (Array.isArray(prop) && prop.length > 0) {
      currentPropsIndex++;
      const id = formatToBatchedFile();
      return prop.map((p) => {
        if (p instanceof File) {
          formData.append(id, p);
          return id;
        } else
          return p;
      });
    } else if (prop instanceof FormData) {
      if (props.length > 1)
        throw new Error("only one prop is permitted with a FormData in a ServerAction");
      formData = prop;
      return "BUNEXT_FORMDATA";
    } else
      return prop;
  });
  formData.append("props", encodeURI(JSON.stringify(_props)));
  return formData;
}
async function MakeServerActionRequest(props, serverActionID) {
  const res = await fetch("/ServerActionGetter", {
    headers: {
      serverActionID
    },
    method: "POST",
    body: InitServerActionData(...props)
  });
  for (const el of globalThis.ServerActionCallbacks)
    el.callback(res.clone());
  return await ParseServerActionResponse(res);
}
async function ParseServerActionResponse(response2) {
  if (!response2.ok)
    throw new Error("error when Calling server action <!ModulePath!>:<!FuncName!>");
  globalThis.__PUBLIC_SESSION_DATA__ = GetSessionFromResponse(response2);
  switch (response2.headers.get("dataType")) {
    case "json":
      return (await response2.json()).props;
    case "blob":
      return await response2.blob();
    case "file":
      const blob = await response2.blob();
      const { name, lastModified } = JSON.parse(response2.headers.get("fileData") || "");
      return new File([blob], name, {
        type: blob.type,
        lastModified
      });
  }
}
function GetSessionFromResponse(response2) {
  return JSON.parse(decodeURI(response2.headers.get("session") || ""));
}
globalThis.MakeServerActionRequest ??= MakeServerActionRequest;
// module:/home/shpaw415/Documents/bun_module/mui-tailwind/node_modules/@bunpmjs/bunext/internal/router/utils/get-route-matcher.ts
"use client";
function getRouteMatcher(routes) {
  const processed = Object.entries(routes).map(([path, value]) => ({
    path,
    matcher: getRouteMatcherFunc(getRouteRegex(path)),
    value
  }));
  return (incoming) => {
    for (const { path, matcher, value } of processed) {
      const params = matcher(incoming);
      if (params) {
        return { path, value, params };
      }
    }
    return null;
  };
}
function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, "\\$&");
}
function parseParameter(param) {
  const optional = param.startsWith("[") && param.endsWith("]");
  if (optional) {
    param = param.slice(1, -1);
  }
  const repeat = param.startsWith("...");
  if (repeat) {
    param = param.slice(3);
  }
  return { key: param, repeat, optional };
}
function getParametrizedRoute(route) {
  const segments = (route.replace(/\/$/, "") || "/").slice(1).split("/");
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map((segment) => {
    if (segment.startsWith("[") && segment.endsWith("]")) {
      const { key, optional, repeat } = parseParameter(segment.slice(1, -1));
      groups[key] = { pos: groupIndex++, repeat, optional };
      return repeat ? optional ? "(?:/(.+?))?" : "/(.+?)" : "/([^/]+?)";
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join("");
  if (typeof window === "undefined") {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1;
    const getSafeRouteKey = () => {
      let routeKey = "";
      for (let i = 0;i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;
        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }
      return routeKey;
    };
    const routeKeys = {};
    let namedParameterizedRoute = segments.map((segment) => {
      if (segment.startsWith("[") && segment.endsWith("]")) {
        const { key, optional, repeat } = parseParameter(segment.slice(1, -1));
        let cleanedKey = key.replace(/\W/g, "");
        let invalidKey = false;
        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }
        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }
        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }
        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join("");
    return {
      parameterizedRoute,
      namedParameterizedRoute,
      groups,
      routeKeys
    };
  }
  return {
    parameterizedRoute,
    groups
  };
}
function getRouteRegex(normalizedRoute) {
  const result = getParametrizedRoute(normalizedRoute);
  if ("routeKeys" in result) {
    return {
      re: new RegExp(`^${result.parameterizedRoute}(?:/)?$`),
      groups: result.groups,
      routeKeys: result.routeKeys,
      namedRegex: `^${result.namedParameterizedRoute}(?:/)?$`
    };
  }
  return {
    re: new RegExp(`^${result.parameterizedRoute}(?:/)?$`),
    groups: result.groups
  };
}
function getRouteMatcherFunc(routeRegex) {
  const { re, groups } = routeRegex;
  return (pathname2) => {
    const routeMatch = re.exec(pathname2);
    if (!routeMatch) {
      return false;
    }
    const decode = (param) => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        throw new Error("failed to decode param");
      }
    };
    const params = {};
    Object.keys(groups).forEach((slugName) => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];
      if (m !== undefined) {
        params[slugName] = ~m.indexOf("/") ? m.split("/").map((entry) => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}
// module:/home/shpaw415/Documents/bun_module/mui-tailwind/node_modules/@bunpmjs/bunext/internal/router/index.tsx
var import_react4 = __toESM(require_react(), 1);
var import_react_dom = __toESM(require_react_dom(), 1);

// module:/home/shpaw415/Documents/bun_module/mui-tailwind/node_modules/@bunpmjs/bunext/features/utils.ts
"use client";
function generateRandomString(length) {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0;i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
function normalize(path) {
  path = path.replace(/\/+/g, "/");
  if (path.startsWith("/"))
    path = path.substring(1);
  if (path.endsWith("/"))
    path = path.slice(0, -1);
  let segments = path.split("/");
  let normalizedPath = "/";
  for (let segmentIndex = 0;segmentIndex < segments.length; segmentIndex++) {
    if (segments[segmentIndex] === "." || segments[segmentIndex] === "") {
      continue;
    }
    if (segments[segmentIndex] === "..") {
      normalizedPath = normalizedPath.substring(0, normalizedPath.lastIndexOf("/") + 1);
      continue;
    }
    if (!normalizedPath.endsWith("/"))
      normalizedPath = normalizedPath + "/";
    normalizedPath = normalizedPath + segments[segmentIndex];
  }
  return normalizedPath;
}
// module:/home/shpaw415/Documents/bun_module/mui-tailwind/node_modules/@bunpmjs/bunext/features/session.ts
var import_react3 = __toESM(require_react(), 1);

// module:/home/shpaw415/Documents/bun_module/mui-tailwind/node_modules/@bunpmjs/bunext/internal/context.ts
var import_react2 = __toESM(require_react(), 1);
var RequestContext = import_react2.createContext(undefined);
// module:/home/shpaw415/Documents/bun_module/mui-tailwind/node_modules/@bunpmjs/bunext/features/session.ts
"use client";

class _Session {
  __DATA__ = {
    public: {},
    private: {}
  };
  __DELETE__ = false;
  isUpdated = false;
  sessionTimeoutFromNow = 3600;
  request;
  update_function;
  updated_id = generateRandomString(5);
  constructor({
    data,
    sessionTimeout,
    request,
    update_function
  }) {
    if (data)
      this.__DATA__ = data;
    if (sessionTimeout)
      this.sessionTimeoutFromNow = sessionTimeout;
    if (request)
      this.request = request;
    if (update_function)
      this.update_function = update_function;
  }
  getSessionTimeout() {
    return globalThis.__SESSION_TIMEOUT__;
  }
  setSessionTimeout(value) {
    globalThis.__SESSION_TIMEOUT__ = value;
  }
  setPublicData(data) {
    this.__DATA__.public = {
      ...this.__DATA__.public,
      ...data,
      __SESSION_TIMEOUT__: this.getSessionTimeout()
    };
  }
  setPrivateData(data) {
    this.__DATA__.private = {
      ...this.__DATA__.private,
      __BUNEXT_SESSION_CREATED_AT__: this.makeCreatedTime(),
      ...data
    };
    this.isUpdated = true;
  }
  setData(data, Public = false) {
    this.PublicThrow("Session.setData cannot be called in a client context");
    if (!this.request)
      throw new Error("no request found to set session");
    this.isUpdated = true;
    if (Public) {
      this.setPrivateData(data);
      this.setPublicData(data);
    } else {
      this.setPrivateData(data);
    }
  }
  reset() {
    this.PublicThrow("Session.reset cannot be called in a client context");
    this.__DATA__ = {
      public: {},
      private: {}
    };
    return this;
  }
  async initData() {
    if (!this.request)
      return;
    switch (globalThis.serverConfig.session?.type) {
      case "cookie":
        const sessionData = this.request.webtoken.session();
        if (sessionData)
          this.__DATA__ = sessionData;
        break;
      case "database:memory":
      case "database:hard":
        const RecData = await GetSessionByID2(this.request.SessionID);
        if (RecData)
          this.__DATA__ = RecData;
        break;
    }
  }
  getData(getPublic = false) {
    if (typeof window != "undefined") {
      if (this.isExpired())
        return;
      else
        return this.__DATA__.public;
    }
    if (!this.SessionExists()) {
      return;
    }
    if (this.isExpired()) {
      this.delete();
      return;
    }
    return getPublic ? this.__DATA__.public : this.__DATA__.private;
  }
  delete() {
    if (this.isClient()) {
      fetch("/bunextDeleteSession").then(() => {
        this.__DATA__.public = {};
        globalThis.__PUBLIC_SESSION_DATA__ = {};
        this.update();
      });
    } else {
      this.__DELETE__ = true;
      this.__DATA__ = {
        public: {},
        private: {}
      };
    }
  }
  update() {
    this.__DATA__.public = globalThis.__PUBLIC_SESSION_DATA__;
    this.update_function?.((c) => !c);
  }
  PublicThrow(error) {
    if (typeof window != "undefined")
      throw new Error(error);
  }
  isClient() {
    return typeof window != "undefined";
  }
  SessionExists() {
    return typeof this.__DATA__.private.__BUNEXT_SESSION_CREATED_AT__ != "undefined";
  }
  isExpired() {
    if (typeof window != "undefined") {
      if (globalThis.__SESSION_TIMEOUT__ - new Date().getTime() > 0)
        return false;
      else
        return true;
    }
    const createdAt = this.__DATA__.private.__BUNEXT_SESSION_CREATED_AT__;
    if (!createdAt)
      return true;
    return this.makeCreatedTime() > createdAt + this.sessionTimeoutFromNow * 1000;
  }
  makeCreatedTime() {
    return new Date().getTime();
  }
}
var SessionContext = import_react3.createContext(new _Session({}));
var SessionDidUpdateContext = import_react3.createContext(false);
// module:/home/shpaw415/Documents/bun_module/mui-tailwind/node_modules/@bunpmjs/bunext/internal/router/index.tsx
var jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
"use client";
var globalX = globalThis;
var match = globalX.__ROUTES__ ? getRouteMatcher(globalX.__ROUTES__) : () => null;
async function fetchServerSideProps(pathname) {
  const response = await fetch(pathname, {
    headers: {
      Accept: "application/vnd.server-side-props",
      "Cache-Control": "no-cache"
    }
  });
  if (response.ok) {
    const text = await response.text() || "undefined";
    return eval(`(${text})`);
  }
  throw new Error("Failed to fetch");
}
var VersionContext = import_react4.createContext(0);
var useLoadingVersion = () => import_react4.useContext(VersionContext);
var useLoadingEffect = (effect, deps = []) => {
  import_react4.useEffect(effect, [import_react4.useContext(VersionContext), ...deps]);
};
var useReloadEffect = (effect, deps = []) => {
  const [once, setOnce] = import_react4.useState(true);
  import_react4.useEffect(() => {
    if (once) {
      setOnce(false);
      return;
    }
    return effect();
  }, [import_react4.useContext(VersionContext), ...deps]);
};
var ReloadContext = import_react4.createContext(async () => {});
function useReload() {
  const reload = import_react4.useContext(ReloadContext);
  return reload;
}
function useRouteState(key, initial) {
  return import_react4.useReducer((_old, newvalue) => {
    const routeState = history.state ?? {};
    if (routeState[key] !== newvalue)
      history.replaceState({ ...routeState, [key]: newvalue }, "");
    return newvalue;
  }, globalThis.history?.state?.[key] ?? initial);
}
var RouterHost = ({
  children,
  normalizeUrl = (url) => url,
  Shell,
  onRouteUpdated
}) => {
  const pathname2 = useLocationProperty(() => normalizeUrl(location.pathname + location.search), () => globalX.__INITIAL_ROUTE__);
  const [current, setCurrent] = import_react4.useState(children);
  const [version, setVersion] = import_react4.useState(0);
  const versionRef = import_react4.useRef(version);
  const reload = import_react4.useCallback(async (target = location.pathname + location.search) => {
    if (typeof target !== "string")
      throw new Error("invalid target", target);
    const currentVersion = ++versionRef.current;
    try {
      const matched = match(target.split("?").at(0));
      if (!matched)
        throw new Error("no match found");
      const [props, module] = await Promise.all([
        fetchServerSideProps(target),
        import(`${matched.value}${`?${currentVersion}`}`)
      ]);
      const JsxToDisplay = await NextJsLayoutStacker({
        page: await module.default({
          props,
          params: matched.params
        }),
        currentVersion,
        match: matched
      });
      if (currentVersion === versionRef.current) {
        if (props?.redirect) {
          navigate(props.redirect);
        } else {
          import_react4.startTransition(() => {
            onRouteUpdated?.(target);
            setVersion(currentVersion);
            setCurrent(/* @__PURE__ */ jsx_dev_runtime.jsxDEV(Shell, {
              route: target,
              ...props,
              children: JsxToDisplay
            }, undefined, false, undefined, this));
          });
        }
      }
    } catch (e) {
      console.log(e);
    }
  }, []);
  import_react4.useEffect(() => {
    if (pathname2 === globalX.__INITIAL_ROUTE__) {
      onRouteUpdated?.(pathname2);
      delete globalX.__INITIAL_ROUTE__;
    } else {
      reload(pathname2).catch((e) => {
        console.log(e);
        location.href = pathname2;
      });
    }
  }, [pathname2]);
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ReloadContext.Provider, {
    value: reload,
    children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(VersionContext.Provider, {
      value: version,
      children: current
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
};
function SessionProvider({ children }) {
  const [updater, setUpdater] = import_react4.useState(false);
  const session = import_react4.useMemo(() => new _Session({ update_function: setUpdater }), []);
  const [sessionTimer, setSessionTimer] = import_react4.useState();
  const timerSetter = import_react4.useCallback(() => {
    setSessionTimer((c) => {
      clearTimeout(c);
      return setTimeout(() => {
        session.__DATA__.public = {};
        session.setSessionTimeout(0);
        session.update();
      }, session.getSessionTimeout() - new Date().getTime());
    });
  }, []);
  const addToServerActionCallback = import_react4.useCallback(() => AddServerActionCallback((res) => {
    session.update();
    session.setSessionTimeout(JSON.parse(res.headers.get("__bunext_session_timeout__")));
    timerSetter();
  }, "update_session_callback"), []);
  import_react4.useEffect(() => {
    addToServerActionCallback();
    const sessionDataTimer = setInterval(() => {
      if (globalThis.__PUBLIC_SESSION_DATA__) {
        if (session.getSessionTimeout() > 0)
          timerSetter();
        session.__DATA__.public = globalThis.__PUBLIC_SESSION_DATA__;
        clearInterval(sessionDataTimer);
        session.update();
      }
    }, 1000);
  }, []);
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(SessionContext.Provider, {
    value: session,
    children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(SessionDidUpdateContext.Provider, {
      value: updater,
      children
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}
async function NextJsLayoutStacker({
  page,
  currentVersion,
  match: match2
}) {
  let currentPath = "/";
  let layoutStack = [];
  const formatedPath = match2.path == "/" ? [""] : match2.path.split("/");
  for await (const p of formatedPath) {
    currentPath += p.length > 0 ? p : "";
    if (globalX.__LAYOUT_ROUTE__.includes(currentPath)) {
      layoutStack.push((await import(normalize2(`/${globalX.__PAGES_DIR__}${currentPath}/layout.js${"?" + currentVersion}`))).default);
    }
    if (p.length > 0)
      currentPath += "/";
  }
  layoutStack = layoutStack.reverse();
  let currentJsx = page;
  for await (const Layout of layoutStack) {
    currentJsx = await Layout({
      children: currentJsx,
      params: match2.params
    });
  }
  return currentJsx;
}
function normalize2(path) {
  path = path.replace(/\/+/g, "/");
  if (path.startsWith("/"))
    path = path.substring(1);
  if (path.endsWith("/"))
    path = path.slice(0, -1);
  let segments = path.split("/");
  let normalizedPath = "/";
  for (let segmentIndex = 0;segmentIndex < segments.length; segmentIndex++) {
    if (segments[segmentIndex] === "." || segments[segmentIndex] === "") {
      continue;
    }
    if (segments[segmentIndex] === "..") {
      normalizedPath = normalizedPath.substring(0, normalizedPath.lastIndexOf("/") + 1);
      continue;
    }
    if (!normalizedPath.endsWith("/"))
      normalizedPath = normalizedPath + "/";
    normalizedPath = normalizedPath + segments[segmentIndex];
  }
  return normalizedPath;
}
var subscribeToLocationUpdates = (callback) => {
  const abort = new AbortController;
  for (const event of events) {
    window.addEventListener(event, callback, { signal: abort.signal });
  }
  return () => abort.abort();
};
function useLocationProperty(fn, ssrFn) {
  return import_react4.useSyncExternalStore(subscribeToLocationUpdates, fn, ssrFn);
}
function usePathname() {
  return useLocationProperty(() => location.pathname, () => globalX.__INITIAL_ROUTE__);
}
var navigate = (to, { replace = false } = {}) => history[replace ? eventReplaceState : eventPushState](null, "", to);
var eventPopstate = "popstate";
var eventPushState = "pushState";
var eventReplaceState = "replaceState";
var events = [eventPopstate, eventPushState, eventReplaceState];
if (typeof history !== "undefined") {
  for (const type of [eventPushState, eventReplaceState]) {
    const original = history[type];
    history[type] = function(...args) {
      const result = original.apply(this, args);
      const event = new Event(type);
      import_react_dom.unstable_batchedUpdates(() => {
        dispatchEvent(event);
      });
      return result;
    };
  }
}
export { require_react, require_react_dom, getRouteMatcher, generateRandomString, normalize, RequestContext, require_jsx_dev_runtime, match, useLoadingEffect, useReloadEffect, ReloadContext, RouterHost, SessionProvider, NextJsLayoutStacker };
