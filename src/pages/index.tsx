import { useRouter } from 'next/router';

import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import { AppConfig } from '../utils/AppConfig';

const Index = () => {
  const router = useRouter();

  return (
    <Main
      meta={
        <Meta title={AppConfig.title} description={AppConfig.description} />
      }
    >
      <img
        className="mt-2"
        src={`${router.basePath}/assets/images/jo-banner-img.png`}
        alt="KC Shornima on stage at Zanies in Nashville, TN."
      />

      <div className="py-4 lg:text-xl lg:leading-7">
        <p>
          Growing up on the other side of the world during a civil war is not
          something you expect out of a stand up comic, but KC Shornima has not
          had the life of a typical stand up comic. KC grew up in Nepal and
          moved to the US when she was 12 years old, where she quickly found out
          that the best way to make new friends is by making them laugh. KC has
          written and performed on “You Look Like,” an original show on Kevin
          Hart’s LOL Network.
        </p>

        <p className="mt-4">
          She is a regular at The Comedy Bar and Zanie’s in Nashville, where she
          has shared the stage with Nate Bargatze, Dusty Slay, Theo Von, Steve
          Byrne, and John Crist, among others. She was named Nashville’s best
          up-and-coming comic of 2020 by the magazine Nashville Scene in their
          “Best of Nashville” issue.
        </p>
      </div>
    </Main>
  );
};

export default Index;
