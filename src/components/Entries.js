import "./Entries.css";
import React, { useContext } from "react";
import Slider from "react-slick";
import Entry from "./Entry";
import { SymptomsContext, FeelingContext } from "./ContextComponent";
import Header from "./Header";
import Nothing from "../images/nothing.png";
const Link1 = "https://www.youtube.com/embed/eRXGwffy_90";
const Link2 = "https://www.youtube.com/embed/1I9ADpXbD6c";
const Entries = (props, checkedState) => {
  console.log(checkedState);
  const options = { weekday: "long" };
  const date = new Date();
  let today =
    date.toLocaleDateString("en-US", options) +
    " " +
    date.getDate() +
    "-" +
    (date.getMonth() + 1) +
    "-" +
    date.getFullYear();

  const { checkboxes /*, setCheckboxes*/ } = useContext(SymptomsContext);
  const { feel /*, setFeel*/ } = useContext(FeelingContext);

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Header />
      <div className="entriesMain">
        <h2 className="previousEntries"> Previous Entries </h2>
        <hr />
        <Slider {...settings} className="slider">
          <div>
            <h3 className="entriesTitle">{today}</h3>
            <h4 className="entriesTitle">{feel}</h4>
            <div
              className="experiencingAndNotesWrapper"
              id="entriesCarouselWrapper"
            >
              <div className="entriesNotes">
                <p className="entriesCarouselTitle">Experiencing:</p>
                {checkboxes.length > 0 ? (
                  checkboxes.map((symptom) => {
                    return <p className="entriesSymptoms"> {symptom}</p>;
                  })
                ) : (
                  <div className="entryImgWrapper">
                    <img src={Nothing} alt="nothing" className="entryImage" />
                    <p className="entryMessage"> Nothing to show here! </p>
                  </div>
                )}
              </div>
              <div className="entriesNotes">
                <p className="entriesCarouselTitle">Notes:</p>
                {props.location.state[0] === "" ? (
                  <div className="entryImgWrapper">
                    <img src={Nothing} alt="nothing" className="entryImage" />
                    <p className="entryMessage"> Nothing to show here! </p>
                  </div>
                ) : (
                  <div className="entriesSymptoms">
                    {" "}
                    {props.location.state}{" "}
                  </div>
                )}
              </div>
            </div>
          </div>
          <Entry number="0" />
          <Entry number="1" />
          <Entry number="2" />
          <Entry number="3" />
        </Slider>
        <iframe
          width="560"
          height="315"
          src={Link1}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        ;
        <iframe
          width="560"
          height="315"
          src={Link2}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </>
  );
};

export default Entries;