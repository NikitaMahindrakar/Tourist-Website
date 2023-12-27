import "./DestinationStyle.css";
import DestinationData from "./DestinationData";
const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Some beautiful paths can’t be discovered without getting lost.</p>
       <DestinationData
       className="first-des"
        heading="Taj Mahal, Agra"
        text="If there was just one symbol to represent all of India, it would be
            the Taj Mahal. The monument inspires millions of tourists to make
            the trip to Agra every year, waking up before dawn to see
            magnificent structure radiate at sunrise. But Agra tops the list of
            the best places to visit in India for reasons that go beyond India's
            most famous attraction."
        img1="https://media.istockphoto.com/id/495022606/photo/taj-mahal-agra-india.jpg?b=1&s=170667a&w=0&k=20&c=YaNA5l-BAOlLncOMi1vLE_jLlLImrPQRzGJn38PwoIQ="
        img2="https://media.istockphoto.com/id/108149737/photo/dawn-at-the-taj-mahal-agra-india.jpg?s=612x612&w=0&k=20&c=7rWb07IXVRTQOUHpsugHEAl4pxa-Isn6f2ff7MTZSQ4="
       />
       <DestinationData
       className="first-des-reverse"
        heading="Nainital"
        text="Enclosed by the volcanic emerald Lake Nainital is one of the largest towns and is one of the most talked about place. This is one of the best tourist places in India. It involves a lofty forested valley around the namesake lake Naini. And if you are travelling with your best friends this is just the place for you.
For explorers, it’s a simple spot to kick back and unwind, eat well, and go horse riding or paddling on the lake., Nainital is set in a valley containing a pear-molded lake, roughly two miles in boundary, and encompassed by mountains and is blessed with the best scenic views."
        img1="https://media.istockphoto.com/id/1267723790/photo/beautiful-and-colourful-city-view-nainital-uttarakhand.jpg?s=612x612&w=0&k=20&c=nDVKK1Roj5Gd3nEy5iZ8MwZPja1CcTY1FhbX155zofQ="
        img2="https://media.istockphoto.com/id/471622053/photo/lake-in-mountains.jpg?s=612x612&w=0&k=20&c=RgLwCoNpPbogSo5Nu5Je-nZDZeFjYB2Dp_1R7o3f2TE="
       />
    </div>
  );
};
export default Destination;
