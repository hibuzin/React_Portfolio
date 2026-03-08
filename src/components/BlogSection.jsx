import React from "react";

const blogs = [
  {
    title: "How We Build MVP in 24 Hours",
    desc: "Learn how our team builds fast MVP products using modern technologies.",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c"
  },
  {
    title: "Best UI Design Tips for Developers",
    desc: "Simple UI tricks that make your product look premium and modern.",
    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0"
  },
  {
    title: "Flutter vs React for Startups",
    desc: "Choosing the right tech stack can save months of development time.",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475"
  }
];

const BlogSection = () => {
  return (
    <>
      <style>{`

        .blog-section{
          padding:100px 72px;
          background:#0e161f;
          color:white;
          font-family:'DM Sans', sans-serif;
        }

        .blog-title{
          font-size:40px;
          text-align:center;
          margin-bottom:60px;
        }

        .blog-grid{
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
          gap:30px;
        }

        .blog-card{
          background:#141b2d;
          border-radius:14px;
          overflow:hidden;
          transition:0.3s;
        }

        .blog-card:hover{
          transform:translateY(-10px);
        }

        .blog-card img{
          width:100%;
          height:200px;
          object-fit:cover;
        }

        .blog-card h3{
          padding:20px;
          font-size:20px;
        }

        .blog-card p{
          padding:0 20px 20px 20px;
          color:#9aa4b2;
          font-size:14px;
        }

        .blog-card button{
          margin:0 20px 20px 20px;
          padding:10px 20px;
          border:none;
          background:#6c63ff;
          color:white;
          border-radius:6px;
          cursor:pointer;
          font-size:14px;
        }

        .blog-card button:hover{
          background:#5a52e0;
        }

      `}</style>

      <section className="blog-section">
        <h2 className="blog-title">Latest Blogs</h2>

        <div className="blog-grid">
          {blogs.map((blog, index) => (
            <div className="blog-card" key={index}>
              <img src={blog.img} alt="blog"/>
              <h3>{blog.title}</h3>
              <p>{blog.desc}</p>
              <button>Read More</button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default BlogSection;