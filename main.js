 // Function para pegar o value do input
 function handleSubmit() {
    getValue = document.querySelector('#number').value;

    prime = isPrimer(getValue);
    document.querySelector('#showPrime').innerHTML = prime === true  ? 'Sim' : 'Não';

    factories = getPrimeFactorNumbers(Number(getValue));
    document.querySelector('#showFactories').innerHTML = factories;
 }
 
// Function para verificar se o valor é Primo
function isPrimer(number) {
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if(number % i === 0) {
            return false;
        }
    }
    return true;
}

// Function para fazer a tratativa do value com seus fatores
function getPrimeFactorNumbers(number) {
    if(typeof number === 'number' && Number.isInteger(number)) {
        if(number > 0) {
            let primers = [];
            for(let i = 2; i <= number; i++) {
                while(isPrimer(i) && number % i === 0) {
                    if(!primers.includes(i)) {
                        primers.push(i);
                    }

                    number /= i;
                }
            }

            return primers;
        } else {
            return null;

        }
    } else {
        throw TypeError('Type an integer number!');
    }
}
