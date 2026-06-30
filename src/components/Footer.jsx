function Footer(){

  return (

    <footer
      id="about"
      className="bg-gradient-to-br from-blue-950 via-purple-950 to-black text-white py-20 px-6"
    >

      <div className="max-w-6xl mx-auto text-center">


        <h2 className="text-5xl font-bold mb-6">
          🤖 About AI Interview Kit
        </h2>


        <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-8">

          AI Interview Kit is an AI-powered interview preparation
          platform designed for students and freshers. It helps users
          generate interview questions, learn concepts, practice skills,
          and improve confidence using Gemini AI.

        </p>



        <div className="grid md:grid-cols-4 gap-6 mt-12">


          <div className="bg-white/10 backdrop-blur p-6 rounded-3xl">

            <div className="text-5xl mb-4">
              🎯
            </div>

            <h3 className="text-xl font-bold">
              Smart Preparation
            </h3>

            <p className="text-gray-300 mt-2">
              AI generated questions and personalized learning.
            </p>

          </div>




          <div className="bg-white/10 backdrop-blur p-6 rounded-3xl">

            <div className="text-5xl mb-4">
              📚
            </div>

            <h3 className="text-xl font-bold">
              Learning History
            </h3>

            <p className="text-gray-300 mt-2">
              Save and review your interview preparation.
            </p>

          </div>





          <div className="bg-white/10 backdrop-blur p-6 rounded-3xl">

            <div className="text-5xl mb-4">
              🏆
            </div>

            <h3 className="text-xl font-bold">
              Interview Ready
            </h3>

            <p className="text-gray-300 mt-2">
              Improve your confidence before interviews.
            </p>

          </div>





          <div className="bg-white/10 backdrop-blur p-6 rounded-3xl">

            <div className="text-5xl mb-4">
              🚀
            </div>

            <h3 className="text-xl font-bold">
              Career Growth
            </h3>

            <p className="text-gray-300 mt-2">
              Prepare for real-world opportunities.
            </p>

          </div>


        </div>





        <div className="mt-16 border-t border-white/20 pt-8">


          <p className="text-gray-400">

            Built with ❤️ using React + Tailwind CSS + Gemini AI

          </p>


        </div>



      </div>


    </footer>

  );

}


export default Footer;