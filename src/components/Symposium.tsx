import "./Symposium.css";
import Td from "./Td";
const base = import.meta.env.BASE_URL;

const Symposium = () => {
  return (
    <div className="Symposium-event">
      <div className="Symposium-event-info">
        <div className="Symposium-event-info-img">
          <img
            className="Symposium-event-info-img-content"
            src={`${base}banner.png`}
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
              <p className="Symposium-event-main-speaker">
                <strong>
                  <a>Ai Niitsu</a>
                </strong>
              </p>{" "}
              <br />
              <p className="Symposium-event-main-speaker">
                <strong>
                  <a>Ashutosh Srivastava</a>
                </strong>
              </p>{" "}
              <br />
              <p className="Symposium-event-main-speaker">
                <strong>
                  <a>Chandra Verma</a>
                </strong>
              </p>{" "}
              <br />
              <p className="Symposium-event-main-speaker">
                <strong>
                  <a>Eiji Yamamoto</a>
                </strong>
              </p>{" "}
              <br />
              <p className="Symposium-event-main-speaker">
                <strong>
                  <a>Tap Ha-duong</a>
                </strong>
              </p>{" "}
              <br />
            </div>
          </div>

          {/* Program */}
          <div className="Symposium-event-main-module">
            <div className="Symposium-event-main-module-title">Program</div>
            <div className="Symposium-event-main-module-content">
              <table className="Symposium-event-table">
                <tbody>
                  <tr className="table-head">
                    <Td text="Time" />
                    <Td text="Activity" />
                  </tr>
                  <tr className="table-tr1">
                    <Td text="09:00 - 09:15" />
                    <Td text="Speakers arrive, registration" />
                  </tr>
                  <tr className="table-tr2">
                    <Td text="09:15 - 09:30" />
                    <Td text="Welcome by IPR director/Chairperson" />
                  </tr>
                  <tr className="table-tr1">
                    <Td text="09:30 - 10:30" />
                    <Td text="Ice-breaker, speed networking" />
                  </tr>
                  <tr className="table-tr2">
                    <Td text="10:30 - 11:10" />
                    <Td text="Invited Speaker 1" />
                  </tr>
                  <tr className="table-tr1">
                    <Td text="11:10 - 11:50" />
                    <Td text="Invited Speaker 2" />
                  </tr>
                  <tr className="table-tr2">
                    <Td text="11:50 - 13:20" />
                    <Td text="Lunch break" />
                  </tr>
                  <tr className="table-tr1">
                    <Td text="13:20 - 14:00" />
                    <Td text="Invited Speaker 3" />
                  </tr>
                  <tr className="table-tr2">
                    <Td text="14:00 - 14:40" />
                    <Td text="Invited Speaker 4" />
                  </tr>
                  <tr className="table-tr1">
                    <Td text="14:40 - 15:20" />
                    <Td text="Invited Speaker 5" />
                  </tr>
                  <tr className="table-tr2">
                    <Td text="15:20 - 15:35" />
                    <Td text="Coffee Break" />
                  </tr>
                  <tr className="table-tr1">
                    <Td text="15:35 - 16:15" />
                    <Td text="Invited Speaker 6" />
                  </tr>
                  <tr className="table-tr2">
                    <Td text="16:15 - 16:55" />
                    <Td text="Invited Speaker 7" />
                  </tr>
                  <tr className="table-tr1">
                    <Td text="16:55 - 17:25" />
                    <Td text="Closing comments and discussion" />
                  </tr>
                  <tr className="table-tr2">
                    <Td text="17:45 - 19:30" />
                    <Td text="Poster session + cocktail hour" />
                  </tr>
                </tbody>
              </table>
            </div>
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
