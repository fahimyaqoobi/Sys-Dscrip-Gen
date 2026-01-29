'use client';

import { useState } from 'react';

export default function Home() {
  const [description, setDescription] = useState('');
  const [yearInstalled, setYearInstalled] = useState('');
  const [lifetime, setLifetime] = useState('');
  const [observedYearsRemaining, setObservedYearsRemaining] = useState('');
  const [assessmentYear, setAssessmentYear] = useState('2025');
  const [generatedOutput, setGeneratedOutput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Parse shorthand format: /observedYears/lifetime/yearInstalled
  const handleShorthandInput = (value: string) => {
    const match = value.match(/\/(\d+)\/(\d+)\/(\d+)/);
    if (match) {
      setObservedYearsRemaining(match[1]);
      setLifetime(match[2]);
      setYearInstalled(match[3]);
    }
  };

  const handleGenerate = async () => {
    setError('');
    setGeneratedOutput('');

    // Validation
    if (!description || !yearInstalled || !lifetime || !observedYearsRemaining) {
      setError('Please fill in all required fields');
      return;
    }

    const yearsRemaining = parseInt(observedYearsRemaining);
    if (yearsRemaining < 0 || yearsRemaining > 10) {
      setError('Observed years remaining must be between 0 and 10');
      return;
    }

    setLoading(true);

    try {
      // Extract system name from description (first meaningful phrase)
      const systemName = description.split(/[.,;]/)[0].substring(0, 100);

      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          systemName,
          yearInstalled: parseInt(yearInstalled),
          lifetime: parseInt(lifetime),
          observedYearsRemaining: yearsRemaining,
          assessmentYear: parseInt(assessmentYear),
          systemDescription: description,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate description');
      }

      const data = await response.json();
      setGeneratedOutput(data.description);
    } catch (err) {
      setError('Failed to generate description. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedOutput);
    alert('✅ Copied to clipboard!');
  };

  return (
    <main className="min-h-screen p-4 md:p-8 bg-slate-900 text-slate-100 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 mt-6">
          <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent mb-3 tracking-tight">
            Systems Description Generator
          </h1>
          <p className="text-lg text-slate-400 font-light">
            AI-Powered Assessment Tool
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-2xl p-6 border border-slate-700/50">
            <h2 className="text-xl font-semibold text-emerald-400 mb-6 flex items-center gap-2">
              <span className="text-2xl">📝</span>
              System Data
            </h2>

            <div className="space-y-5">
              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  System Description / Observation *
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Paste existing description or simple name like 'Exterior Doors - Metal'..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-slate-100 placeholder-slate-500 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition resize-none text-sm leading-relaxed scrollbar-thin scrollbar-thumb-slate-700"
                />
              </div>

              {/* Shorthand Input */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2 flex justify-between">
                  <span>Quick Input ⚡</span>
                  <span className="text-xs text-slate-500 font-mono">/Obs/Life/Install</span>
                </label>
                <input
                  type="text"
                  placeholder="/3/20/1992"
                  onChange={(e) => handleShorthandInput(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-slate-100 placeholder-slate-600 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition font-mono text-sm tracking-wide"
                />
              </div>

              <div className="grid grid-cols-4 gap-3">
                {/* Assessment Year */}
                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">
                    Assess Year
                  </label>
                  <input
                    type="number"
                    value={assessmentYear}
                    onChange={(e) => setAssessmentYear(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition text-sm text-center font-mono"
                  />
                </div>

                {/* Observed Years */}
                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">
                    Obs (0-10) *
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="10"
                    value={observedYearsRemaining}
                    onChange={(e) => setObservedYearsRemaining(e.target.value)}
                    placeholder="0-10"
                    className="w-full px-3 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition text-sm text-center font-mono font-bold"
                  />
                </div>

                {/* Lifetime */}
                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">
                    Lifetime *
                  </label>
                  <input
                    type="number"
                    value={lifetime}
                    onChange={(e) => setLifetime(e.target.value)}
                    placeholder="150"
                    className="w-full px-3 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition text-sm text-center font-mono"
                  />
                </div>

                {/* Year Installed */}
                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">
                    Install Yr *
                  </label>
                  <input
                    type="number"
                    value={yearInstalled}
                    onChange={(e) => setYearInstalled(e.target.value)}
                    placeholder="1964"
                    className="w-full px-3 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition text-sm text-center font-mono"
                  />
                </div>
              </div>

              {/* Generate Button */}
              <button
                onClick={handleGenerate}
                disabled={loading}
                className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg hover:shadow-emerald-500/20 disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-0.5 active:translate-y-0"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-3">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Simulating Assessment...
                  </span>
                ) : (
                  '✨ GENERATE ASSESSMENT'
                )}
              </button>

              {/* Error Message */}
              {error && (
                <div className="p-4 bg-red-900/20 border border-red-800/50 rounded-xl text-red-400 text-sm font-medium flex items-center gap-2">
                  <span>⚠️</span> {error}
                </div>
              )}

              {/* Rating Guide */}
              <div className="text-[10px] text-slate-500 bg-slate-900/50 p-3 rounded-lg border border-slate-800 font-mono tracking-tight text-center">
                SCALE: 0=Crit-A | 1=Crit-B | 2=Poor | 3-4=Fair | 5-6=Stable | 7-9=Good | 10=Exc
              </div>
            </div>
          </div>

          {/* Output Section */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-2xl p-6 border border-slate-700/50 flex flex-col">
            <h2 className="text-xl font-semibold text-emerald-400 mb-6 flex items-center gap-2">
              <span className="text-2xl">📄</span>
              Output
            </h2>

            {generatedOutput ? (
              <div className="flex-1 flex flex-col gap-4">
                <div className="bg-slate-950 rounded-xl p-5 border border-slate-800 overflow-y-auto flex-1 shadow-inner">
                  <pre className="whitespace-pre-wrap text-sm text-slate-300 leading-7 font-sans">
                    {generatedOutput}
                  </pre>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => { setGeneratedOutput('') }}
                    className="px-4 py-3 rounded-xl border border-slate-600 text-slate-400 hover:bg-slate-700 hover:text-white transition-colors text-sm font-semibold"
                  >
                    🗑️ Clear
                  </button>
                  <button
                    onClick={copyToClipboard}
                    className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 rounded-xl transition-all shadow-lg hover:shadow-indigo-500/20 text-sm flex items-center justify-center gap-2"
                  >
                    📋 Copy Report
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center border-2 border-dashed border-slate-700 rounded-xl bg-slate-800/30 p-8 text-center">
                <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mb-4 text-3xl">
                  📄
                </div>
                <h3 className="text-lg font-medium text-slate-300 mb-1">Awaiting Data</h3>
                <p className="text-sm text-slate-500 max-w-xs">
                  Fill in the system details and click generate to create a forensic assessment.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 border border-slate-700 shadow-lg">
            <span className="text-xs font-semibold text-slate-400 tracking-wide uppercase">
              Built by Fahim Yaqoobi & Claude
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
