import React from "react";
import courtZones from "../pics/courtZones.png";
import JC from "../pics/JC.gif";
import Reverse from "../pics/Reverse.gif";
import Rondo from "../pics/Rondo.gif";

const Level3 = () => {
  return (
    <div className="levels">
      <h2 className="title">Advanced Finishes</h2> <img src={courtZones} />
      <p>
        At this levelm youve reached the pinnacle of the finishin game. These
        finished require a highest level of footwork, balance, strength and
        recongition. Before being able to execute these finishes, players should
        be perfroming the Beginner and Intermediate level finishes at the super
        effecient rate. These finishes help round out your scoring prowess
        around the basket and help elevate a players game to the next level!
      </p>
      <div className="card2">
        <img src={Reverse} className="card2-img" alt="" />
        <div className="card2-body">
          <h3 className="card2-title">Reverse/Up and Under</h3>
          <p className="card2-info">
            <b>How:</b> started by showing the ball on one side of the basket
            and finishing with the layup on the other side of the rim. Could be
            shot facing the basket (see pic) or with the players back to the
            basket; facing the opponents basket.
            <p>
              <b>Why:</b> the first side to shoot becomes blocked by a defender
              or looks like it will be blocked so the player shows the ball and
              then use the opposite side to shoot because it is now free.
            </p>
            <p>
              used when driving baseline from the wing or corner area of the
              floor.
            </p>
          </p>
        </div>
      </div>
      <div className="card2">
        <img src={JC} className="card2-img" alt="" />
        <div className="card2-body">
          <h3 className="card2-title">Shake and Bake</h3>
          <p className="card2-info">
            <b>How:</b> while attacking off the dribble, the offensive player
            will come to a jump stop at the same time as a stop/flat behind the
            back pound dribble. Immediately after, the player would shift his
            weight to the right, quickly and simultaneously push off his/her
            right leg, hop to his/her left while taking the ball behind his back
            to protect if from the defense.
            <p>
              <b>Why:</b> Different more advanced version of the pro hop.
              There’s not 1 specific situation that calls for this move, but
              will definitely surprise the defense if put into action.
              <p>
                <b>When:</b> usually used in a fast break, like a 1 on 1 or 2 on
                1. Could also be used when attacking on the baseline.
              </p>
            </p>
          </p>
        </div>
      </div>
      <div className="card2">
        <img src={Rondo} className="card2-img" alt="" />
        <div className="card2-body">
          <h3 className="card2-title">Reverse Pivot</h3>
          <p className="card2-info">
            <b>How:</b>Using 1-2 step footwork. Offensive player's front/inside
            foot is established as the pivot foot. Leading with/outside foot and
            shoulder, the player spins back away from the defense creating space
            for a shot.
            <p>
              <b>Why:</b> diferent way of faking and creating space outside of
              the normal shot fake or jab footwork used to create space.
            </p>
            <p>
              <b>When:</b> Player has driven hard to the basket and starts to
              use 1-2 footwork for a layup but is the defensive player is
              slightly in front of them. Defense could also be slightly behind
              and is trying to catch up.
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Level3;
