import "../css/style.css"; 

const PortfolioShowcase = () => {
  return (
    <section id="portfolio" className="tm-portfolio" data-spy="scroll" data-target="#rock-navigation">
      <div className="container">
        <div className="row">
          <div className="col-md-12 wow bounce">
            <div className="title">
              <h2 className="tm-portfolio-title">
                My <strong>Portfolio</strong>
              </h2>
            </div>

            {/* START ISO SECTION */}
            <div className="iso-section">
              <ul className="filter-wrapper clearfix">
                <li><a href="/" className="opc-main-bg selected" data-filter="*">All</a></li>
                <li><a href="/" className="opc-main-bg" data-filter=".clickcare">ClickCare</a></li>
                <li><a href="/" className="opc-main-bg" data-filter=".lpenhs">LPENHS</a></li>
                <li><a href="/" className="opc-main-bg" data-filter=".django_admin">Django Admin</a></li>
              </ul>

              <div className="iso-box-section">
                <div className="iso-box-wrapper col4-iso-box">

                  {/* ClickCare items */}
                  {[1, 2, 3, 4, 5, 6].map(i => (
                    <div key={`clickcare-${i}`} className="iso-box clickcare col-md-3 col-sm-3 col-xs-12">
                      <div className="portfolio-thumb">
                        <img 
                          src={require(`../images/ClickCare_${i}.jpg`)} 
                          className="fluid-img" 
                          alt="ClickCare" 
                        />
                        <div className="portfolio-overlay">
                          <h3 className="portfolio-item-title">ClickCare</h3>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* LPENHS items */}
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(i => (
                    <div key={`lpenhs-${i}`} className="iso-box lpenhs col-md-3 col-sm-3 col-xs-12">
                      <div className="portfolio-thumb">
                        <img 
                          src={require(`../images/LPENHS_${i}.jpg`)} 
                          className="fluid-img" 
                          alt="LPENHS NCAE" 
                        />
                        <div className="portfolio-overlay">
                          <h3 className="portfolio-item-title">LPENHS NCAE</h3>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Django Admin items */}
                  {[1, 2, 3, 4].map(i => (
                    <div key={`django-${i}`} className="iso-box django_admin col-md-3 col-sm-3 col-xs-12">
                      <div className="portfolio-thumb">
                        <img 
                          src={require(`../images/Django_${i}.jpg`)} 
                          className="fluid-img" 
                          alt="Django Admin" 
                        />
                        <div className="portfolio-overlay">
                          <h3 className="portfolio-item-title">Django Admin</h3>
                        </div>
                      </div>
                    </div>
                  ))}

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioShowcase;
