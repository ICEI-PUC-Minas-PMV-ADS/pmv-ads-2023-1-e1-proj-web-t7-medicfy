# Especificações do Projeto

Para tratar das demandas do projeto, foi feito uma pesquisa com usuários do website para que seja feito um levantamento das dificuldades encontradas e quais suas expectativas em relação ao trabalho em questão. Estão elencados abaixo as situações e expectativas individuais de cada usuário, que servirá de parâmetro para melhorias.

## Personas

|`DAYANE DUARTE` Idade: 27|
|------------------------------|
|**Ocupação**: Contadora, trabalha dentro de uma empresa onde atua resolvendo tarefas econômicas e tributárias.|
|**Motivações**: Se sente feliz e motivada com suas atividades dentro da empresa, que contribui positivamente para seu desenvolvimento na profissão. Contabilidade sempre foi seu sonho de profissão e isso motiva Dayane diariamente.|
|**Frustrações**: Lidar com burocracias e mudanças na legislação é a maior frustração de Dayane, além da grande carga de horários que deixam qualquer profissional sem motivações, principalmente quando a empresa não oferece o suporte necessário.|
|**Hobbies, Histórias**: Dayane gosta de descansar em seus momentos de lazer, assistir filmes, entrar em contato com a natureza.|


|`FELIPE MOREIRA` Idade: 31|
|------------------------------|
|**Ocupação**:  Professor de Educação Física, dando aulas em colégios do estado e de forma particular, em academias.|
|**Motivações**: Felipe desde sua infância praticava esportes, como natação e futebol. A paixão pelo esporte fez com que no futuro se tornasse Professor, pois sua motivação é praticar e ensinar o que ele mais gosta.|
|**Frustrações**: Felipe se frusta quando não chega no resultado que almeja, desde não conseguir superar suas metas até quando um de seus alunos não bate a meta determinada ou não se ver interessado.|
|**Hobbies, Histórias**: Felipe nascido no Estado do Rio de Janeiro gosta de caminhar na praia, jogar beach tênis, fazer trilhas e participar de maratonas de corrida.|


|`FRANCISCO ALVES` Idade: 67|
|------------------------------|
|**Ocupação**:  Aposentado do Estado, que passou a vida trabalhando como funcionário público.|
|**Motivações**: Francisco prioriza sua saúde fazendo caminhada todos os dias de manhã pelo parque, para que possa manter o corpo ativo e contribuir com o condicionamento físico.|
|**Frustrações**: Francisco sofre com osteoporose, doença que causa desgasto nos ossos causando dores no seu corpo. A atividade física ajuda no retardamento da doença, porém Francisco fica frustrado com a lista de alimentos que ele não pode consumir.|
|**Hobbies, Histórias**: Francisco passa o tempo livre assistindo novelas, filmes. Gosta de andar pelo ar livre e fazer atividades físicas.|


|`SUZANE SALGADO` Idade: 35|
|------------------------------|
|**Ocupação**:  Dona de casa e mãe de Mariana, divide tempo cuidando da casa e de sua filha de dez anos que sofre de fibromialgia.|
|**Motivações**: A saúde e o bem estar de sua filha são primordiais para Suzane.|
|**Frustrações**: Não haver cura para o caso de sua filha, mas faz tudo o que está ao seu alcance para confortá-la.|
|**Hobbies, Histórias**: Em seu tempo livre, gosta de assistir novelas, filmes e brincar com sua filha. Não mede esforços para deixá-la feliz.|

|`PEDRO NOGUEIRA` Idade: 36|
|------------------------------|
|**Ocupação**:  Analista de sistemas em uma multinacional de grande porte no ramo securitário.|
|**Motivações**: Amante de tecnologia, acha fantástico o que a tecnologia proporciona para a humanidade e está sempre em busca de aprendizado, participando de fóruns do assunto, realizando perguntas e sanando dúvidas de outros usuários quando é de seu conhecimento.|
|**Frustrações**: Apesar de seu alto conhecimento na área de tecnologia e desempenho no trabalho, Pedro deseja ser promovido de cargo, porém, não se destaca, pois, seu chefe injustamente prioriza outros colegas por ter mais afinidade com os mesmos e menos com Pedro. Devido ao estresse da rotina que leva e a má alimentação, Pedro está hipertenso e com sobrepeso.|
|**Hobbies, Histórias**: Em seu tempo livre, Pedro gosta de jogar vídeo game e ver filmes e séries de ficção.|

## Histórias de Usuários

A partir da pesquisa realizada, constatou-se que no dia a dia, os usuários entrevistados
teriam os seguintes interesses:

|EU COMO...|QUERO/PRECISO ...|PARA ...|
|-------------------------|-------------------------|-------------------------|
|`DAYANE DUARTE`     |Marcar uma consulta com terapeuta de forma online.|Cuidar de sua saúde mental, pois no momento as frustrações do trabalho como carga horária alta e a falta de suporte da empresa desanimam Dayane, que não tem mais motivação para exercer sua profissão.|

|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário cadastre tarefas | ALTA | 
|RF-002| Emitir um relatório de tarefas no mês   | MÉDIA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
