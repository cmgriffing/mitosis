import { component$, useStyles$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import clsx from 'clsx';

interface HeaderLink {
  path: string;
  label: string;
}

export const links: HeaderLink[] = [
  {
    path: '/docs',
    label: 'Docs',
  },
  {
    path: 'https://github.com/BuilderIO/mitosis',
    label: 'GitHub',
  },
];

export default component$(() => {
  const { pathname } = useLocation();

  return (
    <header class="flex flex-row items-center p-2 w-full">
      <a class="min-w-[110px] w-auto h-[42px] flex items-center" href="/">
        <img src="/mitosis-logo.svg" alt="Mitosis Logo and name" />
      </a>
      <span class="flex flex-1"></span>

      <nav class="">
        {links.map(({ path, label }) => (
          <a href={path} class={clsx('px-4', { 'font-bold': pathname.startsWith(path) })}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
});
