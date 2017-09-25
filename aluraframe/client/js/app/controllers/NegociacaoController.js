class NegociacaoController {

    constructor(){

        /*Criamos uma negociação */
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes();
    }

    adiciona(event) {

        event.preventDefault();
        this._listaNegociacoes.adiciona(this._criaNegociacao());
        // this._listaNegociacoes.negociacoes.push(this._criaNegociacao());//Grava a negociação no array
        this._limpaFormulario();
    }

    _criaNegociacao(){
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value);
    }


    /*Só pode ser chamado no formulario */
    _limpaFormulario(){
        this._inputData = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;

        this._inputData.focus();
    }
}


/**
 * Temos a string que esperávamos receber. Mas, além de usar o split(),
 * poderíamos utilizar o replace(). Adicionaremos uma expressão regular
 * pedindo que seja trocado o hífen de todas as ocorrências da string
 * (ou seja, global) por ,: replace(/-/g, ',').
 *
   adiciona(event) {

    event.preventDefault();

    let data = new Date(this._inputData.value.replace(/-/g, ','));
    console.log(data);


    let data = new Date(this._inputData.value.split('-'));
        console.log(data);
}

adiciona(event) {

    event.preventDefault();

    let data = new Date(...
        this._inputData.value
        .split('-')
        .map(function(item, indice) {
            if(indice == 1) {
                return item - 1;
            }
            return item;
        })
    );
    console.log(data);
}
 */