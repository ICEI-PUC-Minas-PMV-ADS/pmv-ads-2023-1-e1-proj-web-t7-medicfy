function salvar(){
  const lista_dados = {
    Data_de_nascimento: data_nasc.value,
    Sexo: genero.value,
    CPF: cpf.value,
    Estado_civil: estado_civil.value,
    Celular: celular.value,
    Telefone: telefone.value,
    Dependente: nome_dependente.value,
    Data_nascimento_dependente: data_nasc_dependente.value,
    Genero_dependente: genero_dependente.value,
    Plano_de_saude: plano_saude.value,
    Numero_carteira: num_carteira.value,
    Nome_usuario: nome_de_usuario.value,
    Email: email.value,
    Senha: senha.value,
    CEP: cep.value,
    Rua: rua.value,
    Numero: numero.value,
    Bairro: bairro.value,
    Cidade: cidade.value,
    UF: uf.value
  }
    localStorage.setItem(nome.value, JSON.stringify(lista_dados));
    alert ("Cadastro realizado com sucesso!")
   // window.location.href = './login';
}

function listar_dados(){
  let text = localStorage.getItem(nome.value);
  let obj = JSON.parse(text);
  document.getElementById("lista_dados").innerHTML = obj.Nome;
  
}

function myfunction2(){
  alert("Hello! I am an alert box!!!!!!!!!!!!!!!!!!!!!");
}

function add_dependente() {
  var x = document.getElementById("dependente");
  if (x.style.display === "none") {
    x.style.display = "grid";
  } else {
    x.style.display = "none";
  }
}

function add_plano() {
  var x = document.getElementById("plano");
  if (x.style.display === "none") {
    x.style.display = "grid";
  } else {
    x.style.display = "none";
  }
}

