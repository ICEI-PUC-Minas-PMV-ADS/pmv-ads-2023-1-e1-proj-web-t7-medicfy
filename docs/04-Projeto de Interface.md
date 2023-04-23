
# Projeto de Interface

Dentre um dos cuidados para a criação do sistema de interface, centramos a atenção em uma navegação inteligente, ágil e confiável. Para uma melhor visualização da identidade do projeto, estebelecemos um padrão das telas que foram pensadas para funcionar em dispositivos desktop e mobile. 

## Fluxo do Usuário

O esquema da figura abaixo mostra o fluxo de interação do usuário com o sistema de telas. Cada tela será mostrada posteriormente em detalhes no seção de Wireframes. Para acesso ao protótipo interativo clique em <a href="https://www.figma.com/proto/8BoYp5FtRCAKBybbGInc7m/Untitled?node-id=365-2686&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=19%3A54&show-proto-sidebar=1">WIREFRAME INTERATIVO</a> 

![FLUXOGRAMA](https://user-images.githubusercontent.com/128761321/233818242-a500bf6c-5712-4897-8b03-0824ef66ade8.png)



# Wireframes

Nesta seção serão mostradas em detalhes as telas de todo o sistema. A figura a seguir é um ESBOÇO PADRÃO das estruturas que irá abranger todas as telas. 

- LOGO: representação gráfica da identidade do website.
- CABEÇALHO: local onde estarão dispostos ícones para navegação principal (menu principal, perfil do usuário, login, logout, cancelamento de agendamento).
- TÍTULO: título principalda seção.
- SUBTÍTULO: título segundário da seção principal.
- CONTEÚDO: apresenta o conteúdo em si. 
- RODAPÉ: Contém informações para contato, sobre a empresa e direitos autorais.

### Esoboço Padrão

![ESBOÇO PADRÃO 1](https://user-images.githubusercontent.com/128761556/233716310-361fba59-32a2-4e34-ab46-3baf11b23c99.png)

 **********************************************************************************************************************************************************************
 
 ### Homepage

Página principal do website onde o usuário poderá acessar mesmo sem efetuar o login e que contará com os seguintes componentes: 
 - CABEÇALHO: conta os ícones de ENTRAR (caso não tenha sido feito login), perfil para acessar as informações do usuário (informações pessoais, histórico de agendamentos, avaliações, exames agendados), cancelamento de agendamento e sair. 
 - CONTEÚDO: contém link para acesso as especialidades e exames disponíveis no site, bem como notícias relacionadas a saúde e os ícones para agendar consulta/exame. 
 - RODAPÉ: Contém informações para contato, sobre a empresa e direitos autorais.


### Homepage sem efetuar login

![HOME SEM LOGIN](https://user-images.githubusercontent.com/128761321/233817431-6331d8bd-cf6f-40dd-bedc-a1cea7252098.png)



### Homepage após efetuar login

![HOME](https://user-images.githubusercontent.com/128761321/233817433-b1812f3d-a079-47df-b194-069707a98cc5.png)

****************************************************************************************************************************************************

### Sobre Nós

Após clicar no link *Sobre Nós* no rodapé de qualquer página, a tela contará um pouco sobre a história do website, seus objetivos e o que há de serviço disponível. 

![SOBRE NÓS](https://user-images.githubusercontent.com/128761321/233817444-1db23b18-0275-4623-a05f-3cc1c201a6b6.png)

***********************************************************************************************************************************************************************

### Contato

Após clicar no link *Contato* no rodapé de qualquer página, a tela exibirá email e telefone para contato com o suporte do site para reclamações, elogios, sugestões.

![CONTATO](https://user-images.githubusercontent.com/128761321/233817424-87fa25c2-22c0-4acf-8152-1477f0e572c7.png)

***********************************************************************************************************************************************************************

### Lista de Especialidades e Exames

Na homepage, onde ficará os conteúdos, o usuário poderá clicar no botão *Todas as Especialidades e Exames* e será redirecionado a página com as listas dos exames e especialidades que o site oferece.  

![LISTA ESPECIALIDADES](https://user-images.githubusercontent.com/128761321/233817434-2f5535b5-d3cc-441d-bda8-9d78e9875213.png)

***********************************************************************************************************************************************************************

### Notícia - Link Externo

A homepage traz notícias sobre saúde e bem estar, caso seja do interesse do usuário, mesmo sem login poderá clicar no link e ele será direcionado a um link externo com a notícia completa.

![NOTÍCIA LINK EXTERNO](https://user-images.githubusercontent.com/128761321/233817436-2a36d188-0872-4cfe-a425-034641b432d2.png)

***********************************************************************************************************************************************************************

### Login

Tela em que o usuário fará a autenticação inserindo seu nome de usuário e senha nos campos indicados e após isso clicar no botão entrar para efetuar o login. Caso seja a primeira vez do usuário, ele irá clicar no link cadastrar e será redirecionado a outra tela para cadastro. Há também o link para recuperação da senha e do usuário caso os tenha perdido, sendo redirecionado para a tela de recuperação.
 
![LOGIN](https://user-images.githubusercontent.com/128761321/233817435-81c17659-d700-414d-87a8-3ce2e99c4cdd.png)

***********************************************************************************************************************************************************************

### Cadastro

Caso seja a primeira vez do usuário, após clicar no link de cadastro ele será redirecionado para a tela de cadastro que solicitará os seguintes dados: nome completo, data de nascimento, CPF, gênero, estado civil, celular, email, nome de usuário, senha, endereço com rua/avenida, número/complemento, CEP, bairro, cidade e estado. Caso haja, o usuário poderá adicionar dependentes com nome completo e data de nascimento. Com os dados preenchidos, ao clicar no botão salvar ou cancelar, ele será redirecionado para a tela de login.

![CADASTRO2](https://user-images.githubusercontent.com/128761321/233863244-2a93a305-01be-4f19-8377-8edce535537b.png)

***********************************************************************************************************************************************************************

### Agendamento

Para solicitar agendamento, o usuário já logado, deverá ir a Homepage e clicar no botão de consulta ou exame. Após isso, será direcionado a tela de agendamento que é comum a exames e consultas. Na página de agendamento, ele deverá demarcar se o atendimento será para o titular ou dependente e a modalidade: SUS, convênio ou particular.

![AGENDA CONSULTA-EXAME1](https://user-images.githubusercontent.com/128761321/233817414-df4764b9-6686-478e-b268-eb87758a3c46.png)

### Agendamento SUS

- SUS: deverá informar número da carteira.

![AGENDA CONSULTA-EXAME1-SUS](https://user-images.githubusercontent.com/128761321/233817417-b050a918-a283-4edb-9596-e669f9e83ba0.png)


### Agendamento Convênio 

- Convênio: deverá informar nome do convênio, plano e número da carteira.

![AGENDA CONSULTA-EXAME1-CONVENIO](https://user-images.githubusercontent.com/128761321/233817415-059804ef-2e39-4758-be8d-1def7ffd8f5a.png)

### Agendamento Particular

- Particular: não deverá informar nenhum dado. Aparecerá um box com instruções. 

![AGENDA CONSULTA-EXAME1-PARTICULAR](https://user-images.githubusercontent.com/128761321/233817416-a0d08b5d-3200-441b-ab48-65682c44d82a.png)

Após isso, ao clicar em continuar, o usuário será direcionado a página escolhida.

***********************************************************************************************************************************************************************

### Agendamento Consulta

No agendamento de consulta, o usuário deve escolher primeiramente a especialidade desejada, após isso, deve selecionar o local que pretende se consultar. Feito isso, no calendário, o usuário deve escolher uma data e ao lado selecionar o período e o horário. Após isso, aparecerá os profissionais disponíveis com nome, foto, registro no conselho, especialidade, endereço e valor caso seja consulta particular. Pro fim ele deverá clicar no card correspondente ao profissional escolhido e em continuar. 

![AGENDA CONSULTA1](https://user-images.githubusercontent.com/128761321/233817412-e8daba43-7c42-448f-b13f-727f2cc200d6.png)


### Resumo Agendamento Consulta

Nesta tela será mostrada um resumo da opção escolhida pelo usuário informando seu nome completo, a modalidade escolhida, a especialidade, local com endereço completo, telefone,  data, horário e documentos necessários. Ao final, o usuário deve selecionar se confirma o agendamento ou se pretende cancelar. Se confirmar, será direcionado a tela de confirmação em que poderá clicar no botão para avaliar o site ou ser direcionado a Homepage. 

![AGENDA CONSULTA2](https://user-images.githubusercontent.com/128761321/233817413-bf9df8a9-6370-459a-93b6-977ac75f1310.png)

***********************************************************************************************************************************************************************

### Agendamento Exame

No agendamento de exames, o usuário deve escolher primeiramente o exame que irá realizar, após isso, no calendário, o usuário deve escolher uma data e ao lado selecionar o período e o horário. Logo após, aparecerão os locais disponíveis com nome do estabelecimento, endereço completo, telefone e valores caso seja exame particular. Por fim,  ele deverá clicar no card correspondente ao local escolhido e em continuar. 

![AGENDA EXAME1](https://user-images.githubusercontent.com/128761321/233817418-b0db3144-8fcb-40f8-945f-51e49ac9da0f.png)

### Resumo de Agendamento de Exame

Nesta tela será mostrada um resumo da opção escolhida pelo usuário informando seu nome completo, a modalidade escolhida, o exame agendado, nome e endereço do local, telefone, data e horário e documentos necessários. Ao final, o usuário deve selecionar se confirma o agendamento ou se pretende cancelar. Se confirmar, será direcionado a tela de confirmação em que poderá clicar no botão para avaliar o site ou ser direcionado a Homepage. 

![AGENDA EXAME2](https://user-images.githubusercontent.com/128761321/233817419-ba3bdef5-0f5c-4ace-9895-a1130bf9ab1c.png)

### Confirmação de Agendamento 

![AGENDAMENTO SUCESSO](https://user-images.githubusercontent.com/128761321/233817420-240ae84c-2129-4ce5-815f-eada3b39160f.png)

***********************************************************************************************************************************************************************

### Tela de Avaliação

Aqui o usuário poderá atravésdo box, descrever sua experiencia no site para que os desenvolvedores possam aprimorar o website. 

![PÁGINA AVALIAÇÃO](https://user-images.githubusercontent.com/128761321/233817437-ca8e93dd-7664-4186-9322-db014161f87c.png)

***********************************************************************************************************************************************************************

### Perfil

Nesta tela serão mostrados todos os dados do usuário inseridos no cadastro. Também aparecerão os botões de editar perfil, o histórico e o cancelamento de agendamento. Ao clicar em um dos botões citados, o usuário será direcionado a página correspondente. Há também a possibilidade de visualizar os agendamentos feitos, clicando no botão de consulta ou exame. 

![PERFIL1](https://user-images.githubusercontent.com/128761321/233817438-1e76e4c3-28e4-4dac-a9c0-5c16a89e2934.png)


- **Perfil Consulta Agendada**

![PERFIL2](https://user-images.githubusercontent.com/128761321/233817439-405cccb5-18cc-4c2a-8a03-5948586fbf9d.png)


- **Perfil Exame Agendado**

![PERFIL3](https://user-images.githubusercontent.com/128761321/233817440-72af3654-e57b-403f-9944-a93e2ae313b0.png)


***********************************************************************************************************************************************************************

### Editar Perfil

O usuário tem a possibilidade de editar todos os seus dados cadastrados e dos dependentes, caso exista, como descrito na tela anterior, exceto o CPF. Ao termino da alteração e clicar em salvar, o usuário será direcionado a página de perfil.

![EDITAR PERFIL](https://user-images.githubusercontent.com/128761321/233863247-210a215d-1459-4a57-bead-ee1c8eca66bd.png)

***********************************************************************************************************************************************************************

### Histórico

Nesta tela o usuário poder ver os agendamentos já realizados em ordem cronológica, da mais recente a mais antiga. Basta clicar no botão de consulta ou exame. 

![HISTÓRICO1](https://user-images.githubusercontent.com/128761321/233817427-c3516f52-d73b-453e-9529-345b0d885602.png)

- **Histórico Consultas**

![HISTÓRICO2](https://user-images.githubusercontent.com/128761321/233817428-8c6c9f55-e1ed-4635-8305-e7c9dcd93b45.png)

- **Histórico Exames**

![HISTÓRICO3](https://user-images.githubusercontent.com/128761321/233817430-e9046934-b394-453a-a8fc-8fc87c7f55a0.png)

***********************************************************************************************************************************************************************

### Cancelamento de Agendamento 

Após clicar no botão de cancelamento de agendamento, o usuário será direcionado a essa tela para selecionar o card e cancelar o procedimento. Aparecerão apenas os procedimentos em abertos, pela ordem de data mais próxima. Ao clicar no card, aparecerá uma pop-up perguntando se realmente deseja cancelar e que a ação não poderá ser desfeita. Após confirmar, será direcionado a Homepage.

![CANCELAR AGENDAMENTO1](https://user-images.githubusercontent.com/128761321/233817422-9c559a30-0cd3-42c1-8ac0-199179382e4c.png)

- **Pop-Up Cancelamento**

![CANCELAR AGENDAMENTO2](https://user-images.githubusercontent.com/128761321/233817423-b2c04f67-193d-42fd-b478-d97e735578d3.png)


***********************************************************************************************************************************************************************
***********************************************************************************************************************************************************************
***********************************************************************************************************************************************************************








![REDEFINIR SENHA](https://user-images.githubusercontent.com/128761321/233863248-7440d2db-30ef-41b3-b777-2550d63412c1.png)






![RECUPERAR SENHA1](https://user-images.githubusercontent.com/128761321/233817441-0954c0db-8329-4ec4-8f17-1ec3156601d3.png)
![RECUPERAR SENHA2](https://user-images.githubusercontent.com/128761321/233817443-dc75adaa-7d1d-4f26-8fb5-695957d1fb7c.png)




