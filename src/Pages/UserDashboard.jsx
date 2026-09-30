import React, { useEffect, useState } from 'react';
import { getRescueAPI, getReportsAPI, getAdoptionAPI } from '../services/allAPI';

function UserDashboard() {
    const user = JSON.parse(localStorage.getItem("user"));
    const [rescues, setRescues] = useState([]);
    const [reports, setReports] = useState([]);
    const [adoptions, setAdoptions] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    // Get logged-in user's data
    const getData = async () => {
        try {
            const rescueResult = await getRescueAPI();
            const reportResult = await getReportsAPI();
            const adoptionResult = await getAdoptionAPI();
            setRescues(rescueResult.data.filter(item => item.email === user?.email));
            setReports(reportResult.data.filter(item => item.email === user?.email));
            setAdoptions(adoptionResult.data.filter(item => item.email === user?.email));
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="container-fluid py-5" style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
            <div className="container">
                <div className="d-flex justify-content-between align-items-center mb-5">
                    <div>
                        <h1 className="fw-bold mb-1">User Dashboard</h1>
                        <p className="text-secondary mb-0">Welcome to SafeTails 👋</p>
                    </div>
                    <button className="btn btn-dark rounded-pill px-4" onClick={() => {
                        localStorage.removeItem("isLoggedIn");
                        localStorage.removeItem("user");
                        window.location.href = "/Login";
                    }}>Logout</button>
                </div>

                <div className="row g-4 mb-4">
                    <div className="col-md-3">
                        <div className="card border-0 shadow-sm rounded-4 p-4">
                            <h5 className="fw-bold">👤 My Profile</h5>
                            <p className="text-secondary mb-1">Name: {user?.name}</p>
                            <p className="text-secondary mb-0">Email: {user?.email}</p>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card border-0 shadow-sm rounded-4 p-4">
                            <h5 className="text-danger fw-bold">🚨 My Rescue Requests</h5>
                            <h1 className="fw-bold">{rescues.length}</h1>
                            <p className="text-secondary mb-0">Submitted requests</p>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card border-0 shadow-sm rounded-4 p-4">
                            <h5 className="text-warning fw-bold">📢 My Reports</h5>
                            <h1 className="fw-bold">{reports.length}</h1>
                            <p className="text-secondary mb-0">Submitted reports</p>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card border-0 shadow-sm rounded-4 p-4">
                            <h5 className="text-success fw-bold">🏡 My Adoptions</h5>
                            <h1 className="fw-bold">{adoptions.length}</h1>
                            <p className="text-secondary mb-0">Adoption applications</p>
                        </div>
                    </div>
                </div>

                <div className="card border-0 shadow-sm rounded-4">
                    <div className="card-body p-4">
                        <h4 className="fw-bold mb-4">🏡 My Adoption Applications</h4>
                        <div className="table-responsive">
                            <table className="table table-hover align-middle">
                                <thead>
                                    <tr>
                                        <th>Animal</th>
                                        <th>Date</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {adoptions.length > 0 ? adoptions.map((item) =>
                                        <tr key={item.id}>
                                            <td>{item.animalName}</td>
                                            <td>{item.timestamp ? new Date(item.timestamp).toLocaleDateString() : "Not available"}</td>
                                            <td><span className="badge bg-warning text-dark">{item.status || "Pending"}</span></td>
                                        </tr>
                                    ) : (
                                        <tr>
                                            <td colSpan="3" className="text-center text-secondary py-4">No adoption applications</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default UserDashboard;