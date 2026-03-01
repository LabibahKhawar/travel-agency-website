import { useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Full name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    if (!form.message.trim()) newErrors.message = "Message cannot be empty";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setMessage("");
    if (Object.keys(validateForm()).length > 0) {
      setErrors(validateForm());
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase.from("contact_messages").insert([{
        ...form, submitted_at: new Date().toISOString()
      }]);
      if (error) throw error;
      setMessage("✅ Message sent successfully!");
      setForm({ name: "", phone: "", email: "", message: "" });
    } catch (error) {
      setMessage("❌ Error: Please try again.");
    } finally {
      setLoading(false);
    }
  };
  const inputStyle = (field) => ({
    width: "100%",
    padding: "12px 16px",
    borderRadius: "8px",
    border: `1px solid ${errors[field] ? "#ef4444" : "#d1d5db"}`,
    background: "#ffffff", 
    fontSize: "0.95rem",
    outline: "none",
    marginTop: "5px",
    transition: "0.3s"
  });

  return (
    <div className="section" style={{ padding: "60px 0", background: "#f8fafc" }}>
      <div className="container" style={{ maxWidth: "1000px" }}>
        
        <div style={{ 
          display: "flex", 
          flexWrap: "wrap", 
          borderRadius: "24px", 
          overflow: "hidden", 
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)" 
        }}>
          <div style={{ 
            flex: "1 1 350px", 
            background: "#1e3a8a", 
            padding: "50px", 
            color: "#fff" 
          }}>
            <h2 style={{ fontSize: "2.5rem", fontWeight: "800", color: "#fff", marginBottom: "20px" }}>Contact Us</h2>
            <p style={{ opacity: 0.8, lineHeight: "1.7", marginBottom: "40px" }}>
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>

            <div style={{ display: "grid", gap: "25px" }}>
              <div style={{ display: "flex", gap: "15px" }}>
                <span style={{ fontSize: "1.5rem" }}>📍</span>
                <div><strong>Address:</strong><br /><span style={{ opacity: 0.8 }}>Blue Area, Islamabad</span></div>
              </div>
              <div style={{ display: "flex", gap: "15px" }}>
                <span style={{ fontSize: "1.5rem" }}>📞</span>
                <div><strong>Phone:</strong><br /><span style={{ opacity: 0.8 }}>+92 300 1234567</span></div>
              </div>
              <div style={{ display: "flex", gap: "15px" }}>
                <span style={{ fontSize: "1.5rem" }}>✉️</span>
                <div><strong>Email:</strong><br /><span style={{ opacity: 0.8 }}>info@northerntours.pk</span></div>
              </div>
            </div>
          </div>
          <div style={{ 
            flex: "1.5 1 450px", 
            background: "#fff9f0", 
            padding: "50px" 
          }}>
            <form onSubmit={handleSubmit} style={{ display: "grid", gap: "20px" }}>
              
              {message && (
                <div style={{ 
                  padding: "12px", 
                  borderRadius: "8px", 
                  background: message.includes('✅') ? "#dcfce7" : "#fee2e2",
                  color: message.includes('✅') ? "#166534" : "#991b1b",
                  fontWeight: "600",
                  textAlign: "center"
                }}>
                  {message}
                </div>
              )}

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                <div>
                  <label style={{ fontSize: "0.85rem", fontWeight: "700", color: "#4b5563" }}>Full Name *</label>
                  <input style={inputStyle("name")} value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
                </div>
                <div>
                  <label style={{ fontSize: "0.85rem", fontWeight: "700", color: "#4b5563" }}>Phone</label>
                  <input style={inputStyle("phone")} value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
                </div>
              </div>

              <div>
                <label style={{ fontSize: "0.85rem", fontWeight: "700", color: "#4b5563" }}>Email Address *</label>
                <input style={inputStyle("email")} value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
              </div>

              <div>
                <label style={{ fontSize: "0.85rem", fontWeight: "700", color: "#4b5563" }}>Message *</label>
                <textarea 
                  style={{ ...inputStyle("message"), minHeight: "150px", resize: "none" }} 
                  value={form.message} onChange={e => setForm({...form, message: e.target.value})} 
                />
              </div>

              <button 
                type="submit"
                disabled={loading}
                style={{ 
                  background: "#1e3a8a", 
                  color: "#fff", 
                  border: "none", 
                  padding: "15px", 
                  borderRadius: "8px", 
                  fontWeight: "700",
                  fontSize: "1rem",
                  cursor: "pointer",
                  boxShadow: "0 4px 14px rgba(30, 58, 138, 0.3)"
                }}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}