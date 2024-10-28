import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import styled from "styled-components";
import { Link } from "react-router-dom";

const webtoonInfo = [
  {
    id: 0,
    img: "https://image-comic.pstatic.net/webtoon/833596/thumbnail/thumbnail_IMAG21_e85ced84-385d-41e2-9dd3-d12020a110a2.jpg",
    name: "모솔대첩",
    author: "진자 / 정생",
  },
  {
    id: 1,
    img: "https://image-comic.pstatic.net/webtoon/183559/thumbnail/thumbnail_IMAG21_5f3fec31-5c95-4afe-a73f-3046288edb47.jpg",
    name: "신의 탑",
    author: "SIU",
  },
  {
    id: 2,
    img: "https://image-comic.pstatic.net/webtoon/602910/thumbnail/thumbnail_IMAG21_e861f2cf-6157-4d33-8e02-7b4cbf0a8baf.jpg",
    name: "윈드브레이커",
    author: "조용석",
  },
  {
    id: 3,
    img: "https://image-comic.pstatic.net/webtoon/758037/thumbnail/thumbnail_IMAG21_15cb2611-34c0-4f02-a689-41d0b1016579.jpg",
    name: "참교육",
    author: "채용택 / 한가람",
  },
  {
    id: 4,
    img: "https://image-comic.pstatic.net/webtoon/774866/thumbnail/thumbnail_IMAG21_b03cd4bd-bc74-4469-a501-20896bcc887f.jpg",
    name: "똑 닮은 딸",
    author: "이담",
  },
];

const SwiperWrap = styled.div`
padding-top: 20px;
  width: 100%;
  height: auto;
  .contents_wrap {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    .content {
      width: calc(100% / 5);
      .img_wrap {
        box-sizing: border-box;
        display: block;
        width: 100%;
        height: auto;
        overflow: hidden;
        border-radius: 10px;
        border: 5px solid #00dc64;
        position: relative;
        cursor: pointer;
        img {
          width: 100%;
          transition: 0.25s ease-in-out;
          transform-origin: center;
          transform: scale(1.05);
        }
      }
      .img_wrap:hover img {
        transform: scale(1.1);
      }
      .name {
        padding-top: 10px;
        font-size: 16px;
        font-weight: 700;
      }
      .author {
        padding-top: 5px;
        font-size: 14px;
      }
    }
  }
`;

const SwiperEl = () => {
  return (
  <SwiperWrap>
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }}
      pagination={false}
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper contents_wrap"
    >
      {webtoonInfo.map((info, index) => (
        <SwiperSlide key={index} className="content">
          <Link to={`/webtoon/${info.id}`} className="img_wrap">
            <img src={info.img} alt="webtoon_img" />
          </Link>
          <div className="name">{info.name}</div>
          <div className="author">{info.author}</div>
        </SwiperSlide>
      ))}
    </Swiper>
  </SwiperWrap>
  );
};

export default SwiperEl;
