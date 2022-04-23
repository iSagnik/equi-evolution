import "../modal.css";

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

  return (
    <div>
      <div id="myBtn" onClick={handleShareClick}>
        share
      </div>

      <div id="myModal" className="modal">
        <div className="modal-content">
          <span className="close" onClick={handleXClick}>
            &times;
          </span>
          <div>QR Code</div>
          <div>Copy Link</div>
        </div>
      </div>
    </div>
  );
};

export default Share;
