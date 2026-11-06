import { useEffect } from 'react';

const heading = 'Why Should You Use a Self-Employed Invoice Template?';

const paragraphs = [
  'When you work for yourself, sending a professional invoice is an important part of your business. It helps you make a good impression, build trust with clients, and keep your payments organized.',
  "Whether you're a freelancer, consultant, small business owner, or someone earning extra income from a side job, a professional invoice shows your clients that you take your work seriously.",
  "Using an invoice template saves time and makes billing easier. You can quickly add your client's details, services, prices, and payment information without creating an invoice from scratch.",
  'With InvoNxt, you can create fully customized, professional invoices that match your business. Add your logo, choose your colors, and send clear, well-designed invoices to your clients in minutes.',
];

const secondHeading = 'Why Are Invoice Templates Designed for Freelancers Better?';

const secondParagraphs = [
  'Every freelancer has different invoicing needs. A good invoice template should be simple, professional, and include all the important details, such as client information, services, prices, and payment terms.',
  'At <strong>InvoNxt</strong>, we make invoicing easier for <a href="/#solutions">freelancers</a>. Our easy-to-use <a href="/#generator">invoice generator</a> helps you create professional invoices in minutes.',
  'We also offer <strong>fully customizable freelance invoice templates</strong> designed to fit your work. You can add your logo, change colors, update details, and create invoices that match your business.',
  'Whether you\'re a designer, developer, consultant, or other independent professional, InvoNxt helps you save time and keep your invoicing organized.',
  'Explore our <a href="/#templates">professional invoice templates</a> to find the right design for your business.',
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
      sectionImage.src = '/modern-invoicing-bright-desk.png';
      sectionImage.alt = 'Freelancer creating a professional invoice at a bright modern desk';
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

    const targetSecondHeading = Array.from(document.querySelectorAll('h2')).find((element) =>
      element.textContent?.trim().startsWith('How are Templates Specifically Designed for Freelancers Better'),
    );
    const secondContainer = targetSecondHeading?.parentElement;
    const secondSectionImage = secondContainer?.nextElementSibling?.tagName === 'IMG'
      ? secondContainer.nextElementSibling
      : null;
    const originalSecondImageSrc = secondSectionImage?.getAttribute('src');
    const originalSecondImageAlt = secondSectionImage?.getAttribute('alt');
    const existingSecondParagraphs = secondContainer
      ? Array.from(secondContainer.querySelectorAll(':scope > p'))
      : [];

    if (targetSecondHeading && secondContainer) {
      targetSecondHeading.textContent = secondHeading;

      if (secondSectionImage) {
        secondSectionImage.src = '/invonxt-invoice-creation-workspace.png';
        secondSectionImage.alt = 'InvoNxt invoice creation workspace with customizable freelancer template options';
        secondSectionImage.classList.add('freelancer-second-workspace-image');
      }

      secondParagraphs.forEach((html, index) => {
        const paragraph = existingSecondParagraphs[index] || document.createElement('p');
        paragraph.innerHTML = html;

        if (!existingSecondParagraphs[index]) {
          paragraph.className = 'mt-4 text-xs leading-6 text-slate-600';
          paragraph.dataset.freelanceSecondCopy = 'true';
          secondContainer.appendChild(paragraph);
        }
      });

      secondContainer.querySelectorAll('a').forEach((link) => {
        link.className = 'font-bold text-orange-600 underline underline-offset-4';
      });
    }

    const paymentHeading = Array.from(document.querySelectorAll('h2')).find((element) =>
      element.textContent?.trim() === 'How can I get paid?',
    );
    const paymentContainer = paymentHeading?.parentElement;
    const originalPaymentContent = paymentContainer?.innerHTML;
    const paymentSectionImage = paymentContainer?.previousElementSibling?.tagName === 'IMG'
      ? paymentContainer.previousElementSibling
      : null;
    const originalPaymentImageSrc = paymentSectionImage?.getAttribute('src');
    const originalPaymentImageAlt = paymentSectionImage?.getAttribute('alt');

    if (paymentContainer) {
      if (paymentSectionImage) {
        paymentSectionImage.src = '/invonxt-invoice-workflow-infographic.png';
        paymentSectionImage.alt = 'InvoNxt invoice workflow infographic showing invoice creation, payment methods, and payment tracking';
        paymentSectionImage.classList.add('freelance-payment-workflow-image');
      }
      paymentContainer.classList.add('freelance-payment-guide');
      paymentContainer.innerHTML = `
        <h2>How Can I Get Paid?</h2>
        <p>Once you've created your freelance invoice, the next step is getting paid. With <strong>InvoNxt</strong>, you can send professional invoices, record payments, and keep track of your outstanding balances. Your clients pay you outside InvoNxt using your preferred payment method.</p>
        <h3>Step 1: Choose Your Payment Method</h3>
        <p>Choose a payment method that works best for you and your clients. You can accept payments through bank transfers, PayPal, Payoneer, cash, or other payment services. Make sure your client knows how and where to send the payment.</p>
        <h3>Step 2: Create and Send Your Invoice</h3>
        <p>Use the <a href="https://app.invonxt.com/"><strong>InvoNxt Invoice Generator</strong></a> to create a professional invoice with your client's details, services, prices, and payment instructions. Once it's ready, send it to your client by email or your preferred communication method.</p>
        <h3>Step 3: Record and Track Your Payments</h3>
        <p>After receiving a payment, simply record it in <a href="https://app.invonxt.com/#/invoices"><strong>InvoNxt Invoice Management</strong></a>. You can track unpaid, partially paid, and fully paid invoices, monitor outstanding balances, and keep your payment records organized.</p>
        <p><strong>Note:</strong> InvoNxt does not process payments directly. All payments are received through external methods and recorded manually in InvoNxt.</p>
      `;
    }

    return () => {
      container.querySelectorAll('[data-freelance-why-use-copy="true"]').forEach((element) => element.remove());
      secondContainer?.querySelectorAll('[data-freelance-second-copy="true"]').forEach((element) => element.remove());
      if (secondSectionImage && originalSecondImageSrc) {
        secondSectionImage.classList.remove('freelancer-second-workspace-image');
        secondSectionImage.src = originalSecondImageSrc;
        secondSectionImage.alt = originalSecondImageAlt || '';
      }
      if (paymentContainer && originalPaymentContent) {
        paymentContainer.classList.remove('freelance-payment-guide');
        paymentContainer.innerHTML = originalPaymentContent;
      }
      if (paymentSectionImage && originalPaymentImageSrc) {
        paymentSectionImage.classList.remove('freelance-payment-workflow-image');
        paymentSectionImage.src = originalPaymentImageSrc;
        paymentSectionImage.alt = originalPaymentImageAlt || '';
      }
      if (sectionImage && originalImageSrc) {
        sectionImage.classList.remove('freelancer-modern-workspace-image');
        sectionImage.src = originalImageSrc;
        sectionImage.alt = originalImageAlt || '';
      }
    };
  }, []);

  return null;
}
