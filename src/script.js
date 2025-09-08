const btn = document.getElementById("salvar")
const cidade = document.querySelector("#cidade")
const estado = document.querySelector("#estado")
const logradouro = document.querySelector("#logradouro")
const cepInput = document.querySelector("#cep")
const complemento = document.querySelector("#complemento")

async function buscarEndereco(cp) {
  try {
    const response = await fetch(`https://viacep.com.br/ws/${cp}/json/`);
    const data = await response.json();
    if (!data.erro) {

      cidade.value = data.localidade;
      estado.value = data.uf;
      logradouro.value = data.logradouro;
      complemento.value = data.complemento

    } else {
      alert("CEP não encontrado!");
    }
  } catch (error) {
    alert("Erro ao buscar o CEP");
  }
}

btn.addEventListener("click", function(){

    const cep = cepInput.value
    if(cep.length <= 11){

        buscarEndereco(cep)

    }
    else{
        alert("Informe um CEP válido")
    }


})