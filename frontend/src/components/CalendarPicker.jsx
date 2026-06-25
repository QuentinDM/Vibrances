import { useRef, useState } from "react";
import { Calendar } from "react-calendar";

export const pad = (v) => String(v).padStart(2, "0");// Utilitaire pour formater les nombres (ex: 9 devient → "09") ajoute un zéro si celui-ci est inférieur à 10
export const HOURS = Array.from({ length: 9 }, (_, i) => 9 + i); // [9,10,...,17]
export const MINUTES = [0, 15, 30, 45];
 
// ─── Sous-composant Drum ──────────────────────────────────────────────────────
export function Drum({ items, index, onSpin, colLabel }) {
  const startY = useRef(null);
 
  const visible = [0].map((offset) => {
    const i = ((index + offset) % items.length + items.length) % items.length;
    return { value: items[i], offset };
  });
 
  const handleMouseDown = (e) => {
    startY.current = e.clientY;
    const onMove = (ev) => {
      const delta = Math.round((startY.current - ev.clientY) / 42);
      if (delta !== 0) { onSpin(delta); startY.current = ev.clientY; }
    };    const onUp = () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
  };
 
  const handleTouchStart = (e) => {
    startY.current = e.touches[0].clientY;
    const onMove = (ev) => {
      const delta = Math.round((startY.current - ev.touches[0].clientY) / 42);
      if (delta !== 0) { onSpin(delta); startY.current = ev.touches[0].clientY; }
    };
    const onEnd = () => {
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", onEnd);
    };
    window.addEventListener("touchmove", onMove);
    window.addEventListener("touchend", onEnd);
  };
 
  return (
    <div className="tp-drum-col">
      <span className="tp-drum-col-label">{colLabel}</span>
      <button type="button" className="tp-drum-arrow" onClick={() => onSpin(-1)}>▲</button>
      <div className="tp-drum-window" onMouseDown={handleMouseDown} onTouchStart={handleTouchStart}>
          {visible.map(({ value, offset }) => (
            <p
              key={offset}
              className="drum-number"
              onClick={() => offset !== 0 && onSpin(offset)}
            >
              {pad(value)}
            </p>
          ))}
      </div>
      <button type="button" className="tp-drum-arrow" onClick={() => onSpin(1)}>▼</button>
    </div>
  );
}

export function CalendarPicker({ date, setDate,  time, setTime }) {
  const today = new Date();

  // Désactive les dimanches
  const bloquerDimanches = ({ date: cellDate, view }) => {
    if (view === 'month') {
      return cellDate.getDay() === 0; // Bloque le dimanche (0)
    }
  };

  // Gère le changement de date et la convertit en chaîne YYYY-MM-DD exigée par votre formulaire
  const handleDateChange = (selectedDate) => {
    if (!selectedDate) return;
    const annee = selectedDate.getFullYear();
    const mois = pad(selectedDate.getMonth() + 1);
    const jour = pad(selectedDate.getDate());
    
    // Met à jour l'état parent avec la string au bon format
    setDate(`${annee}-${mois}-${jour}`);
  };
  // Convertit la string optionnelle "date" en objet Date pour l'affichage initial du calendrier
  const calendarValue = date ? new Date(`${date}T00:00:00`) : null;

  // ── État tambour ──────────────────────────────────────────────────────────

  
  const [hIdx, setHIdx] = useState(
    time ? HOURS.indexOf(Number(time.split(":")[0])) : 0
  );

  const [mIdx, setMIdx] = useState(
    time ? MINUTES.indexOf(Number(time.split(":")[1])) : 0
  );
 
  const onSpinH = (delta) => {
    const next = ((hIdx + delta) % HOURS.length + HOURS.length) % HOURS.length;
    setHIdx(next);
    setTime(`${pad(HOURS[next])}:${pad(MINUTES[mIdx])}`);
  };
 
  const onSpinM = (delta) => {
    const next = ((mIdx + delta) % MINUTES.length + MINUTES.length) % MINUTES.length;
    setMIdx(next);
    setTime(`${pad(HOURS[hIdx])}:${pad(MINUTES[next])}`);
  };

  return (
    <div className="calendar-ui">
      <h4>Choisissez une date</h4>
      <div className="divide-line-calendar" aria-hidden="true"></div>
      <Calendar
        value={calendarValue}
        minDate={today} // Correction: nom de la prop + format Date attendu
        tileDisabled={bloquerDimanches}
        onChange={handleDateChange} // Correction: capture directe de l'objet Date
        locale="fr-FR"
      />

      <h4>Choisissez une heure</h4>
      <div className="divide-line-calendar" aria-hidden="true"></div>
      <div className="tp-wrap">
        <div className="tp-drum-outer">
          <Drum items={HOURS}   index={hIdx} onSpin={onSpinH} colLabel="Heure" />
          <div className="tp-drum-sep">:</div>
          <Drum items={MINUTES} index={mIdx} onSpin={onSpinM} colLabel="Min"   />
        </div>
      </div>
    </div>
  );
}

export default CalendarPicker;
