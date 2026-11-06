import { useEffect } from 'react';

const downloadFor = (templateNumber, format) => {
  const extension = format === 'excel' ? 'xlsx' : 'docx';
  return {
    href: `/downloads/freelance-invoice-template-${templateNumber}.${extension}`,
    filename: `Freelance-Invoice-Template-${templateNumber}.${extension}`,
  };
};

export default function TemplateDownloadLinks() {
  useEffect(() => {
    const section = document.querySelector('main[class*="max-w-[1170px]"] > section:nth-of-type(2)');
    if (!section) return;

    const templateCards = Array.from(section.querySelectorAll('article')).slice(1, 7);

    templateCards.forEach((card, index) => {
      const templateNumber = index + 1;

      card.querySelectorAll('a').forEach((link) => {
        const label = link.textContent?.trim().toLowerCase() || '';
        const format = label.startsWith('excel')
          ? 'excel'
          : label.startsWith('word')
            ? 'word'
            : null;

        if (!format) return;

        const file = downloadFor(templateNumber, format);
        link.href = file.href;
        link.download = file.filename;
        link.setAttribute('aria-label', `Download template ${templateNumber} for ${format}`);
      });
    });
  }, []);

  return null;
}
