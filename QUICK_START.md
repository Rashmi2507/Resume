# 🚀 Quick Start Guide (5 Minutes)

## Start Here!

This guide gets your portfolio live in under 5 minutes.

---

## Step 1: Preview Locally (1 min)

```bash
npm install --legacy-peer-deps 2>/dev/null || npm install
npm run dev
```

Opens at `http://localhost:5173` ✅

---

## Step 2: Choose Your Deployment Platform (1 min)

Pick ONE:

### ✨ **Option A: Vercel** (RECOMMENDED - Easiest)
```bash
npm i -g vercel
vercel
# Follow prompts - done!
```
Site lives at: `https://your-project-name.vercel.app`

### 🐙 **Option B: GitHub Pages** (Free)
```bash
git init
git add .
git commit -m "Initial portfolio"
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```
Then in GitHub Settings → Pages → Enable

Site lives at: `https://YOUR_USERNAME.github.io/portfolio`

### 🎯 **Option C: Netlify** (Feature-rich)
```bash
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```
Site lives at: `https://your-site-name.netlify.app`

---

## Step 3: Update Your Info (3 mins)

Edit these files with **your data**:

```
src/components/
├── Hero.tsx              👈 Name, title, social links
├── Experience.tsx        👈 Your jobs
├── Projects.tsx          👈 Your projects
├── Skills.tsx            👈 Your skills
├── Certifications.tsx    👈 Your certs
└── Contact.tsx           👈 Your email
```

Make changes, commit, and push:
```bash
git add .
git commit -m "Update portfolio with my info"
git push
```

**Vercel/Netlify**: Auto-redeploys 🎉 (GitHub Pages: wait 1-2 mins)

---

## That's It! 🎊

Your portfolio is live!

---

## 📚 Next Level (Optional)

Want to customize further? See:
- `CHECKLIST.md` - Complete setup checklist
- `DOCUMENTATION.md` - Full customization guide
- `DEPLOYMENT.md` - Advanced deployment options

---

## 🆘 Stuck? (Quick Fixes)

**Build fails?**
```bash
rm -rf node_modules dist
npm install --legacy-peer-deps
npm run build
```

**Styles broken?**
- Restart dev server (Ctrl+C, then `npm run dev`)
- Clear browser cache (Ctrl+Shift+Del)

**Deploy failed?**
- Check console output for errors
- Verify `npm run build` works locally first
- Check platform-specific docs

---

## 📞 Need Help?

See full documentation:
- `README.md` - Overview
- `DEPLOYMENT.md` - Deployment help
- `DOCUMENTATION.md` - Customization details

---

## 🏁 Checklist

- [ ] Run `npm run dev` locally
- [ ] Choose deployment platform
- [ ] Deploy to live URL
- [ ] Update contact information
- [ ] Share link with industry connections!

---

Done! Welcome to the portfolio club 🎉

---

*For complete guides, see PROJECT_SUMMARY.md*
