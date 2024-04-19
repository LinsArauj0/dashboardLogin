<template>
    <div class="error">
      <h1>Erro 404</h1>
      <p>A página que você está procurando não foi encontrada.</p>
      <router-link to="/">Voltar para a página inicial</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ErrorF',
  };
  </script>
  
  <style scoped>
  .error {
    width:  85%;
    margin: auto;
    align-items: center;
    text-align: center;
    margin-top: 50px;
  }
  </style>
  