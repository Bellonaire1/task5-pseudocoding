// Library: Express
// Version: 5.2.1
// Original file path: lib/application.js
// Function name: app.use

var slice = Array.prototype.slice;
var flatten = Array.prototype.flat;

app.use = function use(fn) {
  var offset = 0;
  var path = '/';

  if (typeof fn !== 'function') {
    var arg = fn;

    while (Array.isArray(arg) && arg.length !== 0) {
      arg = arg[0];
    }

    if (typeof arg !== 'function') {
      offset = 1;
      path = fn;
    }
  }

  var fns = flatten.call(slice.call(arguments, offset), Infinity);

  if (fns.length === 0) {
    throw new TypeError('app.use() requires a middleware function')
  }

  var router = this.router;

  fns.forEach(function (fn) {
    if (!fn || !fn.handle || !fn.set) {
      return router.use(path, fn);
    }

    debug('.use app under %s', path);
    fn.mountpath = path;
    fn.parent = this;

    router.use(path, function mounted_app(req, res, next) {
      var orig = req.app;
      fn.handle(req, res, function (err) {
        Object.setPrototypeOf(req, orig.request)
        Object.setPrototypeOf(res, orig.response)
        next(err);
      });
    });

    fn.emit('mount', this);
  }, this);

  return this;
};
