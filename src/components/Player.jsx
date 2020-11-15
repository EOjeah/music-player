import React from "react";
import ChevronLeftRoundedIcon from "@material-ui/icons/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@material-ui/icons/ChevronRightRounded";
import PlayArrowRoundedIcon from "@material-ui/icons/PlayArrowRounded";

const Player = () => {
  return (
    <div className="player">
      <div className="time-control">
        <p>Start Time</p>
        <input type="range" />
        <p>End TIme</p>
      </div>
      <div className="player-control">
        <ChevronLeftRoundedIcon className="skip-back" fontSize="large" />
        <PlayArrowRoundedIcon className="play" fontSize="large" />
        <ChevronRightRoundedIcon className="skip-forward" fontSize="large" />
      </div>
    </div>
  );
};

export default Player;
