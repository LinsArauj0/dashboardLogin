<template>
  <div id="main-user">
    <div >
      <ListEndereco />
    </div>
    <DialogBox v-model:visible="visible" modal class="col-11 col-md-11 col-lg-7" :draggable="false">
      <template #header>
        <span>Novo Usuário</span>
      </template>

      <UsuarioCadastro />

      <template #footer>
        <div class="d-flex justify-content-end p-3">
          <button class="btn btn-secondary mx-2" @click="visible = false" autofocus>Cancelar</button>
          <button class="btn btn-primary" @click="visible = false" type='submit' autofocus>Salvar</button>
        </div>
      </template>
    </DialogBox>
  </div>
</template>

<script setup>
import { ref } from "vue";

const visible = ref(false);
</script>

<script>

import UsuarioService from "@/service/resource/UsuarioService";
import ListEndereco from "../ListUsuario/ListaUser.vue";
import UsuarioCadastro from "../Usuarios/UsuarioCadastro.vue";

export default {
  name: "UsuariosV",
  components: {
    ListEndereco,
    UsuarioCadastro,
  },
}
</script>
<style>
@import "./usuarios.css";
@import "../../App.css";
</style>
