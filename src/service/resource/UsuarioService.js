import ApiService from "../ApiService";

class UsuarioService extends ApiService {
    constructor() {
        super('/a/colaborador');
    }

    listagemUsuarios() {
        return this.get("/?text=");
    }

    detalharUsuario(usuarioId) {
        return this.get(`/${usuarioId}/`);
    }

    criarUsuario(usuario) {
        return this.post("/", usuario);
    }

    usuarioAutenticado() {
        const token = localStorage.getItem("Token");
        if (token) {
            return true;
        } else {
            return false;
        }
    }
}

export default UsuarioService;