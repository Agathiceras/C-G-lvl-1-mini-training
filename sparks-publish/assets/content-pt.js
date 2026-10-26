/* ============================================================
   Kodland Sparks · How to publish a project — PORTUGUESE (Brazil) texts
   Translate only the text inside quotes / backticks. Keep HTML tags, ${...} code and keys unchanged.
   The platform itself (Feed, My projects, Publish, Public, Only me…) stays in English, as in the real Kodland Sparks.
   ============================================================ */
window.CONTENT = { lang: 'pt' };

CONTENT.ui = {
  title: 'Kodland Sparks · Como publicar um projeto',
  studentInitial: 'S',
  studentNick: 'sofia.cria',
  studentName: 'Sofia',
  linkCopied: 'Link copiado',
  robotTitle: 'Meu robô',
  houseTitle: 'Minha casa',
  houseDesc: 'Projeto final da aula 1',
  houseNick: 'marina.art',
  houseName: 'Marina',
  houseOld: 'Rascunho',
  coachStep: (n, total) => `Publicar no Sparks · ${n}/${total}`,
  next: 'Próximo →',
  finish: 'Concluir ✓',
  clickHint: '👆 Clique no elemento destacado',
  followStep: 'Siga o passo destacado 👆'
};

CONTENT.welcome = {
  kicker: 'Formação EM · Simulação',
  title: 'Publicar no <span>Kodland Sparks</span>',
  lead: 'Em todas as aulas os alunos publicam um projeto no Kodland Sparks. Nesta simulação você publica um projeto como a aluna Sofia e depois resolve os dois problemas mais comuns que vão chegar até você.',
  seeTitle: 'O que você vai praticar',
  see: [
    'Dar um nome ao projeto e abrir o formulário de publicação.',
    'As três opções de visibilidade — <b>Public</b>, <b>Friends only</b> e <b>Only me</b> — e o que cada uma muda.',
    'Pedir feedback a outros alunos com <b>Request feedback</b>.',
    'Onde fica o link: <b>My projects → abrir o projeto publicado → copiar o endereço da barra do navegador</b>.',
    'O que fazer quando o link de um aluno não abre: <b>My projects → Edit → Public</b>.',
    'O que fazer quando o projeto não aparece no Feed: <b>filtrar pelo tipo de projeto</b>.'
  ],
  how: 'Não há decisões erradas: clique onde o guia indicar. Leva cerca de 5 minutos.',
  start: 'COMEÇAR →'
};

/* One entry per step of the guide (the order is set by the page) */
CONTENT.steps = {
  start: { title: 'A aula está terminando', text: 'A Sofia terminou o desenho dela no <b>Studio</b> do Kodland Sparks. Agora ela precisa <b>publicar</b> o projeto e enviar o link no cartão da aula. Vamos fazer isso juntos.' },
  title: { title: 'Primeiro, um nome', text: 'Um projeto sem nome é difícil de encontrar depois. Clique no campo <b>Project title</b> para dar um nome ao projeto.' },
  publish: { title: 'Publicar', text: 'Com o nome pronto, clique em <b>Publish</b>, no canto superior direito. Isso abre o formulário de publicação.' },
  form: { title: 'O formulário de publicação', text: 'Aqui o aluno revisa o <b>título</b>, pode escrever uma <b>descrição</b> curta e escolher uma <b>seção</b> do portfólio. A imagem vem direto do projeto do Studio.' },
  look: { title: 'Reações e aparência', text: 'O aluno escolhe quais <b>reações</b> os outros podem deixar (o coração está sempre disponível) e a cor da moldura do cartão no Feed. As cores bloqueadas são liberadas com as recompensas.' },
  visMe: { title: 'Visibilidade: Only me', text: 'Esta é a opção que mais gera problemas. Clique em <b>Only me</b> e veja o que muda.' },
  visFriends: { title: 'O que mudou?', text: 'Com <b>Only me</b> o projeto fica <b>privado</b>: só o aluno o vê no próprio portfólio. O botão muda de <b>Publish</b> para <b>Save</b>, e somem as opções de feedback e do Discord. <b>Nem você, como tutor, consegue abrir o link.</b><br><br>Agora clique em <b>Friends only</b>.' },
  visPublic: { title: 'Friends only', text: 'Com <b>Friends only</b> o projeto fica visível para os amigos do aluno, para os professores e para ele. Não aparece no Feed público.<br><br>Agora clique em <b>Public</b>, a opção que pedimos nas aulas.' },
  feedback: { title: 'Public + Request feedback', text: 'Com <b>Public</b> o projeto aparece no Feed e no portfólio público: a comunidade pode jogar, reagir e comentar. Ative <b>Request feedback</b>: outros alunos poderão deixar um feedback estruturado (impressão geral, pontos fortes e o que melhorar).' },
  promo: { title: 'Uso em promoções', text: 'Esta opção permite que o Kodland Sparks mostre o projeto nas redes ou na página principal. É sempre <b>voluntária</b>: o aluno decide, e nunca deve ser obrigado.' },
  send: { title: 'Agora sim, publicar', text: 'Clique em <b>Publish</b>. O primeiro projeto publicado ainda dá um cristal 💎 ao aluno.' },
  findMy: { title: 'Onde fica o link do projeto', text: 'O projeto foi publicado como <b>Public</b>. Agora o aluno busca o link: primeiro vai em <b>My projects</b>, no menu superior. Clique ali.' },
  openPublished: { title: 'Abrir o projeto publicado', text: 'No perfil aparecem os projetos do aluno. Clique no projeto que acabou de publicar.' },
  link: { title: 'Copiar o link do navegador', text: 'O link do projeto é o endereço na <b>barra do navegador</b>: <code>portfolio.kodland.org/apelido/…</code>. Clique na barra para copiá-lo (Ctrl + C / Cmd + C). Esse é o link que o aluno cola no cartão da aula. Lembre-se: <b>publicar no Sparks e enviar o link no cartão são dois passos diferentes</b>.' },
  problem: { title: 'Caso 1: o link não abre', text: 'A Marina, outra aluna do grupo, enviou o link do projeto dela, mas para você ele não abre. Quase sempre o motivo é o mesmo: ela salvou o projeto como <b>Only me</b>.<br><br>Peça que ela confira a publicação em <b>My projects</b>. Vamos ver isso pela tela dela.' },
  myProjects: { title: 'My projects', text: 'Clique em <b>My projects</b>, no menu superior.' },
  privateCard: { title: 'Private project', text: 'Veja a etiqueta <b>Private project</b> no cartão: o projeto foi salvo só para ela. Por isso ninguém mais consegue vê-lo. Clique no projeto para abri-lo.' },
  edit: { title: 'Editar a publicação', text: 'Na página do projeto também aparece <b>Private project</b>. Clique em <b>Edit</b>: o formulário de publicação abre de novo.' },
  fixPublic: { title: 'Mudar para Public', text: 'O formulário volta com <b>Only me</b> selecionado. Clique em <b>Public</b>.' },
  resend: { title: 'Publicar de novo', text: 'O botão voltou a ser <b>Publish</b>. Clique nele. O link é o mesmo, e agora qualquer pessoa consegue abri-lo.' },
  feed: { title: 'Caso 2: não aparece no Feed', text: 'A Marina diz que o projeto já está público, mas ela não o encontra no Feed. Clique em <b>Feed</b> para ver o que ela vê.' },
  filter: { title: 'O filtro do Feed', text: 'O Feed está filtrado por <b>Python</b>, então só mostra projetos desse tipo. O desenho dela é uma imagem. Clique no filtro para trocar o tipo de projeto.' },
  image: { title: 'Escolher o tipo', text: 'Escolha <b>Image</b>, o tipo do projeto dela.' },
  found: { title: 'Encontrado!', text: 'Com o filtro <b>Image</b>, o projeto da Marina aparece no Feed. Quando um aluno não encontrar o próprio projeto, peça que <b>filtre pelo tipo de projeto</b> ou use a busca por apelido.' }
};

CONTENT.finish = {
  kicker: 'Simulação concluída',
  title: '🎉 Você domina a publicação no Sparks',
  intro: 'Antes de encerrar cada aula, confira com os alunos:',
  points: [
    'O projeto tem <b>nome</b> e foi publicado com <b>Publish</b>.',
    'A visibilidade é <b>Public</b>. Com <b>Only me</b> ninguém além do aluno vê o projeto — nem você.',
    '<b>Request feedback</b> ativado: a comunidade pode comentar o projeto.',
    'O <b>link</b> é o endereço da barra do navegador: <b>My projects → abrir o projeto publicado → copiar</b>. É ele que vai no cartão da aula.',
    'Se o link não abre: <b>My projects → abrir o projeto → Edit → Public → Publish</b>.',
    'Se o projeto não aparece no Feed: <b>filtrar pelo tipo de projeto</b> (ou buscar pelo apelido).'
  ],
  back: 'Pode voltar para a formação: a verificação do módulo já está liberada.',
  again: '🔁 Fazer de novo'
};
