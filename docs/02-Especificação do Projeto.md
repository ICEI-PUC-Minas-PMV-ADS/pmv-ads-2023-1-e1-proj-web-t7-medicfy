# Especificação do Projeto

Para tratar das demandas do projeto, foi feito uma pesquisa com usuários do website para que seja feito um levantamento das dificuldades encontradas e quais suas expectativas em relação ao trabalho em questão. Estão elencados abaixo as situações e expectativas individuais de cada usuário, que servirá de parâmetro para melhorias.

## Personas

|**Dayane Duarte**| ![Persona Dayane](/src/Dayane.jpg)|
|:-------------:|:----------------:|
|Idade:|27 Anos|
|Ocupação:| Contadora, trabalha dentro de uma empresa onde atua resolvendo tarefas econômicas e tributárias.|
|Motivações:| Se sente feliz e motivada com suas atividades dentro da empresa, que contribui positivamente para seu desenvolvimento na profissão. Contabilidade sempre foi seu sonho de profissão e isso motiva Dayane diariamente.|
|Frustrações:| Lidar com burocracias e mudanças na legislação é a maior frustração de Dayane, além da grande carga de horários que deixam qualquer profissional sem motivações, principalmente quando a empresa não oferece o suporte necessário.|
|Hobbies, Histórias:| Dayane gosta de descansar em seus momentos de lazer, assistir filmes, entrar em contato com a natureza.|
|**Felipe Moreira**| ![Persona Felipe](/src/Felipe.jpg)|
|Idade:|31 Anos|
|Ocupação:|  Professor de Educação Física, dando aulas em colégios do estado e de forma particular, em academias.|
|Motivações:| Felipe desde sua infância praticava esportes, como natação e futebol. A paixão pelo esporte fez com que no futuro se tornasse Professor, pois sua motivação é praticar e ensinar o que ele mais gosta.|
|Frustrações:| Felipe se frusta quando não chega no resultado que almeja, desde não conseguir superar suas metas até quando um de seus alunos não bate a meta determinada ou não se ver interessado.|
|Hobbies, Histórias:| Felipe nascido no Estado do Rio de Janeiro gosta de caminhar na praia, jogar beach tênis, fazer trilhas e participar de maratonas de corrida.|
|**Francisco Alves**| ![Persona Francisco](/src/Francisco.jpg)|
|Idade:|67 Anos|
|Ocupação:|  Aposentado do Estado, que passou a vida trabalhando como funcionário público.|
|Motivações:| Francisco prioriza sua saúde fazendo caminhada todos os dias de manhã pelo parque, para que possa manter o corpo ativo e contribuir com o condicionamento físico.|
|Frustrações:| Francisco sofre com osteoporose, doença que causa desgasto nos ossos causando dores no seu corpo. A atividade física ajuda no retardamento da doença, porém Francisco fica frustrado com a lista de alimentos que ele não pode consumir.|
|Hobbies, Histórias:| Francisco passa o tempo livre assistindo novelas, filmes. Gosta de andar pelo ar livre e fazer atividades físicas.|
|**Suzane Salgado**| ![Persona Suzane](/src/SuzaneSalgado.jpg)|
|Idade:|35 Anos|
|Ocupação:|  Dona de casa e mãe de Mariana, divide tempo cuidando da casa e de sua filha de dez anos que sofre de fibromialgia.|
|Motivações:| A saúde e o bem estar de sua filha são primordiais para Suzane.|
|Frustrações:| Não haver cura para o caso de sua filha, mas faz tudo o que está ao seu alcance para confortá-la.|
|Hobbies, Histórias:| Em seu tempo livre, gosta de assistir novelas, filmes e brincar com sua filha. Não mede esforços para deixá-la feliz.|
|**Pedro Nogueira**| ![Persona Pedro](/src/Pedro.jpg)|
|Idade:|36 Anos|
|Ocupação:|  Analista de sistemas em uma multinacional de grande porte no ramo securitário.|
|Motivações:| Amante de tecnologia, acha fantástico o que a tecnologia proporciona para a humanidade e está sempre em busca de aprendizado, participando de fóruns do assunto, realizando perguntas e sanando dúvidas de outros usuários quando é de seu conhecimento.|
|Frustrações:| Apesar de seu alto conhecimento na área de tecnologia e desempenho no trabalho, Pedro deseja ser promovido de cargo, porém, não se destaca, pois, seu chefe injustamente prioriza outros colegas por ter mais afinidade com os mesmos e menos com Pedro. Devido ao estresse da rotina que leva e a má alimentação, Pedro está hipertenso e com sobrepeso.|
|Hobbies, Histórias:| Em seu tempo livre, Pedro gosta de jogar vídeo game e ver filmes e séries de ficção.|

## Histórias de Usuários

A partir da pesquisa realizada, constatou-se que no dia a dia, os usuários entrevistados
teriam os seguintes interesses:

|EU COMO...|QUERO/PRECISO ...|PARA ...|
|:-------------------------:|-------------------------|-------------------------|
|Dayane Duarte|Marcar uma consulta com terapeuta de forma online.|Cuidar de sua saúde mental, pois no momento as frustrações do trabalho como carga horária alta e a falta de suporte da empresa desanimam Dayane, que não tem mais motivação para exercer sua profissão.|
|Felipe Moreira|Marcar uma consulta com ortopedista de forma online.|Realização de exames para acompanhar o estado de seu tornozelo e retirar o gesso de seu pé esquerdo, que torceu quando Felipe subiu uma trilha e se acidentou pisando em falso.|
|Francisco Alves|Marcar uma consulta com endocrinologista e nutricionista de forma online.|Realização de exames para acompanhar o estado de sua doença com endocrinologista e avaliar sua alimentação com uma nutricionista para que possa se alimentar de forma mais saudável, afim de retardar a osteoporose.|
|Suzane Salgado|Agendar consultas médicas para sua filha de dez anos.|Realizar o tratamento de sua filha que sofre de fibromialgia.|
|Suzane Salgado|Visualizar o histórico de consultas e exames de sua filha.|Acompanhar a evolução do tratamento da doença de sua filha.|
|Pedro Nogueira|Centralizar o agendamento de consultas com diversos especialistas, cardiologista, endocrinologia, etc. |Buscar tratamento para cuidar de sua saúde.|
|Pedro Nogueira|Avaliar a experiência tida no site e/ou consulta médica.|Ajudar outros usuários que utilizarão o mesmo serviço.|

## Requisitos do Projeto

A seguir serão apresentados os requisitos do projeto de acordo com os feedbacks enviados pelo cliente. Esses requisitos terão ordem de prioridade a serem implementados de acordo com o grau de importância no site. Há vários tipos de requisitos, como o **requisito de cliente** – que trata de problemas enfrentados pelos clientes enquanto mantenedores do sistema; os **requisitos de usuário** – onde serão descritos os problemas enfrentados diretamente pelo usuário no manuseio do site; os **requisitos de software** – que trata do desempenho do website. Estão listados abaixo os três tipos de forma conjunta.

### Requisitos Funcionais

| ID | DESCRIÇÃO DO REQUISITO | PRIORIDADE |
|:---:|---|:---:|
|**RF01**|O website deve realizar o controle de acesso, solicitando login e senha| ALTA |
|**RF02**|O website deverá permitir que o usuário se registre caso não possua cadastro no sistema| ALTA |
|**RF03**|O website deverá permitir que o usuario recupere login e senha caso o tenha perdido| ALTA |
|**RF04**|O website deverá permitir a alterações de dados cadastrais do usuário |MÉDIA|
|**RF05**|O sistema deverá validar se o login do usuário contém caracteres alfanuméricos, permitindo apenas letras e números, *hífen "-" ou sublinhado "_"* | ALTA |
|**RF06**|O sistema deverá validar se a senha do usuário contém no mínimo 6 caracteres no ato do cadastro. | ALTA |
|**RF07**|O sistema deverá permitir que apenas maiores de 18 anos se cadastre no site, caso seja de menor, o cadastro deverá ser realizado por um responsável. | ALTA |
|**RF08**|O website deverá permitir o agendamento de exames/consultas para terceiros apenas para menores de 18 anos e dependentes do titular da conta. | MÉDIA |
|**RF09**|O usuário deverá informar para quem será o atendimento, para si próprio, ou para um de seus dependentes. | ALTA |
|**RF10**|O cadastro do usuário só será efetivado após informar obrigatóriamente nome completo, data de nascimento, cpf, e-mail, telefone celular e endereço. | ALTA |
|**RF11**|O site deverá conter campos de preenchimento para escolha do usuário do plano de saúde com o número da carteira, o exame ou consulta, o local, a especialidade/exame, o dia e o horário. | ALTA |
|**RF12**|O website deverá permitir que o usuário marque e desmarque consultas/exames de forma eficaz com no mínimo 3 horas de antecedência | ALTA |
|**RF13**|O website deverá permitir que o usuário faça avaliações sobre a experiência no site| MÉDIA |
|**RF14**|O website deverá enviar comprovante ao e-mail e telefone celular do usuário com data, nome do médico/exame, horário, dcoumentos que deverá portar e telefone de contato na clínica | ALTA |
|**RF15**|O website deverá informar o histórico de consultas ao usuário| MÉDIA |
|**RF16**|O website deverá conter principais notícias sobre saúde e bem-estar (sobre exames preventivos, riscos de doenças, etc.) | MÉDIA |
|**RF17**|O website terá um admnistrador que fará login com usuário e senha | ALTA |
|**RF18**|A manutenção das especialidades, exames, locais, planos aceitos pelo site será feita pelo administrador | ALTA |
|**RF19**|O website deverá permitir que o administrador retire um relatório de seus usuários e poderá excluir o usuário que não faz login há mais de 2 anos | MÉDIA |

### Requisitos não Funcionais

A seguir, estão apresentados os requisitos não funcionais que o projeto deverá atender

| ID | DESCRIÇÃO DO REQUISITO | PRIORIDADE |
|:-------:|-------------------------|:-----------:|
|**RNF01**| O website deverá ser claro e objetivo, de fácil utilização ao usuário | ALTA | 
|**RNF02**| O website deverá conter cores suaves e de bom contraste com demais elementos da página | MÉDIA |
|**RNF03**| O website deverá conter formatação de fontes formais e de fácil leitura | MÉDIA |
|**RNF04**| O website deverá ter um tempo de resposta menor que 2 segundos na pesquisa e agendamento de consultas | ALTA |
|**RNF05**| O website deverá ser responsivo, permitindo a vizualização em computadores e dispositivos móveis. |MÉDIA|
|**RNF06**| O website deve ser publicado em uma plataforma acessível publicamente na Internet (GitHub). |ALTA|
|**RNF07**| O website deverá ser compatível com a maioria dos Browsers disponíveis no mercado (Safari, Google Chrome, Mozilla Firefox, etc.). |MÉDIA|

### Restrições

Os itens que limitarão a execução desse projeto de acordo com a proposta inicial. 

|ID| DESCRIÇÃO DA RESTRIÇÃO |
|:---:|----------------------------------------------------------------------------------------|
|**RE01**| O projeto está limitado ao uso de ferramentas web front-end                            |
|**RE02**| A data limite para entrega do projeto está condicionada a 25/06/2023                   |
|**RE03**| Não são permitidos o uso de frameworks no projeto                                      |
|**RE04**| O projeto deve ser desenvolvido em linguagem front-end (HTML, CSS, JavaScript, jQuery) |
