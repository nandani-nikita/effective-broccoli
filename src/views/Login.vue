<template>
  <div>
    <h1>Login Page</h1>
    <form @submit.prevent="login">
      <input type="text" v-model="username" placeholder="Username" required>
      <input type="password" v-model="password" placeholder="Password" required>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'LoginPage',
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    ...mapActions(['loginUser']),
    async login() {
      const loginUser = await this.loginUser({ username: this.username, password: this.password });
      if(loginUser) {
        this.$router.push('/dashboard');
      } else {
        console.log(loginUser);
      }

      // this.loginUser({ username: this.username, password: this.password })
      //   .then(() => {
      //     // Login successful, redirect to dashboard or desired page
      //     this.$router.push('/dashboard');
      //   })
      //   .catch((error) => {
      //     // Handle login error
      //     console.error('Login failed:', error);
      //   });
    },
  },
};
</script>

<style scoped>
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
}

.login form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

.login input {
  margin-bottom: 10px;
  padding: 5px;
  width: 200px;
}

.login button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
}
</style>