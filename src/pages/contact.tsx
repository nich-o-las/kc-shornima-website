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
      <h1 className="text-2xl uppercase font-alfa-slab mt-8">Contact</h1>

      <p className="mt-8 lg:text-xl">
        Fill out this form to contact me regarding booking or anything else and
        I&apos;ll get back to you as soon as possible.
      </p>

      <form
        name="contact"
        data-netlify="true"
        className="flex flex-col w-full mt-12 lg:p-4 lg:border lg:shadow-lg text-gray-900"
        method="POST"
        action="/success"
      >
        <div className="grid lg:grid-cols-2 gap-x-8 gap-y-2">
          <label htmlFor="name" className="lg:text-xl">
            <span className="text-gray-100">Name</span>

            <input type="text" name="name" className="w-full p-2 border mt-1" />
          </label>

          <label htmlFor="email" className="lg:text-xl">
            <span className="text-gray-100">Email</span>

            <input
              type="email"
              name="email"
              className="w-full p-2 border mt-1"
            />
          </label>
        </div>

        <label htmlFor="message" className="lg:text-xl mt-2">
          <span className="text-gray-100">Message</span>

          <textarea
            rows={4}
            name="message"
            className="w-full p-2 border mt-1"
          />
        </label>

        <input type="hidden" name="form-name" value="contact" />

        <button
          type="submit"
          className="block w-full px-4 py-2 mx-auto mt-8 text-xl text-gray-900 bg-gray-100 font-alfa-slab max-w-[20rem] shadow-lg"
        >
          Send
        </button>
      </form>
    </Main>
  );
}
