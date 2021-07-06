import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

export default function ContactSubmissionSuccess(): JSX.Element {
  return (
    <Main
      meta={
        <Meta
          title="Succes!"
          description="Your contact form submission has been successfully processed."
        />
      }
    >
      <h1 className="text-2xl text-center">Form Successfully Submitted!</h1>
      <p className="mt-4 text-xl text-center">
        I&apos;ll get back to you as soon as possible!
      </p>
    </Main>
  );
}
