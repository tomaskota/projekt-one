const KEY='projektOneData';
function migrate(){
 let data=JSON.parse(localStorage.getItem(KEY)||'null');
 if(data) return data;
 data={version:3,profile:{start:92,goal:84,current:92},notes:'',workouts:{}};
 const old=localStorage.getItem('po_weight');
 if(old) data.profile.current=parseFloat(old);
 localStorage.setItem(KEY,JSON.stringify(data));
 return data;
}
function loadData(){return migrate();}
function saveData(d){localStorage.setItem(KEY,JSON.stringify(d));}
