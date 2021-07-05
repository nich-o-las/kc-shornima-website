import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

export default function Blog(): JSX.Element {
  return (
    <Main meta={<Meta title="hello" description="world" />}>
      <div>
        <p>Hello World</p>
      </div>
    </Main>
  );
}
