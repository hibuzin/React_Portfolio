import React from "react";

  const blogs = [
  {
    title: "How We Built a Real-Time Inventory System for a Jewellery E-commerce Website",
    desc: "A case study on building a scalable real-time inventory system for a jewellery store.",
    img: "/assets/jewellery.png",
    link: "https://medium.com/@hibuzin/how-we-built-a-real-time-inventory-system-for-a-jewellery-e-commerce-website-44554646ca1d"
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
          grid-template-columns:repeat(3,1fr);
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

        /* Tablet */
        @media (max-width:900px){
          .blog-grid{
            grid-template-columns:repeat(2,1fr);
          }
        }

        /* Mobile */
        @media (max-width:600px){
          .blog-grid{
            grid-template-columns:1fr;
          }
        }

      `}</style>

      <section id="blog" className="blog-section">
        <h2 className="blog-title">Latest Blogs</h2>

        <div className="blog-grid">
          {blogs.map((blog, index) => (
            <div className="blog-card" key={index}>
              <img src={blog.img} alt="blog"/>
              <h3>{blog.title}</h3>
              <p>{blog.desc}</p>
            <button onClick={() => window.open(blog.link, "_blank")}>
  Read More
</button>
            </div>
          ))}
        </div>

      </section>
    </>
  );
};

export default BlogSection;