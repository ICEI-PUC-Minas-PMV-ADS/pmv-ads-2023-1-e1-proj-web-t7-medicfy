# Especificação do Projeto

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
|:-------------------------:|-------------------------|-------------------------|
|DAYANE DUARTE|Marcar uma consulta com terapeuta de forma online.|Cuidar de sua saúde mental, pois no momento as frustrações do trabalho como carga horária alta e a falta de suporte da empresa desanimam Dayane, que não tem mais motivação para exercer sua profissão.|
|FELIPE MOREIRA|Marcar uma consulta com ortopedista de forma online.|Realização de exames para acompanhar o estado de seu tornozelo e retirar o gesso de seu pé esquerdo, que torceu quando Felipe subiu uma trilha e se acidentou pisando em falso.|
|FRANCISCO ALVES|Marcar uma consulta com endocrinologista e nutricionista de forma online.|Realização de exames para acompanhar o estado de sua doença com endocrinologista e avaliar sua alimentação com uma nutricionista para que possa se alimentar de forma mais saudável, afim de retardar a osteoporose.|
|SUZANE SALGADO|Agendar consultas médicas para sua filha de dez anos.|Realizar o tratamento de sua filha que sofre de fibromialgia.|
|SUZANE SALGADO|Visualizar o histórico de consultas e exames de sua filha.|Acompanhar a evolução do tratamento da doença de sua filha.|
|PEDRO NOGUEIRA|Centralizar o agendamento de consultas com diversos especialistas, cardiologista, endocrinologia, etc. |Buscar tratamento para cuidar de sua saúde.|
|PEDRO NOGUEIRA|Avaliar a experiência tida no site e/ou consulta médica.|Ajudar outros usuários que utilizarão o mesmo serviço.|

## Requisitos do Projeto

A seguir serão apresentados os requisitos do projeto de acordo com os feedbacks enviados pelo cliente. Esses requisitos terão ordem de prioridade a serem implementados de acordo com o grau de importância no site. Há vários tipos de requisitos, como o **requisito de cliente** – que trata de problemas enfrentados pelos clientes enquanto mantenedores do sistema; os **requisitos de usuário** – onde serão descritos os problemas enfrentados diretamente pelo usuário no manuseio do site; os **requisitos de software** – que trata do desempenho do website. Estão listados abaixo os três tipos de forma conjunta.

### Requisitos Funcionais

| ID | DESCRIÇÃO DO REQUISITO | PRIORIDADE |
|:---:|---|:---:|
|**RF_01**  |O website permitirá que o usuário insira/altere informações de login| ALTA | 
|**RF_02**  |O website permitirá que o usuário marque e desmarque consultas/exames de forma eficaz com no mínimo 3 horas de antecedência | ALTA |
|**RF_03**  |O website permitirá que o usuário faça avaliações sobre a experiência no site| MÉDIA |
|**RF_04** |O website enviará comprovante ao e-mail e telefone celular do usuário com data, nome do médico/exame, horário e telefone de contato na clínica | ALTA |
|**RF_05**  |O website deverá informar o histórico de consultas ao usuário| MÉDIA |

### Requisitos não Funcionais

A seguir, estão apresentados os requisitos não funcionais que o projeto deverá atender

| ID | DESCRIÇÃO DO REQUISITO | PRIORIDADE |
|:-------:|-------------------------|:-----------:|
|**RNF_01**| O site deverá ser claro e objetivo, de fácil utilização ao usuário | ALTA | 
|**RNF_02**| O site deverá conter cores suaves e de bom contraste com demais elementos da página | MÉDIA |
|**RNF_03**| O site deverá conter formatação de fontes formais e de fácil leitura | MÉDIA |
|**RNF_04**| O site deverá conter principais notícias sobre saúde e bem-estar (sobre exames preventivos, riscos de doenças, etc.) | MÉDIA |
|**RNF_05**| O site deverá ter um tempo de resposta menor que 2 segundos na pesquisa e agendamento de consultas | ALTA |

## Restrições

Os itens que limitarão a execução desse projeto de acordo com a proposta inicial. 

|ID| DESCRIÇÃO DA RESTRIÇÃO |
|:---:|----------------------------------------------------------------------------------------|
|**RE_01**| O projeto está limitado ao uso de ferramentas web front-end                            |
|**RE_02**| A data limite para entrega do projeto está condicionada a 25/06/2023                   |
|**RE_03**| Não são permitidos o uso de frameworks no projeto                                      |
|**RE_04**| O projeto deve ser desenvolvido em linguagem front-end (HTML, CSS, JavaScript, jQuery) |
