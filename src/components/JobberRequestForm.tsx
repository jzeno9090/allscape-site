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
    // Stylesheet is idempotent — load once.
    if (!document.querySelector('link[data-jobber-embed-css]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = STYLESHEET_HREF;
      link.media = 'screen';
      link.setAttribute('data-jobber-embed-css', '');
      document.head.appendChild(link);
    }

    // Wipe any prior form HTML the script injected on a previous mount.
    // (React StrictMode double-runs effects in dev; SPA nav remounts also.)
    const mount = document.getElementById(CLIENTHUB_ID);
    if (mount) mount.innerHTML = '';

    // Remove any previous Jobber script so the snippet runs fresh.
    document
      .querySelectorAll('script[data-jobber-embed-js]')
      .forEach((s) => s.remove());

    const script = document.createElement('script');
    script.src = `${SCRIPT_SRC}?_=${Date.now()}`;
    script.setAttribute('clienthub_id', CLIENTHUB_ID);
    script.setAttribute('form_url', FORM_URL);
    script.setAttribute('data-jobber-embed-js', '');
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document
        .querySelectorAll('script[data-jobber-embed-js]')
        .forEach((s) => s.remove());
      const m = document.getElementById(CLIENTHUB_ID);
      if (m) m.innerHTML = '';
    };
  }, []);

  return <div id={CLIENTHUB_ID} />;
}
