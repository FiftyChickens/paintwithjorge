import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  template: `
    <section class="contact" aria-labelledby="contact-heading">
      <div class="contact-container">
        <div class="contact-header">
          <p class="eyebrow">LET'S GET STARTED</p>
          <h1 id="contact-heading">Get a Free Painting Estimate</h1>
          <p class="contact-subtitle">Planning a painting or restoration project in the Greater Twin Cities? Contact Jorge to talk through the details.</p>
        </div>
        <div class="contact-grid">
          <article class="contact-card">
            <div class="contact-icon" aria-hidden="true">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <h2>Call Directly</h2>
            <p>Speak with Jorge about your project and estimate.</p>
            <address><a href="tel:+16123872972" class="contact-link">(612) 387-2972 <span aria-hidden="true">↗</span></a></address>
          </article>
          <article class="contact-card">
            <div class="contact-icon" aria-hidden="true">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
                <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m2 6 10 7L22 6" />
              </svg>
            </div>
            <h2>Send Us an Email</h2>
            <p>Share the details of your project with us.</p>
            <address><a href="mailto:jorge@jorgespaintingservices.com" class="contact-link">jorge&#64;jorgespaintingservices.com <span aria-hidden="true">↗</span></a></address>
          </article>
          <article class="contact-card">
            <div class="contact-icon" aria-hidden="true">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <h2>Service Area</h2>
            <p>
              Serving Osseo, Dayton, Maple Grove, Brooklyn Park, Champlin, Rogers, Plymouth,
              Minneapolis, and St. Paul.
            </p>
          </article>
        </div>
      </div>
    </section>
  `,
  styles: `
    .contact { min-height: 65vh; padding: clamp(4rem, 8vw, 7rem) 2rem; background: var(--paper); }
    .contact-container { max-width: 1200px; margin: auto; }
    .contact-header { max-width: 650px; margin-bottom: 3rem; }
    .eyebrow { color: var(--brand); font-size: 0.72rem; font-weight: 700; letter-spacing: 0.14em; margin: 0 0 0.8rem; }
    h1 { font-family: var(--heading-font); font-size: clamp(2.8rem, 5vw, 4.4rem); line-height: 1.1; letter-spacing: -0.04em; font-weight: 400; margin: 0 0 1rem; }
    .contact-subtitle { color: var(--muted); font-size: 1.05rem; margin: 0; }
    .contact-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1.25rem; }
    .contact-card { min-width: 0; padding: 2rem; background: white; border: 1px solid var(--line); border-radius: 4px; }
    .contact-icon { display: grid; place-items: center; width: 48px; height: 48px; color: var(--brand); background: #f7eeea; border-radius: 50%; }
    h2 { margin: 1.5rem 0 0.5rem; font-family: var(--heading-font); font-size: 1.6rem; font-weight: 400; }
    .contact-card p { color: var(--muted); margin: 0 0 1.5rem; }
    address { font-style: normal; }
    .contact-link { color: var(--brand); font-size: 0.9rem; font-weight: 700; text-decoration: none; overflow-wrap: anywhere; }
    .contact-link:hover { text-decoration: underline; }
    .contact-link span { margin-left: 0.25rem; }
    @media (max-width: 900px) { .contact-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
    @media (max-width: 600px) {
      .contact { padding: 4rem 1.25rem; }
      .contact-grid { grid-template-columns: 1fr; }
      .contact-card { padding: 1.5rem; }
    }
  `,
})
export class ContactPage {}
