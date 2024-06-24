//Fetch teste 01 Estudando as Promises

//const req = fetch('https://pokeapi.co/api/v2/pokemon/ditto')
//console.log(req);

// Fetch teste 02 Resolvendo a Promise
//fetch('https://pokeapi.co/api/v2/pokemon/ditto')
//.then(resp => console.log(resp))
//.catch(error => console.log(error));

//Fetch Teste 03 convertendo a resposta em JSON
//fetch('https://pokeapi.co/api/v2/pokemon/ditto')
//.then(resp => resp.json())
//.then(data => console.log(data))
//.catch(error => console.log(error));

// Fetch teste 04 acessando informacoes via ID
//fetch('https://pokeapi.co/api/v2/pokemon/ditto')
//.then(resp => resp.json())
//.then(data => console.log(data))
//.catch(error => console.log(error));

// Fetch teste 05 utilizando o try catch
async function fetchPokemon(){
    try {
        const resp = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')     
            if(resp.ok){
                throw new error('pokemom não encontrado');
            } else{
                const data = await resp.json();
                console.log(data);
            }
    } catch (error) {
       console.log(error); 
    }
}

fetchPokemon();