/* ============================================================
   Kodland Sparks · How to publish a project — SPANISH texts
   Translate only the text inside quotes / backticks. Keep HTML tags, ${...} code and keys unchanged.
   The platform itself (Feed, My projects, Publish, Public, Only me…) stays in English, as in the real Kodland Sparks.
   ============================================================ */
window.CONTENT = { lang: 'es' };

CONTENT.ui = {
  title: 'Kodland Sparks · Cómo publicar un proyecto',
  studentInitial: 'S',
  studentNick: 'sofia.crea',
  robotTitle: 'Mi robot',
  houseTitle: 'Mi casa',
  houseDesc: 'Proyecto final de la clase 1',
  houseNick: 'marina.art',
  houseName: 'Marina',
  houseOld: 'Borrador',
  coachStep: (n, total) => `Publicar en Sparks · ${n}/${total}`,
  next: 'Siguiente →',
  finish: 'Terminar ✓',
  clickHint: '👆 Haz clic en el elemento destacado',
  followStep: 'Sigue el paso destacado 👆'
};

CONTENT.welcome = {
  kicker: 'Formación EM · Simulación',
  title: 'Publicar en <span>Kodland Sparks</span>',
  lead: 'Los estudiantes publican sus proyectos en Kodland Sparks. En esta simulación publicas un proyecto como la estudiante Sofía y luego resuelves los dos problemas más comunes que te van a llegar.',
  seeTitle: 'Lo que vas a practicar',
  see: [
    'Ponerle nombre al proyecto y abrir el formulario de publicación.',
    'Las tres opciones de visibilidad — <b>Public</b>, <b>Friends only</b> y <b>Only me</b> — y lo que cambia cada una.',
    'Pedir feedback a otros estudiantes con <b>Request feedback</b>.',
    'Qué hacer cuando el link de un estudiante no abre: <b>My projects → Edit → Public</b>.',
    'Qué hacer cuando el proyecto no aparece en el Feed: <b>filtrar por tipo de proyecto</b>.'
  ],
  how: 'No hay decisiones equivocadas: haz clic donde te indique la guía. Toma unos 5 minutos.',
  start: 'EMPEZAR →'
};

/* One entry per step of the guide (the order is set by the page) */
CONTENT.steps = {
  start: { title: 'La clase está terminando', text: 'Sofía terminó su dibujo en el <b>Studio</b> de Kodland Sparks. Ahora tiene que <b>publicar</b> el proyecto y enviar el link en la tarjeta de la clase. Vamos a hacerlo juntos.' },
  title: { title: 'Primero, un nombre', text: 'Un proyecto sin nombre es difícil de encontrar después. Haz clic en el campo <b>Project title</b> para ponerle nombre.' },
  publish: { title: 'Publicar', text: 'Con el nombre listo, haz clic en <b>Publish</b>, arriba a la derecha. Se abre el formulario de publicación.' },
  form: { title: 'El formulario de publicación', text: 'Aquí el estudiante revisa el <b>título</b>, puede escribir una <b>descripción</b> corta y elegir una <b>sección</b> del portafolio. La imagen viene directamente del proyecto del Studio.' },
  look: { title: 'Reacciones y apariencia', text: 'El estudiante elige qué <b>reacciones</b> pueden dejarle (el corazón siempre está disponible) y el color del marco de la tarjeta en el Feed. Los colores bloqueados se desbloquean con las recompensas.' },
  visMe: { title: 'Visibilidad: Only me', text: 'Esta es la opción que más problemas causa. Haz clic en <b>Only me</b> y mira qué cambia.' },
  visFriends: { title: '¿Qué cambió?', text: 'Con <b>Only me</b> el proyecto queda <b>privado</b>: solo el estudiante lo ve en su portafolio. El botón cambia de <b>Publish</b> a <b>Save</b>, y desaparecen las opciones de feedback y de Discord. <b>Ni siquiera tú, como tutor, puedes abrir el link.</b><br><br>Ahora haz clic en <b>Friends only</b>.' },
  visPublic: { title: 'Friends only', text: 'Con <b>Friends only</b> el proyecto lo ven los amigos del estudiante, sus profesores y él. No aparece en el Feed público.<br><br>Ahora haz clic en <b>Public</b>, la opción que pedimos en las clases.' },
  feedback: { title: 'Public + Request feedback', text: 'Con <b>Public</b> el proyecto aparece en el Feed y en el portafolio público: la comunidad puede verlo, reaccionar y comentar. Activa <b>Request feedback</b>: otros estudiantes podrán dejar un feedback estructurado (impresión general, puntos fuertes y qué mejorar).' },
  promo: { title: 'Uso en promociones', text: 'Esta opción permite que Kodland Sparks muestre el proyecto en redes o en la página principal. Siempre es <b>voluntaria</b>: decide el estudiante, y nunca debe sentirse obligado.' },
  send: { title: 'Ahora sí, publicar', text: 'Haz clic en <b>Publish</b>. El primer proyecto publicado además le da un cristal 💎 al estudiante.' },
  link: { title: 'El link del proyecto', text: 'El proyecto quedó publicado como <b>Public</b>. Este es el link que el estudiante copia y pega en la tarjeta de la clase, en la plataforma de Kodland. Recuerda: <b>publicar en Sparks y enviar el link en la tarjeta son dos pasos distintos</b>.' },
  problem: { title: 'Caso 1: el link no abre', text: 'Marina, otra estudiante del grupo, envió el link de su proyecto, pero a ti no te abre. Casi siempre el motivo es el mismo: lo guardó como <b>Only me</b>.<br><br>Pídele que revise la publicación en <b>My projects</b>. Veámoslo en su pantalla.' },
  myProjects: { title: 'My projects', text: 'Haz clic en <b>My projects</b>, en el menú superior.' },
  privateCard: { title: 'Private project', text: 'Fíjate en la etiqueta <b>Private project</b> de la tarjeta: el proyecto quedó guardado solo para ella. Por eso nadie más puede verlo. Haz clic en el proyecto para abrirlo.' },
  edit: { title: 'Editar la publicación', text: 'En la página del proyecto también aparece <b>Private project</b>. Haz clic en <b>Edit</b>: se vuelve a abrir el formulario de publicación.' },
  fixPublic: { title: 'Cambiar a Public', text: 'El formulario vuelve con <b>Only me</b> seleccionado. Haz clic en <b>Public</b>.' },
  resend: { title: 'Publicar de nuevo', text: 'El botón volvió a ser <b>Publish</b>. Haz clic en él. El link es el mismo, y ahora cualquiera puede abrirlo.' },
  feed: { title: 'Caso 2: no aparece en el Feed', text: 'Marina dice que el proyecto ya está público, pero no lo encuentra en el Feed. Haz clic en <b>Feed</b> para ver lo que ella ve.' },
  filter: { title: 'El filtro del Feed', text: 'El Feed está filtrado por <b>Python</b>, así que solo muestra proyectos de ese tipo. Su proyecto es una imagen. Haz clic en el filtro para cambiar el tipo de proyecto.' },
  image: { title: 'Elegir el tipo', text: 'Elige <b>Image</b>, el tipo de su proyecto.' },
  found: { title: '¡Encontrado!', text: 'Con el filtro <b>Image</b>, el proyecto de Marina aparece en el Feed. Cuando un estudiante no encuentre su proyecto, pídele que <b>filtre por tipo de proyecto</b> (por ejemplo, <b>3D</b>) o que lo busque por su apodo.' }
};

CONTENT.finish = {
  kicker: 'Simulación completada',
  title: '🎉 Ya dominas la publicación en Sparks',
  intro: 'Antes de cerrar cada clase en la que se publica, revisa con los estudiantes:',
  points: [
    'El proyecto tiene <b>nombre</b> y se publicó con <b>Publish</b>.',
    'La visibilidad es <b>Public</b>. Con <b>Only me</b> nadie más que el estudiante ve el proyecto — ni tú.',
    '<b>Request feedback</b> activado: la comunidad puede comentar el proyecto.',
    'El <b>link</b> se copió y se envió en la tarjeta de la clase.',
    'Si el link no abre: <b>My projects → abrir el proyecto → Edit → Public → Publish</b>.',
    'Si el proyecto no aparece en el Feed: <b>filtrar por tipo de proyecto</b> (o buscar por el apodo).'
  ],
  back: 'Puedes volver a la formación: la verificación del módulo ya está desbloqueada.',
  again: '🔁 Hacerlo de nuevo'
};
