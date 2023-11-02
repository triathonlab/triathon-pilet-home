import styled from 'styled-components'
import homePage from './images/homePage.jpg'
import icon1 from './images/icon1.svg'
import icon2 from './images/icon2.svg'
import icon3 from './images/icon3.svg'
import icon4 from './images/icon4.svg'
import circle from './images/font.svg'
import down from './images/down.svg'
import textPic1 from './images/textPic1.svg'
import home2_showPic from './images/home2_showPic.png'
import home3_showPic from './images/home3_showPic.png'
import home3_showBg from './images/home3_showBg.svg'
// import home3_showBg from './images/home3_showBg.png'
import home4_tit from './images/home4_tit.png'
import home4_showPic from './images/home4_showPic.png'
import home5_tit from './images/home5_tit.png'
import home5_icon1 from './images/home5_icon1.png'
import home5_icon2 from './images/home5_icon2.png'
import home5_icon3 from './images/home5_icon3.png'
import home5_icon4 from './images/home5_icon4.png'
import home6_showPic from './images/home6_showPic.png'
import footer1 from './images/footer1.svg'
import footer2 from './images/footer2.svg'
import footer3 from './images/footer3.svg'
import footer4 from './images/footer4.svg'
import footer1_hover from './images/footer1_hover.svg'
import footer2_hover from './images/footer2_hover.svg'
import footer3_hover from './images/footer3_hover.svg'
import footer4_hover from './images/footer4_hover.svg'

import odd from './images/odd.svg'
import even from './images/even.svg'
import point from './images/point.svg'
import point1 from './images/point1.svg'
import showPoint from './images/toLeft.svg'
import showTextPic from './images/showText.svg'

import line_hover1 from './images/Line/line_hover1.svg'
import line_hover2 from './images/Line/line_hover2.svg'
import line_hover3 from './images/Line/line_hover3.svg'
import line_hover4 from './images/Line/line_hover4.svg'
import line_hover5 from './images/Line/line_hover5.svg'
import line1 from './images/Line/line1.svg'
import line2 from './images/Line/line2.svg'
import line3 from './images/Line/line3.svg'
import line4 from './images/Line/line4.svg'
import line5 from './images/Line/line5.svg'

import position1 from './images/position/position1.svg'
import position2 from './images/position/position2.svg'
import position3 from './images/position/position3.svg'
import position4 from './images/position/position4.svg'
import position5 from './images/position/position5.svg'
import position1_hover from './images/position/position1_hover.svg'
import position2_hover from './images/position/position2_hover.svg'
import position3_hover from './images/position/position3_hover.svg'
import position4_hover from './images/position/position4_hover.svg'
import position5_hover from './images/position/position5_hover.svg'


//全局大框架
export const Container = styled.div<{ isPadding?: boolean }>`
  width: 100%;
`
// 满屏盒子
export const FullPage = styled.div`
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  position: relative;
  &.home1 {
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    inset: 0;
    background-image: url(${homePage});
  }
  &.home2 {
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`
export const TextContainer = styled.div<{ left?: string, right?: string, top?: string, bottom?: string, width?: number }>`
    position: absolute;
    left: ${({ left }) => (left ? left : '')} ;
    bottom: ${({ bottom }) => (bottom ? bottom : '')} ;
    right: ${({ right }) => (right ? right : '')} ;
    top: ${({ top }) => (top ? top : '')} ;
    width: ${({ width }) => (width ? `${width / 100}rem` : 'auto')};
    .entryButton{
      cursor: pointer;
     width: 2.2rem;
     height: 0.54rem;
      border-radius: 0.08rem;
      /* transform: skewX(-9deg); */
      text-align: center;
      line-height: 0.54rem;
      font-size: 0.16rem;
      font-family: Poppins-Medium, Poppins;
      font-weight: 500;
      position: relative;
      color:#fff;
      span {
        display: inline-block;
        width: 0.12rem;
        height: 0.12rem;
        margin-left: 0.05rem;
        background-image: url(${point1});
        background-repeat: no-repeat;
        background-size: 100% 100%;
      }
       &:after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transform: skewX(-10deg);
    border:1px solid #fff;
border-radius: 8px;

}
    }
    &.circle{
        animation: change 1s;
            -moz-animation: change 1s;    
            -webkit-animation: change 1s;    
            -o-animation: change 1s;
        @keyframes change{
            from {
                scale:0.2
            }
            to { scale:1}
        }
        
    }
    &.position{
        position:absolute;
        &:hover{
                .text,.number{
                    color:#fff
                }
            }
        .number{
            font-size:0.24rem;
            font-family: GTAmericaLC-Bd, GTAmericaLC;
            font-weight: normal;
            color: #242528;
            line-height: 0.24rem;
            margin-bottom:0.28rem;
        }
        .text{
            font-size: 0.16rem;
            font-family: Poppins-Regular, Poppins;
            font-weight: 400;
            color: #242528;
            line-height: 0.24rem;
            
        }
        .pointsLine{
            position:absolute;
            background-repeat:no-repeat;
            background-size:100% 100%;
        }
        .pointsLine1{
            width: 2.43rem;
            height: 0.53rem;
            left:0;
            top:0.37rem;
            background-image:url(${line1})

        }
        .pointsLine2{
            width: 2.44rem;
            height: 0.5rem;
            left:0;
            top:0.38rem;
            background-image:url(${line2})

        }
        .pointsLine3{
            width: 2.53rem;
            height: 0.75rem;
            left:0;
            top:0;
            background-image:url(${line3})
        }
        .pointsLine4{
            width: 1.32rem;
            height: 0.66rem;
            left:0;
            top:0;
            background-image:url(${line4})
        }
        .pointsLine5{
            width: 2.54rem;
            height: 0.72rem;
            right:0;
            top:0.03rem;
            background-image:url(${line5})
        }
    }
    &.position1{
        width: 2.43rem;
        height: 1.24rem;
        background-image:url(${position1});
        background-size:100% 100%;
        background-repeat:no-repeat;
        &:hover{
          background-image:url(${position1_hover});
                .pointsLine1{
                    background-image:url(${line_hover1})
                }
            }
    }
    &.position2{
        width: 2.43rem;
        height: 1.24rem;
        background-image:url(${position2});
        background-size:100% 100%;
        background-repeat:no-repeat;
        .number{
            text-align:right;
        }
        .text{
            text-align:right;
            padding-left:0.24rem;
        }
        &:hover{
          background-image:url(${position2_hover});
                .pointsLine2{
                    background-image:url(${line_hover2})
                }
            }
    }
    &.position3{
        width: 2.8rem;
        height: 1.56rem;
        background-image:url(${position3});
        background-size:100% 100%;
        background-repeat:no-repeat;
        .number{
            margin-top:0.32rem
        }
        &:hover{
          background-image:url(${position3_hover});
            .pointsLine3{
                background-image:url(${line_hover3})
            }
        }
    }
    &.position4{
        width: 2.6rem;
        height: 1.48rem;
        background-image:url(${position4});
        background-size:100% 100%;
        background-repeat:no-repeat;
        .number{
            margin-top:0.24rem
        }
        &:hover{
          background-image:url(${position4_hover});
                .pointsLine4{
                    background-image:url(${line_hover4})
                }
            }
    }
    &.position5{
        width: 2.8rem;
        height: 1.56rem;
        background-image:url(${position5});
        background-size:100% 100%;
        background-repeat:no-repeat;
        .text{
            text-align:right;
        }
        .number{
            margin-top:0.29rem;
            text-align:right;
        }
        &:hover{
          background-image:url(${position5_hover});
            .pointsLine5{
                background-image:url(${line_hover5})
            }
        }
    }
`
export const Circle = styled.div`
  position: relative;
cursor: pointer;
  width: 1.4rem;
  height: 1.4rem;
  background-image: url(${circle});
  background-size: 100% 100%;
  transform: rotate(-180deg);
  animation: rotate 8s linear infinite;
  @-webkit-keyframes rotate {
    from {
      -webkit-transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-moz-keyframes rotate {
    from {
      -moz-transform: rotate(0deg);
    }
    to {
      -moz-transform: rotate(359deg);
    }
  }
  @-o-keyframes rotate {
    from {
      -o-transform: rotate(0deg);
    }
    to {
      -o-transform: rotate(359deg);
    }
  }
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`
//下箭头
export const Down = styled.div`
  width: 0.44rem !important;
  height: 0.44rem !important;
  background-image: url(${down}) !important;
  position: absolute;
  left: 0.48rem !important;
  top: 0.48rem !important;
  background-size: 100% 100%;
  margin: 0 !important;
  cursor: pointer;
`

//标题字体
export const TitleText = styled.div<{ fontSize?: number }>`
    /* font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : '100px')} ; */
    font-size:1rem;
    font-family: GTAmericaLC-Bd;
    font-weight: 800;
    color: #FFFFFF;
    line-height: 1rem;
    text-shadow: 0px 0.02rem 0.3rem rgba(0,0,0,0.05);
    letter-spacing:-0.005rem;
    text-transform:uppercase;
`

//文本字体--中等
export const TextBasic = styled.div<{ fontSize?: number }>`
  font-size: 0.2rem;
  font-family: Poppins-Medium;
  font-weight: 400;
  color: #ffffff;
  line-height: 0.36rem;
`
//文本字体--基本
export const TextRegular = styled.div<{ fontSize?: number }>`
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize / 100}rem` : '0.16rem')};
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #ffffff;
  line-height: 0.28rem;
`
//线
export const Line = styled.div<{ height?: string }>`
  height: ${({ height }) => (height ? height : 'auto')};
  width: 100%;
`
//球
export const Ball = styled.span<{ color?: string }>`
  display: inline-block;
  width: 0.18rem;
  height: 0.18rem;
  border-radius: 50%;
  background: ${({ color }) => (color ? color : '#D85111')};
  margin-left: 0.24rem;
  position: absolute;
  bottom: 0.1rem;
  right: -0.4rem;
`
// 四个icon 排列
export const FlexContainer = styled.div<{ intro?: string }>`
  display: flex;
  > a {
    display: inline-block;
    &.icons {
      margin-right: 0.16rem;
      width: 0.78rem;
      height: 0.64rem;
    }
    &.footer {
      margin-left: 0.16rem;
      width: 0.36rem;
      height: 0.36rem;
    }

    background-size: 100% 100%;
    &.icon1 {
      background-image: url(${icon1});
    }
    &.icon2 {
      background-image: url(${icon2});
    }
    &.icon3 {
      background-image: url(${icon3});
    }
    &.icon4 {
      background-image: url(${icon4});
    }
    &.footer1 {
      background-image: url(${footer1});
      &:hover{
        background-image: url(${footer1_hover});
      }
    }
    &.footer2 {
      background-image: url(${footer2});
      &:hover{
       background-image: url(${footer2_hover});
     }
    }
    &.footer3 {
      background-image: url(${footer3});
      &:hover{
       background-image: url(${footer3_hover});
     }
    }
    &.footer4 {
      background-image: url(${footer4});
      &:hover{
       background-image: url(${footer4_hover});
     }
    }
  }
`
export const ShowPic = styled.div`
  width: 56vw;
  height: 27.1vw;
  position: relative;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: auto 100%;
  -webkit-clip-path: polygon(6% 0, 100% 0, 100% 85%, 84% 100%, 0 100%, 0 6%);
  clip-path: polygon(6% 0, 100% 0, 100% 85%, 84% 100%, 0 100%, 0 6%);
  background-image: url(${home2_showPic});
`
export const LineText = styled.div`
  position: absolute;
  top: 0;
  right: -45px;
  width: 20px;
  font-size: 20px;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #242528;
  line-height: 20px;
  letter-spacing: 1px;
  writing-mode: vertical-lr;
`
export const TextPic = styled.div<{ width?: number; num: number }>`
  width: ${({ width }) => (width ? `${width}px` : '2.21rem')};
  height: 1.06rem;
  background-image: ${({ num }) => (num === 1 ? `url(${textPic1})` : `url(${textPic1})`)};
  background-size: 100% 100%;
  background-repeat: no-repeat;
`
export const ShowText = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 0.46rem;
`

export const WidthDiv = styled.div<{ width?: string }>`
    width: ${({ width }) => (width ? width : 'auto')};
    &.upMove{
        position: absolute;
        right: 0;
        top:-1.36rem;
        z-index: 2;
        width: 3.4rem;
        >div{
            &:nth-child(1){
                text-indent: 0.5rem;
                .line{
                    width: 0.7rem;
                    height: 1px;
                    border: 1px solid #FFFFFF;
                    position: absolute;
                    left: -0.34rem;
                    top: 0.1rem;
                }
        }
        }
    }
    &.showBall{
        display:flex;
        position: relative;
    }
    &.homeContainer{
        position: relative;
        width: 12.94rem;
        display: flex;
        flex-direction: column;
    }
    &.home3_title{
        display:flex;
        width:100%;
        justify-content:space-between;
        margin:0 auto;
    }
    &.home3_piCon{
        align-items: center;
        background-image: url(${home3_showPic}) ;
        background-repeat:no-repeat;
        background-position: 50% 80%;
        background-size: 88%;
        display: flex;
        justify-content: center;
        position: relative;
        width:100%;
        height:8.16rem ;
        animation:move 2s ;
        @keyframes move{
        0%{
            background-position-x: 50%;
        }
        30%{
            background-position-x: 150%;
        }
        60%{
            background-position-x: -50%;
        }
        80%{
          background-position-x: -50%;
        }
        100%{
            background-position-x: 50%;
        }
    }
    }
    &.home3_picGlass{
        background: url(${home3_showBg}) no-repeat;
        background-position: 50%;
        background-size: 100% 100%;
        height:8.178rem ;
        position: relative;
        top: -0.01rem;
        width: 100vw;
            &::before{
                background: #111112;
        bottom: 0;
        content: "";
        position: absolute;
        top: 0;
        width: 200px;
            }
            &::after{
                background: #111112;
        bottom: 0;
        content: "";
        position: absolute;
        top: 0;
        width: 200px;
        right:0;
            }
    }
    &.home4_title_up{
        display:flex;
        width:100%;
        align-items:center;
        justify-content:space-between;
    }
    &.home4_title_down{
        display:flex;
        width:100%;
        align-items:center;
    }
    &.home4_Con{
      padding-left: 0.24rem;
        width:100%;
        height: 5.6rem;
        margin-top:0.41rem;
        position: relative;
    }
    &.home5_title{
        display: flex;
    justify-content: space-between;
    width: 100%;
        >div{

            display:flex;
            div{
                &:nth-child(1){
                margin-right:0.16rem;
            }
            }
        }
      }
    
  &.home5_Con {
    margin-top: 0.8rem;
    display: flex;
    width: 100%;
    height: 5.94rem;
    justify-content: space-between;
  }
  &.home6_con {
    width: 100%;
    position: relative;
  }
`

export const ShowPoint = styled.div`
  width: 1rem;
  height: 1rem;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-image: url(${showPoint});
`

export const ShowTextImg = styled.div`
  width: 6.73rem;
  height: 1rem;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-image: url(${home4_tit});
`
export const ButtonsGrop = styled.div`
  display: flex;
  > div {
    cursor: pointer;
    width: 2.15rem;
    height: 0.52rem;
    border-radius: 0.08rem;
    /* transform: skewX(-9deg); */
    text-align: center;
    line-height: 0.52rem;
    font-size: 0.16rem;
    font-family: Poppins-Medium, Poppins;
    font-weight: 500;
    position: relative;
    
    span {
      display: inline-block;
      width: 0.12rem;
      height: 0.12rem;
      margin-left: 0.05rem;
      background-image: url(${point});
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }
  }
  .left {
    /* background: #fff; */
    color: rgba(17, 17, 17, 1);
    margin-right: 16px;
    span {
      background-image: url(${point});
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }
    &:after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transform: skewX(-10deg);
    background: #fff;
border-radius: 8px;

    z-index: -1;
}
  }
  .right {
    color: #fff;
    /* background: rgba(36, 37, 40, 1); */
    span {
      background-image: url(${point1});
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }
    &:after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transform: skewX(-10deg);
    /* background: rgba(36, 37, 40, 1); */
    border:1px solid rgba(36, 37, 40, 1);
border-radius: 8px;

    z-index: -1;
}
  }
`
export const TextIntro = styled.div<{ width?: number }>`
  font-size: 0.16rem;
  font-family: Poppins-Medium, Poppins;
  font-weight: 500;
  color: #ffffff;
  line-height: 0.29rem;
  text-transform: uppercase;
  /* width: 206px; */
  margin-right: 0.2rem;
  width: ${({ width }) => (width ? `${width / 100}rem` : ' 2.06rem')};
  &.showText{
    /* text-indent:0.4rem;
    position:relative;
    .lines{
        position:absolute;
        width: 0.44rem;
        height: 0.01rem;
        border: 0.01rem solid #FFFFFF;
        left:-0.39rem;
        top:0.12rem;
    } */
    width: 2.43rem;
    height: 1rem;
    background-image:url(${showTextPic});
    background-repeat:no-repeat;
    background-size:100% 100%;
  }
`
export const LeftText = styled.div`
  > div {
    
    text-indent: 0.5rem;
    
  }
  width: 2.73rem;
  bottom: 0;
  position: absolute;
  .lines{
    width: 0.59rem;
height: 0.01rem;
border: 0.01rem solid #FFFFFF;
position: absolute;
left: -0.24rem;
top: 0.12rem;
}
`
export const ShowPic1 = styled.div`
  background-image: url(${home4_showPic});
  width: 9.65rem;
  height: 5.6rem;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  right: 0;
  position: absolute;
`

export const TitleTextImage = styled.div`
  width: 6.38rem;
  height: 1rem;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-image: url(${home5_tit});
`
export const Items = styled.div<{ num: number }>`
  margin-right: 0.24rem;
  &:last-child {
    margin-right: 0;
  }
  &:nth-child(even) {
    .intro .icon {
      background-image: url(${even});
      background-size: 100% 100%;
      background-repeat: no-repeat;
    }
  }
  width: 3.05rem;
  flex-direction: column;
  display: flex;
  .show {
    width: 100%;
    height: 5.2rem;
    background-image: ${({ num }) =>
        num === 1
            ? `url(${home5_icon1})`
            : num === 2
                ? `url(${home5_icon2})`
                : num === 3
                    ? `url(${home5_icon3})`
                    : `url(${home5_icon4})`};
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .intro {
    padding-top: 0.2rem;
    display: flex;
    .icon {
      min-width: 0.17rem;
      width: 0.17rem;
      height: 0.17rem;
      background-image: url(${odd});
      background-size: 100% 100%;
      background-repeat: no-repeat;
      margin-right: 0.24rem;
      position: relative;
      top: 0.05rem;
    }
    .info {
      font-size: 0.16rem;
      font-family: GTAmericaLC-Bd, GTAmericaLC;
      font-weight: normal;
      color: #ffffff;
      line-height: 0.26rem;
    }
  }
`
export const HomeShow = styled.div`
  .pic {
    height: 5.23rem;
    width: 100%;
    background-image: url(${home6_showPic});
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .text {
    position: absolute;
    top: -0.5rem;
  }
  .con {
    width: 100%;
    height: 2.26rem;
    display: flex;
    justify-content: space-between;
    .items {
      width: 3.05rem;
      margin-right: 0.24rem;
      margin-top: 0.3rem;
      padding-top: 0.32rem;
      padding-left: 0.32rem;
      &:last-child {
        margin-right: 0;
      }
      &:first-child {
        padding-left: 0;
      }
      .number {
        font-size: 0.24rem;
        font-family: GTAmericaLC-Bd, GTAmericaLC;
        font-weight: normal;
        color: #ffffff;
        line-height: 0.32rem;
      }
      .introtext {
        font-size: 0.16rem;
        font-family: Poppins-Medium, Poppins;
        font-weight: 500;
        color: #575a61;
        line-height: 0.24rem;
        margin-top: 0.2rem;
      }
    }
  }
`

export const SelfFooter = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  height: 0.73rem;
  padding: 0 0.73rem;
  justify-content: space-between;
  align-items: center;
  display: flex;
  .left {
    font-size: 0.16rem;
    font-family: Poppins-Regular, Poppins;
    font-weight: 400;
    color: #575a61;
  }
`

export const PositionDiv = styled.div<{}>``
