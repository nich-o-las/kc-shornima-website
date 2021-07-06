import React from 'react';

import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCalendar, faBook } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import { AppConfig } from '../utils/AppConfig';

const Index = () => {
  return (
    <Main
      meta={
        <Meta title={AppConfig.title} description={AppConfig.description} />
      }
    >
      <img
        src="/assets/images/jo-banner-img.png"
        alt="KC Shornima on stage at Zanies in Nashville, TN."
      />

      <div className="py-4 space-y-4 lg:flex lg:space-y-0">
        <div className="lg:text-xl lg:leading-7 lg:max-w-[41rem]">
          <p>
            Growing up on the other side of the world during a civil war is not
            something you expect out of a stand up comic, but KC Shornima has
            not had the life of a typical stand up comic. KC grew up in Nepal
            and moved to the US when she was 12 years old, where she quickly
            found out that the best way to make new friends is by making them
            laugh. KC has written and performed on “You Look Like,” an original
            show on Kevin Hart’s LOL Network.
          </p>

          <p className="mt-4">
            She is a regular at The Comedy Bar and Zanies in Nashville, where
            she has shared the stage with Nate Bargatze, Dusty Slay, Theo Von,
            Steve Byrne, and John Crist, among others. She was named Nashville’s
            best up-and-coming comic of 2020 by Nashville Scene Magazine in
            their “Best of Nashville” issue.
          </p>
        </div>

        <div className="lg:ml-auto lg:pl-4">
          <ul className="w-full font-bold text-current lg:text-2xl lg:text-right">
            <li className="w-full">
              <Link href="/shows">
                <a className="flex items-center w-full space-x-2 text-current lg:space-x-reverse lg:flex-row-reverse">
                  <FontAwesomeIcon icon={faCalendar} />

                  <p>View Upcoming Shows</p>
                </a>
              </Link>
            </li>

            <li>
              <Link href="/contact">
                <a className="flex items-center w-full space-x-2 text-current lg:space-x-reverse lg:flex-row-reverse">
                  <FontAwesomeIcon icon={faBook} />

                  <p>Contact me for booking</p>
                </a>
              </Link>
            </li>

            {/* commenting this out until ready to release the blog */}
            {/* <li>
              <Link href="/blog">
                <a className="flex items-center w-full space-x-2 text-current lg:space-x-reverse lg:flex-row-reverse">
                  <FontAwesomeIcon icon={faPenFancy} />

                  <p>Check out my blog</p>
                </a>
              </Link>
            </li> */}

            <li>
              <a
                target="blank"
                href="https://twitter.com/kcshornomnom?lang=en"
                className="flex items-center w-full space-x-2 text-current lg:space-x-reverse lg:flex-row-reverse"
              >
                <FontAwesomeIcon icon={faTwitter} />

                <p>Follow me on Twitter</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Main>
  );
};

export default Index;
