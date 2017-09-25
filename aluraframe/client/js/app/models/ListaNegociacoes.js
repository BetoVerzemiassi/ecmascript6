class ListaNegociacoes {

    constructor(){
        this._negociacoes = [];
    }

    adiciona(negociacao){
        this._negociacoes.push(negociacao);
    }

    get negociacoes(){
        return [].concat(this._negociacoes);//criamos um array em branco, mantendo os dados originais das negociações
    }
}