function Dashboard(){

return(

<section
className="py-20 px-6 bg-gradient-to-br from-indigo-950 via-black to-purple-950 text-white"
>


<div className="max-w-6xl mx-auto">


<h2 className="text-5xl font-bold text-center mb-12">

🎓 Student Preparation Dashboard

</h2>



<div className="grid md:grid-cols-4 gap-6">



<div className="bg-white/10 backdrop-blur rounded-3xl p-6">

<h3 className="text-3xl">

🔥 65%

</h3>

<p>
Preparation Progress
</p>

</div>




<div className="bg-white/10 backdrop-blur rounded-3xl p-6">

<h3 className="text-3xl">

📚 24

</h3>

<p>
Topics Completed
</p>

</div>




<div className="bg-white/10 backdrop-blur rounded-3xl p-6">

<h3 className="text-3xl">

⭐ 15

</h3>

<p>
Saved Questions
</p>

</div>




<div className="bg-white/10 backdrop-blur rounded-3xl p-6">

<h3 className="text-3xl">

🏆 Level 3

</h3>

<p>
Interview Skills
</p>

</div>



</div>





<div className="grid md:grid-cols-2 gap-8 mt-12">


<div className="bg-white/10 rounded-3xl p-8">


<h3 className="text-2xl font-bold mb-4">

📝 My Learning Diary

</h3>


<textarea

placeholder="Write your preparation notes..."

className="w-full h-40 p-4 rounded-xl text-black"

/>


</div>





<div className="bg-white/10 rounded-3xl p-8">


<h3 className="text-2xl font-bold mb-4">

🎯 Today's Goals

</h3>


<ul className="space-y-3">

<li>
☐ Learn React Concepts
</li>


<li>
☐ Practice AI Questions
</li>


<li>
☐ Complete Mock Interview
</li>


</ul>



</div>


</div>


</div>


</section>


)

}


export default Dashboard;