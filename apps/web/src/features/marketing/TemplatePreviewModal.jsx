import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Download, X } from 'lucide-react';

const previewUrl = '/auto-repair-modern-template-preview.png';

export default function TemplatePreviewModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const target = document.querySelector('main[class*="max-w-[1170px]"] > section:nth-of-type(2) > div > article:nth-child(2) > div:first-child');
    if (!target) return undefined;

    const show = () => setOpen(true);
    const onKeyDown = (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        show();
      }
    };

    target.setAttribute('role', 'button');
    target.setAttribute('tabindex', '0');
    target.setAttribute('aria-label', 'Preview Modern auto repair invoice template');
    target.classList.add('professional-template-preview');
    target.addEventListener('click', show);
    target.addEventListener('keydown', onKeyDown);

    return () => {
      target.removeEventListener('click', show);
      target.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const close = (event) => event.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [open]);

  if (!open) return null;

  return createPortal(
    <div className="template-preview-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && setOpen(false)}>
      <section className="template-preview-dialog" role="dialog" aria-modal="true" aria-labelledby="template-preview-title">
        <header className="template-preview-header">
          <div>
            <span>Invoice template preview</span>
            <h2 id="template-preview-title">Modern Auto Repair Invoice</h2>
          </div>
          <button type="button" onClick={() => setOpen(false)} aria-label="Close template preview"><X size={20}/></button>
        </header>
        <div className="template-preview-canvas">
          <img src={previewUrl} alt="Full preview of the Modern Auto Repair invoice template"/>
        </div>
        <footer className="template-preview-actions">
          <button type="button" onClick={() => setOpen(false)}>Close preview</button>
          <a href="/downloads/auto-repair-invoice-template.docx" download="Auto-Repair-Invoice-Template.docx"><Download size={16}/>Download Word Template</a>
        </footer>
      </section>
    </div>,
    document.body,
  );
}
