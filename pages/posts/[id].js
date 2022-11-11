import Head from 'next/head';

import Date from '../../components/date';
import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import utilStyles from '../../styles/utils.module.css';


export const getStaticPaths = async () => ({
	paths: getAllPostIds(),
	fallback: false,
})

export const getStaticProps = async ({ params }) => ({
	props: {
		postData: await getPostData(params.id),
	},
});

const Post = ({ postData }) => (
	<Layout>
		<Head>
			<title>{postData.title}</title>
		</Head>
		<article>
			<h1 className={utilStyles.headingXl}>{postData.title}</h1>
			<div className={utilStyles.lightText}>
				<Date dateString={postData.date} />
			</div>
			<div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
		</article>
	</Layout>
);

export default Post; 