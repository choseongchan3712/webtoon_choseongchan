import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SwiperEl from "../components/SwiperEl";

const HomeEl = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  .info {
    width: 1200px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .info_left {
    height: 100%;
    display: flex;
    align-items: center;
    .week {
      font-size: 20px;
      font-weight: 900;
    }
    .info_menu {
      padding-left: 20px;
      height: 100%;
      display: flex;
      align-items: center;
      div {
        font-size: 14px;
        font-weight: 900;
        color: rgba(0, 0, 0, 0.5);
        cursor: pointer;
      }
      .dot {
        margin: 0 3px;
        width: 3px;
        height: 3px;
        border-radius: 3px;
        background-color: rgba(0, 0, 0, 0.5);
      }
      .look {
        color: #00dc64;
      }
    }
  }
  .info_right {
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 14px;
    cursor: pointer;
    svg {
      color: rgba(0, 0, 0, 0.5);
      padding-left: 5px;
    }
  }
`;

const Home = () => {
  return (
    <HomeEl>
      <div className="info">
        <div className="info_left">
          <div className="week">월요웹툰</div>
          <div className="info_menu">
            <div className="hot">인기순</div>
            <div className="dot"></div>
            <div className="update">업데이트순</div>
            <div className="dot"></div>
            <div className="look">조회순</div>
            <div className="dot"></div>
            <div className="like">별점순</div>
          </div>
        </div>

        <div className="info_right">
          월요웹툰 전체보기
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
      </div>
      <SwiperEl></SwiperEl>
    </HomeEl>
  );
};

export default Home;
