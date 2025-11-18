import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

export default function CopyButton({ text, label = 'Copy to Clipboard', className = '' }) {
  const [copied, setCopied] = useState(false)

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch (e) {
      console.error('Copy failed', e)
    }
  }

  return (
    <button
      onClick={onCopy}
      className={`group inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white hover:bg-white/10 transition-colors ${className}`}
      aria-label={label}
    >
      {copied ? (
        <>
          <Check className="h-4 w-4 text-emerald-400" />
          <span className="text-emerald-300">Copied</span>
        </>
      ) : (
        <>
          <Copy className="h-4 w-4 text-blue-300" />
          <span>{label}</span>
        </>
      )}
    </button>
  )
}
