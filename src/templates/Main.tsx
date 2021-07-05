import { ReactNode, useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { AppConfig } from '../utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const router = useRouter();
  return (
    <>
      {props.meta}
      <div className="flex flex-col flex-grow w-full min-h-screen antialiased text-black bg-white">
        <div className="py-2 border-b border-gray-300 ">
          <div className="items-center justify-between max-w-screen-lg px-6 mx-auto lg:flex">
            <div className="flex justify-between text-3xl uppercase font-alfa-slab">
              KC Shornima
              <button
                className="lg:hidden"
                type="button"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {isExpanded ? (
                  <svg
                    style={{
                      stroke: 'black',
                      fill: 'transparent',
                      strokeWidth: 7,
                    }}
                    viewBox="0 0 40 40"
                    width="40"
                    height="40"
                  >
                    <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 100 80" width="40" height="40">
                    <rect width="100" height="20" />
                    <rect y="30" width="100" height="20" />
                    <rect y="60" width="100" height="20" />
                  </svg>
                )}
              </button>
            </div>

            <ul
              className={`lg:flex text-right lg:text-left flex-wrap text-xl
                ${!isExpanded && 'hidden'}`}
            >
              <li className="lg:mr-6">
                <Link href="/">
                  <a
                    className={`text-black border-none
                      ${router.pathname === '/' && 'underline'}`}
                  >
                    Home
                  </a>
                </Link>
              </li>

              <li className="lg:mr-6">
                <Link href="/shows/">
                  <a
                    className={`text-black border-none
                      ${router.pathname === '/shows' && 'underline'}`}
                  >
                    Shows
                  </a>
                </Link>
              </li>

              <li className="lg:mr-6">
                <Link href="/blog/">
                  <a
                    className={`text-black border-none
                      ${router.pathname === '/blog' && 'underline'}`}
                  >
                    Blog
                  </a>
                </Link>
              </li>

              <li className="lg:mr-6">
                <Link href="/contact/">
                  <a
                    className={`text-black border-none
                      ${router.pathname === '/contact' && 'underline'}`}
                  >
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full max-w-screen-lg px-6 mx-auto">
          <div className="w-full">{props.children}</div>
        </div>

        <div className="max-w-screen-lg px-6 py-8 mx-auto mt-auto text-sm text-center border-t border-gray-300 ">
          © Copyright {new Date().getFullYear()} {AppConfig.title}. Powered with{' '}
          <span role="img" aria-label="Love">
            ♥
          </span>{' '}
          by <a href="https://creativedesignsguru.com">CreativeDesignsGuru</a>
          {/*
           * PLEASE READ THIS SECTION
           * We'll really appreciate if you could have a link to our website
           * The link doesn't need to appear on every pages, one link on one page is enough.
           * Thank you for your support it'll mean a lot for us.
           */}
        </div>
      </div>
    </>
  );
};

export { Main };
