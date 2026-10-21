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
  lead: 'Creator Lab, para alunos de 8–9 anos: de um protótipo em Scratch que já funciona até o primeiro jogo publicado. Dois módulos: o conteúdo do curso e a parte técnica das aulas.',
  facts: [
    ['🧑‍💻', '<b>No seu ritmo.</b> O progresso fica salvo neste navegador. Cada módulo termina com uma verificação curta.'],
    ['⚡', '<b>Prática incluída.</b> Uma simulação do Kodland Sparks para treinar a publicação de projetos e os problemas mais comuns.']
  ]
};

/* Notes shown at the top of the home page */
COURSE.notes = [
  { kind:'pink', e:'🧭', html:'<b>Antes de começar:</b> faça primeiro a <b>formação principal do Novo Modelo Educacional (EM)</b>. Esta formação do curso vem depois e parte do que você já viu lá: o Backoffice e as Teacher Notes, o Classroom com o Follow Mode, o tour pelo Kodland Sparks e a qualidade da aula.' },
  { kind:'warn', e:'🔄', html:'<b>O conteúdo das aulas no Backoffice vai sendo atualizado.</b> Com o feedback de alunos e tutores, as aulas estão sempre sendo melhoradas. Não se preocupe: quando houver mudanças, você será avisado com antecedência para preparar a aula.' }
];

/* ---------------- Modules ---------------- */
COURSE.modules = [
  { id:'m1', n:1, e:'🧪', color:'#8B5CF6', title:'O conteúdo do curso',
    desc:'A história, as 4 primeiras aulas e projetos reais publicados por alunos.',
    obj:'Prepare-se para dar as primeiras aulas do Code & Game 1, em que alunos de 8–9 anos vão de um protótipo que já funciona até o próprio jogo publicado.',
    offer:[['🔬','Conhecer a história do Creator Lab e como o curso é organizado.'],['📖','Saber o que acontece em cada uma das 4 primeiras aulas.'],['⚡','Ver projetos reais publicados por alunos no Kodland Sparks.'],['📘','Revisar as aulas e as Teacher Notes no Backoffice.']],
    sections:[
      { id:'ov', e:'🔬', title:'O curso', blocks:[
        { t:'meta', items:[['🧒','Idade','8–9 anos'],['⏱️','Aula','60 min'],['📚','Programa','40 aulas'],['🧩','Ferramenta','Scratch']] },
        { t:'p', html:'Os alunos entram no <b>Creator Lab</b>, um laboratório criativo secreto. Cada projeto é uma <b>missão</b>, e o <b>AI Buddy</b> acompanha o aluno com dicas rápidas, ideias criativas e checklists de autoavaliação. No primeiro módulo eles vão de dar vida a um palco de dança até publicar o primeiro jogo: <i>Guardião do Portal</i>.' },
        { t:'ba', before:['O curso anterior de Scratch','Indutivo: primeiro a ferramenta e os conceitos, depois o projeto. Habilidades com IA não eram ensinadas.'], after:['Code & Game 1','Dedutivo: um protótipo completo, mas imperfeito → exploração → melhoria. <b>O AI Buddy está integrado, com o Kodland Learning Loop explícito.</b>'] },
        { t:'callout', kind:'warn', e:'🧒', html:'Este é o <b>grupo mais novo</b> dos cursos do novo modelo. Vale o <b>teste inverso</b>: o projeto precisa continuar 100% possível e com sentido <i>sem</i> IA. Proteja a sensação de <i>“fui eu que fiz”</i>.' }
      ]},
      { id:'les', e:'📖', title:'As 4 primeiras aulas', blocks:[
        { t:'p', html:'O Módulo 1 é um ciclo completo de projeto. Abra cada aula e leia o que você precisa saber, os pontos de atenção, os objetivos, o seu papel e os detalhes técnicos.' },
        { t:'lessons', key:'m1', items:[
          { tab:'M1A1', e:'💃', h:'Aula 1 — Dance Party: dando vida ao palco', p:'Primeira aula do programa. Os alunos exploram um protótipo em Scratch que já funciona (um personagem dançando com música) e o personalizam: escolhem o personagem e a música, geram um fundo com IA e programam pelo menos 2 reações a teclas diferentes.',
            acc:[['📚','O que você precisa saber','<ul><li>Blocos básicos do Scratch: eventos, movimento, aparência e som.</li><li>Como carregar um projeto <b>.sb3</b> no Creator Lab — <b>com Upload, nunca com duplo clique</b>.</li><li>Usar o AI Sandbox para gerar um fundo (prompt → baixar o PNG → enviar ao Scratch).</li></ul>'],
                 ['📌','Pontos de atenção','<ul><li><b>Variáveis, laços e condições complexas ainda não são ensinados</b> — a aula limita o foco de propósito.</li><li>Erros (blocos mal encaixados, não achar onde salvar) são material de aprendizagem, não fracassos.</li><li>O template já traz os blocos necessários — não é preciso procurar nas categorias.</li></ul>'],
                 ['🎯','Objetivos de aprendizagem','<ul><li>O aluno entende a relação <b>evento → ação → resultado</b>.</li><li>Personaliza a dança mudando valores de movimento e adiciona um fundo gerado com IA.</li><li>Explica com as próprias palavras pelo menos uma relação evento–ação–resultado.</li></ul>'],
                 ['🧑‍🏫','O seu papel','<ul><li>Mostre <b>primeiro o resultado final</b> (o show pronto) e guie a exploração antes de explicar os blocos.</li><li>Dê só dicas pontuais — <b>nunca resolva o bloco pelo aluno</b>.</li><li>Encerre com um desfile de projetos e o feedback do AI Buddy (um ponto forte + uma ideia).</li></ul>'],
                 ['⚙️','Aspectos técnicos','<ul><li>O fundo de IA não pode ter personagens e precisa deixar espaço no centro para o personagem.</li><li><b>Publicar no Sparks e enviar o link na plataforma da Kodland são dois passos diferentes.</b></li><li>Reforce as regras de segurança de dados pessoais.</li></ul>']] },
          { tab:'M1A2', e:'💎', h:'Aula 2 — Guardião do Portal: o herói e os cristais', p:'Os alunos começam um projeto novo (um template diferente do Dance Party): um herói que coleta 3 cristais com uma pontuação visível. O perigo, a chave e o portal ficam para a próxima aula.',
            acc:[['📚','O que você precisa saber','<ul><li>Variáveis (o contador de cristais).</li><li>Condição de toque (tocar no objeto → somar → som → desaparecer).</li><li>A estrutura <b>se</b>.</li><li>O <b>único</b> uso de IA nesta aula é gerar a imagem do cristal.</li></ul>'],
                 ['📌','Pontos de atenção','<ul><li>É um <b>projeto novo</b>, não o do Dance Party — confira se todos carregaram o arquivo certo.</li><li>Um novo início (bandeira verde) precisa devolver o herói à posição inicial e zerar a pontuação.</li><li>Não mexa ainda no perigo, na chave nem no portal.</li></ul>'],
                 ['🎯','Objetivos de aprendizagem','<ul><li>O aluno entende que todo jogo tem um objetivo, uma regra e um progresso visível.</li><li>Constrói a mecânica de coleta em <b>3 níveis de autonomia</b>: cristal 1 (conectar), cristal 2 (completar), cristal 3 (construir sozinho).</li></ul>'],
                 ['🧑‍🏫','O seu papel','<ul><li>Mostre <b>uma vez</b> onde encaixar os blocos do primeiro cristal e depois vá se afastando aos poucos.</li><li>Deixe o aluno construir o terceiro cristal <b>sem ajuda</b> antes de intervir com perguntas.</li><li>Teste o sistema inteiro (0→1→2→3→reiniciar→0) antes de publicar.</li></ul>'],
                 ['⚙️','Aspectos técnicos','<ul><li>A fantasia do cristal gerada com IA precisa de <b>fundo transparente</b> e tamanho <b>25%</b>.</li><li>O script de início precisa incluir a posição do herói e a pontuação voltando a 0.</li></ul>']] },
          { tab:'M1A3', e:'🚪', h:'Aula 3 — Desafio do portal: perigo, chave e portal', p:'Mesmo projeto da Aula 2. Entram um Perigo com reação ao toque, uma chave que aparece só depois dos 3 cristais e um portal que abre uma tela de VITÓRIA vazia.',
            acc:[['📚','O que você precisa saber','<ul><li>Mensagens entre atores (transmitir / receber).</li><li>Condições compostas (por exemplo, <b>Cristais &gt; 2</b>).</li><li>Mudar o cenário.</li><li>De novo, um <b>único</b> passo com IA (a imagem do perigo).</li></ul>'],
                 ['📌','Pontos de atenção','<ul><li>Enquanto o portal está escondido, ele <b>não</b> pode reagir ao toque.</li><li>A tela de VITÓRIA fica <b>vazia de propósito</b> — ela é decorada na Aula 4.</li><li>Existe um template de reserva se o projeto se perder.</li></ul>'],
                 ['🎯','Objetivos de aprendizagem','<ul><li>O aluno completa o caminho inteiro sozinho: início → 3 cristais → chave → portal → VITÓRIA.</li><li>Aprende a equilibrar a dificuldade <b>mudando objetos de lugar, não o código</b>.</li></ul>'],
                 ['🧑‍🏫','O seu papel','<ul><li>Conduza um <b>teste completo em voz alta</b> do jogo antes de encerrar.</li><li>Deixe o aluno decidir para onde mover o perigo ou a chave (sem mecânicas novas).</li><li>Colete o feedback dos colegas sobre a dificuldade do jogo.</li></ul>'],
                 ['⚙️','Aspectos técnicos','<ul><li>A chave avisa o portal com uma mensagem: ela usa o bloco <b>transmitir [mensagem]</b>, e o portal usa <b>quando eu receber [mensagem]</b>. Os dois blocos precisam usar <b>a mesma mensagem</b>, com o mesmo nome (por exemplo, <i>abrir portal</i>).</li><li>Ainda não desenhe a tela de VITÓRIA — só o cenário vazio.</li></ul>']] },
          { tab:'M1A4', e:'🎉', h:'Aula 4 — Fechamento do módulo: personalização e publicação', p:'Última aula do módulo. A tela de VITÓRIA ganha um fundo de IA e uma frase de vitória (com o bloco dizer ou com Texto para Fala), entra um detalhe único, roda-se um checklist final e a versão final é publicada com um minifestival.',
            acc:[['📚','O que você precisa saber','<ul><li>A diferença entre o bloco <b>dizer</b> e o <b>Texto para Fala</b> — use só um.</li><li>Cenários gerados com IA.</li><li>Um checklist antes de publicar (sem código novo, só depuração).</li></ul>'],
                 ['📌','Pontos de atenção','<ul><li><b>Só um cenário de IA</b> nesta aula.</li><li>Não mude a lógica da Chave nem do Portal — só acrescente o detalhe final.</li><li>Esta aula fecha o primeiro ciclo completo de projeto: <b>celebre isso de forma explícita</b>.</li></ul>'],
                 ['🎯','Objetivos de aprendizagem','<ul><li>O aluno sabe nomear suas <b>3 decisões pessoais</b> no módulo (fundo, frase de vitória, detalhe único).</li><li>Envia um link final que funciona, com o caminho completo até a VITÓRIA.</li></ul>'],
                 ['🧑‍🏫','O seu papel','<ul><li>Conduza o checklist sem acrescentar funcionalidades novas.</li><li>Dê um <b>Prêmio de Iteração</b> pelo estilo ou por um detalhe único — <b>sem comparar projetos</b>.</li><li>Encerre com uma reflexão sobre o módulo inteiro e desperte a curiosidade pelo Módulo 2.</li></ul>'],
                 ['⚙️','Aspectos técnicos','<ul><li>A frase de vitória vai no <b>ator Portal</b>, logo depois da troca para o cenário VITÓRIA — não no Palco.</li><li>Confirme a publicação final e o link atualizado.</li></ul>']] }
        ]},
        { t:'callout', kind:'tip', e:'🗺️', html:'A primeira Teacher Note de cada aula tem o plano completo: história, objetivo, tempos de cada cartão e, nas primeiras aulas, um vídeo de briefing. <b>Leia todas as Teacher Notes e assista ao vídeo antes da aula.</b>' }
      ]},
      { id:'proj', e:'⚡', title:'Projetos reais de alunos', blocks:[
        { t:'p', html:'É assim que ficam os projetos do Code & Game 1 depois que os alunos os publicam no Kodland Sparks. Os dois foram feitos por <b>alunos reais</b> do curso — abra-os para jogar na plataforma:' },
        { t:'projects', items:[
          { href:'https://portfolio.kodland.org/sonia55667/cmva7brdz06mont01k3fsw4zb', img:'../shared/images/posion.png', e:'🧪', color:'#d946ef', tag:'Scratch', title:'posion', by:'sonia55667', desc:'Um projeto em Scratch num laboratório mágico, com poções e um portal brilhante.' },
          { href:'https://portfolio.kodland.org/juanavalentina78262/cmv8vx5p50hb0qp2tg720knef', e:'🐹', color:'#f59e0b', tag:'Scratch', fw:true, title:'hamster scratch', by:'juanavalentina78262', desc:'“O hamster do Scratch… sim, como o gato, mas em vez de um gato é um HAMSTERRRR” <i>(traduzido do espanhol)</i>.' }
        ]},
        { t:'callout', kind:'tip', e:'💬', html:'Repare na etiqueta <b>Feedback wanted</b> no segundo projeto: o aluno ativou <b>Request feedback</b> ao publicar. Uma avaliação curta em três campos — impressão geral, pontos fortes e uma coisa para melhorar — faz muita diferença.' }
      ]},
      { id:'bo', e:'📘', title:'Revise as aulas no Backoffice', blocks:[
        { t:'p', html:'Antes da verificação, abra o curso no Backoffice e leia as quatro aulas no seu ritmo — os cartões de atividade e as Teacher Notes estão todos lá. Não há tempo limite.' },
        { t:'link', href:'https://bo.kodland.org/courses/2196', e:'📘', title:'Abrir o curso no Backoffice', small:'[2196] Code & Game 1 — as aulas e as Teacher Notes' },
        { t:'callout', kind:'warn', e:'🔄', html:'O conteúdo das aulas no Backoffice vai sendo atualizado com o feedback de alunos e tutores. Quando houver mudanças, você será avisado com antecedência para preparar a aula.' }
      ]}
    ]},

  { id:'m2', n:2, e:'⚙️', color:'#F03D9E', title:'A parte técnica das aulas',
    desc:'Um início forte, publicar no Kodland Sparks em todas as aulas e os problemas técnicos mais comuns.',
    obj:'Saiba o que garante o sucesso das aulas do Code & Game 1: um início forte, uma publicação correta no Kodland Sparks em <b>todas</b> as aulas e as soluções para os problemas técnicos mais comuns.',
    needs:['sparksPublish'],
    offer:[['🚀','Fazer da A1 e da A2 um início forte, com um resultado rápido e visível.'],['📤','Garantir que todos publiquem no Sparks em todas as aulas — e conferir.'],['🌍','Explicar aos alunos por que o Sparks vale a pena.'],['🏁','Fechar o Módulo 1 mostrando conquistas e despertando o interesse pelo Módulo 2.']],
    sections:[
      { id:'focus', e:'🎯', title:'Os 4 pontos que garantem o sucesso', blocks:[
        { t:'p', html:'Estes são os pontos de foco definidos pelo time de produto para o Code & Game. Abra cada um:' },
        { t:'acc', items:[
          ['🚀','A1–A2: um início forte','<p>As duas primeiras aulas decidem se o aluno quer voltar. Os objetivos são <b>conhecer o grupo</b> e chegar a um <b>resultado rápido e visível</b>.</p><ul><li>Use bem o quebra-gelo: chame cada aluno pelo nome e conecte os interesses dele ao projeto.</li><li>Mostre o resultado final logo no começo (o show do Dance Party, o jogo do Guardião do Portal).</li><li>Garanta que <b>cada aluno termine a aula com algo funcionando</b> — mesmo que seja a versão mínima.</li></ul>'],
          ['📤','Publicar no Sparks em todas as aulas','<p>Desde a <b>Aula 1</b>, todos os alunos publicam o projeto no Kodland Sparks em <b>todas as aulas</b>, e você confere se a publicação está correta.</p><ul><li>Visibilidade <b>Public</b> (nunca <b>Only me</b>).</li><li>O link copiado é o do <b>projeto publicado</b> e foi enviado no cartão da aula.</li><li>Reserve tempo no fim da aula para isso — a publicação não pode ficar para depois.</li></ul>'],
          ['🌍','Os benefícios do Sparks','<p>Explique aos alunos por que publicar vale a pena:</p><ul><li><b>Comunidade:</b> o projeto aparece no Feed e no portfólio público.</li><li><b>Playtest:</b> outros jogadores testam o jogo de verdade.</li><li><b>Feedback:</b> dos jogadores (com <b>Request feedback</b>) e da IA, que destaca pontos fortes — e ainda rende cristais.</li></ul>'],
          ['🏁','Última aula do M1: conquistas e gancho para o M2','<p>Na Aula 4, mostre o que os alunos conquistaram — o primeiro jogo completo e publicado — e <b>desperte o interesse pelo Módulo 2</b>.</p><ul><li>Faça um minifestival: cada aluno mostra o jogo e fala das suas 3 decisões pessoais.</li><li>Abra o portfólio de cada um no Sparks: os projetos das 4 aulas estão lá.</li><li>Termine com uma prévia curta e empolgante do próximo módulo.</li></ul>']
        ]}
      ]},
      { id:'publish', e:'📤', title:'Publicar no Kodland Sparks em todas as aulas', blocks:[
        { t:'p', html:'Publicar parece simples, mas é aqui que aparecem os problemas que chegam até você: o link que não abre, o projeto que não aparece no Feed. Estes são os passos que todo aluno faz no fim de cada aula:' },
        { t:'steps', items:[
          ['Dar um nome ao projeto','No Studio, o aluno preenche o campo <b>Project title</b>. Um projeto sem nome é difícil de encontrar.'],
          ['Clicar em Publish','O botão abre o formulário de publicação: título, descrição, seção, reações e aparência.'],
          ['Escolher Public','<b>Public</b> aparece no Feed e no portfólio público. <b>Friends only</b> só para amigos e professores. <b>Only me</b> deixa o projeto privado — ninguém mais vê, nem você.'],
          ['Ativar Request feedback','Assim outros alunos podem deixar um feedback estruturado. Funciona só em projetos públicos.'],
          ['Copiar o link e enviar no cartão','Publicar no Sparks e enviar o link na plataforma da Kodland são <b>dois passos diferentes</b>. Os dois são obrigatórios.']
        ]},
        { t:'sim', flag:'sparksPublish', src:'../sparks-publish/Sparks_Publish.html', e:'⚡', badge:'Simulação', title:'Publicar no Kodland Sparks', text:'Uma réplica do Kodland Sparks: você publica um projeto como uma aluna, conhece as três opções de visibilidade e resolve os dois problemas mais comuns. Cerca de 5 minutos. A verificação do módulo é liberada quando você termina.' }
      ]},
      { id:'trouble', e:'🛠️', title:'Quando algo dá errado', blocks:[
        { t:'acc', open:false, items:[
          ['🔒','O link do aluno não abre','<p>Quase sempre o projeto foi salvo como <b>Only me</b> (aparece a etiqueta <b>Private project</b>).</p><p>Peça ao aluno: <b>My projects → abrir o projeto → Edit → Public → Publish</b>. O link continua o mesmo e passa a abrir para todos.</p>'],
          ['🔍','O projeto não aparece no Feed','<p>O Feed mostra o último tipo de projeto filtrado. Peça ao aluno que <b>filtre pelo tipo do projeto</b> (por exemplo, <b>Scratch</b>) ou que busque pelo apelido.</p>'],
          ['📂','O aluno abriu o .sb3 com duplo clique','<p>O projeto sempre é carregado pela interface do Creator Lab: <b>Studio → Creative mode → Slot 1 → Scratch → Upload .sb3</b>. Nunca com duplo clique na pasta Downloads.</p>'],
          ['🖼️','A imagem gerada com IA atrapalha o jogo','<p>O fundo não pode ter personagens e precisa de espaço no centro. O cristal precisa de <b>fundo transparente</b> e tamanho <b>25%</b>.</p>'],
          ['💾','O aluno perdeu o projeto','<p>Use o <b>template de reserva</b> da aula, sem dramatizar. O importante é o aluno terminar e publicar.</p>']
        ]}
      ]},
      { id:'check', e:'✅', title:'Checklist técnico de cada aula', blocks:[
        { t:'check', title:'✅ Meu checklist técnico', groups:[
          { h:'☑️ Antes da aula', items:['Li todas as Teacher Notes da aula e assisti ao vídeo de briefing.','Abri o template da aula e o projeto pronto que vou mostrar no começo.','Sei onde está o template de reserva.'] },
          { h:'🎬 Durante a aula', items:['Cada aluno carregou o arquivo certo pelo Upload do Creator Lab.','Uso o Follow Mode para os cartões e compartilho só a aba da ferramenta nas demonstrações.'] },
          { h:'📤 No fim da aula', items:['Todos publicaram o projeto como <b>Public</b>, com <b>Request feedback</b> ativado.','Todos enviaram o link do projeto publicado no cartão da aula.','Abri pelo menos alguns links para conferir que funcionam.'] }
        ]}
      ]}
    ]}
];

/* ---------------- Module checks ('a' = number of the correct option, 0 = first) ---------------- */
COURSE.quiz = {
  m1:[
    { q:'Qual é a história do Code & Game 1?',
      o:['Os alunos são desenvolvedores júnior numa agência digital.','Os alunos entram no Creator Lab, um laboratório criativo secreto em que cada projeto é uma missão.','Os alunos são animadores no Estúdio Creativia.'],
      a:1, e:'Creator Lab: cada projeto é uma missão, e o AI Buddy acompanha com dicas, ideias e checklists de autoavaliação.' },
    { q:'Na Aula 1 (Dance Party), como os alunos abrem o template .sb3?',
      o:['Com duplo clique na pasta Downloads.','Pelo Creator Lab no Kodland Sparks: Studio → Creative mode → Slot 1 → Scratch → Upload .sb3.','Refazendo o projeto do zero no Scratch.'],
      a:1, e:'O projeto sempre é carregado pela interface do Creator Lab — nunca com duplo clique.' },
    { q:'Qual afirmação sobre a Aula 2 (Guardião do Portal) está certa?',
      o:['Ela continua o projeto do Dance Party.','É um projeto novo, e a coleta é construída em 3 níveis de autonomia: conectar, completar, construir sozinho.','Nesta aula os alunos já acrescentam o perigo, a chave e o portal.'],
      a:1, e:'A Aula 2 começa um projeto novo. Cristal 1: conectar; cristal 2: completar; cristal 3: construir sozinho. Perigo, chave e portal vêm na Aula 3.' },
    { ctx:'Na Aula 3, a chave aparece depois dos 3 cristais, mas ao tocar no portal nada acontece.',
      q:'O que você confere primeiro?',
      o:['Se o bloco transmitir [mensagem] da chave e o bloco quando eu receber [mensagem] do portal usam a mesma mensagem.','Se o aluno usou IA para gerar o portal.','Se a tela de VITÓRIA já está decorada.'],
      a:0, e:'A chave avisa o portal com uma mensagem. Se os dois blocos usam mensagens diferentes, o portal nunca recebe o aviso. A tela de VITÓRIA fica vazia de propósito até a Aula 4.' },
    { q:'A Aula 4 fecha o módulo. O que ela pede de você?',
      o:['Ensinar uma mecânica nova com variáveis e clones.','Conduzir o checklist final sem funcionalidades novas, celebrar o primeiro ciclo completo e dar um Prêmio de Iteração sem comparar projetos.','Pular a publicação — ela acontece no Módulo 2.'],
      a:1, e:'A Aula 4 personaliza a VITÓRIA, roda o checklist, publica a versão final e celebra — com um Prêmio de Iteração pelo estilo ou detalhe único, sem comparar projetos.' }
  ],
  m2:[
    { q:'Em quais aulas os alunos publicam o projeto no Kodland Sparks?',
      o:['Só na última aula de cada módulo.','Em todas as aulas, desde a Aula 1.','Só quando o projeto está perfeito.'],
      a:1, e:'Desde a Aula 1, em todas as aulas — e você confere se a publicação está correta.' },
    { ctx:'Um aluno enviou o link do projeto no cartão, mas quando você abre aparece que o projeto não está disponível.',
      q:'O que você pede a ele?',
      o:['Que publique o projeto de novo com Publish project, criando um projeto novo.','Que abra My projects, entre no projeto, clique em Edit, escolha Public e publique.','Que mande o projeto pelo chat.'],
      a:1, e:'O projeto provavelmente foi salvo como Only me. Com Edit → Public → Publish, o mesmo link passa a abrir para todos.' },
    { ctx:'Uma aluna diz que o projeto dela está público, mas não aparece no Feed.',
      q:'Qual é a orientação certa?',
      o:['Filtrar o Feed pelo tipo do projeto (ou buscar pelo apelido).','Apagar e publicar de novo.','Esperar até a próxima aula.'],
      a:0, e:'O Feed mostra um tipo de projeto por vez. Filtrando pelo tipo certo, o projeto aparece.' },
    { q:'Qual destas NÃO é uma vantagem do Kodland Sparks que você deve explicar aos alunos?',
      o:['Outros jogadores testam o jogo e deixam reações e feedback.','A IA destaca pontos fortes do projeto, e publicar rende cristais.','O Sparks corrige o código do aluno automaticamente.'],
      a:2, e:'Comunidade, playtest e feedback de jogadores e da IA são os benefícios. O Sparks não corrige o projeto pelo aluno.' },
    { q:'O que deve acontecer na última aula do Módulo 1?',
      o:['Uma prova escrita sobre os blocos do Scratch.','Mostrar o que os alunos conquistaram e despertar o interesse pelo Módulo 2.','Começar o projeto do Módulo 2 para ganhar tempo.'],
      a:1, e:'Celebre o primeiro jogo publicado, abra os portfólios e termine com uma prévia empolgante do próximo módulo.' }
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
    ['📒', '<b>Antes de cada aula:</b> leia as Teacher Notes no Backoffice e assista ao vídeo de briefing.'],
    ['📤', '<b>Em todas as aulas:</b> todos publicam no Sparks como Public e enviam o link no cartão.'],
    ['🔒', '<b>Link que não abre:</b> My projects → Edit → Public → Publish.'],
    ['🚀', '<b>A1–A2:</b> conheça o grupo e chegue rápido a um resultado visível.']
  ]
};
