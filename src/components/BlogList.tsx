import { FC } from 'react';
import Image from 'next/image';
import { getAllBlogPosts } from '@/lib/blog';

const BlogList: FC = () => {
  const posts = getAllBlogPosts();
  
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <div key={post.id} className="bg-white shadow-sm rounded-lg overflow-hidden">
          {post.coverImage && (
            <div className="relative h-48 w-full">
              <Image 
                src={post.coverImage} 
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
          )}
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              <a 
                href={post.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-500 transition-colors"
              >
                {post.title}
              </a>
            </h2>
            <div className="text-sm text-gray-600 mb-4">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </div>
            <p className="text-gray-700 mb-4">{post.excerpt}</p>
            <a 
              href={post.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 font-medium hover:text-orange-600 transition-colors"
            >
              Read Full Article →
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;