# OptKey Boost

OptKey Boost is a modern typing test web app built with React + Vite. It features timed typing tests, auto-advancing paragraphs, real-time stats, beautiful charts, and Appwrite-backed persistence for per-user history and dashboards.

## Features
- Timed typing tests with durations you choose
- Auto-advance paragraphs until the timer ends
- Live stats: WPM, accuracy, errors, total characters
- Results screen with charts after every test
- Dashboard with WPM and Accuracy trend charts
- History page backed by Appwrite per-user data
- Auth: email/password login and logout

## Tech Stack
- Frontend: React (Vite), Tailwind CSS
- Charts: Recharts
- Auth & DB: Appwrite

## Prerequisites
- Node.js 18+
- An Appwrite instance (Cloud or self-hosted)

## Quick Start
```powershell
# From the Frontend folder
cd d:\WebDev\Optkey_Boost\OptKeyBoost\Frontend
npm install

# Create your environment file
copy .env.example .env
# Edit .env with your Appwrite endpoint, project, database and collection IDs

# Run dev
npm run dev
```

Open the dev URL printed in the terminal (Vite defaults to http://localhost:5173).

## Environment Variables
Create `Frontend/.env` based on `Frontend/.env.example` and set:
- `VITE_APPWRITE_ENDPOINT`: Appwrite API endpoint (e.g., https://cloud.appwrite.io/v1)
- `VITE_APPWRITE_PROJECT_ID`: Your Appwrite Project ID
- `VITE_APPWRITE_DATABASE_ID`: Database ID
- `VITE_APPWRITE_COLLECTION_ID`: Collection ID for typing results

## Appwrite Setup
1. Create a Project in Appwrite.
2. Create a Database and a Collection (e.g., `typingResults`).
3. Add attributes to the collection to match the payload used by the app:
	 - `userId` (string)
	 - `wpm` (number)
	 - `accuracy` (number)
	 - `errors` (number)
	 - `totalCharacters` (number)
	 - `duration` (number) — seconds
	 - `timestamp` (string) — ISO date string
4. Permissions: allow authenticated users to Create and Read their documents. You may use document-level permissions or collection rules depending on your security requirements.
5. Copy the IDs into your `.env`.

See `Frontend/APPWRITE_SETUP.md` for more details.

## Project Structure
```
OptKeyBoost/
	Frontend/
		src/
			components/
				app/ (Header, Footer, Typing components, Results)
				public/
			pages/
				app/ (Dashboard, History, Test)
				auth/ (Login, SignUp)
			hooks/ (typing logic, auth, dashboard states)
			context/ (authContext, typingContext)
			services/ (Appwrite test service)
			config/ (Appwrite client)
		public/
		index.html
		package.json
		vite.config.js
```

## Common Commands
- `npm run dev`: start Vite dev server
- `npm run build`: production build
- `npm run preview`: preview the production build locally

## Usage Notes
- Login with email/password (Appwrite auth). Use the Logout button in the header.
- Start a typing test on the Test page. The timer and stats update live.
- When the test ends, results are saved to Appwrite and shown with charts.
- The Dashboard shows trend charts; History lists past tests.

## Troubleshooting
- Dev server not starting:
	- Ensure Node 18+ and run `npm install` inside `Frontend`.
	- Verify `.env` values and restart `npm run dev` after changes.
- Nothing saves to Appwrite:
	- Check collection attributes and permissions match the fields above.
	- Verify network calls in the browser console; look for Appwrite SDK errors.
- Charts not showing:
	- Ensure you have at least one test result. The app renders charts even for first test.

## License
This project is licensed under the terms in `LICENSE`.
