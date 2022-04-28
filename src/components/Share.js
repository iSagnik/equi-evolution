import QRCode from "react-qr-code";
import "../styles/modal.css";

const Share = () => {
  const handleShareClick = () => {
    const modal = document.getElementById("myModal");
    modal.style.display = "block";
  };

  const handleXClick = () => {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    const modal = document.getElementById("myModal");
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link Copied: " + window.location.href)
  }

  return (
    <div className="header-options">
      <div id="myBtn" className="link" onClick={handleShareClick}>
        share
      </div>

      <div id="myModal" className="modal">
        <div className="modal-content">
          <span className="close" onClick={handleXClick}>
            &times;
          </span>
          <div style={{ background: "white", padding: "16px" }}>
            <QRCode value={window.location.href} />
          </div>
          <div
            onClick={handleCopy}
          >
            <b style={{ cursor: "pointer" }}>Copy Link</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
