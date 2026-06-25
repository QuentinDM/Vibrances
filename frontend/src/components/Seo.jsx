import { useEffect } from "react";

export function Seo({ title, description }) {
  useEffect(() => {
    document.title = `${title} | VIBRANCES`;
    const meta = document.querySelector("meta[name='description']");
    if (meta) meta.setAttribute("content", description);
  }, [title, description]);
  return null;
}

export default Seo;
