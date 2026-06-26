import { brevo } from "../config/brevo.js";

export async function sendEmails({ firstName, lastName, email, phone, date, time }) {
const htmlMailUser = `
<!-- EMAIL CLIENT -->
<div class="panel active" id="panel-client" style="font-family:'Jost', sans-serif;">
<table width="100%" cellspacing="0" cellpadding="0" style="background: #f0e8df;padding:40px 0;">
  <tr><td align="center">
    <table width="600" cellspacing="0" cellpadding="0" style="background: #fff9ef;border-radius:16px;overflow:hidden;box-shadow:0 8px 32px rgba(70,19,30,0.14);">
 
      <!-- EN-TÊTE -->
      <tr>
        <td style="background: #6B1F2E;padding:36px 40px;text-align:center;">
          <p style="margin:0 0 4px 0;font-size:11px;letter-spacing:0.20em;text-transform:uppercase;color:rgba(255,249,239,0.45);">ÉCRIRE · RESSENTIR · RÉSONNER</p>
          <h1 style="margin:0;font-size:2rem;font-weight:400;font-style:italic;color:#fff9ef;letter-spacing:0.06em;font-family:'Cormorant Garamond', serif;">Vibrances</h1>
          <p style="margin:8px 0 0;font-size:11px;font-style:italic;color:rgba(255,249,239,0.40);">L'écriture au service des maux</p>
        </td>
       </tr>
 
      <!-- BADGE -->
      <tr>
        <td style="padding:32px 40px 0;text-align:center;">
          <span style="display:inline-block;background: #22c55e;color: #fff9ef;font-size:11px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;padding:6px 18px;border-radius:50px;">✓ Rendez-vous confirmé</span>
         </td>
       </tr>
 
       <!-- CORPS -->
       <tr>
         <td style="padding:28px 40px 0;">
           <h2 style="margin:0 0 12px;font-size:1.5rem;font-weight:400;font-style:italic;color:#6B1F2E;font-family:'Cormorant Garamond', serif;">Bonjour, ${lastName} ${firstName},</h2>
           <p style="margin:0;font-size:14px;color:rgba(70,19,30,0.65);line-height:1.75;">Votre rendez-vous avec Florence a bien été enregistré. Vous trouverez ci-dessous le récapitulatif de votre créneau.</p>
         </td>
       </tr>
 
     <!-- RÉCAP -->
       <tr>
        <td style="padding:24px 40px 0;">
          <table width="100%" cellspacing="0" cellpadding="0" style="background: #6B1F2E;border-radius:12px;overflow:hidden;">
            <tr>
              <td style="padding:24px 28px;">
                <table width="100%" cellspacing="0" cellpadding="0">
                  <tr>
                    <td width="50%" style="padding-bottom:16px;">
                      <p style="margin:0 0 4px;font-size:9px;letter-spacing:0.16em;color:rgba(255,249,239,0.40);">DATE</p>
                      <p style="margin:0;font-size:1.1rem;font-style:italic;color:#fff9ef;">${date}</p>
                    </td>
                    <td width="50%">
                      <p style="margin:0 0 4px;font-size:9px;letter-spacing:0.16em;color:rgba(255,249,239,0.40);">HEURE</p>
                      <p style="margin:0;font-size:1.1rem;font-style:italic;color:#fff9ef;">${time}</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
 
       <!-- MESSAGE -->
       <tr>
         <td style="padding:24px 40px 0;">
           <p style="margin:0;font-size:14px;color:rgba(70,19,30,0.60);line-height:1.75;">En cas d'empêchement, n'hésitez pas à me contacter directement.</p>
           <p style="margin:0;font-size:14px;color:rgba(70,19,30,0.60);line-height:1.75;">vibrances82@gmail.com</p>
         </td>
       </tr>
 
       <!-- CTA -->
       <tr>
         <td style="padding:28px 40px 36px;text-align:center;">
           <a href="#" style="display:inline-block;background: #6B1F2E;color:#fff9ef;text-decoration:none;padding:14px 36px;border-radius:50px;font-size:13px;font-weight:700;letter-spacing:0.08em;">Visiter le site Vibrances →</a>
         </td>
       </tr>
 
       <!-- SÉPARATEUR -->
       <tr><td style="padding:0 40px;"><div style="height:1px;background:rgba(70,19,30,0.10);"></div></td></tr>
 
       <!-- FOOTER -->
       <tr>
         <td style="padding:24px 40px;text-align:center;">
           <p style="margin:0 0 8px;font-size:12px;font-style:italic;color:#6B1F2E;">Vibrances — L'écriture au service des maux</p>
           <p style="margin:0;font-size:11px;color:rgba(70,19,30,0.38);line-height:1.6;">
             Montauban, France - vibrances82@gmail.com<br/>
           </p>
           <p style="margin:10px 0 0;font-size:10px;color:rgba(70,19,30,0.28);">© 2026 Vibrances — Tous droits réservés</p>
         </td>
       </tr>
     </table>
   </td></tr>
 </table>
 </div>
 `;

const htmlEmailAdmin = `
<div class="panel" id="panel-admin" style="font-family:'Jost', sans-serif;">
<table width="100%" cellspacing="0" cellpadding="0" style="background: #f0e8df;padding:40px 0;">
  <tr><td align="center">
    <table width="600" cellspacing="0" cellpadding="0" style="background: #fff9ef;border-radius:16px;overflow:hidden;box-shadow:0 8px 32px rgba(70,19,30,0.14);">
 
      <!-- EN-TÊTE ADMIN -->
      <tr>
        <td style="background: #6B1F2E;padding:24px 40px;text-align:center;">
          <p style="margin:0;font-size:11px;letter-spacing:0.16em;text-transform:uppercase;color: #fff9ef;">NOTIFICATION ADMIN · VIBRANCES</p>
        </td>
      </tr>
 
      <!-- CORPS ADMIN -->
      <tr>
        <td style="padding:32px 40px 0;">
          <h2 style="margin:0 0 16px;font-size:1.3rem;font-weight:400;font-style:italic;color: #6B1F2E;font-family:'Cormorant Garamond', serif;">Nouveau rendez-vous reçu</h2>
          <table width="100%" cellspacing="0" cellpadding="0" style="background: #6B1F2E;border-radius:12px;overflow:hidden;">
            <tr>
              <td style="padding:24px 28px;">
                <table width="100%" cellspacing="0" cellpadding="0">
                  <tr>
                    <td width="50%" style="padding-bottom:14px;">
                      <p style="margin:0 0 3px;font-size:9px;letter-spacing:0.14em;text-transform:uppercase;color:rgba(255,249,239,0.40);">DATE</p>
                      <p style="margin:0;font-style:italic;color: #fff9ef;">${date}</p>
                    </td>
                    <td width="50%">
                      <p style="margin:0 0 3px;font-size:9px;letter-spacing:0.14em;text-transform:uppercase;color:rgba(255,249,239,0.40);">HEURE</p>
                      <p style="margin:0;font-style:italic;color: #fff9ef;">${time} (30 min)</p>
                    </td>
                  </tr>
                  <tr>
                    <td width="50%" style="padding-bottom:14px;">
                      <p style="margin:0 0 3px;font-size:9px;letter-spacing:0.14em;text-transform:uppercase;color:rgba(255,249,239,0.40);">CLIENT</p>
                      <p style="margin:0;font-size:13px;color: #fff9ef;">${firstName} ${lastName}</p>
                    </td>
                  </tr>
                  <tr>
                    <td width="50%">
                      <p style="margin:0 0 3px;font-size:9px;letter-spacing:0.14em;text-transform:uppercase;color:rgba(255,249,239,0.40);">EMAIL</p>
                      <p style="margin:0;font-size:13px;color: #fff9ef;">${email}</p>
                    </td>
                    <td width="50%">
                      <p style="margin:0 0 3px;font-size:9px;letter-spacing:0.14em;text-transform:uppercase;color:rgba(255,249,239,0.40);">TÉLÉPHONE</p>
                      <p style="margin:0;font-size:13px;color: #fff9ef;">${phone}</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
 
      <!-- FOOTER ADMIN -->
      <tr>
        <td style="padding:24px 40px;text-align:center;">
          <p style="margin:0;font-size:11px;color:rgba(70,19,30,0.35);">© 2026 Vibrances — Notification automatique</p>
        </td>
      </tr>
 
    </table>
  </td></tr>
</table>
</div>
 `;
  // EMAIL CLIENT
  await brevo.transactionalEmails.sendTransacEmail({
    sender: {
      email: process.env.EMAIL_USER,
      name: "VIBRANCES",
    },
    to: [{ email }],
    subject: "Confirmation de votre rendez-vous",
    htmlContent: htmlMailUser,
  });

  // EMAIL ADMIN
  await brevo.transactionalEmails.sendTransacEmail({
    sender: {
      email: process.env.EMAIL_USER,
      name: "VIBRANCES",
    },
    to: [{ email: process.env.EMAIL_USER }],
    subject: "Nouveau rendez-vous",
    htmlContent: htmlEmailAdmin,
  });
}