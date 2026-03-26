import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CERTS = [
  {
    title: "SE Coursera Certificate",
    org: "Coursera",
    date: "2025",
    img: "/certs/se_certi.png",
    link: "/certs/se_certi.png",
  },
  {
    title: "Machine Learning Certificate",
    org: "Coursera",
    date: "2025",
    img: "/certs/ML_certi.png",
    link: "/certs/ML_certi.png",
  },
  {
    title: "Google Cloud Certificate",
    org: "Google Cloud",
    date: "2025",
    img: "/certs/Google_cloud.png",
    link: "/certs/Google_cloud.png",
  },
  {
    title: "New India Vibrant Hackathon",
    org: "Government Initiative",
    date: "2023",
    img: "/certs/new_india_vibrant_kackathon_2023.png",
    link: "/certs/new_india_vibrant_kackathon_2023.png",
  },
];

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section className="container" style={{ padding: "40px 0" }}>
      <div className="card" style={{ background: "#111", borderRadius: 12, padding: 24 }}>
        <h2 style={{ fontSize: "1.8rem", color: "#fff", marginBottom: 4 }}>Certifications 🏅</h2>
        <p className="lead" style={{ color: "#aaa" }}>
          My professional certifications and achievements.
        </p>

        <div
          className="certs-grid"
          style={{
            marginTop: 28,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 20,
          }}
        >
          {CERTS.map((c, idx) => (
            <motion.div
              key={c.title}
              className="cert card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 15px rgba(0, 123, 255, 0.4)",
              }}
              style={{
                background: "#1a1a1a",
                borderRadius: 12,
                padding: 16,
                color: "#fff",
                cursor: "pointer",
              }}
            >
              <img
                src={c.img}
                alt={c.title}
                style={{
                  width: "100%",
                  height: 200,
                  borderRadius: 10,
                  objectFit: "cover",
                  marginBottom: 12,
                }}
              />
              <strong style={{ fontSize: 16, display: "block", marginBottom: 4 }}>{c.title}</strong>
              <div className="muted" style={{ fontSize: 13, color: "#bbb" }}>
                {c.org} • {c.date}
              </div>

              <div style={{ marginTop: 12 }}>
                <button
                  className="btn"
                  onClick={() => setSelectedCert(c)}
                  style={{
                    background: "#007bff",
                    border: "none",
                    color: "white",
                    borderRadius: 6,
                    padding: "6px 14px",
                    cursor: "pointer",
                    fontSize: 14,
                  }}
                >
                  View Certificate
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Preview */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0,0,0,0.9)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1000,
              padding: "20px",
            }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.img
              src={selectedCert.img}
              alt={selectedCert.title}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              style={{
                maxWidth: "90%",
                maxHeight: "85%",
                borderRadius: 10,
                boxShadow: "0 0 25px rgba(255,255,255,0.2)",
              }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
