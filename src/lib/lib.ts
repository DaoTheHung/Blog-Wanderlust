import { convertToSlug } from '@/features/untils';
import { TPost } from '@/types';
import fs from 'fs/promises';
import matter from 'gray-matter';
import path from 'path';

export async function getPosts(url: string) {
	const posts = await fs.readdir(`./posts/${url}`);

	return Promise.all(
		posts
			.filter((file) => path.extname(file) === '.mdx')
			.map(async (file) => {
				const filePath = `./posts/${url}/${file}`;
				const fileContent = await fs.readFile(filePath, 'utf8');
				const { data, content } = matter(fileContent);

				return { ...data, body: content } as TPost;
			})
	);
}

export async function getPost(slug: string, url: string) {
	const posts = await getPosts(url);
	return posts.find((post) => convertToSlug(post.title) === slug);
}
