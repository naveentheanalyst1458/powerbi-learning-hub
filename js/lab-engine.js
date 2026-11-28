'use strict';
// Common registry and lifecycle. Each topic has an independent component instance.
const VisualLabs = (()=>{
 const types=new Map(),instances=new Map();
 return {
  registerType(type,factory){if(types.has(type))throw new Error('Duplicate visual lab type: '+type);types.set(type,factory);},
  reset(topicId){instances.delete(topicId);},
  render(topicId,stage){
   const config=Object.hasOwn(LAB_DATA,topicId)?LAB_DATA[topicId]:null;
   if(!config||!types.has(config.type)){stage.textContent='A visual lab is not yet available for this topic.';return;}
   if(!instances.has(topicId))instances.set(topicId,types.get(config.type)(stage,config));
   instances.get(topicId).render();
  }
 };
})();
