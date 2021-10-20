import React, { useEffect, useRef } from "react";
import ReactPlayer from "react-player";

function VideoModal({
  videoUrl,
  closeModal,
  showModal,
  setState,
  state,
  product,
  controls,
}) {
  const playerRef = useRef(null);

  useEffect(() => {
    if (showModal) {
      setState({ ...state, playing: true });
    } else {
      setState({ ...state, playing: false });
    }
  }, [showModal]);

  return (
    <>
      <div className={`bs-modal ${showModal ? "active" : ""}`} id="videoModal">
        <div className="modal-head">
          <button
            className="modal-close js-modal-close"
            type="button"
            onClick={closeModal}
          >
            <span className="icon icon-close"></span>
          </button>
        </div>
        <div className="modal-content">
          <div className="player-wrapper">
            <ReactPlayer
              className="react-player"
              url={videoUrl}
              ref={playerRef}
              width="100%"
              height={`${product ? "98vh" : "100%"}`}
              playing={state.playing}
              controls={controls ? true : ""}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoModal;
