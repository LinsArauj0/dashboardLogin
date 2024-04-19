import ApiService from "../ApiService";

class BairroService extends ApiService {
    constructor() {
        super('/a/bairro');
    }

    obterBairros(cidadeId) {
        return this.get(`/?cidade_id=${cidadeId}`);
    }
}

export default BairroService;