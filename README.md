# Portfolio

My personal portfolio built with Next.js, React, TypeScript, Tailwind CSS, and MDX to showcase selected projects, technical experience, and professional background. The site includes a responsive homepage, reusable content sections, detailed project case studies, and a contact form for visitors to get in touch.

## Screenshots

<table>
  <tr>
    <th width="50%">Light theme</th>
    <th width="50%">Dark theme</th>
  </tr>
  <tr>
    <td><img src="public/readme-screenshots/01%20home.png" alt="Portfolio home section in light theme" width="100%" /></td>
    <td><img src="public/readme-screenshots/01%20home-dark.png" alt="Portfolio home section in dark theme" width="100%" /></td>
  </tr>
  <tr>
    <td><img src="public/readme-screenshots/02%20experience.png" alt="Portfolio experience section in light theme" width="100%" /></td>
    <td><img src="public/readme-screenshots/02%20experience-dark.png" alt="Portfolio experience section in dark theme" width="100%" /></td>
  </tr>
  <tr>
    <td><img src="public/readme-screenshots/03%20skills.png" alt="Portfolio skills section in light theme" width="100%" /></td>
    <td><img src="public/readme-screenshots/03%20skills-dark.png" alt="Portfolio skills section in dark theme" width="100%" /></td>
  </tr>
  <tr>
    <td><img src="public/readme-screenshots/04%20projects.png" alt="Portfolio projects section in light theme" width="100%" /></td>
    <td><img src="public/readme-screenshots/04%20projects-dark.png" alt="Portfolio projects section in dark theme" width="100%" /></td>
  </tr>
  <tr>
    <td><img src="public/readme-screenshots/05%20contact.png" alt="Portfolio contact section in light theme" width="100%" /></td>
    <td><img src="public/readme-screenshots/05%20contact-dark.png" alt="Portfolio contact section in dark theme" width="100%" /></td>
  </tr>
</table>

## Lighthouse Results

The portfolio achieved a perfect **100/100 across all four Lighthouse categories: Performance, Accessibility, Best Practices, and SEO**, in the desktop PageSpeed Insights audit on September 29, 2026.

![Desktop PageSpeed Insights report showing Lighthouse scores of 100 for Performance, Accessibility, Best Practices, and SEO](public/readme-screenshots/lighthouse%20score.png)

## Architecture and Stack

- **Framework:** Next.js App Router with React and TypeScript.
- **Content:** Typed project, experience, education, certification, and skill data managed in local content modules.
- **Case studies:** MDX project pages using a shared layout for consistent summaries, screenshots, problem statements, implementation notes, and project details.
- **Styling:** Tailwind CSS with CSS variables for theme-aware color tokens and responsive layouts.
- **Assets:** Project screenshots served from the public project asset directory.
- **Contact:** Cloudflare Turnstile protects the contact form before messages are sent through Resend.

## Environment Variables

The contact form requires these values in local development and production:

- `NEXT_PUBLIC_TURNSTILE_SITE_KEY`
- `TURNSTILE_SECRET_KEY`
- `RESEND_API_KEY`
- `CONTACT_FROM_EMAIL`
- `CONTACT_TO_EMAIL`

## Design and UX Decisions

- Kept the homepage focused on scanning: hero, about, experience, projects, skills, and contact sections are easy to move through without extra navigation friction.
- Used project cards with screenshots and tags so visitors can quickly understand the type, stack, and purpose of each build.
- Added dedicated case-study pages for projects that need more explanation than a card can provide.
- Used consistent spacing, typography, and theme tokens so the site feels cohesive across sections.

## Maintainability Choices

- Project metadata lives in one typed content source, while long-form writeups live in MDX pages.
- The shared case-study layout reduces repeated markup across project pages.
- Image paths and alt text are defined alongside project content to keep visual assets easy to audit.
- The structure leaves room for additional projects, live links, repositories, and expanded technical notes as the portfolio evolves.
