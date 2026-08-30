import { posts } from '../data/posts'

function Posts() {
  return (
    <section id="posts" className="min-h-screen flex flex-col px-6 pt-30">
      <div className="container mx-auto">

        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            My{' '}
            <span className="bg-gradient-to-r from-sky-400 to-sky-700 bg-clip-text text-transparent">
              Posts
            </span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Updates, announcements, and thoughts from my journey as a developer.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-sky-700 mx-auto mt-4 rounded-full" />
        </div>

        {/* Posts */}
        <div className="flex flex-col gap-6 max-w-2xl mx-auto">
          {posts.map((post, index) => (
            <div
              key={index}
              className="bg-[#111827] border border-gray-800 rounded-xl p-6 flex flex-col gap-4 hover:border-sky-300/50 transition-colors duration-300"
            >
              {/* Date */}
              <span className="text-sky-400 text-sm font-medium">{post.date}</span>

              {/* Content */}
              <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                {post.content}
              </p>

              {/* Link */}
              {post.link && (
              <p className="text-gray-300">
                {post.link.prefix}
                <a
                  href={post.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 hover:text-sky-300 transition-colors font-medium"
                >
                  {post.link.text}
                </a>
              </p>
              )}

              {/* Tags */}
              {post.tags && (
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="text-sky-400 text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Posts