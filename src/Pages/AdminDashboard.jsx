import React, { useEffect, useState } from 'react';
import { getRescueAPI, getReportsAPI, getAdoptionAPI, getUsersAPI } from '../services/allAPI';
import apiService from '../api/apiServices';

function AdminDashboard() {
    const [rescues, setRescues] = useState([]);
    const [reports, setReports] = useState([]);
    const [adoptions, setAdoptions] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try {
            const rescueResult = await getRescueAPI();
            const reportResult = await getReportsAPI();
            const adoptionResult = await getAdoptionAPI();
            const userResult = await getUsersAPI();
            setUsers(userResult.data);
            setRescues(rescueResult.data);
            setReports(reportResult.data);
            setAdoptions(adoptionResult.data);
        } catch (error) {
            console.log(error);
        }
    };

    const updateRescueStatus = async (id, status) => {
        try {
            await apiService("PATCH", `/rescueRequests/${id}`, { status });
            getData();
        } catch (error) {
            console.log(error);
            alert("Failed to update rescue status");
        }
    };

    const updateReportStatus = async (id, status) => {
        try {
            await apiService("PATCH", `/reports/${id}`, { status });
            getData();
        } catch (error) {
            console.log(error);
            alert("Failed to update report status");
        }
    };

    const updateAdoptionStatus = async (id, status) => {
        try {
            await apiService("PATCH", `/adoptionRequests/${id}`, { status });
            getData();
        } catch (error) {
            console.log(error);
            alert("Failed to update adoption status");
        }
    };

    return (
        <div className="container-fluid py-5" style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
            <div className="container">
                <div className="d-flex justify-content-between align-items-center mb-5">
                    <div>
                        <h1 className="fw-bold mb-1">Admin Dashboard</h1>
                        <p className="text-secondary mb-0">Welcome to SafeTails Admin Panel</p>
                    </div>
                    <button className="btn btn-dark rounded-pill px-4" onClick={() => {
                        localStorage.removeItem("isAdminLoggedIn");
                        window.location.href = "/Login";
                    }}>Logout</button>
                </div>

                <div className="row g-4 mb-5">
                    <div className="col-md-4">
                        <div className="card border-0 shadow-sm rounded-4 p-4">
                            <h5 className="text-danger fw-bold">🚨 Rescue Requests</h5>
                            <h1 className="fw-bold">{rescues.length}</h1>
                            <p className="text-secondary mb-0">Total rescue requests</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card border-0 shadow-sm rounded-4 p-4">
                            <h5 className="text-warning fw-bold">📢 Emergency Reports</h5>
                            <h1 className="fw-bold">{reports.length}</h1>
                            <p className="text-secondary mb-0">Total emergency reports</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card border-0 shadow-sm rounded-4 p-4">
                            <h5 className="text-success fw-bold">🏡 Adoption Applications</h5>
                            <h1 className="fw-bold">{adoptions.length}</h1>
                            <p className="text-secondary mb-0">Total adoption applications</p>
                        </div>
                    </div>
                </div>

                <div className="card border-0 shadow-sm rounded-4 mb-4">
                    <div className="card-body p-4">
                        <h4 className="fw-bold mb-4">🚨 Rescue Requests</h4>
                        <div className="table-responsive">
                            <table className="table table-hover align-middle">
                                <thead>
                                    <tr>
                                        <th>Animal</th>
                                        <th>Location</th>
                                        <th>Description</th>
                                        <th>Date</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {rescues.length > 0 ? rescues.map((item) =>
                                        <tr key={item.id}>
                                            <td>{item.animal}</td>
                                            <td>{item.location}</td>
                                            <td>{item.description}</td>
                                            <td>{item.timestamp ? new Date(item.timestamp).toLocaleDateString() : "Not available"}</td>
                                            <td>
                                                <select className="form-select" value={item.status || "Pending"} onChange={(e) => updateRescueStatus(item.id, e.target.value)}>
                                                    <option value="Pending">Pending</option>
                                                    <option value="In Progress">In Progress</option>
                                                    <option value="Resolved">Resolved</option>
                                                </select>
                                            </td>
                                        </tr>
                                    ) : (
                                        <tr>
                                            <td colSpan="5" className="text-center text-secondary py-4">No rescue requests</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="card border-0 shadow-sm rounded-4 mb-4">
                    <div className="card-body p-4">
                        <h4 className="fw-bold mb-4">📢 Emergency Reports</h4>
                        <div className="table-responsive">
                            <table className="table table-hover align-middle">
                                <thead>
                                    <tr>
                                        <th>Incident</th>
                                        <th>Location</th>
                                        <th>Description</th>
                                        <th>Date</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {reports.length > 0 ? reports.map((item) =>
                                        <tr key={item.id}>
                                            <td>{item.incidentType}</td>
                                            <td>{item.location}</td>
                                            <td>{item.description}</td>
                                            <td>{item.timestamp ? new Date(item.timestamp).toLocaleDateString() : "Not available"}</td>
                                            <td>
                                                <select className="form-select" value={item.status || "Pending"} onChange={(e) => updateReportStatus(item.id, e.target.value)}>
                                                    <option value="Pending">Pending</option>
                                                    <option value="In Progress">In Progress</option>
                                                    <option value="Resolved">Resolved</option>
                                                </select>
                                            </td>
                                        </tr>
                                    ) : (
                                        <tr>
                                            <td colSpan="5" className="text-center text-secondary py-4">No emergency reports</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="card border-0 shadow-sm rounded-4 mb-4">
                    <div className="card-body p-4">
                        <h4 className="fw-bold mb-4">🏡 Adoption Applications</h4>
                        <div className="table-responsive">
                            <table className="table table-hover align-middle">
                                <thead>
                                    <tr>
                                        <th>Applicant</th>
                                        <th>Email</th>
                                        <th>Animal</th>
                                        <th>Date</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {adoptions.length > 0 ? adoptions.map((item) =>
                                        <tr key={item.id}>
                                            <td>{item.fullName}</td>
                                            <td>{item.email}</td>
                                            <td>{item.animalName}</td>
                                            <td>{item.timestamp ? new Date(item.timestamp).toLocaleDateString() : "Not available"}</td>
                                            <td>
                                                <select className="form-select" value={item.status || "Pending"} onChange={(e) => updateAdoptionStatus(item.id, e.target.value)}>
                                                    <option value="Pending">Pending</option>
                                                    <option value="Approved">Approved</option>
                                                    <option value="Rejected">Rejected</option>
                                                </select>
                                            </td>
                                        </tr>
                                    ) : (
                                        <tr>
                                            <td colSpan="5" className="text-center text-secondary py-4">No adoption applications</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card border-0 shadow-sm rounded-4 p-4">
                        <h5 className="text-primary fw-bold">👤 User Accounts</h5>
                        <h1 className="fw-bold">{users.length}</h1>
                        <p className="text-secondary mb-0">Registered Users</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default AdminDashboard;