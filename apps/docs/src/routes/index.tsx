import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export interface HomeFeature {
  title: string;
  description: string;
  link: string;
}

export const features: HomeFeature[] = [
  {
    title: 'Design Systems Maintainers',
    description:
      'If you are the maintainer of a design system library that started off in one web framework, then you have felt the tremendous amount of maintenance pain and duplication when creating new versions for subsequent frameworks.',
    link: '',
  },
  {
    title: 'Teams using multiple web frameworks',
    description:
      'If you are part of a team/organization that has multiple frontends built in different frameworks, then you know that coordinating your design system across all of them for a cohesive experience and feel is an absolute nightmare.',
    link: '',
  },
  {
    title: 'Teams building web SDKs',
    description:
      'If your team is building SDKs for a product that integrates directly into a web framework and involves providing components to the end user, then Mitosis is a perfect fit for your team.',
    link: '',
  },
];

export default component$(() => {
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Write components once, compile to every framework
            </h1>
            <p class="mb-8 leading-relaxed">
              Mitosis uses a static subset of JSX, inspired by Solid. This means we can parse it to
              a simple JSON structure, then easily build serializers that target various frameworks
              and implementations.
            </p>
            <div class="flex justify-center">
              <a
                href="/docs"
                class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Documentation
              </a>
              <a
                href="https://github.com/BuilderIO/mitosis"
                class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
              >
                GitHub
              </a>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img class="object-cover object-center rounded" alt="hero" src="/logo.svg" />
          </div>
        </div>
      </section>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <h2 class="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-8">
            Why use Mitosis?
          </h2>
          <p class="mb-20 max-w-[400px] mx-auto">
            Mitosis is an incredibly powerful and flexible tool. So far, we have identified 3 broad
            categories of engineering teams that stand to benefit greatly from it.
          </p>
          <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            {features.map(({ title, description }) => (
              <div class="p-4 md:w-1/3 flex">
                <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div class="flex-grow pl-6">
                  <h2 class="text-gray-900 text-lg title-font font-medium mb-2">{title}</h2>
                  <p class="leading-relaxed text-base">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to the Mitosis Docs',
};
