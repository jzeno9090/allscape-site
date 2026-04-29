'use client';

import { useEffect } from 'react';

const CLIENTHUB_ID = '92f3f5ef-eaaa-4f2c-9178-35059701f70a-426161';
const FORM_URL =
  'https://clienthub.getjobber.com/client_hubs/92f3f5ef-eaaa-4f2c-9178-35059701f70a/public/work_request/embedded_work_request_form?form_id=426161';
const SCRIPT_SRC =
  'https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js';
const STYLESHEET_HREF =
  'https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css';

export function JobberRequestForm() {
  useEffect(() => {
    if (!document.querySelector(`link[href="${STYLESHEET_HREF}"]`)) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = STYLESHEET_HREF;
      link.media = 'screen';
      document.head.appendChild(link);
    }

    if (!document.querySelector(`script[src="${SCRIPT_SRC}"]`)) {
      const script = document.createElement('script');
      script.src = SCRIPT_SRC;
      script.setAttribute('clienthub_id', CLIENTHUB_ID);
      script.setAttribute('form_url', FORM_URL);
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return <div id={CLIENTHUB_ID} />;
}
