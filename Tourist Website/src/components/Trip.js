import TripData from "./TripData";
import "./TripStyles.css";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps.</p>
      <div className="tripcard">
        <TripData
          image="https://media.istockphoto.com/id/1169495248/photo/agra-fort-medieval-indian-fort-at-agra-india-at-sunrise.jpg?b=1&s=170667a&w=0&k=20&c=bnvqz7W7b-sIlpR0Wd3d6DKcADyo--g8eAAS0uwbJis="
          heading="Trip in Agra"
          text="Located on the banks of River Yamuna in Uttar Pradesh, Agra is a popular tourist destination as it is home to one of the 7 wonders of the world, the Taj Mahal. It is a sneak peek into the architectural history and legacy of the Mughal empire with two other UNESCO World Heritage Sites Agra Fort and Fatehpur Sikri. History, architecture, romance all together create the magic of Agra, and hence, makes for a must-visit for anyone living in or visiting India. It is as famous for its Petha as it is for the Taj Mahal. Agra is also well known for its marble artefacts which are best bought in the Sadar Bazaar or Kinaari Bazaar area."
        />

        <TripData
          image="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z29hfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
          heading="Trip in Goa"
          text="Goa is a state in western India with coastlines stretching along the Arabian Sea. Its long history as a Portuguese colony prior to 1961 is evident in its preserved 17th-century churches and the area’s tropical spice plantations. Goa is also known for its beaches, ranging from popular stretches at Baga and Palolem to those in laid-back fishing villages such as Agonda."
        />

        <TripData
          image="https://media.istockphoto.com/id/143176490/photo/camel-drivers-in-the-desert.jpg?s=612x612&w=0&k=20&c=cLspGLDFz3dvxWOB61z5pM7bUR6J7PlMqdqrnKktTXI="
          heading="Trip in Rajasthan"
          text="The state of Rajasthan in northwestern India includes part of the Thar Desert, as well as Ranthambhor National Park, home to wild tigers, and verdant Mount Abu and its elaborate temples. A camel safari near the inhabited desert trading centre of Jaisalmer gives a hint of the area's beautiful desolation. Udaipur's lakefront setting provides rich contrasts. The capital, Jaipur, is a shopper's dream. Hire a car and driver to take in the spread-out sights. Stay in a heritage hotel to feel like a maharaja."
        />
      </div>
    </div>
  );
}

export default Trip;
