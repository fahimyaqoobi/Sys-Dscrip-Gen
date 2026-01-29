# 🆓 Google Gemini API Setup (100% FREE)

## Why Gemini?

- ✅ **Completely FREE** - No credit card required
- ✅ **Generous limits** - 60 requests per minute
- ✅ **High quality** - Gemini 1.5 Flash is fast and smart
- ✅ **Easy setup** - Get API key in 2 minutes

---

## Step 1: Get Your FREE Gemini API Key

### Option A: Quick Method (Recommended)

1. Go to: **https://aistudio.google.com/app/apikey**
2. Click **"Create API Key"**
3. Select **"Create API key in new project"**
4. Copy your API key (starts with `AIza...`)

### Option B: Via Google AI Studio

1. Go to: **https://makersuite.google.com/**
2. Sign in with your Google account
3. Click **"Get API Key"** in the left sidebar
4. Click **"Create API Key"**
5. Copy your key

---

## Step 2: Add API Key to Your Project

### For Local Development:

1. Open your project folder
2. Rename `.env.example` to `.env.local`
3. Edit `.env.local`:
   ```env
   GEMINI_API_KEY=AIzaSy...your-actual-key-here
   ```
4. Save the file

### For Vercel Deployment:

1. Go to your Vercel project dashboard
2. Click **Settings** → **Environment Variables**
3. Add new variable:
   - **Name:** `GEMINI_API_KEY`
   - **Value:** Your Gemini API key
   - **Environment:** Production
4. Click **Save**
5. Redeploy your project

---

## Step 3: Test It!

```bash
npm run dev
```

Open http://localhost:3000 and try generating a description!

---

## API Limits (FREE Tier)

| Feature | Limit |
|---------|-------|
| Requests per minute | 60 |
| Requests per day | 1,500 |
| Tokens per request | Up to 1,000,000 |
| Cost | **$0.00** |

**For typical use:**
- Each description generation = 1 request
- 1,500 descriptions per day = **FREE**
- Perfect for your facility assessments!

---

## Troubleshooting

### "API key not configured"
✅ Make sure your `.env.local` file exists and has the correct key

### "Invalid API key"
✅ Copy the key again from Google AI Studio
✅ Make sure there are no extra spaces

### "Quota exceeded"
✅ You've hit the daily limit (1,500 requests)
✅ Wait until tomorrow or create a new project

### Still not working?
1. Check your internet connection
2. Verify the API key at https://aistudio.google.com/app/apikey
3. Try creating a new API key
4. Check browser console for errors (F12)

---

## Comparison: Gemini vs Anthropic

| Feature | Google Gemini | Anthropic Claude |
|---------|---------------|------------------|
| **Cost** | 100% FREE | $3 per 1M tokens |
| **Speed** | Very Fast | Fast |
| **Quality** | Excellent | Excellent |
| **Limits** | 1,500/day | Pay as you go |
| **Setup** | 2 minutes | Need credit card |

**Recommendation:** Start with Gemini (FREE), upgrade to Claude if you need higher limits.

---

## Security Tips

- ✅ Never commit `.env.local` to git
- ✅ Never share your API key publicly
- ✅ Regenerate key if compromised
- ✅ Use environment variables in production

---

## Need Help?

- **Gemini Docs:** https://ai.google.dev/docs
- **API Key Dashboard:** https://aistudio.google.com/app/apikey
- **Vercel Docs:** https://vercel.com/docs/environment-variables

---

**🎉 You're all set! Enjoy unlimited FREE AI-powered descriptions!**
