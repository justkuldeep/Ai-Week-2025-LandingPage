# AI Week Nexus

A polished, responsive single-page site built with Vite + React + TypeScript and a shadcn/ui-inspired component system. This repository powers the website for "AI Week" — an educational event featuring sessions, speakers, team, timeline, registration, and venue information.

## Key features

- Modern frontend stack: Vite, React 18, TypeScript.
- TailwindCSS-based design system with Radix UI primitives and custom shadcn-style components.
- Sections for Hero, About, Speakers, Team, Timeline, Venue, and Registration.
- Embedded Google Maps iframe for venue with a clickable overlay that opens Google Maps directions.

## Tech stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Radix UI primitives
- lucide-react icons

## Prerequisites

- Node.js 18+ (recommended)
- npm, pnpm, or bun (project uses standard npm scripts; adapt if using pnpm or bun)

## Getting started (development)

1. Install dependencies:

```powershell
npm install
```

2. Start the dev server (Vite):

```powershell
npm run dev
```

3. Open the URL shown by Vite (usually http://localhost:5173) and navigate the site.

## Build and preview

Build for production:

```powershell
npm run build
```

Preview the production build locally:

```powershell
npm run preview
```

## Linting

Run ESLint across the repository:

```powershell
npm run lint
```

## Map / Venue details

- The Venue section `src/components/Venue.tsx` contains an embedded Google Maps iframe centered on:
  - Indore Institute of Science and Technology
  - Coordinates: `22.72480938511907, 75.87359931495674`

- To improve usability, the map has a transparent overlay so that clicking anywhere on the map opens Google Maps directions in a new tab. The overlay URL uses the Google Maps Directions endpoint:

```
https://www.google.com/maps/dir/?api=1&destination=22.72480938511907,75.87359931495674&travelmode=driving
```

- If you'd prefer a fully interactive map (custom markers, info windows), consider replacing the iframe with a JavaScript map implementation (Google Maps JS API with an API key, or an OpenStreetMap solution using Leaflet).

## Contributing

Contributions are welcome. Suggested workflow:

1. Fork the repository.
2. Create a descriptive branch: `git checkout -b feat/your-feature`.
3. Make changes and run the dev server and linting locally.
4. Commit with clear messages and open a pull request describing the change.

Please include screenshots for UI changes and ensure TypeScript compiles.

## License

Specify a license for this project (e.g., MIT) by adding a `LICENSE` file to the repository. If no license is provided the repository default applies.

## Contact

For questions or further changes, please open an issue or reach out via the repository.
