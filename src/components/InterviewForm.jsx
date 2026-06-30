import { useState } from "react";
import { generateInterviewQuestions } from "../services/gemini";


function InterviewForm(){

const [formData,setFormData]=useState({

role:"",
description:"",
topic:"",
difficulty:"Easy",
questions:5

});


const [result,setResult]=useState("");

const [loading,setLoading]=useState(false);



const handleChange=(e)=>{

setFormData({

...formData,

[e.target.name]:e.target.value

});

};



const generate=async()=>{

setLoading(true);

try{

const response=await generateInterviewQuestions(formData);

setResult(response);

}

catch(error){

alert("Error generating questions");

console.log(error);

}

setLoading(false);

};





return(


<section

id="interview"

className="py-24 px-6 bg-gradient-to-br from-slate-100 via-blue-100 to-purple-100"


>


<div className="max-w-5xl mx-auto">


<div className="bg-white shadow-2xl rounded-3xl p-10">



<h2 className="text-5xl font-bold text-center text-gray-900 mb-4">

🎯 Prepare Your Interview

</h2>



<p className="text-center text-gray-600 mb-10">

Create personalized AI interview questions and improve your skills

</p>




<div className="grid md:grid-cols-2 gap-6">



<div>

<label className="font-semibold text-gray-700">

Job Role

</label>


<select

name="role"

onChange={handleChange}

className="w-full mt-2 p-4 rounded-xl border border-gray-300 bg-gray-50 text-gray-900"

>


<option>

Select Role

</option>


<option>

AI Engineer

</option>


<option>

Machine Learning Engineer

</option>


<option>

Software Developer

</option>


<option>

Frontend Developer

</option>


<option>

Backend Developer

</option>


<option>

Data Scientist

</option>


<option>

Python Developer

</option>


</select>


</div>





<div>


<label className="font-semibold text-gray-700">

Topic

</label>



<input

name="topic"

placeholder="Example: React, Python, ML"

onChange={handleChange}

className="w-full mt-2 p-4 rounded-xl border border-gray-300 bg-gray-50 text-gray-900"

/>



</div>



</div>





<div className="mt-6">


<label className="font-semibold text-gray-700">

Job Description

</label>



<textarea

name="description"

rows="5"

placeholder="Enter job description..."

onChange={handleChange}

className="w-full mt-2 p-4 rounded-xl border border-gray-300 bg-gray-50 text-gray-900"

/>


</div>





<div className="grid md:grid-cols-2 gap-6 mt-6">



<div>


<label className="font-semibold text-gray-700">

Difficulty

</label>


<select

name="difficulty"

onChange={handleChange}

className="w-full mt-2 p-4 rounded-xl border bg-gray-50 text-gray-900"

>


<option>

Easy

</option>


<option>

Medium

</option>


<option>

Hard

</option>


</select>


</div>





<div>


<label className="font-semibold text-gray-700">

Number of Questions (1-100)

</label>


<input

type="number"

name="questions"

min="1"

max="100"

value={formData.questions}

onChange={handleChange}

className="w-full mt-2 p-4 rounded-xl border bg-gray-50 text-gray-900"

/>


</div>


</div>







<button

onClick={generate}

className="mt-10 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-full text-xl font-bold hover:scale-105 transition"


>


{

loading

?

"🤖 AI is preparing..."

:

"🚀 Generate Interview Questions"

}


</button>






{

result &&

<div className="mt-10 bg-gray-900 text-white rounded-2xl p-8 whitespace-pre-line">


<h3 className="text-2xl font-bold mb-4">

AI Result

</h3>


{result}


</div>


}





</div>


</div>


</section>


);


}


export default InterviewForm;