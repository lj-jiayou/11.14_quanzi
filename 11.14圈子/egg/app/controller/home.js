"use strict";

const Controller = require("egg").Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = "hi, egg";
  }
  async login() {
    //登录
    const { username, password, age, pic } = this.ctx.request.body;
    const $sql = `select * from userlist where username=? and password=? age=? pic=?`;
    const $params = [username, password, age, pic];
    const result = await this.app.mysql.query($sql, $params);
    if (result.length) {
      this.ctx.status = 200;
      this.ctx.body = {
        code: 1,
        msg: "登录成功"
      };
    } else {
      this.ctx.status = 500;
      this.ctx.body = {
        code: 0,
        msg: "登录失败"
      };
    }
  }
  async del() {
    //删除
    const { id } = this.ctx.request.body;
    const $sql = `delete from userlist where id=?`;
    const $params = [id];
    const result = await this.app.mysql.query($sql, $params);
    // console.log(result)
    if (result.affectedRows > 0) {
      this.ctx.status = 200;
      this.ctx.body = {
        code: 1,
        msg: "删除成功"
      };
    } else {
      this.ctx.status = 500;
      this.ctx.body = {
        code: 0,
        msg: "删除失败"
      };
    }
  }
  async register() {
    //注册
    const { username, password, age, pic } = this.ctx.request.body;
    const $sql = `insert into userlist (username,password,age, pic) values(?,?,?,?)`;
    const $params = [username, password, age, pic];
    const result = await this.app.mysql.query($sql, $params);
    if (result.affectedRows > 0) {
      this.ctx.status = 200;
      this.ctx.body = {
        code: 1,
        msg: "插入成功"
      };
    } else {
      this.ctx.status = 500;
      this.ctx.body = {
        code: 0,
        msg: "插入失败"
      };
    }
  }
  async deit() {
    //修改
    const { username, password, age, pic, id } = this.ctx.request.body;
    const $sql = `update userlist set username=?,password=?,age=?,pic=? where id=?`;
    const $params = [username, password, age, pic, id];
    const result = await this.app.mysql.query($sql, $params);
    if (result.affectedRows > 0) {
      this.ctx.status = 200;
      this.ctx.body = {
        code: 1,
        msg: "修改成功"
      };
    } else {
      this.ctx.status = 500;
      this.ctx.body = {
        code: 0,
        msg: "修改失败"
      };
    }
  }
}

module.exports = HomeController;
