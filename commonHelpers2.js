import"./assets/styles-f4db286d.js";const e=document.querySelector(".feedback-form"),a="feedback-form-state",s=JSON.parse(localStorage.getItem(a));try{e.elements.email.value=s.email,e.elements.message.value=s.message}catch{console.log("No saved data")}e.addEventListener("input",t=>{const o=e.elements.email.value.trim(),l=e.elements.message.value.trim();localStorage.setItem(a,JSON.stringify({email:o,message:l}))});e.addEventListener("submit",t=>{t.preventDefault(),localStorage.removeItem(a),e.reset()});
//# sourceMappingURL=commonHelpers2.js.map