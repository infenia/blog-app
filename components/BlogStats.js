// components/BlogStats.js

import React from 'react';
import { ClockIcon, TagIcon } from '@heroicons/react/24/outline'; // Using Heroicons for demonstration

const BlogStats = ({ wordCount, readTime, tags }) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b pb-4 mb-6">
      <div className="flex items-center space-x-6 text-sm text-gray-500 mb-4 sm:mb-0">
        <div className="flex items-center">
          <ClockIcon className="w-5 h-5 mr-1.5 text-indigo-500" />
          <span>{wordCount.toLocaleString()} Words</span>
        </div>
        <div className="flex items-center">
          <span className="text-xl font-bold mr-1">•</span>
          <span>{readTime} min read</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <button
            key={tag}
            className="px-3 py-1 text-xs font-medium text-indigo-700 bg-indigo-100 rounded-full hover:bg-indigo-200 transition duration-150"
            onClick={() => console.log(`Clicked tag: ${tag}`)}
          >
            <TagIcon className="w-3 h-3 inline mr-1" />
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BlogStats;