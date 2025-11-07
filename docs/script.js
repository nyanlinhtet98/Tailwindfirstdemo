const menu = document.getElementById('menu');
const menuBtn = document.getElementById("menu-btn");
const overlay = document.getElementById("overlay");
const todownlayer = document.getElementById("todown");

menuBtn.addEventListener("click",()=>{
    //Toogle the "hidden" class -> show or hides the menu
    //menu.classList.toggle("hidden");
    menu.classList.remove("hidden");
    overlay.classList.remove("hidden");
     todownlayer.classList.remove("z-10")
   setTimeout(()=>{
        menu.classList.remove("translate-x-full");
        overlay.classList.add("opacity-50");
   },10);
   document.body.classList.add("overflow-hidden");
});


//function to hidden when more hidden-box is is appear to hidden press anywhere on body
const idx = document.querySelector('.index');
// idx.addEventListener("mousedown",(e)=>{
//     //console.log(`MouseX : ${e.offsetX}, MouseY: ${e.offsetY}`);
//     //console.log('I\'m working');
//     menu.classList.toggle('hidden');
//     //menu.classList.toggle("animate-slide-out");
//     layer.classList.toggle("-z-10");
//     //menu.classList.add('animate-slide-out');
// } );

function closeMenu(){
    menu.classList.add("translate-x-full");
    overlay.classList.remove("opacity-10");
    ;
    setTimeout(()=>{
        menu.classList.add("hidden");
        overlay.classList.add("hidden");
        todownlayer.classList.add("z-10");
    }, 300);
    document.body.classList.remove("overflow-hidden");
}
idx.addEventListener("click",closeMenu);
overlay.addEventListener("click",closeMenu);

//Close menu when upper mdd screen 

function  checkScreenSize(){
    if(window.innerWidth >= 796){
        //Hide menu and overlay if open
        menu.classList.add("hidden","translate-x-full");
        overlay.classList.add("hidden");
        document.body.classList.remove("overflow-hidden");
        todownlayer.classList.add("z-10");
    }
}

window.addEventListener("resize", checkScreenSize);


//----------------------------------------------------------------------------------------
///plans == dropDownMenu
const dropdownBtn = document.getElementById("dropdownBtn");
const selectedText = document.getElementById("selectedText");
const plans = document.querySelector("#opt");
const options = document.querySelectorAll("#opt .plan");

    dropdownBtn.addEventListener("click", () => {
        plans.classList.toggle("hidden");
    });

    //select option
    options.forEach(function(option, index){
      option.addEventListener("click", () => {
        selectedText.textContent = option.textContent; // show chosen item
        plans.classList.remove("hidden"); // hide menu
        
         // Remove highlight from all options
        options.forEach(o => o.classList.remove("bg-blue-500", "text-white"));

        // Highlight the clicked option
        option.classList.add("bg-blue-500", "text-white");
        // Hide all contents
        contents.forEach(c => c.classList.add("hidden"));
    
        // Show the one matching the clicked button
        contents[index].classList.remove("hidden");
      });
      
    });

    // Close when clicking outside
document.addEventListener("click", (e) => {
  if (!dropdownBtn.contains(e.target) && !plans.contains(e.target)) {
    plans.classList.add("hidden");
  }
});

// Close when scrolling
window.addEventListener("scroll", () => {
  plans.classList.add("hidden");
});

//--------------------------------------------------------------------------

// Select all buttons
const buttons = document.querySelectorAll(".cus-btn");
// Select all process content blocks
const contents = document.querySelectorAll(".cus-process");

buttons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    // Reset all buttons to gray
    buttons.forEach(b => {
      const svg = b.querySelector("svg");
      const span = b.querySelector("span");
      svg.classList.remove("stroke-white");
      svg.classList.add("stroke-gray-400");
      span.classList.remove("text-white");
      span.classList.add("text-gray-400");
      b.classList.remove("border-white");
      b.classList.add("border-transparent");
    });

    // Activate the clicked button
    const svg = btn.querySelector("svg");
    const span = btn.querySelector("span");
    svg.classList.remove("stroke-gray-400");
    svg.classList.add("stroke-white");
    span.classList.remove("text-gray-400");
    span.classList.add("text-white");
    btn.classList.add("border-white");
    btn.classList.remove("border-transparent");

    // Hide all contents
    contents.forEach(c => c.classList.add("hidden"));
    
    // Show the one matching the clicked button
    contents[index].classList.remove("hidden");
  });
});


//footer getdate 
let nowdate = document.querySelector("#nowdate");
const getyear = new Date().getFullYear();

nowdate.innerHTML = getyear;