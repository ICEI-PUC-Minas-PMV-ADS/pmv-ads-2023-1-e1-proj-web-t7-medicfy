# Programação de Funcionalidades

Nesta seção apresentamos algumas funcionalidades do sistema. Todos os artefatos necessários para utilização das funcionalidades abaixo estão armazenados na pasta **src** deste projeto.

**Instruções de acesso**
1. Baixe o arquivo medicfy.zip armazenado na pasta **src**
2. Descompacte os arquivos em uma pasta em seu computador

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t7-medicfy/assets/128761321/57863961-ef53-4bba-b953-7404452f5b15)

3. Abra esta pasta no Visual Studio Code e execute as páginas .html pelo Live Server

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t7-medicfy/assets/128761321/7567a7d3-6c11-4c84-9548-22da1c22ab6c)


**Página inicial**

Páginas que se auto dimensionam atendendo ao atributo de responsividade, possibilitando a visualização em dispositivos móveis.

>**Requisitos abordados**
> - RF12 - O website deverá conter principais notícias sobre saúde e bem-estar (sobre exames preventivos, riscos de doenças, etc.)
> - RNF01 - O website deverá ser claro e objetivo, de fácil utilização ao usuário
> - RNF02 - O website deverá conter cores suaves e de bom contraste com demais elementos da página
> - RNF05 - O website deverá ser responsivo, permitindo a vizualização em computadores e dispositivos móveis
>
>  **Artefatos da funcionalidade**
> - pagina_inicial.html
> - pagina_inicial.css

![Home noticias](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t7-medicfy/assets/128761321/b5cbb2b3-ca91-4a49-99c0-c6d42bd0c59d)
********************************************************************************************************************************************
**Notícia externa**

![noticia externa](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t7-medicfy/assets/128761321/415b9c67-3474-4a2c-aa00-aa00ff8cdbc9)
********************************************************************************************************************************************
**Página inicial visualizada em um smartphone**

![Home responsivo](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t7-medicfy/assets/128761321/98148218-237a-4945-a08d-ab1053d7b857)
********************************************************************************************************************************************
**Estrutura de dados da responsividade**

![Responsividade CSS](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t7-medicfy/assets/128761321/1a59c7f6-7631-4924-b3f6-bb3eba0548d7)
********************************************************************************************************************************************


**Página de Login**

Possibilita ao paciente que seja feito login no site com o usuário e senhas cadastradas na página de CADASTRO.

![login](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t7-medicfy/assets/126400745/fcd0d2fb-4a4f-49b3-a253-73256d041a24)

**Erro de Login**

![erro-login](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t7-medicfy/assets/126400745/efdff10d-a26f-4357-93de-de2eae62c9aa)

**Estrutura de dados que impedem o login de usuário não cadastrado**

![login-validação](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t7-medicfy/assets/128761556/7e675b42-c1ab-40a3-9a41-f0fc084b6505)


**Login Efetuado com Sucesso**

![login-efetuado](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t7-medicfy/assets/126400745/0cc1363d-2877-4f4a-ab56-b27d9b14d61e)


![home-logado](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t7-medicfy/assets/126400745/3fb5d7d3-afa2-4f5e-aacb-eb02aa6c6b40)



>**Requisitos Abordados**
> - RF01 - O website deve realizar o controle de acesso, solicitando login e senha, caso não possua cadastro, permitir que faça o registro, bem como recupere o login e senha caso o tenha perdido.

*****************************************************************************************************************************************


**Página de cadastro**

Possibilita ao usuário seu registro de conta para utilização dentro do sistema. Há também dois botões opcionais para adição de dependente e plano de saúde.
Foi utilizado o comando "localstorage.setItem" do JSON para armazenamento local das informações do cadastro.

>**Requisitos abordados** 
> - RF01 - O website deve realizar o controle de acesso, solicitando login e senha, caso não possua cadastro, permitir que faça o registro, bem como recupere o login e senha caso o tenha perdido.
> - RF06 - O cadastro do usuário só será efetivado após informar obrigatóriamente nome completo, data de nascimento, cpf, e-mail, telefone celular e endereço.
>
>**Artefatos da funcionalidade**
> - cadastro.html
> - cadastro.css
> - main.js

![cadastro01](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t7-medicfy/assets/128761321/3be055c9-5285-49c3-8ad7-f85786a0e4db)
********************************************************************************************************************************************
**DevTools aba Aplicativo - Realizando o armazenamento local dos dados**
![cadastro02](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t7-medicfy/assets/128761321/9e74c39c-1c35-4642-a66c-6c8967993e15)
********************************************************************************************************************************************
**Estrutura de dados invocando a função**
![cadastro HTML](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t7-medicfy/assets/128761321/3ca981a6-63ba-4609-9126-75e4a5b012e9)
********************************************************************************************************************************************
**Estrutura de dados da função**
![cadastro JS](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t7-medicfy/assets/128761321/6cd89df0-84d1-4a8d-8136-f1f7121d2bda)
