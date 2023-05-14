# Programação de Funcionalidades

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="4-Metodologia.md"> Metodologia</a>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="5-Arquitetura da Solução.md"> Arquitetura da Solução</a>

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

Para cada requisito funcional, pode ser entregue um artefato desse tipo

> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)

Nesta seção apresentamos algumas funcionalidades do sistema. Todos os artefatos necessários para utilização das funcionalidades abaixo estão armazenados na pasta **src** deste projeto.

Instruções de acesso
1. Baixe o arquivo medicfy.zip armazenado na pasta **src**
2. Descompacte os arquivos em uma pasta em seu computador

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t7-medicfy/assets/128761321/2b0d9380-afde-48ca-8d6f-5aad46d52bf1)

3. Abra esta pasta no Visual Studio Code e execute as páginas .html pelo Live Server

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t7-medicfy/assets/128761321/f4c3ea92-a32a-4ac2-9602-71aeef1d1869)


**Página inicial**

Página inicial do sistema contendo notícias com links externos.
Todas as páginas do sistema foram propositalmente definidas com largura máxima de 1440 pixels para melhor visualização e distribuição dos elementos da página, melhorando a visualização em qualquer tamanho de tela.
Páginas que se auto dimensionam atendendo ao atributo de responsividade, possibilitando a visualização em dispositivos móveis.

>**Requisitos abordados**
> - RF12 - O website deverá conter principais notícias sobre saúde e bem-estar (sobre exames preventivos, riscos de doenças, etc.)
> - RNF01 - O website deverá ser claro e objetivo, de fácil utilização ao usuário
> - RNF02 - O website deverá conter cores suaves e de bom contraste com demais elementos da página
> - RNF05 - O website deverá ser responsivo, permitindo a vizualização em computadores e dispositivos móveis
>
>  **Artefatos da funcionalidade**
> - pagina_inicial.html (Diretório Github src/pagina_inicial.html)
> - pagina_inicial.css (Diretório Github src/css/pagina_inicial.css)

![Home noticias](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t7-medicfy/assets/128761321/b5cbb2b3-ca91-4a49-99c0-c6d42bd0c59d)
![noticia externa](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t7-medicfy/assets/128761321/415b9c67-3474-4a2c-aa00-aa00ff8cdbc9)
![Home responsivo](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t7-medicfy/assets/128761321/98148218-237a-4945-a08d-ab1053d7b857)

![Responsividade CSS](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t7-medicfy/assets/128761321/1a59c7f6-7631-4924-b3f6-bb3eba0548d7)

**Página de cadastro**

Possibilita ao usuário seu registro de conta para utilização dentro do sistema. Há também dois botões opcionais para adição de dependente e plano de saúde.
Foi utilizado o comando "localstorage.setItem" do JSON para armazenamento local das informações do cadastro.

>**Requisitos abordados** 
> - RF01
> - RF06
>
>**Artefatos da funcionalidade**
> - cadastro.html (Diretório Github src/cadastro.html)
> - cadastro.css (Diretório Github src/css/cadastro.css)
> - main.js (Diretório Github src/mais.js)

![cadastro01](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t7-medicfy/assets/128761321/3be055c9-5285-49c3-8ad7-f85786a0e4db)
![cadastro02](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t7-medicfy/assets/128761321/9e74c39c-1c35-4642-a66c-6c8967993e15)
![cadastro HTML](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t7-medicfy/assets/128761321/3ca981a6-63ba-4609-9126-75e4a5b012e9)
![cadastro JS](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t7-medicfy/assets/128761321/6cd89df0-84d1-4a8d-8136-f1f7121d2bda)
