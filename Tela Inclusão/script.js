const card = document.getElementById('card');

card.addEventListener('mousemove', (e) => {
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;  // posição do mouse dentro do card
  const y = e.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  // calcula o quanto a div deve girar (quanto mais longe do centro, mais gira)
  const rotateX = ((y - centerY) / 20) * -1;
  const rotateY = ((x - centerX) / 20);

  card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
});

card.addEventListener('mouseleave', () => {
  card.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
});


// Rolagem suave até a seção "Jornada do Conhecimento" com ajuste para o menu fixo
document.querySelector('.botao').addEventListener('click', function (event) {
  event.preventDefault();
  const destino = document.querySelector('.linhaDoTempo');
  
  // altura do menu fixo
  const offset = 100; // ajuste conforme a altura real do seu header
  
  const destinoPosicao = destino.getBoundingClientRect().top + window.scrollY - offset;

  window.scrollTo({
    top: destinoPosicao,
    behavior: 'smooth'
  });
});







const modalAccordion = document.getElementById('modalAccordion');
const modalTitulo = document.getElementById('modalTitulo');
const modalTexto = document.getElementById('modalTexto');
const fecharModal = document.getElementById('fecharModal');
const btnProximo = document.getElementById('proximo');

const etapas = document.querySelectorAll('.etapa');

const etapasInfo = [
  { titulo: "Antiguidade e Idade Média", texto: "A história da comunidade surda é marcada pela luta contra o preconceito e pela valorização de sua identidade e cultura, especialmente da língua de sinais. Na Antiguidade, os surdos eram vistos como incapazes ou punidos pelos deuses, sendo até condenados à morte em algumas sociedades. A educação formal começou no século XVI com Pedro Ponce de León, que ensinava surdos usando fala e sinais. No Brasil, o ensino de surdos teve início em 1857 com o INES, e a Libras foi oficialmente reconhecida em 2002, resultado da mobilização da própria comunidade surda." },

  { titulo: "Renascimento e Idade Moderna", texto: "Filósofos como Girolamo Cardano reconheceram a capacidade dos surdos para raciocínio e comunicação escrita e gestual. Escolas para surdos se tornaram mais comuns, especialmente entre nobres. No final do século XIX, o oralismo, focado em fala e leitura labial, prevaleceu, muitas vezes em detrimento das línguas de sinais. No Brasil, a educação formal começou em 1857 com o INES, que adotou o oralismo em 1911. Nas décadas de 1970 e 1980, surgiram o bilinguismo e a comunicação total, reconhecendo as línguas de sinais. A luta da comunidade surda resultou na Lei 10.436 de 2002, que reconheceu a Libras como meio legal de comunicação. Atualmente, a comunidade continua a lutar por acessibilidade, inclusão e valorização cultural, celebrando o Dia Nacional dos Surdos em 26 de setembro." },

  { titulo: "Direitos", texto: "No Brasil, os direitos das pessoas surdas garantem acessibilidade, inclusão social e valorização da Libras. Isso inclui educação bilíngue (Libras e Português), Atendimento Educacional Especializado, acesso à saúde com intérpretes e tecnologia assistiva, implantes cocleares e próteses auditivas pelo SUS. A legislação assegura participação no mercado de trabalho (Lei de Cotas), prioridade em atendimentos, isenção de impostos em veículos adaptados, e inclusão cultural, como legendas em programas de TV e intérpretes de Libras em horários políticos. A Libras é reconhecida legalmente como meio de comunicação e ensino obrigatório em cursos de formação de professores e fonoaudiologia. O RG pode identificar a surdez, facilitando o acesso a direitos e serviços." },

  { titulo: "Calendário", texto: "As principais datas da comunidade surda celebram a inclusão, a Libras e os direitos das pessoas surdas. Destacam-se: 24 de abril – Dia Nacional da Libras; 23 de setembro – Dia Internacional das Línguas de Sinais; 26 de setembro – Dia Nacional do Surdo; 30 de setembro – Dia Internacional do Surdo. Todas fazem parte do Setembro Azul, mês de conscientização e valorização cultural, reforçando o orgulho surdo, a importância da Libras e a inclusão social." },

  { titulo: "Libras", texto: "A Língua Brasileira de Sinais (Libras) é a língua oficial da comunidade surda no Brasil, reconhecida legalmente em 2002, com estrutura própria e visual-espacial, envolvendo mãos, movimentos, orientação e expressões faciais e corporais. É essencial para a identidade, autonomia e inclusão social das pessoas surdas, e não é universal, havendo diferentes línguas de sinais em outros países. A Libras possui alfabeto manual, números e indicações diretas de pessoas em vez de pronomes. Sua institucionalização começou em 1857 com o INES, influenciada pela Língua de Sinais Francesa. A Libras garante comunicação, preservação cultural e participação social da comunidade surda." }
];

let pontoAberto = null;

// Cria a linha de progresso
const timeline = document.querySelector('.timeline');
const progress = document.createElement('div');
progress.classList.add('timeline-progress');
timeline.appendChild(progress);

// Função para atualizar modal e linha de progresso
function abrirModal(index) {
  modalTitulo.textContent = etapasInfo[index].titulo;
  modalTexto.textContent = etapasInfo[index].texto;

  // Atualiza ponto ativo
  etapas.forEach((e, i) => e.classList.toggle('ativo', i <= index));

  // Atualiza largura da linha de progresso
  const largura = ((index + 1) / etapas.length) * 100;
  progress.style.width = `${largura}%`;

  // Abre modal
  modalAccordion.classList.remove('ativo');
  setTimeout(() => modalAccordion.classList.add('ativo'), 10);

  pontoAberto = index;
}

// Clicar nos pontos
etapas.forEach((etapa, index) => {
  etapa.addEventListener('click', () => {
    if (pontoAberto === index) {
      modalAccordion.classList.remove('ativo');
      pontoAberto = null;
      return;
    }
    abrirModal(index);
  });
});

// Botão próximo
btnProximo.addEventListener('click', () => {
  if (pontoAberto === null) {
    abrirModal(0);
  } else {
    const proximoIndex = (pontoAberto + 1) % etapas.length; // ciclo contínuo
    abrirModal(proximoIndex);
  }
});

// Fechar modal
fecharModal.addEventListener('click', () => {
  modalAccordion.classList.remove('ativo');
  pontoAberto = null;
});







// Seleciona os elementos do modal
const modalInfo = document.getElementById('modalInfo');
const modalInfoTitulo = document.getElementById('modalInfoTitulo');
const modalInfoTexto = document.getElementById('modalInfoTexto');
const fecharInfo = document.getElementById('fecharInfo');

// Conteúdos de cada botão "Saiba Mais"
const infoConteudo = [
  {
    titulo: "Cidadania e Acessibilidade",
    texto: "No Brasil, as pessoas surdas têm seus direitos de acessibilidade e cidadania garantidos por leis como a Lei nº 10.436/2002, que reconhece a Língua Brasileira de Sinais (Libras) como meio legal de comunicação, o Decreto nº 5.626/2005, que regula seu ensino e a formação de intérpretes, e a Lei de Cotas (Lei nº 8.213/91), que assegura inclusão no mercado de trabalho. A educação bilíngue, o Atendimento Educacional Especializado (AEE), recursos adaptados, além de acesso a intérpretes e próteses auditivas pelo SUS, garantem participação plena na sociedade. Como destaca o sociólogo Pierre Bourdieu, “a cidadania plena depende do acesso a instrumentos de comunicação”, e o médico José Carlos de Oliveira reforça que “a acessibilidade é também linguística e cultural”. A obrigatoriedade de closed captions em programas de TV e intérpretes em horários políticos fortalece a inclusão, tornando a Libras central para a autonomia, identidade cultural e exercício da cidadania da comunidade surda."
  },
  {
    titulo: "Acesso à Informação",
    texto: "No Brasil, o direito das pessoas surdas ao acesso à informação é garantido por leis como a Lei nº 10.098/2000, que estabelece normas gerais de acessibilidade em diferentes meios, e a Lei nº 13.146/2015 (Estatuto da Pessoa com Deficiência), que assegura comunicação acessível em serviços públicos, mídia e eventos. A Libras é reconhecida como instrumento essencial para essa acessibilidade, e a presença de intérpretes e recursos como closed captions são obrigatórios em programas de TV, telejornais e conteúdos governamentais. Segundo a socióloga Émile Durkheim, “a participação social plena depende do acesso igualitário às informações e símbolos coletivos”, enquanto o médico Miguel Jorge destaca que “a comunicação acessível é fator determinante para autonomia e qualidade de vida das pessoas surdas”. Garantir informação acessível permite que a comunidade surda exerça seus direitos, participe de decisões sociais e políticas e mantenha sua inclusão cultural na sociedade."
  },
  {
    titulo: "Saúde",
    texto: "No Brasil, o direito à saúde das pessoas surdas é garantido pelo Art. 196 da Constituição Federal, que assegura saúde como direito de todos, e pelo Decreto nº 9.612/2018, que estabelece diretrizes para acessibilidade em serviços de saúde, incluindo atendimento com intérpretes de Libras. O SUS oferece recursos como consultas com intérpretes, próteses auditivas e implantes cocleares, garantindo que a comunicação não seja barreira ao cuidado. A socióloga Marilena Chauí afirma que “a cidadania plena depende do acesso equitativo a serviços essenciais”, e o médico Roberto Kalil destaca que “a comunicação efetiva entre paciente e profissional de saúde é condição fundamental para diagnósticos precisos e tratamentos adequados”. Assim, a acessibilidade linguística na saúde assegura autonomia, inclusão e direitos iguais às pessoas surdas."
  }
];

// Seleciona os botões "Saiba Mais"
const botoesSaibaMais = document.querySelectorAll('.tudo2 .botao');

botoesSaibaMais.forEach((botao, index) => {
  botao.addEventListener('click', () => {
    modalInfoTitulo.textContent = infoConteudo[index].titulo;
    modalInfoTexto.textContent = infoConteudo[index].texto;
    modalInfo.classList.add('ativo');
  });
});

// Fecha o modal
fecharInfo.addEventListener('click', () => {
  modalInfo.classList.remove('ativo');
});

// Fecha modal ao clicar fora do conteúdo
modalInfo.addEventListener('click', (e) => {
  if(e.target === modalInfo){
    modalInfo.classList.remove('ativo');
  }
});