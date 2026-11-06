import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { APP_ROUTES } from './data';

export default function InvoiceGeneratorInlineLink() {
  const [target, setTarget] = useState(null);

  useEffect(() => {
    setTarget(document.querySelector('main[class*="max-w-[1170px]"] > section:nth-of-type(2) > p'));
  }, []);

  if (!target) return null;

  return createPortal(
    <a className="freelance-generator-link" href={APP_ROUTES.invoices}>
      online invoice generator
    </a>,
    target,
  );
}
