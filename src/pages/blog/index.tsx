import fs from 'fs';

import React from 'react';

import { format } from 'date-fns';
import matter from 'gray-matter';
import { GetStaticProps } from 'next';
import Link from 'next/link';

import { Meta } from '../../layout/Meta';
import { Main } from '../../templates/Main';

interface IFeaturedPost {
  data: {
    date: string;
    description: string;
    isFeatured: boolean;
    title: string;
    slug: string;
  };
  content: string;
}

export const getStaticProps: GetStaticProps = async () => {
  const files = fs.readdirSync(`${process.cwd()}/content/blog`, 'utf-8');
  const blogs = files.filter((fn) => fn.endsWith('.md'));
  const data = blogs.map((blog) => {
    const path = `${process.cwd()}/content/blog/${blog}`;
    const rawContent = fs.readFileSync(path, {
      encoding: 'utf-8',
    });

    return { rawContent, slug: blog.split('.')[0] };
  });

  return {
    props: {
      blogPosts: data,
    },
  };
};

interface Props {
  blogPosts: { rawContent: IFeaturedPost; slug: string }[];
}

export default function Blog({ blogPosts }: Props): JSX.Element {
  const realBlogPosts = blogPosts.map(({ rawContent, slug }) => ({
    post: matter(rawContent),
    slug,
  }));

  return (
    <Main
      meta={
        <Meta
          title="KC Shornima | Blog"
          description="Blog posts written by comedian Shornima KC."
        />
      }
    >
      <div className="text-2xl uppercase font-alfa-slab">Blog</div>

      <div className="grid gap-5 mt-4 md:grid-cols-2">
        {realBlogPosts.map(
          ({
            post: {
              data: { title, date, description },
            },
            slug,
          }) => {
            return (
              <div key={title} className="p-4 space-y-2 shadow">
                <Link href={`/blog/${slug}`}>
                  <a className="text-current">
                    <p className="text-lg font-bold">{title}</p>

                    <p>{description}</p>

                    <p className="opacity-80">
                      {format(new Date(date), 'MMMM dd, yyyy')}
                    </p>
                  </a>
                </Link>
              </div>
            );
          }
        )}
      </div>
    </Main>
  );
}
