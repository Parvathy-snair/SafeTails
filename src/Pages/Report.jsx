import React, { useEffect, useState } from "react";
import { reportAPI, getReportsAPI } from "../services/allAPI";

function Report() {
  const [incidentType, setIncidentType] = useState("Injured");
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ urgency: "Critical", animalType: "Dog", location: "", description: "", name: "", phone: "" });
  const [reports, setReports] = useState([]);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleReportClick = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      localStorage.setItem("redirectPath", "/Report");
      window.location.href = "/Login";
      return;
    }
    handleSubmit();
  };
  useEffect(() => { getReports(); }, []);



  const getReports = async () => {
    try {
      const result = await getReportsAPI();
      setReports(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const location = position.coords.latitude.toFixed(4) + ", " + position.coords.longitude.toFixed(4);
        setFormData({ ...formData, location: "GPS: " + location });
      }, () => {
        alert("Unable to get location. Please type manually.");
      });
    } else {
      alert("Location is not supported by your browser.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      await reportAPI({ ...formData, email: user.email, incidentType, status: "Pending", timestamp: new Date().toISOString() });
      alert("Report submitted successfully!");
      setSubmitted(true);
      getReports();
    } catch (error) {
      console.log(error);
      alert("Failed to submit report");
    }
  };



  const getInstructions = () => {
    if (incidentType === "Injured") {
      return <><h6 className="text-success fw-bold">✅ DO</h6><ul><li>Approach slowly and speak softly.</li><li>Keep the animal warm with a towel or blanket.</li><li>Keep the animal safe from traffic.</li></ul><h6 className="text-danger fw-bold">❌ DO NOT</h6><ul><li>Do not move broken limbs.</li><li>Do not give human painkillers.</li><li>Do not give heavy food before a vet check.</li></ul></>;
    }
    if (incidentType === "Abuse") {
      return <><h6 className="text-success fw-bold">✅ DO</h6><ul><li>Keep a safe distance and observe the situation.</li><li>Take photos or videos only if it is safe to do so.</li><li>Note the location and details of the incident.</li><li>Report the incident to the appropriate authorities or rescue team.</li></ul><h6 className="text-danger fw-bold">❌ DO NOT</h6><ul><li>Do not confront or threaten the person involved.</li><li>Do not put yourself or the animal in greater danger.</li><li>Do not attempt to physically intervene if it is unsafe.</li></ul></>;
    }
    if (incidentType === "Abandoned") {
      return <><h6 className="text-success fw-bold">✅ DO</h6><ul><li>Check if the mother is nearby.</li><li>Keep babies warm with a towel.</li><li>Keep them in a safe box with air holes.</li></ul><h6 className="text-danger fw-bold">❌ DO NOT</h6><ul><li>Do not give cow's milk to newborns.</li><li>Do not move them unless they are in danger.</li></ul></>;
    }

    if (incidentType === "Trapped") {
      return <><h6 className="text-success fw-bold">✅ DO</h6><ul><li>Keep people away from the animal.</li><li>Offer water if trapped for a long time.</li><li>Clear a safe path if possible.</li></ul><h6 className="text-danger fw-bold">❌ DO NOT</h6><ul><li>Do not pull the animal by its legs or tail.</li><li>Do not try dangerous rescues alone.</li></ul></>;
    }
  };

  return (
    <div className="bg-light min-vh-100 py-4">
      <div className="container">
        <h2 className="fw-bold text-danger mb-2">🚨 Report an Animal in Distress</h2>
        <p className="text-secondary mb-4">Fill out the report below to alert nearby rescuers.</p>

        {submitted ? (
          <div className="alert alert-success p-4 text-center">
            <h3 className="fw-bold">✅ Rescue Request Submitted!</h3>
            <p>Thank you, <strong>{formData.name || "Kind Stranger"}</strong>. Our team has been notified.</p>
            <button className="btn btn-outline-success" onClick={() => setSubmitted(false)}>Report Another Incident</button>
          </div>
        ) : (
          <div className="row g-4">
            <div className="col-lg-8">
              <div className="card shadow-sm border-0">
                <div className="card-body p-4">
                  <form onSubmit={handleSubmit}>
                    <label className="form-label fw-bold">Incident Type</label>
                    <div className="row g-2 mb-4">
                      <div className="col-6 col-md-3"><button type="button" className={incidentType === "Injured" ? "btn btn-danger w-100" : "btn btn-outline-secondary w-100"} onClick={() => setIncidentType("Injured")}>Injured</button></div>
                      <div className="col-6 col-md-3"><button type="button" className={incidentType === "Abuse" ? "btn btn-danger w-100" : "btn btn-outline-secondary w-100"} onClick={() => setIncidentType("Abuse")}>Abuse</button></div>
                      <div className="col-6 col-md-3"><button type="button" className={incidentType === "Abandoned" ? "btn btn-danger w-100" : "btn btn-outline-secondary w-100"} onClick={() => setIncidentType("Abandoned")}>Abandoned</button></div>
                      <div className="col-6 col-md-3"><button type="button" className={incidentType === "Trapped" ? "btn btn-danger w-100" : "btn btn-outline-secondary w-100"} onClick={() => setIncidentType("Trapped")}>Trapped</button></div>
                    </div>

                    <div className="row g-3">
                      <div className="col-md-6">
                        <label className="form-label fw-bold">Urgency Level</label>
                        <select className="form-select" name="urgency" value={formData.urgency} onChange={handleChange}>
                          <option value="Critical">🔴 Critical</option>
                          <option value="Moderate">🟡 Moderate</option>
                          <option value="Low">🟢 Low</option>
                        </select>
                      </div>

                      <div className="col-md-6">
                        <label className="form-label fw-bold">Animal Type</label>
                        <select className="form-select" name="animalType" value={formData.animalType} onChange={handleChange}>
                          <option value="Dog">🐶 Dog</option>
                          <option value="Cat">🐱 Cat</option>
                          <option value="Bird">🐦 Bird</option>
                          <option value="Cattle">🐄 Cow</option>
                          <option value="Other">🐾 Other</option>
                        </select>
                      </div>

                      <div className="col-12">
                        <label className="form-label fw-bold">Location / Address</label>
                        <div className="input-group">
                          <input type="text" className="form-control" placeholder="Street, Landmark, or City" name="location" value={formData.location} onChange={handleChange} required />
                          <button type="button" className="btn btn-outline-danger" onClick={getLocation}>📍 Get GPS</button>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <label className="form-label fw-bold">Upload Photo</label>
                        <input type="file" className="form-control" accept="image/*" />
                      </div>

                      <div className="col-md-6">
                        <label className="form-label fw-bold">Description</label>
                        <textarea className="form-control" name="description" value={formData.description} onChange={handleChange} placeholder="Describe the problem"></textarea>
                      </div>

                      <div className="col-md-6">
                        <label className="form-label fw-bold">Your Name</label>
                        <input type="text" className="form-control" placeholder="Enter your name" name="name" value={formData.name} onChange={handleChange} required />
                      </div>

                      <div className="col-md-6">
                        <label className="form-label fw-bold">Phone Number</label>
                        <input type="tel" className="form-control" placeholder="Enter your phone number" name="phone" value={formData.phone} onChange={handleChange} required />
                      </div>
                    </div>

                    <button onClick={handleReportClick} type="submit" className="btn btn-danger w-100 mt-4 py-3 fw-bold">🚨 SUBMIT EMERGENCY REPORT</button>
                  </form>
                  <section className="mt-5">
                    <div className="card shadow-sm border-0">
                      <div className="card-body p-4">
                        <h4 className="fw-bold mb-3">📋 Submitted Reports</h4>
                        <div className="table-responsive">
                          <table className="table align-middle mb-0">
                            <thead className="table-light">
                              <tr>
                                <th>Report ID</th>
                                <th>Incident</th>
                                <th>Animal</th>
                                <th>Location</th>
                                <th>Urgency</th>
                                <th>Reported</th>
                              </tr>
                            </thead>
                            <tbody>
                              {reports.length > 0 ? reports.map((report) => (
                                <tr key={report.id}>
                                  <td className="fw-bold">R-{report.id}</td>
                                  <td>{report.incidentType}</td>
                                  <td>{report.animalType}</td>
                                  <td>{report.location}</td>
                                  <td>{report.urgency}</td>
                                  <td className="text-muted small">{new Date(report.timestamp).toLocaleString()}</td>
                                </tr>
                              )) : (
                                <tr>
                                  <td colSpan="6" className="text-center text-muted py-4">No reports submitted</td>
                                </tr>
                              )}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card shadow-sm border-0">
                <div className="card-body p-4">
                  <h4 className="fw-bold">🩺 Immediate First-Aid</h4>
                  <p className="text-secondary">Steps for <strong>{incidentType}</strong> cases:</p>
                  <div className="alert alert-info">Selected: {incidentType} Animal</div>

                  {getInstructions()}

                  <div className="alert alert-warning">⚠️<strong>Safety First:</strong> Never put yourself in danger.</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Report;