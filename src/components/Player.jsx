import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/src/styles.scss";
import PropTypes from "prop-types";

const Player = ({ music }) => (
  <AudioPlayer
    autoPlay
    src={music}
    // other props here
  />
);

Player.propTypes = {
  music: PropTypes.string.isRequired,
};

export default Player;
