function justInvoke(fn) {
  return fn();
}

function setThisWithCall(fn, name) {
  return fn.call(name);
}

function setThisWithApply(fn, name, names) {
  return fn.apply(name, names);
}

function returnNewFunctionOf(fn, obj) {
  return fn.bind(obj)
}
