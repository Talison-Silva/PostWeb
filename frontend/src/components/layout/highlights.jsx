import { styled } from "styled-components";
import stories from "@/assets/images/stories.webp";

import {
  FunnelIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

const Highlights = styled.aside`
  width: 30vw;
  height: 100vh;
  position: relative;
  //border-left: 1px solid white;
  padding: 0px 12px 12px 12px;
  font-family: "Ubuntu", monospace;
  color: white;

  & form.search {
    height: min-height;
    margin-top: 24px;
    border-radius: 24px;
    background-color: #202020;
    padding: 14px;

    flex-wrap: wrap;

    display: flex;
    gap: 10px;

    & input[type="text"] {
      flex: 1 1 0%;
      min-height: 48px;
      font-family: "Ubuntu", monospace;
      padding: 12px 20px 12px 20px;
      background-color: #2e2e2e;
      color: white;
      border-radius: 48px;
    }

    & button {
      width: 48px;
      height: 48px;
      background-color: #2e2e2e;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;

      & svg {
        color: #c0c0c0;
        stroke-width: 1.5px;
        width: 28px;
        height: 28px;
      }

      &:hover {
        border: 1.5px solid white;
      }

      &:active {
        transform: scale(90%);
      }
    }

    & .create {
      background-color: #084ccf;
      color: white;
    }
  }

  & div.trends {
    position: relative;
    width: 100%;
    min-height: min-content;
    margin-top: 24px;
    font-family: "Ubuntu", monospace;

    & article {
      padding: 0 18px 0 18px;
      width: 100%;
      height: 44px;
      background-color: #242424;
      border-radius: 20px 20px 0 0;
      color: #c0c0c0;
      //border-bottom: 1px solid white;

      display: flex;
      justify-content: space-between;
      align-items: center;

      h1 {
        font-size: 20px;
      }
    }

    & ul {
      background-color: #202020;

      & li {
        width: 100%;
        height: 64px;
        padding: 0 20px 0 20px;
        &:nth-child(-n + 3) {
          background-color: #282828;
        }

        &:nth-child(even) {
          background-color: transparent;
        }
      }
    }

    & div {
      width: 100%;
      height: 28px;
      background-color: #242424;
      border-radius: 0 0 24px 24px;
    }
  }
`;

export default () => {
  return (
    <Highlights>
      <form className="search">
        <input type="text" />
        <button type="button">
          <MagnifyingGlassIcon />
        </button>
        <button type="button">
          <FunnelIcon />
        </button>
        <button type="button" className="create">
          <PlusIcon />
        </button>
      </form>

      <div className="trends">
        <article>
          <h1>#trends for you</h1>
          <Cog6ToothIcon className="w-6 h-6" />
        </article>
        <ul>
          <li>Hello</li>
          <li>Hello</li>
          <li>Hello</li>
          <li>Hello</li>
        </ul>
        <div />
      </div>
    </Highlights>
  );
};
