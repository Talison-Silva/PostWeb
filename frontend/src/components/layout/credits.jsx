import { styled } from "styled-components";

const Credits = styled.section`
  & {
    z-index: 30;
    transition: left 1s;
    position: absolute;
    top: 0;
    left: 100%;
    width: 100vw;
    min-height: 100vh;
    padding: 64px;
    user-select: none;

    background-color: #084ccf;
    color: white;

    font-family: "Roboto", monospace;

    article {
      text-align: justify;
      h1 {
        font-size: 32px;
        color: #8ab7ff;
      }
      p {
        margin-top: 20px;
        line-height: 1.715rem;
        font-size: 16px;

        .important {
          font-family: "Roboto", monospace;
          color: #e8dd43; //#9bbbfa;
        }
      }
    }
  }
`;

export default ({ id, close }) => {
  return (
    <Credits id={id}>
      <article>
        <p onClick={close}>Back to Home Space</p>
        <h1>PostWeb</h1>
        <p>
          PostWeb is an old project written in
          <span className="important"> ReactJS</span>, which was originally just
          a simple site for inserting posts. However, after some time, I decided
          to rebuild this project with a new design, color schemes and
          functionalities. In addition, I improved the code, which was
          previously susceptible to failures, bugs and improper access. Thanks
          to various concepts learned over the last few years, such as
          <span className="important"> JWT</span> and
          <span className="important"> SOLID</span>, among others, the code is
          now more secure against failures, bugs and improper access.
        </p>
      </article>

      {/*<FooterInforsCategories>
        <FooterInforsCategory>
          <h1 className="text-[24px] text-[#8ab7ff]">Social Media</h1>
          <div className="flex gap-3 items-center">
            <img src={Linkedin} className="w-8 h-8" />
            <a href="" className="text-[18px]">
              Linkedin
            </a>
          </div>
          <div className="flex gap-3 items-center">
            <img src={Instagram} className="w-8 h-8" />
            <a href="" className="text-[18px]">
              Instagram
            </a>
            <a href="https://lordicon.com/">Icons by Lordicon.com</a>
          </div>
          <div className="flex gap-3 items-center">
            <img src={Github} className="w-8 h-8" />
            <a
              href="https://github.com/Talison-Silva"
              target="_blank"
              className="text-[18px]"
            >
              Github
            </a>
          </div>
        </FooterInforsCategory>

        <FooterInforsCategory>
          <h1 className="text-[24px] text-[#8ab7ff]">Infors</h1>
          <p className="text-[1&px]">talisonsilvaprofissional@gmail.com</p>
          <div className="flex gap-3 items-center">
            <img src={Phone} className="w-8 h-8" />
            <p className="text-[18px]">088992251439</p>
          </div>
        </FooterInforsCategory>

        <FooterInforsCategory>
          <h1 className="text-[24px] text-[#8ab7ff]">Roadmap</h1>
          <Link to="/postweb/" className="text-[18px]">
            Home
          </Link>
          <Link to="/postweb/posts" className="text-[18px]">
            Posts
          </Link>
          <Link to="/postweb/users" className="text-[18px]">
            Users
          </Link>
        </FooterInforsCategory>

        <FooterInforsCategory>
          <h1 className="text-[24px] text-[#8ab7ff]">Credits</h1>
          <a
            href="https://heroicons.com/"
            target="_blank"
            className="text-[1&px]"
          >
            HeroIcons Heroicons by various icons
          </a>
          <div>
            <a
              href="https://icons8.com/icons/set/svg"
              target="_blank"
              className="text-[18px]"
            >
              Icons8
            </a>
            <ul>
              <li className="ml-6 text-[14px]">
                <p>
                  <a
                    href="https://icons8.com/icon/2olGSGqpqGWD/phone"
                    target="_blank"
                    className="text-[#7aa8ff]"
                  >
                    Phone
                  </a>{" "}
                  icon by{" "}
                  <a
                    href="https://icons8.com/icons/set/svg"
                    target="_blank"
                    className="text-[#7aa8ff]"
                  >
                    Icons8
                  </a>
                </p>
              </li>
              <li className="ml-6 text-[14px]">
                <p>
                  <a
                    href="https://icons8.com/icon/12598/github"
                    target="_blank"
                    className="text-[#7aa8ff]"
                  >
                    GitHub
                  </a>{" "}
                  icon by{" "}
                  <a
                    href="https://icons8.com/icons/set/svg"
                    target="_blank"
                    className="text-[#7aa8ff]"
                  >
                    Icons8
                  </a>
                </p>
              </li>
              <li className="ml-6 text-[14px]">
                <p>
                  <a
                    href="https://icons8.com/icon/32292/instagram"
                    target="_blank"
                    className="text-[#7aa8ff]"
                  >
                    Instagram
                  </a>{" "}
                  icon by{" "}
                  <a
                    href="https://icons8.com/icons/set/svg"
                    target="_blank"
                    className="text-[#7aa8ff]"
                  >
                    Icons8
                  </a>
                </p>
              </li>
              <li className="ml-6 text-[14px]">
                <p>
                  <a
                    href="https://icons8.com/icon/447/linkedin"
                    target="_blank"
                    className="text-[#7aa8ff]"
                  >
                    LinkedIn
                  </a>{" "}
                  icon by{" "}
                  <a
                    href="https://icons8.com/icons/set/svg"
                    target="_blank"
                    className="text-[#7aa8ff]"
                  >
                    Icons8
                  </a>
                </p>
              </li>
            </ul>
          </div>
          <a
            href="https://www.darkmodedesign.com/?2bf851fe_page=2"
            target="_blank"
            className="text-[18px]"
          >
            DarkModeDesign by design ideas
          </a>
        </FooterInforsCategory>
      </FooterInforsCategories>*/}
    </Credits>
  );
};
