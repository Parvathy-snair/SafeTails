import React,{useState} from 'react';

function Donate(){
const [currency,setCurrency]=useState('INR');

return(
<div>
<div style={{minHeight:'100vh',backgroundImage:'url("https://img.magnific.com/free-photo/closeup-shot-snouts-cute-dog-cat-sitting-cheek-cheek_181624-21012.jpg?semt=ais_hybrid&w=740&q=80")',backgroundSize:'cover',backgroundAttachment:'fixed',paddingTop:'50px'}}>
<div className="d-flex justify-content-center align-items-center p-5">
<div className="bg-white rounded-2" style={{width:'630px',maxWidth:'100%'}}>
<div className="text-center fw-bold">
<button className="col-6 border-0 py-3" onClick={()=>setCurrency('INR')} style={{color:currency==='INR'?'#f5f4f8':'black',backgroundColor:currency==='INR'?'#8971cf':'white'}}>₹ INR</button>
<button className="col-6 border-0 py-3" onClick={()=>setCurrency('USD')} style={{color:currency==='USD'?'white':'black',backgroundColor:currency==='USD'?'#8971cf':'white'}}>$ USD</button>
</div>
<div className="p-4">
{currency==='INR'&&(
<>
<div className="d-flex bg-light mb-4 py-2">
  <div className="flex-fill ps-3">
    <input type="radio" name="amount" id="500" className="form-check-input me-1" />
    <label htmlFor="500">₹500</label>
  </div>
  <div className="flex-fill ps-3">
    <input type="radio" name="amount" id="1000" className="form-check-input me-1" />
    <label htmlFor="1000">₹1,000</label>
  </div>
  <div className="flex-fill ps-3">
    <input type="radio" name="amount" id="2500" className="form-check-input me-1" />
    <label htmlFor="2500">₹2,500</label>
  </div>
  <div className="flex-fill ps-3">
    <input type="radio" name="amount" id="other" className="form-check-input me-1" />
    <label htmlFor="other">Other</label>
  </div>
</div>
<div className="d-flex align-items-center gap-3 mb-4">
<img src="https://images.unsplash.com/photo-1558788353-f76d92427f16?w=100" className="rounded" style={{width:'55px',height:'60px',objectFit:'cover'}}/>
<p className="mb-0">Only in 2500 INR, you can sponsor a dog's monthly food requirement.</p>
</div>
<div className="input-group mb-3">
<span className="input-group-text" style={{color:'#8971cf'}}>₹ INR</span>
<input type="text" className="form-control py-3" placeholder="Your Amount"/>
</div>
<div className="input-group mb-3">
<span className="input-group-text" style={{color:'#8971cf'}}>▣ PAN</span>
<input type="text" className="form-control py-3" placeholder="PAN NO."/>
<p className="small text-secondary mb-2">Please provide your pan number to enable us to generate your donation receipt.</p>

</div>
</>
)}
{currency==='USD'&&(
<div>
<div className="d-flex bg-light mb-4 py-2">
  <div className="flex-fill ps-3"><input type="radio" name="usdamount" className="form-check-input me-1"/>$10</div>
  <div className="flex-fill ps-3"><input type="radio" name="usdamount" className="form-check-input me-1"/>$50</div>
  <div className="flex-fill ps-3"><input type="radio" name="usdamount" className="form-check-input me-1"/>$80</div>
  <div className="flex-fill ps-3"><input type="radio" name="usdamount" className="form-check-input me-1"/>Other</div>
</div>
<div className="d-flex align-items-center gap-3 mb-4">
<img src="https://images.unsplash.com/photo-1558788353-f76d92427f16?w=100" className="rounded" style={{width:'55px',height:'60px',objectFit:'cover'}}/>
<p className="mb-0">Only in 50 USD, you can sponsor a dog's monthly food requirement.</p>
</div>
<div className="input-group mb-3">
<span className="input-group-text" style={{color:'#8971cf'}}>$ USD</span>
<input type="text" className="form-control py-3" placeholder="Your Amount"/>
</div>

<div className="input-group mb-3">
<input type="text" className="form-control py-3" placeholder="Enter Name"/>
</div>
<div className="input-group mb-3">
<input type="text" className="form-control py-3" placeholder="Enter Address"/>
</div>
<div className="d-flex gap-2">
<div className="input-group mb-3">
<input type="text" className="form-control py-3" placeholder="Enter Zip Code"/>
</div>
<div className="input-group mb-3">
<input type="text" className="form-control py-3" placeholder="Enter City"/>
</div>
</div>
<div className="d-flex gap-2">
<div className="input-group mb-3">
<input type="text" className="form-control py-3" placeholder="Enter State"/>
</div>
<div className="input-group mb-3">
<input type="text" className="form-control py-3" placeholder="Select Country"/>
</div>
</div>
<div className="input-group mb-3">
<input type="text" className="form-control py-3" placeholder="Enter Mobile no"/>
</div>
<div className="input-group mb-3">
<input type="text" className="form-control py-3" placeholder="Enter Email"/>
</div>

</div>
)}
<p className="small text-secondary mb-4">People For Animals is a registered Trust in India and all donations are entitled to exemption under section 80G of the Income Tax Act, 1961 INDIA.</p>
<button className="btn w-100 text-white rounded-pill py-3" style={{background:'#8971cf'}}>Donate Now</button>


</div>
</div>
</div>
</div>
<div className="mt-5 text-center p-5">
  <h2 className="fw-bold" style={{color:'#8971cf'}}>Why Donate?</h2>
  <p className="text-secondary">Your donation helps us provide food, shelter, medical care and a safe environment for animals in need.</p>

  <div className="d-flex gap-3 mt-3 p-5">

    <div className="col-md-4 rounded" style={{backgroundImage:'linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROKDo_W52OXIzapATAxdzzRYIZQc_AtsYoCCbK_kH4YzkbHR4iVOQrjVM&s=10")',backgroundSize:'cover',backgroundPosition:'center',minHeight:'220px'}}>
      <div className="p-5">
        <h3 className="fw-bold text-light"> Food & Care</h3>
        <p className="small text-light mb-0">Help provide nutritious food and daily care for animals.</p>
      </div>
    </div>

    <div className="col-md-4 rounded" style={{backgroundImage:'linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url("https://www.shutterstock.com/image-photo/vaccination-homeless-stray-animals-rabies-260nw-1357419089.jpg")',backgroundSize:'cover',backgroundPosition:'center',minHeight:'220px'}}>
      <div className="p-5">
        <h3 className="fw-bold text-light"> Medical Help</h3>
        <p className="small text-light mb-0">Support medical treatment and emergency care for injured animals.</p>
      </div>
    </div>

    <div className="col-md-4 rounded" style={{backgroundImage:'linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url("https://www.shutterstock.com/image-photo/dog-shelter-lonely-cage-portrait-260nw-2234872565.jpg")',backgroundSize:'cover',backgroundPosition:'center',minHeight:'220px'}}>
      <div className="p-5">
        <h3 className="fw-bold text-light"> Safe Shelter</h3>
        <p className="small text-light mb-0">Help give abandoned and rescued animals a safe place to live.</p>
      </div>
    </div>

  </div>
</div>
</div>



);
}

export default Donate;