interface JsonLdProps {
  data: object | object[];
}

/**
 * Renders one or many JSON-LD schema objects into the page <head>.
 * Used by all pages for SEO schema injection.
 */
export function JsonLd({ data }: JsonLdProps) {
  const items = Array.isArray(data) ? data : [data];

  return (
    <>
      {items.map((item, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}
