import { component$, Slot } from '@builder.io/qwik';
import Footer from '~/components/footer/footer';
import Header from '~/components/header/header';

export default component$(() => {
  return (
    <div class="relative">
      <div class="header-wrapper fixed top-0 left-0 right-0 bg-[#ffffff9e] z-50 h-16 flex flex-row items-center backdrop-blur-lg">
        <Header />
      </div>
      <main class="z-10 pt-16">
        <Slot />
      </main>
      <Footer />
    </div>
  );
});
