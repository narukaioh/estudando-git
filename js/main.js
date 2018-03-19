window.onload = () => {

    function main(){
        //cria um veterinario
        let veterinario = new Veterinario()
        // cria um cachorro
        let cachorro = new Cachorro('Johnny')
        let animal = new Animal('Passarinho')
	    let gato = new Gato('Francisca')
        
        // chamando metodos e atribuindo outro valor
        cachorro.falar()
        cachorro.nome = 'Tobias'
        animal.falar()
        cachorro.falar()
        veterinario.vacinar(cachorro)
	    gato.falar()
	    gato.comer('Peixe')

    }

    main()

}
