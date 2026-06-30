function Hero() {


const scrollToInterview = () => {

  document.getElementById("interview")
  ?.scrollIntoView({
    behavior:"smooth"
  });

};


const scrollToFeatures = () => {

  document.getElementById("features")
  ?.scrollIntoView({
    behavior:"smooth"
  });

};



return (

<section
id="home"
className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-purple-900 via-black to-blue-900 text-white pt-20"
>


<div className="text-center max-w-5xl">


<div className="text-7xl mb-6 animate-bounce">
🤖
</div>



<h1 className="text-5xl md:text-7xl font-bold mb-6">

AI Interview
<br/>

<span className="text-cyan-400">
Preparation Kit
</span>

</h1>



<p className="text-gray-300 text-xl max-w-3xl mx-auto mb-10">

Generate smart interview questions using AI.
Practice your skills, improve confidence,
and prepare for your dream job.

</p>



<div className="flex justify-center gap-5 flex-wrap">


<button

onClick={scrollToInterview}

className="bg-cyan-400 text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition"

>

🚀 Start Preparing

</button>



<button

onClick={scrollToFeatures}

className="border border-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-black transition"

>

✨ Learn More

</button>


</div>



<div className="grid md:grid-cols-3 gap-6 mt-16">


<div className="bg-white/10 backdrop-blur p-6 rounded-2xl">

<h3 className="text-3xl font-bold">
100+
</h3>

<p>
Questions
</p>

</div>



<div className="bg-white/10 backdrop-blur p-6 rounded-2xl">

<h3 className="text-3xl font-bold">
AI
</h3>

<p>
Powered Learning
</p>

</div>



<div className="bg-white/10 backdrop-blur p-6 rounded-2xl">

<h3 className="text-3xl font-bold">
24/7
</h3>

<p>
Practice Anytime
</p>

</div>


</div>



</div>


</section>


);

}


export default Hero;