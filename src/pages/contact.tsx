import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

export default function Blog(): JSX.Element {
  return (
    <Main meta={<Meta title="hello" description="world" />}>
      <h1 className="mt-2 text-2xl uppercase font-alfa-slab">Contact</h1>

      <form
        name="contact"
        netlify
        className="flex flex-col w-full p-4 mt-2 border shadow-lg"
      >
        <label htmlFor="name" className="lg:text-xl">
          Name <input type="text" name="name" className="w-full p-2 border" />
        </label>

        <label htmlFor="email" className="lg:text-xl">
          Email{' '}
          <input type="email" name="email" className="w-full p-2 border" />
        </label>

        <label htmlFor="message" className="lg:text-xl">
          Message{' '}
          <textarea rows={4} name="message" className="w-full p-2 border" />
        </label>

        <button
          type="submit"
          className="block w-full px-4 py-2 mx-auto mt-2 text-xl text-white bg-black font-alfa-slab max-w-[20rem] shadow-lg"
        >
          Send
        </button>
      </form>
    </Main>
  );
}
