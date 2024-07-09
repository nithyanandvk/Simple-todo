let btn=document.querySelector(".button");
let ul=document.querySelector(".ul");
let input=document.querySelector(".input");
btn.addEventListener("click",function add(){
   let item=document.createElement("li");
   item.innerText=input.value;

   let delBtn=document.createElement("button");
   delBtn.innerText="Delete";
   delBtn.classList.add("delete");

   let cb=document.createElement("input");
   cb.setAttribute("type","checkBox");
   cb.classList.add("cb");
   let div=document.createElement("div");
   div.style.display="flex";
   div.style.flexDirection="row";

   div.append(cb);
   div.append(delBtn);
   item.appendChild(div);
   ul.appendChild(item);
   input.value="";
});
ul.addEventListener("click",function (event){
   if(event.target.nodeName=="BUTTON"){
      let listItem=event.target.parentElement;
      let lii=listItem.parentElement;
      lii.remove();
   }
});


// let delBtns=document.querySelectorAll(".delete");
// for(delBtn of delBtns){
//    delBtn.addEventListener("click", function (){
//       let par = this.parentElement;
//       par.remove();
//    });

// }
