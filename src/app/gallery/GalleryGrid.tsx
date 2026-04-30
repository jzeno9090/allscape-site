'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import type { GalleryItem, Service } from '@/lib/content';

interface Props {
  items: GalleryItem[];
  services: Service[];
}

export function GalleryGrid({ items, services }: Props) {
  const [active, setActive] = useState<string>('all');

  const categoriesPresent = useMemo(() => {
    const set = new Set<string>();
    items.forEach((i) => i.categories.forEach((c) => set.add(c)));
    return Array.from(set);
  }, [items]);

  const filtered = useMemo(
    () => (active === 'all' ? items : items.filter((i) => i.categories.includes(active))),
    [items, active]
  );

  const orderedCategories = services
    .map((s) => s.slug)
    .filter((slug) => categoriesPresent.includes(slug));

  return (
    <>
      <div className="text-xs tracking-widest uppercase text-green font-bold mb-6">Filter by service</div>
      <div className="flex flex-wrap gap-3 mb-12">
        <button
          type="button"
          onClick={() => setActive('all')}
          aria-pressed={active === 'all'}
          className={
            active === 'all'
              ? 'bg-green text-white px-5 py-2.5 text-sm font-bold uppercase tracking-wide rounded-md shadow-sm'
              : 'bg-white border border-line text-green-ink hover:bg-green hover:text-white hover:border-green px-5 py-2.5 text-sm font-bold uppercase tracking-wide rounded-md transition-colors'
          }
        >
          All Projects
        </button>
        {orderedCategories.map((slug) => {
          const service = services.find((s) => s.slug === slug);
          if (!service) return null;
          const isActive = active === slug;
          return (
            <button
              key={slug}
              type="button"
              onClick={() => setActive(slug)}
              aria-pressed={isActive}
              className={
                isActive
                  ? 'bg-green text-white px-5 py-2.5 text-sm font-bold uppercase tracking-wide rounded-md shadow-sm'
                  : 'bg-white border border-line text-green-ink hover:bg-green hover:text-white hover:border-green px-5 py-2.5 text-sm font-bold uppercase tracking-wide rounded-md transition-colors'
              }
            >
              {service.title}
            </button>
          );
        })}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((item, idx) => (
          <a
            key={item.src}
            href={item.src}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all hover:-translate-y-1 block"
          >
            <div className="aspect-[4/3] overflow-hidden bg-green-soft relative">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                priority={idx < 6}
              />
            </div>
            <div className="p-4">
              <div className="flex flex-wrap gap-1.5">
                {item.categories.map((catSlug) => {
                  const service = services.find((s) => s.slug === catSlug);
                  if (!service) return null;
                  return (
                    <span
                      key={catSlug}
                      className="bg-green-soft text-green-ink text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded"
                    >
                      {service.title}
                    </span>
                  );
                })}
              </div>
            </div>
          </a>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="bg-white rounded-xl p-10 text-center text-gray-warm">
          No projects in this category yet.
        </div>
      )}
    </>
  );
}
