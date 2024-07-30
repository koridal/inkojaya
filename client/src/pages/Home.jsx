import { Link } from 'react-router-dom';
import CallToAction from '../components/CallToAction';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';
import Hero from '../components/Hero';
import HomeAbout from '../components/HomeAbout';
import Clients from '../components/Clients';
import Services from './Services';


export default function Home() {
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
    <div>
      <div className='flex flex-col gap-6 mx-auto mb-12 max-w-7xl '>
        <Hero />
      </div>
      <div className='mx-auto max-w-7xl'>
        <HomeAbout />

      </div>
      <div>
        <Services />
        <Clients />
        
      </div>
      <div className='flex flex-col items-center justify-center max-w-6xl min-h-screen gap-6 p-3 mx-auto'>
        {posts && posts.length > 0 && (
          <div className='flex flex-col items-center justify-center w-full gap-2 mx-auto mt-10 mb-5'>
            <h2 className='px-2 text-xl font-semibold text-[#1f1c0c]  border-l-[4px] border-[#504e4d] dark:text-white mb-5'
            >
              Recent Projects
            </h2>
            <div className='flex flex-wrap gap-2'>
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
      <div className='max-w-4xl p-3 mx-auto mb-10 bg-amber-100 dark:bg-slate-700'>
        <CallToAction />
      </div>
    </div>
  );
}
