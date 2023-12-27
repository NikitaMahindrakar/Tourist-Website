import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg="https://media.istockphoto.com/id/1359711196/photo/internally-lit-orange-tent-on-shore-of-lake-under-dramatic-sunset-sky.jpg?s=612x612&w=0&k=20&c=8b0ClXYx-IJdHRhyWhxx6Z39x483Kk5G19KdB91RR3o="
        title="About"
        btnClass="hide"
      />
      <AboutUs />
      <Footer />
    </>
  );
}
export default About;
