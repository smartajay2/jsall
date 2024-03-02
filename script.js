// var table=document.getElementById("table")
// table.style.background=("orange")
// table.style.border=("3px solid black")

var name=document.getElementById("Name")
var age=document.getElementById("age")
var radio=document.getElementsByName("radio")
var course=document.getElementById("course")
var Email=document.getElementById("Email")
var btn=document.getElementById("btn")
var Delete=document.getElementById("delete")


btn.addEventListener("click",function(){
  var td=document.createElement("td")
  td.innerHTML=NAme.value
  var newRow = document.createElement("tr");
  table.append(newRow);
  table.append(td)})

  btn.addEventListener("click",function(){
  var td=document.createElement("td")
  td.textContent=age.value
 table.append(td)})

btn.addEventListener("click",function(){
  var td=document.createElement("td")
  td.textContent=Course.value
 table.append(td)})

 btn.addEventListener("click", function() {
  var td = document.createElement("td");
  table.append(td);
                     
  radio[0].addEventListener("click", function() {
   td.textContent= radio[0].value;
  });
  radio[1].addEventListener("click", function() {
    td.textContent = radio[1].value;
});                                            
});    
 
btn.addEventListener("click",function(){
  var td=document.createElement("td")
  td.textContent=Email.value
  table.append(td)

  var td=document.createElement("td")
 td.innerHTML='<button onclick="deleteItem(event)">Delete</button>'
 table.append(td)
})
  
function deleteitem(event){
      event.target.parentElement.remove()
    }

  
    
      
  



