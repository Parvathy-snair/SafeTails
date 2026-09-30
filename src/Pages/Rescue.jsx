import React, { useEffect, useState } from "react";
import { rescueAPI, getRescueAPI } from "../services/allAPI";

function RescueHub() {
    const [showModal, setShowModal] = useState(false);
    const [modalNumber, setModalNumber] = useState("");
    const [modalTitle, setModalTitle] = useState("");
    const [recentRescues, setRecentRescues] = useState([]);
    const [rescueData, setRescueData] = useState({ animal: "", location: "", description: "" });

    const handleRescueClick = () => {
        const isLoggedIn = localStorage.getItem("isLoggedIn");
        if (!isLoggedIn) {
            localStorage.setItem("redirectPath", "/Rescue");
            window.location.href = "/Login";
            return;
        }
        handleRescueSubmit();
    };

    useEffect(() => { getRescueRequests(); }, []);

    const getRescueRequests = async () => {
        try {
            const result = await getRescueAPI();
            setRecentRescues(result.data);
        } catch (error) { console.log(error); }
    };

    const handleRescueSubmit = async () => {
        if (!rescueData.animal || !rescueData.location || !rescueData.description) {
            alert("Please fill all fields");
            return;
        }
        try {
            const user = JSON.parse(localStorage.getItem("user"));
            await rescueAPI({ ...rescueData, email: user.email, status: "Pending", timestamp: new Date().toISOString() });
            alert("Rescue request submitted successfully!");
            setRescueData({ animal: "", location: "", description: "" });
            getRescueRequests();
        } catch (error) {
            console.log(error);
            alert("Failed to submit rescue request");
        }
    };

    const hotlines = [
        { title: "🚑 Animal Ambulance Dispatch", subtitle: "24/7 Mobile Medical Unit", number: "+91 98765 43210", badge: "24 Hours", color: "btn-danger" },
        { title: "📞 General Rescue Team", subtitle: "Field Rescuers & Trappers", number: "+91 98765 43211", badge: "8 AM - 10 PM", color: "btn-success" },
        { title: "🩺 On-Call Emergency Vet", subtitle: "Veterinary Advice & Guidance", number: "+91 98765 43212", badge: "24 Hours", color: "btn-primary" }
    ];

    const handleCallClick = (title, number) => {
        setModalTitle(title);
        setModalNumber(number);
        setShowModal(true);
    };

    return (
        <div className="bg-light min-vh-100 pb-5">


            <div className="bg-success text-white py-5 shadow-sm">
                <div className="container">
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
                        <div>
                            <h1 className="fw-bold mb-1">🐾 Rescue & Response Hub</h1>
                            <p className="mb-0 fs-5 text-light opacity-90">Direct helplines, emergency services, and active field dispatch.</p>
                        </div>
                        <div>
                            <button className="btn btn-danger btn-lg fw-bold shadow" onClick={() => handleCallClick("24/7 Emergency Dispatch", "+91 98201 22602")}>📞 Direct Emergency Call</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-5">

                {/* Rescue Form */}
                <section className="mb-5">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body p-4">
                            <h3 className="fw-bold mb-2">🚨 Animal Rescue Request</h3>
                            <p className="text-secondary mb-4">Found an injured or distressed animal? Submit the details below.</p>

                            <div className="mb-3">
                                <label className="form-label fw-bold">Animal / Condition</label>
                                <input type="text" className="form-control py-3" placeholder="Example: Injured Dog" value={rescueData.animal} onChange={(e) => setRescueData({ ...rescueData, animal: e.target.value })} />
                            </div>

                            <div className="mb-3">
                                <label className="form-label fw-bold">Location</label>
                                <div className="input-group">
                                    <input type="text" className="form-control py-3" placeholder="Enter the exact location" value={rescueData.location} onChange={(e) => setRescueData({ ...rescueData, location: e.target.value })} />
                                    <button type="button" className="btn btn-dark" onClick={() => {
                                        if (navigator.geolocation) {
                                            navigator.geolocation.getCurrentPosition(
                                                (position) => {
                                                    const location = `${position.coords.latitude}, ${position.coords.longitude}`;
                                                    setRescueData({ ...rescueData, location });
                                                },
                                                () => {
                                                    alert("Unable to get your location. Please allow location access.");
                                                }
                                            );
                                        } else {
                                            alert("Geolocation is not supported by your browser.");
                                        }
                                    }
                                    }>📍 Get Location</button>
                                </div>
                            </div>

                            <div className="mb-3">
                                <label className="form-label fw-bold">Description</label>
                                <textarea className="form-control" rows="4" placeholder="Describe the animal's condition..." value={rescueData.description} onChange={(e) => setRescueData({ ...rescueData, description: e.target.value })}></textarea>
                            </div>

                            <button onClick={handleRescueClick} className="btn btn-danger fw-bold px-4 py-3" >🚨 Submit Rescue Request</button>
                        </div>
                    </div>
                </section>

                <section className="mb-5">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body p-4">
                            <h4 className="fw-bold mb-3">📡 Active Rescue Operations Tracker</h4>
                            <div className="table-responsive">
                                <table className="table align-middle mb-0">
                                    <thead className="table-light">
                                        <tr><th>Case ID</th><th>Animal / Condition</th><th>Location</th><th>Status</th><th>Reported</th></tr>
                                    </thead>
                                    <tbody>
                                        {recentRescues.length > 0 ? recentRescues.map((rescue) => (
                                            <tr key={rescue.id}>
                                                <td className="fw-bold">R-{rescue.id}</td>
                                                <td>{rescue.animal}</td>
                                                <td>{rescue.location}</td>
                                                <td><span className="badge bg-warning-subtle text-warning-emphasis border border-warning-subtle px-2 py-1">{rescue.status}</span></td>
                                                <td className="text-muted small">
                                                    {rescue.timestamp ? new Date(rescue.timestamp).toLocaleString() : "Not available"}
                                                </td>
                                            </tr>
                                        )) : (
                                            <tr><td colSpan="5" className="text-center text-muted py-4">No active rescue requests</td></tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-white p-4 rounded shadow-sm border border-light">
                    <div className="row align-items-center">
                        <div className="col-md-8">
                            <h4 className="fw-bold text-dark">Are you a local vet or volunteer rescue driver?</h4>
                            <p className="text-secondary mb-md-0">Join our emergency response network to receive SMS alerts when an animal needs rescue near your area.</p>
                        </div>
                        <div className="col-md-4 text-md-end">
                            <button className="btn btn-outline-success fw-bold" onClick={() => alert("Rescue Network registration coming soon!")}>
                                🙋 Join Rescue Network
                            </button>
                        </div>
                    </div>
                </section>

            </div>


            {showModal && (
                <div className="modal d-block" style={{ backgroundColor: "rgba(0,0,0,0.5)" }} onClick={() => setShowModal(false)}>
                    <div className="modal-dialog modal-dialog-centered" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title fw-bold">{modalTitle}</h5>
                                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                            </div>
                            <div className="modal-body text-center py-4">
                                <p className="text-muted mb-2">Dialing Rescue Helpline:</p>
                                <h3 className="fw-bold text-danger mb-3">{modalNumber}</h3>
                                <p className="small text-secondary mb-0">Please stay on the line and describe the animal's exact location to the operator.</p>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
                                <a href={`tel:${modalNumber}`} className="btn btn-danger fw-bold">📞 Connect Call</a>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}

export default RescueHub;