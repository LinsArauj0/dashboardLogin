<template>
  <div class="cadastrar-users ">
    <form class="col-lg-11 w-100" @submit.prevent="saveUser">
      <div class="d-flex row p-3">
        <div class="info">
          <span>Dados Básicos</span>
        </div>
        <div class="box-input mt-3">
          <div class="d-flex row">
            <div class="user-avatar col-lg-4">
              <img />
              <i class="bi bi-camera-fill"> </i>
            </div>
            <div class="row col-12 col-md-12 col-lg-8 ">
              <InputForm :label="'Nome'" type="text" :is-required="true" v-model="usuario.nome" name='name' />
              <InputForm :label="'Nome da Mãe'" type="text" v-model="usuario.nome_mae" />
              <InputForm :label="'Nome do Pai'" type="text" v-model="usuario.nome_pai" />
            </div>
          </div>
          <div class="d-flex row col-12 col-md-12 col-lg-12 mt-3">
            <InputForm class="col-12 col-lg-3" :label="'CPF'" type="text" :is-required="true"
              v-model="usuario.cpf_cnpj" />

            <!-- <Option class="col-12 col-lg-3" :options="estadoCivilOptions" label="Estado Civil"
              v-model="usuario.estado_civil" :is-required="true" /> -->
            <div class="col-12 col-lg-2 mt-2">
            <div class="form-group">
              <label for="estadoCivilOptions">Estado Civil</label>
              <select class="form-control" id="estadoCivilOptions" v-model="usuario.estado_civil"
                :required="isRequired">
                <option v-for="(estadoCivilOptions, index) in estadoCivilOptions" :key="index" :value="estadoCivilOptions">{{ estadoCivilOptions }}
                </option>
              </select>
            </div>
          </div>
            
            <InputForm class="col-12 col-lg-3" :label="'Data de Nascimento'" type="date" :is-required="true"
              v-model="usuario.data_nascimento" />
            <InputForm class="col-12 col-lg-3" :label="'Apelido'" type="text" v-model="usuario.apelido" />
          </div>
        </div>
        <div class="info mt-4">
          <span>Dados Complementares</span>
        </div>
        <div class="d-flex row col-12 col-md-12 col-lg-12 mt-3">

          <!-- <Option class="col-12 col-lg-4" :options="perfilOptions" label="Perfil" v-model="usuario.perfil"
            :is-required="true" />-->
            <div class="col-12 col-lg-4">
            <div class="form-group">
              <label for="usuario">Perfil</label>
              <select class="form-control" id="usuario" v-model="usuario.perfil"
                :required="isRequired">
                <option v-for="(usuario, index) in usuario" :key="index" :value="perfil">{{ perfil }}
                </option>
              </select>
            </div>
          </div>

          <InputForm class="col-12 col-lg-4" :label="'Função'" type="text" v-model="usuario.funcao" />
          <InputForm class="col-12 col-lg-4" :label="'Naturalidade'" type="data" v-model="usuario.naturalidade" />
          <InputForm class="col-12 col-lg-6 mt-2" :label="'Chave Pix'" type="text" v-model="usuario.pix_key" />
        </div>
        <div class="info mt-4">
          <span>Horário de Trabalho</span>
        </div>
        <div class="d-flex justify-content-between row col-12 col-md-12 col-lg-12">
          <div class="col-lg-5 row">
            <h5 class="mt-3">Dias da semana</h5>
            <InputForm class="col-6 mt-2" :label="'Início'" type="time"
              v-model="usuario.horario_colaborador.dia_util_inicio_manha" />
            <InputForm class="col-6 mt-2" :label="'Fim'" type="time"
              v-model="usuario.horario_colaborador.dia_util_fim_manha" />
          </div>
          <div class="col-lg-5 row">
            <h5 class="mt-3">Sábado</h5>
            <InputForm class="col-6 mt-2" :label="'Início'" type="time"
              v-model="usuario.horario_colaborador.sabado_inicio" />
            <InputForm class="col-6 mt-2" :label="'Fim'" type="time" v-model="usuario.horario_colaborador.sabado_fim" />
          </div>
        </div>

        <div class="info mt-4">
          <span>Documentos</span>
        </div>
        <div class="d-flex row col-12 col-md-12 col-lg-12 mt-3">
          <InputForm class="col-12 col-lg-4" :label="'Número identidade'" type="text"
            v-model="usuario.numero_identidade" />
          <InputForm class="col-12 col-lg-4" :label="'Orgão Emissor identidade'" type="text"
            v-model="usuario.orgao_emissor_identidade" />

          <!-- <Option class="col-12 col-lg-4" :options="uf" label="UF identidade" v-model="usuario.uf_identidade"
            :is-required="true" /> -->
          <div class="col-12 col-lg-2 mt-2">
            <div class="form-group">
              <label for="estado">UF identidade</label>
              <select class="form-control" id="cidade" v-model="usuario.endereco_residencial.estado"
                :required="isRequired">
                <option v-for="(uf, index) in estado" :key="index" :value="uf">{{ uf }}
                </option>
              </select>
            </div>
          </div>
            
          <InputForm class="col-12 col-lg-4 mt-2" :label="'Título de eleitor'" type="text"
            v-model="usuario.numero_titulo_eleitor" />
          <InputForm class="col-12 col-lg-4 mt-2" :label="'Seção título'" type="text"
            v-model="usuario.secao_titulo_eleitor" />
          <InputForm class="col-12 col-lg-4 mt-2" :label="'Zona do título'" type="text"
            v-model="usuario.zona_titulo_eleitor" />
          <InputForm class="col-12 col-lg-3 mt-2" :label="'Carteira de trabalho'" type="text"
            v-model="usuario.numero_carteira_trabalho" />
          <InputForm class="col-12 col-lg-3 mt-2" :label="'Série carteira'" type="text"
            v-model="usuario.serie_carteira_trabalho" />
          <InputForm class="col-12 col-lg-3 mt-2" :label="'Data de emissão'" type="data"
            v-model="usuario.data_emissao_carteira_trabalho" />
          <!-- <InputForm class="col-12 col-lg-3 mt-2" :label="'UF da carteira'" type="text"
            v-model="usuario.uf_carteira_trabalho" /> -->
            <div class="col-12 col-lg-3 mt-2">
            <div class="form-group">
              <label for="estado">UF da carteira</label>
              <select class="form-control" id="cidade" v-model="usuario.endereco_residencial.estado"
                :required="isRequired">
                <option v-for="(uf, index) in estado" :key="index" :value="uf">{{ uf }}
                </option>
              </select>
            </div>
          </div>
        </div>

        <div class="info mt-4">
          <span>Endereço</span>
        </div>
        <div class="d-flex row col-12 col-md-12 col-lg-12 mt-3">
          <InputForm class="col-12 col-lg-4 " :label="'CEP'" :type="text" :is-required="true"
            v-model="usuario.endereco_residencial.cep" />
          <div class="col-lg-8 d-flex align-items-end"><a class="d-flex align-items-bottom maps">maps</a></div>
          <InputForm class="col-12 col-lg-9 mt-2" :label="'Logradouro'" type="text" :is-required="true"
            v-model="usuario.endereco_residencial.logradouro" />
          <InputForm class="col-12 col-lg-3 mt-2" :label="'Número'" type="text" :is-required="true"
            v-model="usuario.endereco_residencial.numero" />

          <!-- Deletar os OPTION -->
          <!-- <Option class="col-12 col-lg-2 " :options="uf" label="UF" v-model="usuario.endereco_residencial.estado"
            :is-required="true" /> -->
            
            <!-- Objeto Option -->
          <div class="col-12 col-lg-2 mt-2">
            <div class="form-group">
              <label for="estado">UF</label>
              <select class="form-control" id="cidade" v-model="usuario.endereco_residencial.estado"
                :required="isRequired">
                <option v-for="(uf, index) in estado" :key="index" :value="uf">{{ uf }}
                </option>
              </select>
            </div>
          </div>

          <div class="col-12 col-lg-4 mt-2">
            <div class="form-group">
              <label for="cidade">Cidade</label>
              <select class="form-control" id="cidade" v-model="usuario.endereco_residencial.cidade"
                :required="isRequired">
                <option v-for="(cidade, index) in cidade" :key="index" :value="cidade.id">{{ cidade.nome }}
                </option>
              </select>
            </div>
          </div>

          <div class="col-12 col-lg-5 mt-2">
            <div class="form-group">
              <label for="bairro">Bairro</label>
              <select class="form-control" id="bairro" v-model="usuario.endereco_residencial.bairro"
                :required="isRequired">
                <option v-for="(bairro, index) in bairro" :key="index" :value="bairro.id">{{ bairro.nome }}
                </option>
              </select>
            </div>
          </div>

          <InputForm class="col-12 col-lg-6 mt-2" :label="'Referência'" type="text"
            v-model="usuario.endereco_residencial.referencia" />
          <InputForm class="col-12 col-lg-6 mt-2" :label="'Complemento'" type="text"
            v-model="usuario.endereco_residencial.complemento" />
        </div>

        <div class="info mt-4">
          <span>Contato</span>
        </div>
        <div class="d-flex row col-12 col-md-12 col-lg-12 mt-3">
          <InputForm class="col-12 col-lg-6" :label="'Telefone'" type="tel" :is-required="true"
            v-model="usuario.telefone" />
          <InputForm class="col-12 col-lg-6" :label="'E-mail'" type="email" :is-required="true"
            v-model="usuario.email" />
        </div>
      </div>
      <div class="d-flex justify-content-end p-4">
        <button class="btn btn-secondary mx-2" @click="cancel" autofocus>Cancelar</button>
        <button class="btn btn-primary" @click="saveUser" type="submit" autofocus>Salvar</button>
      </div>
    </form>
  </div>
</template>

<script>
import InputForm from "@/components/input/input.vue";

import UsuarioService from "@/service/resource/UsuarioService";
import CidadeService from "@/service/resource/cidadeService";
import BairroService from "@/service/resource/bairroService";

export default {
  name: "UsuarioCadastro",
  components: {
    InputForm,
 
  },
  data() {
    return {
      usuario: {
        endereco_residencial: {
          cep: "",
          cidade: "",
          bairro: "",
          logradouro: "",
          numero: "",
          complemento: "",
          referencia: ""
        },
        estado_civil: "",
        naturalidade: "",
        nome_pai: "",
        nome_mae: "",
        numero_identidade: "",
        orgao_emissor_identidade: "",
        uf_identidade: "",
        numero_titulo_eleitor: "",
        secao_titulo_eleitor: "",
        zona_titulo_eleitor: "",
        numero_carteira_trabalho: "",
        serie_carteira_trabalho: "",
        data_emissao_carteira_trabalho: null,
        uf_carteira_trabalho: "",
        data_admissao: null,
        data_demissao: null,
        perfil: "",
        funcao: "",
        pix_key: "",
        nome: "",
        apelido: "",
        cpf_cnpj: "",
        telefone: "",
        email: "",
        data_nascimento: "",
        horario_colaborador: {
          dia_util_inicio_manha: "",
          dia_util_fim_manha: "",
          dia_util_inicio_tarde: "",
          dia_util_fim_tarde: "",
          sabado_inicio: "",
          sabado_fim: ""
        }
      },

      estadoCivilOptions: [

      ],
      perfilOptions: [
        { label: "Admin", value: "admin" },
        { label: "Financeiro", value: "financeiro" },
        { label: "Gerente", value: "gerente" },
        { label: "Suporte", value: "suporte" },
        { label: "Marketing", value: "marketing" },

      ],
      estado: ["PI", "MA", "CE"],
      cidade: [],
      bairro: [],
    };
  },
  methods: {
    async saveUser() {
      console.log(this.usuario)
      if (this.validateForm()) {
        try {
          const usuarioService = new UsuarioService();
          await usuarioService.criarUsuario(this.usuario);
          console.log('Usuario salvo com sucesso!')
        } catch (error) {
          console.error('Erro ao salvar usuário:', error);
        }
      }

    },
    validateForm() {
      if (!this.usuario.nome || !this.usuario.cpf_cnpj) {
        alert('Preencha todos os campos obrigatórios!');
        return false;
      } else {
        return true;
      }
    },

    cancel() {
      this.clearForm();
    },
    clearForm() {
      this.usuario = {
        endereco_residencial: {
          cep: "",
          cidade: "",
          bairro: "",
          logradouro: "",
          numero: "",
          complemento: "",
          referencia: ""
        },
        estado_civil: "",
        naturalidade: "",
        nome_pai: "",
        nome_mae: "",
        numero_identidade: "",
        orgao_emissor_identidade: "",
        uf_identidade: "",
        numero_titulo_eleitor: "",
        secao_titulo_eleitor: "",
        zona_titulo_eleitor: "",
        numero_carteira_trabalho: "",
        serie_carteira_trabalho: "",
        data_emissao_carteira_trabalho: null,
        uf_carteira_trabalho: "",
        data_admissao: null,
        data_demissao: null,
        perfil: "",
        funcao: "",
        pix_key: "",
        nome: "",
        apelido: "",
        cpf_cnpj: "",
        telefone: "",
        email: "",
        data_nascimento: "",
        horario_colaborador: {
          dia_util_inicio_manha: "",
          dia_util_fim_manha: "",
          dia_util_inicio_tarde: "",
          dia_util_fim_tarde: "",
          sabado_inicio: "",
          sabado_fim: ""
        }
      }
    },

    async fetchCidades() {
      try {
        const cidadeService = new CidadeService();
        const response = await cidadeService.obterCidades();
        this.cidade = response.data
        
      } catch (error) {
        console.error('Erro ao obter cidades:', error);
      }
    },

    async obterBairros(cidadeId) {
      try {
        const bairroService = new BairroService();
        const response = await bairroService.obterBairros(cidadeId);
        this.bairro = response.data;
      } catch (error) {
        console.error('Erro ao obter cidades:', error);
      }
    },


  },
  mounted() {
    this.fetchCidades();
  },
  watch: {
    'usuario.endereco_residencial.cidade'(newValue, oldValue) {
      console.log(newValue, oldValue)
      if (newValue !== oldValue) {
        this.obterBairros(newValue);
      }
    }
  },
};
</script>

<style>
@import "./usuarios.css";
@import "../../components/SelectOption/styles.css";
</style>
