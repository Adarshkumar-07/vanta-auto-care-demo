import React,{useEffect,useState} from 'react';
import {createRoot} from 'react-dom/client';
import './styles.css';

const services=[
  ['01','Exterior Reset','Foam wash, wheels, tires, hand dry and a clean finish.','$89'],
  ['02','Interior Revival','Deep vacuum, surfaces, glass and odor-focused refresh.','$129'],
  ['03','VANTA Signature','Full interior + exterior detail with protection treatment.','$219']
];

function App(){
 const [menu,setMenu]=useState(false);
 useEffect(()=>{const els=document.querySelectorAll('[data-reveal]');const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add('visible')),{threshold:.12});els.forEach(e=>io.observe(e));return()=>io.disconnect()},[]);
 return <div>
  <div className="top">MOBILE DETAILING · PHOENIX, AZ <span>BOOKINGS AVAILABLE THIS WEEK</span></div>
  <header><a className="logo" href="#">VANTA<span>°</span></a><button className="hamb" onClick={()=>setMenu(!menu)}>☰</button><nav className={menu?'open':''}><a href="#services">Services</a><a href="#process">Process</a><a href="#work">The Finish</a><a href="#contact" className="navcta">Get a Quote</a></nav></header>
  <main>
   <section className="hero">
    <div className="hero-copy" data-reveal><p className="eyebrow">PREMIUM MOBILE AUTO CARE</p><h1>Your car.<br/><em>Reset.</em> Properly.</h1><p className="lead">High-end detailing brought to your driveway, office, or garage. Precision cleaning without the shop wait.</p><div className="actions"><a className="primary" href="#contact">Request a Quote <span>↗</span></a><a className="secondary" href="#services">Explore services</a></div><div className="proof"><b>4.9/5</b><span>★</span><small>from local clients</small></div></div>
    <div className="car-scene" data-reveal><div className="glow"></div><div className="car"><div className="roof"></div><div className="window w1"></div><div className="window w2"></div><div className="body"></div><div className="wheel a"></div><div className="wheel b"></div><div className="shine"></div></div><div className="scene-label">VANTA / 01</div></div>
   </section>
   <section className="marquee"><span>DETAIL · PROTECT · RESTORE · REPEAT ·</span><span>DETAIL · PROTECT · RESTORE · REPEAT ·</span></section>
   <section id="services" className="section"><div className="section-head" data-reveal><p className="eyebrow">WHAT WE DO</p><h2>Built for the<br/><em>daily driver.</em></h2></div><div className="service-grid">{services.map(s=><article className="service" data-reveal key={s[0]}><span className="num">{s[0]}</span><div><h3>{s[1]}</h3><p>{s[2]}</p></div><strong>{s[3]}</strong><a href="#contact">Book ↗</a></article>)}</div></section>
   <section id="process" className="split"><div className="dark-panel" data-reveal><p className="eyebrow">THE VANTA STANDARD</p><h2>We come to<br/><em>you.</em></h2><p>Tell us where the car is. We bring the water-smart equipment, professional products and attention to detail.</p><a className="light-btn" href="#contact">Start a booking ↗</a></div><div className="steps"><div data-reveal><span>01</span><h3>Choose your service</h3><p>Pick the level that fits your vehicle and schedule.</p></div><div data-reveal><span>02</span><h3>We arrive prepared</h3><p>On-site setup, careful inspection and a clear plan.</p></div><div data-reveal><span>03</span><h3>Drive away different</h3><p>We walk the finish with you before packing up.</p></div></div></section>
   <section id="work" className="finish"><div data-reveal><p className="eyebrow">THE FINISH</p><h2>Clean is good.<br/><em>Intentional is better.</em></h2></div><div className="finish-grid"><div className="finish-card f1" data-reveal><span>EXTERIOR</span><b>Deep gloss.<br/>Zero shortcuts.</b></div><div className="finish-card f2" data-reveal><span>INTERIOR</span><b>Fresh cabin.<br/>Calm drive.</b></div></div></section>
   <section className="quote" data-reveal><p className="eyebrow">CLIENT NOTES</p><blockquote>“They treated my car like it was their own. The difference was ridiculous.”</blockquote><small>— Marcus R., Phoenix</small></section>
   <section id="contact" className="contact"><div data-reveal><p className="eyebrow">READY WHEN YOU ARE</p><h2>Let's make your<br/><em>car feel new.</em></h2><p>Tell us your vehicle, service and preferred area. We'll send a clear quote.</p></div><form data-reveal onSubmit={e=>e.preventDefault()}><input placeholder="Your name"/><input placeholder="Email or phone"/><input placeholder="Vehicle (e.g. 2023 BMW M340i)"/><select defaultValue=""><option value="" disabled>Service</option><option>Exterior Reset</option><option>Interior Revival</option><option>VANTA Signature</option></select><textarea placeholder="Anything we should know?"></textarea><button>Request my quote <span>↗</span></button></form></section>
  </main>
  <footer><div className="logo">VANTA<span>°</span></div><p>Premium mobile auto care · Phoenix, Arizona</p><p>© 2026 VANTA Auto Care · Concept website for demonstration.</p></footer>
  <a className="mobile-book" href="#contact">Get a quote ↗</a>
 </div>
}
createRoot(document.getElementById('root')).render(<App/>);