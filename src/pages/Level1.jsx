import React from "react";
import courtZones from "../pics/courtZones.png";
import Bron from "../pics/Bron.gif";
import Dunk from "../pics/Dunk.gif";
import Hakeem from "../pics/Hakeem.gif";

const Level1 = () => {
  return (
    <div className="levels">
      <h2 className="title">Level 1 - Beginner Finishes</h2>{" "}
      <img src={courtZones} />
      <p>
        This is where it all starts, the basics! These finishes should be at the
        foundation of any players game. Work to get good and comfortable with
        these becasue they are the finishes executed the most. They also are the
        prelude to the next 2 levels.
      </p>
      <div className="card2">
        <img src={Dunk} className="card2-img" alt="" />
        <div className="card2-body">
          <h3 className="card2-title">Dunk</h3>
          <p className="card2-info">
            <b>How:</b>shot performed with the body facing away from the basket
            and flipping the ball over the head and shoulder area. When shooting
            off 1 foot ( see pic 2) , use the same form and footwork as a
            regular layup. Shoulders may form a “T” with the backboard or be
            could be parallel with the backboard depending upon where the player
            is driving from. Different from a reverse/up and under because the
            ball is not shown on 1 side and then shot on the opposite side.
            <p>
              <b>Why:</b> player has cut or driven to the basket and is open to
              shoot but needs the protection of his/her body to perform the shot
            </p>
            <p>
              <b>When:</b> very typical layup shot on a flex cut ( see pic 1)
              across the lane or on a diagonal cut from the wing. Also used when
              driving from the top of the key/wing area
            </p>
          </p>
        </div>
      </div>
      <div className="card2">
        <img src={Bron} className="card2-img" alt="" />
        <div className="card2-body">
          <h3 className="card2-title">Inside Hand</h3>
          <p className="card2-info">
            <b>How:</b> Player shoots with the closest hand to the basket. Right
            handed shot when driving to the offensive players left and Left
            handed when driving to the offensive players right.
            <p>
              <b>Why:</b> Offensive player is driving and has gained a body
              position advantage and needs to shoot away from the defense so the
              shot is harder to block. Also, shot so that offensive player can
              use the rim as protection from a shot blocker.
            </p>
            <p>
              <b>When:</b>Usually performed on a catch and sweep/rip situation
              off a ball reversal or catch off a screen and going “against the
              grain” on the drive and need to get the shot up quickly before the
              guarding defender recovers or the help defender(s) rotate.
            </p>
          </p>
        </div>
      </div>
      <div className="card2">
        <img src={Hakeem} className="card2-img" alt="" />
        <div className="card2-body">
          <h3 className="card2-title">Jump Hook</h3>
          <p className="card2-info">
            <b>How:</b>The off. player plants either foot and pivots over that
            same shoulder. Then, jumps off 2 feet keeping his/her body is
            perpendicular to the basket. Player completes the last half of the
            “hook shot” motion allowing for a quicker shot in the paint. Player
            uses off arm to create space for the shot and as protection from a
            shot blocker.
            <p>
              <b>Why:</b> Quick way to score in the post are. Especially if
              wanting to score before being double teamed
            </p>
            <p>
              <b>When:</b> Mostly performed in a post up situation. Can also be
              performed when there is a drive to the basket and the driver
              passes to the player the rotating defender was guardin
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Level1;
