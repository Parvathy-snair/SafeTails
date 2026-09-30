import React, { useEffect, useState } from 'react';
import img1 from '../assets/img1.png';
import { BiDonateHeart } from 'react-icons/bi';
import { FaCat } from 'react-icons/fa';
import india from '../assets/sindia.png';
import { Link } from 'react-router-dom';
import { Button } from 'bootstrap';

function Home() {
  const [rescued, setRescued] = useState(0)
  const [adoptions, setAdoptions] = useState(0)
  const [volunteers, setVolunteers] = useState(0)
  const [reports, setReports] = useState(0)
  const [start, setStart] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setStart(true)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (start) {
      let r = setInterval(() => setRescued(n => n < 4850 ? n + 50 : 4850), 20)
      let a = setInterval(() => setAdoptions(n => n < 3620 ? n + 40 : 3620), 20)
      let v = setInterval(() => setVolunteers(n => n < 1200 ? n + 15 : 1200), 20)
      let p = setInterval(() => setReports(n => n < 2400 ? n + 25 : 2400), 20)

      return () => {
        clearInterval(r)
        clearInterval(a)
        clearInterval(v)
        clearInterval(p)
      }
    }
  }, [start])

  return (
    <div>
      <div
        style={{
          minHeight: '100vh',
          backgroundImage: `url(${img1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="d-flex align-items-center p-3 p-md-5 min-vh-100 bg-dark bg-opacity-25">
          <div className="col-12 col-lg-6 p-2 p-md-4 text-light">
            <button className="rounded-pill px-3 py-2 mb-3"
              style={{
                background: 'transparent',
                border: '1px solid #d5a92f',
                color: '#d5a92f',
                fontSize: '11px',
                fontWeight: 'bold',
              }}> NON-PROFIT RESCUE SANCTUARY</button>
            <h1 className="fw-bold mb-2 fs-1 text-white" style={{ lineHeight: '1.1' }}> GIVE THEM A HOME. </h1>
            <h1 className="fw-bold fs-1" style={{ color: '#d5a92f', lineHeight: '1.1' }}>GIVE THEM A SECOND CHANCE.</h1>
            <p className="mt-3 text-white" style={{ fontSize: '14px', lineHeight: '1.6', maxWidth: '550px' }}>
              Thousands of animals are waiting for someone to notice them, care for them, and give
              them a chance at a better life. Your kindness, compassion, and support could be the
              beginning of their happiest chapter, giving them the love, safety, and forever home they
              truly deserve.</p>
            <div className="d-flex flex-wrap gap-2 mt-4">
              <Link to='/Donate'
                style={{ backgroundColor: '#d5a92f', fontSize: '14px', fontWeight: 'bold' }} className="btn rounded-pill px-4 py-3">
                <BiDonateHeart size={25} className="me-1" /> DONATE NOW</Link>
              <Link to="/Adoption"
                style={{
                  backgroundColor: 'transparent',
                  border: '1px solid white',
                  fontSize: '14px',
                  fontWeight: 'bold',
                }}
                className="btn rounded-pill px-4 py-3 text-light">
                <FaCat size={20} className="me-1" /> ADOPT A PET</Link>
            </div>
          </div>
        </div>
      </div>


      <div className="container-fluid py-5" style={{ backgroundColor: '#f5f5f5' }}>
        <div className="row align-items-center">
          <div className="col-md-6 p-4 p-md-5">
            <h6 style={{ color: '#d5a92f', fontWeight: 'bold' }}>ABOUT SAFETAILS</h6>
            <h1 style={{ fontWeight: 'bold', color: '#222' }}>Every Tail Deserves A Safe Home.</h1>
            <p style={{ color: '#555', lineHeight: '1.8' }}>
              SafeTails is a platform created to help stray, abandoned, and vulnerable animals
              find safety, care, and loving forever homes. We connect animals in need with people
              who are ready to adopt, rescue, foster, or support them.
            </p>
            <p style={{ color: '#555', lineHeight: '1.8' }}>
              Our mission is simple — to give every animal a second chance at a happier life.
              Whether you adopt a pet, report an animal in need, or simply spread awareness, your
              kindness can make a difference.
            </p>
            <button style={{ backgroundColor: '#d5a92f', fontWeight: 'bold' }} className="btn rounded-pill px-4 py-3"> LEARN MORE </button>
          </div>
          <div className="col-md-6 text-center p-4">
            <img src='https://www.globalgiving.org/pfil/51176/pict_large.jpg' alt="SafeTails Sanctuary" className="img-fluid rounded-4" style={{ maxHeight: '450px', width: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </div>


      <div className="container-fluid py-5 position-relative overflow-hidden p-0" style={{ backgroundColor: '#f5f5f5' }}>

        <img
          src={india}
          className="w-100 opacity-50 object-fit-cover"
          alt="India Map"
          style={{ height: '400px' }}
        />


        <div className="position-absolute top-50 start-50 translate-middle w-100 px-3">
          <div className="container">
            <div className="row text-center g-4">
              <div className="col-6 col-md-3">
                <h1 style={{ color: '#d5a92f', fontWeight: 'bold' }}>{rescued}+</h1>
                <p className="text-dark m-0">Animals Rescued</p>
              </div>
              <div className="col-6 col-md-3">
                <h1 style={{ color: '#d5a92f', fontWeight: 'bold' }}>{adoptions}+</h1>
                <p className="text-dark m-0">Happy Adoptions</p>
              </div>
              <div className="col-6 col-md-3">
                <h1 style={{ color: '#d5a92f', fontWeight: 'bold' }}>{volunteers}+</h1>
                <p className="text-dark m-0">Volunteers</p>
              </div>
              <div className="col-6 col-md-3">
                <h1 style={{ color: '#d5a92f', fontWeight: 'bold' }}>{reports}+</h1>
                <p className="text-dark m-0">Rescue Reports</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid py-5" style={{ backgroundColor: '#f5f5f5' }}>
        <div className="row align-items-center">
          <div className="col-md-6 text-center p-4">
            <img src='https://www.globalgiving.org/pfil/51176/ph_51176_220440.jpg' alt="SafeTails Sanctuary" className="img-fluid rounded-4" style={{ maxHeight: '450px', width: '100%', objectFit: 'cover' }} />
          </div>
          <div className="col-md-6 p-4 p-md-5">
            <h6 style={{ color: '#d5a92f', fontWeight: 'bold' }}></h6>
            <h1 style={{ fontWeight: 'bold', color: '#222' }}>RESCUE, CARE & LOVE FOR ANIMALS IN NEED</h1>
            <p style={{ color: '#555', lineHeight: '1.8' }}>
              SafeTails is dedicated to helping stray and abandoned animals find safety, care, and loving homes. We connect animals in need with people who are ready to rescue, adopt, foster, and make a difference. Through compassion, community support, and responsible adoption, we aim to give every animal a second chance at a happier and healthier life. Together, we can create a safer world where every animal is treated with kindness and has a place to call home.
            </p>
            {/* <p style={{ color: '#555', lineHeight: '1.8' }}>
              Our mission is simple — to give every animal a second chance at a happier life.
              Whether you adopt a pet, report an animal in need, or simply spread awareness, your
              kindness can make a difference.
            </p> */}
            <button style={{ backgroundColor: '#d5a92f', fontWeight: 'bold' }} className="btn rounded-pill px-4 py-3"> EXPLORE OUR JOURNEY </button>
          </div>

        </div>
      </div>

      <div style={{ backgroundColor: '#c7c9bc' }} className="d-flex flex-wrap justify-content-center p-5">
        <div style={{ backgroundColor: '#ffffff' }} className="col-12 col-md-3 p-5">
          <h1 style={{ color: '#7a7777' }} className="fw-bold text-center">Mission</h1>
          <h4 className="text-center">RESCUE & PROTECT</h4>
          <p style={{ color: '#555', textAlign: 'justify' }}>To rescue and support stray and abandoned animals by connecting them with caring people, safe environments, and loving forever homes.</p>
        </div>
        <div style={{ backgroundColor: '#040404' }} className="col-12 col-md-3 p-5">
          <h1 style={{ color: '#d5a92f' }} className="fw-bold text-center">Vision</h1>
          <h4 className="text-center" style={{ color: '#7a7777' }}>A BETTER FUTURE</h4>
          <p style={{ color: '#ffffff', textAlign: 'justify' }}>To create a safer and kinder world where every animal is protected, cared for, and given the opportunity to find a loving home and live a happy, healthy, and fulfilling life.</p>
        </div>
        <div style={{ backgroundColor: '#c1c139' }} className="col-12 col-md-3 p-5">
          <h1 style={{ color: '#040404' }} className="fw-bold text-center">Values</h1>
          <h4 className="text-center">ACT WITH CARE</h4>
          <p style={{ color: '#222', textAlign: 'justify' }}>We work together to protect animals, promote responsible adoption, and give every animal a chance at a better life.</p>
        </div>
      </div>


      <div className="container-fluid py-5" style={{ backgroundColor: '#fff' }}>
        <div className="container">
          <div className="text-center mb-5">
            <h1 className="fw-bold" style={{ color: '#222' }}>What We Do</h1>
            <p className="text-secondary mx-auto" style={{ maxWidth: '700px', fontSize: '17px', lineHeight: '1.7' }}>
              Our work focuses on rescuing, caring for, protecting, and finding loving homes for animals in need.
            </p>
          </div>

          <div className="row g-4">

            <div className="col-12 col-md-6 col-lg-4">
              <div className="card border-0 shadow-sm rounded-4 overflow-hidden h-100">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSZH4hqbjXOoCDYWC3ylbbe1CnuyIKUcIFTzML5si1aKqUfS4S6IbVIvs&s=10" className="card-img-top" alt="Rescue Operations" style={{ height: '250px', objectFit: 'cover' }} />
                <div className="card-body p-4">
                  <h4 className="fw-bold">🚨 Rescue Operations</h4>
                  <p className="text-secondary" style={{ lineHeight: '1.7' }}>
                    We help rescue injured, abandoned, and vulnerable animals and connect them with the care and protection they need.
                  </p>
                  <button className="btn btn-outline-dark rounded-3 px-4 fw-bold">Learn More →</button>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="card border-0 shadow-sm rounded-4 overflow-hidden h-100">
                <img src="https://www.jivdayatrust.org/_next/image/?url=%2Fimages%2Fprojects%2Fanimal-care-on-wheels%2Ftagged-dog.jpg&w=3840&q=75" className="card-img-top" alt="Medical Care" style={{ height: '250px', objectFit: 'cover' }} />
                <div className="card-body p-4">
                  <h4 className="fw-bold">🏥 Medical Care</h4>
                  <p className="text-secondary" style={{ lineHeight: '1.7' }}>
                    We support animals that need medical attention, treatment, recovery, and ongoing care after rescue.
                  </p>
                  <button className="btn btn-outline-dark rounded-3 px-4 fw-bold">Learn More →</button>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="card border-0 shadow-sm rounded-4 overflow-hidden h-100">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6D6_ClwImDCFW1QHVRoUCwiptmhWP5nKHZoY_3Xr5djGol-U5kRIayRaL&s=10" className="card-img-top" alt="Vaccination" style={{ height: '250px', objectFit: 'cover' }} />
                <div className="card-body p-4">
                  <h4 className="fw-bold">💉 Health & Vaccination</h4>
                  <p className="text-secondary" style={{ lineHeight: '1.7' }}>
                    We promote responsible animal care through vaccination, deworming, regular health checks, and preventive care.
                  </p>
                  <button className="btn btn-outline-dark rounded-3 px-4 fw-bold">Learn More →</button>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="card border-0 shadow-sm rounded-4 overflow-hidden h-100">
                <img src="https://saahasforpune.org/images/DSC00695-scaled.jpg" className="card-img-top" alt="Feeding" style={{ height: '250px', objectFit: 'cover' }} />
                <div className="card-body p-4">
                  <h4 className="fw-bold">🍲 Feeding & Care</h4>
                  <p className="text-secondary" style={{ lineHeight: '1.7' }}>
                    We encourage feeding and caring for stray animals by connecting compassionate people with animals in need.
                  </p>
                  <button className="btn btn-outline-dark rounded-3 px-4 fw-bold">Learn More →</button>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="card border-0 shadow-sm rounded-4 overflow-hidden h-100">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQocsAERvDHl0tKuuEPp-R9bnX83TxIpm9pvbmvKAyT1h0bPoqHjwsZ4AI&s=10" className="card-img-top" alt="Adoption" style={{ height: '250px', objectFit: 'cover' }} />
                <div className="card-body p-4">
                  <h4 className="fw-bold">🏡 Adoption Support</h4>
                  <p className="text-secondary" style={{ lineHeight: '1.7' }}>
                    We help rescued animals find caring families and safe forever homes through responsible adoption.
                  </p>
                  <button className="btn btn-outline-dark rounded-3 px-4 fw-bold">Learn More →</button>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="card border-0 shadow-sm rounded-4 overflow-hidden h-100">
                <img src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=900&q=80" className="card-img-top" alt="Community Outreach" style={{ height: '250px', objectFit: 'cover' }} />
                <div className="card-body p-4">
                  <h4 className="fw-bold">🤝 Community Outreach</h4>
                  <p className="text-secondary" style={{ lineHeight: '1.7' }}>
                    We encourage people to get involved through awareness, animal welfare initiatives, and community support.
                  </p>
                  <button className="btn btn-outline-dark rounded-3 px-4 fw-bold">Learn More →</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>


      <div className="container-fluid py-4">
        <div className="container">
          <div className="rounded-4 p-4 p-md-5" style={{ backgroundColor: '#d5a92f' }}>
            <div className="row align-items-center">
              <div className="col-md-9">
                <h1 className="fw-bold text-dark">Sponsor A Meal For An Animal Today</h1>
                <p className="text-dark mb-0" style={{ fontSize: '17px', lineHeight: '1.7' }}>
                  Your support can help provide food, care, and comfort to rescued and abandoned animals.
                  Every meal is a small act of kindness that can make a big difference.
                </p>
              </div>

              <div className="col-md-3 text-md-end mt-4 mt-md-0">
                <Link to="/Donate" className="btn btn-dark rounded-3 px-4 py-3 fw-bold mb-2 w-100">
                  💗 Donate Now
                </Link>

                <Link to="/Donate" className="btn btn-outline-dark rounded-3 px-4 py-3 fw-bold w-100">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="container-fluid py-5" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-md-6">
              <img
                src="https://give.do/blog/wp-content/uploads/2024/07/People-For-Animals-banner.jpg"
                alt="Animals"
                className="img-fluid rounded-4 shadow"
                style={{ width: '100%', height: '400px', objectFit: 'cover' }}
              />
            </div>

            <div className="col-md-6">
              <h6 style={{ color: '#d5a92f', fontWeight: 'bold' }}>WHY SAFETAILS?</h6>
              <h1 className="fw-bold mb-4">Small Actions Can Create Big Changes.</h1>

              <div className="d-flex mb-3">
                <div className="me-3 fs-3">🐾</div>
                <div>
                  <h5 className="fw-bold mb-1">Every Animal Matters</h5>
                  <p className="text-secondary mb-0">
                    Every rescue, report, adoption, and act of kindness can make a meaningful difference.
                  </p>
                </div>
              </div>

              <div className="d-flex mb-3">
                <div className="me-3 fs-3">🤝</div>
                <div>
                  <h5 className="fw-bold mb-1">Community Support</h5>
                  <p className="text-secondary mb-0">
                    SafeTails connects people who want to help animals with animals who need help.
                  </p>
                </div>
              </div>

              <div className="d-flex mb-4">
                <div className="me-3 fs-3">🏠</div>
                <div>
                  <h5 className="fw-bold mb-1">Forever Homes</h5>
                  <p className="text-secondary mb-0">
                    We believe rescued animals deserve safe, caring, and loving homes.
                  </p>
                </div>
              </div>

              <Link
                to="/Adoption"
                className="btn rounded-pill px-4 py-3 text-dark"
                style={{ backgroundColor: '#d5a92f', fontWeight: 'bold' }}
              >
                FIND A PET
              </Link>
            </div>
          </div>
        </div>
      </div>


      <div
        className="container-fluid py-5"
        style={{
          backgroundColor: '#111',
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.75),rgba(0,0,0,0.75)),url("https://www.globalgiving.org/pfil/51176/ph_51176_220440.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container text-center text-white py-5">
          <h6 style={{ color: '#d5a92f', fontWeight: 'bold' }}>BE THEIR SECOND CHANCE</h6>
          <h1 className="fw-bold display-5 mb-3">You Can Make A Difference Today.</h1>
          <p className="mx-auto mb-4" style={{ maxWidth: '700px', lineHeight: '1.8' }}>
            Whether you rescue an animal, adopt a pet, report an emergency, or support our mission,
            your action can help give an animal a safer and happier future.
          </p>

          <div className="d-flex justify-content-center flex-wrap gap-3">
            <Link
              to="/Rescue"
              className="btn rounded-pill px-4 py-3"
              style={{ backgroundColor: '#d5a92f', fontWeight: 'bold' }}
            >
              🚨 RESCUE AN ANIMAL
            </Link>

            <Link
              to="/Adoption"
              className="btn rounded-pill px-4 py-3 text-white"
              style={{ backgroundColor: 'transparent', border: '1px solid white', fontWeight: 'bold' }}
            >
              🏡 ADOPT A PET
            </Link>
          </div>
        </div>
      </div>


      <div className="container-fluid py-5" style={{ backgroundColor: '#f5f5f5' }}>
        <div className="container text-center py-4">
          <div style={{ color: '#d5a92f', fontSize: '35px' }}>🐾</div>
          <h1 className="fw-bold mx-auto" style={{ color: '#222', maxWidth: '850px', lineHeight: '1.4' }}>
            "Saving one animal may not change the world, but it can change the world for that one animal."
          </h1>
          <div className="mx-auto mt-4" style={{ width: '60px', height: '3px', backgroundColor: '#d5a92f' }}></div>
          <p className="fw-bold mt-3 mb-0" style={{ color: '#777' }}>
            — SafeTails
          </p>
        </div>
      </div>
    </div>




  );
}

export default Home;