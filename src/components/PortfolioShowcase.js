import { useState } from "react";
import "../css/portfolio.css";

const portfolioItems = [
  { id: 1, title: "ClickCare 1", category: "app", image: require("../images/ClickCare_1.jpg") },
  { id: 2, title: "LPENHS 1", category: "product", image: require("../images/LPENHS_1.jpg") },
  { id: 3, title: "Django 1", category: "branding", image: require("../images/Django_1.jpg") },
  { id: 4, title: "ClickCare 2", category: "app", image: require("../images/ClickCare_2.jpg") },
  { id: 5, title: "LPENHS 2", category: "product", image: require("../images/LPENHS_2.jpg") },
  { id: 6, title: "Django 2", category: "branding", image: require("../images/Django_2.jpg") },
  { id: 7, title: "ClickCare 3", category: "app", image: require("../images/ClickCare_3.jpg") },
  { id: 8, title: "LPENHS 3", category: "product", image: require("../images/LPENHS_3.jpg") },
  { id: 9, title: "Django 3", category: "branding", image: require("../images/Django_3.jpg") },
  { id: 10, title: "ClickCare 4", category: "app", image: require("../images/ClickCare_4.jpg") },
  { id: 11, title: "LPENHS 4", category: "product", image: require("../images/LPENHS_4.jpg") },
  { id: 12, title: "Django 4", category: "branding", image: require("../images/Django_4.jpg") },
  { id: 13, title: "ClickCare 5", category: "app", image: require("../images/ClickCare_5.jpg") },
  { id: 14, title: "LPENHS 5", category: "product", image: require("../images/LPENHS_5.jpg") },
  { id: 15, title: "ClickCare 6", category: "app", image: require("../images/ClickCare_6.jpg") },
  { id: 16, title: "LPENHS 6", category: "product", image: require("../images/LPENHS_6.jpg") },
  { id: 17, title: "LPENHS 7", category: "product", image: require("../images/LPENHS_7.jpg") },
  { id: 18, title: "LPENHS 8", category: "product", image: require("../images/LPENHS_8.jpg") },
];

const PortfolioShowcase = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredItems =
    activeFilter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <section id="portfolio" className="portfolio section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <span>Portfolio</span>
        <h2>Portfolio</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container">
        {/* Filters */}
        <ul className="portfolio-filters" data-aos="fade-up" data-aos-delay="100">
          {["all", "app", "product", "branding"].map((filter) => (
            <li
              key={filter}
              className={activeFilter === filter ? "filter-active" : ""}
              onClick={() => setActiveFilter(filter)}
              style={{ cursor: "pointer" }}
            >
              {filter === "all" ? "All" : filter.charAt(0).toUpperCase() + filter.slice(1)}
            </li>
          ))}
        </ul>

        {/* Portfolio Items */}
        <div className="row gy-4" data-aos="fade-up" data-aos-delay="200">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="col-lg-4 col-md-6 portfolio-item"
            >
              <img src={item.image} className="img-fluid" alt={item.title} />
              <div className="portfolio-info">
                <h4>{item.title}</h4>
                <p>Lorem ipsum, dolor sit</p>
                <a
                  href={item.image}
                  title={item.title}
                  data-gallery={`portfolio-gallery-${item.category}`}
                  className="glightbox preview-link"
                >
                  <i className="bi bi-zoom-in"></i>
                </a>
                <a
                  href="portfolio-details.html"
                  title="More Details"
                  className="details-link"
                >
                  <i className="bi bi-link-45deg"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioShowcase;
