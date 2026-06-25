const KEY='projektOneData';
function loadDB(){
 let db=JSON.parse(localStorage.getItem(KEY)||'null');
 if(db) return db;
 let w=localStorage.getItem('weight')||localStorage.getItem('po_weight')||92;
 db={version:3,profile:{start:92,goal:84,current:parseFloat(w)}};
 localStorage.setItem(KEY,JSON.stringify(db));
 return db;
}
function saveDB(db){localStorage.setItem(KEY,JSON.stringify(db));}
