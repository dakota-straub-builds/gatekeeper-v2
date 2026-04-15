import { useState, useEffect } from "react";

const STORMS = [
  { id:1, city:"Tulsa, OK", zip:"74103", lat:36.154, lng:-95.993, time:"14 min ago", hail:1.75, wind:62, severity:"critical", homes:847, claimed:false },
  { id:2, city:"Broken Arrow, OK", zip:"74012", lat:36.06, lng:-95.79, time:"38 min ago", hail:1.25, wind:48, severity:"high", homes:512, claimed:true },
  { id:3, city:"Owasso, OK", zip:"74055", lat:36.27, lng:-95.85, time:"1h 12m ago", hail:0.75, wind:41, severity:"medium", homes:234, claimed:false },
  { id:4, city:"Jenks, OK", zip:"74037", lat:35.99, lng:-95.97, time:"2h 5m ago", hail:2.0, wind:71, severity:"critical", homes:1203, claimed:false },
  { id:5, city:"Sand Springs, OK", zip:"74063", lat:36.14, lng:-96.11, time:"3h ago", hail:0.5, wind:35, severity:"low", homes:189, claimed:true },
];

const SEV = {
  critical:{ color:"#a78bfa", glow:"rgba(167,139,250,0.4)", bg:"rgba(124,58,237,0.15)", border:"rgba(124,58,237,0.35)", label:"CRITICAL", pulse:true },
  high:    { color:"#e879f9", glow:"rgba(232,121,249,0.35)", bg:"rgba(192,38,211,0.12)", border:"rgba(192,38,211,0.3)", label:"HIGH", pulse:true },
  medium:  { color:"#818cf8", glow:"rgba(129,140,248,0.3)", bg:"rgba(99,102,241,0.1)", border:"rgba(99,102,241,0.2)", label:"MEDIUM", pulse:false },
  low:     { color:"#34d399", glow:"rgba(52,211,153,0.2)", bg:"rgba(16,185,129,0.1)", border:"rgba(16,185,129,0.2)", label:"LOW", pulse:false },
};

function RadarDot({ storm, onClick, selected }) {
  const cfg = SEV[storm.severity];
  const x = ((storm.lng-(-96.3))/0.7)*100;
  const y = ((36.35-storm.lat)/0.55)*100;
  const size = storm.severity==="critical"?18:storm.severity==="high"?14:10;
  return (
    <div onClick={()=>onClick(storm)} style={{position:"absolute",left:`${x}%`,top:`${y}%`,transform:"translate(-50%,-50%)",cursor:"pointer",zIndex:selected?10:5}}>
      {cfg.pulse&&<><div style={{position:"absolute",inset:-8,borderRadius:"50%",border:`1.5px solid ${cfg.color}`,animation:"rp 2s ease-out infinite",opacity:0.6}}/><div style={{position:"absolute",inset:-18,borderRadius:"50%",border:`1px solid ${cfg.color}`,animation:"rp 2s ease-out infinite 0.7s",opacity:0.3}}/></>}
      <div style={{width:size,height:size,borderRadius:"50%",background:cfg.color,border:selected?"2.5px solid #fff":`2px solid ${cfg.color}`,boxShadow:`0 0 14px ${cfg.glow}`,transition:"all 0.2s"}}/>
    </div>
  );
}

function Card({ storm, onClick, selected }) {
  const cfg = SEV[storm.severity];
  return (
    <div onClick={()=>onClick(storm)} style={{background:selected?"rgba(124,58,237,0.08)":"rgba(255,255,255,0.02)",border:selected?`1px solid ${cfg.border}`:"1px solid rgba(255,255,255,0.06)",borderRadius:12,padding:"14px 16px",cursor:"pointer",transition:"all 0.2s",position:"relative",overflow:"hidden"}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
        <div>
          <div style={{display:"flex",alignItems:"center",gap:7,marginBottom:5}}>
            <span style={{fontSize:10,fontWeight:700,letterSpacing:"0.1em",color:cfg.color,background:cfg.bg,border:`1px solid ${cfg.border}`,padding:"2px 8px",borderRadius:4}}>{cfg.label}</span>
            {storm.claimed&&<span style={{fontSize:10,color:"#3d3060",background:"rgba(255,255,255,0.04)",padding:"2px 7px",borderRadius:4}}>CLAIMED</span>}
          </div>
          <div style={{fontSize:15,fontWeight:700,color:"#fff"}}>{storm.city}</div>
          <div style={{fontSize:12,color:"#3d3060",marginTop:2}}>ZIP {storm.zip} · {storm.time}</div>
        </div>
        <div style={{textAlign:"right"}}>
          <div style={{fontSize:22,fontWeight:900,color:cfg.color,lineHeight:1}}>{storm.hail}"</div>
          <div style={{fontSize:10,color:"#3d3060",marginTop:2}}>HAIL</div>
        </div>
      </div>
      <div style={{display:"flex",gap:16,marginTop:12}}>
        {[["Wind",`${storm.wind} mph`,null],["Homes",storm.homes.toLocaleString(),null],["Value",`$${(storm.homes*8.5/1000).toFixed(0)}K+`,"#34d399"]].map(([l,v,c])=>(
          <div key={l}><div style={{fontSize:10,color:"#3d3060",marginBottom:2}}>{l}</div><div style={{fontSize:13,fontWeight:700,color:c||"#9d8fbc"}}>{v}</div></div>
        ))}
      </div>
    </div>
  );
}

function Ticker() {
  const msgs = ["👁 NEW STORM · Jenks OK · 2.0\" hail · 71mph winds","📍 847 homes impacted in Tulsa 74103","⚡ Severity upgrade: Broken Arrow → HIGH","🌩 Storm cell moving NE at 28mph","👁 StormEyes tracking 3 active zones"];
  const [i,setI] = useState(0);
  useEffect(()=>{const t=setInterval(()=>setI(x=>(x+1)%msgs.length),3500);return()=>clearInterval(t);},[]);
  return (
    <div style={{background:"rgba(124,58,237,0.08)",borderBottom:"1px solid rgba(124,58,237,0.15)",padding:"8px 24px",display:"flex",alignItems:"center",gap:12}}>
      <span style={{fontSize:9,fontWeight:800,letterSpacing:"0.15em",color:"#a78bfa",background:"rgba(124,58,237,0.2)",padding:"3px 8px",borderRadius:3}}>LIVE</span>
      <span style={{fontSize:12,color:"#7c6fa0",fontFamily:"monospace"}}>{msgs[i]}</span>
    </div>
  );
}

export default function StormEyes() {
  const [sel, setSel] = useState(STORMS[0]);
  return (
    <div style={{minHeight:"100vh",background:"#06040f",fontFamily:"'Instrument Sans',sans-serif",color:"#e2e0f0",display:"flex",flexDirection:"column"}}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&display=swap');
        @keyframes rp{0%{transform:scale(1);opacity:0.7}100%{transform:scale(2.8);opacity:0}}
        @keyframes blink{0%,100%{opacity:1}50%{opacity:0.3}}
        ::-webkit-scrollbar{width:3px}::-webkit-scrollbar-track{background:transparent}::-webkit-scrollbar-thumb{background:#2a2040;border-radius:2px}
      `}</style>

      {/* Header */}
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"16px 24px",borderBottom:"1px solid rgba(255,255,255,0.05)",background:"rgba(255,255,255,0.01)"}}>
        <div style={{display:"flex",alignItems:"center",gap:12}}>
          <div style={{width:36,height:36,borderRadius:"50%",background:"linear-gradient(135deg,#4c1d95,#7c3aed)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 0 20px rgba(124,58,237,0.5)"}}>
            <svg width="20" height="14" viewBox="0 0 22 15" fill="none"><path d="M1 7.5C1 7.5 4.5 1 11 1C17.5 1 21 7.5 21 7.5C21 7.5 17.5 14 11 14C4.5 14 1 7.5 1 7.5Z" stroke="white" strokeWidth="1.5" fill="none"/><circle cx="11" cy="7.5" r="3.5" fill="white" opacity="0.9"/><circle cx="11" cy="7.5" r="1.8" fill="#7c3aed"/><circle cx="12.2" cy="6.3" r="0.8" fill="white" opacity="0.7"/></svg>
          </div>
          <div>
            <div style={{fontSize:18,fontWeight:700,color:"#fff"}}>StormEyes</div>
            <div style={{fontSize:11,color:"#3d3060"}}>Storm Intelligence Platform</div>
          </div>
        </div>
        <div style={{display:"flex",alignItems:"center",gap:18}}>
          <div style={{display:"flex",alignItems:"center",gap:8}}>
            <div style={{width:7,height:7,borderRadius:"50%",background:"#34d399",animation:"blink 2s infinite"}}/>
            <span style={{fontSize:12,color:"#34d399",fontWeight:600}}>Eyes Active</span>
          </div>
          <div style={{background:"rgba(124,58,237,0.15)",border:"1px solid rgba(124,58,237,0.3)",borderRadius:20,padding:"6px 16px",fontSize:12,fontWeight:700,color:"#a78bfa",display:"flex",alignItems:"center",gap:6}}>
            <span style={{animation:"blink 1.2s infinite"}}>●</span>
            {STORMS.filter(s=>s.severity==="critical"||s.severity==="high").length} Active Alerts
          </div>
        </div>
      </div>

      <Ticker/>

      <div style={{display:"flex",flex:1,overflow:"hidden",height:"calc(100vh - 116px)"}}>
        {/* Left panel */}
        <div style={{width:340,flexShrink:0,borderRight:"1px solid rgba(255,255,255,0.05)",display:"flex",flexDirection:"column",overflow:"hidden"}}>
          <div style={{padding:"14px 16px",borderBottom:"1px solid rgba(255,255,255,0.05)"}}>
            <div style={{fontSize:10,fontWeight:700,letterSpacing:"0.18em",color:"#3d3060",textTransform:"uppercase"}}>Storm Alerts</div>
          </div>
          <div style={{flex:1,overflowY:"auto",padding:12,display:"flex",flexDirection:"column",gap:9}}>
            {STORMS.map(s=><Card key={s.id} storm={s} onClick={setSel} selected={sel?.id===s.id}/>)}
          </div>
        </div>

        {/* Right panel */}
        <div style={{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"}}>
          {/* Radar map */}
          <div style={{flex:1,position:"relative",background:"radial-gradient(ellipse at center,#0d0820 0%,#06040f 100%)",overflow:"hidden"}}>
            <svg style={{position:"absolute",inset:0,width:"100%",height:"100%",opacity:0.04}}>
              {[...Array(14)].map((_,i)=><line key={`v${i}`} x1={`${(i+1)*7}%`} y1="0" x2={`${(i+1)*7}%`} y2="100%" stroke="#a78bfa" strokeWidth="0.5"/>)}
              {[...Array(9)].map((_,i)=><line key={`h${i}`} x1="0" y1={`${(i+1)*11}%`} x2="100%" y2={`${(i+1)*11}%`} stroke="#a78bfa" strokeWidth="0.5"/>)}
            </svg>
            <div style={{position:"absolute",top:"50%",left:"50%",width:"min(55vw,380px)",height:"min(55vw,380px)",borderRadius:"50%",border:"1px solid rgba(124,58,237,0.06)",transform:"translate(-50%,-50%)"}}/>
            <div style={{position:"absolute",top:"50%",left:"50%",width:"min(35vw,240px)",height:"min(35vw,240px)",borderRadius:"50%",border:"1px solid rgba(124,58,237,0.04)",transform:"translate(-50%,-50%)"}}/>
            <div style={{position:"absolute",top:20,left:20,fontFamily:"monospace",fontSize:11,color:"#4a3870",letterSpacing:"0.1em"}}>👁 TULSA METRO · LIVE INTELLIGENCE</div>
            {STORMS.map(s=><RadarDot key={s.id} storm={s} onClick={setSel} selected={sel?.id===s.id}/>)}

            {/* Detail card */}
            {sel&&(
              <div style={{position:"absolute",bottom:20,right:20,background:"rgba(6,4,15,0.93)",backdropFilter:"blur(20px)",border:`1px solid ${SEV[sel.severity].border}`,borderRadius:18,padding:22,width:288}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:16}}>
                  <div>
                    <div style={{fontSize:16,fontWeight:700,color:"#fff"}}>{sel.city}</div>
                    <div style={{fontSize:11,color:"#3d3060",marginTop:2}}>ZIP {sel.zip}</div>
                  </div>
                  <div style={{fontSize:30,fontWeight:900,color:SEV[sel.severity].color,lineHeight:1}}>{sel.hail}"</div>
                </div>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:10,padding:14,background:"rgba(124,58,237,0.06)",border:"1px solid rgba(124,58,237,0.1)",borderRadius:12,marginBottom:16}}>
                  {[["MPH",sel.wind],["HOMES",sel.homes.toLocaleString()],["VALUE",`$${(sel.homes*8.5/1000).toFixed(0)}K`]].map(([l,v])=>(
                    <div key={l} style={{textAlign:"center"}}>
                      <div style={{fontSize:18,fontWeight:800,color:l==="VALUE"?"#34d399":"#fff",lineHeight:1}}>{v}</div>
                      <div style={{fontSize:10,color:"#3d3060",marginTop:3}}>{l}</div>
                    </div>
                  ))}
                </div>
                <button style={{width:"100%",background:sel.claimed?"rgba(255,255,255,0.04)":`linear-gradient(135deg,${SEV[sel.severity].color},#c026d3)`,border:"none",borderRadius:100,color:sel.claimed?"#3d3060":"#fff",fontWeight:800,fontSize:13,padding:"13px 0",cursor:sel.claimed?"not-allowed":"pointer",letterSpacing:"0.05em",boxShadow:sel.claimed?"none":`0 6px 24px ${SEV[sel.severity].glow}`}}>
                  {sel.claimed?"✓ TERRITORY CLAIMED":"👁 DEPLOY CANVASSERS"}
                </button>
              </div>
            )}
          </div>

          {/* Stats bar */}
          <div style={{borderTop:"1px solid rgba(255,255,255,0.05)",display:"flex",background:"rgba(255,255,255,0.01)"}}>
            {[["Storms Today","5","#e879f9"],["Homes Impacted","2,985","#fff"],["Est. Pipeline","$254K","#34d399"],["Your Radius","50 mi","#818cf8"],["Alerts Sent","12","#a78bfa"]].map(([l,v,c],i)=>(
              <div key={l} style={{flex:1,padding:"16px 20px",borderRight:i<4?"1px solid rgba(255,255,255,0.05)":"none"}}>
                <div style={{fontSize:10,color:"#2a2040",marginBottom:4,letterSpacing:"0.08em"}}>{l.toUpperCase()}</div>
                <div style={{fontSize:22,fontWeight:800,color:c}}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
