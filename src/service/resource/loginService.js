import ApiService from "../ApiService";

class LoginService extends ApiService{
    constructor(){
        super('/a/auth');
    }

    loginColaborador(crendenciais){
        return this.post("/login_colaborador/", crendenciais);
    }
}

export default LoginService;