import * as React from 'react';
import React__default, { useState, useRef, useCallback, useEffect } from 'react';

let style = {
  'semi-icon': 'index_semi-icon__xTQKY',
  'semi-icon-extra-small': 'index_semi-icon-extra-small__WBFwV',
  'semi-icon-small': 'index_semi-icon-small__Y958l',
  'semi-icon-default': 'index_semi-icon-default__HW9Zm',
  'semi-icon-large': 'index_semi-icon-large__kf7v2',
  'semi-icon-extra-large': 'index_semi-icon-extra-large__NyVsr',
  'semi-icon-spinning': 'index_semi-icon-spinning__DtETV',
  'semi-icon-animation-rotate': 'index_semi-icon-animation-rotate__p5RY-',
  AudioControl: 'index_AudioControl__iNBGG',
  show: 'index_show__I-HEA',
  showAudioControl: 'index_showAudioControl__fXg55',
  control: 'index_control__it9Gt',
  error: 'index_error__aqdRh',
  leftContent: 'index_leftContent__d36qT',
  play_pause: 'index_play_pause__kjpsw',
  rightContent: 'index_rightContent__Qq60E',
  slide: 'index_slide__5BvsK',
  sliderBar: 'index_sliderBar__yG-8z',
  Tips: 'index_Tips__juV-a',
  hover: 'index_hover__Ug27y',
  timer_box: 'index_timer_box__0H9Zz',
  double_speed: 'index_double_speed__zA6G-',
  speed_list: 'index_speed_list__XV-2D',
  speed_item: 'index_speed_item__F-Zl7',
  active: 'index_active__Uy---',
};

let commonjsGlobal =
  typeof globalThis !== 'undefined' ?
    globalThis :
    typeof window !== 'undefined' ?
      window :
      typeof global !== 'undefined' ?
        global :
        typeof self !== 'undefined' ?
          self :
          {};

let FunctionPrototype$1 = Function.prototype;
let bind$4 = FunctionPrototype$1.bind;
let call$7 = FunctionPrototype$1.call;
let uncurryThis$g = bind$4 && bind$4.bind(call$7, call$7);

let functionUncurryThis = bind$4 ?
  function (fn) {
    return fn && uncurryThis$g(fn);
  } :
  function (fn) {
    return (
      fn &&
        function () {
          return call$7.apply(fn, arguments);
        }
    );
  };

let uncurryThis$f = functionUncurryThis;

let objectIsPrototypeOf = uncurryThis$f({}.isPrototypeOf);

let check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
let global$q =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis === 'object' && globalThis) ||
  check(typeof window === 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self === 'object' && self) ||
  check(typeof commonjsGlobal === 'object' && commonjsGlobal) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () {
    return this;
  })() ||
  Function('return this')();

let FunctionPrototype = Function.prototype;
let apply$2 = FunctionPrototype.apply;
let bind$3 = FunctionPrototype.bind;
let call$6 = FunctionPrototype.call;

// eslint-disable-next-line es/no-reflect -- safe
let functionApply =
  (typeof Reflect === 'object' && Reflect.apply) ||
  (bind$3 ?
    call$6.bind(apply$2) :
    function () {
      return call$6.apply(apply$2, arguments);
    });

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
let isCallable$c = function (argument) {
  return typeof argument === 'function';
};

let objectGetOwnPropertyDescriptor = {};

let fails$c = function (exec) {
  try {
    return Boolean(exec());
  } catch (error) {
    return true;
  }
};

let fails$b = fails$c;

// Detect IE8's incomplete defineProperty implementation
let descriptors = !fails$b(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return (
    Object.defineProperty({}, 1, {
      get() {
        return 7;
      },
    })[1] != 7
  );
});

let call$5 = Function.prototype.call;

let functionCall = call$5.bind ?
  call$5.bind(call$5) :
  function () {
    return call$5.apply(call$5, arguments);
  };

let objectPropertyIsEnumerable = {};

let $propertyIsEnumerable$1 = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
let getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
let NASHORN_BUG = getOwnPropertyDescriptor$1 && !$propertyIsEnumerable$1.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
objectPropertyIsEnumerable.f = NASHORN_BUG ?
  function propertyIsEnumerable(V) {
    let descriptor = getOwnPropertyDescriptor$1(this, V);
    return Boolean(descriptor) && descriptor.enumerable;
  } :
  $propertyIsEnumerable$1;

let createPropertyDescriptor$4 = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value,
  };
};

let uncurryThis$e = functionUncurryThis;

let toString$3 = uncurryThis$e({}.toString);
let stringSlice = uncurryThis$e(''.slice);

let classofRaw$1 = function (it) {
  return stringSlice(toString$3(it), 8, -1);
};

let global$p = global$q;
let uncurryThis$d = functionUncurryThis;
let fails$a = fails$c;
let classof$6 = classofRaw$1;

let Object$4 = global$p.Object;
let split = uncurryThis$d(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
let indexedObject = fails$a(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object$4('z').propertyIsEnumerable(0);
}) ?
  function (it) {
    return classof$6(it) == 'String' ? split(it, '') : Object$4(it);
  } :
  Object$4;

let global$o = global$q;

let TypeError$9 = global$o.TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
let requireObjectCoercible$2 = function (it) {
  if (it == undefined) {
    throw TypeError$9(`Can't call method on ${ it}`);
  }
  return it;
};

// toObject with fallback for non-array-like ES3 strings
let IndexedObject$2 = indexedObject;
let requireObjectCoercible$1 = requireObjectCoercible$2;

let toIndexedObject$6 = function (it) {
  return IndexedObject$2(requireObjectCoercible$1(it));
};

let isCallable$b = isCallable$c;

let isObject$9 = function (it) {
  return typeof it === 'object' ? it !== null : isCallable$b(it);
};

let path$7 = {};

let path$6 = path$7;
let global$n = global$q;
let isCallable$a = isCallable$c;

let aFunction = function (variable) {
  return isCallable$a(variable) ? variable : undefined;
};

let getBuiltIn$5 = function (namespace, method) {
  return arguments.length < 2 ?
    aFunction(path$6[namespace]) || aFunction(global$n[namespace]) :
    (path$6[namespace] && path$6[namespace][method]) || (global$n[namespace] && global$n[namespace][method]);
};

let getBuiltIn$4 = getBuiltIn$5;

let engineUserAgent = getBuiltIn$4('navigator', 'userAgent') || '';

let global$m = global$q;
let userAgent = engineUserAgent;

let { process } = global$m;
let { Deno } = global$m;
let versions = (process && process.versions) || (Deno && Deno.version);
let v8 = versions && versions.v8;
let match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : Number(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) {
      version = Number(match[1]);
    }
  }
}

let engineV8Version = version;

/* eslint-disable es/no-symbol -- required for testing */

let V8_VERSION$2 = engineV8Version;
let fails$9 = fails$c;

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
let nativeSymbol =
  Boolean(Object.getOwnPropertySymbols) &&
  !fails$9(function () {
    let symbol = Symbol();
    // Chrome 38 Symbol has incorrect toString conversion
    // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
    return (
      !String(symbol) ||
      !(Object(symbol) instanceof Symbol) ||
      // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
      (!Symbol.sham && V8_VERSION$2 && V8_VERSION$2 < 41)
    );
  });

/* eslint-disable es/no-symbol -- required for testing */

let NATIVE_SYMBOL$2 = nativeSymbol;

let useSymbolAsUid = NATIVE_SYMBOL$2 && !Symbol.sham && typeof Symbol.iterator === 'symbol';

let global$l = global$q;
let getBuiltIn$3 = getBuiltIn$5;
let isCallable$9 = isCallable$c;
let isPrototypeOf$3 = objectIsPrototypeOf;
let USE_SYMBOL_AS_UID$1 = useSymbolAsUid;

let Object$3 = global$l.Object;

let isSymbol$3 = USE_SYMBOL_AS_UID$1 ?
  function (it) {
    return typeof it === 'symbol';
  } :
  function (it) {
    let $Symbol = getBuiltIn$3('Symbol');
    return isCallable$9($Symbol) && isPrototypeOf$3($Symbol.prototype, Object$3(it));
  };

let global$k = global$q;

let String$3 = global$k.String;

let tryToString$1 = function (argument) {
  try {
    return String$3(argument);
  } catch (error) {
    return 'Object';
  }
};

let global$j = global$q;
let isCallable$8 = isCallable$c;
let tryToString = tryToString$1;

let TypeError$8 = global$j.TypeError;

// `Assert: IsCallable(argument) is true`
let aCallable$2 = function (argument) {
  if (isCallable$8(argument)) {
    return argument;
  }
  throw TypeError$8(`${tryToString(argument) } is not a function`);
};

let aCallable$1 = aCallable$2;

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
let getMethod$1 = function (V, P) {
  let func = V[P];
  return func == null ? undefined : aCallable$1(func);
};

let global$i = global$q;
let call$4 = functionCall;
let isCallable$7 = isCallable$c;
let isObject$8 = isObject$9;

let TypeError$7 = global$i.TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
let ordinaryToPrimitive$1 = function (input, pref) {
  let fn, val;
  if (pref === 'string' && isCallable$7((fn = input.toString)) && !isObject$8((val = call$4(fn, input)))) {
    return val;
  }
  if (isCallable$7((fn = input.valueOf)) && !isObject$8((val = call$4(fn, input)))) {
    return val;
  }
  if (pref !== 'string' && isCallable$7((fn = input.toString)) && !isObject$8((val = call$4(fn, input)))) {
    return val;
  }
  throw TypeError$7("Can't convert object to primitive value");
};

let shared$4 = { exports: {} };

let global$h = global$q;

// eslint-disable-next-line es/no-object-defineproperty -- safe
let defineProperty$3 = Object.defineProperty;

let setGlobal$1 = function (key, value) {
  try {
    defineProperty$3(global$h, key, { value, configurable: true, writable: true });
  } catch (error) {
    global$h[key] = value;
  }
  return value;
};

let global$g = global$q;
let setGlobal = setGlobal$1;

let SHARED = '__core-js_shared__';
let store$3 = global$g[SHARED] || setGlobal(SHARED, {});

let sharedStore = store$3;

let store$2 = sharedStore;

(shared$4.exports = function (key, value) {
  return store$2[key] || (store$2[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.20.2',
  mode: 'pure',
  copyright: '© 2022 Denis Pushkarev (zloirock.ru)',
});

let global$f = global$q;
let requireObjectCoercible = requireObjectCoercible$2;

let Object$2 = global$f.Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
let toObject$5 = function (argument) {
  return Object$2(requireObjectCoercible(argument));
};

let uncurryThis$c = functionUncurryThis;
let toObject$4 = toObject$5;

let hasOwnProperty = uncurryThis$c({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
let hasOwnProperty_1 =
  Object.hasOwn ||
  function hasOwn(it, key) {
    return hasOwnProperty(toObject$4(it), key);
  };

let uncurryThis$b = functionUncurryThis;

let id = 0;
let postfix = Math.random();
let toString$2 = uncurryThis$b((1.0).toString);

let uid$3 = function (key) {
  return `Symbol(${ key === undefined ? '' : key })_${ toString$2(++id + postfix, 36)}`;
};

let global$e = global$q;
let shared$3 = shared$4.exports;
let hasOwn$7 = hasOwnProperty_1;
let uid$2 = uid$3;
let NATIVE_SYMBOL$1 = nativeSymbol;
let USE_SYMBOL_AS_UID = useSymbolAsUid;

let WellKnownSymbolsStore$1 = shared$3('wks');
let Symbol$1 = global$e.Symbol;
let symbolFor = Symbol$1 && Symbol$1.for;
let createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$1 : (Symbol$1 && Symbol$1.withoutSetter) || uid$2;

let wellKnownSymbol$9 = function (name) {
  if (
    !hasOwn$7(WellKnownSymbolsStore$1, name) ||
    !(NATIVE_SYMBOL$1 || typeof WellKnownSymbolsStore$1[name] === 'string')
  ) {
    let description = `Symbol.${ name}`;
    if (NATIVE_SYMBOL$1 && hasOwn$7(Symbol$1, name)) {
      WellKnownSymbolsStore$1[name] = Symbol$1[name];
    } else if (USE_SYMBOL_AS_UID && symbolFor) {
      WellKnownSymbolsStore$1[name] = symbolFor(description);
    } else {
      WellKnownSymbolsStore$1[name] = createWellKnownSymbol(description);
    }
  }
  return WellKnownSymbolsStore$1[name];
};

let global$d = global$q;
let call$3 = functionCall;
let isObject$7 = isObject$9;
let isSymbol$2 = isSymbol$3;
let getMethod = getMethod$1;
let ordinaryToPrimitive = ordinaryToPrimitive$1;
let wellKnownSymbol$8 = wellKnownSymbol$9;

let TypeError$6 = global$d.TypeError;
let TO_PRIMITIVE$1 = wellKnownSymbol$8('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
let toPrimitive$1 = function (input, pref) {
  if (!isObject$7(input) || isSymbol$2(input)) {
    return input;
  }
  let exoticToPrim = getMethod(input, TO_PRIMITIVE$1);
  let result;
  if (exoticToPrim) {
    if (pref === undefined) {
      pref = 'default';
    }
    result = call$3(exoticToPrim, input, pref);
    if (!isObject$7(result) || isSymbol$2(result)) {
      return result;
    }
    throw TypeError$6("Can't convert object to primitive value");
  }
  if (pref === undefined) {
    pref = 'number';
  }
  return ordinaryToPrimitive(input, pref);
};

let toPrimitive = toPrimitive$1;
let isSymbol$1 = isSymbol$3;

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
let toPropertyKey$4 = function (argument) {
  let key = toPrimitive(argument, 'string');
  return isSymbol$1(key) ? key : `${key }`;
};

let global$c = global$q;
let isObject$6 = isObject$9;

let document$1 = global$c.document;
// typeof document.createElement is 'object' in old IE
let EXISTS = isObject$6(document$1) && isObject$6(document$1.createElement);

let documentCreateElement$1 = function (it) {
  return EXISTS ? document$1.createElement(it) : {};
};

let DESCRIPTORS$7 = descriptors;
let fails$8 = fails$c;
let createElement = documentCreateElement$1;

// Thank's IE8 for his funny defineProperty
let ie8DomDefine =
  !DESCRIPTORS$7 &&
  !fails$8(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return (
      Object.defineProperty(createElement('div'), 'a', {
        get() {
          return 7;
        },
      }).a != 7
    );
  });

let DESCRIPTORS$6 = descriptors;
let call$2 = functionCall;
let propertyIsEnumerableModule$2 = objectPropertyIsEnumerable;
let createPropertyDescriptor$3 = createPropertyDescriptor$4;
let toIndexedObject$5 = toIndexedObject$6;
let toPropertyKey$3 = toPropertyKey$4;
let hasOwn$6 = hasOwnProperty_1;
let IE8_DOM_DEFINE$1 = ie8DomDefine;

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
let $getOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
objectGetOwnPropertyDescriptor.f = DESCRIPTORS$6 ?
  $getOwnPropertyDescriptor$2 :
  function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject$5(O);
    P = toPropertyKey$3(P);
    if (IE8_DOM_DEFINE$1) {
      try {
        return $getOwnPropertyDescriptor$2(O, P);
      } catch (error) {
      /* empty */
      }
    }
    if (hasOwn$6(O, P)) {
      return createPropertyDescriptor$3(!call$2(propertyIsEnumerableModule$2.f, O, P), O[P]);
    }
  };

let fails$7 = fails$c;
let isCallable$6 = isCallable$c;

let replacement = /#|\.prototype\./;

let isForced$1 = function (feature, detection) {
  let value = data[normalize(feature)];
  return value == POLYFILL ?
    true :
    value == NATIVE ?
      false :
      isCallable$6(detection) ?
        fails$7(detection) :
        Boolean(detection);
};

var normalize = (isForced$1.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
});

var data = (isForced$1.data = {});
var NATIVE = (isForced$1.NATIVE = 'N');
var POLYFILL = (isForced$1.POLYFILL = 'P');

let isForced_1 = isForced$1;

let uncurryThis$a = functionUncurryThis;
let aCallable = aCallable$2;

let bind$2 = uncurryThis$a(uncurryThis$a.bind);

// optional / simple context binding
let functionBindContext = function (fn, that) {
  aCallable(fn);
  return that === undefined ?
    fn :
    bind$2 ?
      bind$2(fn, that) :
      function (/* ...args */) {
        return fn.apply(that, arguments);
      };
};

let objectDefineProperty = {};

let DESCRIPTORS$5 = descriptors;
let fails$6 = fails$c;

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
let v8PrototypeDefineBug =
  DESCRIPTORS$5 &&
  fails$6(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return (
      Object.defineProperty(
        function () {
          /* empty */
        },
        'prototype',
        {
          value: 42,
          writable: false,
        }
      ).prototype != 42
    );
  });

let global$b = global$q;
let isObject$5 = isObject$9;

let String$2 = global$b.String;
let TypeError$5 = global$b.TypeError;

// `Assert: Type(argument) is Object`
let anObject$4 = function (argument) {
  if (isObject$5(argument)) {
    return argument;
  }
  throw TypeError$5(`${String$2(argument) } is not an object`);
};

let global$a = global$q;
let DESCRIPTORS$4 = descriptors;
let IE8_DOM_DEFINE = ie8DomDefine;
let V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug;
let anObject$3 = anObject$4;
let toPropertyKey$2 = toPropertyKey$4;

let TypeError$4 = global$a.TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
let $defineProperty$1 = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
let $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;
let ENUMERABLE = 'enumerable';
let CONFIGURABLE = 'configurable';
let WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
objectDefineProperty.f = DESCRIPTORS$4 ?
  V8_PROTOTYPE_DEFINE_BUG$1 ?
    function defineProperty(O, P, Attributes) {
      anObject$3(O);
      P = toPropertyKey$2(P);
      anObject$3(Attributes);
      if (
        typeof O === 'function' &&
          P === 'prototype' &&
          'value' in Attributes &&
          WRITABLE in Attributes &&
          !Attributes[WRITABLE]
      ) {
        let current = $getOwnPropertyDescriptor$1(O, P);
        if (current && current[WRITABLE]) {
          O[P] = Attributes.value;
          Attributes = {
            configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
            enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
            writable: false,
          };
        }
      }
      return $defineProperty$1(O, P, Attributes);
    } :
    $defineProperty$1 :
  function defineProperty(O, P, Attributes) {
    anObject$3(O);
    P = toPropertyKey$2(P);
    anObject$3(Attributes);
    if (IE8_DOM_DEFINE) {
      try {
        return $defineProperty$1(O, P, Attributes);
      } catch (error) {
      /* empty */
      }
    }
    if ('get' in Attributes || 'set' in Attributes) {
      throw TypeError$4('Accessors not supported');
    }
    if ('value' in Attributes) {
      O[P] = Attributes.value;
    }
    return O;
  };

let DESCRIPTORS$3 = descriptors;
let definePropertyModule$3 = objectDefineProperty;
let createPropertyDescriptor$2 = createPropertyDescriptor$4;

let createNonEnumerableProperty$4 = DESCRIPTORS$3 ?
  function (object, key, value) {
    return definePropertyModule$3.f(object, key, createPropertyDescriptor$2(1, value));
  } :
  function (object, key, value) {
    object[key] = value;
    return object;
  };

let global$9 = global$q;
let apply$1 = functionApply;
let uncurryThis$9 = functionUncurryThis;
let isCallable$5 = isCallable$c;
let getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
let isForced = isForced_1;
let path$5 = path$7;
let bind$1 = functionBindContext;
let createNonEnumerableProperty$3 = createNonEnumerableProperty$4;
let hasOwn$5 = hasOwnProperty_1;

let wrapConstructor = function (NativeConstructor) {
  var Wrapper = function (a, b, c) {
    if (this instanceof Wrapper) {
      switch (arguments.length) {
        case 0:
          return new NativeConstructor();
        case 1:
          return new NativeConstructor(a);
        case 2:
          return new NativeConstructor(a, b);
      }
      return new NativeConstructor(a, b, c);
    }
    return apply$1(NativeConstructor, this, arguments);
  };
  Wrapper.prototype = NativeConstructor.prototype;
  return Wrapper;
};

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
  options.name        - the .name of the function if it does not match the key
*/
let _export = function (options, source) {
  let TARGET = options.target;
  let GLOBAL = options.global;
  let STATIC = options.stat;
  let PROTO = options.proto;

  let nativeSource = GLOBAL ? global$9 : STATIC ? global$9[TARGET] : (global$9[TARGET] || {}).prototype;

  let target = GLOBAL ? path$5 : path$5[TARGET] || createNonEnumerableProperty$3(path$5, TARGET, {})[TARGET];
  let targetPrototype = target.prototype;

  let FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE,
    key, sourceProperty, targetProperty, nativeProperty, resultProperty, descriptor;

  for (key in source) {
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contains in native
    USE_NATIVE = !FORCED && nativeSource && hasOwn$5(nativeSource, key);

    targetProperty = target[key];

    if (USE_NATIVE) {
      if (options.noTargetGet) {
        descriptor = getOwnPropertyDescriptor(nativeSource, key);
        nativeProperty = descriptor && descriptor.value;
      } else {
        nativeProperty = nativeSource[key];
      }
    }

    // export native or implementation
    sourceProperty = USE_NATIVE && nativeProperty ? nativeProperty : source[key];

    if (USE_NATIVE && typeof targetProperty === typeof sourceProperty) {
      continue;
    }

    // bind timers to global for call from export context
    if (options.bind && USE_NATIVE) {
      resultProperty = bind$1(sourceProperty, global$9);
    }
    // wrap global constructors for prevent changs in this version
    else if (options.wrap && USE_NATIVE) {
      resultProperty = wrapConstructor(sourceProperty);
    }
    // make static versions for prototype methods
    else if (PROTO && isCallable$5(sourceProperty)) {
      resultProperty = uncurryThis$9(sourceProperty);
    }
    // default case
    else {
      resultProperty = sourceProperty;
    }

    // add a flag to not completely full polyfills
    if (options.sham || (sourceProperty && sourceProperty.sham) || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty$3(resultProperty, 'sham', true);
    }

    createNonEnumerableProperty$3(target, key, resultProperty);

    if (PROTO) {
      VIRTUAL_PROTOTYPE = `${TARGET }Prototype`;
      if (!hasOwn$5(path$5, VIRTUAL_PROTOTYPE)) {
        createNonEnumerableProperty$3(path$5, VIRTUAL_PROTOTYPE, {});
      }
      // export virtual prototype methods
      createNonEnumerableProperty$3(path$5[VIRTUAL_PROTOTYPE], key, sourceProperty);
      // export real prototype methods
      if (options.real && targetPrototype && !targetPrototype[key]) {
        createNonEnumerableProperty$3(targetPrototype, key, sourceProperty);
      }
    }
  }
};

let { ceil } = Math;
let floor$1 = Math.floor;

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
let toIntegerOrInfinity$2 = function (argument) {
  let number = Number(argument);
  // eslint-disable-next-line no-self-compare -- safe
  return number !== number || number === 0 ? 0 : (number > 0 ? floor$1 : ceil)(number);
};

let toIntegerOrInfinity$1 = toIntegerOrInfinity$2;

let max$1 = Math.max;
let min$1 = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
let toAbsoluteIndex$2 = function (index, length) {
  let integer = toIntegerOrInfinity$1(index);
  return integer < 0 ? max$1(integer + length, 0) : min$1(integer, length);
};

let toIntegerOrInfinity = toIntegerOrInfinity$2;

let { min } = Math;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
let toLength$1 = function (argument) {
  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1fffffffffffff) : 0; // 2 ** 53 - 1 == 9007199254740991
};

let toLength = toLength$1;

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
let lengthOfArrayLike$4 = function (obj) {
  return toLength(obj.length);
};

let toIndexedObject$4 = toIndexedObject$6;
let toAbsoluteIndex$1 = toAbsoluteIndex$2;
let lengthOfArrayLike$3 = lengthOfArrayLike$4;

// `Array.prototype.{ indexOf, includes }` methods implementation
let createMethod$1 = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    let O = toIndexedObject$4($this);
    let length = lengthOfArrayLike$3(O);
    let index = toAbsoluteIndex$1(fromIndex, length);
    let value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) {
      while (length > index) {
        value = O[index++];
        // eslint-disable-next-line no-self-compare -- NaN check
        if (value != value) {
          return true;
        }
      // Array#indexOf ignores holes, Array#includes - not
      }
    } else {
      for (; length > index; index++) {
        if ((IS_INCLUDES || index in O) && O[index] === el) {
          return IS_INCLUDES || index || 0;
        }
      }
    }
    return !IS_INCLUDES && -1;
  };
};

let arrayIncludes = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod$1(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod$1(false),
};

let fails$5 = fails$c;

let arrayMethodIsStrict$1 = function (METHOD_NAME, argument) {
  let method = [][METHOD_NAME];
  return (
    Boolean(method) &&
    fails$5(function () {
      // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
      method.call(
        null,
        argument ||
          function () {
            throw 1;
          },
        1
      );
    })
  );
};

/* eslint-disable es/no-array-prototype-indexof -- required for testing */
let $$4 = _export;
let uncurryThis$8 = functionUncurryThis;
let $IndexOf = arrayIncludes.indexOf;
let arrayMethodIsStrict = arrayMethodIsStrict$1;

let un$IndexOf = uncurryThis$8([].indexOf);

let NEGATIVE_ZERO = Boolean(un$IndexOf) && 1 / un$IndexOf([1], 1, -0) < 0;
let STRICT_METHOD = arrayMethodIsStrict('indexOf');

// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
$$4(
  { target: 'Array', proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD },
  {
    indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
      let fromIndex = arguments.length > 1 ? arguments[1] : undefined;
      return NEGATIVE_ZERO ? // convert -0 to +0
        un$IndexOf(this, searchElement, fromIndex) || 0 :
        $IndexOf(this, searchElement, fromIndex);
    },
  }
);

let path$4 = path$7;

let entryVirtual$2 = function (CONSTRUCTOR) {
  return path$4[`${CONSTRUCTOR }Prototype`];
};

let entryVirtual$1 = entryVirtual$2;

let indexOf$4 = entryVirtual$1('Array').indexOf;

let isPrototypeOf$2 = objectIsPrototypeOf;
let method$1 = indexOf$4;

let ArrayPrototype$1 = Array.prototype;

let indexOf$3 = function (it) {
  let own = it.indexOf;
  return it === ArrayPrototype$1 || (isPrototypeOf$2(ArrayPrototype$1, it) && own === ArrayPrototype$1.indexOf) ?
    method$1 :
    own;
};

let parent$4 = indexOf$3;

let indexOf$2 = parent$4;

let indexOf$1 = indexOf$2;

let classof$5 = classofRaw$1;

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
let isArray$3 =
  Array.isArray ||
  function isArray(argument) {
    return classof$5(argument) == 'Array';
  };

let wellKnownSymbol$7 = wellKnownSymbol$9;

let TO_STRING_TAG$2 = wellKnownSymbol$7('toStringTag');
let test = {};

test[TO_STRING_TAG$2] = 'z';

let toStringTagSupport = String(test) === '[object z]';

let global$8 = global$q;
let TO_STRING_TAG_SUPPORT$2 = toStringTagSupport;
let isCallable$4 = isCallable$c;
let classofRaw = classofRaw$1;
let wellKnownSymbol$6 = wellKnownSymbol$9;

let TO_STRING_TAG$1 = wellKnownSymbol$6('toStringTag');
let Object$1 = global$8.Object;

// ES3 wrong here
let CORRECT_ARGUMENTS =
  classofRaw(
    (function () {
      return arguments;
    })()
  ) == 'Arguments';

// fallback for IE11 Script Access Denied error
let tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) {
    /* empty */
  }
};

// getting tag from ES6+ `Object.prototype.toString`
let classof$4 = TO_STRING_TAG_SUPPORT$2 ?
  classofRaw :
  function (it) {
    let O, tag, result;
    return it === undefined ?
      'Undefined' :
      it === null ?
        'Null' : // @@toStringTag case
        typeof (tag = tryGet((O = Object$1(it)), TO_STRING_TAG$1)) === 'string' ?
          tag : // builtinTag case
          CORRECT_ARGUMENTS ?
            classofRaw(O) : // ES3 arguments fallback
            (result = classofRaw(O)) == 'Object' && isCallable$4(O.callee) ?
              'Arguments' :
              result;
  };

let global$7 = global$q;
let classof$3 = classof$4;

let String$1 = global$7.String;

let toString$1 = function (argument) {
  if (classof$3(argument) === 'Symbol') {
    throw TypeError('Cannot convert a Symbol value to a string');
  }
  return String$1(argument);
};

let objectDefineProperties = {};

let hiddenKeys$5 = {};

let uncurryThis$7 = functionUncurryThis;
let hasOwn$4 = hasOwnProperty_1;
let toIndexedObject$3 = toIndexedObject$6;
let { indexOf } = arrayIncludes;
let hiddenKeys$4 = hiddenKeys$5;

let push$2 = uncurryThis$7([].push);

let objectKeysInternal = function (object, names) {
  let O = toIndexedObject$3(object);
  let i = 0;
  let result = [];
  let key;
  for (key in O) {
    !hasOwn$4(hiddenKeys$4, key) && hasOwn$4(O, key) && push$2(result, key);
  }
  // Don't enum bug & hidden keys
  while (names.length > i) {
    if (hasOwn$4(O, (key = names[i++]))) {
      ~indexOf(result, key) || push$2(result, key);
    }
  }
  return result;
};

// IE8- don't enum bug keys
let enumBugKeys$3 = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf',
];

let internalObjectKeys$1 = objectKeysInternal;
let enumBugKeys$2 = enumBugKeys$3;

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
let objectKeys$3 =
  Object.keys ||
  function keys(O) {
    return internalObjectKeys$1(O, enumBugKeys$2);
  };

let DESCRIPTORS$2 = descriptors;
let V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
let definePropertyModule$2 = objectDefineProperty;
let anObject$2 = anObject$4;
let toIndexedObject$2 = toIndexedObject$6;
let objectKeys$2 = objectKeys$3;

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
objectDefineProperties.f =
  DESCRIPTORS$2 && !V8_PROTOTYPE_DEFINE_BUG ?
    Object.defineProperties :
    function defineProperties(O, Properties) {
      anObject$2(O);
      let props = toIndexedObject$2(Properties);
      let keys = objectKeys$2(Properties);
      let { length } = keys;
      let index = 0;
      let key;
      while (length > index) {
        definePropertyModule$2.f(O, (key = keys[index++]), props[key]);
      }
      return O;
    };

let getBuiltIn$2 = getBuiltIn$5;

let html$1 = getBuiltIn$2('document', 'documentElement');

let shared$2 = shared$4.exports;
let uid$1 = uid$3;

let keys = shared$2('keys');

let sharedKey$3 = function (key) {
  return keys[key] || (keys[key] = uid$1(key));
};

/* global ActiveXObject -- old IE, WSH */

let anObject$1 = anObject$4;
let definePropertiesModule$1 = objectDefineProperties;
let enumBugKeys$1 = enumBugKeys$3;
let hiddenKeys$3 = hiddenKeys$5;
let html = html$1;
let documentCreateElement = documentCreateElement$1;
let sharedKey$2 = sharedKey$3;

let GT = '>';
let LT = '<';
let PROTOTYPE$1 = 'prototype';
let SCRIPT = 'script';
let IE_PROTO = sharedKey$2('IE_PROTO');

let EmptyConstructor = function () {
  /* empty */
};

let scriptTag = function (content) {
  return `${LT + SCRIPT + GT + content + LT }/${ SCRIPT }${GT}`;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
let NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  let temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
},

// Create object with fake `null` prototype: use iframe Object with cleared prototype
     NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
    let iframe = documentCreateElement('iframe');
    let JS = `java${ SCRIPT }:`;
    let iframeDocument;
    iframe.style.display = 'none';
    html.appendChild(iframe);
    // https://github.com/zloirock/core-js/issues/475
    iframe.src = String(JS);
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(scriptTag('document.F=Object'));
    iframeDocument.close();
    return iframeDocument.F;
  };

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
     let activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) {
    /* ignore */
  }
  NullProtoObject =
    typeof document !== 'undefined' ?
      document.domain && activeXDocument ?
        NullProtoObjectViaActiveX(activeXDocument) : // old IE
        NullProtoObjectViaIFrame() :
      NullProtoObjectViaActiveX(activeXDocument); // WSH
  let { length } = enumBugKeys$1;
  while (length--) {
    delete NullProtoObject[PROTOTYPE$1][enumBugKeys$1[length]];
  }
  return NullProtoObject();
};

hiddenKeys$3[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
let objectCreate =
  Object.create ||
  function create(O, Properties) {
    let result;
    if (O !== null) {
      EmptyConstructor[PROTOTYPE$1] = anObject$1(O);
      result = new EmptyConstructor();
      EmptyConstructor[PROTOTYPE$1] = null;
      // add "__proto__" for Object.getPrototypeOf polyfill
      result[IE_PROTO] = O;
    } else {
      result = NullProtoObject();
    }
    return Properties === undefined ? result : definePropertiesModule$1.f(result, Properties);
  };

let objectGetOwnPropertyNames = {};

let internalObjectKeys = objectKeysInternal;
let enumBugKeys = enumBugKeys$3;

let hiddenKeys$2 = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
objectGetOwnPropertyNames.f =
  Object.getOwnPropertyNames ||
  function getOwnPropertyNames(O) {
    return internalObjectKeys(O, hiddenKeys$2);
  };

let objectGetOwnPropertyNamesExternal = {};

let toPropertyKey$1 = toPropertyKey$4;
let definePropertyModule$1 = objectDefineProperty;
let createPropertyDescriptor$1 = createPropertyDescriptor$4;

let createProperty$2 = function (object, key, value) {
  let propertyKey = toPropertyKey$1(key);
  if (propertyKey in object) {
    definePropertyModule$1.f(object, propertyKey, createPropertyDescriptor$1(0, value));
  } else {
    object[propertyKey] = value;
  }
};

let global$6 = global$q;
let toAbsoluteIndex = toAbsoluteIndex$2;
let lengthOfArrayLike$2 = lengthOfArrayLike$4;
let createProperty$1 = createProperty$2;

let Array$2 = global$6.Array;
let { max } = Math;

let arraySliceSimple = function (O, start, end) {
  let length = lengthOfArrayLike$2(O);
  let k = toAbsoluteIndex(start, length);
  let fin = toAbsoluteIndex(end === undefined ? length : end, length);
  let result = Array$2(max(fin - k, 0));
  for (var n = 0; k < fin; k++, n++) {
    createProperty$1(result, n, O[k]);
  }
  result.length = n;
  return result;
};

/* eslint-disable es/no-object-getownpropertynames -- safe */

let classof$2 = classofRaw$1;
let toIndexedObject$1 = toIndexedObject$6;
let $getOwnPropertyNames$1 = objectGetOwnPropertyNames.f;
let arraySlice$2 = arraySliceSimple;

let windowNames =
  typeof window === 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

let getWindowNames = function (it) {
  try {
    return $getOwnPropertyNames$1(it);
  } catch (error) {
    return arraySlice$2(windowNames);
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
objectGetOwnPropertyNamesExternal.f = function getOwnPropertyNames(it) {
  return windowNames && classof$2(it) == 'Window' ? getWindowNames(it) : $getOwnPropertyNames$1(toIndexedObject$1(it));
};

let objectGetOwnPropertySymbols = {};

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;

let uncurryThis$6 = functionUncurryThis;

let arraySlice$1 = uncurryThis$6([].slice);

let createNonEnumerableProperty$2 = createNonEnumerableProperty$4;

let redefine$1 = function (target, key, value, options) {
  if (options && options.enumerable) {
    target[key] = value;
  } else {
    createNonEnumerableProperty$2(target, key, value);
  }
};

let wellKnownSymbolWrapped = {};

let wellKnownSymbol$5 = wellKnownSymbol$9;

wellKnownSymbolWrapped.f = wellKnownSymbol$5;

let path$3 = path$7;
let hasOwn$3 = hasOwnProperty_1;
let wrappedWellKnownSymbolModule$1 = wellKnownSymbolWrapped;
let defineProperty$2 = objectDefineProperty.f;

let defineWellKnownSymbol$1 = function (NAME) {
  let Symbol = path$3.Symbol || (path$3.Symbol = {});
  if (!hasOwn$3(Symbol, NAME)) {
    defineProperty$2(Symbol, NAME, {
      value: wrappedWellKnownSymbolModule$1.f(NAME),
    });
  }
};

let TO_STRING_TAG_SUPPORT$1 = toStringTagSupport;
let classof$1 = classof$4;

// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
let objectToString = TO_STRING_TAG_SUPPORT$1 ?
  {}.toString :
  function toString() {
    return `[object ${ classof$1(this) }]`;
  };

let TO_STRING_TAG_SUPPORT = toStringTagSupport;
let defineProperty$1 = objectDefineProperty.f;
let createNonEnumerableProperty$1 = createNonEnumerableProperty$4;
let hasOwn$2 = hasOwnProperty_1;
let toString = objectToString;
let wellKnownSymbol$4 = wellKnownSymbol$9;

let TO_STRING_TAG = wellKnownSymbol$4('toStringTag');

let setToStringTag$1 = function (it, TAG, STATIC, SET_METHOD) {
  if (it) {
    let target = STATIC ? it : it.prototype;
    if (!hasOwn$2(target, TO_STRING_TAG)) {
      defineProperty$1(target, TO_STRING_TAG, { configurable: true, value: TAG });
    }
    if (SET_METHOD && !TO_STRING_TAG_SUPPORT) {
      createNonEnumerableProperty$1(target, 'toString', toString);
    }
  }
};

let uncurryThis$5 = functionUncurryThis;
let isCallable$3 = isCallable$c;
let store$1 = sharedStore;

let functionToString = uncurryThis$5(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable$3(store$1.inspectSource)) {
  store$1.inspectSource = function (it) {
    return functionToString(it);
  };
}

let inspectSource$2 = store$1.inspectSource;

let global$5 = global$q;
let isCallable$2 = isCallable$c;
let inspectSource$1 = inspectSource$2;

let WeakMap$1 = global$5.WeakMap;

let nativeWeakMap = isCallable$2(WeakMap$1) && /native code/.test(inspectSource$1(WeakMap$1));

let NATIVE_WEAK_MAP = nativeWeakMap;
let global$4 = global$q;
let uncurryThis$4 = functionUncurryThis;
let isObject$4 = isObject$9;
let createNonEnumerableProperty = createNonEnumerableProperty$4;
let hasOwn$1 = hasOwnProperty_1;
let shared$1 = sharedStore;
let sharedKey$1 = sharedKey$3;
let hiddenKeys$1 = hiddenKeys$5;

let OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
let TypeError$3 = global$4.TypeError;
    let { WeakMap } = global$4,
     set,     get,     has;

let enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

let getterFor = function (TYPE) {
  return function (it) {
    let state;
    if (!isObject$4(it) || (state = get(it)).type !== TYPE) {
      throw TypeError$3(`Incompatible receiver, ${ TYPE } required`);
    }
    return state;
  };
};

if (NATIVE_WEAK_MAP || shared$1.state) {
  let store = shared$1.state || (shared$1.state = new WeakMap());
  let wmget = uncurryThis$4(store.get);
  let wmhas = uncurryThis$4(store.has);
  let wmset = uncurryThis$4(store.set);
  set = function (it, metadata) {
    if (wmhas(store, it)) {
      throw new TypeError$3(OBJECT_ALREADY_INITIALIZED);
    }
    metadata.facade = it;
    wmset(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget(store, it) || {};
  };
  has = function (it) {
    return wmhas(store, it);
  };
} else {
  let STATE = sharedKey$1('state');
  hiddenKeys$1[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn$1(it, STATE)) {
      throw new TypeError$3(OBJECT_ALREADY_INITIALIZED);
    }
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn$1(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn$1(it, STATE);
  };
}

let internalState = {
  set,
  get,
  has,
  enforce,
  getterFor,
};

let uncurryThis$3 = functionUncurryThis;
let fails$4 = fails$c;
let isCallable$1 = isCallable$c;
let classof = classof$4;
let getBuiltIn$1 = getBuiltIn$5;
let inspectSource = inspectSource$2;

let noop = function () {
  /* empty */
};
let empty = [];
let construct = getBuiltIn$1('Reflect', 'construct');
let constructorRegExp = /^\s*(?:class|function)\b/;
let exec = uncurryThis$3(constructorRegExp.exec);
let INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

let isConstructorModern = function isConstructor(argument) {
  if (!isCallable$1(argument)) {
    return false;
  }
  try {
    construct(noop, empty, argument);
    return true;
  } catch (error) {
    return false;
  }
};

let isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable$1(argument)) {
    return false;
  }
  switch (classof(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction':
      return false;
  }
  try {
    // we can't check .prototype since constructors produced by .bind haven't it
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    return INCORRECT_TO_STRING || Boolean(exec(constructorRegExp, inspectSource(argument)));
  } catch (error) {
    return true;
  }
};

isConstructorLegacy.sham = true;

// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
let isConstructor$1 =
  !construct ||
  fails$4(function () {
    let called;
    return (
      isConstructorModern(isConstructorModern.call) ||
      !isConstructorModern(Object) ||
      !isConstructorModern(function () {
        called = true;
      }) ||
      called
    );
  }) ?
    isConstructorLegacy :
    isConstructorModern;

let global$3 = global$q;
let isArray$2 = isArray$3;
let isConstructor = isConstructor$1;
let isObject$3 = isObject$9;
let wellKnownSymbol$3 = wellKnownSymbol$9;

let SPECIES$1 = wellKnownSymbol$3('species');
let Array$1 = global$3.Array;

// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
let arraySpeciesConstructor$1 = function (originalArray) {
  let C;
  if (isArray$2(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (isConstructor(C) && (C === Array$1 || isArray$2(C.prototype))) {
      C = undefined;
    } else if (isObject$3(C)) {
      C = C[SPECIES$1];
      if (C === null) {
        C = undefined;
      }
    }
  }
  return C === undefined ? Array$1 : C;
};

let arraySpeciesConstructor = arraySpeciesConstructor$1;

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
let arraySpeciesCreate$2 = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};

let bind = functionBindContext;
let uncurryThis$2 = functionUncurryThis;
let IndexedObject$1 = indexedObject;
let toObject$3 = toObject$5;
let lengthOfArrayLike$1 = lengthOfArrayLike$4;
let arraySpeciesCreate$1 = arraySpeciesCreate$2;

let push$1 = uncurryThis$2([].push);

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
let createMethod = function (TYPE) {
  let IS_MAP = TYPE == 1;
  let IS_FILTER = TYPE == 2;
  let IS_SOME = TYPE == 3;
  let IS_EVERY = TYPE == 4;
  let IS_FIND_INDEX = TYPE == 6;
  let IS_FILTER_REJECT = TYPE == 7;
  let NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    let O = toObject$3($this);
    let self = IndexedObject$1(O);
    let boundFunction = bind(callbackfn, that);
    let length = lengthOfArrayLike$1(self);
    let index = 0;
    let create = specificCreate || arraySpeciesCreate$1;
    let target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
    let value, result;
    for (; length > index; index++) {
      if (NO_HOLES || index in self) {
        value = self[index];
        result = boundFunction(value, index, O);
        if (TYPE) {
          if (IS_MAP) {
            target[index] = result;
          }
          // map
          else if (result) {
            switch (TYPE) {
              case 3:
                return true; // some
              case 5:
                return value; // find
              case 6:
                return index; // findIndex
              case 2:
                push$1(target, value); // filter
            }
          } else {
            switch (TYPE) {
              case 4:
                return false; // every
              case 7:
                push$1(target, value); // filterReject
            }
          }
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

let arrayIteration = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod(7),
};

let $$3 = _export;
let global$2 = global$q;
let getBuiltIn = getBuiltIn$5;
let apply = functionApply;
let call$1 = functionCall;
let uncurryThis$1 = functionUncurryThis;
let DESCRIPTORS$1 = descriptors;
let NATIVE_SYMBOL = nativeSymbol;
let fails$3 = fails$c;
let hasOwn = hasOwnProperty_1;
let isArray$1 = isArray$3;
let isCallable = isCallable$c;
let isObject$2 = isObject$9;
let isPrototypeOf$1 = objectIsPrototypeOf;
let isSymbol = isSymbol$3;
let anObject = anObject$4;
let toObject$2 = toObject$5;
let toIndexedObject = toIndexedObject$6;
let toPropertyKey = toPropertyKey$4;
let $toString = toString$1;
let createPropertyDescriptor = createPropertyDescriptor$4;
let nativeObjectCreate = objectCreate;
let objectKeys$1 = objectKeys$3;
let getOwnPropertyNamesModule = objectGetOwnPropertyNames;
let getOwnPropertyNamesExternal = objectGetOwnPropertyNamesExternal;
let getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols;
let getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
let definePropertyModule = objectDefineProperty;
let definePropertiesModule = objectDefineProperties;
let propertyIsEnumerableModule$1 = objectPropertyIsEnumerable;
let arraySlice = arraySlice$1;
let redefine = redefine$1;
let shared = shared$4.exports;
let sharedKey = sharedKey$3;
let hiddenKeys = hiddenKeys$5;
let uid = uid$3;
let wellKnownSymbol$2 = wellKnownSymbol$9;
let wrappedWellKnownSymbolModule = wellKnownSymbolWrapped;
let defineWellKnownSymbol = defineWellKnownSymbol$1;
let setToStringTag = setToStringTag$1;
let InternalStateModule = internalState;
let $forEach = arrayIteration.forEach;

let HIDDEN = sharedKey('hidden');
let SYMBOL = 'Symbol';
let PROTOTYPE = 'prototype';
let TO_PRIMITIVE = wellKnownSymbol$2('toPrimitive');

let setInternalState = InternalStateModule.set;
let getInternalState = InternalStateModule.getterFor(SYMBOL);

let ObjectPrototype = Object[PROTOTYPE];
let $Symbol = global$2.Symbol;
let SymbolPrototype = $Symbol && $Symbol[PROTOTYPE];
let TypeError$2 = global$2.TypeError;
let { QObject } = global$2;
let $stringify = getBuiltIn('JSON', 'stringify');
let nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
let nativeDefineProperty = definePropertyModule.f;
let nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
let nativePropertyIsEnumerable = propertyIsEnumerableModule$1.f;
let push = uncurryThis$1([].push);

let AllSymbols = shared('symbols');
let ObjectPrototypeSymbols = shared('op-symbols');
let StringToSymbolRegistry = shared('string-to-symbol-registry');
let SymbolToStringRegistry = shared('symbol-to-string-registry');
let WellKnownSymbolsStore = shared('wks');

// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
let USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
let setSymbolDescriptor =
  DESCRIPTORS$1 &&
  fails$3(function () {
    return (
      nativeObjectCreate(
        nativeDefineProperty({}, 'a', {
          get() {
            return nativeDefineProperty(this, 'a', { value: 7 }).a;
          },
        })
      ).a != 7
    );
  }) ?
    function (O, P, Attributes) {
      let ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
      if (ObjectPrototypeDescriptor) {
        delete ObjectPrototype[P];
      }
      nativeDefineProperty(O, P, Attributes);
      if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
        nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
      }
    } :
    nativeDefineProperty;

let wrap = function (tag, description) {
  let symbol = (AllSymbols[tag] = nativeObjectCreate(SymbolPrototype));
  setInternalState(symbol, {
    type: SYMBOL,
    tag,
    description,
  });
  if (!DESCRIPTORS$1) {
    symbol.description = description;
  }
  return symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) {
    $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  }
  anObject(O);
  let key = toPropertyKey(P);
  anObject(Attributes);
  if (hasOwn(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!hasOwn(O, HIDDEN)) {
        nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      }
      O[HIDDEN][key] = true;
    } else {
      if (hasOwn(O, HIDDEN) && O[HIDDEN][key]) {
        O[HIDDEN][key] = false;
      }
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    }
    return setSymbolDescriptor(O, key, Attributes);
  }
  return nativeDefineProperty(O, key, Attributes);
};

let $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  let properties = toIndexedObject(Properties);
  let keys = objectKeys$1(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS$1 || call$1($propertyIsEnumerable, properties, key)) {
      $defineProperty(O, key, properties[key]);
    }
  });
  return O;
};

let $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  let P = toPropertyKey(V);
  let enumerable = call$1(nativePropertyIsEnumerable, this, P);
  if (this === ObjectPrototype && hasOwn(AllSymbols, P) && !hasOwn(ObjectPrototypeSymbols, P)) {
    return false;
  }
  return enumerable || !hasOwn(this, P) || !hasOwn(AllSymbols, P) || (hasOwn(this, HIDDEN) && this[HIDDEN][P]) ?
    enumerable :
    true;
};

let $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  let it = toIndexedObject(O);
  let key = toPropertyKey(P);
  if (it === ObjectPrototype && hasOwn(AllSymbols, key) && !hasOwn(ObjectPrototypeSymbols, key)) {
    return;
  }
  let descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && hasOwn(AllSymbols, key) && !(hasOwn(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

let $getOwnPropertyNames = function getOwnPropertyNames(O) {
  let names = nativeGetOwnPropertyNames(toIndexedObject(O));
  let result = [];
  $forEach(names, function (key) {
    if (!hasOwn(AllSymbols, key) && !hasOwn(hiddenKeys, key)) {
      push(result, key);
    }
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  let IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  let names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  let result = [];
  $forEach(names, function (key) {
    if (hasOwn(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || hasOwn(ObjectPrototype, key))) {
      push(result, AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.es/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (isPrototypeOf$1(SymbolPrototype, this)) {
      throw TypeError$2('Symbol is not a constructor');
    }
    let description = !arguments.length || arguments[0] === undefined ? undefined : $toString(arguments[0]);
    let tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype) {
        call$1(setter, ObjectPrototypeSymbols, value);
      }
      if (hasOwn(this, HIDDEN) && hasOwn(this[HIDDEN], tag)) {
        this[HIDDEN][tag] = false;
      }
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };
    if (DESCRIPTORS$1 && USE_SETTER) {
      setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    }
    return wrap(tag, description);
  };

  SymbolPrototype = $Symbol[PROTOTYPE];

  redefine(SymbolPrototype, 'toString', function toString() {
    return getInternalState(this).tag;
  });

  redefine($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });

  propertyIsEnumerableModule$1.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  definePropertiesModule.f = $defineProperties;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule$1.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol$2(name), name);
  };

  if (DESCRIPTORS$1) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty(SymbolPrototype, 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      },
    });
  }
}

$$3(
  { global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL },
  {
    Symbol: $Symbol,
  }
);

$forEach(objectKeys$1(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$$3(
  { target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL },
  {
    // `Symbol.for` method
    // https://tc39.es/ecma262/#sec-symbol.for
    for(key) {
      let string = $toString(key);
      if (hasOwn(StringToSymbolRegistry, string)) {
        return StringToSymbolRegistry[string];
      }
      let symbol = $Symbol(string);
      StringToSymbolRegistry[string] = symbol;
      SymbolToStringRegistry[symbol] = string;
      return symbol;
    },
    // `Symbol.keyFor` method
    // https://tc39.es/ecma262/#sec-symbol.keyfor
    keyFor: function keyFor(sym) {
      if (!isSymbol(sym)) {
        throw TypeError$2(`${sym } is not a symbol`);
      }
      if (hasOwn(SymbolToStringRegistry, sym)) {
        return SymbolToStringRegistry[sym];
      }
    },
    useSetter() {
      USE_SETTER = true;
    },
    useSimple() {
      USE_SETTER = false;
    },
  }
);

$$3(
  { target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS$1 },
  {
    // `Object.create` method
    // https://tc39.es/ecma262/#sec-object.create
    create: $create,
    // `Object.defineProperty` method
    // https://tc39.es/ecma262/#sec-object.defineproperty
    defineProperty: $defineProperty,
    // `Object.defineProperties` method
    // https://tc39.es/ecma262/#sec-object.defineproperties
    defineProperties: $defineProperties,
    // `Object.getOwnPropertyDescriptor` method
    // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
    getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  }
);

$$3(
  { target: 'Object', stat: true, forced: !NATIVE_SYMBOL },
  {
    // `Object.getOwnPropertyNames` method
    // https://tc39.es/ecma262/#sec-object.getownpropertynames
    getOwnPropertyNames: $getOwnPropertyNames,
    // `Object.getOwnPropertySymbols` method
    // https://tc39.es/ecma262/#sec-object.getownpropertysymbols
    getOwnPropertySymbols: $getOwnPropertySymbols,
  }
);

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
$$3(
  {
    target: 'Object',
    stat: true,
    forced: fails$3(function () {
      getOwnPropertySymbolsModule$1.f(1);
    }),
  },
  {
    getOwnPropertySymbols: function getOwnPropertySymbols(it) {
      return getOwnPropertySymbolsModule$1.f(toObject$2(it));
    },
  }
);

// `JSON.stringify` method behavior with symbols
// https://tc39.es/ecma262/#sec-json.stringify
if ($stringify) {
  let FORCED_JSON_STRINGIFY =
    !NATIVE_SYMBOL ||
    fails$3(function () {
      let symbol = $Symbol();
      // MS Edge converts symbol values to JSON as {}
      return (
        $stringify([symbol]) != '[null]' ||
        // WebKit converts symbol values to JSON as null
        $stringify({ a: symbol }) != '{}' ||
        // V8 throws on boxed symbols
        $stringify(Object(symbol)) != '{}'
      );
    });

  $$3(
    { target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY },
    {
      // eslint-disable-next-line no-unused-vars -- required for `.length`
      stringify: function stringify(it, replacer, space) {
        let args = arraySlice(arguments);
        let $replacer = replacer;
        if ((!isObject$2(replacer) && it === undefined) || isSymbol(it)) {
          return;
        } // IE8 returns string on undefined
        if (!isArray$1(replacer)) {
          replacer = function (key, value) {
            if (isCallable($replacer)) {
              value = call$1($replacer, this, key, value);
            }
            if (!isSymbol(value)) {
              return value;
            }
          };
        }
        args[1] = replacer;
        return apply($stringify, null, args);
      },
    }
  );
}

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
if (!SymbolPrototype[TO_PRIMITIVE]) {
  let { valueOf } = SymbolPrototype;
  // eslint-disable-next-line no-unused-vars -- required for .length
  redefine(SymbolPrototype, TO_PRIMITIVE, function (hint) {
    // TODO: improve hint logic
    return call$1(valueOf, this);
  });
}
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;

let path$2 = path$7;

let getOwnPropertySymbols$2 = path$2.Object.getOwnPropertySymbols;

let parent$3 = getOwnPropertySymbols$2;

let getOwnPropertySymbols$1 = parent$3;

let getOwnPropertySymbols = getOwnPropertySymbols$1;

let fails$2 = fails$c;
let wellKnownSymbol$1 = wellKnownSymbol$9;
let V8_VERSION$1 = engineV8Version;

let SPECIES = wellKnownSymbol$1('species');

let arrayMethodHasSpeciesSupport$1 = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return (
    V8_VERSION$1 >= 51 ||
    !fails$2(function () {
      let array = [];
      let constructor = (array.constructor = {});
      constructor[SPECIES] = function () {
        return { foo: 1 };
      };
      return array[METHOD_NAME](Boolean).foo !== 1;
    })
  );
};

let $$2 = _export;
let global$1 = global$q;
let fails$1 = fails$c;
let isArray = isArray$3;
let isObject$1 = isObject$9;
let toObject$1 = toObject$5;
let lengthOfArrayLike = lengthOfArrayLike$4;
let createProperty = createProperty$2;
let arraySpeciesCreate = arraySpeciesCreate$2;
let arrayMethodHasSpeciesSupport = arrayMethodHasSpeciesSupport$1;
let wellKnownSymbol = wellKnownSymbol$9;
let V8_VERSION = engineV8Version;

let IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
let MAX_SAFE_INTEGER = 0x1fffffffffffff;
let MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';
let TypeError$1 = global$1.TypeError;

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
let IS_CONCAT_SPREADABLE_SUPPORT =
  V8_VERSION >= 51 ||
  !fails$1(function () {
    let array = [];
    array[IS_CONCAT_SPREADABLE] = false;
    return array.concat()[0] !== array;
  });

let SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

let isConcatSpreadable = function (O) {
  if (!isObject$1(O)) {
    return false;
  }
  let spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? Boolean(spreadable) : isArray(O);
};

let FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$$2(
  { target: 'Array', proto: true, forced: FORCED },
  {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    concat: function concat(arg) {
      let O = toObject$1(this);
      let A = arraySpeciesCreate(O, 0);
      let n = 0;
      let i, k, length, len, E;
      for (i = -1, length = arguments.length; i < length; i++) {
        E = i === -1 ? O : arguments[i];
        if (isConcatSpreadable(E)) {
          len = lengthOfArrayLike(E);
          if (n + len > MAX_SAFE_INTEGER) {
            throw TypeError$1(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
          }
          for (k = 0; k < len; k++, n++) {
            if (k in E) {
              createProperty(A, n, E[k]);
            }
          }
        } else {
          if (n >= MAX_SAFE_INTEGER) {
            throw TypeError$1(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
          }
          createProperty(A, n++, E);
        }
      }
      A.length = n;
      return A;
    },
  }
);

let entryVirtual = entryVirtual$2;

let concat$4 = entryVirtual('Array').concat;

let isPrototypeOf = objectIsPrototypeOf;
let method = concat$4;

let ArrayPrototype = Array.prototype;

let concat$3 = function (it) {
  let own = it.concat;
  return it === ArrayPrototype || (isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.concat) ? method : own;
};

let parent$2 = concat$3;

let concat$2 = parent$2;

let concat$1 = concat$2;

let isObject = isObject$9;

let { floor } = Math;

// `IsIntegralNumber` abstract operation
// https://tc39.es/ecma262/#sec-isintegralnumber
// eslint-disable-next-line es/no-number-isinteger -- safe
let isIntegralNumber$1 =
  Number.isInteger ||
  function isInteger(it) {
    return !isObject(it) && isFinite(it) && floor(it) === it;
  };

let $$1 = _export;
let isIntegralNumber = isIntegralNumber$1;

let { abs } = Math;

// `Number.isSafeInteger` method
// https://tc39.es/ecma262/#sec-number.issafeinteger
$$1(
  { target: 'Number', stat: true },
  {
    isSafeInteger: function isSafeInteger(number) {
      return isIntegralNumber(number) && abs(number) <= 0x1fffffffffffff;
    },
  }
);

let path$1 = path$7;

let isSafeInteger$2 = path$1.Number.isSafeInteger;

let parent$1 = isSafeInteger$2;

let isSafeInteger$1 = parent$1;

let isSafeInteger = isSafeInteger$1;

let DESCRIPTORS = descriptors;
let uncurryThis = functionUncurryThis;
let call = functionCall;
let fails = fails$c;
let objectKeys = objectKeys$3;
let getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
let propertyIsEnumerableModule = objectPropertyIsEnumerable;
let toObject = toObject$5;
let IndexedObject = indexedObject;

// eslint-disable-next-line es/no-object-assign -- safe
let $assign = Object.assign;
// eslint-disable-next-line es/no-object-defineproperty -- required for testing
let { defineProperty } = Object;
let concat = uncurryThis([].concat);

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
let objectAssign =
  !$assign ||
  fails(function () {
    // should have correct order of operations (Edge bug)
    if (
      DESCRIPTORS &&
      $assign(
        { b: 1 },
        $assign(
          defineProperty({}, 'a', {
            enumerable: true,
            get() {
              defineProperty(this, 'b', {
                value: 3,
                enumerable: false,
              });
            },
          }),
          { b: 2 }
        )
      ).b !== 1
    ) {
      return true;
    }
    // should work with symbols and should have deterministic property order (V8 bug)
    let A = {};
    let B = {};
    // eslint-disable-next-line es/no-symbol -- safe
    let symbol = Symbol();
    let alphabet = 'abcdefghijklmnopqrst';
    A[symbol] = 7;
    alphabet.split('').forEach(function (chr) {
      B[chr] = chr;
    });
    return $assign({}, A)[symbol] != 7 || objectKeys($assign({}, B)).join('') != alphabet;
  }) ?
    function assign(target, source) {
      // eslint-disable-line no-unused-vars -- required for `.length`
      let T = toObject(target);
      let argumentsLength = arguments.length;
      let index = 1;
      let getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
      let propertyIsEnumerable = propertyIsEnumerableModule.f;
      while (argumentsLength > index) {
        let S = IndexedObject(arguments[index++]);
        let keys = getOwnPropertySymbols ? concat(objectKeys(S), getOwnPropertySymbols(S)) : objectKeys(S);
        let { length } = keys;
        let j = 0;
        var key;
        while (length > j) {
          key = keys[j++];
          if (!DESCRIPTORS || call(propertyIsEnumerable, S, key)) {
            T[key] = S[key];
          }
        }
      }
      return T;
    } :
    $assign;

let $ = _export;
let assign$3 = objectAssign;

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
// eslint-disable-next-line es/no-object-assign -- required for testing
$(
  { target: 'Object', stat: true, forced: Object.assign !== assign$3 },
  {
    assign: assign$3,
  }
);

let path = path$7;

let assign$2 = path.Object.assign;

let parent = assign$2;

let assign$1 = parent;

let assign = assign$1;

const BASE_CLASS_PREFIX = 'semi';

let classnames = { exports: {} };

/* !
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/

(function (module) {
  /* global define */

  (function () {
    let hasOwn = {}.hasOwnProperty;

    function classNames() {
      let classes = [];

      for (let i = 0; i < arguments.length; i++) {
        let arg = arguments[i];
        if (!arg) {
          continue;
        }

        let argType = typeof arg;

        if (argType === 'string' || argType === 'number') {
          classes.push(arg);
        } else if (Array.isArray(arg)) {
          if (arg.length) {
            let inner = classNames.apply(null, arg);
            if (inner) {
              classes.push(inner);
            }
          }
        } else if (argType === 'object') {
          if (arg.toString === Object.prototype.toString) {
            for (let key in arg) {
              if (hasOwn.call(arg, key) && arg[key]) {
                classes.push(key);
              }
            }
          } else {
            classes.push(arg.toString());
          }
        }
      }

      return classes.join(' ');
    }

    if (module.exports) {
      classNames.default = classNames;
      module.exports = classNames;
    } else {
      window.classNames = classNames;
    }
  })();
})(classnames);

let cls = classnames.exports;

let __rest =
  (undefined && undefined.__rest) ||
  function (s, e) {
    let t = {};

    for (var p in s) {
      if (Object.prototype.hasOwnProperty.call(s, p) && indexOf$1(e).call(e, p) < 0) {
        t[p] = s[p];
      }
    }

    if (s != null && typeof getOwnPropertySymbols === 'function') {
      for (var i = 0, p = getOwnPropertySymbols(s); i < p.length; i++) {
        if (indexOf$1(e).call(e, p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) {
          t[p[i]] = s[p[i]];
        }
      }
    }
    return t;
  };
const Icon = /* #__PURE__*/ React__default.forwardRef((props, ref) => {
  let _context;

  const { svg, spin = false, rotate, style, className, prefixCls = BASE_CLASS_PREFIX, type, size = 'default' } = props;
  const restProps = __rest(props, ['svg', 'spin', 'rotate', 'style', 'className', 'prefixCls', 'type', 'size']);

  const classes = cls(
    ''.concat(prefixCls, '-icon'),
    {
      [''.concat(prefixCls, '-icon-extra-small')]: size === 'extra-small',
      [''.concat(prefixCls, '-icon-small')]: size === 'small',
      [''.concat(prefixCls, '-icon-default')]: size === 'default',
      [''.concat(prefixCls, '-icon-large')]: size === 'large',
      [''.concat(prefixCls, '-icon-extra-large')]: size === 'extra-large',
      [''.concat(prefixCls, '-icon-spinning')]: spin === true,
      [concat$1((_context = ''.concat(prefixCls, '-icon-'))).call(_context, type)]: Boolean(type),
    },
    className
  );
  const outerStyle = {};

  if (isSafeInteger(rotate)) {
    outerStyle.transform = 'rotate('.concat(rotate, 'deg)');
  }

  assign(outerStyle, style);

  return /* #__PURE__*/ React__default.createElement(
    'span',
    assign(
      {
        role: 'img',
        ref,
        className: classes,
        style: outerStyle,
      },
      restProps
    ),
    svg
  );
}); // @ts-ignore used to judge whether it is a semi-icon in semi-ui
// custom icon case

Icon.elementType = 'Icon';

const convertIcon = (Svg, iconType) => {
  const InnerIcon = /* #__PURE__*/ React__default.forwardRef((props, ref) =>
    /* #__PURE__*/ React__default.createElement(
      Icon,
      assign(
        {
          svg: /* #__PURE__*/ React__default.createElement(Svg),
          type: iconType,
          ref,
        },
        props
      )
    )
  ); // @ts-ignore used to judge whether it is a semi-icon in semi-ui
  // builtin icon case

  InnerIcon.elementType = 'Icon';
  return InnerIcon;
};

function SvgComponent$5(props) {
  return /* #__PURE__*/ React.createElement(
    'svg',
    assign(
      {
        viewBox: '0 0 24 24',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
        width: '1em',
        height: '1em',
        focusable: false,
        'aria-hidden': true,
      },
      props
    ),
    /* #__PURE__*/ React.createElement('path', {
      d: 'M12 18.0362C12 18.8535 11.0728 19.3257 10.4118 18.845L2.11202 12.8087C1.56292 12.4094 1.56292 11.5906 2.11202 11.1913L10.4118 5.15502C11.0728 4.67432 12 5.14647 12 5.96376V18.0362Z',
      fill: 'currentColor',
    }),
    /* #__PURE__*/ React.createElement('path', {
      d: 'M23 18.0362C23 18.8535 22.0728 19.3257 21.4118 18.845L13.112 12.8087C12.5629 12.4094 12.5629 11.5906 13.112 11.1913L21.4118 5.15502C22.0728 4.67432 23 5.14647 23 5.96376V18.0362Z',
      fill: 'currentColor',
    })
  );
}

const IconComponent$5 = convertIcon(SvgComponent$5, 'backward');
let IconBackward = IconComponent$5;

function SvgComponent$4(props) {
  return /* #__PURE__*/ React.createElement(
    'svg',
    assign(
      {
        viewBox: '0 0 24 24',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
        width: '1em',
        height: '1em',
        focusable: false,
        'aria-hidden': true,
      },
      props
    ),
    /* #__PURE__*/ React.createElement('path', {
      d: 'M1 5.96376C1 5.14647 1.9272 4.67432 2.58817 5.15502L10.888 11.1913C11.4371 11.5906 11.4371 12.4094 10.888 12.8087L2.58817 18.845C1.9272 19.3257 1 18.8535 1 18.0362V5.96376Z',
      fill: 'currentColor',
    }),
    /* #__PURE__*/ React.createElement('path', {
      d: 'M12 5.96376C12 5.14647 12.9272 4.67432 13.5882 5.15502L21.888 11.1913C22.4371 11.5906 22.4371 12.4094 21.888 12.8087L13.5882 18.845C12.9272 19.3257 12 18.8535 12 18.0362V5.96376Z',
      fill: 'currentColor',
    })
  );
}

const IconComponent$4 = convertIcon(SvgComponent$4, 'fast_forward');
let IconFastForward = IconComponent$4;

function SvgComponent$3(props) {
  return /* #__PURE__*/ React.createElement(
    'svg',
    assign(
      {
        viewBox: '0 0 24 24',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
        width: '1em',
        height: '1em',
        focusable: false,
        'aria-hidden': true,
      },
      props
    ),
    /* #__PURE__*/ React.createElement('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M12 2C8.41015 2 5.5 4.91015 5.5 8.5V10H5C3.89543 10 3 10.8954 3 12V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V12C21 10.8954 20.1046 10 19 10H18.5V8.5C18.5 4.91015 15.5899 2 12 2ZM15.5 10V8.5C15.5 6.567 13.933 5 12 5C10.067 5 8.5 6.567 8.5 8.5V10H15.5Z',
      fill: 'currentColor',
    })
  );
}

const IconComponent$3 = convertIcon(SvgComponent$3, 'lock');
let IconLock = IconComponent$3;

function SvgComponent$2(props) {
  return /* #__PURE__*/ React.createElement(
    'svg',
    assign(
      {
        viewBox: '0 0 24 24',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
        width: '1em',
        height: '1em',
        focusable: false,
        'aria-hidden': true,
      },
      props
    ),
    /* #__PURE__*/ React.createElement('path', {
      d: 'M4.5 4.75C4.5 3.23122 5.73122 2 7.25 2C8.76878 2 10 3.23122 10 4.75V19.25C10 20.7688 8.76878 22 7.25 22C5.73122 22 4.5 20.7688 4.5 19.25V4.75Z',
      fill: 'currentColor',
    }),
    /* #__PURE__*/ React.createElement('path', {
      d: 'M14 4.75C14 3.23122 15.2312 2 16.75 2C18.2688 2 19.5 3.23122 19.5 4.75V19.25C19.5 20.7688 18.2688 22 16.75 22C15.2312 22 14 20.7688 14 19.25V4.75Z',
      fill: 'currentColor',
    })
  );
}

const IconComponent$2 = convertIcon(SvgComponent$2, 'pause');
let IconPause = IconComponent$2;

function SvgComponent$1(props) {
  return /* #__PURE__*/ React.createElement(
    'svg',
    assign(
      {
        viewBox: '0 0 24 24',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
        width: '1em',
        height: '1em',
        focusable: false,
        'aria-hidden': true,
      },
      props
    ),
    /* #__PURE__*/ React.createElement('path', {
      d: 'M5 2.90101C5 2.09583 5.90303 1.62081 6.56653 2.07697L19.8014 11.1759C20.3794 11.5733 20.3794 12.4267 19.8014 12.824L6.56653 21.923C5.90303 22.3792 5 21.9041 5 21.0989V2.90101Z',
      fill: 'currentColor',
    })
  );
}

const IconComponent$1 = convertIcon(SvgComponent$1, 'play');
let IconPlay = IconComponent$1;

function SvgComponent(props) {
  return /* #__PURE__*/ React.createElement(
    'svg',
    assign(
      {
        viewBox: '0 0 24 24',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
        width: '1em',
        height: '1em',
        focusable: false,
        'aria-hidden': true,
      },
      props
    ),
    /* #__PURE__*/ React.createElement('path', {
      d: 'M5.5 7.5C5.5 3.91015 8.41015 1 12 1C15.4216 1 18.2257 3.64378 18.4811 7H15.4646C15.2219 5.30385 13.7632 4 12 4C10.067 4 8.5 5.567 8.5 7.5V10H19C20.1046 10 21 10.8954 21 12V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V12C3 10.8954 3.89543 10 5 10H5.5V7.5Z',
      fill: 'currentColor',
    })
  );
}

const IconComponent = convertIcon(SvgComponent, 'unlock');
let IconUnlock = IconComponent;

// * 音频播放错误提示
const audioErrorMsg = {
  1: '用户终止获取过程',
  2: '下载时发生错误',
  3: '解码时发生错误',
  4: '请检查音频路径是否正确',
};
const AudioControl = React__default.forwardRef((props, forwardRef) => {
  const [show, setShow] = useState(false);
  const [lock, setLock] = useState(false);
  const [audioDuration, setAudioDuration] = useState(0);
  const [audioCurrentTime, setAudioCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [tipsTime, setTipsTime] = useState('');
  const [tipsOffset, setTipsOffset] = useState(0);
  const [speedList] = useState([2.0, 1.5, 1.25, 1.0, 0.75, 0.5]);
  const [currentSpeed, setCurrentSpeed] = useState(1.0);
  const [isHover, setIsHover] = useState(false);
  const [haveError, setHaveError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [isDrop, setIsDrop] = useState(false);
  const [isSliderHover, setIsSliderHover] = useState(false);
  let audio = useRef(null);
  let slider = useRef(null);
  const formatTimer = useCallback(timer => {
    const minute = `${Math.floor(timer / 60)}`.padStart(2, '0');
    const seconds = `${Math.floor(timer % 60)}`.padStart(2, '0');
    return `${minute}:${seconds}`;
  }, []);
  useEffect(() => {
    const { current } = audio;
    if (current) {
      current.playbackRate = currentSpeed;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSpeed]);
  useEffect(() => {
    setIsPlaying(false);
    const { current } = audio;
    if (current) {
      current.playbackRate = currentSpeed;
      setAudioDuration(0);
      setAudioCurrentTime(0);
    }
    if (!props.src) {
      setErrorMsg('请先设置播放路径');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.src]);
  // * 显示播放器
  useEffect(() => {
    if (props.show) {
      const { isShow } = props;
      if (isShow) {
        isShow(true);
      }
      setShow(true);
      setLock(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.show]);
  useEffect(() => {
    document.onmouseup = () => {
      document.onmousemove = null;
      setIsDrop(false);
      if (audio.current) {
        const audioEle = audio.current;
        audioEle.play();
      }
    };
    document.onmousemove = e => {
      const sliderDom = slider.current;
      if (sliderDom && (isDrop || isSliderHover)) {
        // console.log('123', isDrop, isSliderHover);
        const { clientX } = e;
        const { width, left } = sliderDom.getBoundingClientRect();
        let offsetX = clientX - left;
        if (offsetX < 0) {
          offsetX = 0;
        } else if (offsetX > width) {
          offsetX = width;
        }
        const time = (offsetX / width) * audioDuration;
        setTipsTime(time);
        setTipsOffset(offsetX);
        if (isDrop) {
          if (audio.current) {
            const audioEle = audio.current;
            audioEle.pause();
            audioEle.currentTime = time;
          }
        }
      }
    };
  }, [slider, isDrop, audioDuration, isSliderHover]);
  return React__default.createElement(
    'div',
    {
      className: [style.AudioControl, show ? style.show : ''].join(' '),
      onMouseEnter: () => {
        setShow(true);
        const { isShow } = props;
        if (isShow) {
          isShow(true);
        }
      },
      onMouseLeave: () => {
        if (!lock) {
          setTimeout(() => {
            setShow(false);
            const { isShow } = props;
            if (isShow) {
              isShow(false);
            }
          }, 1500);
        }
      },
    },
    React__default.createElement('audio', {
      ref: r => {
        if (forwardRef) {
          forwardRef.current = r;
        }
        audio.current = r;
      },
      src: props.src,
      onError: ({ nativeEvent: { target } }) => {
        console.log(target);
        const { code } = target.error;
        setErrorMsg(audioErrorMsg[code] || '未知错误！');
        setHaveError(true);
      },
      autoPlay: true,
      onPlay: () => {
        setIsPlaying(true);
      },
      onPause: () => {
        setIsPlaying(false);
      },
      onCanPlay: e => {
        const { duration } = e.target;
        setAudioDuration(Math.floor(duration));
        setErrorMsg('');
        setHaveError(false);
      },
      onTimeUpdate: e => {
        const { currentTime } = e.target;
        setAudioCurrentTime(Math.floor(currentTime));
      },
      onEnded: () => {
        const { ended } = props;
        if (ended) {
          ended();
        }
      },
    }),
    React__default.createElement(
      'span',
      {
        className: style.showAudioControl,
        onClick: () => {
          setLock(!lock);
        },
      },
      lock ?
        React__default.createElement(IconLock, { size: 'large' }) :
        React__default.createElement(IconUnlock, { size: 'large' })
    ),
    React__default.createElement(
      'div',
      { className: [style.control, errorMsg ? style.error : ''].join(' '), 'data-errmsg': errorMsg },
      React__default.createElement(
        'div',
        { className: style.leftContent },
        React__default.createElement(IconBackward, {
          onClick: () => {
            const { current } = audio;
            if (current) {
              const { currentTime } = current;
              current.currentTime = currentTime - 5;
            }
          },
        }),
        React__default.createElement(
          'div',
          { className: style.play_pause },
          isPlaying ?
            React__default.createElement(IconPause, {
              size: 'large',
              onClick: () => {
                const { current } = audio;
                if (current) {
                  if (!current.paused) {
                    current.pause();
                  }
                }
              },
            }) :
            React__default.createElement(IconPlay, {
              size: 'large',
              onClick: () => {
                const { current } = audio;
                if (current) {
                  if (current.paused) {
                    if (haveError) {
                      const { error } = props;
                      const { error: errorEvent } = current;
                      if (error) {
                        const { code } = errorEvent;
                        error(errorEvent, audioErrorMsg[code]);
                      }
                      return;
                    }
                    current.play();
                  }
                }
              },
            })
        ),
        React__default.createElement(IconFastForward, {
          onClick: () => {
            const { current } = audio;
            if (current) {
              const { currentTime } = current;
              current.currentTime = currentTime + 5;
            }
          },
        })
      ),
      React__default.createElement(
        'div',
        { className: style.rightContent },
        React__default.createElement(
          'div',
          {
            className: [style.slide, isSliderHover || isDrop ? style.hover : ''].join(' '),
            ref: slider,
            style: { '--val': `${(audioCurrentTime / audioDuration) * 100}%` },
            onClick: e => {
              const { target } = e;
              const { offsetX } = e.nativeEvent;
              const { width } = target.getBoundingClientRect();
              const time = (offsetX / width) * audioDuration;
              const audioEle = audio.current;
              if (audio.current) {
                audioEle.currentTime = time;
              }
            },
            onMouseDown: () => {
              setIsDrop(true);
            },
            onMouseEnter: () => {
              setIsSliderHover(true);
            },
            onMouseLeave: () => {
              setIsSliderHover(false);
            },
          },
          isDrop || isSliderHover ?
            React__default.createElement(
              'div',
              { className: style.Tips, style: { left: `${tipsOffset}px` } },
              formatTimer(tipsTime)
            ) :
            React__default.createElement(React__default.Fragment, null),
          React__default.createElement('div', { className: style.sliderBar })
        ),
        React__default.createElement(
          'div',
          { className: style.timer_box },
          React__default.createElement(
            'span',
            { className: style.timer },
            formatTimer(audioCurrentTime),
            ':',
            formatTimer(audioDuration)
          )
        ),
        React__default.createElement(
          'div',
          {
            className: [style.double_speed, isHover ? style.hover : ''].join(' '),
            onMouseEnter: () => {
              setIsHover(true);
            },
            onMouseLeave: () => {
              setIsHover(false);
            },
          },
          currentSpeed,
          'x',
          React__default.createElement(
            'div',
            { className: style.speed_list },
            speedList.map((v, i) =>
              React__default.createElement(
                'div',
                {
                  key: i,
                  className: [style.speed_item, currentSpeed === v ? style.active : ''].join(' '),
                  onClick: () => {
                    setCurrentSpeed(v);
                    setIsHover(false);
                  },
                },
                v,
                'x'
              )
            )
          )
        )
      )
    )
  );
});

export { AudioControl as default };
