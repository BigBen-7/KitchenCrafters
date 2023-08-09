import React, { useState } from "react";
import "./LatestBlog.css"; //Assuming you have a CSS file for styling

const LatestBlogPosts = () => {
  const [likedPosts, setLikedPosts] = useState([]);

  const toggleLike = (postId) => {
    if (likedPosts.includes(postId)) {
      setLikedPosts(likedPosts.filter((id) => id !== postId));
    } else {
      setLikedPosts([...likedPosts, postId]);
    }
  };

  const blogPosts = [
    {
      id: 1,
      title: "Delicious Pasta Recipes",
      excerpt: "Discover a variety of mouth-watering pasta dishes...",
      imageUrl: "/images/pasta-dish-in-a-restaurant.jpg",
    },
    {
      id: 2,
      title: "Healthy Breakfast Ideas",
      excerpt:
        "Start your day with these nutritious and tasty breakfast options...",
      imageUrl: "/images/english-breakfast.jpg",
    },
    {
      id: 3,
      title: "Quick and Easy Weeknight Dinner",
      excerpt:
        "Simplify your evenings with these quick and delicious recipes...",
      imageUrl: "/images/romantic-gc551c4bd9_1920.jpg",
    },
    // Add more blog post objects here...
  ];

  return (
    <section className="latest-blog-posts">
      <div className="section-header">
        <h2 className="section-title">Latest Blog Posts</h2>
        <p className="section-description">
          Discover our latest articles and cooking insights to enhance your
          culinary journey.
        </p>
      </div>

      <div className="blog-posts-grid">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-post-preview">
            <div className="like-icon">
              <img
                src={
                  likedPosts.includes(post.id)
                    ? "/icons/red-heart.png"
                    : "/icons/heart-reg.png"
                }
                alt="like"
                className="heart-icon"
                onClick={() => toggleLike(post.id)}
              />
            </div>
            <img src={post.imageUrl} alt={post.title} />
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <a
              href="google.com
            "
              className="read-more-button"
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestBlogPosts;
