import React from "react";
import courtZones from "../pics/courtZones.png";
import Iverson from "../pics/Iverson.gif";
import Wade from "../pics/Wade.gif";
import Nash from "../pics/Nash.gif";

const Level2 = () => {
  return (
    <div className="levels">
      <h2 className="title">Intermediate Finishes</h2> <img src={courtZones} />
      <p>
        This is where we start to ramp up. Some of these may not look to much
        different than the beginner level, but they indeed are. These require
        more balance, footwork, touch and a heightened level of skill. Players
        definitely need to be able to perform the beginner level finishes
        effecicently before moving on to these.
      </p>
      <p>
        *ZONES 2 & 3 have a lot of the same finishes give or take 1 to 2. There
        is also an overlap with a few shots between all the Zones.*
      </p>
      <div className="card2">
        <img src={Iverson} className="card2-img" alt="" />
        <div className="card2-body">
          <h3 className="card2-title">Layback</h3>
          <p className="card2-info">
            <b>How:</b>shot performed with the body facing away from the basket
            and flipping the ball over the head and shoulder area. When
            shootingan regular layup. Shoulders may form a “T” with the
            backboard or be could be parallel with the backboard depending upon
            where the player is driving from. Different from a reverse/up and
            under because the ball is not shown on 1 side and then shot on the
            opposite side.
            <p>
              <b>Why:</b> player has cut or driven to the basket and is open to
              shoot but needs the protection of his/her body to perform the
              shot.
            </p>
            <p>
              <b>When:</b> very typical layup shot on a flex cut ( see pic 1)
              across the lane or on a diagonal cut from the wing. Also used when
              driving from the top of the key/wing area.
            </p>
          </p>
        </div>
      </div>
      <div className="card2">
        <img src={Wade} className="card2-img" alt="" />
        <div className="card2-body">
          <h3 className="card2-title">Eurostep</h3>
          <p className="card2-info">
            <b>How:</b> in route to a layup, the offensive player takes a short,
            quick, hard step to either the Left or Right as a setup. Next, they
            quickly take a longer, second step in the opposite direction.of the
            first step to evade the defense. Its is very key to sell the first
            step to shift the defense.
            <p>
              <b>Why:</b> to avoid a charge, the rotating defensive player or to
              shift the defensive player directly guarding them to create and
              opening to score.
            </p>
            <p>
              <b>When:</b> Most commonly applied in the open court because of
              the amount of space the defense has to cover. Becoming more common
              in the half court situation. Players are driving hard middle and
              then taking a slower second step back toward the baseline to
              create the scoring opportunity.
            </p>
          </p>
        </div>
      </div>
      <div className="card2">
        <img src={Nash} className="card2-img" alt="" />
        <div className="card2-body">
          <h3 className="card2-title">Same Foot, Same Hand</h3>
          <p className="card2-info">
            <b>How:</b>A) player starts the steps to shoot a regular right
            handed layup, which means jumping off the left foot. But instead of
            shooting with the right hand, the player shoots with left hand
            creating a timing issue for the shot blocker. B) Another way to
            describe it is that, a person typically takes 4 steps when shooting
            a layup jumping off 1 foot. So instead of taking 4 steps, player
            would only take 3 steps to finish the layup. Therefore, creating a
            same foot same hand layup.
            <p>
              <b>Why:</b> Player needs to shoot quickly and throw off the timing
              off the shot blocker.
            </p>
            <p>
              <b>When:</b> once the off.player gets shoulders past the defender,
              this finishing move comes into play because of the timing of the
              shot and taking 1 less step to get it off.
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Level2;
