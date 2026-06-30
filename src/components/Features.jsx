import { FcNext } from "react-icons/fc";

function Features() {


const features = [

{
icon:"🤖",
title:"AI Question Generator",
desc:"Generate interview questions instantly using Gemini AI based on your job role and skills."
},

{
icon:"📖",
title:"Smart Learning",
desc:"Get short answers with detailed explanations to improve your understanding."
},

{
icon:"🎤",
title:"Voice Practice",
desc:"Practice speaking answers and improve your interview confidence."
},

{
icon:"⏱️",
title:"Mock Interview Mode",
desc:"Experience real interview preparation with timer based practice."
},

{
icon:"📊",
title:"Performance Tracking",
desc:"Track your preparation progress and improve weak areas."
},

{
icon:"⭐",
title:"Personalized Preparation",
desc:"Choose difficulty, topics and number of questions according to your needs."
},

{
icon:"🔊",
title:"Read Answers Loud",
desc:"Listen to answers and learn faster with text-to-speech support."
},

{
icon:"📱",
title:"Mobile Friendly",
desc:"Practice interviews anytime with a responsive design."
}

];



return (

<section
id="features"
className="py-20 px-6 bg-gradient-to-b from-black to-purple-950 text-white"
>


<h2 className="text-5xl font-bold text-center mb-5">

✨ Powerful Features

</h2>


<p className="text-center text-gray-300 mb-12 text-lg">

Everything students need to crack interviews

</p>



<div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">


{

features.map((item,index)=>(


<div

key={index}

className="bg-white/10 backdrop-blur-lg p-6 rounded-3xl hover:scale-105 transition duration-300"

>


<div className="text-5xl mb-4">

{item.icon}

</div>



<h3 className="text-xl font-bold mb-3">

{item.title}

</h3>



<p className="text-gray-300">

{item.desc}

</p>



</div>


))

}



</div>


</section>


);


}


export default Features;