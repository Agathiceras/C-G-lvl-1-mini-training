/* ============================================================
   EM course training · Code & Game 1 [2196] · PORTUGUESE (Brazil)
   Translate only the text inside quotes / backticks. Keep HTML tags, {placeholders},
   keys (t:, id:, a:…), links, file names and the 'yes' / 'no' answer keys unchanged.
   ============================================================ */
window.COURSE = { lang: 'pt' };

/* ---------------- Interface strings ---------------- */
COURSE.ui = {
  pageTitle: 'Formação de curso EM',
  footer: 'kodland · Novo Modelo Educacional · Formação de curso',
  devLink: '🛠 Developer',
  logoSub: 'Novo Modelo Educacional',
  navHome: '← Início',
  navBackModule: '← Voltar ao módulo',
  moduleN: 'Módulo {n}',
  badgeStart: 'Começar →',
  badgeLocked: '🔒 Conclua o Módulo {n}',
  badgeDone: '✓ Concluído · {score}%',
  progLabel: 'módulos concluídos',
  progAllDone: 'Módulos concluídos 🎉',
  eyebrow: '{course} · Módulo {n} de {total}',
  ctaTitle: 'Verificação do módulo',
  ctaText: '{n} perguntas curtas. Acerte 70% ou mais para passar.',
  lockSim: '🔒 Conclua a simulação de publicação no Kodland Sparks (acima) para liberar a verificação.',
  startCheck: 'Começar a verificação →',
  retake: '🔁 Refazer a verificação',
  qmeta: '{e} Verificação do Módulo {n} · Pergunta {i} de {total}',
  fbRight: '✅ <b>Correto!</b> ',
  fbWrong: '❌ <b>Não exatamente.</b> ',
  nextQuestion: 'Próxima pergunta →',
  seeResult: 'Ver meu resultado →',
  passedTitle: 'Você passou!',
  failTitle: 'Quase lá',
  scoreLine: 'Você acertou <b>{score} de {n}</b>.',
  failText: 'É preciso acertar 70% ou mais. Revise o módulo e tente de novo — você pode refazer quantas vezes precisar.',
  nextUnlocked: '<b>Módulo {n} · {title}</b> foi liberado.',
  goModule: 'Ir para o Módulo {n} →',
  allDoneText: 'Você concluiu os dois módulos desta formação.',
  seeNext: 'Ver o próximo passo →',
  reviewModule: '📖 Revisar o módulo',
  homeDoneTitle: 'Módulos concluídos!',
  homeDoneText: 'Falta um último passo: o teste DST na página da formação no LMS.',
  homeDoneBtn: 'Ver o que fazer agora →',
  doneBadge: '✓ Concluído',
  doneBack: 'Voltar aos módulos',
  lockedTitle: 'Ainda bloqueado',
  lockedModule: 'Conclua primeiro o Módulo {n}.',
  lockedStep: 'Conclua o passo anterior para liberar este.',
  ok: 'OK',
  linkOpen: 'Abrir ↗',
  projPlay: '▶ Abrir no Kodland Sparks ↗',
  simOpen: '▶ Abrir a simulação aqui',
  simClose: '✕ Fechar a simulação',
  simNewTab: 'Abrir em outra aba ↗',
  simDone: '✅ Simulação concluída',
  simTodo: '○ Simulação pendente',
  checkTag: 'Marque',
  mythTag: 'Mito',
  mythTap: 'Toque para ver a realidade →',
  mythReality: 'Realidade ✓',
  sortWrong: '✗ Não exatamente.'
};

/* ---------------- Course ---------------- */
COURSE.id = 'cg1';
COURSE.code = '2196';
COURSE.title = 'Code & Game 1';
COURSE.color = '#8B5CF6';

COURSE.home = {
  kicker: '🎓 Formação de curso · [2196]',
  title: 'Code & Game <span class="hl">1</span>',
  lead: 'Para alunos de 8–9 anos: do protótipo pronto em Scratch ao próprio projeto, passando por jogos, um livro, aplicativos para celular e um mundo 3D. Dois módulos: o conteúdo do curso e a parte técnica das aulas.',
  facts: [
    ['🧑‍💻', '<b>No seu ritmo.</b> O progresso fica salvo neste navegador. Cada módulo termina com uma verificação curta.'],
    ['⚡', '<b>Prática incluída.</b> Uma simulação do Kodland Sparks para treinar a publicação de projetos e os problemas mais comuns.']
  ]
};

/* Notes shown at the top of the home page */
COURSE.notes = [
  { kind:'pink', e:'🧭', html:'<b>Antes de começar:</b> faça primeiro a <b>formação principal do Novo Modelo Educacional (EM)</b>. Esta formação do curso vem depois e parte do que você já viu lá: o Backoffice e as Teacher Notes, o Classroom com o Follow Mode, o tour pelo Kodland Sparks e a qualidade da aula.' },
  { kind:'warn', e:'🔄', html:'<b>O conteúdo das aulas no Backoffice é atualizado continuamente.</b> A partir do feedback de alunos e tutores, as aulas passam por melhorias constantes. Não se preocupe: quando houver mudanças, você será avisado com antecedência para preparar a aula.' }
];

/* ---------------- Modules ---------------- */
COURSE.modules = [
  { id:'m1', n:1, e:'🧪', color:'#8B5CF6', title:'O conteúdo do curso',
    desc:'Os dados gerais do curso, o que o aluno conquista, a Aula 1 e projetos reais publicados por alunos.',
    obj:'Prepare-se para dar a Aula 1 do Code & Game 1. Nela, alunos de 8 a 9 anos abrem um projeto pronto no Scratch, montam a dança de um personagem e publicam o show no Kodland Sparks.',
    offer:[['🔬','Conhecer os dados gerais do curso e o que o aluno conquista.'],['📖','Saber o que acontece na Aula 1.'],['⚡','Ver projetos reais publicados por alunos no Kodland Sparks.'],['📘','Revisar a aula e as Teacher Notes no Backoffice.']],
    sections:[
      { id:'ov', e:'🔬', title:'O curso', blocks:[
        { t:'meta', items:[['🧒','Idade','8–9 anos'],['⏱️','Aula','60 min'],['📚','Programa','40 aulas · 9 módulos'],['🧩','Módulo 1','Scratch']] },
        { t:'trio', items:[
          ['🧩','Do protótipo ao projeto próprio','As primeiras aulas começam com um protótipo pronto, e o resultado aparece na hora. Depois, as escolhas vão aumentando: testes, justificativas, regras próprias. O último módulo é feito de forma totalmente autônoma pelo aluno.'],
          ['🤖','A IA ajuda, o aluno decide','A IA sugere o próximo passo, propõe ideias, cria conteúdo e ajuda a encontrar erros. Mas ela não programa a mecânica do jogo no lugar do aluno.'],
          ['🔍','O erro faz parte do processo','Quando algo não funciona: «O que devia acontecer? O que aconteceu?». Uma verificação por vez, para o aluno achar a causa — e não só trocar os blocos de lugar.']
        ]},
        { t:'callout', kind:'good', e:'📣', html:'Cada módulo termina com um projeto publicado, que pode ser mostrado por link. No final do curso, o aluno apresenta o projeto autoral no festival.' }
      ]},
      { id:'goals', e:'🎓', title:'Qual é o resultado para o aluno', blocks:[
        { t:'p', html:'Ao final do curso, o aluno vai alcançar estas conquistas:' },
        { t:'cards', cols:2, items:[
          ['🧱','Cria projetos','Jogos no Scratch, um jogo de navegador, um livro no Canva, uma galeria de criaturas e um tamagotchi, aplicativos para celular e um mundo 3D. Os projetos são publicados e podem ser mostrados por link.'],
          ['🚀','Leva o projeto até o festival','Testa, publica, recebe feedback e aprimora. No fim do curso, apresenta o projeto autoral no festival, na ferramenta que escolher.'],
          ['🤖','Trabalha com IA','Pede à IA ideias, imagens, narração e dicas, confere o resultado e decide sozinho o que manter. A IA não faz o jogo pela criança.'],
          ['💡','Criatividade','A mecânica já vem definida, mas os heróis, o estilo, os nomes e as melhorias ficam por conta da criança, que aprende a explicar cada decisão tomada.'],
          ['🤝','Colaboração e comunicação','O feedback vem do professor, da turma e do próprio aluno. O aluno apresenta o projeto e explica as próprias decisões.'],
          ['🧠','Pensamento sistêmico','Enxerga do que um jogo é feito (objetivo, ação, obstáculo, progresso, vitória) e procura e corrige os erros, em vez de ter medo deles.']
        ]}
      ]},
      { id:'les', e:'📖', title:'A Aula 1', blocks:[
        { t:'p', html:'O Módulo 1, «A dança do herói e o Guardião do Portal», começa com um show de dança no Scratch. Abra a Aula 1 e leia o que você precisa saber, o resultado-chave, o seu papel e os pontos de atenção.' },
        { t:'lessons', key:'m1', items:[
          { tab:'M1A1', e:'💃', h:'Aula 1 — Dance Party', p:'Primeira aula do programa. Os alunos conhecem o grupo e abrem um projeto pronto em Scratch no Kodland Sparks, escolhem um personagem e montam a dança dele. Depois pedem um conselho ao Robby (o assistente de IA), acrescentam música e luz, e testam e publicam o show.',
            acc:[['📚','O que você precisa saber','<ul><li>O projeto abre pelo botão da aula, no <b>Scratch dentro do Kodland Sparks</b>. Os personagens (<b>sprites</b>) têm os blocos deles; ao clicar em um, aparecem os blocos dele.</li><li>A ideia central: <b>evento → ação → resultado</b>. Apertar Espaço é o evento; o bloco amarelo «quando a tecla Espaço for pressionada» dispara os comandos.</li><li>Três blocos úteis: <b>próximo traje</b>, <b>esperar</b> e <b>repetir</b>.</li><li><b>Robby</b>, o assistente de IA ao lado do editor, ajuda a sugerir o próximo passo. Hoje o foco é música e luz.</li></ul>'],
                 ['🎯','Resultado-chave','<ul><li>O personagem escolhido dança ao apertar a tecla Espaço.</li><li>O aluno aponta o bloco que inicia a dança e explica o que acontece depois de pressionar a tecla.</li><li>Compara duas pausas na dança e escolhe a que prefere.</li><li>Recebe e discute o conselho do Robby; no palco (<b>Stage</b>) montam-se a música e a mudança de cor.</li><li>Salva e publica o projeto, enviando o link no cartão da atividade.</li></ul>'],
                 ['🧑‍🏫','O seu papel','<ul><li>Apresente o mundo do curso em poucas palavras, mostre um exemplo do show e deixe as crianças se conhecerem (cerca de 15–20 segundos cada).</li><li>Explique com a tela e a ação: escolheu o personagem, achou os blocos dele, conectou, apertou a tecla e viu o resultado.</li><li>Primeiro deixe o aluno tentar sozinho; só depois guie com o exemplo do personagem escolhido.</li><li>Quando algo não funciona, pergunte: <i>«O que devia acontecer? O que aconteceu?»</i> Sugira uma verificação e espere a nova execução.</li></ul>'],
                 ['📌','Pontos de atenção','<ul><li>Se a tecla Espaço não inicia a dança, peça para clicar com o mouse no palco e depois confira se os comandos estão conectados ao bloco do evento e dentro do <b>repetir</b>.</li><li>No Palco são necessários <b>dois programas separados</b>: música e mudança de cor, cada um com a própria bandeira e o próprio <b>sempre</b>.</li><li>O Robby ajuda a sugerir; <b>quem monta e testa é o aluno</b>. Antes de pedir, reúna as ideias das crianças e, depois da resposta, pergunte se o conselho serve.</li></ul>'],
                 ['⚙️','Aspectos técnicos','<ul><li>Antes da aula, abra o projeto inicial, confira o login no Sparks, a abertura pelo botão da aula, o Robby, o salvamento e a publicação.</li><li>Ao publicar, o aluno preenche o título e a descrição, definindo as configurações de visibilidade. <b>Vale lembrar: publicar no Sparks e enviar o link na plataforma são dois passos diferentes.</b></li><li>Confira se os links enviados estão abrindo corretamente.</li></ul>']] }
        ]},
        { t:'callout', kind:'tip', e:'🗺️', html:'A primeira Teacher Note da aula tem o plano completo: resumo, resultado-chave, os tempos de cada cartão, o seu papel e os pontos de atenção. Há também um vídeo de preparação. <b>Leia todas as Teacher Notes antes da aula.</b>' }
      ]},
      { id:'proj', e:'⚡', title:'Projetos reais de alunos', blocks:[
        { t:'p', html:'É assim que ficam os projetos do Code & Game 1 depois que os alunos os publicam no Kodland Sparks. Os dois foram feitos por <b>alunos reais</b> do curso — abra-os para jogar na plataforma:' },
        { t:'projects', items:[
          { href:'https://portfolio.kodland.org/sonia55667/cmva7brdz06mont01k3fsw4zb', img:'shared/images/posion.png', e:'🧪', color:'#d946ef', tag:'Scratch', title:'posion', by:'sonia55667', desc:'Um projeto em Scratch num laboratório mágico, com poções e um portal brilhante.' },
          { href:'https://portfolio.kodland.org/juanavalentina78262/cmv8vx5p50hb0qp2tg720knef', e:'🐹', color:'#f59e0b', tag:'Scratch', fw:true, title:'hamster scratch', by:'juanavalentina78262', desc:'“O hamster do Scratch… sim, como o gato, mas em vez de um gato é um HAMSTERRRR” <i>(traduzido do espanhol)</i>.' }
        ]},
        { t:'callout', kind:'tip', e:'💬', html:'Repare na etiqueta <b>Feedback wanted</b> no segundo projeto: o aluno ativou <b>Request feedback</b> ao publicar. Uma avaliação curta em três campos — impressão geral, pontos fortes e uma coisa para melhorar — faz muita diferença.' }
      ]},
      { id:'bo', e:'📘', title:'Revise as aulas no Backoffice', blocks:[
        { t:'p', html:'Antes da verificação, abra o curso no Backoffice e leia a aula no seu ritmo — os cartões de atividade e as Teacher Notes estão todos lá. Não há tempo limite.' },
        { t:'link', href:'https://bo.kodland.org/courses/2196', e:'📘', title:'Abrir o curso no Backoffice', small:'[2196] Code & Game 1 — as aulas e as Teacher Notes' },
        { t:'callout', kind:'warn', e:'🔄', html:'O conteúdo das aulas no Backoffice vai sendo atualizado com o feedback de alunos e tutores. Quando houver mudanças, você será avisado com antecedência para preparar a aula.' }
      ]}
    ]},

  { id:'m2', n:2, e:'⚙️', color:'#F03D9E', title:'A parte técnica das aulas',
    desc:'Um início forte, publicar e enviar o link em todas as aulas, e os problemas técnicos mais comuns.',
    obj:'Saiba o que garante o sucesso técnico das aulas do Code & Game 1: um início forte, a publicação no Kodland Sparks e o envio do link em <b>todas</b> as aulas, e as soluções para os problemas técnicos mais comuns.',
    needs:['sparksPublish'],
    offer:[['🚀','Fazer da A1 um início forte, com um resultado rápido e visível.'],['📤','Garantir que todos publiquem e enviem o link em todas as aulas — e conferir.'],['🌍','Explicar aos alunos por que o Sparks vale a pena.']],
    sections:[
      { id:'focus', e:'🎯', title:'Os 3 pontos que garantem o sucesso', blocks:[
        { t:'p', html:'Estes são os pontos de foco definidos pelo time de produto para o Code & Game. Abra cada um:' },
        { t:'acc', items:[
          ['🚀','A1: um início forte','<p>A primeira aula decide se o aluno quer voltar. Os objetivos são <b>conhecer o grupo</b> e chegar a um <b>resultado rápido e visível</b>.</p><ul><li>Use bem a apresentação: chame cada aluno pelo nome e conecte os interesses dele ao projeto.</li><li>Mostre o resultado final logo no começo (o show do Dance Party).</li><li>Garanta que <b>cada aluno termine a aula com algo funcionando</b> — mesmo que seja a versão mínima.</li></ul>'],
          ['📤','Publicar e enviar o link em todas as aulas','<p>Em <b>todas as aulas</b>, desde a Aula 1, o aluno publica o projeto no Kodland Sparks e envia o link, e você confere.</p><ul><li>O link enviado no cartão deve ser o do <b>projeto já publicado</b>.</li><li>Na plataforma, deve ser enviado <b>apenas o link</b>.</li><li>Reserve um tempo no fim da aula para essa etapa — a publicação não pode ser deixada para depois.</li></ul>'],
          ['🌍','Os benefícios do Sparks','<p>Explique aos alunos por que publicar vale a pena:</p><ul><li><b>Comunidade:</b> o projeto aparece no Feed e no portfólio.</li><li><b>Playtest:</b> outros jogadores testam o jogo de verdade.</li><li><b>Feedback:</b> dos jogadores (com <b>Request feedback</b>) e da IA, que destaca pontos fortes — e ainda rende cristais.</li></ul>']
        ]}
      ]},
      { id:'publish', e:'📤', title:'Publicar no Kodland Sparks em todas as aulas', blocks:[
        { t:'p', html:'Publicar parece simples, mas é aqui que aparecem os problemas que chegam até você: o link que não abre, o projeto que não aparece no Feed. Estes são os passos que todo aluno faz no fim de cada aula:' },
        { t:'steps', items:[
          ['Dar um nome e uma descrição ao projeto','O aluno preenche o título e a descrição. Um projeto sem nome é difícil de encontrar.'],
          ['Clicar em Publish','O botão abre o formulário de publicação, onde o aluno escolhe as configurações do projeto.'],
          ['Escolher a visibilidade','<b>Public</b> aparece no Feed e no portfólio público. <b>Friends only</b> só para amigos e professores. <b>Only me</b> deixa o projeto privado — ninguém mais consegue abrir o link, nem você. O essencial é garantir que <b>o tutor tenha acesso ao link</b>.'],
          ['Ativar Request feedback (se o aluno quiser)','Assim outros alunos podem deixar um feedback estruturado. Funciona só em projetos públicos.'],
          ['Copiar o link e enviar no cartão','O link é o endereço da página do projeto: em <b>My projects</b>, o aluno abre o <b>projeto publicado</b> e copia o link da <b>barra de endereço do navegador</b>. Publicar no Sparks e enviar o link na plataforma da Kodland são <b>dois passos diferentes</b>. Nos cartões, deve constar apenas o link.']
        ]},
        { t:'sim', flag:'sparksPublish', src:'sparks-publish/Sparks_Publish.html', e:'⚡', badge:'Simulação', title:'Publicar no Kodland Sparks', text:'Uma réplica do Kodland Sparks: você publica um projeto como uma aluna, conhece as três opções de visibilidade e resolve os dois problemas mais comuns. Cerca de 5 minutos. A verificação do módulo é liberada quando você termina.' }
      ]},
      { id:'trouble', e:'🛠️', title:'Quando algo dá errado', blocks:[
        { t:'acc', open:false, items:[
          ['🔒','O link do aluno não abre','<p>Confira primeiro se a publicação terminou e peça para copiar o link de novo. Se mesmo assim não abrir, quase sempre o projeto foi salvo como <b>Only me</b> (aparece a etiqueta <b>Private project</b>).</p><p>Peça ao aluno: <b>My projects → abrir o projeto → Edit → Public → Publish</b>. O link continua o mesmo e passa a abrir para todos. Se não resolver, peça para o aluno fazer o compartilhamento de tela.</p>'],
          ['🔍','O projeto não aparece no Feed','<p>O Feed mostra o último tipo de projeto filtrado. Peça ao aluno que <b>filtre pelo tipo do projeto</b> (por exemplo, <b>Scratch</b>) ou que busque pelo apelido.</p>'],
          ['💃','A tecla Espaço não inicia a dança (Aula 1)','<p>Peça para clicar com o mouse no palco e tentar de novo. Depois confira se os comandos estão conectados ao bloco do evento e dentro do <b>repetir</b>.</p>']
        ]}
      ]},
      { id:'check', e:'✅', title:'Checklist técnico de cada aula', blocks:[
        { t:'check', title:'✅ Meu checklist técnico', groups:[
          { h:'☑️ Antes da aula', items:['Li todas as Teacher Notes da aula e vi o vídeo de preparação.','Abri o projeto inicial da aula e conferi o login no Sparks.'] },
          { h:'🎬 Durante a aula', items:['Cada aluno abriu o projeto inicial da aula.','Uso o Follow Mode para os cartões e compartilho só a aba da ferramenta nas demonstrações.'] },
          { h:'📤 No fim da aula', items:['Todos publicaram o projeto no Sparks.','Todos enviaram o link do projeto publicado no cartão da aula.','Abri pelo menos alguns links para conferir se estão funcionando.'] }
        ]}
      ]}
    ]}
];

/* ---------------- Module checks ('a' = number of the correct option, 0 = first) ---------------- */
COURSE.quiz = {
  m1:[
    { q:'Para quem é o Code & Game 1 e quanto dura cada aula?',
      o:['Para alunos de 8–9 anos, com aulas de 60 minutos em grupo.','Para alunos de 13–17 anos, com aulas de 90 minutos.','Para alunos de 6–7 anos, com aulas de 30 minutos.'],
      a:0, e:'O Code & Game 1 é para alunos de 8–9 anos, com 40 aulas de 60 minutos em grupo.' },
    { q:'Qual é a ideia central da Aula 1 (Dance Party)?',
      o:['Programar cada bloco do zero, sem nenhum projeto pronto.','Evento → ação → resultado: apertar Espaço é o evento, e o bloco «quando a tecla Espaço for pressionada» dispara os comandos da dança.','Criar um jogo completo, com fases e inimigos.'],
      a:1, e:'Na Aula 1 os alunos abrem um projeto pronto e montam a dança de um personagem: o evento (tecla Espaço) dispara a ação e produz o resultado.' },
    { q:'Qual é o papel da IA nos projetos do curso?',
      o:['Programa a mecânica do jogo no lugar do aluno.','Sugere o próximo passo, propõe ideias, cria conteúdo e ajuda a encontrar erros; o aluno confere e decide.','Não é usada no curso.'],
      a:1, e:'A IA ajuda, o aluno decide. Ela não programa a mecânica do jogo no lugar da criança.' },
    { q:'O que o aluno leva do curso, no fim?',
      o:['Uma prova final escrita sobre Scratch.','Projetos publicados (jogos, um livro, aplicativos e um mundo 3D) e um projeto autoral apresentado no festival.','Só o primeiro jogo do Módulo 1.'],
      a:1, e:'Cada módulo termina com um projeto publicado, e no fim o aluno apresenta o projeto autoral no festival.' },
    { ctx:'Um aluno diz que a dança não funciona e te pede para arrumar.',
      q:'Qual é a melhor resposta?',
      o:['Reorganizar os blocos na tela dele.','Perguntar «O que devia acontecer? O que aconteceu?», sugerir uma verificação e esperar a nova execução.','Dizer que ele tente de novo em casa.'],
      a:1, e:'Ajude o aluno a achar a causa do erro, com uma verificação por vez, sem resolver o bloco por ele.' }
  ],
  m2:[
    { q:'Quando os alunos publicam o primeiro projeto no Kodland Sparks e enviam o link?',
      o:['Só quando o projeto está perfeito.','Já na Aula 1 — e você confere se consegue abrir o link.','Só no fim do módulo.'],
      a:1, e:'Desde a Aula 1 o aluno publica o projeto e envia o link, e você confere se consegue abrir.' },
    { q:'Qual é a relação entre publicar no Sparks e enviar o link na plataforma?',
      o:['Basta publicar: o link vai sozinho para a plataforma.','São dois passos diferentes: o aluno publica o projeto e depois envia o link do projeto publicado.','Basta enviar o link: o projeto não precisa ser publicado.'],
      a:1, e:'Publicar e enviar o link são dois passos diferentes, e os dois são necessários.' },
    { ctx:'O link de um aluno não abre para você e, no portfólio dele, o projeto aparece como “Private project”.',
      q:'O que ele deve fazer?',
      o:['Apagar o projeto e criar um novo.','Esperar até o dia seguinte.','My projects → abrir o projeto → Edit → Public → Publish.'],
      a:2, e:'O projeto foi salvo como Only me. Com Edit → Public → Publish, o mesmo link passa a abrir para todos.' },
    { ctx:'Uma aluna diz que o projeto dela está público, mas não aparece no Feed.',
      q:'Qual é a orientação certa?',
      o:['Filtrar o Feed pelo tipo do projeto (ou buscar pelo apelido).','Apagar e publicar de novo.','Esperar alguns dias.'],
      a:0, e:'O Feed mostra um tipo de projeto por vez. Filtrando pelo tipo certo, o projeto aparece.' },
    { ctx:'Na Aula 1, a tecla Espaço não inicia a dança do personagem de um aluno.',
      q:'O que você orienta primeiro?',
      o:['Pedir que apague o personagem e escolha outro.','Clicar com o mouse no palco e tentar de novo; depois conferir se os comandos estão conectados ao bloco do evento e dentro do «repetir».','Reorganizar os blocos por ele.'],
      a:1, e:'Primeiro clicar no palco e tentar de novo; depois conferir a conexão com o bloco do evento e o «repetir». Quem monta e testa é o aluno.' },
    { q:'Como você mostra os cartões da aula e as demonstrações?',
      o:['Compartilhando a tela inteira, com tudo aberto.','Com o Follow Mode para os cartões e compartilhando só a aba da ferramenta nas demonstrações.','Sem compartilhar nada: os alunos leem sozinhos.'],
      a:1, e:'Follow Mode para os cartões; nas demonstrações, só a aba da ferramenta.' }
  ]
};

/* ---------------- Final page ---------------- */
COURSE.done = {
  title: 'Módulos concluídos!',
  html: `<p>Você está quase lá! Volte à página da formação no LMS, onde você acessou esta formação. O teste DST está logo abaixo da formação.</p>
    <p>👉 <b>Você precisa fazer e passar no teste DST para que a formação seja considerada concluída.</b> Se você não fizer o DST, a formação vai continuar incompleta e pode expirar.</p>
    <p>A nota mínima para passar é <b>80%</b>.</p>
    <p>Boa sorte! ❤️</p>`,
  nexts: [
    ['📒', '<b>Antes da aula:</b> leia as Teacher Notes no Backoffice e veja o vídeo de preparação.'],
    ['📤', '<b>Desde a Aula 1:</b> todos publicam no Sparks e enviam o link do projeto publicado no cartão.'],
    ['🤖', '<b>A IA ajuda, o aluno decide:</b> o aluno confere o resultado e decide o que manter.'],
    ['🚀', '<b>A1:</b> conheça o grupo e chegue rápido a um resultado visível.']
  ]
};
