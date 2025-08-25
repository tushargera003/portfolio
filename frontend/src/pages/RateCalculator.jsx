import React, { useState } from "react";

export default function RateCalculator() {
  const [length, setLength] = useState("");
  const [diameter, setDiameter] = useState("");
  const [drill, setDrill] = useState("17");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const calculateRate = () => {
    const lengthMM = parseFloat(length);
    const dia = parseFloat(diameter);

    if (isNaN(lengthMM) || isNaN(dia)) {
      setError("⚠️ Please enter valid numbers for Length and Diameter.");
      setResult(null);
      return;
    }

    if (lengthMM <= 0 || lengthMM > 270) {
      setError("❌ Invalid Length! Allowed range: 1 – 270 mm.");
      setResult(null);
      return;
    }
    if (dia <= 0 || dia > 50) {
      setError("❌ Invalid Diameter! Allowed range: 1 – 50 mm.");
      setResult(null);
      return;
    }

    setError(""); // clear error

    const lengthInch = lengthMM / 25;
    let ratePerInch = 0;
    let facingCharge = 0;

    if (drill === "17") {
      if (lengthMM <= 175 && dia <= 35) {
        ratePerInch = 0.50; facingCharge = 1;
      } else if (lengthMM > 175 && dia <= 35) {
        ratePerInch = 0.60; facingCharge = 1;
      } else if (lengthMM <= 175 && dia > 35) {
        ratePerInch = 0.60; facingCharge = 1.5;
      } else {
        ratePerInch = 0.70; facingCharge = 1.5;
      }
    } else if (drill === "13") {
      if (lengthMM <= 175 && dia <= 35) {
        ratePerInch = 0.70; facingCharge = 1;
      } else if (lengthMM > 175 && dia <= 35) {
        ratePerInch = 0.80; facingCharge = 1;
      } else if (lengthMM <= 175 && dia > 35) {
        ratePerInch = 0.80; facingCharge = 1.5;
      } else {
        ratePerInch = 0.90; facingCharge = 1.5;
      }
    }

    const totalRate = (lengthInch * ratePerInch) + facingCharge;

    setResult({
      total: totalRate.toFixed(2),
      lengthInch: lengthInch.toFixed(2),
      ratePerInch,
      facingCharge,
    });
  };

  return (
    <div className="min-h-screen bg-base-200 p-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-center mb-6">🧮 Rate Calculator</h1>

        {/* Rate Chart */}
        <div className="overflow-x-auto mb-8 shadow rounded-xl">
          <table className="table table-zebra w-full text-center">
            <thead className="bg-primary text-primary-content">
              <tr>
                <th>Length (mm)</th>
                <th>Diameter (mm)</th>
                <th>Drill Size</th>
                <th>Rate</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>0 – 175</td><td>Upto 35</td><td>17</td><td>₹0.50/inch + ₹1 facing</td></tr>
              <tr><td>175 – 270</td><td>Upto 35</td><td>17</td><td>₹0.60/inch + ₹1 facing</td></tr>
              <tr><td>0 – 175</td><td>35 – 50</td><td>17</td><td>₹0.60/inch + ₹1.5 facing</td></tr>
              <tr><td>175 – 270</td><td>35 – 50</td><td>17</td><td>₹0.70/inch + ₹1.5 facing</td></tr>
              <tr><td>0 – 175</td><td>Upto 35</td><td>13</td><td>₹0.70/inch + ₹1 facing</td></tr>
              <tr><td>175 – 270</td><td>Upto 35</td><td>13</td><td>₹0.80/inch + ₹1 facing</td></tr>
              <tr><td>0 – 175</td><td>35 – 50</td><td>13</td><td>₹0.80/inch + ₹1.5 facing</td></tr>
              <tr><td>175 – 270</td><td>35 – 50</td><td>13</td><td>₹0.90/inch + ₹1.5 facing</td></tr>
            </tbody>
          </table>
        </div>

        {/* Input Form */}
        <div className="card bg-base-100 shadow-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Enter Details</h2>
          {error && (
            <div className="alert alert-error mb-4 text-sm">
              {error}
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="number"
              placeholder="Length (mm)"
              className="input input-bordered w-full"
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
            <input
              type="number"
              placeholder="Diameter (mm)"
              className="input input-bordered w-full"
              value={diameter}
              onChange={(e) => setDiameter(e.target.value)}
            />
            <select
              className="select select-bordered w-full"
              value={drill}
              onChange={(e) => setDrill(e.target.value)}
            >
              <option value="17">Drill 17</option>
              <option value="13">Drill 13</option>
            </select>
          </div>
          <button onClick={calculateRate} className="btn btn-primary mt-4 w-full">
            Calculate
          </button>

          {/* Result */}
          {result && (
            <div className="alert alert-success mt-6 flex flex-col items-start gap-2">
              <span className="font-bold text-lg">✅ Total Rate = ₹{result.total}</span>
              <span>
                (Length: {result.lengthInch} inch × ₹{result.ratePerInch}/inch + ₹{result.facingCharge} facing)
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
