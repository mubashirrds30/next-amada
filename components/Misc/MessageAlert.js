import React from "react";

function MessageAlert(props) {
  return (
    <div className={`bs-alert ${props.activeSuccess ? "active" : ""}`}>
      <strong className="msg-greet">Thank You!</strong>
      <p className="msg">
        Your message has been successfully sent. We will contact you very soon!
      </p>
    </div>
  );
}

export default MessageAlert;
