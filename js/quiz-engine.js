'use strict';
// Shared quiz engine: one renderer, independent state per lesson.
const quizStates = new Map();
function resetQuiz(id) { quizStates.delete(id); }
function renderQuiz(id, stage) {
  stage.replaceChildren();
  const d = Object.hasOwn(QUIZ_DATA,id) ? QUIZ_DATA[id] : null;
  if (!d) { const p=document.createElement('p'); p.textContent='A quiz for this topic has not been added yet.'; stage.append(p); return; }
  if (!quizStates.has(id)) quizStates.set(id,{index:0,score:0,selected:-1,checked:false,recorded:false});
  const s=quizStates.get(id), total=d.questions.length, required=Math.ceil(total*d.passPercent/100);
  const root=document.createElement('div'); root.className='shared-quiz'; stage.append(root);
  const el=(tag,cls,txt,parent=root)=>{const x=document.createElement(tag); if(cls)x.className=cls;if(txt!==undefined)x.textContent=txt;parent.append(x);return x;};
  const button=(parent,text,fn)=>{const b=el('button','primary',text,parent);b.type='button';b.addEventListener('click',fn);return b;};
  const redraw=()=>renderQuiz(id,stage);
  if(s.index>=total){
    const passed=s.score>=required;
    if(!s.recorded){s.recorded=true;if(d.scoreStorageKey){try{localStorage.setItem(d.scoreStorageKey,String(s.score));}catch(e){}}if(passed&&d.markCompleteOnPass){completed[id]=true;saveProgress();progress();renderSidebar();}}
    const r=el('div','quiz-result');el('div','exercise-meta',d.resultTitle,r);el('h5','','Quiz completed!',r);el('strong','',`${s.score} / ${total}`,r);el('div',passed?'outcome p2-feedback-good':'outcome p2-feedback-bad',passed?'Passed! Excellent work.':'Keep practising. You can try again.',r);el('p','',`You scored ${Math.round(s.score/total*100)}%. Pass mark: ${d.passPercent}% (${required} out of ${total}).`,r);
    el('p','p2-quiz-saved',passed&&d.markCompleteOnPass?'This topic was also marked as completed.':'Review your notes and practise whenever you need.',r);
    const a=el('div','quiz-actions',undefined,r);a.style.justifyContent='center';button(a,'↻ Retake quiz',()=>{resetQuiz(id);redraw();});return;
  }
  const q=d.questions[s.index];el('h5','',`Quiz: ${d.title}`);el('p','quiz-scoreline',`${total} questions · 1 mark each · ${d.passPercent}% to pass · Immediate explanations`);
  const top=el('div','quiz-topline');el('span','',`QUESTION ${s.index+1} OF ${total}`,top);el('span','',`SCORE ${s.score}`,top);
  const bar=el('div','quiz-progress');el('div','',undefined,bar).style.width=`${(s.index+1)/total*100}%`;
  el('div','quiz-question',q.question);const choices=el('div','p2-choices');choices.setAttribute('role','group');choices.setAttribute('aria-label',q.question);
  q.options.forEach((option,i)=>{const label=el('label','p2-choice',undefined,choices);const radio=el('input','',undefined,label);radio.type='radio';radio.name='shared-quiz-choice';radio.value=String(i);radio.checked=s.selected===i;radio.disabled=s.checked;radio.addEventListener('change',()=>{if(!s.checked)s.selected=i;});label.append(document.createTextNode(`${String.fromCharCode(65+i)}. ${option}`));});
  const feedback=el('div','');feedback.setAttribute('aria-live','polite');
  const actions=el('div','quiz-actions');
  if(s.checked){const good=s.selected===q.correct;const panel=el('div','quiz-answer-panel',undefined,feedback);el('strong',good?'p2-feedback-good':'p2-feedback-bad',good?'✓ Correct! +1 mark':'Not quite. 0 marks',panel);el('p','',`Correct answer: ${q.options[q.correct]}`,panel);el('p','',q.why,panel);button(actions,s.index===total-1?'View final score →':'Next question →',()=>{s.index++;s.selected=-1;s.checked=false;redraw();});}
  else button(actions,'Check answer',()=>{if(s.selected<0){feedback.replaceChildren();el('div','quiz-answer-panel','Select an answer before checking.',feedback);return;}if(s.checked)return;s.checked=true;if(s.selected===q.correct)s.score++;redraw();});
}
