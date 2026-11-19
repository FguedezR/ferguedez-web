// Lab items, newest first. The first one is featured in the hero as "Latest".
export const lab = [
  {
    title: 'MD Converter',
    tagline: 'documents to Markdown, in the browser',
    description: 'Converts PDF, Word, PowerPoint, OpenDocument, RTF, LaTeX and more to clean Markdown, entirely in the browser with no uploads, with OCR for scanned PDFs. It also includes a Markdown reader and a live editor for writing and downloading .md files.',
    tags: ['Tool', 'Client-side', 'Markdown', 'WebAssembly'],
    link: 'https://md.ferguedez.dev/',
    preview: 'md',
  },
  {
    title: 'Video Converter',
    tagline: 'an in-browser video compressor',
    description: 'A browser-based video compressor for background heroes, with no uploads. Trim the clip, pick a poster frame and export WebM (VP9) and MP4 (H.264) versions, plus a ready-to-paste HTML snippet, as a ZIP.',
    tags: ['Tool', 'Client-side', 'WebCodecs', 'Video optimization'],
    link: 'https://video.ferguedez.dev/',
    preview: 'video',
  },
  {
    title: 'WebP Converter',
    tagline: 'an in-browser image optimizer',
    description: 'A privacy-first image converter that runs entirely in the browser, with no uploads. Drop images or a whole folder, set quality and maximum size, and download optimized WebP files as a ZIP.',
    tags: ['Tool', 'Client-side', 'Image optimization'],
    link: 'https://webp.ferguedez.dev/',
    preview: 'webp',
  },
] as const;
