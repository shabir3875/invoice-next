import { useEffect } from 'react';

const heading = 'Why Should You Use a Self-Employed Invoice Template?';

const paragraphs = [
  'When you work for yourself, sending a professional invoice is an important part of your business. It helps you make a good impression, build trust with clients, and keep your payments organized.',
  "Whether you're a freelancer, consultant, small business owner, or someone earning extra income from a side job, a professional invoice shows your clients that you take your work seriously.",
  "Using an invoice template saves time and makes billing easier. You can quickly add your client's details, services, prices, and payment information without creating an invoice from scratch.",
  'With InvoNxt, you can create fully customized, professional invoices that match your business. Add your logo, choose your colors, and send clear, well-designed invoices to your clients in minutes.',
];

export default function FreelanceWhyUseCopy() {
  useEffect(() => {
    const targetHeading = Array.from(document.querySelectorAll('h2')).find((element) =>
      element.textContent?.trim().startsWith('Why Should I Use a Self-Employed Invoice Template'),
    );

    if (!targetHeading) return undefined;

    const container = targetHeading.parentElement;
    const existingParagraphs = Array.from(container.querySelectorAll(':scope > p'));
    const sectionImage = container.previousElementSibling?.tagName === 'IMG'
      ? container.previousElementSibling
      : null;
    const originalImageSrc = sectionImage?.getAttribute('src');
    const originalImageAlt = sectionImage?.getAttribute('alt');

    targetHeading.textContent = heading;

    if (sectionImage) {
      sectionImage.src = '/freelancer-modern-workspace.png';
      sectionImage.alt = 'Freelancer creating and customizing an invoice in a modern workspace';
      sectionImage.classList.add('freelancer-modern-workspace-image');
    }

    paragraphs.forEach((text, index) => {
      const paragraph = existingParagraphs[index] || document.createElement('p');
      paragraph.textContent = text;

      if (!existingParagraphs[index]) {
        paragraph.className = 'mt-4 text-xs leading-6 text-slate-600';
        paragraph.dataset.freelanceWhyUseCopy = 'true';
        container.appendChild(paragraph);
      }
    });

    return () => {
      container.querySelectorAll('[data-freelance-why-use-copy="true"]').forEach((element) => element.remove());
      if (sectionImage && originalImageSrc) {
        sectionImage.classList.remove('freelancer-modern-workspace-image');
        sectionImage.src = originalImageSrc;
        sectionImage.alt = originalImageAlt || '';
      }
    };
  }, []);

  return null;
}
