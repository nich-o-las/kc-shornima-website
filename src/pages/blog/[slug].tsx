import fs from 'fs';
import { ParsedUrlQuery } from 'querystring';

import { format } from 'date-fns';
import matter from 'gray-matter';
import { GetStaticProps, GetStaticPaths } from 'next';
import ReactMarkdown from 'react-markdown';

import { Meta } from '../../layout/Meta';
import { Main } from '../../templates/Main';

interface Props {
  data: {
    title: string;
    description: string;
    date: string;
  };
  content: string;
}

export default function Blog({
  data: { title, description, date },
  content,
}: Props): JSX.Element {
  return (
    <Main meta={<Meta title={title} description={description} />}>
      <div className="justify-center lg:flex">
        <div
          style={{
            backgroundImage: `url(/assets/images/ricepaper2.png)`,
          }}
          className="hidden px-10 py-8 shadow-lg lg:block"
        >
          <div>
            <div className="flex justify-between text-black max-w-[45rem] mx-auto">
              <h1 className="text-2xl font-semibold text-center">{title}</h1>

              <p className="mt-2 text-center opacity-80">{date}</p>
            </div>

            <ReactMarkdown className="mx-auto mt-6 text-lg prose text-black">
              {content}
            </ReactMarkdown>
          </div>
        </div>

        <div className="block lg:hidden">
          <h1 className="text-2xl text-center font-alfa-slab">{title}</h1>

          <p className="mt-2 text-center opacity-80">{date}</p>

          <ReactMarkdown className="mx-auto mt-2 prose text-blue-900">
            {content}
          </ReactMarkdown>
        </div>
      </div>
    </Main>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync(`${process.cwd()}/content/blog`, 'utf-8');
  const blogs = files.filter((fn) => fn.endsWith('.md'));
  const slugs = blogs.map((blog) => blog.split('.')[0]);
  const paths = slugs.map((slug) => `/blog/${slug}`);

  return {
    paths,
    fallback: false,
  };
};

interface Params extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as Params;
  const content = await import(`/content/blog/${slug}.md`);

  const blogContent = matter(content.default);

  return {
    props: {
      data: {
        ...blogContent.data,
        date: format(new Date(blogContent.data.date), 'MMMM dd, yyyy'),
      },
      content: blogContent.content,
    },
  };
};
