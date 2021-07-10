import { ReactNode, useState, useEffect } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { AppConfig } from '../utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isWindowScrolled, setIsWindowScrolled] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY === 0) {
        setIsWindowScrolled(false);
      } else {
        setIsWindowScrolled(true);
      }
    });
  }, []);

  return (
    <>
      {props.meta}
      <div className="flex flex-col flex-grow w-full min-h-screen antialiased text-blue-900">
        <div
          className={`fixed z-10 w-full py-2 bg-white border-b border-gray-300 transition-all duration-300  ${
            isWindowScrolled || isExpanded ? 'shadow-md' : ''
          }`}
        >
          <div className="items-center justify-between max-w-screen-lg px-6 mx-auto md:flex">
            <div className="flex justify-between text-3xl uppercase font-alfa-slab">
              <Link href="/">
                <a className="text-current border-none">KC Shornima</a>
              </Link>
              <button
                className="md:hidden"
                type="button"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {isExpanded ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 fill-current"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 fill-current"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                    />
                  </svg>
                )}
              </button>
            </div>

            <ul
              className={`md:flex pt-8 md:pt-0 text-right md:text-left flex-wrap text-xl md:space-y-0 space-y-2
                ${!isExpanded && ' hidden'}`}
            >
              <li className="md:mr-6">
                <Link href="/">
                  <a
                    className={`text-current border-none
                      ${router.pathname === '/' && ' underline'}`}
                  >
                    Home
                  </a>
                </Link>
              </li>

              <li className="md:mr-6">
                <Link href="/shows/">
                  <a
                    className={`text-current border-none
                      ${router.pathname === '/shows' && ' underline'}`}
                  >
                    Shows
                  </a>
                </Link>
              </li>

              {/* Commenting this out until ready to release the blog */}
              {/* <li className="md:mr-6">
                <Link href="/blog/">
                  <a
                    className={`text-current border-none
                      ${router.pathname === '/blog' && ' underline'}`}
                  >
                    Blog
                  </a>
                </Link>
              </li> */}

              <li className="md:mr-6">
                <Link href="/contact/">
                  <a
                    className={`text-current border-none
                      ${router.pathname === '/contact' && ' underline'}`}
                  >
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full max-w-screen-lg px-6 pt-20 pb-8 mx-auto">
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
