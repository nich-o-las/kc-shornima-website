import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

export default function Contact(): JSX.Element {
  return (
    <Main
      meta={
        <Meta
          title="KC Shornima | Contact"
          description="Fill out this form for KC Shornima booking inquiries."
        />
      }
    >
      <h1 className="text-2xl uppercase font-alfa-slab">Contact</h1>

      <p className="mt-2 lg:text-xl">
        Fill out this form to contact me regarding booking or anything else and
        I&apos;ll get back to you as soon as possible.
      </p>

      <form
        name="contact"
        data-netlify="true"
        className="flex flex-col w-full mt-4 lg:p-4 lg:border lg:shadow-lg"
        method="POST"
        action="/success"
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

        <input type="hidden" name="form-name" value="contact" />

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
