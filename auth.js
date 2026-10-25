function getCurrentUser(){try{return JSON.parse(sessionStorage.getItem("chUser"))||null;}catch{return null;}}
function signOut(){sessionStorage.removeItem("chUser");location.href="../index.html";}
function requireRole(role){const user=getCurrentUser();if(!user||user.role!==role){location.href="../index.html";return false;}return true;}
