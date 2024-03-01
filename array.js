// // // // array syntax

// // // // add
// // // // var a=[1,2,4,5]
// // // // a[2]=444
// // // //   console.log(a[0])

// // // // push
// // // // var a=[1,2,4,5]
// // // // a.push(444)
// // // //   console.log(a)

// // // // pop
// // // // var a=[1,2,4,5]
// // // // a.pop()
// // // //   console.log(a)

// // // // slice
// // // // var a=[1,2,4,5]
// // // // var b=a.slice(0,3)
// // // //   console.log(b)
// // // //   console.log(a)

// // // // splice
// // // // var a=[1,2,4,5]
// // // // a.splice(2,1)
// // // // console.log(a)


// // // //   for (count=0;count<=10;count=count+1)
// // // // {
// // // //   if(2%=0){
// // // //     console.log(count)
// // // //   }
// // // //   else{
// // // //     console.log(count)
// // // //   }
// // // // }


// // // // practice query selector and id selector

// // // /* <div id="container">
// // //   <p id="paragraph1">This is the first paragraph</p>
// // //   <p id="paragraph2">This is the second paragraph</p>
// // //   <p id="paragraph3">This is the thrid paragraph</p>
// // //  <ul>
// // //    <li>item 1</li>
// // //    <li class="special">item 2</li>
// // //    <li>item 3</li>
// // //  </ul>
// // //  <div id="myDiv"></div>
// // //  <button id="button">click me</button>
// // // </div>

// // // <script>
// // //   var p2=document.getElementById("paragraph2")
// // //   console.log(p2.textContent)

// // //   var p3=document.getElementById("paragraph3")
// // //   p3.textContent="Updated text Content"

// // //   var myDiv=document.getElementById("myDiv")
// // //   myDiv.innerHTML="<strong>This is Bold text</strong>"

// // //   var special1=document.querySelector(".special")
// // //   console.log(special1.txtContent)
// // // </script> */


// // // // <!-- <div id="container">
// // // //   <p id="paragraph1">This is the first paragraph</p>
// // // //   <p id="paragraph2">This is the second paragraph</p>
// // // //   <p id="paragraph3">This is the thrid paragraph</p>
// // // //  <ul>
// // // //    <li>item 1</li>
// // // //    <li class="special">item 2</li>
// // // //    <li>item 3</li>
// // // //  </ul>
// // // //  <div id="myDiv"></div>
// // // //  <button id="button">click me</button>
// // // // </div>

// // // // <script>
// // // //   var p2=document.getElementById("paragraph2")
// // // //   console.log(p2.textContent)

// // // //   var p3=document.getElementById("paragraph3")
// // // //   p3.textContent="Updated text Content"

// // // //   var myDiv=document.getElementById("myDiv")
// // // //   myDiv.innerHTML="<strong>This is Bold text</strong>"

// // // //   var special1=document.querySelector(".special")
// // // //   console.log(special1.textContent)
// // // // </script>

// // // //  -->


// // // // event object


// // // // <!-- <body onkeypress="keypressed()">
  
// // // // </body>

// // // //   <script>

// // // //     function keypressed()

// // // //     {
// // // //       alret("key is Pressed")
// // // //     }

// // // //   </script> -->

// // // // <!-- <body onkeypress="keypressed()">
// // // //   </body>
  
// // // //   <script>
// // // //     function keypressed() 
// // // //     {
// // // //       alert("Key is Pressed");
// // // //     }
// // // //   </script> -->






// // // // <!-- <button onclick="click1(event)">button1</button>
// // // // <button onclick="click2(event)">button2</button>
// // // // <button onclick="click3(event)">button3</button>


// // // // <script>
// // // //   function click1(event) 
// // // //   {
// // // //     console.log("button1")
// // // //   }
// // // //   function click2(event) 
// // // //   {
// // // //     console.log("button2")
// // // //   }
// // // //   function click3(event) 
// // // //   {
// // // //     console.log("button3")
// // // //   }
// // // // </script> -->


// // // // <!-- <button onclick="click1(event)">button1</button>
// // // // <button onclick="click2(event)">button2</button>
// // // // <button onclick="click3(event)">button3</button>


// // // // <script>
// // // //   function click1(event) 
// // // //   {
// // // //     alert("button1")
// // // //   }
// // // //   function click2(event) 
// // // //   {
// // // //     alert("button2")
// // // //   }
// // // //   function click3(event) 
// // // //   {
// // // //   alert("button3")
// // // //   }
// // // // </script> -->


// // // // <!-- <button onclick="click1(event)">button1</button>
// // // // <button onclick="click1
// // // // (event)">button2</button>
// // // // <button onclick="click1(event)">button3</button>


// // // // <script>
// // // //   function click1(event) 
// // // //   {
// // // //     console.log(event.target.textContent)
// // // //   }
// // // // </script> -->

// // // // <!-- live text js use onekeyup a-->

// // // // <!-- <input type=" text" id="inputbox" onkeyup="update()">
// // // // <h1 id="result"></h1>

// // // // <script>
// // // //   var inputbox=document.getElementById("inputbox")
// // // //   var result=document.getElementById("result")

// // // //   function update(){
// // // //     result.textContent=inputbox.value
// // // //   }
// // // //   </script> -->


  
// // // // replace the onclick
// // // /* <button class="bnt">click</button>

// // // <script>
// // //   var btn=document.querySelector(".bnt")
// // //   btn.addEventListener("click",function(){
// // //     alert("hello")

// // //   }
// // // );
// // // </script> */

// // // // popup box ona button click 

// // // // <style>
// // // //   .red{
// // // //     background-color: red;
// // // //     height: 100px;
// // // //    width: 100px;
// // // //   }

// // // //   .black{
// // // //     background-color: black;
// // // //     height: 100px;
// // // //     width: 100px;
// // // //   }
// // // // </style>


// // // // <div class="red">

// // // // </div>
// // // // <button class="btn1">change red</button>
// // // // <button id="btn2">remove black color</button>
// // // // <script>
// // // //   var d=document.querySelector(".red")
// // // //   var btn1=document.querySelector(".btn1")
// // // //   var btn2=document.getElementById("btn2")
// // // //   btn1.addEventListener("click",function(){
// // // //     d.classList.add("black")
// // // //   })
// // // //   btn2.addEventListener("click",function(){
// // // //     d.classList.remove("black")
// // // //   })
// // // // </script>


// // // // click make the page 

// // // <!-- <style>
// // //   .popup{
// // //     background-color: black;
// // //     padding: 15px;
// // //     width: 150px;
// // //     color: white;
    
// // //   }
// // //   .hidden{
// // //     display: none;
// // //   }

// // // </style>



// // // <button id="btn">click</button>
// // // <div class="popup hidden">
// // // <p style="text-align:end;margin: 0;top: 0;" class="point">x</p>
// // // <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic 
// // //   quod necessitatibus, minus blanditiis accusantium rem ab quam. N
// // //   esciunt, reprehenderit. Esse veniam pariatur fugit recusandae aut 
// // //   eveniet voluptatibus culpa libero! Consectetur.</p>
// // // </div>

// // // <script>
// // //  var btn=document.getElementById("btn")
// // //  var popup=document.querySelector(".popup")
// // //  var click=document.querySelector(".point")
// // // btn.addEventListener("click",function(){
// // //   popup.style.display="block"
// // // }
// // // )

// // // click.addEventListener("click",function(){
// // //   popup.classList.remove="hidden"
// // // })

// // // </script> -->


// // // <style>
// // //   .popup {
// // //     top: 20%;
// // //     background-color: black;
// // //     padding: 15px;
// // //     width: 150px;
// // //     color: white;
// // //     margin-left: 50%;
// // //     z-index: 2;
// // //     position: relative;

// // //   }

// // //   .hidden {
// // //     display: none;
// // //   }

// // //   .overley {
// // //     background-color: black;
// // //     margin-top: 40px;
// // //     opacity: 0.5;
// // //     height: 100%;
// // //     width: 100%;
// // //     position: absolute;
// // //     top: 0px;
// // //     z-index: 1;
// // //   }
// // // </style>



// // // <button id="btn">click</button>
// // // <div class="overley hidden">

// // // </div>
// // // <div class="popup hidden">
// // //   <p style="text-align:end;margin: 0;top: 0;" class="point">x</p>
// // //   <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic
// // //     quod necessitatibus, minus blanditiis accusantium rem ab quam. N
// // //     esciunt, reprehenderit. Esse veniam pariatur fugit recusandae aut
// // //     eveniet voluptatibus culpa libero! Consectetur.</p>
// // // </div>

// // // <script>
// // //   var btn = document.getElementById("btn")
// // //   var popup = document.querySelector(".popup")
// // //   var click = document.querySelector(".point")
// // //   var overley = document.querySelector(".overley")

// // //   btn.addEventListener("click", function () {
// // //     popup.classList.remove("hidden")
// // //     overley.classList.remove("hidden")
// // //   }
// // //   )

// // //   click.addEventListener("click", function () {
// // //     popup.classList.add("hidden")
// // //     overley.classList.add("hidden")

// // //   })

// // // </script>




// // <!-- Append vs prepend -->

// // <!-- <button id="add">add</button>
// // <div id="container">
// // <p>hai</p>
// // </div>

// // <script>
 

// //   var container=document.getElementById("container")
// //   var btn=document.getElementById("add")
// //   btn.addEventListener("click",function(){
// //     var heading=document.createElement("h1")
// //   heading.textContent="hello"
// //   console.log(heading)
// //   container.prepend(heading)
// //   })
// // </script> -->


// <!-- <!-- <!-- <h1 id="one">one</h1>
// <h1 id="two">two</h1>
// <h1 id="three">three</h1>
// <h1 id="four">four</h1>
// <h1 id="five">five</h1>
// <h1 id="six">six</h1>

// <button id="btn">Delete</button>
// <script>
//   var one = document.getElementById("one")
//   var two = document.getElementById("two")
//   var three = document.getElementById("three")
//   var four = document.getElementById("four")
//   var five = document.getElementById("five")
//   var six = document.getElementById("six")
//   var btn=document.getElementById("btn")
//   one.addEventListener("click",function(){
//     one.remove("one")  })

//     two.addEventListener("click",function(){
//     two.remove("one")})
// </script> -->


// <!-- perticular items delete use click onclick -->
// <!-- <h1 onclick="deleteElement(event)">one</h1>
// <h1 onclick="deleteElement(event)">two</h1>
// <h1 onclick="deleteElement(event)">three</h1>
// <h1 onclick="deleteElement(event)">four</h1>
// <h1 onclick="deleteElement(event)">five</h1>
// <h1 onclick="deleteElement(event)">six</h1>

// <script>
//   function deleteElement(){
//     event.target.remove()
//   }
// </script> -->

// <!-- 
//  How do delete an element a parent element-->

// <!-- <div id="container">
//   <p>Ajay</p>
//   <h1 id="head">Hello</h1>
// </div>
// <script>
//   var head=document.getElementById("head") -->
//   <!-- // head.remove()
//   // head.parentElement.remove()
//   // console.log (head.parentElement)
// // console.log(head.closest("#container"))
// // head.closest("#container").remove()
// </script>  -->


// lets create a to do list from scratch
// <input type="text" id="inputbox">
// <button id="btn">Add</button>

// <ul id="container">
//   <li>
// hello
//     <button onclick="deleteitem(event)">Delete</button>
//   </li>
// </ul>

// /<script>
//   var inputbox=document.getElementById("inputbox")
//   var btn= document.getElementById("btn")
//   var sontainer=document.getElementById("container")

//   btn.addEventListener("click",function(){
//     var li=document.createElement("li")                                                   
//     li.innerHTML=inputbox.value + "<button onclick="+"deleteitem(event)"+">Delete</button>"
//     container.append(li)  
// })


//   function deleteitem(event){
//     event.target.parentElement.remove()
//   }
// </script> 