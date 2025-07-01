import { useState } from "react";
import "../css/portfolio.css";

const portfolioItems = [
  { id: 1, title: "ClickCare 1", category: "clickcare", image: require("../images/ClickCare_1.jpg") },
  { id: 2, title: "LPENHS 1", category: "lpenhs", image: require("../images/LPENHS_1.jpg") },
  { id: 3, title: "Django 1", category: "django", image: require("../images/Django_1.jpg") },
  { id: 4, title: "OddJobs 1", category: "oddjobs", image: require("../images/oddjobs1.png") },
  { id: 5, title: "ClickCare 2", category: "clickcare", image: require("../images/ClickCare_2.jpg") },
  { id: 6, title: "LPENHS 2", category: "lpenhs", image: require("../images/LPENHS_2.jpg") },
  { id: 7, title: "Django 2", category: "django", image: require("../images/Django_2.jpg") },
  { id: 8, title: "OddJobs 2", category: "oddjobs", image: require("../images/oddjobs2.png") },
  { id: 9, title: "ClickCare 3", category: "clickcare", image: require("../images/ClickCare_3.jpg") },
  { id: 10, title: "LPENHS 3", category: "lpenhs", image: require("../images/LPENHS_3.jpg") },
  { id: 11, title: "Django 3", category: "django", image: require("../images/Django_3.jpg") },
  { id: 12, title: "OddJobs 3", category: "oddjobs", image: require("../images/oddjobs3.png") },
  { id: 13, title: "ClickCare 4", category: "clickcare", image: require("../images/ClickCare_4.jpg") },
  { id: 14, title: "LPENHS 4", category: "lpenhs", image: require("../images/LPENHS_4.jpg") },
  { id: 15, title: "Django 4", category: "django", image: require("../images/Django_4.jpg") },
  { id: 16, title: "OddJobs 4", category: "oddjobs", image: require("../images/oddjobs4.png") },
  { id: 17, title: "ClickCare 5", category: "clickcare", image: require("../images/ClickCare_5.jpg") },
  { id: 18, title: "LPENHS 5", category: "lpenhs", image: require("../images/LPENHS_5.jpg") },
  { id: 19, title: "OddJobs 5", category: "oddjobs", image: require("../images/oddjobs5.png") },
  { id: 20, title: "ClickCare 6", category: "clickcare", image: require("../images/ClickCare_6.jpg") },
  { id: 21, title: "LPENHS 6", category: "lpenhs", image: require("../images/LPENHS_6.jpg") },
  { id: 22, title: "LPENHS 7", category: "lpenhs", image: require("../images/LPENHS_7.jpg") },
  { id: 23, title: "LPENHS 8", category: "lpenhs", image: require("../images/LPENHS_8.jpg") },
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
        <p>Here are some other projects I worked on:</p>
      </div>

      <div className="container">
        {/* Filters */}
        <ul className="portfolio-filters" data-aos="fade-up" data-aos-delay="100">
          {["all", "clickcare", "lpenhs", "django", "oddjobs"].map((filter) => (
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
              className="col-lg-3 col-md-6 portfolio-item"
            >
              <img src={item.image} className="img-fluid" alt={item.title} />
              <div className="portfolio-info">
                <h4>{item.title}</h4>
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
