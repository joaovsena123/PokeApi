const coresDosTipos = {
    normal: "#a8a77a",
    fire: "#ee8130",
    water: "#6390f0",
    electric: "#f7d02c",
    grass: "#7ac74c",
    ice: "#96d9d6",
    fighting: "#c22e28",
    poison: "#a33ea1",
    ground: "#e2bf65",
    flying: "#a98ff3",
    psychic: "#f95587",
    bug: "#a6b91a",
    rock: "#b6a136",
    ghost: "#735797",
    dragon: "#6f35fc",
    dark: "#705746",
    steel: "#b7b7ce",
    fairy: "#d685ad"
};
async function Buscarpokemon() {
    const pokemon = document.getElementById("pokemon").value.toLowerCase().trim();
    const aviso = document.getElementById("aviso")
    const erro = document.getElementById("erro");
    const erro2 = document.getElementById("erro2");
    erro.hidden = true;
    erro2.hidden = true;
    if (pokemon == "") {
        erro2.hidden = false;
        areaResposta.hidden = true;
        document.body.style.background = "";
        return
    }
    aviso.hidden = false;
    const resposta = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon);
    aviso.hidden = true;
    if(!resposta.ok) {
        areaResposta.hidden = true;
        document.body.style.background = "";
        erro.hidden = false;
        return
    }
    const dados = await resposta.json();
    console.log(dados);

    document.getElementById("nome").textContent = dados.name;
    document.getElementById("numero").textContent = dados.id;
    document.getElementById("foto").src = dados.sprites.other["official-artwork"].front_default;
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
    const nomeTipo1 = dados.types[0].type.name;

    tipo1.textContent = nomeTipo1;
    tipo1.style.backgroundColor = coresDosTipos[nomeTipo1];
    tipo1.hidden = false;
    const cor1 = coresDosTipos[nomeTipo1];

    if (dados.types[1]) {
        const nomeTipo2 = dados.types[1].type.name;
        const cor2 = coresDosTipos[nomeTipo2];

        tipo2.textContent = nomeTipo2;
        tipo2.style.backgroundColor = cor2;
        tipo2.hidden = false;

        document.body.style.background = `linear-gradient(135deg, ${cor1}, ${cor2})`;
    } else {
        tipo2.hidden = true;
        document.body.style.background = cor1;
    }
        areaResposta.hidden = false;
     document.querySelectorAll(".rotulo").forEach(function (label) {
        label.hidden = false;
});
    }
    document.getElementById("pokemon").addEventListener("keydown", function (evento) {
  if (evento.key === "Enter") {
    Buscarpokemon();
  }
});

