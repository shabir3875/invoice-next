import { useEffect } from 'react';

const downloads = {
  excel: {
    href: '/downloads/auto-repair-invoice-template.xlsx',
    filename: 'Auto-Repair-Invoice-Template.xlsx',
  },
  word: {
    href: '/downloads/auto-repair-invoice-template.docx',
    filename: 'Auto-Repair-Invoice-Template.docx',
  },
};

export default function TemplateDownloadLinks() {
  useEffect(() => {
    const section = document.querySelector('main[class*="max-w-[1170px]"] > section:nth-of-type(2)');
    if (!section) return;

    section.querySelectorAll('a').forEach((link) => {
      const label = link.textContent?.trim().toLowerCase() || '';
      const file = label.startsWith('excel')
        ? downloads.excel
        : label.startsWith('word')
          ? downloads.word
          : null;

      if (file) {
        link.href = file.href;
        link.download = file.filename;
        link.setAttribute('aria-label', `Download ${file.filename}`);
      }
    });
  }, []);

  return null;
}
