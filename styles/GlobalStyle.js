import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Rubik', sans-serif;
}

body {
  overflow-x: hidden;
  overflow-y: auto;
}


.font-noto-sans{
  font-family: 'Noto Sans', sans-serif;
}

:root {
  overflow-x: hidden;
  /* scroll-behavior: smooth; */

  --fs-4px: 4px;
  --fs-6px: 6px;
  --fs-8px: 8px;
  --fs-10px: 10px;
  --fs-12px: 12px;
  --fs-14px: 14px;
  --fs-16px: 16px;
  --fs-18px: 18px;
  --fs-20px: 20px;
  --fs-22px: 22px;
  --fs-24px: 24px;
  --fs-26px: 26px;
  --fs-28px: 28px;
  --fs-30px: 30px;
  --fs-32px: 32px;
  --fs-34px: 34px;
  --fs-36px: 36px;
  --fs-38px: 38px;
  --fs-40px: 40px;
  --fs-42px: 42px;
  --fs-44px: 44px;
  --fs-46px: 46px;
  --fs-48px: 48px;
  --fs-50px: 50px;
  --fs-52px: 52px;
  --fs-54px: 54px;
  --fs-56px: 56px;
  --fs-58px: 58px;
  --fs-60px: 60px;
  --fs-62px: 62px;
  --fs-64px: 64px;
  --fs-66px: 66px;
  --fs-68px: 68px;
  --fs-70px: 70px;
  --fs-72px: 72px;
  --fs-74px: 74px;
  --fs-76px: 76px;
  --fs-78px: 78px;
  --fs-80px: 80px;
  --fs-82px: 82px;
  --fs-84px: 84px;
  --fs-86px: 86px;
  --fs-88px: 88px;
  --fs-90px: 90px;
  --fs-92px: 92px;
  --fs-94px: 94px;
  --fs-96px: 96px;
  --fs-98px: 98px;
  --fs-100px: 100px;
  --fs-102px: 102px;
  --fs-104px: 104px;
  --fs-106px: 106px;
  --fs-108px: 108px;
  --fs-110px: 110px;

  --fs-146px: 146px;
  --fs-172px: 172px;
  --fs-168px: 168px;
  --fs-144px: 144px;

  --bg-blue: #70cbf4;
  --color-blue: #70cbf4;
  --bg-blue-light: #e2f3fe;
  --bg-red: #ff3841;
  --text-blue: #1f3d6d;
  --text-blue-light: #006ea3;
  --bg-btn-blue: #229ed9;
  --btn-blue: #229ed9;
  --bg-gray: #dcdcdc;
  --bg-gray-light: #f4f4f4;

  --bg-light-gray : #F7F4F8;
  --bg-dark-purple : #5C0C40;
  --bg-purple : #7C0F4D;
  --purple : #4450BF;
}

/* COLORS */
.black {
  color: #000000;
}
.white {
  color: #fafcff;
}

.text-gray {
  color: var(--text-gray);
}

.bg-blue {
  background-color: var(--bg-blue);
}

.bg-red {
  background-color: var(--bg-red);
}

.text-blue {
  color: var(--text-blue);
}
.text-blue-light {
  color: var(--text-blue-light);
}
.bg-btn-blue {
  background-color: #229ed9;
}

.btn-blue {
  color: var(--btn-blue);
}
.bg-blue-light {
  background-color: var(--bg-blue-light);
}
.bg-gray {
  background-color: var(--bg-gray);
}
.bg-gray-light {
  background-color: var(--bg-gray-light);
}

.color-blue {
  color: var(--color-blue);
}

.bg-light-gray{
  background-color: var(--bg-light-gray);
}
.bg-purple{
  background-color: var(--bg-purple);
}
.bg-dark-purple{
  background-color: var(--bg-dark-purple);
}
.purple{
  color: var(--purple);
}

/* HEADING TAGS */
h1 {
  font-size: var(--fs-64px);
}
h2 {
  font-size: var(--fs-60px);
}
h3 {
  font-size: var(--fs-48px);
}
h4 {
  font-size: var(--fs-24px);
}

/* FONT-SIZES */
.fs-4px {
  font-size: var(--fs-4px);
}
.fs-6px {
  font-size: var(--fs-6px);
}
.fs-8px {
  font-size: var(--fs-8px);
}
.fs-10px {
  font-size: var(--fs-10px);
}
.fs-12px {
  font-size: var(--fs-12px);
}
.fs-14px {
  font-size: var(--fs-14px);
}
.fs-16px {
  font-size: var(--fs-16px);
}
.fs-18px {
  font-size: var(--fs-18px);
}
.fs-20px {
  font-size: var(--fs-20px);
}
.fs-22px {
  font-size: var(--fs-22px);
}
.fs-24px {
  font-size: var(--fs-24px);
}
.fs-26px {
  font-size: var(--fs-26px);
}
.fs-28px {
  font-size: var(--fs-28px);
}
.fs-30px {
  font-size: var(--fs-30px);
}
.fs-32px {
  font-size: var(--fs-32px);
}
.fs-34px {
  font-size: var(--fs-34px);
}
.fs-36px {
  font-size: var(--fs-36px);
}
.fs-38px {
  font-size: var(--fs-38px);
}
.fs-40px {
  font-size: var(--fs-40px);
}
.fs-42px {
  font-size: var(--fs-42px);
}
.fs-44px {
  font-size: var(--fs-44px);
}
.fs-46px {
  font-size: var(--fs-46px);
}
.fs-48px {
  font-size: var(--fs-48px);
}
.fs-50px {
  font-size: var(--fs-50px);
}
.fs-52px {
  font-size: var(--fs-52px);
}
.fs-54px {
  font-size: var(--fs-54px);
}
.fs-56px {
  font-size: var(--fs-56px);
}
.fs-58px {
  font-size: var(--fs-58px);
}
.fs-60px {
  font-size: var(--fs-60px);
}
.fs-62px {
  font-size: var(--fs-62px);
}
.fs-64px {
  font-size: var(--fs-64px);
}
.fs-66px {
  font-size: var(--fs-66px);
}
.fs-68px {
  font-size: var(--fs-68px);
}
.fs-70px {
  font-size: var(--fs-70px);
}
.fs-72px {
  font-size: var(--fs-72px);
}
.fs-74px {
  font-size: var(--fs-74px);
}
.fs-76px {
  font-size: var(--fs-76px);
}
.fs-78px {
  font-size: var(--fs-78px);
}
.fs-80px {
  font-size: var(--fs-80px);
}
.fs-82px {
  font-size: var(--fs-82px);
}
.fs-84px {
  font-size: var(--fs-84px);
}
.fs-86px {
  font-size: var(--fs-86px);
}
.fs-88px {
  font-size: var(--fs-88px);
}
.fs-90px {
  font-size: var(--fs-90px);
}
.fs-92px {
  font-size: var(--fs-92px);
}
.fs-94px {
  font-size: var(--fs-94px);
}
.fs-96px {
  font-size: var(--fs-96px);
}
.fs-98px {
  font-size: var(--fs-98px);
}
.fs-100px {
  font-size: var(--fs-100px);
}
.fs-102px {
  font-size: var(--fs-102px);
}
.fs-104px {
  font-size: var(--fs-104px);
}
.fs-106px {
  font-size: var(--fs-106px);
}
.fs-108px {
  font-size: var(--fs-108px);
}
.fs-110px {
  font-size: var(--fs-110px);
}

.fs-146px {
  font-size: var(--fs-146px);
}
.fs-172px {
  font-size: var(--fs-172px);
}
.fs-168px {
  font-size: var(--fs-168px);
}
.fs-144px {
  font-size: var(--fs-144px);
}

/* LINEH-HEIGHTS */
.lh-1 {
  line-height: 1;
}
.lh-1_1 {
  line-height: 1.1;
}
.lh-1_2 {
  line-height: 1.2;
}
.lh-1_3 {
  line-height: 1.3;
}
.lh-1_4 {
  line-height: 1.4;
}
.lh-1_5 {
  line-height: 1.5;
}
.lh-1_6 {
  line-height: 1.6;
}
.lh-1_7 {
  line-height: 1.7;
}
.lh-1_8 {
  line-height: 1.8;
}
.lh-1_9 {
  line-height: 1.9;
}
.lh-2 {
  line-height: 2;
}

/* FONTS-WEIGHTS */
.weight-9 {
  font-weight: 900;
}
.weight-8 {
  font-weight: 800;
}
.weight-7 {
  font-weight: 700;
}
.weight-6 {
  font-weight: 600;
}
.weight-5 {
  font-weight: 500;
}
.weight-4 {
  font-weight: 400;
}
.weight-3 {
  font-weight: 300;
}
.weight-2 {
  font-weight: 200;
}

/* margins */
.mb-5px {
  margin-bottom: 5px;
}
.mb-10px {
  margin-bottom: 10px;
}
.mb-15px {
  margin-bottom: 15px;
}
.mb-20px {
  margin-bottom: 20px;
}
.mb-25px {
  margin-bottom: 25px;
}
.mb-30px {
  margin-bottom: 30px;
}
.mb-35px {
  margin-bottom: 35px;
}
.mb-40px {
  margin-bottom: 40px;
}
.mb-45px {
  margin-bottom: 45px;
}
.mb-50px {
  margin-bottom: 50px;
}
.mb-55px {
  margin-bottom: 55px;
}
.mb-60px {
  margin-bottom: 60px;
}
.mb-70px {
  margin-bottom: 70px;
}
.mb-75px {
  margin-bottom: 75px;
}
.mb-80px {
  margin-bottom: 80px;
}
.mb-100px {
  margin-bottom: 100px;
}
.mb-110px {
  margin-bottom: 110px;
}
.mb-120px {
  margin-bottom: 120px;
}
.mb-130px {
  margin-bottom: 130px;
}
.mb-140px {
  margin-bottom: 140px;
}
.mb-150px {
  margin-bottom: 150px;
}
.mb-160px {
  margin-bottom: 160px;
}
.mb-170px {
  margin-bottom: 170px;
}
.mb-180px {
  margin-bottom: 180px;
}
.mb-190px {
  margin-bottom: 190px;
}
.mb-200px {
  margin-bottom: 200px;
}
.mb-250px {
  margin-bottom: 250px;
}

.margin-center {
  margin: 0 auto;
}
.mt-88px {
  margin-top: 88px;
}
.mt-100px {
  margin-top: 100px;
}
.mt-110px {
  margin-top: 110px;
}
.mt-120px {
  margin-top: 120px;
}

/* paddings */
.py-30px {
  padding-top: 30px;
  padding-bottom: 30px;
}
.py-50px {
  padding-top: 50px;
  padding-bottom: 50px;
}
.py-70px {
  padding-top: 70px;
  padding-bottom: 70px;
}
.py-100px {
  padding-top: clamp(50px, 6.944444444444445vw, 100px);
  padding-bottom: clamp(50px, 6.944444444444445vw, 100px);
}
.py-150px {
  padding-top: 150px;
  padding-bottom: 150px;
}
.py-200px {
  padding-top: clamp(50px, 13.88888888888889vw, 200px);
  padding-bottom: clamp(50px, 13.88888888888889vw, 200px);
}
.pt-88px {
  padding-top: 88px;
}
.pt-0 {
  padding-top: 0;
}
.pb-0 {
  padding-bottom: 0;
}

/* BORDER-RADIUSES */
.rounded {
  border-radius: 50%;
}
.radius-2px {
  border-radius: 2px;
}
.radius-4px {
  border-radius: 4px;
}
.radius-6px {
  border-radius: 6px;
}
.radius-8px {
  border-radius: 8px;
}
.radius-10px {
  border-radius: 10px;
}
.radius-12px {
  border-radius: 12px;
}
.radius-14px {
  border-radius: 14px;
}
.radius-16px {
  border-radius: 16px;
}
.radius-18px {
  border-radius: 18px;
}
.radius-20px {
  border-radius: 20px;
}
.radius-22px {
  border-radius: 22px;
}
.radius-24px {
  border-radius: 24px;
}
.radius-26px {
  border-radius: 26px;
}
.radius-28px {
  border-radius: 28px;
}
.radius-30px {
  border-radius: 30px;
}
.radius-32px {
  border-radius: 32px;
}
.radius-34px {
  border-radius: 34px;
}
.radius-36px {
  border-radius: 36px;
}
.radius-38px {
  border-radius: 38px;
}
.radius-40px {
  border-radius: 40px;
}

/*  */

.container-wrapper {
  max-width: 1400px;
  width: 80%;
  margin: 0 auto;
}
.container-wrapper-2 {
  max-width: 1400px;
  width: 70%;
  margin: 0 auto;
}

.flex {
  display: flex;
}
.flex.align-center {
  align-items: center;
}
.flex.justify-end {
  justify-content: flex-end;
}

.uppercase {
  text-transform: uppercase;
}
.capitalize {
  text-transform: capitalize;
}

.text-transparent {
  color: transparent;
}

.opacity-1 {
  opacity: 1;
}
.opacity-0_1 {
  opacity: 0.1;
}
.opacity-0_2 {
  opacity: 0.2;
}
.opacity-0_3 {
  opacity: 0.3;
}
.opacity-0_4 {
  opacity: 0.4;
}
.opacity-0_5 {
  opacity: 0.5;
}
.opacity-0_6 {
  opacity: 0.6;
}
.opacity-0_7 {
  opacity: 0.7;
}
.opacity-0_8 {
  opacity: 0.8;
}
.opacity-0_9 {
  opacity: 0.9;
}

a {
  text-decoration: none;
}
.block {
  display: block;
}
.inline-block {
  display: inline-block;
}
.w-fit-content {
  width: fit-content;
}
.w-full {
  width: 100%;
}

.pointer {
  cursor: pointer;
}

.text-center {
  text-align: center;
}
.text-left {
  text-align: left;
}

button {
  border: none;
  outline: none;
  background-color: transparent;
}

input {
  border: none;
  outline: none;
  background-color: transparent;
}

.absolute {
  position: absolute;
}
.relative {
  position: relative;
}

.italic {
  font-style: italic;
}

ul {
  list-style-type: disc;
}
li {
  list-style: disc;
  list-style-type: disc;
}

.list-style-type-none {
  list-style-type: none;
}
.list-style-type-none li {
  list-style: none;
  list-style-type: none;
}

.list-style-type-decimal {
  list-style-type: decimal;
}
.list-style-type-decimal li {
  list-style-type: decimal;
  list-style: decimal;
}

.list-style-position-inside {
  list-style-position: inside;
}

.bg-transparent {
  background-color: transparent;
}

.underline {
  text-decoration: underline;
}
.hover-underline:hover {
  text-decoration: underline;
}

.blend-mode-screen {
  mix-blend-mode: screen !important;
}

.overflow-hidden {
  overflow: hidden;
}

.black-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 101 !important;
  transition: all 0.3s ease;
  opacity: 0;
  pointer-events: none;
}
.black-screen.show {
  opacity: 1;
  pointer-events: visible;
}

.text-indent-5 {
  text-indent: 5%;
}
.text-indent-10 {
  text-indent: 10%;
}
.text-indent-15 {
  text-indent: 15%;
}
.text-indent-20 {
  text-indent: 20%;
}
.text-indent-25 {
  text-indent: 25%;
}
.text-indent-30 {
  text-indent: 30%;
}
.text-indent-35 {
  text-indent: 35%;
}
.text-indent-40 {
  text-indent: 40%;
}
.text-indent-45 {
  text-indent: 45%;
}
.text-indent-50 {
  text-indent: 50%;
}

/* GRID CLASSES */

.grid-col-span-2 {
  grid-column: span 2;
}

.swiper{
  padding: 60px 0;
}


.swiper-pagination-bullet{
  width: 10px;
  height: 10px;
  background: #4450BF;
}

@media (max-width : 1000px){
  :root{
    --fs-20px : 18px;
  }
}

@media (max-width : 760px){
  .py-150px{
    padding-top: 80px;
  padding-bottom: 80px;
  }
  .py-100px{
    padding-top: 60px;
  padding-bottom: 60px;
  }
}



`;

const Container = styled.div`
  width: 90%;
  max-width: 1500px;
  margin: 0 auto;
`;

export default GlobalStyle;
export { Container };
