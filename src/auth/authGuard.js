import UsuarioService from "@/service/resource/UsuarioService";

//Define proteção para rotas, caso o token não existe, ele redirecionará para login
const authGuard = (to, from, next) => {
    const usuarioService = new UsuarioService();

    if (usuarioService.usuarioAutenticado()) {
        next();
    } else {
        next({ name: 'Login' });
    }
};

export default authGuard;
