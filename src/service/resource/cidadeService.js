import ApiService from "../ApiService";

class CidadeService extends ApiService {
    constructor() {
        super('/a/cidade');
    }

    obterCidades() {
        return this.get(`/`);
    }
}

export default CidadeService;