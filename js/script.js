var P=[
{t:"Presidency University auditorium",c:"Interiors",l:"Bengaluru",s:"Full transformation with audio-visual and acoustic works",v:"₹71 lakh, 3 months",a:"Ar. Farhad H. Malagi",i:"images/auditorium.jpg"},
{t:"243-seat seminar hall",c:"Interiors",l:"Bengaluru",s:"Acoustics, HVAC, fire fighting and electrical",v:"₹2.7 crore, 6 months",a:"Ar. Rahul Manohar, Mumbai",i:"images/seminar-hall.jpg"},
{t:"Private villa, 4,400 sq ft",c:"Residential",l:"Mandya",s:"Turnkey construction with interiors",v:"₹1.1 crore, 2 years",a:"Ar. Farhad H. Malagi",i:"images/villa-mandya.jpg"},
{t:"Moot court",c:"Interiors",l:"Bengaluru",s:"Normal hall converted to a moot court",v:"₹32 lakh, 2.5 months",a:"Ar. Farhad H. Malagi",i:"images/moot-court.jpg"},
{t:"Convention centre",c:"Ongoing",l:"Chikkamagaluru",s:"Complete civil and architectural works",v:"₹5.5 crore, 24 months",a:"Ar. Farhad H. Malagi",i:"images/convention-centre.jpg"},
{t:"Private villa, 8,500 sq ft",c:"Residential",l:"Mysuru",s:"Turnkey construction with interiors",v:"₹3.1 crore, 2.5 years",a:"Ar. Farhad H. Malagi"},
{t:"Twin villas",c:"Residential",l:"Channagiri, Davanagere",s:"Civil, architectural and interior works",v:"₹3.9 crore, 2.5 years",a:"Ar. Pavan Samuel, Ar. Tony, Ar. Farhad"},
{t:"Private villa, 5,500 sq ft",c:"Residential",l:"Davanagere",s:"Turnkey construction with interiors",v:"₹1.8 crore, 2 years",a:"Ar. Farhad H. Malagi"},
{t:"Private villa, 3,000 sq ft",c:"Residential",l:"Mysuru",s:"Turnkey construction",v:"₹62 lakh, 1.5 years",a:"Ar. Sushant D S"},
{t:"Private villa",c:"Residential",l:"Mysuru",s:"Turnkey civil and architectural work with interiors",v:"₹1.15 crore, 2.5 years",a:"Ar. Bharath"},
{t:"Farm house, 6,400 sq ft",c:"Residential",l:"Gonikoppa, Coorg",s:"Shell and core",v:"₹76 lakh, 6 months",a:"Ar. Malini Shekar"},
{t:"Farm house",c:"Residential",l:"Nanjangud, Mysuru",s:"Shell and core with architectural elements",v:"₹42 lakh, 6 months",a:"Ar. Vivek Venkateshappa"},
{t:"Restaurant transformation",c:"Commercial",l:"Mysuru",s:"Turnkey civil and architectural work",v:"₹27 lakh, 4 months",a:"Ar. Sushant D S"},
{t:"Engineering college expansion",c:"Institutional",l:"Mysuru",s:"Foundation and retaining wall",v:"₹2.14 crore, 4 months"},
{t:"Presidency University classrooms",c:"Interiors",l:"Bengaluru",s:"Classrooms with audio-visual and acoustics",v:"₹13.5 lakh each, 30 days each",a:"Ar. Farhad H. Malagi"},
{t:"Presidency University auditorium",c:"Ongoing",l:"Bengaluru",s:"Full transformation with AV and acoustics",v:"₹82 lakh, 6 months",a:"Ar. Farhad H. Malagi"},
{t:"Presidency University large auditorium",c:"Ongoing",l:"Bengaluru",s:"Full transformation with AV and acoustics",v:"₹3 crore, 8 months",a:"Ar. Farhad H. Malagi"},
{t:"Placement office",c:"Ongoing",l:"Bengaluru",s:"Placement office transformation",v:"₹89 lakh, 4 months",a:"Ar. Farhad H. Malagi"}];
function card(p,big){var m=p.i?'<img src="'+p.i+'" alt="'+p.t+', '+p.l+'" loading="lazy">':'<div class="tile" aria-hidden="true">'+p.l.split(",")[0]+'</div>';
return '<article class="card'+(big?' a':'')+'">'+m+'<div class="b">'+(p.c=="Ongoing"?'<span class="tag">Ongoing</span>':'')+'<h3>'+p.t+'</h3><small>'+p.l+'. '+p.s+'.</small><small>'+p.v+(p.a?'. Design: '+p.a:'')+'</small></div></article>'}
document.getElementById("peek").innerHTML=card(P[0],1)+card(P[1])+card(P[2]);
var cats=["All","Residential","Interiors","Institutional","Commercial","Ongoing"],fl=document.getElementById("flt"),g=document.getElementById("grid");
function show(c){g.innerHTML=P.filter(function(p){return p.i&&(c=="All"||p.c==c)}).map(function(p){return card(p)}).join("");
[].forEach.call(fl.children,function(b){b.setAttribute("aria-pressed",b.textContent==c)})}
cats.forEach(function(c){var b=document.createElement("button");b.textContent=c;b.onclick=function(){show(c)};fl.appendChild(b)});show("All");
function route(){var h=(location.hash||"#home").slice(1);if(!document.getElementById(h)||h=="peek"||h=="grid"||h=="flt"||h=="f")h="home";
[].forEach.call(document.querySelectorAll(".pg"),function(s){s.classList.toggle("on",s.id==h)});
[].forEach.call(document.querySelectorAll("nav a"),function(a){a.classList.toggle("on",a.dataset.l==h)});window.scrollTo(0,0)}
addEventListener("hashchange",route);route();
document.getElementById("f").onsubmit=function(e){e.preventDefault();var f=e.target;
location.href="mailto:ceo@infinitebs.in?subject="+encodeURIComponent("Website enquiry: "+f.t.value)+"&body="+encodeURIComponent("Name: "+f.n.value+"\nPhone: "+f.p.value+"\n\n"+f.m.value);
document.getElementById("note").textContent="Your email app should open with the enquiry filled in."};
(function(){var R=matchMedia("(prefers-reduced-motion:reduce)").matches,H=document.documentElement,bs=document.querySelectorAll(".tp button");
function setP(p){H.dataset.pal=p;[].forEach.call(bs,function(b){b.setAttribute("aria-pressed",b.dataset.p==p)});try{localStorage.setItem("pal",p)}catch(e){}}
var s="sun";try{s=localStorage.getItem("pal")||"sun"}catch(e){}setP(s);
[].forEach.call(bs,function(b){b.onclick=function(){setP(b.dataset.p)}});
function count(el){var m=/^(\d+)(.*)$/.exec(el.textContent);if(!m||R)return;var n=+m[1],t=0,r=m[2];(function f(){t+=.035;var v=Math.min(1,t);el.textContent=Math.round(n*(1-Math.pow(1-v,3)))+r;if(v<1)requestAnimationFrame(f)})()}
if(!("IntersectionObserver" in window)||R)return;
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");var b=e.target.querySelector("b");if(b&&!b.dataset.d){b.dataset.d=1;count(b)}io.unobserve(e.target)}})},{threshold:.15});
[].forEach.call(document.querySelectorAll(".sec h2,.card,.svc div,.facts div,.stats div,.band h2,.bn.mid .w"),function(e){e.classList.add("rv");io.observe(e)});
})();