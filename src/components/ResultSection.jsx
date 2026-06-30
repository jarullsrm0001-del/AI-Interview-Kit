import { useState } from "react";
import jsPDF from "jspdf";


function ResultSection({result}){


const [copied,setCopied]=useState(false);



const copyText=()=>{

navigator.clipboard.writeText(result);

setCopied(true);


setTimeout(()=>{

setCopied(false)

},2000);


};





const downloadPDF=()=>{


const pdf=new jsPDF();


pdf.text(
result.substring(0,3000),
10,
10
);


pdf.save("AI-Interview-Questions.pdf");


};





if(!result){

return null;

}





return(


<section className="px-6 py-16 bg-black text-white">


<div className="max-w-5xl mx-auto">


<h2 className="text-4xl font-bold mb-8 text-center">

📄 AI Generated Interview Questions

</h2>




<div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 whitespace-pre-line">


{result}


</div>





<div className="flex justify-center gap-5 mt-8">


<button

onClick={copyText}

className="bg-green-400 text-black px-6 py-3 rounded-full font-bold"

>

{copied?"Copied ✅":"📋 Copy"}

</button>





<button

onClick={downloadPDF}

className="bg-cyan-400 text-black px-6 py-3 rounded-full font-bold"

>

📄 Download PDF

</button>



</div>



</div>


</section>


);


}



export default ResultSection;