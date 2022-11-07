import { component$, useStyles$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <footer class="py-8">
      <ul class="flex flex-row items-center justify-center space-x-8 mb-2">
        <li>
          <a href="/docs">Docs</a>
        </li>
        <li>
          <a href="https://github.com/BuilderIO/mitosis">GitHub</a>
        </li>
        <li>
          <a href="https://qwik.builder.io/">Qwik</a>
        </li>
      </ul>
      <div class="text-center">
        <a href="https://www.builder.io/" target="_blank" class="builder">
          Made with ♡ by Builder.io
        </a>
      </div>
    </footer>
  );
});
