<template>
  <div class="home">
    <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
    <mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="email"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>

<mt-field label="邮箱" state="success" v-model="email"></mt-field>
<mt-field label="邮箱" state="error" v-model="email"></mt-field>
<mt-field label="邮箱" state="warning" v-model="email"></mt-field>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {}
};
</script>
