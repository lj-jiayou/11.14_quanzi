'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/api/login',controller.home.login)//登录
  router.post('/api/register',controller.home.register)//注册
  router.post('/api/del',controller.home.del)//删除
  router.post('/api/deit',controller.home.deit)//修改
};
