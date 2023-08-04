import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { darkMode, lightMode } from "../features/theme";
import courtZones from "../pics/courtZones.png";

const Home = () => {
  const dispatch = useDispatch();

  return (
    <div className="container">
      <div className="navbar">
        <div className="theme-buttons">
          <button
            className="dark"
            onClick={() => {
              console.log("darkMode");
              dispatch(darkMode());
            }}
          >
            Dark
          </button>
          <button
            className="light"
            onClick={() => {
              dispatch(lightMode());
            }}
          >
            Light
          </button>
        </div>
      </div>

      <div className="home">
        {" "}
        <h2 className="home-title">Welcome to the Finishing Program:</h2>
        <h3>Your Guide to Becoming a Better Finisher</h3>
        <p>
          This program is designed to help with one of the most important skills
          in basketball; the ability to finish! There are various ways to finish
          a play in basketball. A defensive rebound finishes a defensive
          possession. A steal, again finishes a defensive possession. However,
          this program will focus on the various ways to finish an offensive
          possession with a score. This program is been broken down into scoring
          Zones, 1, 2 and 3.
        </p>
        <div className="Rules">
          <p>
            Regardless of the ZONE, there are a few things we as coaches have to
            remember to communicate: *Note* The WHY, WHEN and HOW can be
            explained in whatever ordered deemed necessary for your players to
            learn best.
          </p>
          <img src={courtZones} />
          <h2>Zone 1</h2>
          <p>
            Starts from baseline under the offensive basket up to the the 1st
            hash/lane mark and extends 1-2 steps outside the lane box. This zone
            is the most difficult to master because of its closeness to the
            basket. It also has the largest variety of shots/finishes z
          </p>
          <p>
            We'll start here because this is where a lot players struggle.
            Reason being, the player has to decide what shot to shoot, how to
            shoot it and when to shoot. And all of this in a matter of seconds.
            But there’s good news; we can break these shots into 2 categories, 1
            foot and 2 foot finishes. Typically, 1 foot finishes happen with
            minimal defensive contact to the way to the basket & the defense is
            behind the offense. 2 foot finishes happen when there’s defensive
            contact on the way to and at the basket & the defense is beside the
            offense. There are also 6 or 7 shots that can be shot off 1 or 2
            feet. Once a player becomes efficient in his/her decision making in
            this Zone, a few things will happen:
          </p>
          <ul className="Benefits">
            <li>They'll become better overall decision makers</li>
            <li>They’ll play with more confidence.</li>
            <li>They'll become better all around players.</li>
            <li>Their basketball IQ should increase.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
