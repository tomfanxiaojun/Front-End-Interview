'use strict';

/**
 * Expose compositor.
 */

module.exports = compose;

/**
 * Compose `middleware` returning
 * a fully valid middleware comprised
 * of all those which are passed.
 * 1，compose 传入一个中间件数组
 * 2，返回一个
 * @param {Array} middleware
 * @return {Function}
 * @api public
 */

function compose(middleware) {
  if (!Array.isArray(middleware)) throw new TypeError('Middleware stack must be an array!')
  for (const fn of middleware) {
    if (typeof fn !== 'function') throw new TypeError('Middleware must be composed of functions!')
  }

  /**
   * @param {Object} context
   * @return {Promise}
   * @api public
   */

  return function(context, next) {
    // last called middleware #
    let index = -1;
    return dispatch(0); // 自执行第一个中间件
    function dispatch(i) {
      if (i <= index) return Promise.reject(new Error('next() called multiple times'));
      index = i;
      let fn = middleware[i];
      if (i === middleware.length) fn = next;
      // 如果是最后一个中间件，就直接resolve,
      if (!fn) return Promise.resolve();
      try {
        // 最重要的逻辑， dispatch.bind(null, i + 1) 相当于next,下一个要执行的中间件
        // 将上下文context 作为第一个参数，传递给中间件，中间件数组中得下一个中间件，
        // 作为第二个参数，就是next.
        return Promise.resolve(fn(context, dispatch.bind(null, i + 1)));
      } catch (err) {
        return Promise.reject(err);
      }
    }
  };
}
