# Facility Description Generator

AI-powered system description generator for facility capital planning assessments.

## 🚀 Features

- **AI-Powered Generation**: Uses Claude AI to generate natural, professional facility system descriptions
- **Smart Context Awareness**: Considers system age, expected lifetime, and performance to create contextually appropriate conditions
- **Template Library**: Pre-loaded with 30+ common facility systems
- **Real-time Generation**: Instant description generation based on your inputs
- **Mobile-Friendly**: Responsive design works on any device
- **Copy to Clipboard**: One-click copy for easy pasting into your assessment software

## 📋 Prerequisites

- Node.js 18+ installed
- Anthropic API key (get one at https://console.anthropic.com)
- Firebase project (for optional data storage)
- Vercel account (for deployment)

## 🛠️ Setup Instructions

### 1. Clone/Download the Project

```bash
# If using git
git clone <your-repo-url>
cd facility-description-generator

# Or extract the zip file and navigate to the folder
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
# Anthropic API Key (Required)
ANTHROPIC_API_KEY=your_anthropic_api_key_here

# Firebase Configuration (Optional - for future features)
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

### 4. Get Your Anthropic API Key

1. Go to https://console.anthropic.com
2. Sign up or log in
3. Navigate to API Keys
4. Create a new key
5. Copy and paste it into your `.env.local` file

### 5. Run Locally

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## 🌐 Deploy to Vercel

### Option 1: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Go to https://vercel.com
3. Click "New Project"
4. Import your GitHub repository
5. Add environment variables in the Vercel dashboard:
   - Go to Settings → Environment Variables
   - Add `ANTHROPIC_API_KEY` with your API key
6. Click "Deploy"

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Add environment variable
vercel env add ANTHROPIC_API_KEY

# Deploy to production
vercel --prod
```

## 📱 How to Use

1. **Select System**: Choose from the dropdown or type a system name
2. **Enter Assessment Year**: Current year of assessment (default: 2025)
3. **Year Installed**: When the system was originally installed
4. **Expected Lifetime**: How long the system typically lasts
5. **Observed Years Remaining**: Your expert judgment (0-10 scale)
   - 10 = Excellent
   - 7-9 = Good
   - 5-6 = Stable
   - 3-4 = Fair
   - 2 = Poor
   - 1 = Critical-B
   - 0 = Critical-A
6. Click **Generate Description**
7. Copy the generated text to your assessment software

## 🎯 Observed Years Remaining Scale

| Value | Rating | Meaning |
|-------|--------|---------|
| 10 | Excellent | As new, minimal deterioration |
| 7-9 | Good | Normal wear, no repairs needed soon |
| 5-6 | Stable | Functioning but approaching end of life |
| 3-4 | Fair | Minor repairs needed within 5 years |
| 2 | Poor | Significant repairs needed |
| 1 | Critical-B | Major repair/replacement needed |
| 0 | Critical-A | Failed or imminent failure |

## 🔧 Customization

### Adding More System Templates

Edit `lib/systemTemplates.ts` to add more systems:

```typescript
{
  code: "YOUR_CODE",
  name: "Your System Name",
  lifetime: 25,
  description: "Description of the system..."
}
```

### Modifying the UI

- Main page: `app/page.tsx`
- Styles: `app/globals.css`
- Tailwind config: `tailwind.config.js`

## 📁 Project Structure

```
facility-description-generator/
├── app/
│   ├── api/
│   │   └── generate/
│   │       └── route.ts          # API endpoint for AI generation
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Main page
├── lib/
│   ├── firebase.ts               # Firebase configuration
│   ├── systemTemplates.ts        # System template library
│   └── conditionGenerator.ts     # Condition analysis logic
├── .env.example                  # Environment variables template
├── package.json                  # Dependencies
├── next.config.js                # Next.js configuration
├── tailwind.config.js            # Tailwind CSS configuration
└── tsconfig.json                 # TypeScript configuration
```

## 🔐 Security Notes

- Never commit `.env.local` to version control
- Keep your Anthropic API key secure
- Use environment variables in Vercel for production
- Add `.env.local` to your `.gitignore`

## 💡 Tips

- The system name supports autocomplete from the template library
- Lifetime automatically fills when you select a known system
- Generated descriptions are formatted for direct copy-paste
- The AI considers actual age vs. expected age for intelligent descriptions

## 🐛 Troubleshooting

### "API key not configured" error
- Make sure `ANTHROPIC_API_KEY` is set in your `.env.local` file (local) or Vercel environment variables (production)

### Description not generating
- Check your internet connection
- Verify your Anthropic API key is valid
- Check the browser console for errors

### Build errors on Vercel
- Ensure all environment variables are set in Vercel dashboard
- Check that TypeScript types are correct
- Review build logs for specific errors

## 📞 Support

For issues or questions:
1. Check the troubleshooting section above
2. Review the code comments
3. Check Anthropic API status
4. Review Vercel deployment logs

## 📄 License

This project is created for facility assessment professionals. Feel free to modify and use as needed.

## 🎉 Credits

Built with:
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Claude AI (Anthropic)
- Firebase (optional)

---

**Made with ❤️ for Facility Assessment Professionals**
