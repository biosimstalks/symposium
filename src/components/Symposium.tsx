import "./Symposium.css";

const Symposium = () => {
  return (
    <div className="Symposium-event">
      <div className="Symposium-event-info">
        <div className="Symposium-event-info-img">
          <img
            className="Symposium-event-info-img-content"
            src="/banner.png"
            alt="Do we need an image?"
          />
        </div>
        <div className="Symposium-event-info-text">
          <section>
            <h2 className="Symposium-event-info-text-title">
              BioSim Symposium: Lorem ipsum dolor sit amet, consectetur
              adipiscing elit
            </h2>
            <p className="Symposium-event-info-text-content">BioSim</p>
          </section>
          <hr className="Symposium-event-info-text-hr" />
          <section>
            <h2 className="Symposium-event-info-text-content">Date</h2>
            <p className="Symposium-event-info-text-content">March 12, 2026</p>
          </section>
          <hr className="Symposium-event-info-text-hr" />
          <section>
            <h2 className="Symposium-event-info-text-content">Venue</h2>
            <p className="Symposium-event-info-text-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, Osaka,
              Japan
            </p>
          </section>
        </div>
      </div>
      <div className="Symposium-event-main">
        <nav className="Symposium-event-main-nav">
          <div className="Symposium-event-main-nav-title">About</div>
          <div className="Symposium-event-main-nav-title">Welcome Messege</div>
          <div className="Symposium-event-main-nav-title">Speaker</div>
          <div className="Symposium-event-main-nav-title">Program</div>
          <div className="Symposium-event-main-nav-title">Registration</div>
          <div className="Symposium-event-main-nav-title">
            Abstract for posters
          </div>
          <div className="Symposium-event-main-nav-title">Access</div>
        </nav>
        <div className="Symposium-event-main-content">
          {/* about */}
          <div className="Symposium-event-main-module">
            <div className="Symposium-event-main-module-title">About</div>
            <div className="Symposium-event-main-module-content">
              <p className="Symposium-event-main-p">
                Welcome to the BioSim Symposium!
              </p>
              <p className="Symposium-event-main-p">
                We are delighted to invite you to this symposium, which aims to:
              </p>
            </div>
          </div>

          {/* Welcome Messege */}
          <div className="Symposium-event-main-module">
            <div className="Symposium-event-main-module-title">
              Welcome Messege
            </div>
            <div className="Symposium-event-main-module-content"></div>
          </div>

          {/* Speaker */}
          <div className="Symposium-event-main-module">
            <div className="Symposium-event-main-module-title">Speaker</div>
            <div className="Symposium-event-main-module-content">
              <p className="Symposium-event-main-p">
                <span style={{ color: "#5b5b5b", fontWeight: 600 }}>
                  (in alphabetic order)
                </span>
              </p>
              <br />
              <p className="Symposium-event-main-p">
                <a>Ai Niitsu</a>
              </p>
              <p className="Symposium-event-main-p">
                <a>Ai Niitsu</a>
              </p>
            </div>
          </div>

          {/* Program */}
          <div className="Symposium-event-main-module">
            <div className="Symposium-event-main-module-title">Program</div>
            <div className="Symposium-event-main-module-content"></div>
          </div>

          {/* Registration */}
          <div className="Symposium-event-main-module">
            <div className="Symposium-event-main-module-title">
              Registration
            </div>
            <div className="Symposium-event-main-module-content"></div>
          </div>

          {/* Abstract for posters */}
          <div className="Symposium-event-main-module">
            <div className="Symposium-event-main-module-title">
              Abstract for posters
            </div>
            <div className="Symposium-event-main-module-content"></div>
          </div>

          {/* Access */}
          <div className="Symposium-event-main-module">
            <div className="Symposium-event-main-module-title">Access</div>
            <div className="Symposium-event-main-module-content"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Symposium;
