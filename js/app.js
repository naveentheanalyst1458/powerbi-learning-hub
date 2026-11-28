// Existing website behaviour, separated from HTML.
  const grid = document.getElementById('module-grid');
  const search = document.getElementById('module-search');
  let selected=0;
  function renderModules(q=''){
    const filtered=modules.map((m,i)=>({...m,index:i})).filter(m=>`${m.name} ${m.desc} ${m.topics.join(' ')}`.toLowerCase().includes(q.trim().toLowerCase()));
    grid.innerHTML='';
    if(!filtered.length){const e=document.createElement('p');e.className='empty';e.textContent='No topics found. Try another search.';grid.appendChild(e);return;}
    filtered.forEach(m=>{const card=document.createElement('div');card.className='module';const top=document.createElement('div');top.className='module-top';const no=document.createElement('span');no.className='module-index';no.textContent=`MODULE ${String(m.index+1).padStart(2,'0')}`;const status=document.createElement('span');status.className=`status ${m.ready?'ready':''}`;status.textContent=m.ready?'LESSON READY':'ROADMAP';top.append(no,status);const h=document.createElement('h4');h.textContent=m.name;const p=document.createElement('p');p.textContent=m.desc;const btn=document.createElement('button');btn.type='button';btn.textContent=m.ready?'Open notes →':'View topics →';btn.addEventListener('click',()=>openModule(m.index));card.append(top,h,p,btn);grid.appendChild(card);});
  }
  function openModule(index){selected=index;const m=modules[index];document.getElementById('lesson-kicker').textContent=`MODULE ${String(index+1).padStart(2,'0')} · ${m.ready?'READY TO LEARN':'COURSE ROADMAP'}`;document.getElementById('lesson-title').textContent=m.ready?'What is Power BI?':m.name;document.getElementById('lesson-subtitle').textContent=m.desc;document.getElementById('ready-lesson').hidden=!m.ready;document.getElementById('planned-lesson').hidden=!!m.ready;document.getElementById('complete-btn').hidden=!m.ready;const list=document.getElementById('planned-list');list.replaceChildren();m.topics.forEach(t=>{const s=document.createElement('span');s.textContent=t;list.appendChild(s);});document.getElementById('lesson').scrollIntoView({behavior:'smooth',block:'start'});}
  function switchTab(tab){document.querySelectorAll('[role="tab"]').forEach(b=>b.setAttribute('aria-selected',String(b.dataset.tab===tab)));['concept','flow','quiz'].forEach(t=>{document.getElementById(`panel-${t}`).hidden=t!==tab;});}
  document.querySelectorAll('[role="tab"]').forEach(b=>b.addEventListener('click',()=>switchTab(b.dataset.tab)));
  document.querySelectorAll('.quiz-option').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.quiz-option').forEach(o=>o.classList.remove('correct','wrong'));const correct=b.dataset.answer==='correct';b.classList.add(correct?'correct':'wrong');document.getElementById('answer').textContent=correct?'✓ Correct! Power Query is used to clean and transform data.':'Not quite. The correct answer is Power Query.';}));
  const progressKey='pbi-learning-hub-intro-complete-v1';
  let completed=false;try{completed=localStorage.getItem(progressKey)==='1';}catch(e){}
  function updateProgress(){document.getElementById('progress-number').textContent=completed?'1 / 1':'0 / 1';const btn=document.getElementById('complete-btn');btn.textContent=completed?'✓ Completed':'✓ Mark completed';btn.classList.toggle('done',completed);btn.setAttribute('aria-pressed',String(completed));}
  document.getElementById('complete-btn').addEventListener('click',()=>{completed=!completed;try{localStorage.setItem(progressKey,completed?'1':'0')}catch(e){}updateProgress();});
  search.addEventListener('input',()=>renderModules(search.value));
  document.getElementById('start-btn').addEventListener('click',()=>openModule(0));
  renderModules();updateProgress();
