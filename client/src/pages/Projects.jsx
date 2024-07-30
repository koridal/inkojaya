import CallToAction from '../components/CallToAction';
import PostCard from '../components/PostCard';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Projects() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getPosts');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <div className='flex flex-col items-center justify-center max-w-6xl min-h-screen gap-6 p-3 mx-auto'>
      <div className='flex flex-col max-w-6xl gap-8 p-3 mx-auto py-7'>
        {posts && posts.length > 0 && (
          <div className='flex flex-col items-center justify-center w-full gap-6 mt-10 mb-5'>
            <h2 className='px-2 text-xl font-semibold text-[#1f1c0c]  border-l-[4px] border-[#504e4d] dark:text-white mb-5'
            >
              Recent Projects
            </h2>
            <div className='flex flex-wrap gap-4'>
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={'/search'}
              className='text-lg text-center text-teal-500 hover:underline'
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
      <CallToAction />
    </div>
  )
}
