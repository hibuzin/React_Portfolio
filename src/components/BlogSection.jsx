import React from "react";

const blogs = [
  {
    title: "How We Built a Real-Time Inventory System for a Jewellery E-commerce Website",
    desc: "A case study on how we build a scalable real-time inventory system for a jewellery store using Socket.io for real time update",
    img: "/assets/jewellery.png",
    link: "https://medium.com/@hibuzin/how-we-built-a-real-time-inventory-system-for-a-jewellery-e-commerce-website-44554646ca1d"
  },
  {
    title: "Client Needed an Urgent MVP — We Delivered a Complete Jewellery Store in 24 Hours",
    desc: "Know how we launch MVP products for startups using React.js as a frontend and Node.js connected with MongoDB for backend",
    img: "/assets/jewellery2.png",
    link: "https://medium.com/@hibuzin/client-needed-an-urgent-mvp-we-delivered-a-complete-jewellery-store-in-24-hours-c63923138efd"
  }
];

const BlogSection = () => {
  return (
    <>
      <style>{`
        .blog-section {
  padding: 100px 72px;
  background: #0e161f;
  color: white;
  font-family: 'DM Sans', sans-serif;
  text-align: center; /* Center all content inside */
}

/* Label */
.blog-label {
  display: flex;              /* use flex (not inline-flex) */
  align-items: center;
  gap: 12px;                  /* space between text and lines */
  justify-content: center;

  color: #00d4ff;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin: 0 0 16px 0;
}

.blog-label::before,
.blog-label::after {
  content: "";
  width: 46px;
  height: 2px;
  background: #22d3ee;
  opacity: 0.7;
}

/* Title */
.blog-title {
  font-size: 40px;
  font-weight: 700;
  line-height: 1.15;
  margin: 0 0 50px 0; /* Add bottom margin for spacing from content below */
  background: linear-gradient(85deg, cyan, rgb(117, 62, 227));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block; /* So gradient text respects centering */
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
           object-fit: contain;
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
  margin:0 20px 20px auto;
  padding:10px 20px;
  border:none;
  background:#6c63ff;
  color:white;
  border-radius:6px;
  cursor:pointer;
  font-size:14px;
  display:block;
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
          .blog-section{
            padding:80px 20px;
          }

          .blog-title{
            font-size:30px;
            margin-bottom:40px;
          }

          .blog-grid{
            grid-template-columns:1fr;
          }

          .blog-card h3{
            font-size:18px;
          }

          .blog-card p{
            font-size:13px;
          }
        }
      `}</style>

      <section id="blog" className="blog-section">
        <p className="blog-label">OUR BLOG</p>
        <h2 className="blog-title">Our Latest Blog</h2>

        <div className="blog-grid">
          {blogs.map((blog, index) => (
            <div className="blog-card" key={index}>
              <img src={blog.img} alt={blog.title} />
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