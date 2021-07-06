import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

export default function Contact(): JSX.Element {
  return (
    <Main meta={<Meta title="hello" description="world" />}>
      <h1 className="text-2xl uppercase font-alfa-slab">Contact</h1>

      <form
        name="contact"
        data-netlify="true"
        className="flex flex-col w-full mt-2 lg:p-4 lg:border lg:shadow-lg"
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

        <input type="hidden" name="form-name" value="pizzaOrder" />

        <button
          type="submit"
          className="block w-full px-4 py-2 mx-auto mt-2 text-xl text-white bg-blue-900 font-alfa-slab max-w-[20rem] shadow-lg"
        >
          Send
        </button>
      </form>
    </Main>
  );
}
