# Quick Deployment Guide

## Step-by-Step Vercel Deployment

### 1. Prepare Your Code

```bash
# Make sure you're in the project directory
cd facility-description-generator

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit"
```

### 2. Push to GitHub

```bash
# Create a new repository on GitHub first, then:
git remote add origin https://github.com/YOUR_USERNAME/facility-description-generator.git
git branch -M main
git push -u origin main
```

### 3. Deploy to Vercel

#### Via Vercel Dashboard (Easiest):

1. Go to https://vercel.com/login
2. Sign in with GitHub
3. Click "Add New..." → "Project"
4. Import your GitHub repository
5. Configure:
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
6. Add Environment Variables:
   ```
   ANTHROPIC_API_KEY = sk-ant-xxxxx
   ```
7. Click "Deploy"
8. Wait 2-3 minutes
9. Your site will be live at: `https://your-project.vercel.app`

#### Via Vercel CLI (Advanced):

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy (from project directory)
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - What's your project's name? facility-description-generator
# - In which directory is your code located? ./
# - Want to override settings? No

# Add environment variable
vercel env add ANTHROPIC_API_KEY production

# Paste your Anthropic API key when prompted

# Deploy to production
vercel --prod
```

### 4. Test Your Deployment

1. Visit your Vercel URL
2. Try generating a description
3. Verify it works correctly

### 5. Custom Domain (Optional)

In Vercel Dashboard:
1. Go to your project
2. Settings → Domains
3. Add your custom domain
4. Follow DNS configuration instructions

## Environment Variables Reference

### Required:
- `ANTHROPIC_API_KEY` - Your Claude API key from Anthropic

### Optional (for future features):
- `NEXT_PUBLIC_FIREBASE_API_KEY`
- `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
- `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
- `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
- `NEXT_PUBLIC_FIREBASE_APP_ID`

## Getting Your Anthropic API Key

1. Visit: https://console.anthropic.com
2. Sign up or log in
3. Go to "API Keys" section
4. Click "Create Key"
5. Name it (e.g., "Facility Generator")
6. Copy the key (starts with `sk-ant-`)
7. Paste it in Vercel environment variables

## Troubleshooting Deployment

### Build Fails
- Check that all dependencies are in `package.json`
- Verify TypeScript has no errors locally: `npm run build`
- Check Vercel build logs for specific errors

### API Not Working After Deploy
- Verify `ANTHROPIC_API_KEY` is set in Vercel
- Check it's set for "Production" environment
- Redeploy after adding environment variables

### Page Doesn't Load
- Check Vercel deployment status
- Look at Function Logs in Vercel dashboard
- Verify build completed successfully

## Updating Your Deployment

```bash
# Make changes to your code
# Commit and push
git add .
git commit -m "Update description"
git push

# Vercel will automatically redeploy
```

## Monitoring

- View logs: Vercel Dashboard → Your Project → Logs
- Check analytics: Vercel Dashboard → Your Project → Analytics
- Monitor API usage: https://console.anthropic.com

## Cost Information

### Vercel
- **Free tier includes:**
  - Unlimited deployments
  - Automatic HTTPS
  - 100 GB bandwidth/month
  - Serverless functions

### Anthropic Claude API
- **Pay-as-you-go:**
  - ~$3 per million tokens
  - Each description uses ~200-500 tokens
  - Estimated: $0.001 per generation
  - Budget: $10 = ~10,000 descriptions

## Security Best Practices

1. ✅ Never commit `.env.local` to git
2. ✅ Use Vercel environment variables for production
3. ✅ Rotate API keys periodically
4. ✅ Monitor API usage in Anthropic dashboard
5. ✅ Set up usage alerts if available

## Support Resources

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Anthropic Docs**: https://docs.anthropic.com
- **GitHub Issues**: Create issues in your repository

---

**🎉 Congratulations! Your facility description generator is now live!**
