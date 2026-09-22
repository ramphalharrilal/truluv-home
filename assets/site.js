const header = document.querySelector('[data-header]');
const menuButton = document.querySelector('[data-menu-button]');
const menu = document.querySelector('[data-menu]');

const updateHeader = () => header?.classList.toggle('scrolled', window.scrollY > 12);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

menuButton?.addEventListener('click', () => {
  const isOpen = menu?.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(Boolean(isOpen)));
});

menu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  menu.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));

document.querySelectorAll('[data-year]').forEach((node) => { node.textContent = new Date().getFullYear(); });

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (prefersReducedMotion || !('IntersectionObserver' in window)) {
  document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'));
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
}

document.querySelectorAll('[data-copy]').forEach((button) => {
  button.addEventListener('click', async () => {
    const status = button.parentElement?.querySelector('[data-copy-status]');
    try {
      await navigator.clipboard.writeText(button.dataset.copy || '');
      if (status) status.textContent = window.getSiteLanguage?.() === 'es' ? 'Número copiado.' : 'Number copied.';
    } catch {
      if (status) status.textContent = window.getSiteLanguage?.() === 'es' ? 'No se pudo copiar. Seleccione el número de arriba.' : 'Copy unavailable. Please select the number above.';
    }
  });
});

// Hand-edited Spanish copy. English remains the default; the choice is local to this browser.
const spanishCopy = {
  'Tru Luv Home and Sitters | A Place to Call Home': 'Tru Luv Home and Sitters | Un lugar al que llamar hogar',
  'Payments | Tru Luv Home and Sitters': 'Pagos | Tru Luv Home and Sitters',
  'Skip to main content': 'Ir al contenido principal',
  'Tru Luv Home and Sitters, back to top': 'Tru Luv Home and Sitters, volver al inicio',
  'Tru Luv Home and Sitters home': 'Tru Luv Home and Sitters, inicio',
  'Open menu': 'Abrir menú',
  'Primary': 'Navegación principal',
  'Home and Sitters': 'Hogar y acompañantes',
  'Home': 'Inicio',
  'Our home': 'Nuestro hogar',
  'Companion care': 'Cuidado de acompañamiento',
  'Payments': 'Pagos',
  'Contact us': 'Contáctenos',
  'Two ways to feel supported': 'Dos maneras de recibir apoyo',
  'Our home.': 'Nuestro hogar.',
  'A companion in yours.': 'Compañía en el suyo.',
  'Looking for a welcoming boarding home? We offer one for independent adults. Prefer to stay in your own home? Request a companion for in-home visits.': '¿Busca un hogar acogedor? Ofrecemos alojamiento para adultos independientes. ¿Prefiere quedarse en su propia casa? Solicite visitas de acompañamiento a domicilio.',
  'Explore our home': 'Conozca nuestro hogar',
  'Request a companion': 'Solicite acompañamiento',
  'Request a companion →': 'Solicite acompañamiento →',
  'Safe. Supportive. Respectful. Always.': 'Seguridad. Apoyo. Respeto. Siempre.',
  'A diverse group of older adults and a younger companion smiling together': 'Un grupo diverso de adultos mayores y una acompañante joven sonriendo juntos',
  'More than a place to live, a place to thrive': 'Más que un lugar para vivir: un lugar para prosperar',
  'A place': 'Un lugar',
  'to thrive.': 'para prosperar.',
  'Our values': 'Nuestros valores',
  'Respect': 'Respeto',
  'Community': 'Comunidad',
  'Stability': 'Estabilidad',
  'Tru Care': 'Cuidado sincero',
  'Two ways we can help': 'Dos maneras de ayudar',
  'A home here. Support in yours.': 'Un hogar aquí. Apoyo en el suyo.',
  'Ask about living in the Tru Luv home, or request a companion to visit you or a loved one at home.': 'Pregunte por vivir en el hogar Tru Luv o solicite que una persona acompañe a usted o a un ser querido en casa.',
  '01 / RESIDENTIAL LIVING': '01 / ALOJAMIENTO',
  'A place to call home': 'Un lugar al que llamar hogar',
  'Furnished rooms, daily meals, household essentials, and a welcoming community for adults able to live independently and self-evacuate.': 'Habitaciones amuebladas, comidas diarias, servicios básicos y una comunidad acogedora para adultos que pueden vivir de forma independiente y evacuar por sí mismos.',
  'Explore the home': 'Conozca el hogar',
  '02 / AT-HOME SUPPORT': '02 / APOYO A DOMICILIO',
  'Companionship and sitter visits for children and adults with disabilities, as well as older adults, in their own homes, arranged around individual needs.': 'Visitas de acompañamiento y supervisión para niños y adultos con discapacidades, así como adultos mayores, en sus propios hogares y según sus necesidades.',
  'See companion care': 'Conozca el acompañamiento',
  'Our people matter.': 'Nuestro personal importa.',
  'Workers supporting residents and at-home clients are background-checked and trained for their roles.': 'Verificamos los antecedentes del personal que apoya a los residentes y clientes en casa, y lo capacitamos para sus funciones.',
  'Residential home services': 'Servicios del hogar residencial',
  'The everyday comforts of home.': 'Las comodidades cotidianas del hogar.',
  'Our boarding home is for adults who can live independently and self-evacuate. A welcoming setting and practical daily services make it easier to feel at home.': 'Nuestro hogar residencial es para adultos que pueden vivir de forma independiente y evacuar por sí mismos. Un ambiente acogedor y servicios diarios ayudan a que se sientan como en casa.',
  'Three nutritious meals daily': 'Tres comidas nutritivas al día',
  'Dependable meals prepared as part of the home’s daily routine.': 'Comidas preparadas como parte de la rutina diaria del hogar.',
  'Furnished rooms': 'Habitaciones amuebladas',
  'Comfortable private or shared room options.': 'Opciones cómodas de habitación privada o compartida.',
  'Utilities and housekeeping': 'Servicios y limpieza del hogar',
  'A cared-for setting without the burden of managing a household alone.': 'Un entorno bien cuidado sin la carga de mantener una casa por su cuenta.',
  'Laundry service': 'Servicio de lavandería',
  'Routine laundry support for day-to-day ease.': 'Apoyo habitual con la ropa para facilitar el día a día.',
  'Community and recreation': 'Comunidad y recreación',
  'Friendly shared activities in a safe, home-like environment.': 'Actividades compartidas en un entorno seguro y acogedor.',
  'Internet and cable TV': 'Internet y televisión por cable',
  'Connection, entertainment, and familiar comforts.': 'Conexión, entretenimiento y comodidades familiares.',
  'Transportation may be available through a separate provider at an additional cost. Ask us about current options.': 'Puede haber transporte disponible a través de otro proveedor por un costo adicional. Pregúntenos por las opciones actuales.',
  'Ask about the home': 'Pregunte por el hogar',
  'Ask about the home →': 'Pregunte por el hogar →',
  'A bright, comfortable shared living room': 'Una sala de estar compartida, luminosa y cómoda',
  'Comfortable living. A brighter tomorrow.': 'Una vida cómoda. Un mañana más prometedor.',
  'In-home companion & sitter care': 'Acompañamiento y supervisión a domicilio',
  'Support at home, on your terms.': 'Apoyo en casa, a su manera.',
  'For children and adults with disabilities, as well as older adults, Tru Luv offers companion and sitter visits built around individual routines in their own homes. This is a separate service from our adult boarding home.': 'Tru Luv ofrece visitas de acompañamiento y supervisión en el hogar para niños y adultos con discapacidades, así como adultos mayores, adaptadas a sus rutinas. Este servicio es independiente de nuestro hogar residencial para adultos.',
  'Conversation, companionship, and social connection': 'Conversación, compañía y conexión social',
  'Sitter visits when family caregivers need a hand': 'Visitas de supervisión cuando los cuidadores familiares necesitan apoyo',
  'Help with everyday routines, based on the person’s needs': 'Ayuda con las rutinas diarias según las necesidades de cada persona',
  'Call to discuss what support is available, visit schedules, and separate pricing. Nursing or medical services are not listed as part of companion and sitter care.': 'Llame para conocer el apoyo disponible, los horarios de visita y los precios por separado. El acompañamiento y la supervisión no incluyen servicios de enfermería ni atención médica.',
  'A companion and older adult sharing a warm conversation': 'Una acompañante y una persona mayor conversando cordialmente',
  'Personal connection. Respect for independence.': 'Conexión personal. Respeto por la independencia.',
  'Customer experiences': 'Experiencias de clientes',
  'Stories from the people we serve.': 'Historias de las personas a quienes servimos.',
  'Experiences shared by Tru Luv residents and families.': 'Experiencias compartidas por residentes y familias de Tru Luv.',
  'My father lives alone and struggles with mobility, so we hired Tru Luv’s companion sitters. They don’t just assist with meals and chores — they spend time talking with him, playing cards, and keeping him engaged. It feels like he has a friend, not just a caregiver.': 'Mi padre vive solo y tiene dificultades de movilidad. Las personas de acompañamiento de Tru Luv no solo lo ayudan con comidas y tareas: conversan con él, juegan cartas y lo mantienen activo. Siente que tiene una amistad, no solo alguien que lo cuida.',
  'Tru Luv customer': 'Cliente de Tru Luv',
  'Boarding home comfort': 'Comodidad del hogar residencial',
  'After rehab, I stayed at Tru Luv Home for a few months. The staff were welcoming, meals were dependable, and the environment felt safe. It was the perfect balance of independence and support while I regained my strength.': 'Después de rehabilitación, viví unos meses en Tru Luv Home. El personal fue acogedor, siempre había comidas y el entorno se sentía seguro. Tuve el equilibrio justo entre independencia y apoyo mientras recuperaba fuerzas.',
  'Family peace of mind': 'Tranquilidad para la familia',
  'We moved our aunt into Tru Luv Home, and she’s thriving. She enjoys the shared activities and companionship, while we feel reassured knowing she’s cared for in a respectful environment. It’s more than a service — it’s a community.': 'Nuestra tía se mudó a Tru Luv Home y está prosperando. Disfruta las actividades y la compañía, mientras nosotros nos sentimos tranquilos al saber que la tratan con respeto. Es más que un servicio: es una comunidad.',
  'Disability support': 'Apoyo para personas con discapacidad',
  'My son has a disability, and Tru Luv’s sitters have been incredible. They encourage his independence while providing the right level of assistance. He looks forward to their visits, and we appreciate the dignity and kindness they bring.': 'Mi hijo tiene una discapacidad y el personal de Tru Luv ha sido increíble. Fomentan su independencia y le brindan la ayuda adecuada. Él espera con ganas sus visitas, y valoramos la dignidad y amabilidad con que lo tratan.',
  'Contact us today': 'Contáctenos hoy',
  'Let’s talk about what you need.': 'Hablemos de lo que necesita.',
  'Speak with Mrs. A. Jones, Owner / Administrator, about a room in the home or a companion visit in yours. Requests are discussed and confirmed directly.': 'Hable con la Sra. A. Jones, propietaria y administradora, sobre una habitación en el hogar o una visita de acompañamiento en el suyo. Las solicitudes se revisan y confirman directamente.',
  'Call': 'Llame',
  'Looking for a place to live?': '¿Busca un lugar para vivir?',
  'Need support at your place?': '¿Necesita apoyo en su casa?',
  'Service area': 'Área de servicio',
  'Houston and surrounding areas': 'Houston y áreas cercanas',
  'Have an agreed payment?': '¿Tiene un pago acordado?',
  'View payment options': 'Ver opciones de pago',
  'View payment options →': 'Ver opciones de pago →',
  'Boarding home for independent residents': 'Hogar residencial para personas independientes',
  'Tru Luv\'s boarding home is for adults able to live independently and self-evacuate. In-home companion and sitter care is a separate service. This site does not advertise skilled nursing or emergency medical care.': 'El hogar residencial de Tru Luv es para adultos que pueden vivir de forma independiente y evacuar por sí mismos. El acompañamiento y la supervisión a domicilio son servicios separados. Este sitio no ofrece enfermería especializada ni atención médica de emergencia.',
  'Payment information': 'Información de pago',
  'Stock photography:': 'Fotografías de archivo:',
  'Back to home': 'Volver al inicio',
  'Simple ways to': 'Formas sencillas de',
  'make a payment.': 'realizar un pago.',
  'Please pay only after you have confirmed the service and amount with Tru Luv. This page provides payment details; the website does not process payments directly.': 'Pague solo después de confirmar el servicio y el importe con Tru Luv. Esta página muestra los datos de pago; el sitio web no procesa pagos directamente.',
  'Your options': 'Sus opciones',
  'Choose how you would like to pay.': 'Elija cómo desea pagar.',
  'Use the amount agreed with Tru Luv, and check the recipient displayed by your payment app before sending.': 'Use el importe acordado con Tru Luv y verifique el destinatario que aparece en su aplicación antes de enviar el pago.',
  '01 / CASH APP': '01 / CASH APP',
  'Open the profile below and confirm you have the right recipient before completing payment.': 'Abra el perfil a continuación y confirme que es el destinatario correcto antes de pagar.',
  'Cash App handle': 'Usuario de Cash App',
  'Open Cash App': 'Abrir Cash App',
  '02 / ZELLE': '02 / ZELLE',
  'In your bank or credit union app, enter this number and confirm the displayed recipient name.': 'En la aplicación de su banco o cooperativa de crédito, introduzca este número y confirme el nombre del destinatario.',
  'Zelle phone number': 'Número de Zelle',
  'Copy Zelle number': 'Copiar número de Zelle',
  'Before sending a payment': 'Antes de enviar un pago',
  'Confirm the amount and recipient with Tru Luv, especially if the name shown in your app is unfamiliar. For a payment question or receipt, call': 'Confirme el importe y el destinatario con Tru Luv, especialmente si no reconoce el nombre que aparece en la aplicación. Para preguntas o recibos, llame al',
  'or email': 'o escriba a',
  '. Please leave medical and other sensitive details out of payment notes.': '. No incluya información médica ni otros datos sensibles en las notas de pago.',
  'Boarding home and separate in-home companion care': 'Hogar residencial y acompañamiento a domicilio por separado',
  'Payments should be made only for services and amounts confirmed with Tru Luv. This website does not collect card or banking details.': 'Realice pagos solo por servicios e importes confirmados con Tru Luv. Este sitio web no recoge datos de tarjetas ni bancarios.',
  'with questions.': 'si tiene preguntas.',
};

const savedLanguage = (() => { try { return localStorage.getItem('truLuvLanguage'); } catch { return null; } })();
let siteLanguage = savedLanguage === 'es' ? 'es' : 'en';
const textNodes = [];
const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
  acceptNode(node) {
    const parent = node.parentElement;
    return parent && !parent.closest('script, style, svg, .spanish-notice') && node.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
  },
});
while (walker.nextNode()) textNodes.push([walker.currentNode, walker.currentNode.nodeValue]);
const attributes = [];
document.querySelectorAll('[alt], [aria-label], [placeholder], [title]').forEach((element) => {
  ['alt', 'aria-label', 'placeholder', 'title'].forEach((name) => {
    const original = element.getAttribute(name);
    if (original) attributes.push([element, name, original]);
  });
});
const englishTitle = document.title;
const switchButton = document.createElement('button');
switchButton.type = 'button';
switchButton.className = 'language-switch';
switchButton.innerHTML = '<span data-lang="en">EN</span><span aria-hidden="true"> / </span><span data-lang="es">ES</span>';
menu?.after(switchButton);

function localized(original) {
  const clean = original.trim().replace(/\s+/g, ' ');
  const replacement = spanishCopy[clean];
  if (!replacement) return original;
  return original.replace(original.trim(), replacement);
}

function applyLanguage() {
  textNodes.forEach(([node, original]) => { node.nodeValue = siteLanguage === 'es' ? localized(original) : original; });
  attributes.forEach(([element, name, original]) => { element.setAttribute(name, siteLanguage === 'es' ? localized(original) : original); });
  document.title = siteLanguage === 'es' ? (spanishCopy[englishTitle] || englishTitle) : englishTitle;
  document.documentElement.lang = siteLanguage;
  switchButton.querySelectorAll('[data-lang]').forEach((part) => part.classList.toggle('active', part.dataset.lang === siteLanguage));
  switchButton.setAttribute('aria-label', siteLanguage === 'es' ? 'Cambiar a inglés' : 'Switch to Spanish');
  switchButton.setAttribute('title', siteLanguage === 'es' ? 'Cambiar a inglés' : 'Switch to Spanish');
}

switchButton.addEventListener('click', () => {
  siteLanguage = siteLanguage === 'en' ? 'es' : 'en';
  try { localStorage.setItem('truLuvLanguage', siteLanguage); } catch { /* local choice only */ }
  applyLanguage();
});
window.getSiteLanguage = () => siteLanguage;
applyLanguage();
