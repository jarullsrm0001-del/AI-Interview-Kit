function Navbar(){

const goTo = (section)=>{

const element = document.getElementById(section);

if(element){

element.scrollIntoView({

behavior:"smooth"

});

}

};



return(

<nav className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur-lg text-white flex justify-between items-center px-8 py-5">


<h1 className="text-2xl font-bold">

🤖 AI Interview Kit

</h1>



<div className="hidden md:flex gap-6">


<button onClick={()=>goTo("home")}>
Home
</button>


<button onClick={()=>goTo("features")}>
Features
</button>


<button onClick={()=>goTo("interview")}>
Interview
</button>


<button onClick={()=>goTo("about")}>
About
</button>


</div>




<button

onClick={()=>goTo("interview")}

className="bg-cyan-400 text-black px-5 py-2 rounded-full font-bold"

>

Get Started

</button>


</nav>

)

}


export default Navbar;