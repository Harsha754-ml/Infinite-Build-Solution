var P=[
{t:'An Interior and Fit out project',c:'Completed',l:'Bengaluru',s:'Client: Presidency University. Complete transformation including audio visual and acoustical works',v:'Contract value: 71 Lakhs, Duration: 3 months',a:'Ar. Farhad H. Malagi',i:'images/auditorium.jpg'},
{t:'A seminar hall of 243 seater',c:'Completed',l:'Bengaluru',s:'Complete Acoustical, HVAC, Fire fighting, Electrical works',v:'Value: 2.7 Cr, Duration: 6 months',a:'Ar. Rahul Manohar, Mumbai',i:'images/seminar-hall.jpg'},
{t:'A private villa for a client',c:'Completed',l:'Mandya',s:'Area: 4400 Sft. Turn Key construction with interiors',v:'Value: 1.1 Cr, Duration: 2 years',a:'Ar. Farhad H. Malagi',i:'images/villa-mandya.jpg'},
{t:'An Interior and Fit out project',c:'Completed',l:'Bengaluru',s:'Client: Presidency University. Normal hall to Moot court transformation',v:'Value: 32 Lakhs, Duration: 2.5 months',a:'Ar. Farhad H. Malagi',i:'images/moot-court.jpg'},
{t:'A Convention center',c:'Ongoing',l:'Chikkamagaluru',s:'Complete Civil and Architectural works',v:'Value: 5.5 Cr, Duration: 24 months',a:'Ar. Farhad H. Malagi',i:'images/convention-centre.jpg'},
{t:'A private villa for a client',c:'Completed',l:'Mysuru',s:'Area: 8500 Sq. ft. Turn Key construction with interiors',v:'Value: 3.1 Cr, Duration: 2.5 years',a:'Ar. Farhad H. Malagi'},
{t:'A private twin villas for a client',c:'Completed',l:'Channagiri, Davanagere',s:'Complete Civil and Architectural and interior works',v:'Value: 3.9 Cr, Duration: 2.5 years',a:'Ar. Pavan Samuel & Ar. Tony and Ar. Farhad'},
{t:'A private villa for a client',c:'Completed',l:'Davanagere',s:'Area: 5500 Sft. Turn Key construction with interiors',v:'Value: 1.8 Cr, Duration: 2 years',a:'Ar. Farhad H. Malagi'},
{t:'A private villa for a client',c:'Completed',l:'Mysuru',s:'Area: 3000 Sq. ft. Turn Key construction',v:'Value: 62 Lakhs, Duration: 1.5 Years',a:'Ar. Sushant D S'},
{t:'A Private villa For a client',c:'Completed',l:'Mysuru',s:'Turn Key Civil and Architectural Construction with interiors',v:'Value: 1.15 Cr, Duration: 2.5 years',a:'Ar. Bharath'},
{t:'A private Farm house for a client',c:'Completed',l:'Gonikoppa, Coorg',s:'Area: 6400 Sq. ft. Construction of Shell and Core',v:'Value: 76 Lakhs, Duration: 6 months',a:'Ar. Malini Shekar'},
{t:'A Farm House for a private client',c:'Completed',l:'Nanjanagudu, Mysuru',s:'Shell and Core with architectural elements',v:'Value: 42 Lakhs, Duration: 6 months',a:'Ar. Vivek Venkateshappa'},
{t:'Transformation project of an existing restaurant',c:'Completed',l:'Mysuru',s:'Turn Key Civil and Architectural Construction',v:'Value: 27 Lakhs, Duration: 4 months',a:'Ar. Sushant D S'},
{t:'National institute of technology (North)',c:'Completed',l:'Mysuru',s:'Client: National institute of engineering, Mysuru. Construction of foundation and retaining wall',v:'Value: 2.14 Cr, Duration: 4 months'},
{t:'An Interior and Fit out project',c:'Completed',l:'Bengaluru',s:'Client: Presidency University. Transformation of class rooms including audio visual and acoustical works',v:'Contract value: 13.5 Lakhs/Class rooms, Duration: 30 days/per class room',a:'Ar. Farhad H. Malagi'},
{t:'Transformation project of an existing Bunglow',c:'Completed',l:'Mysuru',s:'Turn Key Civil and Architectural Construction',v:'Value: 12 Lakhs, Duration: 4 months',i:'images/bungalow.jpg'},
{t:'An Interior and Fit out project',c:'Ongoing',l:'Bengaluru',s:'Client: Presidency University. Complete transformation including audio visual and acoustical works',v:'Value: 82 Lakhs, Duration: 6 months',a:'Ar. Farhad H. Malagi',i:'images/ongoing-82.jpg'},
{t:'An Interior and Fit out project',c:'Ongoing',l:'Bengaluru',s:'Client: Presidency University. Complete transformation including audio visual and acoustical works',v:'Value: 3 Cr, Duration: 8 months',a:'Ar. Farhad H. Malagi',i:'images/ongoing-3cr.jpg'},
{t:'An Interior and Fit out project',c:'Ongoing',l:'Bengaluru',s:'Client: Presidency University. Placement office transformation',v:'Value: 89 Lakhs, Duration: 4 months',a:'Ar. Farhad H. Malagi',i:'images/ongoing-placement.jpg'}];
function card(p,big){var m=p.i?'<img src="'+p.i+'" alt="'+p.t+', '+p.l+'" loading="lazy">':'<div class="tile" aria-hidden="true">'+p.l.split(",")[0]+'</div>';
return '<article class="card'+(big?' a':'')+'">'+m+'<div class="b">'+(p.c=="Ongoing"?'<span class="tag">Ongoing</span>':'')+'<h3>'+p.t+'</h3><small>'+p.l+'. '+p.s+'.</small><small>'+p.v+(p.a?'. Designer: '+p.a:'')+'</small></div></article>'}
var pk=document.getElementById("peek");if(pk)pk.innerHTML=card(P[0],1)+card(P[1])+card(P[2]);
function fill(id,c){var el=document.getElementById(id);if(!el)return;el.innerHTML=P.filter(function(p){return p.i&&p.c==c}).map(function(p){return card(p)}).join("")}
fill("done","Completed");fill("going","Ongoing");
var fm=document.getElementById("f");if(fm)fm.onsubmit=function(e){e.preventDefault();var f=e.target;
location.href="mailto:ceo@infinitebs.in?subject="+encodeURIComponent("Website enquiry: "+f.t.value)+"&body="+encodeURIComponent("Name: "+f.n.value+"\nPhone: "+f.p.value+"\n\n"+f.m.value);
document.getElementById("note").textContent="Your email app should open with the enquiry filled in."};

(function(){var R=matchMedia("(prefers-reduced-motion:reduce)").matches,H=document.documentElement,bs=document.querySelectorAll(".tp button");
function setP(p){H.dataset.pal=p;[].forEach.call(bs,function(b){b.setAttribute("aria-pressed",b.dataset.p==p)});try{localStorage.setItem("pal",p)}catch(e){}}
var s="sun";try{s=localStorage.getItem("pal")||"sun"}catch(e){}setP(s);
[].forEach.call(bs,function(b){b.onclick=function(){setP(b.dataset.p)}});
function count(el){var m=/^(\d+)(.*)$/.exec(el.textContent);if(!m||R)return;var n=+m[1],t=0,r=m[2];(function f(){t+=.011;var v=Math.min(1,t);el.textContent=Math.round(n*(1-Math.pow(1-v,3)))+r;if(v<1)requestAnimationFrame(f)})()}
if(!("IntersectionObserver" in window)||R)return;
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");var b=e.target.querySelector("b");if(b&&!b.dataset.d){b.dataset.d=1;count(b)}io.unobserve(e.target)}})},{threshold:.15});
[].forEach.call(document.querySelectorAll(".sec h2,.card,.svc div,.facts div,.stats div,.band h2,.bn.mid .w"),function(e){e.classList.add("rv");io.observe(e)});
})();
(function(){var b=document.querySelector(".mb"),n=document.querySelector("header nav");if(!b)return;
function c(){n.classList.remove("open");b.setAttribute("aria-expanded","false")}
b.onclick=function(){var o=n.classList.toggle("open");b.setAttribute("aria-expanded",o)};
n.addEventListener("click",function(e){if(e.target.tagName=="A")c()});addEventListener("hashchange",c)})();