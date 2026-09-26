import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  Armchair,
  BatteryCharging,
  Check,
  ChevronRight,
  Clock3,
  Menu,
  MessageSquareText,
  Phone,
  MapPin,
  Ruler,
  RotateCcw,
  ShieldCheck,
  SlidersHorizontal,
  Truck,
  Wrench,
  X,
} from 'lucide-react';
import './styles.css';

const PHONE_DISPLAY = '06 51 82 10 98';
const PHONE_LINK = 'tel:+31651821098';

const chairs = [
  { id: '09029', brand: 'Fitform', width: 46, color: 'Ivoorkleur', price: 995, image: 'images/chair-ivory.jpg', battery: true },
  { id: '10038', brand: 'Fitform', width: 46, color: 'Blauw', price: 800, image: 'images/chair-blue.jpg' },
  { id: '08035', brand: 'Fitform', width: 51, color: 'Grijs met werkje', price: 995, image: 'images/chair-grey.jpg' },
  { id: '10036', brand: 'Fitform', width: 46, color: 'Zwart leder', price: 800, image: 'images/chair-black.jpg', leather: true },
  { id: '11034', brand: 'Fitform', width: 51, color: 'Rood leder', price: 1300, image: 'images/chair-red-leather.jpg', leather: true },
  { id: '04017', brand: 'Fitform', width: 51, color: 'Geruit beige', price: 975, image: 'images/chair-plaid.jpg', battery: true },
  { id: '10063', brand: 'Fitform', width: 51, color: 'Mintgroen', price: 950, image: 'images/chair-mint.jpg' },
  { id: '02009', brand: 'Fitform', width: 46, color: 'Rosé rood', price: 875, image: 'images/chair-rose.jpg' },
  { id: '03012', brand: 'Doge', width: 51, color: 'Bruin', price: 750, image: 'images/chair-brown.jpg' },
  { id: '07026', brand: 'Fitform', width: 46, color: 'Zandkleur', price: 800, image: 'images/chair-sand.jpg' },
  { id: '10073', brand: 'Fitform', width: 46, color: 'Oudroze', price: 750, image: 'images/chair-oldrose.jpg' },
  { id: '04038', brand: 'Fitform', width: 51, color: 'Zandkleur', price: 700, image: 'images/chair-sand2.jpg' },
  { id: '04041', brand: 'Fitform', width: 46, color: 'Oker met bies', price: 725, image: 'images/chair-ochre.jpg' },
  { id: '12089', brand: 'Fitform', width: 51, color: 'Zand met zwarte bies', price: 725, image: 'images/chair-sand-black.jpg' },
  { id: '03-D', brand: 'Doge', width: 51, color: 'Groen', price: 575, image: 'images/chair-green.jpg' },
  { id: '03-F', brand: 'Fitform', width: 51, color: 'Bordeauxrood', price: 700, image: 'images/chair-bordeaux.jpg' },
  { id: '09036', brand: 'Fitform', width: 51, color: 'Roodbruin', price: 675, image: 'images/chair-bordeaux.jpg' },
];

const filters = [
  { label: 'Alle stoelen', value: 'all' },
  { label: 'Fitform', value: 'Fitform' },
  { label: 'Doge', value: 'Doge' },
  { label: '46 cm', value: '46' },
  { label: '51 cm', value: '51' },
];

function Logo() {
  return (
    <a className="logo" href="#top" aria-label="Sta op met gemak, naar boven">
      <span className="logo-mark"><Armchair size={22} strokeWidth={2.2} /></span>
      <span><strong>Sta op</strong><small>met gemak</small></span>
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="header-inner">
        <Logo />
        <nav className={open ? 'nav nav-open' : 'nav'} aria-label="Hoofdnavigatie">
          <a href="#voorraad" onClick={() => setOpen(false)}>Voorraad</a>
          <a href="#werkwijze" onClick={() => setOpen(false)}>Werkwijze</a>
          <a href="#service" onClick={() => setOpen(false)}>Service</a>
          <a href="#over-ons" onClick={() => setOpen(false)}>Over ons</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </nav>
        <a className="header-call" href={PHONE_LINK}><Phone size={18} /> {PHONE_DISPLAY}</a>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-label={open ? 'Menu sluiten' : 'Menu openen'} aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-photo" aria-hidden="true" />
      <div className="hero-inner">
        <p className="eyebrow">Persoonlijk advies vanuit Duiven</p>
        <h1><span>Een sta-opstoel</span><span>die echt bij u past.</span></h1>
        <p className="hero-copy">Gereinigde en nagekeken kwaliteitsstoelen van Fitform en Doge. Wij leveren, stellen af en nemen de tijd voor een goede uitleg.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#voorraad">Bekijk de voorraad <ChevronRight size={19} /></a>
          <a className="button button-light" href={PHONE_LINK}><Phone size={18} /> Bel voor advies</a>
        </div>
      </div>
      <div className="hero-note"><Check size={18} /> Bezoek aan de werkplaats op afspraak</div>
    </section>
  );
}

function TrustBar() {
  return (
    <div className="trust-bar" aria-label="Onze service">
      <div><ShieldCheck /><span><strong>6 maanden garantie</strong><small>op alle getoonde stoelen</small></span></div>
      <div><Wrench /><span><strong>Volledig nagekeken</strong><small>technisch en hygiënisch</small></span></div>
      <div><Truck /><span><strong>Bezorgd en afgesteld</strong><small>op uw postuur en wensen</small></span></div>
    </div>
  );
}

function ChairCard({ chair, onOpen }) {
  return (
    <article className="chair-card">
      <button className="chair-image-button" onClick={() => onOpen(chair)} aria-label={`Bekijk ${chair.brand} ${chair.width} cm in ${chair.color}`}>
        <img src={chair.image} alt={`${chair.brand} sta-opstoel in ${chair.color}`} />
      </button>
      <div className="chair-body">
        <div className="chair-meta"><span>{chair.brand}</span><span>Art. {chair.id}</span></div>
        <h3>{chair.brand} {chair.width} cm</h3>
        <p>{chair.color}{chair.battery ? ' · met accu' : ''}{chair.leather ? ' · leder' : ''}</p>
        <div className="chair-bottom">
          <strong>€ {chair.price.toLocaleString('nl-NL')},-</strong>
          <button className="text-button" onClick={() => onOpen(chair)}>Bekijk <ChevronRight size={17} /></button>
        </div>
      </div>
    </article>
  );
}

function ChairModal({ chair, onClose }) {
  useEffect(() => {
    if (!chair) return undefined;
    const closeOnEscape = (event) => event.key === 'Escape' && onClose();
    document.body.classList.add('modal-open');
    window.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.classList.remove('modal-open');
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [chair, onClose]);

  if (!chair) return null;
  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <div className="chair-modal" role="dialog" aria-modal="true" aria-labelledby="chair-modal-title" onMouseDown={(event) => event.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Sluiten"><X /></button>
        <div className="modal-photo"><img src={chair.image} alt={`${chair.brand} sta-opstoel in ${chair.color}`} /></div>
        <div className="modal-copy">
          <p className="eyebrow">Direct beschikbaar · Art. {chair.id}</p>
          <h2 id="chair-modal-title">{chair.brand} {chair.width} cm</h2>
          <p className="modal-color">{chair.color}</p>
          <strong className="modal-price">€ {chair.price.toLocaleString('nl-NL')},-</strong>
          <ul>
            <li><Check /> Kantelbare hoofdsteun</li>
            <li><Check /> Elektrische voetensteun en sta-opfunctie</li>
            <li><Check /> Relax- en slaapstand</li>
            <li><Check /> Gereinigd, nagekeken en 6 maanden garantie</li>
            {chair.battery && <li><BatteryCharging /> Uitgevoerd met accu</li>}
          </ul>
          <a className="button button-primary" href={PHONE_LINK}><Phone size={18} /> Vraag naar stoel {chair.id}</a>
          <small>Bel gerust. We controleren meteen of deze stoel nog beschikbaar is.</small>
        </div>
      </div>
    </div>
  );
}

function Stock() {
  const [filter, setFilter] = useState('all');
  const [showAll, setShowAll] = useState(false);
  const [selected, setSelected] = useState(null);
  const filtered = useMemo(() => chairs.filter((chair) => {
    if (filter === 'all') return true;
    if (filter === '46' || filter === '51') return String(chair.width) === filter;
    return chair.brand === filter;
  }), [filter]);
  const shown = showAll ? filtered : filtered.slice(0, 8);

  function chooseFilter(value) {
    setFilter(value);
    setShowAll(false);
  }

  return (
    <section className="section stock" id="voorraad">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Actuele voorraad</p>
          <h2>Probeer, vergelijk en kies rustig.</h2>
        </div>
        <p>De getoonde stoelen zijn daadwerkelijk beschikbaar. Iedere stoel is gereinigd, technisch nagekeken en wordt geleverd met garantie.</p>
      </div>
      <div className="filter-row" role="group" aria-label="Filter de voorraad">
        <SlidersHorizontal size={19} />
        {filters.map((item) => (
          <button key={item.value} className={filter === item.value ? 'filter-active' : ''} onClick={() => chooseFilter(item.value)}>{item.label}</button>
        ))}
      </div>
      <div className="chair-grid">
        {shown.map((chair) => <ChairCard key={`${chair.id}-${chair.color}`} chair={chair} onOpen={setSelected} />)}
      </div>
      {filtered.length > 8 && (
        <button className="button button-outline stock-more" onClick={() => setShowAll(!showAll)}>{showAll ? 'Toon minder' : `Bekijk alle ${filtered.length} stoelen`}</button>
      )}
      <ChairModal chair={selected} onClose={() => setSelected(null)} />
    </section>
  );
}

function Steps() {
  return (
    <section className="steps" id="werkwijze">
      <div className="steps-inner">
        <div className="steps-intro">
          <p className="eyebrow eyebrow-light">Zo werkt het</p>
          <h2>Goed zitten begint met goed kijken.</h2>
          <p>Een sta-opstoel moet passen bij uw lengte, postuur en manier van zitten. Daarom nemen we de stoel samen met u door.</p>
        </div>
        <ol>
          <li><span>1</span><div><h3>Kies een paar stoelen</h3><p>Bekijk de voorraad en bel ons met uw vragen of artikelnummer.</p></div></li>
          <li><span>2</span><div><h3>Probeer op uw gemak</h3><p>Kom langs in Duiven of bespreek de mogelijkheid om thuis te proberen.</p></div></li>
          <li><span>3</span><div><h3>Wij stellen alles af</h3><p>We bezorgen, stellen de stoel af en leggen de bediening rustig uit.</p></div></li>
        </ol>
      </div>
    </section>
  );
}

function Service() {
  return (
    <section className="section service" id="service">
      <div className="section-heading compact">
        <div><p className="eyebrow">Service na aankoop</p><h2>Ook daarna blijven we bereikbaar.</h2></div>
      </div>
      <div className="service-grid">
        <div><ShieldCheck /><h3>Garantie</h3><p>Op iedere stoel krijgt u 6 maanden garantie op de techniek.</p></div>
        <div><Truck /><h3>Haal- en brengservice</h3><p>In Duiven, Westervoort en Zevenaar bieden we gratis haal- en brengservice.</p></div>
        <div><RotateCcw /><h3>Terugkoop mogelijk</h3><p>Heeft u de stoel later niet meer nodig, dan bespreken we graag de mogelijkheden.</p></div>
        <div><Ruler /><h3>Afgesteld op u</h3><p>Zithoogte, zitdiepte, armleuningen en lendesteun worden zorgvuldig ingesteld.</p></div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about" id="over-ons">
      <div className="about-image"><img src="images/remco-monique.jpg" alt="Remco van Sta op met gemak bij een sta-opstoel" /></div>
      <div className="about-copy">
        <p className="eyebrow">Klein familiebedrijf</p>
        <h2>Persoonlijk geholpen door Remco en Monique.</h2>
        <p>Remco kent de techniek en de modellen. Monique brengt ruim 30 jaar ervaring in de zorg mee. Samen helpen zij u met een stoel die prettig zit en eenvoudig te bedienen is.</p>
        <blockquote>“Geen grote showroom of snelle verkooppraat. Wel eerlijk advies en de tijd om goed te proberen.”</blockquote>
        <div className="about-facts">
          <span><Clock3 /> Ook 's avonds en in het weekend op afspraak</span>
          <span><MapPin /> 't Holland 51 A, Duiven</span>
        </div>
        <a className="text-link" href={PHONE_LINK}>Maak een afspraak <ChevronRight size={18} /></a>
      </div>
    </section>
  );
}

function Rent() {
  return (
    <section className="rent">
      <div className="rent-inner">
        <div>
          <p className="eyebrow eyebrow-light">Tijdelijk nodig?</p>
          <h2>Een sta-opstoel huren kan ook.</h2>
        </div>
        <div className="rent-price"><span>€</span><strong>100</strong><small>per maand</small></div>
        <div className="rent-copy">
          <p>Binnen 50 kilometer van onze werkplaats brengen en halen we de huurstoel gratis. Natuurlijk stellen we hem ook voor u af.</p>
          <a className="button button-light" href={PHONE_LINK}><Phone size={18} /> Vraag naar huren</a>
        </div>
      </div>
    </section>
  );
}

const faqs = [
  ['Kan ik een stoel eerst proberen?', 'Ja. U bent op afspraak welkom in onze werkplaats in Duiven. In overleg kunt u een stoel ook thuis proberen.'],
  ['Wordt de stoel thuis afgesteld?', 'Ja. Bij levering stellen we de stoel af op uw postuur en wensen en geven we een duidelijke uitleg over de bediening.'],
  ['Zijn de stoelen schoon?', 'Iedere stoel wordt grondig gereinigd en technisch nagekeken voordat deze te koop wordt aangeboden. We kopen geen stoelen in waarin is gerookt.'],
  ['Werken jullie met fysio- en ergotherapeuten?', 'Ja. We werken graag samen met uw fysio- of ergotherapeut om zithoogte, zitdiepte en ondersteuning goed te bepalen.'],
];

function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section className="section faq">
      <div className="faq-title"><p className="eyebrow">Veelgestelde vragen</p><h2>Handig om vooraf te weten.</h2></div>
      <div className="faq-list">
        {faqs.map(([question, answer], index) => (
          <div className="faq-item" key={question}>
            <button onClick={() => setOpen(open === index ? -1 : index)} aria-expanded={open === index}>{question}<span>{open === index ? '−' : '+'}</span></button>
            {open === index && <p>{answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-photo"><img src="images/showroom.jpg" alt="De werkplaats van Sta op met gemak in Duiven" /></div>
      <div className="contact-copy">
        <p className="eyebrow eyebrow-light">Kom rustig proberen</p>
        <h2>Welkom in onze werkplaats in Duiven.</h2>
        <p>Bel even voor een afspraak. Dan zorgen we dat er tijd is voor u en zetten we geschikte stoelen klaar.</p>
        <address><MapPin /> <span><strong>'t Holland 51 A</strong><br />6921 GX Duiven</span></address>
        <a className="contact-phone" href={PHONE_LINK}><Phone /> <span><small>Bel Remco direct</small>{PHONE_DISPLAY}</span></a>
        <a className="button button-coral" href={`sms:+31651821098?body=${encodeURIComponent('Hallo Remco, ik heb een vraag over een sta-opstoel.')}`}><MessageSquareText size={19} /> Stuur een sms</a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="footer-main">
        <Logo />
        <p>Gereinigde en nagekeken sta-opstoelen met persoonlijke service vanuit Duiven.</p>
        <div className="footer-links"><a href="#voorraad">Voorraad</a><a href="#service">Service</a><a href="#over-ons">Over ons</a><a href="#contact">Contact</a></div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Sta op met gemak</span><span>KvK 65745078</span><a href="https://www.staopmetgemak.nl/leveringsvoorwaarden/">Leveringsvoorwaarden</a></div>
    </footer>
  );
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Stock />
        <Steps />
        <Service />
        <About />
        <Rent />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <a className="mobile-call" href={PHONE_LINK}><Phone size={20} /> Bel direct</a>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
