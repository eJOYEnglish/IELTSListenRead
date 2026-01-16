# Backend Deployment Instructions

Since this application is a static site (frontend only), the "backend" is powered by Google Apps Script (Serverless).

## Step 1: Create Google Sheet
1. Go to [Google Sheets](https://sheets.new) and create a new spreadsheet.
2. Name it "IELTS Strategy Quiz Data".

## Step 2: Add Script
1. In the Google Sheet, go to **Extensions** > **Apps Script**.
2. Delete any code in the code editor (e.g., `function myFunction() {...}`).
3. Open `backend/Code.js` from this project, copy all the content, and paste it into the script editor.
4. (Optional) Rename the project (top left) to "IELTS Quiz Backend".
5. Save the project (Cmd+S or floppy disk icon).

## Step 3: Run Setup (One time)
1. In the script editor toolbar, ensure `setup` is selected in the dropdown.
2. Click **Run**.
3. You will be asked to **Review Permissions**.
   - Click "Review Permissions".
   - Choose your account.
   - You might see "Google hasn't verified this app" (since it's your own new script). Click **Advanced** > **Go to ... (unsafe)**.
   - Click **Allow**.
4. This function simply creates the "Submissions" sheet with the correct headers.

## Step 4: Deploy as Web App
1. Click the blue **Deploy** button (top right) > **New deployment**.
2. Click the gear icon next to "Select type" and choose **Web app**.
3. Fill in the details:
   - **Description**: Initial version
   - **Execute as**: **Me** (your email address). *Critical: This ensures emails are sent from you.*
   - **Who has access**: **Anyone**. *Critical: This allows the public website to send data to your sheet.*
4. Click **Deploy**.
5. Copy the **Web App URL** (starts with `https://script.google.com/macros/s/...`).

## Step 5: Connect Frontend
1. Open `src/pages/Results.tsx` in your code editor.
2. Find the `API_URL` constant (or where the `fetch` call is made).
3. Paste your Web App URL there.
   ```typescript
   const API_URL = "https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec";
   ```
4. Save and rebuild/deploy your frontend.
