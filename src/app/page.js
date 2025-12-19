"use client";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({ title: "", desc: "" });
  const [showIntegrations, setShowIntegrations] = useState(false);

  const openModal = (title, desc) => {
    setModalData({ title, desc });
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  // Close modal when clicking outside
  const handleOutsideClick = (e) => {
    if (e.target.className === "modal") {
      closeModal();
    }
  };

  return (
    <>
      <header>
        <div className="container">
          <h1 className="logo">Giridhar</h1>
          <nav>
            <ul>
              <li><Link href="#about">About</Link></li>
              <li><Link href="#skills">Skills</Link></li>
              <li><Link href="#projects">Projects</Link></li>
              <li><Link href="#contact">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <section id="hero">
        <div className="container">
          <h2>Hello, I&apos;m <span>Giridhar M</span></h2>
          <p>Zoho Developer • Automation Specialist • Creator Expert</p>
          <Link href="#projects" className="btn">View My Work</Link>
        </div>
      </section>

      <section id="about">
        <div className="container">
          <h2>About Me</h2>
          <p>
            I am a Zoho Developer experienced in building scalable business automation systems using Zoho Creator,
            CRM, People, and Flow. My passion lies in solving real-world problems through seamless integration,
            automation, and data-driven solutions that empower businesses.
          </p>
        </div>
      </section>

      <section id="skills">
        <div className="container">
          <h2>Skills</h2>
          <ul className="skills-list">
            <li>Zoho Creator (Deluge scripting, custom apps)</li>
            <li>Zoho CRM (customization, automation, APIs)</li>
            <li>Zoho People (HR automation)</li>
            <li>Zoho Flow (app integrations and triggers)</li>
            <li>Zoho RPA (bot flows and process automation)</li>
            <li>Zoho SalesIQ (real-time visitor tracking & chat automation)</li>
            <li>Workflow design & implementation</li>
            <li id="api-skill" onClick={() => setShowIntegrations(!showIntegrations)}>
              API integrations with third-party systems
              {showIntegrations && (
                <ul className="integration-list" style={{ display: "block" }}>
                  <li>Forth CRM</li>
                  <li>RingCentral</li>
                  <li>Telegram</li>
                  <li>Slack</li>
                  <li>Tor-AI</li>
                  <li>Ampaal</li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </section>

      <section id="projects">
        <div className="container">
          <h2>Projects</h2>
          <div className="project-grid">
            <div
              className="project-card"
              onClick={() => openModal("Sales CRM Automation", "Automated lead assignment and follow-ups in Zoho CRM using Deluge functions, workflows, and blueprints.")}
            >
              <h3>Sales CRM Automation</h3>
              <p>Automated lead assignment and follow-ups in Zoho CRM using Deluge functions, workflows, and blueprints.</p>
            </div>
            <div
              className="project-card"
              onClick={() => openModal("HR Onboarding App", "Built a Zoho Creator app integrated with Zoho People for seamless onboarding and real-time employee data syncing.")}
            >
              <h3>HR Onboarding App</h3>
              <p>Built a Zoho Creator app integrated with Zoho People for seamless onboarding and real-time employee data syncing.</p>
            </div>
            <div
              className="project-card"
              onClick={() => openModal("Invoice Processing RPA", "Developed Zoho RPA bots to extract and record invoice details into Zoho Books automatically.")}
            >
              <h3>Invoice Processing RPA</h3>
              <p>Developed Zoho RPA bots to extract and record invoice details into Zoho Books automatically.</p>
            </div>
            <div
              className="project-card"
              onClick={() => openModal("Creator–Books Integration", "Automated financial data exchange between Zoho Creator and Zoho Books for a manufacturing company’s inventory tracking.")}
            >
              <h3>Creator–Books Integration</h3>
              <p>Automated financial data exchange between Zoho Creator and Zoho Books for a manufacturing company’s inventory tracking.</p>
            </div>
          </div>
        </div>
      </section>

      {modalOpen && (
        <div id="projectModal" className="modal" onClick={handleOutsideClick}>
          <div className="modal-content">
            <span className="close-btn" onClick={closeModal}>&times;</span>
            <h3>{modalData.title}</h3>
            <p>{modalData.desc}</p>
          </div>
        </div>
      )}

      <section id="contact">
        <div className="container">
          <h2>Contact Me</h2>
          <p>Let’s build something powerful with Zoho! Reach out to collaborate or discuss your business automation needs.</p>
          <div style={{ textAlign: "center" }}>
            <a href="mailto:giridharzohoone@gmail.com" className="btn">Send Email</a>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>&copy; 2025 Giridhar | Zoho Developer Portfolio</p>
        </div>
      </footer>
    </>
  );
}
