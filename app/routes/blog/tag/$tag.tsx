import {
  fetchPage,
  fetchPages,
  fetchTags,
  types,
  cleanPage,
  PageViewer,
} from 'react-bricks/frontend'
import { useReactBricksContext } from 'react-bricks/frontend'
import { useLoaderData, Link } from '@remix-run/react'
import PostListItem from '~/components/PostListItem'
import TagListItem from '~/components/TagListItem'
import type { LoaderArgs } from '@remix-run/node'

export const loader = async ({ params }: LoaderArgs) => {
  const { tag } = params

  const pagesByTag = await fetchPages(process.env.API_KEY as string, {
    tag: tag?.toString(),
    type: 'blog',
    pageSize: 1000,
    sort: '-publishedAt',
  })
  const popularPosts = await fetchPages(process.env.API_KEY as string, {
    type: 'blog',
    tag: 'popular',
    sort: '-publishedAt',
  })

  const { items: tags } = await fetchTags(process.env.API_KEY as string)
  tags.sort()

  const header = await fetchPage('header', process.env.API_KEY as string).catch(
    () => {
      throw new Error(
        `Cannot find header. Create a new 'header' entity under 'Layout'`
      )
    }
  )
  const footer = await fetchPage('footer', process.env.API_KEY as string).catch(
    () => {
      throw new Error(
        `Cannot find footer. Create a new 'footer' entity under 'Layout'`
      )
    }
  )

  return {
    pagesByTag,
    filterTag: tag,
    popularPosts,
    allTags: tags,
    header,
    footer,
  }
}

interface LoaderProps {
  pagesByTag: types.Page[]
  popularPosts: types.Page[]
  error: string
  filterTag: string
  allTags: string[]
  header: types.Page
  footer: types.Page
}

export default function List() {
  const { filterTag, pagesByTag, allTags, header, footer } =
    useLoaderData<LoaderProps>()

  const { pageTypes, bricks } = useReactBricksContext()
  const headerOk = header ? cleanPage(header, pageTypes, bricks) : null
  const footerOk = header ? cleanPage(footer, pageTypes, bricks) : null

  return (
    <>
      <PageViewer page={headerOk} showClickToEdit={false} />
      <div className="bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-8 py-16">
          <div className="flex items-center justify-between  text-gray-900 dark:text-white pb-4 mt-10 sm:mt-12 mb-4">
            <h1 className="max-w-2xl text-4xl sm:text-6xl lg:text-4xl font-bold tracking-tight">
              {filterTag} articles
            </h1>

            <Link
              to="/blog"
              className="hover:-translate-x-2 transition-transform duration-300"
            >
              &laquo; Return to blog
            </Link>
          </div>

          <div className="flex flex-wrap items-center">
            {allTags?.map((tag) => (
              <TagListItem tag={tag} key={tag} />
            ))}
          </div>

          <hr className="mt-6 mb-10 dark:border-gray-600" />

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 sm:gap-12">
            {pagesByTag?.map((post) => (
              <PostListItem
                key={post.id}
                title={post.meta.title || ''}
                href={post.slug}
                content={post.meta.description || ''}
                author={post.author}
                date={post.publishedAt || ''}
                featuredImg={post.meta.image}
              />
            ))}
          </div>
        </div>
      </div>
      <PageViewer page={footerOk} showClickToEdit={false} />
    </>
  )
}
