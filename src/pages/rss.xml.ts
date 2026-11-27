import rss from '@astrojs/rss'
import { siteConfig } from '@/site-config'
import { getPosts } from '@/utils'

export async function GET() {
	const posts = await getPosts()
	return rss({
		title: siteConfig.title,
		description: siteConfig.description,
		site: import.meta.env.SITE,
		items: posts.map((post) => ({
			title: post.data.title,
			description: post.data.description,
			pubDate: post.data.pubDate,
			categories: [post.data.category, ...post.data.tags],
			link: `blog/post/${post.id}/`
		}))
	})
}
