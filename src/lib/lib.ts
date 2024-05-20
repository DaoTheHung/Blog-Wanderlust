import { convertToSlug } from '@/features/untils';
import { TPost } from '@/types';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

export async function getPosts(url: string) {
	const folder = 'posts/' + url + '/'
	const files = fs.readdirSync(folder)
	const markdownPosts = files.filter(file => file.endsWith('.mdx'))
	// get the file data
	const posts = markdownPosts.map((filename) => {
		const fileContents = fs.readFileSync(`${folder}${filename}`, 'utf8')
		const matterResult = matter(fileContents)
		return {
			title: matterResult.data.title,
			id: filename.replace('.mdx', ''),
			description: matterResult.data.description,
			date: matterResult.data.date,
			author: matterResult.data.author,
			image: matterResult.data.image,
			slug: url,
			body: matterResult.content,
		}
	})
	return posts
}

export async function getPost(slug: string, url: string) {
	const posts = await getPosts(url);
	return posts.find((post) => convertToSlug(post.title) === slug);
}
