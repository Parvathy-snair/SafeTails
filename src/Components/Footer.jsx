import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube, FaHeart, FaPaw } from 'react-icons/fa'

function Footer() {
  return (
    <>
      <div className="container-fluid bg-dark text-light pt-5 pb-4">
        <div className="container">
          <div className="row g-4">

            <div className="col-12 col-md-4">
              <h3 className="fw-bold mb-3">
                <span style={{ color: '#fff' }}>Safe</span><span style={{ color: '#d5a92f' }}>Tails</span>
              </h3>
              <p style={{ color: '#aaa', lineHeight: '1.8', maxWidth: '350px' }}>
                Helping stray, abandoned, and vulnerable animals find safety, care, and loving forever homes.
                Every small act of kindness can give an animal a second chance.
              </p>

              <div className="d-flex gap-2 mt-4">
                <a href="#" className="d-flex align-items-center justify-content-center rounded-circle text-light text-decoration-none" style={{ width: '38px', height: '38px', backgroundColor: '#222' }}>
                  <FaInstagram />
                </a>
                <a href="#" className="d-flex align-items-center justify-content-center rounded-circle text-light text-decoration-none" style={{ width: '38px', height: '38px', backgroundColor: '#222' }}>
                  <FaFacebookF />
                </a>
                <a href="#" className="d-flex align-items-center justify-content-center rounded-circle text-light text-decoration-none" style={{ width: '38px', height: '38px', backgroundColor: '#222' }}>
                  <FaTwitter />
                </a>
                <a href="#" className="d-flex align-items-center justify-content-center rounded-circle text-light text-decoration-none" style={{ width: '38px', height: '38px', backgroundColor: '#222' }}>
                  <FaYoutube />
                </a>
              </div>
            </div>

            <div className="col-6 col-md-2">
              <h6 className="fw-bold mb-4" style={{ color: '#d5a92f' }}>Quick Links</h6>
              <p className="mb-2"><Link to="/" className="text-light text-decoration-none">Home</Link></p>
              <p className="mb-2"><Link to="/Rescue" className="text-light text-decoration-none">Rescue</Link></p>
              <p className="mb-2"><Link to="/Adoption" className="text-light text-decoration-none">Adoption</Link></p>
              <p className="mb-2"><Link to="/Report" className="text-light text-decoration-none">Report</Link></p>
              <p className="mb-2"><Link to="/Donate" className="text-light text-decoration-none">Donate</Link></p>
            </div>

            <div className="col-6 col-md-2">
              <h6 className="fw-bold mb-4" style={{ color: '#d5a92f' }}>Get Involved</h6>
              <p className="mb-2">🐾 Rescue an Animal</p>
              <p className="mb-2">🏡 Adopt a Pet</p>
              <p className="mb-2">❤️ Foster a Pet</p>
              <p className="mb-2">🤝 Volunteer</p>
              <p className="mb-2">💛 Support Us</p>
            </div>

            <div className="col-12 col-md-4">
              <h6 className="fw-bold mb-4" style={{ color: '#d5a92f' }}>Make A Difference</h6>
              <p style={{ color: '#aaa', lineHeight: '1.7' }}>
                Your support helps us provide food, medical care, rescue assistance, and safe homes for animals in need.
              </p>

              <Link to="/Donate" className="btn rounded-pill px-4 py-2 fw-bold mt-2" style={{ backgroundColor: '#d5a92f', color: '#111' }}>
                <FaHeart className="me-2" />DONATE NOW
              </Link>

              <div className="mt-4">
                <p className="mb-2">📍 Kerala, India</p>
                <p className="mb-2">📧 safetails@gmail.com</p>
                <p className="mb-0">🐾 Every Tail Deserves A Safe Home</p>
              </div>
            </div>

          </div>

          <hr className="border-secondary my-4" />

          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start">
              <p className="mb-0" style={{ color: '#aaa', fontSize: '13px' }}>
                © 2026 SafeTails. All Rights Reserved.
              </p>
            </div>

            <div className="col-md-6 text-center text-md-end mt-2 mt-md-0">
              <span style={{ color: '#aaa', fontSize: '13px' }}>
                Made with <FaPaw style={{ color: '#d5a92f' }} /> for animals
              </span>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Footer