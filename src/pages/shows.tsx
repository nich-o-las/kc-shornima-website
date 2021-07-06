import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

export default function Shows(): JSX.Element {
  return (
    <Main
      meta={
        <Meta
          title="KC Shornima | Show Calendar"
          description="Full calendar of all of KC's upcoming shows."
        />
      }
    >
      <h1 className="text-2xl uppercase font-alfa-slab">Shows</h1>

      <p className="mt-2 lg:text-xl">
        Come see me live! You can view all of my upcoming dates on this
        calendar.
      </p>

      <iframe
        className="max-w-full mx-auto mt-4 shadow-lg"
        title="show-calendar"
        src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FChicago&amp;src=ajM2dG11ODd2Z2RzZmpsb21scDFybjE3YmdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%237986CB&amp;mode=AGENDA&amp;showPrint=0&amp;showTabs=0&amp;showNav=0&amp;showCalendars=0&amp;showTitle=0"
        width="800"
        height="600"
        frameBorder="0"
        scrolling="no"
      />
    </Main>
  );
}
