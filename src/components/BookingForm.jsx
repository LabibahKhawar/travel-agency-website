import { useEffect, useMemo, useRef, useState } from "react";
import { supabase } from "../lib/supabaseClient";

const GROUP_TYPES = [
  { value: "family", label: "Family" },
  { value: "friends", label: "Friends" },
  { value: "couple", label: "Couple" },
  { value: "corporate", label: "Corporate" },
];
const pad2 = (n) => String(n).padStart(2, "0");
const toYYYYMMDD = (d) => `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
const parseLocalDate = (yyyyMmDd) => {
  if (!yyyyMmDd) return null;
  const [y, m, d] = yyyyMmDd.split("-").map(Number);
  return new Date(y, m - 1, d);
};
const calcInclusiveDays = (startStr, endStr) => {
  const s = parseLocalDate(startStr);
  const e = parseLocalDate(endStr);
  if (!s || !e) return 0;
  const diff = Math.round((e - s) / (24 * 60 * 60 * 1000));
  return diff >= 0 ? diff + 1 : 0;
};

export default function BookingForm({ packageId }) {
  const todayStr = useMemo(() => toYYYYMMDD(new Date()), []);
  const [form, setForm] = useState({
    name: "", phone: "", email: "", adults: 1, children: 0,
    start_date: "", end_date: "", group_type: "family", note: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const refs = useRef({});

  const totalPeople = useMemo(() => Number(form.adults || 0) + Number(form.children || 0), [form.adults, form.children]);
  const totalDays = useMemo(() => calcInclusiveDays(form.start_date, form.end_date), [form.start_date, form.end_date]);
  const validate = (f) => {
    let err = {};
    if (!f.name.trim()) err.name = "Full name is required";
    if (!f.phone.trim()) err.phone = "Phone is required";
    if (totalPeople < 1) err.total = "At least 1 person required";
    if (totalPeople > 50) err.total = "Group size limit is 50";
    if (!f.start_date) err.start = "Select start date";
    if (!f.end_date) err.end = "Select end date";
    if (f.start_date && f.end_date && totalDays <= 0) err.end = "End date must be after start";
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  useEffect(() => { validate(form); }, [form, totalPeople, totalDays]);

  const submit = async (e) => {
    e.preventDefault();
    setTouched({ name: true, phone: true, start_date: true, end_date: true });
    if (!validate(form)) return;

    setLoading(true);
    const { error } = await supabase.from("bookings").insert([{ ...form, package_id: packageId, total_people: totalPeople, total_days: totalDays }]);
    
    if (error) {
      setMsg("❌ Error: Could not submit.");
    } else {
      setMsg("✅ Booking successful! We'll contact you soon.");
      setForm({ name: "", phone: "", email: "", adults: 1, children: 0, start_date: "", end_date: "", group_type: "family", note: "" });
      setTouched({});
    }
    setLoading(false);
  };

  // Modern Styles
  const inputBase = {
    width: "100%",
    padding: "12px 15px",
    borderRadius: "10px",
    border: "1px solid #e2e8f0",
    fontSize: "0.95rem",
    marginTop: "5px",
    outline: "none",
    transition: "0.3s"
  };

  const errorStyle = { color: "#ef4444", fontSize: "0.8rem", marginTop: "4px", fontWeight: "500" };

  return (
    <div style={{ 
      background: "#fff", 
      padding: "30px", 
      borderRadius: "20px", 
      boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
      border: "1px solid #f1f5f9"
    }}>
      <div style={{ borderBottom: "1px solid #f1f5f9", paddingBottom: "20px", marginBottom: "25px" }}>
        <h3 style={{ margin: 0, fontSize: "1.5rem", color: "#0f172a" }}>Book This Trip</h3>
        <p style={{ margin: "5px 0 0", color: "#64748b", fontSize: "0.9rem" }}>Fill the form and get a custom quote.</p>
      </div>

      <form onSubmit={submit} style={{ display: "grid", gap: "20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px" }}>
          <div>
            <label style={{ fontSize: "0.85rem", fontWeight: "600", color: "#475569" }}>Full Name *</label>
            <input 
              style={{...inputBase, borderColor: touched.name && errors.name ? "#ef4444" : "#e2e8f0"}} 
              placeholder="e.g. Abdullah"
              value={form.name} onChange={e => setForm({...form, name: e.target.value})}
              onBlur={() => setTouched({...touched, name: true})}
            />
            {touched.name && errors.name && <div style={errorStyle}>{errors.name}</div>}
          </div>
          <div>
            <label style={{ fontSize: "0.85rem", fontWeight: "600", color: "#475569" }}>Phone *</label>
            <input 
              style={{...inputBase, borderColor: touched.phone && errors.phone ? "#ef4444" : "#e2e8f0"}} 
              placeholder="+92 300..."
              value={form.phone} onChange={e => setForm({...form, phone: e.target.value})}
              onBlur={() => setTouched({...touched, phone: true})}
            />
            {touched.phone && errors.phone && <div style={errorStyle}>{errors.phone}</div>}
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px" }}>
          <div>
            <label style={{ fontSize: "0.85rem", fontWeight: "600", color: "#475569" }}>Start Date</label>
            <input 
              type="date" min={todayStr} style={inputBase} 
              value={form.start_date} onChange={e => setForm({...form, start_date: e.target.value})}
            />
          </div>
          <div>
            <label style={{ fontSize: "0.85rem", fontWeight: "600", color: "#475569" }}>End Date</label>
            <input 
              type="date" min={form.start_date || todayStr} style={inputBase} 
              value={form.end_date} onChange={e => setForm({...form, end_date: e.target.value})}
            />
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px" }}>
          <div>
            <label style={{ fontSize: "0.85rem", fontWeight: "600", color: "#475569" }}>Adults / Children</label>
            <div style={{ display: "flex", gap: "10px" }}>
              <input type="number" min="1" style={inputBase} value={form.adults} onChange={e => setForm({...form, adults: e.target.value})} />
              <input type="number" min="0" style={inputBase} value={form.children} onChange={e => setForm({...form, children: e.target.value})} />
            </div>
          </div>
          <div>
            <label style={{ fontSize: "0.85rem", fontWeight: "600", color: "#475569" }}>Group Type</label>
            <select style={inputBase} value={form.group_type} onChange={e => setForm({...form, group_type: e.target.value})}>
              {GROUP_TYPES.map(g => <option key={g.value} value={g.value}>{g.label}</option>)}
            </select>
          </div>
        </div>
        <div>
          <label style={{ fontSize: "0.85rem", fontWeight: "600", color: "#475569" }}>Special Notes (Optional)</label>
          <textarea 
            style={{...inputBase, minHeight: "80px", resize: "none"}} 
            placeholder="Any specific requirements?"
            value={form.note} onChange={e => setForm({...form, note: e.target.value})}
          />
        </div>
        <div style={{ 
          background: "#f8fafc", padding: "15px", borderRadius: "12px", 
          display: "flex", justifyContent: "space-between", alignItems: "center"
        }}>
          <div style={{ fontSize: "0.9rem", color: "#475569" }}>
            Total: <strong>{totalPeople} People</strong> • <strong>{totalDays} Days</strong>
          </div>
          <button 
            disabled={loading}
            style={{ 
              background: "#0077b6", color: "#fff", border: "none", 
              padding: "12px 25px", borderRadius: "10px", fontWeight: "700",
              cursor: loading ? "not-allowed" : "pointer", opacity: loading ? 0.7 : 1
            }}
          >
            {loading ? "Sending..." : "Book Now"}
          </button>
        </div>

        {msg && <div style={{ textAlign: "center", fontSize: "0.9rem", fontWeight: "600", color: msg.includes("✅") ? "#059669" : "#dc2626" }}>{msg}</div>}
      </form>
    </div>
  );
}


