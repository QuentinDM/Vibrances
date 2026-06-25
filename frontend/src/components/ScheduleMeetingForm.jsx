import { useRef, useState } from "react";
import toast from "react-hot-toast";
const API_URL = import.meta.env.VITE_API_URL;

export function ScheduleMeetingForm({ date, time }) {
  const [duration] = useState("30");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isB2B, setIsB2B] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  
  const lastNameRef = useRef();//utilisée pour le focus en cas d'erreur de validation
  const firstNameRef = useRef();//utilisée pour le focus en cas d'erreur de validation
  const emailRef = useRef();// utilisée pour le focus en cas d'erreur de validation
  const phoneRef = useRef();// utilisée pour le focus en cas d'erreur de validation

  const pad = (n) => String(n).padStart(2, "0");

  const formatDateTime = (date, time) =>
    `${date} ${time}:00`;

  const getEndingAt = (date, time, minutes) => {
    const d = new Date(`${date}T${time}:00`);
    d.setMinutes(d.getMinutes() + Number(minutes));

    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:00`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    switch (true) {
      case !lastName.trim():
        toast.dismiss();
        toast.error("Veuillez renseigner votre nom.");
        lastNameRef.current?.focus();
        return;

      case !firstName.trim():
        toast.dismiss();
        toast.error("Veuillez renseigner votre prénom.");
        firstNameRef.current?.focus();
        return;

      case !email.trim():
        toast.dismiss();
        toast.error("Veuillez renseigner votre email.");
        emailRef.current?.focus();
        return;

      case !phone.trim():
        toast.dismiss();
        toast.error("Veuillez renseigner votre téléphone.");
        phoneRef.current?.focus();
        return;

      default:
        break;
    }

    if (!date || !time) {
      toast.dismiss();
      toast.error("Choisissez une date et une heure.");
      return;
    }

    setSubmitting(true);

    try {
      const starting_at = formatDateTime(date, time);
      const ending_at = getEndingAt(date, time, duration);
      setSubmitting(true);
      toast.loading("Réservation en cours...");

      const response = await fetch(`${API_URL}/api/kmeet/rooms`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          starting_at,
          ending_at,
          timezone: "Europe/Zurich",
          title: "Entretien découverte VIBRANCES",
          description: `Nom: ${lastName}\nPrénom: ${firstName}\nEmail: ${email}\nTéléphone: ${phone}\nType: ${isB2B ? 'B2B' : 'Particulier'}`,
        }),
      });

      const data = await response.json();

      if (!response.ok || data.result !== "success") {
        toast.dismiss();
        toast.error("Erreur de réservation.");
      } else {
        toast.dismiss();
        toast.success("Rendez-vous confirmé !");
        try {
          await fetch(`${API_URL}/api/bookings`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            date: date,
            time: time,
            type: isB2B,
          })
        });
        } catch (err) {
          toast.dismiss();
          toast.error("Erreur lors de la soumission du formulaire.");
        }
      }
    } catch (err) {
      toast.dismiss();
      toast.error("Erreur réseau.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form className="cs-schedule-form" onSubmit={handleSubmit}>
      <label>
        Nom
        <input
          type="text"
          value={lastName}
          ref={lastNameRef}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Nom"
        />
      </label>
      <label>
        Prénom
        <input
          type="text"
          value={firstName}
          ref={firstNameRef}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Prénom"
        />
      </label>
      <label>
        Email
        <input
          type="email"
          value={email}
          ref={emailRef}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="vous@exemple.com"
        />
      </label>
      <label>
        Téléphone
        <input
          type="tel"
          value={phone}
          ref={phoneRef}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Téléphone"
        />
      </label>
      <label>
        Type de demande
        <select
          value={isB2B ? "b2b" : "particulier"}
          onChange={(e) => setIsB2B(e.target.value === "b2b")}
        >
          <option value="particulier">Particulier</option>
          <option value="b2b">Entreprise</option>
        </select>
      </label>
      <button type="submit" className="cs-submit" disabled={submitting}>
        {submitting ? "En cours..." : "Planifier un rendez-vous"}
      </button>
    </form>
  );
}

export default ScheduleMeetingForm;
