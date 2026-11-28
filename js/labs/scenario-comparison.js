'use strict';
// Reusable data-driven table and bar comparison component. Source strings are escaped.
VisualLabs.registerType('scenario-comparison',(stage,config)=>{
 const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 let sc=config.scenarios[0],mode=sc.defaultView;
 const bar=(value,max,kind)=>`<div class="lab-bar-track"><div class="lab-bar ${esc(kind||'')}" style="width:${Math.max(0,Math.min(100,value/max*100))}%"></div></div>`;
 const table=rows=>`<div class="notes-table-wrap"><table class="notes-table number-table"><thead><tr>${rows[0].map(x=>`<th>${esc(x)}</th>`).join('')}</tr></thead><tbody>${rows.slice(1).map(row=>`<tr>${row.map(x=>`<td>${esc(x)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
 function content(v){
  const body=v.kind==='table'?table(v.rows):`<div class="lab-chart">${v.rows.map(r=>`<div class="lab-chart-row"><strong>${esc(r.name)}</strong>${r.bars?`<div class="lab-bars-pair">${r.bars.map(b=>bar(b.value,v.max,b.kind)).join('')}</div>`:bar(r.value,v.max,r.kind)}<small>${esc(r.label)}</small></div>`).join('')}</div>`;
  return body+(v.legend?`<p class="lab-legend">${esc(v.legend)}</p>`:'')+(v.callout?`<div class="lab-callout"><strong>${esc(v.callout.title)}</strong><p>${esc(v.callout.text)}</p></div>`:'');
 }
 function render(){
  const v=sc.views.find(x=>x.id===mode);
  stage.innerHTML=`<h5>${esc(config.title)}</h5><p>${esc(config.description)}</p><div class="lab-head" id="bi-scenarios">${config.scenarios.map((x,i)=>`<button type="button" class="lab-choice${x===sc?' active':''}" data-scenario="${i}" aria-pressed="${x===sc}">${esc(x.label)}</button>`).join('')}</div><div class="lab-body" id="bi-lab-body"><h6>${esc(sc.title)}</h6><p>${esc(sc.description)}</p><div class="lab-toggle">${sc.views.map((x,i)=>`<button type="button" data-view="${i}" data-mode="${esc(x.id)}" class="${x===v?'active':''}" aria-pressed="${x===v}">${esc(x.label)}</button>`).join('')}</div><div id="bi-lab-content">${content(v)}</div></div>`;
  stage.querySelectorAll('[data-scenario]').forEach(b=>b.addEventListener('click',()=>{sc=config.scenarios[Number(b.dataset.scenario)];mode=sc.defaultView;render();}));
  stage.querySelectorAll('[data-view]').forEach(b=>b.addEventListener('click',()=>{mode=sc.views[Number(b.dataset.view)].id;render();}));
 }
 return {render};
});
