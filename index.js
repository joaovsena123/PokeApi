async function Buscarpokemon() {
    const pokemon = document.getElementById("pokemon").value.toLowerCase().trim();
    const aviso = document.getElementById("aviso")
    if (pokemon == "") {
        alert("Digite um pokemon");
        return
    }
    aviso.hidden = false;
    const resposta = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon);
    aviso.hidden = true;
    if(!resposta.ok) {
        areaResposta.hidden = true;
        alert("Pokemon invalido");
        return
    }
    const dados = await resposta.json();
    console.log(dados);

    document.getElementById("nome").textContent = dados.name;
    document.getElementById("numero").textContent = dados.id;
    document.getElementById("foto").src = dados.sprites.front_default;
    document.getElementById("altura").textContent = dados.height / 10 + " m";
    document.getElementById("peso").textContent = dados.weight / 10 + " kg";
    const stats = dados.stats;
    document.getElementById("hp").textContent = stats[0].base_stat;
    document.getElementById("barra-hp").value = stats[0].base_stat;
    document.getElementById("ataque").textContent = stats[1].base_stat;
    document.getElementById("barra-ataque").value = stats[1].base_stat;
    document.getElementById("defesa").textContent = stats[2].base_stat;
    document.getElementById("barra-defesa").value = stats[2].base_stat;
    document.getElementById("ataque-esp").textContent = stats[3].base_stat;
    document.getElementById("barra-ataque-esp").value = stats[3].base_stat;
    document.getElementById("defesa-esp").textContent = stats[4].base_stat;
    document.getElementById("barra-defesa-esp").value = stats[4].base_stat;
    document.getElementById("velocidade").textContent = stats[5].base_stat;
    document.getElementById("barra-velocidade").value = stats[5].base_stat;
    const tipo1 = document.getElementById("tipo1");
    const tipo2 = document.getElementById("tipo2");

    tipo1.textContent = dados.types[0].type.name;
    tipo1.className = "tipo " + dados.types[0].type.name;   
    if (dados.types[1]) {                      
        tipo2.textContent = dados.types[1].type.name;
        tipo2.className = "tipo " + dados.types[1].type.name;
        tipo2.hidden = false;
    } else {
         tipo2.hidden = true;                  
        }
        areaResposta.hidden = false;
     document.querySelectorAll(".rotulo").forEach(function (label) {
        label.hidden = false;
});
    }

