import React, { useEffect, useState } from "react";
import { adoptionAPI, getAdoptionAPI } from "../services/allAPI";

const initialAnimals = [
    {
        "id": 1,
        "name": "Milo",
        "type": "Dog",
        "breed": "Indie / Street Mix",
        "age": "Puppy (4 mos)",
        "gender": "Male",
        "location": "Marine Drive, Kochi",
        "health": "Vaccinated, Dewormed",
        "description": "Friendly and energetic puppy rescued from traffic. Great with kids and other dogs.",
        "status": "Available",
        "badge": "Urgent Home Needed",
        "image": "https://t4.ftcdn.net/jpg/05/51/80/53/360_F_551805312_jQWSYyx9RXvQOKqfu9HD6o1bATvGBouP.jpg"
    },
    {
        "id": 2,
        "name": "Luna",
        "type": "Cat",
        "breed": "Domestic Short Hair",
        "age": "Young (1 yr)",
        "gender": "Female",
        "location": "Beach Road, Calicut",
        "health": "Spayed, Vaccinated",
        "description": "Gentle and calm cat found near a food stall. Loves sunbathing and soft pets.",
        "status": "Available",
        "badge": "Fostered",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT51cuZv1nJ6mVPb2IcdKavs2NWOJKq24pk4t-kWpKsRg9j49zWJdp00Ois&s=10"
    },
    {
        "id": 3,
        "name": "Rocky",
        "type": "Dog",
        "breed": "Indie / Street Mix",
        "age": "Adult (2 yrs)",
        "gender": "Male",
        "location": "Kowdiar, Trivandrum",
        "health": "Neutered, Fully Vaccinated",
        "description": "Recovered completely from a leg injury. Very protective and affectionate companion.",
        "status": "Available",
        "badge": "Special Need",
        "image": "https://upload.wikimedia.org/wikipedia/commons/4/46/Dog_00154.JPG?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"
    },
    {
        "id": 4,
        "name": "Coco & Pip",
        "type": "Cat",
        "breed": "Indie Kittens",
        "age": "Kittens (2 mos)",
        "gender": "Pair",
        "location": "Swaraj Round, Thrissur",
        "health": "Dewormed, 1st Vaccination",
        "description": "Rescued during heavy rain. Must be adopted together as a bonded pair.",
        "status": "Available",
        "badge": "Bonded Pair",
        "image": "https://upload.wikimedia.org/wikipedia/commons/3/37/2_russian_street_cats-crop.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original"
    },
    {
        "id": 5,
        "name": "Bruno",
        "type": "Dog",
        "breed": "Indie / Street Mix",
        "age": "Young (1.5 yrs)",
        "gender": "Male",
        "location": "Alappuzha Town",
        "health": "Neutered, Vaccinated",
        "description": "Loves water and swimming. Playful, friendly, and great on a leash.",
        "status": "Available",
        "badge": "Urgent Home Needed",
        "image": "https://www.humaneworld.org/sites/default/files/styles/responsive_3_2_800w/public/2025-03/DSC00217_Original%20file%20lucknow%20India%20dog%20Abhishek%20Rastogi.jpg.webp?h=56d0ca2e&itok=qLzD5Hr5"
    },
    {
        "id": 6,
        "name": "Simba, Leo & Cleo",
        "type": "Cat",
        "breed": "Domestic Short Hair",
        "age": "Kittens (3 mos)",
        "gender": "Trio",
        "location": "Kottayam Town",
        "health": "Dewormed, Vaccinated",
        "description": "3 playful ginger kittens rescued together from a drainage pipe. ",
        "status": "Available",
        "badge": "Bonded Trio",
        "image": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ilcMGF2WqI_s/v0/-1x-1.webp"
    },
    {
        "id": 7,
        "name": "Bella",
        "type": "Dog",
        "breed": "Indie / Street Mix",
        "age": "Adult (3 yrs)",
        "gender": "Female",
        "location": "Palakkad Fort Area",
        "health": "Spayed, Fully Vaccinated",
        "description": "Calm and gentle guard dog candidate. Excellent with family members.",
        "status": "Available",
        "badge": "House Trained",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbVoERuzcigDX9rvhNwjIWF34R4nd7qgYSUReICxFSvg&s"
    },
    {
        "id": 8,
        "name": "Toffee",
        "type": "Dog",
        "breed": "Indie Puppy",
        "age": "Puppy (2 mos)",
        "gender": "Female",
        "location": "Kannur Town",
        "health": "Dewormed",
        "description": "Sweet pup found near a bus stand. Needs a loving permanent home.",
        "status": "Available",
        "badge": "Urgent Home Needed",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8EtMoLxR9cIdw7jLChtQNVGbHmOsFrBl6C6xlTfQnKBaYifaXAwy4Xcrm&s=10"
    },
    {
        "id": 9,
        "name": "Nala",
        "type": "Cat",
        "breed": "Domestic Short Hair",
        "age": "Adult (2 yrs)",
        "gender": "Female",
        "location": "Kollam Beach",
        "health": "Spayed, Vaccinated",
        "description": "Quiet companion cat who loves window seats and warm laps.",
        "status": "Available",
        "badge": "Fostered",
        "image": "https://thumbs.dreamstime.com/b/street-cats-india-indian-cat-sitting-road-taking-rest-226541908.jpg"
    },
    {
        "id": 10,
        "name": "Max",
        "type": "Dog",
        "breed": "Indie / Street Mix",
        "age": "Senior (5 yrs)",
        "gender": "Male",
        "location": "Edappally, Kochi",
        "health": "Neutered, Fully Vaccinated",
        "description": "Mellow senior dog seeking a peaceful retirement couch.",
        "status": "Available",
        "badge": "Senior Care",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvSZsDkq3yE2DFJFnr8An4UhTkossL8ftCzyeC6dPar9GnPtySH8zbmzZT&s=10"
    },
    {
        "id": 11,
        "name": "Oreo",
        "type": "Cat",
        "breed": "Orange Tabby / Indie",
        "age": "Young (10 mos)",
        "gender": "Male",
        "location": "Kalpetta, Wayanad",
        "health": "Neutered, Vaccinated",
        "description": "Fiery orange cat with boundless energy! Absolutely obsessed with hunting toys.",
        "status": "Available",
        "badge": "High Energy",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmn8CwM3knumS6WMfgaJSqrOSiYR0Oedsoakp92K-0-bdefdQnIO4OIjMv&s=10"
    },
    {
        "id": 12,
        "name": "Daisy",
        "type": "Dog",
        "breed": "Indie / Street Mix",
        "age": "Puppy (5 mos)",
        "gender": "Female",
        "location": "Malappuram Town",
        "health": "Vaccinated, Dewormed",
        "description": "Smart and quick learner, already knows basic sit and stay commands.",
        "status": "Available",
        "badge": "Urgent Home Needed",
        "image": "https://www.humaneworld.org/sites/default/files/styles/sa_social_media_facebook/public/2025-08/176983_india-street-dog-4820_HD%201080p%20Horizontal.jpg?h=d1cb525d&itok=Uv5DhYrD"
    }
];

function Adoption() {
    const [filterType, setFilterType] = useState("All");
    const [selectedAnimal, setSelectedAnimal] = useState(null);
    const [adoptionSubmitted, setAdoptionSubmitted] = useState(false);
    const [adoptionApplications, setAdoptionApplications] = useState([]);
    const [applicantData, setApplicantData] = useState({ fullName: "", phone: "", email: "", address: "", housingType: "Own House", experience: "First-time owner", notes: "" });

    useEffect(() => {
        getAdoptionApplications();
    }, []);

    // Get adoption applications
    const getAdoptionApplications = async () => {
        try {
            const result = await getAdoptionAPI();
            setAdoptionApplications(result.data);
        } catch (error) {
            console.log(error);
        }
    };

    const filteredAnimals = filterType === "All" ? initialAnimals : initialAnimals.filter(animal => animal.type === filterType);

    // Get animals approved by admin
    const adoptedAnimalIds = adoptionApplications
        .filter(application => application.status?.toLowerCase() === "approved")
        .map(application => String(application.animalId));

    const handleInputChange = (e) => {
        setApplicantData({ ...applicantData, [e.target.name]: e.target.value });
    };

    // Submit adoption application
    const handleAdoptionSubmit = async (e) => {
        e.preventDefault();

        try {
            await adoptionAPI({
                ...applicantData,
                animalId: selectedAnimal.id,
                animalName: selectedAnimal.name,
                status: "Pending",
                timestamp: new Date().toISOString()
            });

            alert("Adoption application submitted successfully!");
            setAdoptionSubmitted(true);
            getAdoptionApplications();
        } catch (error) {
            console.log(error);
            alert("Failed to submit adoption application");
        }
    };

    const closeModal = () => {
        setSelectedAnimal(null);
        setAdoptionSubmitted(false);
        setApplicantData({
            fullName: "",
            phone: "",
            email: "",
            address: "",
            housingType: "Own House",
            experience: "First-time owner",
            notes: ""
        });
    };

    return (
        <div className="container py-5">

            <div className="text-center mb-5">
                <h1 className="fw-bold">🐾 Adopt a Street Animal</h1>
                <p className="text-muted">Give a rescued animal a safe and loving forever home.</p>
            </div>

            <div className="d-flex justify-content-center gap-2 mb-4">
                <button className={`btn ${filterType === "All" ? "btn-dark" : "btn-outline-dark"}`} onClick={() => setFilterType("All")}>All</button>
                <button className={`btn ${filterType === "Dog" ? "btn-dark" : "btn-outline-dark"}`} onClick={() => setFilterType("Dog")}>🐶 Dogs</button>
                <button className={`btn ${filterType === "Cat" ? "btn-dark" : "btn-outline-dark"}`} onClick={() => setFilterType("Cat")}>🐱 Cats</button>
            </div>

            <div className="row g-4">

                {filteredAnimals.map(animal => {
                    const isAdopted = adoptedAnimalIds.includes(String(animal.id));

                    return (
                        <div className="col-md-6 col-lg-4" key={animal.id}>

                            <div className="card h-100 shadow-sm border-0 overflow-hidden">

                                <div className="position-relative">
                                    <img src={animal.image} className="card-img-top" alt={animal.name} style={{ height: "240px", objectFit: "cover" }} />

                                    {isAdopted && (
                                        <span className="position-absolute top-0 end-0 badge bg-success m-3 p-2">
                                            ✓ Adopted
                                        </span>
                                    )}
                                </div>

                                <div className="card-body">

                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                        <h4 className="fw-bold mb-0">{animal.name}</h4>

                                        {!isAdopted && (
                                            <span className="badge bg-success">{animal.badge}</span>
                                        )}
                                    </div>

                                    <p className="text-muted mb-1">{animal.gender} • {animal.breed} • {animal.age}</p>
                                    <p className="text-muted mb-1">📍 {animal.location}</p>
                                    <p className="text-success fw-semibold mb-2">❤️ {animal.health}</p>
                                    <p className="text-muted">{animal.description}</p>

                                    {isAdopted ?
                                        <button className="btn btn-secondary w-100 rounded-pill" disabled>
                                            ✓ Already Adopted
                                        </button> :
                                        <button className="btn btn-dark w-100 rounded-pill" onClick={() => setSelectedAnimal(animal)}>
                                            🏡 Adopt {animal.name}
                                        </button>}

                                </div>
                            </div>

                        </div>
                    );
                })}

            </div>

            <section className="mt-5">
                <div className="card shadow-sm border-0">
                    <div className="card-body p-4">

                        <h4 className="fw-bold mb-3">📋 Adoption Applications</h4>

                        <div className="table-responsive">
                            <table className="table align-middle mb-0">

                                <thead className="table-light">
                                    <tr>
                                        <th>Application ID</th>
                                        <th>Animal</th>
                                        <th>Applicant</th>
                                        <th>Phone</th>
                                        <th>Status</th>
                                        <th>Applied</th>
                                    </tr>
                                </thead>

                                <tbody>

                                    {adoptionApplications.length > 0 ? adoptionApplications.map(application => (
                                        <tr key={application.id}>
                                            <td className="fw-bold">A-{application.id}</td>
                                            <td>{application.animalName}</td>
                                            <td>{application.fullName}</td>
                                            <td>{application.phone}</td>
                                            <td>
                                                <span className={`badge ${application.status?.toLowerCase() === "approved" ? "bg-success" : application.status?.toLowerCase() === "rejected" ? "bg-danger" : "bg-warning-subtle text-warning-emphasis"}`}>
                                                    {application.status}
                                                </span>
                                            </td>
                                            <td className="text-muted small">
                                                {application.timestamp ? new Date(application.timestamp).toLocaleString() : "Not available"}
                                            </td>
                                        </tr>
                                    )) : (
                                        <tr>
                                            <td colSpan="6" className="text-center text-muted py-4">
                                                No adoption applications
                                            </td>
                                        </tr>
                                    )}

                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </section>

            {selectedAnimal && (
                <div className="modal d-block" style={{ backgroundColor: "rgba(0,0,0,0.6)" }}>
                    <div className="modal-dialog modal-lg modal-dialog-centered">
                        <div className="modal-content">

                            <div className="modal-header">
                                <h5 className="modal-title">🏡 Adoption Application for {selectedAnimal.name}</h5>
                                <button type="button" className="btn-close" onClick={closeModal}></button>
                            </div>

                            <div className="modal-body">

                                {!adoptionSubmitted ? (
                                    <form onSubmit={handleAdoptionSubmit}>
                                        <div className="row g-3">
                                            <div className="col-md-6">
                                                <label className="form-label">Full Name</label>
                                                <input type="text" name="fullName" className="form-control" value={applicantData.fullName} onChange={handleInputChange} required />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label">Phone</label>
                                                <input type="tel" name="phone" className="form-control" value={applicantData.phone} onChange={handleInputChange} required />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label">Email</label>
                                                <input type="email" name="email" className="form-control" value={applicantData.email} onChange={handleInputChange} required />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label">Housing Type</label>
                                                <select name="housingType" className="form-select" value={applicantData.housingType} onChange={handleInputChange}>
                                                    <option>Own House</option>
                                                    <option>Rented House</option>
                                                    <option>Apartment</option>
                                                </select>
                                            </div>
                                            <div className="col-12">
                                                <label className="form-label">Address</label>
                                                <textarea name="address" className="form-control" rows="2" value={applicantData.address} onChange={handleInputChange} required></textarea>
                                            </div>
                                            <div className="col-12">
                                                <label className="form-label">Pet Experience</label>
                                                <select name="experience" className="form-select" value={applicantData.experience} onChange={handleInputChange}>
                                                    <option>First-time owner</option>
                                                    <option>Have owned pets before</option>
                                                    <option>Currently have pets</option>
                                                </select>
                                            </div>
                                            <div className="col-12">
                                                <label className="form-label">Additional Notes</label>
                                                <textarea name="notes" className="form-control" rows="3" value={applicantData.notes} onChange={handleInputChange}></textarea>
                                            </div>
                                            <div className="col-12">
                                                <button type="submit" className="btn btn-dark w-100 rounded-pill">
                                                    Submit Application
                                                </button>
                                            </div>

                                        </div>
                                    </form>
                                ) : (
                                    <div className="text-center py-5">
                                        <div className="display-4 mb-3">🎉</div>
                                        <h3 className="fw-bold">Application Submitted!</h3>
                                        <p className="text-muted">
                                            Your adoption application for {selectedAnimal.name} has been received.
                                        </p>
                                        <p className="text-muted">
                                            Our team will contact you after reviewing your application.
                                        </p>
                                        <button className="btn btn-dark rounded-pill px-4" onClick={closeModal}>
                                            Close
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Adoption;