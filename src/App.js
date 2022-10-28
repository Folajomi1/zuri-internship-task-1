import style from '../src/style.css'

function App() {
  return (
    <div className="App">
      <body>
        <div className="float-end">
          <img
            src="../images/_Avatar share button1.svg"
            alt=""
            className="desktop-share d-none d-md-block ml-6"
          />
          <img
            src="../images/_Avatar share button.svg"
            className="mobile-toggle d-md-none"
            alt=""
          />
        </div>
        <div className="profile-name">
          <div className="profilepic container d-flex align-items-center justify-content-center">
            <img
              src="../images/image.jpg"
              width="150"
              height="150"
              id="profile__img"
              alt="profile-img"
            />
            <div class="profilepic__content">
              <span class="profilepic__icon position-absolute bottom-0 start-50 translate-middle-x">
                <i class="fas fa-camera"></i>
              </span>
            </div>
          </div>
          <p className="text-center fs-3 fw-bold">Adeshina Adesola</p>
        </div>
        <div className="button">
          <a id="link" href="https://twitter.com/a_folajomi">
            Twitter
          </a>
          <a id="link" href="https://training.zuri.team/">
            Zuri Team
          </a>
          <a id="link" href="http://books.zuri.team/">
            Zuri Books
          </a>
          <a id="link" href="http://books.zuri.team/">
            Python Books
          </a>
          <a id="link" href="https://background.zuri.team/">
            Background Check for Coders
          </a>
          <a id="link" href="https://books.zuri.team/design-rules">
            Design Books
          </a>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className="text-center">
          <img src="../images/slack.svg" alt="slack-logo" />
          <img src="../images/Social icon.svg" class="p-2" alt="github-logo" />
          {/* slack name = adesolaadeshina112@outlook.com*/}
        </div>
        <div>
          <hr />
        </div>
        <footer>
          <div className="footer-content d-grid gap-4 d-sm-flex">
            <div>
              <img
                src="../images/logo.36d2d48a.svg"
                className="fs-4"
                width="150"
                alt=""
              />
            </div>
            <div>
              <span className="text">HNG Internship 9 Frontend Task</span>
            </div>
            <div>
              <img src="../images/I4G.svg" alt="github-logo" />
            </div>
          </div>
        </footer>
      </body>
    </div>
  )
}

export default App
