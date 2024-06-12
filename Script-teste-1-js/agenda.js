const agenda = {
  segunda: { comecaExp: 8 * 60, terminaExp: 13 * 60, horarios: [] },
  quarta: { comecaExp: 18 * 60, terminaExp: 22 * 60, horarios: [] },
  sexta: { comecaExp: 14 * 60, terminaExp: 17 * 60, horarios: [] },
};

function agendarPacientes(agenda, pacientes) {
  const dias = ["segunda", "quarta", "sexta"];
  let backPacientes = [...pacientes];

  for (let dia of dias) {
    let { comecaExp, terminaExp, horarios } = agenda[dia];
    let tempoAtual = comecaExp;

    while (tempoAtual < terminaExp && backPacientes.length > 0) {
      let paciente = backPacientes.shift();
      if (paciente.duracao + tempoAtual <= terminaExp) {
        horarios.push({
          nome: paciente.nome,
          comeca: comecaExp,
          termina: paciente.duracao + tempoAtual,
        });
        tempoAtual += paciente.duracao;
      } else {
        backPacientes.unshift(paciente);
        break;
      }
    }
  }

  return agenda;
}

const pacientes = [
  { nome: "Maria Clara", duracao: 80 },
  { nome: "Pedro Henrique", duracao: 90 },
  { nome: "Ana Luiza", duracao: 60 },
  { nome: "Gabriel Oliveira", duracao: 70 },
  { nome: "Laura Beatriz", duracao: 45 },
  { nome: "João Miguel", duracao: 80 },
  { nome: "Isabela Fernandes", duracao: 65 },
  { nome: "Lucas Santos", duracao: 85 },
  { nome: "Beatriz Almeida", duracao: 75 },
];

let resultado = agendarPacientes(agenda, pacientes);

for (let [dia, { horarios }] of Object.entries(resultado)) {
  console.log(`\n${dia.charAt(0).toUpperCase() + dia.slice(1)}:`);
  for (let consulta of horarios) {
    console.log(
      `${formatarTempo(consulta.comeca)} - ${formatarTempo(
        consulta.termina
      )}: ${consulta.nome}`
    );
  }
}

function formatarTempo(minutos) {
  const horas = Math.floor(minutos / 60);
  const min = minutos % 60;
  return `${String(horas).padStart(2, "0")}:${String(min).padStart(2, "0")}`;
}
