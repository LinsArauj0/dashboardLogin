<template>
  <div class="custom-container">
    <div class="custom-left-column">
      <img src="../../assets/imageLeftLogin.png" alt="image de fundo azul" />
    </div>
    <div class="custom-right-column">
      <div class="custom-form-content">
        <h2>Login</h2>
        <form @submit.prevent="login">
          <div class="custom-div-input">
            <label for="email">Email</label><br />
            <input
              type="text"
              id="email"
              v-model="credenciais.username"
              required
              autocomplete="username"
            />
          </div>
          <div class="custom-div-input">
            <label for="password">Senha</label><br />
            <input
              type="password"
              id="password"
              v-model="credenciais.password"
              required
              autocomplete="current-password"
            />
          </div>

          <div class="custom-submit">
            <div>
              <a href="#">Esqueceu a senha?</a>
            </div>
            <div>
              <button class="custom-btn-login" type="submit">Entrar</button>
            </div>
          </div>
        </form>
        <div v-if="loading" class="custom-loading-indicator"></div>
        <div v-if="errorMessage" class="custom-error-message">{{ errorMessage }}</div>
      </div>
      <div class="custom-bottom-column">
        <img src="../../assets/imageBottomLogin.png" />
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router";
import LoginService from "@/service/resource/loginService";

export default {
  name: "LoginColaborador",
  data() {
    return {
      credenciais: {
        username: "",
        password: "",
      },
      errorMessage: "",
      loading: false,
    };
  },
  methods: {
    async login() {
      const loginService = new LoginService();
      this.loading = true;

      try {
        const response = await loginService.loginColaborador(this.credenciais);

        if (response.data && response.data.token) {
          localStorage.setItem("Token", response.data.token);
          this.$router.push("/utilitarios");
        } else {
          this.errorMessage = "Credenciais inválidas. Por favor, tente novamente.";
        }
      } catch (error) {
        console.error("Erro ao fazer login:", error);
        this.errorMessage =
          "Ocorreu um erro ao processar sua solicitação. Por favor, tente novamente mais tarde.";
      }
      router.beforeEach((to, from, next) => {
        const requiredAuth = to.matched.some(record => record.meta.requiresAuth);
        const isAuthenticated = !!localStorage.getItem("Token");
  
        if(requiredAuth && !isAuthenticated) {
          next('./login');
        } else{
          next();
        }
      })
    },
  },
};
</script>

<style scoped>
@import "./login.css";
</style>
