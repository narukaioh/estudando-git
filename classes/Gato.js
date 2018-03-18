class Gato extends Animal {
	falar() {
            console.log(`${this.nome} está miando.`)
        }        
	comer(alimento) {
            console.log(`${this.nome} está comendo ${alimento}.`)
        }

    }