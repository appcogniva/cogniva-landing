'use client';
import styles from './page.module.css';

// ── Logo SVG inline ──────────────────────────────────
function CognivaLogoSVG({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="arcGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0ECFAA"/>
          <stop offset="100%" stopColor="#1B72C8"/>
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      {/* C arc */}
      <path
        d="M95 60C95 79.33 79.33 95 60 95C40.67 95 25 79.33 25 60C25 40.67 40.67 25 60 25"
        stroke="url(#arcGrad)"
        strokeWidth="14"
        strokeLinecap="round"
        filter="url(#glow)"
      />
      {/* Inner arc depth */}
      <path
        d="M80 60C80 71.05 71.05 80 60 80C48.95 80 40 71.05 40 60"
        stroke="#1B72C8"
        strokeWidth="6"
        strokeLinecap="round"
        opacity="0.5"
      />
      {/* 4-point star */}
      <path d="M60 38 L63 57 L82 60 L63 63 L60 82 L57 63 L38 60 L57 57 Z"
        fill="white" filter="url(#glow)" opacity="0.95"/>
    </svg>
  );
}

// ── Navbar ───────────────────────────────────────────
function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={`container ${styles.navInner}`}>
        <div className={styles.navBrand}>
          <CognivaLogoSVG size={38} />
          <span className={styles.navWordmark}>COGNIVA</span>
        </div>
        <div className={styles.navLinks}>
          <a href="#funciones">Funciones</a>
          <a href="#planes">Planes</a>
          <a href="#para-quien">Para quién</a>
          <a href="/support/activacion" className={styles.navCta}>Activar código</a>
        </div>
      </div>
    </nav>
  );
}

// ── Hero ─────────────────────────────────────────────
function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.heroInner}`}>
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <span className={styles.heroBadgeDot}/>
            Disponible en Android · iOS próximamente
          </div>
          <h1 className={styles.heroTitle}>
            Herramientas para<br/>
            <span className={styles.heroGradient}>decisiones clínicas</span>
          </h1>
          <p className={styles.heroSub}>
            Vademécum completo con dosis adulto y pediátrica, 72 calculadoras clínicas
            validadas y ajuste por comorbilidades. Para médicos, enfermeras y profesionales
            de salud en LATAM.
          </p>
          <div className={styles.heroStats}>
            {[
              { n:'218', l:'Fármacos' },
              { n:'72',  l:'Calculadoras' },
              { n:'4',   l:'Especialidades' },
              { n:'8',   l:'Profesiones' },
            ].map(s => (
              <div key={s.l} className={styles.heroStat}>
                <span className={styles.heroStatN}>{s.n}</span>
                <span className={styles.heroStatL}>{s.l}</span>
              </div>
            ))}
          </div>
          <div className={styles.heroCtas}>
            <a href="https://play.google.com/store/apps" className="btn-primary" target="_blank" rel="noopener">
              <GooglePlayIcon /> Descargar en Android
            </a>
            <a href="#planes" className="btn-outline">Ver planes →</a>
          </div>
          <p className={styles.heroNote}>
            🚀 Los primeros 200 médicos registrados acceden a Plan Plus gratis por 3 meses
          </p>
        </div>
        <div className={styles.heroPhone}>
          <PhoneMockup />
        </div>
      </div>
      {/* Gradiente de fondo */}
      <div className={styles.heroBg1}/>
      <div className={styles.heroBg2}/>
    </section>
  );
}

function GooglePlayIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3.18 23.76c.37.21.83.22 1.24-.02l13.5-7.78-2.84-2.84-11.9 10.64zm-1.18-20.7v17.89l9.36-8.95-9.36-8.94zm17.06 7.16l-2.34-1.35-3.17 3.03 3.17 3.03 2.36-1.36c.67-.39.67-1.38-.02-1.35zm-16-8.1l11.9 10.64 2.84-2.84-13.5-7.78c-.42-.24-.87-.23-1.24-.02z"/>
    </svg>
  );
}

// Mockup del teléfono con pantalla
function PhoneMockup() {
  return (
    <div className={styles.phone}>
      <div className={styles.phoneScreen}>
        {/* Barra de brand */}
        <div className={styles.psBar}>
          <div className={styles.psDot}/><span className={styles.psBrand}>COGNIVA</span><div className={styles.psDot}/>
        </div>
        {/* Header */}
        <div className={styles.psHeader}>
          <div className={styles.psAvatar}>JM</div>
          <div>
            <div className={styles.psGreeting}>Buenos días</div>
            <div className={styles.psName}>Dr. Jota</div>
          </div>
          <div style={{marginLeft:'auto'}}>
            <div className={styles.psPlan}>⚡ Plus</div>
          </div>
        </div>
        {/* Search */}
        <div className={styles.psSearch}>🔍 Buscar fármaco o herramienta...</div>
        {/* Grid módulos */}
        <div className={styles.psGrid}>
          {[
            { icon:'💊', t:'FarmaCalc', d:'Vademécum completo', c:'#0F6E56' },
            { icon:'🩺', t:'Herramientas', d:'72 calculadoras', c:'#0B8FA6' },
            { icon:'⭐', t:'Favoritos', d:'8 guardados', c:'#7C3AED' },
            { icon:'📅', t:'Calendario', d:'2 eventos hoy', c:'#0F9E6E' },
          ].map(m => (
            <div key={m.t} className={styles.psCard} style={{ background: m.c + '18', borderColor: m.c + '40' }}>
              <span>{m.icon}</span>
              <div className={styles.psCardTitle}>{m.t}</div>
              <div className={styles.psCardDesc}>{m.d}</div>
            </div>
          ))}
        </div>
        {/* Recientes */}
        <div className={styles.psSection}>RECIENTES</div>
        <div className={styles.psRecientes}>
          {[
            { icon:'❤️', n:'CHA₂DS₂-VASc', r:'3 pts · Alto' },
            { icon:'🧠', n:'Glasgow', r:'15 · Normal' },
            { icon:'💊', n:'Amoxicilina', r:'875mg · 12h' },
          ].map(r => (
            <div key={r.n} className={styles.psRec}>
              <span>{r.icon}</span>
              <div>
                <div className={styles.psRecName}>{r.n}</div>
                <div className={styles.psRecR}>{r.r}</div>
              </div>
            </div>
          ))}
        </div>
        {/* Tabbar */}
        <div className={styles.psTabbar}>
          {[{i:'🏠',l:'Inicio',a:true},{i:'💊',l:'FarmaCalc'},{i:'🩺',l:'Herramientas'},{i:'⭐',l:'Favoritos'},{i:'👤',l:'Perfil'}].map(t => (
            <div key={t.l} className={`${styles.psTab} ${t.a?styles.psTabActive:''}`}>
              <span>{t.i}</span>
              <span>{t.l}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Para quién ───────────────────────────────────────
function ParaQuien() {
  const profs = [
    { icon:'👨‍⚕️', title:'Médicos generales', desc:'FarmaCalc completo, scores de urgencias, calculadoras de UCI. Todo lo que necesitas en guardia.' },
    { icon:'👶', title:'Pediatras', desc:'185+ fármacos con dosis pediátrica por kg, ajuste por edad (neonato, lactante, escolar) y cálculo en mL de jarabe.' },
    { icon:'👩‍⚕️', title:'Enfermeras y licenciadas', desc:'Goteo IV, escalas EVA, Norton, Ramsay, Braden. Herramientas validadas para el cuidado directo.' },
    { icon:'🤰', title:'Obstetras', desc:'Bishop, HELLP, ILA, índice de Aldrete. Scores obstétricos y perinatales en un solo lugar.' },
    { icon:'🔬', title:'Médicos de laboratorio', desc:'Anión gap, brecha osmolar, clearance de creatinina, interpretación de gases arteriales.' },
    { icon:'🍎', title:'Nutricionistas', desc:'Harris-Benedict, NRS-2002, FINDRISC, IMC con clasificación OMS. Para el soporte nutricional clínico.' },
  ];
  return (
    <section id="para-quien" className={styles.paraQuienSec}>
      <div className="container">
        <div className="section-label">Para quién</div>
        <h2 className="section-title">Diseñado para cada<br/>profesional de salud</h2>
        <p className="section-sub" style={{marginBottom:48}}>
          COGNIVA adapta su contenido según tu profesión. Médico, enfermera, obstetra, nutricionista — cada uno ve las herramientas que necesita.
        </p>
        <div className={styles.profGrid}>
          {profs.map(p => (
            <div key={p.title} className={`card ${styles.profCard}`}>
              <div className={styles.profIcon}>{p.icon}</div>
              <h3 className={styles.profTitle}>{p.title}</h3>
              <p className={styles.profDesc}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Funciones ────────────────────────────────────────
function Funciones() {
  const feats = [
    {
      icon:'💊', color:'#0F6E56',
      title:'FarmaCalc — Vademécum completo',
      desc:'218 fármacos con dosis adulto y pediátrica. Selector de presentación (jarabe, tableta, ampolla) que calcula directamente los mL por toma según el peso del paciente.',
      tags:['Dosis por kg','Selector de jarabe/tableta','Ajuste renal y hepático','Nombres DIGEMID'],
    },
    {
      icon:'🧮', color:'#0B8FA6',
      title:'72 calculadoras clínicas validadas',
      desc:'Organizadas por especialidad: Medicina Interna, Pediatría, Gineco-Obstetricia y Cirugía. Desde el CURB-65 hasta el HELLP, el APACHE II y el Ballard.',
      tags:['HEART Score','APACHE II','Apgar + Silverman','Ranson + Rockall'],
    },
    {
      icon:'🔬', color:'#7C3AED',
      title:'Ajuste por comorbilidades',
      desc:'Ajuste automático de dosis en insuficiencia renal (Cockcroft-Gault), daño hepático (Child-Pugh), embarazo y pediatría. Para los casos complejos de guardia.',
      tags:['ERC G1-G5','Child A/B/C','Embarazo FDA','Tope dosis adulto en niños'],
    },
    {
      icon:'📅', color:'#0F9E6E',
      title:'Calendario clínico integrado',
      desc:'Organiza tus guardias, consultas y procedimientos directamente en la app. Próximamente con sincronización a Google Calendar.',
      tags:['Guardias y turnos','Consulta externa','Procedimientos','Recordatorios'],
    },
    {
      icon:'🔍', color:'#D97706',
      title:'Búsqueda global instantánea',
      desc:'Busca cualquier fármaco por nombre genérico o comercial (DIGEMID), y cualquier calculadora por nombre o condición. Resultados en tiempo real.',
      tags:['Nombre genérico','Nombre comercial','Por síntoma','Por score'],
    },
    {
      icon:'🏥', color:'#DC2626',
      title:'Modo sin conexión',
      desc:'Toda la base de datos de fármacos y calculadoras funciona sin internet. Ideal para guardias en hospitales con conectividad limitada.',
      tags:['Sin internet','Rápido','Siempre disponible','Base local'],
    },
  ];
  return (
    <section id="funciones" className={styles.funcionesSec}>
      <div className="container">
        <div className="section-label">Funciones</div>
        <h2 className="section-title">Todo lo que necesitas<br/>en guardia</h2>
        <div className={styles.featGrid}>
          {feats.map(f => (
            <div key={f.title} className={`card ${styles.featCard}`}>
              <div className={styles.featIcon} style={{ background: f.color + '20', color: f.color }}>
                {f.icon}
              </div>
              <h3 className={styles.featTitle}>{f.title}</h3>
              <p className={styles.featDesc}>{f.desc}</p>
              <div className={styles.featTags}>
                {f.tags.map(t => (
                  <span key={t} className={styles.featTag}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Planes ───────────────────────────────────────────
function Planes() {
  const planes = [
    {
      name:'Free', price:'$0', period:'siempre',
      color:'#64748B', icon:'○',
      features:['FarmaCalc adulto básico','16 calculadoras esenciales','6 favoritos','Búsqueda global'],
      cta:'Descargar gratis', highlight:false,
    },
    {
      name:'Plus', price:'$4.99', period:'/mes  ·  $29.99/año',
      color:'#0ECFAA', icon:'⚡',
      features:['Vademécum completo adulto','Pediatría desbloqueada (185+ fármacos)','46 calculadoras clínicas','10 favoritos','Sincronización entre dispositivos'],
      cta:'Empezar gratis 3 meses', highlight:true,
      badge:'🚀 200 primeros registros gratis',
    },
    {
      name:'Premium', price:'$6.99', period:'/mes  ·  $41.99/año',
      color:'#D97706', icon:'⭐',
      features:['Todo lo de Plus','Ajuste por comorbilidades','39 calculadoras avanzadas (UCI, cirugía)','Medicamentos de especialidad','20 favoritos'],
      cta:'Suscribirse a Premium', highlight:false,
    },
    {
      name:'Elite', price:'$9.99', period:'/mes  ·  $59.99/año',
      color:'#7C3AED', icon:'👑',
      features:['Todo lo de Premium','Dosificador UCI avanzado','Vasopresores y sedación','Favoritos ilimitados','Acceso prioritario a novedades'],
      cta:'Suscribirse a Elite', highlight:false,
    },
  ];
  return (
    <section id="planes" className={styles.planesSec}>
      <div className="container">
        <div className="section-label">Planes y precios</div>
        <h2 className="section-title">Elige tu plan</h2>
        <p className="section-sub" style={{marginBottom:16}}>
          Cancela cuando quieras. Sin compromisos.
        </p>
        <p className={styles.planesToggle}>
          💡 Ahorra 50% con el plan anual
        </p>
        <div className={styles.planesGrid}>
          {planes.map(p => (
            <div key={p.name}
              className={`${styles.planCard} ${p.highlight ? styles.planCardHighlight : ''}`}
              style={p.highlight ? { borderColor: p.color + '60' } : {}}>
              {p.badge && <div className={styles.planBadge}>{p.badge}</div>}
              <div className={styles.planTop}>
                <span className={styles.planIcon}>{p.icon}</span>
                <span className={styles.planName}>{p.name}</span>
              </div>
              <div className={styles.planPrice}>
                <span style={{ color: p.color }}>{p.price}</span>
                <span className={styles.planPeriod}>{p.period}</span>
              </div>
              <ul className={styles.planFeatures}>
                {p.features.map(f => (
                  <li key={f}>
                    <span style={{ color: p.color }}>✓</span> {f}
                  </li>
                ))}
              </ul>
              <a href="https://play.google.com/store" target="_blank" rel="noopener"
                className={`${styles.planCta}`}
                style={{ background: p.highlight ? p.color : 'transparent',
                         color: p.highlight ? '#071828' : p.color,
                         borderColor: p.color }}>
                {p.cta}
              </a>
            </div>
          ))}
        </div>
        <p className={styles.planesCodigo}>
          ¿Tienes un código de activación?{' '}
          <a href="/support/activacion" style={{ color:'var(--teal)', fontWeight:600 }}>
            Actívalo aquí →
          </a>
        </p>
      </div>
    </section>
  );
}

// ── Testimonios ──────────────────────────────────────
function Testimonios() {
  const tests = [
    { nombre:'Dr. Carlos M.', prof:'Médico internista · Lima', texto:'En guardia nocturna no hay tiempo de buscar en libros. COGNIVA me da la dosis correcta con el ajuste renal en segundos.' },
    { nombre:'Lic. Ana R.', prof:'Enfermera UCI · Arequipa', texto:'Las escalas de sedación y úlceras por presión integradas me ahorran tiempo en cada turno. Antes tenía que imprimir las tablas.' },
    { nombre:'Dra. Patricia V.', prof:'Pediatra · Trujillo', texto:'Por fin una app que calcula los mL de jarabe según el peso. Mis residentes ya no tienen excusa para equivocarse en la dosis.' },
  ];
  return (
    <section className={styles.testiSec}>
      <div className="container">
        <div className="section-label">Testimonios</div>
        <h2 className="section-title">Lo que dicen los<br/>profesionales</h2>
        <div className={`grid-3 ${styles.testiGrid}`}>
          {tests.map(t => (
            <div key={t.nombre} className={`card ${styles.testiCard}`}>
              <div className={styles.testiStars}>★★★★★</div>
              <p className={styles.testiText}>"{t.texto}"</p>
              <div className={styles.testiAuthor}>
                <div className={styles.testiAvatar}>{t.nombre.split(' ')[0][0]}{t.nombre.split(' ')[1]?.[0]}</div>
                <div>
                  <div className={styles.testiNombre}>{t.nombre}</div>
                  <div className={styles.testiProf}>{t.prof}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── CTA final ────────────────────────────────────────
function CTAFinal() {
  return (
    <section className={styles.ctaSec}>
      <div className="container">
        <div className={styles.ctaBox}>
          <div className={styles.ctaLogo}>
            <CognivaLogoSVG size={56} />
          </div>
          <h2 className={styles.ctaTitle}>Empieza gratis hoy</h2>
          <p className={styles.ctaDesc}>
            Los primeros 200 médicos registrados acceden a Plan Plus gratis por 3 meses.<br/>
            Sin tarjeta de crédito. Sin compromisos.
          </p>
          <div className={styles.ctaBtns}>
            <a href="https://play.google.com/store" target="_blank" rel="noopener" className="btn-primary">
              <GooglePlayIcon /> Descargar en Android
            </a>
            <a href="/support/activacion" className="btn-outline">
              Tengo un código →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Footer ───────────────────────────────────────────
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerTop}>
          <div className={styles.footerBrand}>
            <CognivaLogoSVG size={32} />
            <span className={styles.footerWordmark}>COGNIVA</span>
            <p className={styles.footerTagline}>Herramientas para decisiones clínicas</p>
            <p className={styles.footerCompany}>COGNIVA HEALTH SAC · Lima, Perú</p>
          </div>
          <div className={styles.footerLinks}>
            <div className={styles.footerCol}>
              <div className={styles.footerColTitle}>Producto</div>
              <a href="#funciones">Funciones</a>
              <a href="#planes">Planes</a>
              <a href="#para-quien">Para quién</a>
              <a href="/support/activacion">Activar código</a>
            </div>
            <div className={styles.footerCol}>
              <div className={styles.footerColTitle}>Soporte</div>
              <a href="/support/activacion">¿Cómo obtengo un código?</a>
              <a href="mailto:contacto@cognivaapp.com">contacto@cognivaapp.com</a>
              <a href="mailto:pagos@cognivaapp.com">pagos@cognivaapp.com</a>
            </div>
            <div className={styles.footerCol}>
              <div className={styles.footerColTitle}>Legal</div>
              <a href="/legal/privacidad">Política de privacidad</a>
              <a href="/legal/terminos">Términos y condiciones</a>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <span>© 2025 COGNIVA HEALTH SAC. Todos los derechos reservados.</span>
          <span>Hecho con ❤️ para los profesionales de salud de LATAM</span>
        </div>
      </div>
    </footer>
  );
}

// ── Página principal ─────────────────────────────────
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ParaQuien />
        <Funciones />
        <Planes />
        <Testimonios />
        <CTAFinal />
      </main>
      <Footer />
    </>
  );
}
