# PixelCut AI Frontend

Modern React + Vite frontend for an AI-powered background remover. The app lets users upload an image, send it to the backend for background removal, preview the result, download the transparent PNG, and manage basic account/activity flows.

## Highlights

- Drag-and-drop image upload with instant local preview
- Background removal flow connected to the production API
- Polling-based job status handling for async processing
- Download processed PNG output
- User auth flow with register, login, OTP verification, forgot password, and profile pages
- Activity history page for previously generated images
- Marketing pages for home, gallery, features, pricing, and API
- Route skeleton loading powered by `boneyard-js`

## Tech Stack

- React 18
- Vite 5
- Tailwind CSS
- React Router DOM
- Axios
- React Toastify
- GSAP
- Boneyard JS

## Project Structure

```text
src/
  api/          Axios instance and API helpers
  assets/       Static images used across the UI
  bones/        Boneyard skeleton definitions
  components/   Reusable UI components
  pages/        Route-level pages
  sections/     Homepage and landing page sections
  utils/        Small helpers like user activity storage
```

## Environment Setup

This project currently uses the production backend URL from `src/api/axios.js`.

If you want environment-based configuration, add a `.env.local` file in the root and move API values there. At the moment, the repo only includes this example variable:

```bash
VITE_REMOVEBG_API_KEY=your_key_here
```

Note: the current upload flow talks to `https://api.toolsbyprabhat.com` through the shared Axios client, so the README reflects the code as it exists today.

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```

### 3. Create a production build

```bash
npm run build
```

### 4. Preview the production build locally

```bash
npm run preview
```

## Available Scripts

- `npm run dev` - start Vite dev server
- `npm run build` - create production build
- `npm run preview` - preview the production build
- `npm run bones:build` - generate Boneyard skeleton files
- `npm run bones:watch` - regenerate skeletons in watch mode

## Main App Flows

### Background Removal

1. User uploads or drops an image.
2. Frontend sends the file to `/api/v1/remove-bg`.
3. Backend returns a `job_id`.
4. Frontend polls `/api/v1/bg-remove-status/:jobId`.
5. When processing completes, the result image URL is shown and can be downloaded.

### Authentication

The frontend includes pages and API helpers for:

- Register
- Register OTP verification
- Login
- Forgot password
- Forgot password OTP/reset
- Logout
- Profile update

Tokens are stored in `localStorage` and attached automatically through the Axios request interceptor.

## Deployment Notes

- `netlify.toml` is present, so Netlify deployment is already considered in this project.
- `public/_redirects` is included to support SPA routing.
- `dist/` contains the generated build output and should be treated as build artifact.

## Important Notes

- The current API base URL is hardcoded in [src/api/axios.js](/c:/Users/rizwa/Documents/OneDrive/Desktop/TBP%20V1/bg-remover/src/api/axios.js:1).
- Some code comments and strings in the project suggest the app evolved from a `remove.bg` based setup, but the live frontend flow is now using your own backend endpoints.
- If you plan to share this project publicly, moving API URLs and related config into environment variables would make the setup cleaner and safer.

## Future Improvements

- Move backend base URL into `VITE_API_BASE_URL`
- Document backend contract in more detail
- Add testing setup for upload and auth flows
- Add linting and formatting scripts
- Clean legacy commented code from API helpers

## License

No license file is currently included in this repository.
