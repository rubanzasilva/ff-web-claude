// src/components/BlogCard.tsx
import { FC } from 'react';
import Image from 'next/image';
import { BlogPost } from '@/lib/blog';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: FC<BlogCardProps> = ({ post }) => {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article className="border border-[var(--ff-rule)] bg-[var(--ff-paper)] overflow-hidden transition-all duration-200 hover:border-[var(--ff-orange)]">
      {post.coverImage && (
        <div className="relative h-48 w-full bg-[var(--ff-cream)]">
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
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[10px] font-bold tracking-[0.12em] uppercase text-[var(--ff-orange)]">
            {formattedDate}
          </span>
          <span className="text-[var(--ff-muted)]">·</span>
          <span className="text-[10px] tracking-[0.08em] uppercase text-[var(--ff-muted)]">
            {post.author}
          </span>
        </div>
        <h3 className="text-lg font-bold leading-[1.3] mb-3">
          <a
            href={post.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--ff-orange)] transition-colors duration-[120ms]"
          >
            {post.title}
          </a>
        </h3>
        <p className="text-sm leading-[1.7] text-[var(--ff-muted)] mb-4">
          {post.excerpt}
        </p>
        <a
          href={post.externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-xs font-semibold tracking-[0.12em] uppercase text-[var(--ff-orange)] hover:text-[var(--ff-orange-hover)] transition-colors duration-[120ms]"
        >
          Read Article →
        </a>
      </div>
    </article>
  );
};

export default BlogCard;
