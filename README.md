# Portfolio

**Live site:** [rickyserrano.dev](https://rickyserrano.dev)

My personal portfolio showcasing software projects, PC builds, experience, and skills, with light/dark themes, project case studies, and a contact form.

## Running Locally

Requires Node.js 20.9 or newer. After cloning the repository, run these commands from the project folder:

```sh
npm install
npm run dev
```

Then open http://localhost:3000

| Command | Purpose |
| --- | --- |
| `npm install` | Install the project's dependencies |
| `npm run dev` | Start the development server; saved edits update the site |
| `npm run build` | Create an optimized production build and check TypeScript |
| `npm start` | Serve the last production build; run `npm run build` first |
| `npm run lint` | Check code for ESLint errors and warnings |

## Deployment

Hosted on Vercel. Pushes to `main` automatically build and deploy the production site.

Configure the variables listed under [Contact Form Setup](#contact-form-setup) in the Vercel project's production environment to enable contact messages.

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

## Stack

- **Framework:** Next.js 16 App Router with React 19 and TypeScript.
- **Content:** Local TypeScript data modules and MDX case studies.
- **Styling:** Tailwind CSS 4 with CSS variables and a saved light/dark preference.
- **Contact:** The `/api/contact` route validates submissions, checks a honeypot field, and verifies Cloudflare Turnstile before sending messages through Resend.

## Updating Projects

1. Edit [`app/projects/projectCatalog.ts`](app/projects/projectCatalog.ts) for names, summaries, tags, thumbnails, and display order. Names also set case-study headings and browser titles; thumbnails supply default hero images.
2. Edit `app/projects/<slug>/page.mdx` for the writeup, SEO description, links, galleries, and PC parts. A new project needs both a catalog entry and a matching case-study folder.
3. Place images in `public/projects/` and reference them as `/projects/...`. Gallery entries use `src` and optional `darkSrc` paths with descriptive `alt` text. The gallery's Light/Dark control is independent of the site theme.

## Contact Form Setup

Cloudflare Turnstile loads when a visitor focuses the contact form, and sending stays disabled until verification completes. The `/api/contact` route checks a hidden spam-trap field, validates the submission, and verifies the Turnstile token with Cloudflare. Accepted messages are sent through Resend, with the visitor's email set as the reply-to address.

Sending contact messages requires these values in `.env.local` at the repository root, or in the production host's environment settings. They are not needed to browse the portfolio.

```dotenv
NEXT_PUBLIC_TURNSTILE_SITE_KEY=your_turnstile_site_key
TURNSTILE_SECRET_KEY=your_turnstile_secret_key
RESEND_API_KEY=your_resend_api_key
CONTACT_FROM_EMAIL=sender@example.com
CONTACT_TO_EMAIL=recipient@example.com
```

`CONTACT_FROM_EMAIL` is the sender address; `CONTACT_TO_EMAIL` is the recipient address. The Turnstile secret and Resend API key stay on the server.

Restart the development server after changing these values.

## License

The source code is open source and available under the [MIT License](LICENSE). You're welcome to use it as a starting point for your own portfolio and adapt it to your needs.

My personal photos, branding, personal information, and project writeups are not covered by the MIT license; please replace them with your own. Third-party assets and dependencies remain subject to their respective licenses.

If you use this portfolio, a credit or link back to the [original repository](https://github.com/RickySerrano904/RickySerrano.dev) would be appreciated ❤️
