import React, { useState } from "react";

function App() {
  const [selectedSeat, setSelectedSeat] = useState(null);

  const handleSelectSeat = (seatNumber) => {
    setSelectedSeat(seatNumber);
    alert(`คุณเลือกที่นั่ง: ${seatNumber}`);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🎫 ระบบกดบัตรคอนเสิร์ต 🎶</h1>
      <h2>เลือกที่นั่งที่คุณต้องการ</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "10px",
          width: "50%",
          margin: "auto",
        }}
      >
        {Array.from({ length: 25 }, (_, index) => (
          <button
            key={index}
            onClick={() => handleSelectSeat(index + 1)}
            style={{
              padding: "20px",
              fontSize: "16px",
              backgroundColor: selectedSeat === index + 1 ? "green" : "lightgray",
            }}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <p style={{ marginTop: "20px" }}>
        {selectedSeat ? `คุณเลือกที่นั่งหมายเลข: ${selectedSeat}` : "ยังไม่ได้เลือกที่นั่ง"}
      </p>
    </div>
  );
}

export default App;
