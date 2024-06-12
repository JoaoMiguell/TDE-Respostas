## Teste 1 - Lógica
Um cirurgião dentista possui uma agenda disponível para atendimento e precisa agendar os pacientes para a semana.

**Horários de atendimento**
- Segunda - 08h às 13h
- Quarta - 18h às 22h
- Sexta - 14h às 17h

**Pacientes**
| Nome | Tempo de Atendimento |
|-------------------|---------------------|
| Maria Clara | 80 min |
| Pedro Henrique | 90 min |
| Ana Luiza | 60 min |
| Gabriel Oliveira | 70 min |
| Laura Beatriz | 45 min |
| João Miguel | 80 min |
| Isabela Fernandes | 65 min |
| Lucas Santos | 85 min |
| Beatriz Almeida | 75 min |
 
**Regras**

- O agendamento não pode se repetir.
- O agendamento será somente para os 3 dias.
- O atendimento não poderá ser dividido em 2 dias.
- Todos devem ser atendidos.

***Com base nos dados fornecidos, organize a agenda do médico para os procedimentos da semana.***

## ***RESPOSTA***
#### Segunda - Tempo total em minutos 300
| Horario|Nome|Tempo da consulta (min)|Tempo restante (min)|
|-|-|-|-|
| 08:00 - 09:20 | Maria Clara | 80 | 220 |
| 09:20 - 10:50 | Pedro Henrique | 90 | 130 |
| 10:50 - 11:50 | Ana Luiza | 60 | 70 |
| 11:50 - 13:00 | Gabriel Oliveira | 70 | 0 |

#### Quarta - Tempo total em minutos 240
| Horario|Nome|Tempo da consulta (min)|Tempo restante (min)|
|-|-|-|-|
| 18:00 - 19:20 | João Miguel | 80 | 160 |
| 19:20 - 20:45 | Lucas Santos | 85 | 75 |
| 20:45 - 22:00 | Beatriz Almeida | 75 | 0 |

#### Sexta - Tempo total em minutos 180
| Horario|Nome|Tempo da consulta (min)|Tempo restante (min)|
|-|-|-|-|
| 14:00 - 14:45 | Laura Beatriz | 45 | 135 |
| 14:45 - 15:50 | Isabela Fernandes | 65 | 70 |


## Teste 2 - Interface

Desenvolva uma tela (interface) em que exiba uma agenda semanal (lista) com os seguintes dados:

|Data do Atendimento|Nome|Telefone|Data de Nascimento|Ações|
|---|---|---|---|---|
|31/05/2023 10:00|João da Silva|(35) 99657-9782|01/01/1983|Excluir|
|...|...|...|...|...|

*Você poderá colocar até 20 linhas na tela. Não se preocupe com as funcionalidades da tela, queremos avaliar somente o visual (UX/UI).*


## ***RESPOSTA***
- [Codigo fonte](./Codigo-teste-2-js/README.md)
- Visualizacao - https://tdeteste2-li2cbmhqn-joaomiguells-projects.vercel.app/
