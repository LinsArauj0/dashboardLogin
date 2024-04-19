<template>
  <div class="lista-enderecos">
    <div class="cabecalho">
      <div class="barra-pesquisa">
        <div class="lupaComple">
          <img src="../../icons/lupa.png" class="lupa" />
          <img src="../../icons/lupa-item.png" class="lupaItem" />
        </div>
        <input type="search" v-model="pesquisa" @input="buscarEnderecos" placeholder="Nome e CPF" />
        <button class="btn-pesquisa" @click="visible = true"><i class="bi bi-plus"></i></button>
      </div>
    </div>
    <div v-if="usuariosFiltrados.length < 1 && !carregandoDados" class="no-results">
      <div>
        <img src="../../icons/No-results-found.png" alt="no results found" />
      </div>
      <span>Nenhum usuário encontrado</span>
    </div>
    <ul v-else>
      <li v-for="(usuario, index) in usuariosFiltrados" :key="index">
        <div class="lista-Info">
          <div class="endereco">
            <div class="subtitle">
              <p class="nome">{{ usuario.nome }} </p>
              <p class="setor">{{ usuario.perfil_str }} </p>
            </div>
            <div class="subStatus">
              <p class="status">{{ usuario.status }}</p>
            </div>
            <div class="cpf">
              <img src="../../icons/store-line.png">
              <p>{{ usuario.cpf_cnpj_formatado }}</p>
            </div>
            <div class="detalhes">
              <div class="localizacao">
                <img src="../../icons/localizacao.png" class="iconLocalizacao" />
                <img src="../../icons/centro-localizacao.png" class="icon-Localizacao" />
              </div>
              <span class="endereco-completo">{{ usuario.endereco_residencial }} {{ usuario.cidade }}</span>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <DialogBox v-model:visible="visible" modal class="col-11 col-md-11 col-lg-7" :draggable="false">
    <template #header>
      <span>Novo Usuário</span>
    </template>

    <UsuarioCadastro />
  </DialogBox>
</template>

<script setup>
import { ref, onMounted } from "vue";
import UsuarioService from '@/service/resource/UsuarioService';
import UsuarioCadastro from "../Usuarios/UsuarioCadastro.vue";

const visible = ref(false);
const usuarios = ref([]);
const pesquisa = ref('');
const usuariosFiltrados = ref([]);
const carregandoDados = ref(false);

onMounted(() => {
  listarUsuarios();
});

const listarUsuarios = () => {
  carregandoDados.value = true;
  const usuarioService = new UsuarioService();
  usuarioService.listagemUsuarios()
    .then(response => {
      usuarios.value = response.data.results;
      usuariosFiltrados.value = usuarios.value;
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    })
    .finally(() => {
      carregandoDados.value = false;
    });
};

const buscarEnderecos = () => {
  const filtro = pesquisa.value.trim().toLowerCase();
  if (filtro === '') {
    usuariosFiltrados.value = usuarios.value;
  } else {
    usuariosFiltrados.value = usuarios.value.filter(usuario => {
      return (
        usuario.nome.toLowerCase().includes(filtro) ||
        usuario.cpf_cnpj_formatado.includes(filtro)
      );
    });
  }
};
</script>

<style scoped>
@import './styles.css';
</style>
