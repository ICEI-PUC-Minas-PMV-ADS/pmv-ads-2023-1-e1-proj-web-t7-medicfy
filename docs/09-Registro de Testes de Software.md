# Registro de Testes de Software

Relatório com a análise dos testes de software realizado. 

### CT-01 - Controle de Acesso

Ao clicar em AGENDAR CONSULTA/AGENDAR EXAME o site redireciona o usuário para página de login.

![ct 1](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t7-medicfy/assets/128761556/4c9cd2c0-1578-4294-bf0e-7820428125c0) <br /> <br />

Caso os dados fornecidos pelo usuário não estejam no banco de dados, aparece um erro de login. <br>

![login incorreto](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t7-medicfy/assets/128761556/521839be-9bb5-4ffd-a4a8-1bf1e053971a) <br /> <br />


Se não possuir um cadastro, basta clicar em CADASTRAR ou digitar os dados novamente caso tenha ocorrido algum erro ao inserí-los. <br>
![ct1 1](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t7-medicfy/assets/128761556/35a39e71-ad33-482e-9ee1-e70136494f6c)


### CT-02 - Edição de dados

Após realizado cadastro, o usuário poderá editar qualquer dado, exceto o CPF que fica com o campo inabilitado para edição. 

![ct editar dados](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t7-medicfy/assets/128761556/1f5844af-de04-4012-9d86-4e93e889a494) <br /> <br />

![ct editar cadastros](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t7-medicfy/assets/128761556/f8fbe9bc-69ab-4924-a906-c079e2f64a76) <br /> <br />


![ct editar cadastros 2](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t7-medicfy/assets/128761556/f1c75271-033e-420a-be4d-d1ee27df6ba0)


### CT-03 - Notícias sobre saúde e bem estar

Para acessar as notícias sobre saúde, basta o usuário clicar no link. Não é necessário cadastro para isso. 


![teste noticia](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t7-medicfy/assets/128761556/3e3e4ea9-d273-446a-bac5-120fca45e569) <br /> <br />

![teste noticia 2](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t7-medicfy/assets/128761556/4575a885-b1b9-4436-a714-a81aa7ea6e63)

### CT-000000 - Agendamento de consultas e exames

Utilizamos a ferramenta do navegador (local storage) para criar um banco de dados temporário com a finalidade de salvar dados e também resgatar dados e apresentar ao usuário.

Página de agendamento de consultas
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t7-medicfy/assets/128761321/5c27c24f-d1c3-46cd-aee3-5d55e5a14ae7)
Ao selecionar a especialidade, o site cria cards predefinidos para cada especialidade ou exame
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t7-medicfy/assets/128761321/cd41484b-5e17-45fa-8ef7-a8299c565be1)
Teste de agendamento de consulta
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t7-medicfy/assets/128761321/8b37d5e5-0585-4928-866c-5abca449b9ce)
Na página de perfil, teste do botão "Consultas"
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t7-medicfy/assets/128761321/246acccd-852f-489f-b5b0-446a3d3dba2b)
Em caso de não haver agendamentos, apresenta a mensagem abaixo. Teste do botão "Exames" sem agendamento
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t7-medicfy/assets/128761321/8ae33f68-206b-4e02-900e-0ae24c7e050e)
Teste de agendamento de exames
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t7-medicfy/assets/128761321/bdc07369-eeb2-4f87-9a16-36961de685f1)
Na página de perfil, teste do botão "Exames"
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t7-medicfy/assets/128761321/cb40f28e-9fe2-4060-80fd-05b5239127fe)
