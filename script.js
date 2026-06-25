const now=new Date();
date.textContent=now.toLocaleDateString('cs-CZ',{weekday:'long',day:'numeric',month:'long',year:'numeric'});
const nextMap={0:'Úterý',1:'Úterý',2:'Pátek',3:'Pátek',4:'Pátek',5:'Neděle',6:'Úterý'};
next.textContent=nextMap[now.getDay()];
function saveWeight(){localStorage.setItem('po_weight',weight.value);load();}
function load(){
 let w=localStorage.getItem('po_weight')||'92';
 weight.value=w;
 currentWeight.textContent=w+' kg';
 notes.value=localStorage.getItem('po_notes')||'';
 document.querySelectorAll('input[type=checkbox]').forEach(c=>{
   let k='po_'+c.id;
   c.checked=localStorage.getItem(k)==='1';
   c.onchange=()=>localStorage.setItem(k,c.checked?'1':'0');
 });
}
function saveNotes(){localStorage.setItem('po_notes',notes.value);alert('Poznámky uloženy');}
load();
