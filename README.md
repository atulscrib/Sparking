
# Aesthetic Reels Site (Demo)

This is a ready-to-upload demo website for a multi-page, aesthetic "Instagram + Netflix" style site.
It uses a simple static HTML/CSS/JS setup and `content.json` for demo data.
Replace `content.json` with your own entries (URLs to your videos/photos) when ready.

## Files
- index.html       (Home)
- reels.html       (Vertical reels)
- photos.html      (Photo grid)
- profile.html     (Profile page)
- admin.html       (Simple editor to update content.json locally)
- assets/
  - css/styles.css
  - js/app.js
- content.json     (Demo content; edit to add your content)

## How to publish on GitHub Pages
1. Create a new repository on GitHub (public).
2. Upload all files from this folder to the repo (Upload ZIP or push).
3. In the repo settings -> Pages -> Source: `main` branch -> `/root` -> Save.
4. Your site will be available at:
   https://<your-github-username>.github.io/<repo-name>/

## How to add your own content
Edit `content.json` and replace the `url` and `cover` values with your hosted video/photo URLs.
Example entry:
```json
{
  "id": "1",
  "type": "video",
  "title": "My Reel",
  "desc": "Description",
  "url": "https://your-hosted-video.mp4",
  "cover": "https://your-cover.jpg",
  "creator": { "name": "Atul", "avatar": "https://your-avatar.jpg" }
}
```

