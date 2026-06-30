import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Dashboard from "./components/Dashboard";
import InterviewForm from "./components/InterviewForm";
import Footer from "./components/Footer";


function App(){

  return (

    <>

      <Navbar />

      <main>

        <Hero />

        <Features />

        <Dashboard />

        <InterviewForm />

      </main>


      <Footer />


    </>

  );

}


export default App;