import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';

/** Cities and sample requests for the Donate Now form */
const cityRequests = {
  Mumbai: [
    { id: 1, patient: 'Amit Shah', bloodGroup: 'A+', hospital: 'City Hospital', urgency: 'High' },
    { id: 2, patient: 'Priya Mehta', bloodGroup: 'O-', hospital: 'Red Cross', urgency: 'Medium' },
  ],
  Delhi: [
    { id: 3, patient: 'Rahul Verma', bloodGroup: 'B+', hospital: 'Apollo', urgency: 'High' },
    { id: 4, patient: 'Fatima Ali', bloodGroup: 'AB+', hospital: 'Max Healthcare', urgency: 'Low' },
  ],
  Bangalore: [
    { id: 5, patient: 'Suresh Kumar', bloodGroup: 'O+', hospital: 'Fortis', urgency: 'Medium' },
  ],
  Hyderabad: [
    { id: 6, patient: 'Anjali Rao', bloodGroup: 'A-', hospital: 'Care Hospital', urgency: 'High' },
  ],
  Chennai: [
    { id: 7, patient: 'Vikram Singh', bloodGroup: 'B-', hospital: 'Apollo', urgency: 'Low' },
  ],
  Pune: [],
  Kolkata: [],
};

function Home() {
  return (
    <div className="page home">
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
        alt="Blood donation hero"
        className="hero-img"
      />
      <h1>Welcome to DonateNow</h1>
      <p>Every two seconds, someone in the world needs blood. Your donation can save up to three lives. Join our community of heroes and make a difference today!</p>
      <Link className="donate-btn" to="/donate">Donate Now</Link>
      <div className="stats">
        <div><strong>1200+</strong> Registered Donors</div>
        <div><strong>3500+</strong> Lives Saved</div>
        <div><strong>50+</strong> Blood Drives</div>
      </div>
      <section className="highlight">
        <h2>Why Donate Blood?</h2>
        <ul>
          <li>1 donation can save up to 3 lives</li>
          <li>Blood cannot be manufactured, it can only come from donors</li>
          <li>Every year, millions of people rely on blood donations</li>
        </ul>
      </section>
      <section className="testimonials">
        <h2>Donor Stories</h2>
        <blockquote>"Donating blood was the easiest way to help someone in need. I feel proud to be a regular donor!"<br /><span>- Priya S.</span></blockquote>
        <blockquote>"My son needed blood during surgery. Thanks to donors, he got a second chance at life."<br /><span>- Ramesh K.</span></blockquote>
      </section>
      <section className="cta">
        <h2>Ready to save a life?</h2>
        <Link className="donate-btn" to="/donate">Become a Donor</Link>
      </section>
      <img
        src="https://images.unsplash.com/photo-1510626176961-4b57d4fbad04?auto=format&fit=crop&w=800&q=80"
        alt="Blood donation event"
        className="section-img"
      />
      <section className="facts">
        <h2>Fascinating Facts</h2>
        <ul>
          <li>Someone needs blood every 2 seconds worldwide.</li>
          <li>1 in 7 people entering a hospital needs blood.</li>
          <li>There is no substitute for human blood.</li>
          <li>Donating blood burns 650 calories per donation!</li>
          <li>Blood donation can help reduce harmful iron stores in your body.</li>
        </ul>
      </section>
      <section className="inspire">
        <h2>Be a Lifesaver</h2>
        <p>"The gift of blood is the gift of life. There is no greater gift than donating blood."</p>
        <p>Join thousands of heroes who have made a difference. Your single act of kindness can ripple through families and communities.</p>
      </section>
    </div>
  );
}

function About() {
  return (
    <div className="page about">
      <h1>About DonateNow</h1>
      <img
        src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80"
        alt="About blood donation"
        className="section-img"
      />
      <p>Blood donation is a voluntary procedure that can help save the lives of others. There are several types of blood donation, which help meet different medical needs.</p>
      <section>
        <h2>Types of Blood Donation</h2>
        <ul>
          <li><strong>Whole Blood Donation:</strong> The most common type, used for trauma and surgery patients.</li>
          <li><strong>Platelet Donation:</strong> Helps cancer patients and those undergoing organ transplants.</li>
          <li><strong>Plasma Donation:</strong> Used for patients with liver conditions, burns, and infections.</li>
          <li><strong>Double Red Cell Donation:</strong> For trauma victims, newborns, and those with severe anemia.</li>
        </ul>
      </section>
      <section>
        <h2>How Blood Donation Works</h2>
        <ol>
          <li>Register and complete a health history questionnaire.</li>
          <li>Undergo a quick physical check (pulse, BP, hemoglobin).</li>
          <li>Donate blood (usually takes 8-10 minutes).</li>
          <li>Enjoy refreshments and rest for a few minutes.</li>
        </ol>
        <img
          src="https://images.unsplash.com/photo-1503455637927-730bce8583c0?auto=format&fit=crop&w=800&q=80"
          alt="Donor giving blood"
          className="section-img"
        />
      </section>
      <section>
        <h2>Eligibility Criteria</h2>
        <ul>
          <li>Age: 18-65 years</li>
          <li>Weight: At least 50 kg</li>
          <li>Good general health</li>
          <li>No recent infections or major surgeries</li>
        </ul>
      </section>
      <section>
        <h2>Myths & Facts</h2>
        <ul>
          <li><strong>Myth:</strong> Donating blood is painful.<br /><strong>Fact:</strong> Only a slight pinch is felt; the process is safe and simple.</li>
          <li><strong>Myth:</strong> You can get diseases from donating blood.<br /><strong>Fact:</strong> Sterile, disposable equipment is used for every donor.</li>
          <li><strong>Myth:</strong> Blood donation makes you weak.<br /><strong>Fact:</strong> Your body replaces the lost blood within 24-48 hours.</li>
        </ul>
      </section>
      <section>
        <h2>FAQs</h2>
        <ul>
          <li><strong>How often can I donate?</strong> Every 3 months for whole blood, more frequently for plasma/platelets.</li>
          <li><strong>Can I donate if I have a tattoo?</strong> Yes, after 6 months of getting the tattoo.</li>
          <li><strong>Is fasting required?</strong> No, but eat a healthy meal before donating.</li>
        </ul>
      </section>
      <section className="facts">
        <h2>Did You Know?</h2>
        <ul>
          <li>Blood makes up about 7% of your body weight.</li>
          <li>Red blood cells live about 120 days in the circulatory system.</li>
          <li>Type O-negative blood is the universal donor.</li>
          <li>Type AB-positive blood is the universal plasma donor.</li>
        </ul>
      </section>
      <section className="inspire">
        <h2>Inspire Others</h2>
        <p>Share your story and inspire others to donate. Every story matters, every drop counts.</p>
      </section>
    </div>
  );
}

function DonateNow() {
  const [selectedCity, setSelectedCity] = React.useState('');
  const [selectedRequest, setSelectedRequest] = React.useState('');
  const cities = Object.keys(cityRequests);
  const requests = selectedCity ? cityRequests[selectedCity] : [];

  return (
    <div className="page donate">
      <h1>Donate Now</h1>
      <img
        src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd07?auto=format&fit=crop&w=800&q=80"
        alt="Donate now section"
        className="section-img"
        style={{ display: 'block', margin: '0 auto 1.5rem auto', maxWidth: '400px', width: '100%' }}
      />
      <p>Fill out the form below to register as a blood donor. Our team will contact you for the next available donation drive or emergency need.</p>
      <form className="donate-form">
        <label>Name:<input type="text" placeholder="Your Name" required /></label>
        <label>Age:<input type="number" min="18" max="65" placeholder="Your Age" required /></label>
        <label>Gender:
          <select required>
            <option value="">Select</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </label>
        <label>Blood Group:
          <select required>
            <option value="">Select</option>
            <option>A+</option><option>A-</option><option>B+</option><option>B-</option>
            <option>AB+</option><option>AB-</option><option>O+</option><option>O-</option>
          </select>
        </label>
        <label>Contact:<input type="text" placeholder="Phone or Email" required /></label>
        <label>Location:
          <select required value={selectedCity} onChange={e => { setSelectedCity(e.target.value); setSelectedRequest(''); }}>
            <option value="">Select City</option>
            {cities.map(city => <option key={city} value={city}>{city}</option>)}
          </select>
        </label>
        {selectedCity && (
          <div className="city-requests">
            <h4>Available Blood Requests in {selectedCity}:</h4>
            {requests.length === 0 ? (
              <div className="no-requests">No urgent requests in this city. You can still donate for future needs!</div>
            ) : (
              <ul>
                {requests.map(req => (
                  <li key={req.id}>
                    <label>
                      <input
                        type="radio"
                        name="bloodRequest"
                        value={req.id}
                        checked={selectedRequest === String(req.id)}
                        onChange={() => setSelectedRequest(String(req.id))}
                      />
                      <span className="request-info">
                        <b>{req.patient}</b> ({req.bloodGroup}) at <b>{req.hospital}</b> - <span className={req.urgency.toLowerCase()}>{req.urgency} urgency</span>
                      </span>
                    </label>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
        <label>Medical Conditions:<input type="text" placeholder="e.g. Diabetes, Hypertension, None" /></label>
        <label>Last Donation Date:<input type="date" /></label>
        <label>Are you willing to donate in emergencies?
          <select required>
            <option value="">Select</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </label>
        <label className="consent-label">
          <input type="checkbox" required /> I confirm that I am in good health and willing to donate blood.
        </label>
        <button type="submit">Submit</button>
      </form>
      <section>
        <h2>What Happens Next?</h2>
        <ol>
          <li>Our team will verify your details.</li>
          <li>You'll be added to our donor database.</li>
          <li>We'll contact you for upcoming donation camps or urgent needs.</li>
        </ol>
        <img
          src="https://images.unsplash.com/photo-1468519413686-89bfa1e8bdf8?auto=format&fit=crop&w=800&q=80"
          alt="Nurse with blood bag"
          className="section-img"
          style={{ display: 'block', margin: '1.5rem auto', maxWidth: '400px', width: '100%' }}
        />
      </section>
      <section>
        <h2>Tips for Donors</h2>
        <ul>
          <li>Eat a healthy meal before donating.</li>
          <li>Stay hydrated.</li>
          <li>Avoid strenuous activity after donation.</li>
        </ul>
      </section>
      <section className="facts">
        <h2>Why People Donate</h2>
        <ul>
          <li>To help save lives in emergencies and surgeries.</li>
          <li>To support cancer, trauma, and anemia patients.</li>
          <li>To give back to the community.</li>
        </ul>
      </section>
      <section className="inspire">
        <h2>Be the Change</h2>
        <p>"To the world you may be one person, but to one person you may be the world."</p>
      </section>
    </div>
  );
}

function Profile() {
  return (
    <div className="page profile">
      <h1>My Profile</h1>
      <img
        src="https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&w=800&q=80"
        alt="Profile section"
        className="section-img"
      />
      <div><strong>Name:</strong> John Doe</div>
      <div><strong>Blood Group:</strong> O+</div>
      <div><strong>Location:</strong> Mumbai</div>
      <div><strong>Contact:</strong> johndoe@email.com</div>
      <div><strong>Registered Since:</strong> March 2022</div>
      <h2>Donation History</h2>
      <ul>
        <li>Jan 2024 - Donated at City Hospital (Whole Blood)</li>
        <li>Aug 2023 - Donated at Red Cross (Platelets)</li>
        <li>Apr 2023 - Donated at Community Camp (Whole Blood)</li>
      </ul>
      <section>
        <h2>My Impact</h2>
        <p>You have potentially saved <strong>9 lives</strong>! Thank you for being a hero.</p>
      </section>
      <section>
        <h2>Update Your Info</h2>
        <p>Want to update your contact or location? <a href="#">Click here</a> (feature coming soon).</p>
      </section>
      <section className="facts">
        <h2>Fun Profile Facts</h2>
        <ul>
          <li>Regular donors are less likely to suffer from heart attacks.</li>
          <li>Each donation can help up to 3 people.</li>
        </ul>
      </section>
      <section className="inspire">
        <h2>Keep Donating</h2>
        <p>"Heroes come in all types. Some give blood."</p>
      </section>
    </div>
  );
}

function FindDonors() {
  return (
    <div className="page find-donors">
      <h1>Find Donors</h1>
      <img
        src="https://images.unsplash.com/photo-1512070679279-c2f999098c01?auto=format&fit=crop&w=800&q=80"
        alt="Find donors section"
        className="section-img"
      />
      <p>Looking for a blood donor? Search our database by blood group and location. For urgent needs, call our helpline: <strong>+91 12345 67890</strong></p>
      <form className="find-form">
        <label>Blood Group:
          <select required>
            <option value="">Select</option>
            <option>A+</option><option>A-</option><option>B+</option><option>B-</option>
            <option>AB+</option><option>AB-</option><option>O+</option><option>O-</option>
          </select>
        </label>
        <label>Location:<input type="text" placeholder="City" required /></label>
        <button type="submit">Search</button>
      </form>
      <div className="donor-list">
        <h2>Available Donors (Sample)</h2>
        <ul>
          <li>Jane Smith - B+ - Delhi - <a href="mailto:jane@email.com">Contact</a></li>
          <li>Rahul Kumar - O- - Bangalore - <a href="mailto:rahul@email.com">Contact</a></li>
          <li>Fatima Ali - AB+ - Hyderabad - <a href="mailto:fatima@email.com">Contact</a></li>
        </ul>
        <img
          src="https://images.unsplash.com/photo-1465101178521-c5249f4b7a09?auto=format&fit=crop&w=800&q=80"
          alt="Blood donor search"
          className="section-img"
        />
      </div>
      <section>
        <h2>Emergency?</h2>
        <p>If you need blood urgently, please call our 24/7 helpline: <strong>+91 12345 67890</strong></p>
      </section>
      <section className="facts">
        <h2>Why Find Donors?</h2>
        <ul>
          <li>Quickly connect with people who can help in emergencies.</li>
          <li>Find rare blood groups in your area.</li>
        </ul>
      </section>
      <section className="inspire">
        <h2>Spread the Word</h2>
        <p>"A single pint can save three lives, a single gesture can create a million smiles."</p>
      </section>
    </div>
  );
}

function Login() {
  return (
    <div className="page login">
      <h1>Login to DonateNow</h1>
      <p>Welcome back! Log in to access your profile, donation history, and more.</p>
      <form className="auth-form">
        <label>Email:<input type="email" placeholder="Enter your email" required /></label>
        <label>Password:<input type="password" placeholder="Enter your password" required /></label>
        <button type="submit" disabled>Login (Coming Soon)</button>
      </form>
      <p>Don't have an account? <Link to="/signup">Sign up here</Link></p>
      <section className="inspire">
        <h2>Why Create an Account?</h2>
        <ul>
          <li>Track your donations and impact.</li>
          <li>Get reminders for your next eligible donation.</li>
          <li>Connect with the donor community.</li>
        </ul>
      </section>
    </div>
  );
}

function Signup() {
  return (
    <div className="page signup">
      <h1>Sign Up for DonateNow</h1>
      <p>Join our community of lifesavers! Create your account to start making a difference.</p>
      <form className="auth-form">
        <label>Name:<input type="text" placeholder="Your Name" required /></label>
        <label>Email:<input type="email" placeholder="Enter your email" required /></label>
        <label>Password:<input type="password" placeholder="Create a password" required /></label>
        <label>Confirm Password:<input type="password" placeholder="Confirm your password" required /></label>
        <button type="submit" disabled>Sign Up (Coming Soon)</button>
      </form>
      <p>Already have an account? <Link to="/login">Login here</Link></p>
      <section className="inspire">
        <h2>Benefits of Joining</h2>
        <ul>
          <li>Be part of a lifesaving network.</li>
          <li>Access your donation history anytime.</li>
          <li>Receive exclusive updates and tips.</li>
        </ul>
      </section>
    </div>
  );
}

// Admin page with tabs for dashboard, add request, approve admins, add donation
function Admin() {
  const [tab, setTab] = React.useState('dashboard');
  return (
    <div className="page admin">
      <h1>Admin Panel</h1>
      <div className="admin-tabs">
        <button className={tab === 'dashboard' ? 'active' : ''} onClick={() => setTab('dashboard')}>Dashboard</button>
        <button className={tab === 'addRequest' ? 'active' : ''} onClick={() => setTab('addRequest')}>Add Blood Request</button>
        <button className={tab === 'addDonation' ? 'active' : ''} onClick={() => setTab('addDonation')}>Add Blood Donation</button>
        <button className={tab === 'approveAdmins' ? 'active' : ''} onClick={() => setTab('approveAdmins')}>Approve Admins</button>
      </div>
      <div className="admin-content">
        {tab === 'dashboard' && (
          <div className="admin-dashboard">
            <h2>Overview</h2>
            <ul>
              <li><b>Active Requests:</b> 7</li>
              <li><b>Pending Donations:</b> 3</li>
              <li><b>Admins:</b> 2</li>
              <li><b>Total Donors:</b> 1200+</li>
            </ul>
            <p>Welcome, Admin! Use the tabs above to manage requests, donations, and admins. All changes are reflected instantly for the community.</p>
          </div>
        )}
        {tab === 'addRequest' && (
          <div className="admin-add-request">
            <h2>Add Blood Request</h2>
            <form className="admin-form">
              <label>Patient Name:<input type="text" placeholder="Patient Name" required /></label>
              <label>Blood Group:
                <select required>
                  <option value="">Select</option>
                  <option>A+</option><option>A-</option><option>B+</option><option>B-</option>
                  <option>AB+</option><option>AB-</option><option>O+</option><option>O-</option>
                </select>
              </label>
              <label>Hospital:<input type="text" placeholder="Hospital Name" required /></label>
              <label>City:
                <select required>
                  <option value="">Select City</option>
                  {Object.keys(cityRequests).map(city => <option key={city} value={city}>{city}</option>)}
                </select>
              </label>
              <label>Urgency:
                <select required>
                  <option value="">Select</option>
                  <option>High</option>
                  <option>Medium</option>
                  <option>Low</option>
                </select>
              </label>
              <button type="submit">Add Request</button>
            </form>
          </div>
        )}
        {tab === 'addDonation' && (
          <div className="admin-add-donation">
            <h2>Add Blood Donation</h2>
            <form className="admin-form">
              <label>Donor Name:<input type="text" placeholder="Donor Name" required /></label>
              <label>Blood Group:
                <select required>
                  <option value="">Select</option>
                  <option>A+</option><option>A-</option><option>B+</option><option>B-</option>
                  <option>AB+</option><option>AB-</option><option>O+</option><option>O-</option>
                </select>
              </label>
              <label>City:
                <select required>
                  <option value="">Select City</option>
                  {Object.keys(cityRequests).map(city => <option key={city} value={city}>{city}</option>)}
                </select>
              </label>
              <label>Date:<input type="date" required /></label>
              <button type="submit">Add Donation</button>
            </form>
          </div>
        )}
        {tab === 'approveAdmins' && (
          <div className="admin-approve-admins">
            <h2>Approve Admins</h2>
            <ul className="pending-admins">
              <li>neha@email.com <button>Approve</button></li>
              <li>amit@email.com <button>Approve</button></li>
            </ul>
            <p>Admins can manage requests, donations, and other admins. Only approve trusted users.</p>
          </div>
        )}
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/donate">Donate Now</Link>
      <Link to="/find-donors">Find Donors</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">Sign Up</Link>
      <Link to="/admin">Admin</Link>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div>Contact: info@donatenow.com | +91 12345 67890</div>
      <div>Follow us: <a href="#">Instagram</a> | <a href="#">Facebook</a> | <a href="#">Twitter</a></div>
      <div>&copy; 2024 DonateNow. All rights reserved.</div>
    </footer>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/donate" element={<DonateNow />} />
          <Route path="/find-donors" element={<FindDonors />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
