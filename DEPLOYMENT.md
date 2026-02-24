# 🌐 Deployment Guide

This guide walks you through deploying your portfolio website to GitHub Pages, Vercel, or Netlify.

## Option 1: GitHub Pages (Free & Easy)

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com/new) and create a new repository
2. Name it: `portfolio` or `rashmibharti.github.io` (for username pages)
3. Make it public
4. Don't add README, .gitignore, or license yet

### Step 2: Configure Vite for GitHub Pages

If deploying to `username.github.io`:
```javascript
// vite.config.ts
export default defineConfig({
  plugins: [react()],
})
```

If deploying to a subdirectory like `username.github.io/portfolio`:
```javascript
// vite.config.ts
export default defineConfig({
  base: '/portfolio/',
  plugins: [react()],
})
```

### Step 3: Build & Deploy

```bash
# Build the project
npm run build

# Initialize git if not already done
git init

# Add all files
git add .
git commit -m "Initial commit: Portfolio website"

# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Push to main branch
git branch -M main
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. Go to Settings → Pages
2. Source: Choose "Deploy from a branch"
3. Branch: Select `main` and `/root`
4. Click Save

### Step 5: Configure for gh-pages Branch (Alternative)

For automatic deployment from `gh-pages` branch:

```bash
# Install gh-pages package
npm install --save-dev gh-pages

# Add deployment script to package.json:
"deploy": "npm run build && npx gh-pages -d dist"

# Deploy
npm run deploy
```

Then in GitHub Settings → Pages, select source as `gh-pages` branch.

### Visit Your Site

- **Username repo**: `https://username.github.io`
- **Subdirectory repo**: `https://username.github.io/portfolio`

---

## Option 2: Vercel (Recommended - Easiest)

Best for continuous deployment with GitHub integration.

### Step 1: Connect GitHub to Vercel

1. Go to [Vercel](https://vercel.com)
2. Sign up or log in with GitHub
3. Click "Add New..." → Project
4. Select your portfolio repository
5. Click "Import"

### Step 2: Configuration

Vercel auto-detects Vite projects. Just click:
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

### Step 3: Deploy

Click "Deploy" and Vercel will build & deploy automatically.

### Step 4: Custom Domain (Optional)

1. Go to Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions

### Visit Your Site

- Default: `https://your-project-name.vercel.app`
- Custom domain setup available

---

## Option 3: Netlify

Great alternative with built-in optimization.

### Step 1: Connect GitHub

1. Go to [Netlify](https://netlify.com)
2. Click "Add new site"
3. Select "Connect to Git"
4. Choose GitHub repository
5. Click "Connect"

### Step 2: Build Settings

```
Build command: npm run build
Publish directory: dist
```

### Step 3: Deploy

Click "Deploy site" - Netlify will automatically:
- Clone your repository
- Install dependencies
- Run build command
- Publish to their CDN

### Step 4: Custom Domain (Optional)

1. Go to Site settings → Domain management
2. Add custom domain
3. Update DNS records

### Visit Your Site

- Default: `https://your-site-name.netlify.app`
- Custom domain setup available

---

## Comparison Table

| Feature | GitHub Pages | Vercel | Netlify |
|---------|:---:|:---:|:---:|
| **Cost** | Free | Free | Free |
| **Custom Domain** | Yes | Yes | Yes |
| **Auto Deploy** | Yes | Yes | Yes |
| **Build Speed** | Fast | Very Fast | Fast |
| **Analytics** | Limited | Built-in | Built-in |
| **Serverless Functions** | No | Yes | Yes |
| **EDG (serverless edge)** | No | Yes | Yes |

---

## Continuous Integration

All three platforms support automatic deployments. After initial setup:

```bash
# Just push to main/master branch
git add .
git commit -m "Update portfolio"
git push origin main
```

Your site will automatically rebuild and redeploy!

---

## Post-Deployment Checklist

- [ ] Test site on mobile devices
- [ ] Check all links work
- [ ] Verify dark mode toggle
- [ ] Test form submission (if using service)
- [ ] Check SEO meta tags with browser inspector
- [ ] Verify social media links
- [ ] Test download resume button
- [ ] Run Lighthouse audit for performance

---

## Monitoring & Analytics

### GitHub Pages
- Basic traffic in Settings → Pages

### Vercel
- Built-in Analytics dashboard
- Performance monitoring
- Error tracking

### Netlify
- Built-in Analytics & monitoring
- Error tracking included
- Performance insights

---

## Troubleshooting

### Blank Page After Deploy

**GitHub Pages:**
```bash
# Update vite.config.ts base path
base: '/repository-name/',

# Rebuild and push
npm run build
git add .
git commit -m "Fix base path"
git push
```

**Vercel/Netlify:**
- Check build logs in dashboard
- Verify build command: `npm run build`
- Check output directory: `dist`

### 404 Pages

Add `_redirects` file to `public/` folder:

```
/*    /index.html   200
```

This enables client-side routing on single-page apps.

---

## Performance Tips

1. **Minify Images**: Compress images before adding to project
2. **Use CDN**: All three platforms use global CDNs
3. **Enable Gzip**: Automatically enabled
4. **Lazy Load**: Already configured in React
5. **Cache Busting**: Vite handles automatically with hash-based filenames

---

## Next Steps

1. Choose your platform above
2. Follow the setup steps
3. Monitor build logs
4. Share your live portfolio!

**Your portfolio is ready to wow recruiters! 🚀**
