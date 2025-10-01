// components/AuthorCard.js

import React from 'react';

const AuthorCard = ({ author }) => {
  return (
    <div className="p-6 bg-gray-50 border border-gray-200 rounded-lg shadow-sm">
      <div className="flex items-center space-x-4">
        <img
          className="w-16 h-16 rounded-full object-cover"
          src={author.avatarUrl}
          alt={`Profile of ${author.name}`}
        />
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{author.name}</h3>
          <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
            {author.badge}
          </span>
        </div>
      </div>
      <p className="mt-4 text-gray-600 text-sm italic">
        {author.bio}
      </p>
    </div>
  );
};

export default AuthorCard;