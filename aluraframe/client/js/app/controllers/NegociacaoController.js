class NegociacaoController {

    constructor(){

        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }

    adiciona(event) {
        
        event.preventDefault();
        
        let data = new Date(...
            this._inputData.value
            .split('-')
            .map((item, indice) => item - indice % 2)
        );
        
        let negociacao = new Negociacao(
            data,
            this._inputQuantidade.value,
            this._inputValor.value
        );
        
        console.log(negociacao);
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