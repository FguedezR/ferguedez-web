// Lab items, newest first. The first one is featured in the hero as "Latest".
// pn: part number shown in the Lab hub. notes: annotations drawn over the preview;
// `anchor` matches a data-anchor attribute inside the preview component, `side` is
// where the label sits (desktop only; on mobile they become a list).
export const lab = [
  {
    title: 'MD Converter',
    tagline: 'documents to Markdown, in the browser',
    description: 'Converts PDF, Word, PowerPoint, OpenDocument, RTF, LaTeX and more to clean Markdown, entirely in the browser with no uploads, with OCR for scanned PDFs. It also includes a Markdown reader and a live editor for writing and downloading .md files.',
    tags: ['Tool', 'Client-side', 'Markdown', 'WebAssembly'],
    link: 'https://md.ferguedez.dev/',
    host: 'md.ferguedez.dev',
    preview: 'md',
    pn: 'LAB-003',
    date: '2026.11',
    spec: [['Stack', 'Vanilla JS · WASM'], ['Input', '20 formats']],
    notes: [
      { anchor: 'top', side: 'left', label: 'Privacy', text: 'Nothing leaves the browser' },
      { anchor: 'drop', side: 'left', label: 'Input', text: 'Format detected by byte signature' },
      { anchor: 'split', side: 'right', label: 'Editor', text: 'Live preview, synced scroll' },
    ],
  },
  {
    title: 'Video Converter',
    tagline: 'an in-browser video compressor',
    description: 'A browser-based video compressor for background heroes, with no uploads. Trim the clip, pick a poster frame and export WebM (VP9) and MP4 (H.264) versions, plus a ready-to-paste HTML snippet, as a ZIP.',
    tags: ['Tool', 'Client-side', 'WebCodecs', 'Video optimization'],
    link: 'https://video.ferguedez.dev/',
    host: 'video.ferguedez.dev',
    preview: 'video',
    pn: 'LAB-002',
    date: '2026.11',
    spec: [['Stack', 'WebCodecs · Mediabunny'], ['Output', 'VP9 + H.264']],
    notes: [
      { anchor: 'top', side: 'left', label: 'Privacy', text: 'Nothing leaves the browser' },
      { anchor: 'drop', side: 'right', label: 'Input', text: 'MP4, MOV or WebM' },
      { anchor: 'out', side: 'left', label: 'Output', text: 'WebM, MP4, poster and snippet in a ZIP' },
    ],
  },
  {
    title: 'WebP Converter',
    tagline: 'an in-browser image optimizer',
    description: 'A privacy-first image converter that runs entirely in the browser, with no uploads. Drop images or a whole folder, set quality and maximum size, and download optimized WebP files as a ZIP.',
    tags: ['Tool', 'Client-side', 'Image optimization'],
    link: 'https://webp.ferguedez.dev/',
    host: 'webp.ferguedez.dev',
    preview: 'webp',
    pn: 'LAB-001',
    date: '2026.10',
    spec: [['Input', '7 image formats'], ['Output', 'WebP · ZIP']],
    notes: [
      { anchor: 'top', side: 'left', label: 'Privacy', text: 'Nothing leaves the browser' },
      { anchor: 'drop', side: 'right', label: 'Input', text: 'Single files or whole folders' },
      { anchor: 'quality', side: 'left', label: 'Control', text: 'Quality and maximum size' },
    ],
  },
] as const;
