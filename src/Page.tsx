import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import {
  Ball,
  ButtonsGrop,
  Circle,
  Container,
  Down,
  FlexContainer,
  FullPage,
  HomeShow,
  Items,
  LeftText,
  Line,
  LineText,
  SelfFooter,
  ShowPic,
  ShowPic1,
  ShowPoint,
  ShowText,
  ShowTextImg,
  TextBasic,
  TextContainer,
  TextIntro,
  TextPic,
  TextRegular,
  TitleText,
  TitleTextImage,
  WidthDiv
} from './styled'
// import './font.scss'
import './base.scss'
import { SwiperContainer } from './swiper'

const basicIcons = [
  {
    link: 'https://t.me/TriathonLab',
    intro: 'icon'
  },
  {
    link: 'https://discord.gg/WJF9x54VY7',
    intro: 'icon'
  },
  {
    link: 'https://twitter.com/TriathonLab',
    intro: 'icon'
  },
  {
    link: 'https://medium.com/@Triathon',
    intro: 'icon'
  }
]
const baseIntro = [
  {
    text: 'Token incentive for early adopters'
  },
  {
    text: 'Double token rewards for participation in testing'
  },
  {
    text: 'Join in early tested projects & become a seed member'
  },
  {
    text: 'Get a whitelist of quality projects'
  }
]
const introInfo = [
  {
    text: ['NFT Building and Staking', 'DAO']
  },
  {
    text: ['NFT full Series Release']
  },
  {
    text: ['Token Mining', 'Injection of liquidity ', 'ITO']
  },
  {
    text: ['Competition (Beta)', 'Equity Dividend']
  }
]

export default () => {
  const history = useHistory()

  useEffect(() => {
    const Canvas = document.getElementById('space')
    console.log(Canvas, 'Canvas')
    if (Canvas) {
      Canvas.style.display = 'block'
    }

    return () => {
      if (Canvas) {
        Canvas.style.display = 'none'
      }
    }
  }, [])
  return (
    <Container>
      <SwiperContainer>
        <div className="swiper-slide">
          <FullPage className="home1">
            <TextContainer left="1rem" bottom="1rem" width={519}>
              <TitleText className="animate__animated animate__lightSpeedInLeft " id="home1_titleText">
                TRIATHON
              </TitleText>
              <Line height="0.16rem"></Line>
              <TextBasic className="animate__animated animate__fadeIn animate__delay-0.9s" id="home1_titleText_intro">
                Decentralized Test-driven and Fundraising Platform
              </TextBasic>
              <Line height="0.31rem"></Line>
              <div
                className="entryButton"
                onClick={() => {
                  window.open('https://www.triathon.space/ActivityTestToEarn/#/')
                }}
              >
                Bounty Hunter <span></span>
              </div>
              <Line height="0.55rem"></Line>
              <FlexContainer intro="icon" className="animate__animated animate__fadeIn animate__delay-0.9s">
                {basicIcons.map((item, index) => {
                  return (
                    // eslint-disable-next-line
                    <a
                      href={item.link}
                      target="view_window"
                      key={index}
                      className={`${item.intro}${index + 1} icons
                      `}
                    ></a>
                  )
                })}
              </FlexContainer>
            </TextContainer>
            <TextContainer right="1rem" bottom="1.20rem" className="circle">
              <Circle></Circle>
              <Down id="down" className="swiper-button-next"></Down>
            </TextContainer>
          </FullPage>
        </div>
        {/* home2 */}
        <div className="swiper-slide ">
          <FullPage className="home2">
            <WidthDiv
              className="homeContainer animate__animated animate__fadeIn animate__delay-0.7s animate__slower "
              id="home2_container"
            >
              <Line height="72px"></Line>
              <ShowPic className="animate__animated animate__fadeIn animate__delay-0.7s animate__slower">
                <LineText>Worldview </LineText>
              </ShowPic>
              <ShowText>
                <WidthDiv className="animate__animated animate__fadeInUp animate__fast" id="home2_Title_show">
                  <TextPic num={1}></TextPic>
                  <WidthDiv className="showBall">
                    <TitleText>Worldview</TitleText>
                    <Ball color=" #D85111"></Ball>
                  </WidthDiv>
                </WidthDiv>
                <WidthDiv className="upMove">
                  <TextRegular>
                    <div className="line"></div>
                    More and more people who are exploring Web3 and the future are trying to build new bridges through
                    different tracks, making more people in the physical world or Web2 enter the new universe of Web3.
                  </TextRegular>
                  <TextRegular>
                    Triathon chose to build a safe, stable and interesting rainbow bridge in the way of security test,
                    so that more and more people can join in the Web3 world and build the brightest and great future of
                    mankind together.
                  </TextRegular>
                </WidthDiv>
              </ShowText>
            </WidthDiv>
          </FullPage>
        </div>
        {/* home3 */}
        <div className="swiper-slide">
          <FullPage className="home2">
            <WidthDiv className="homeContainer">
              <Line height="72px"></Line>
              <WidthDiv className="home3_title animate__animated animate__fadeInDown" id="home3_title">
                <WidthDiv className="showBall  ">
                  <TitleText>Project Highlights</TitleText>
                  <Ball color=" #D85111"></Ball>
                </WidthDiv>
                <ShowPoint></ShowPoint>
              </WidthDiv>
            </WidthDiv>
            <WidthDiv className="home3_piCon" id="home3_piCon">
              <WidthDiv className="home3_picGlass">
                <TextContainer left="3.18rem" top="0.82rem" className="position1 position">
                  {/* <div className="number">01</div>
                  <div className="pointsLine pointsLine1"></div>
                  <div className="text">
                    NFT is Code, low-code engagement for security testing
                  </div> */}
                </TextContainer>
                <TextContainer right="3.13rem" top="0.82rem" className="position2 position">
                  {/* <div className="number">02</div>
                  <div className="pointsLine pointsLine2"></div>
                  <div className="text">
                    The first Community-Driven Testing&Fundrasing Platform
                  </div> */}
                </TextContainer>
                <TextContainer left="3.18rem" top="5.4rem" className="position3 position">
                  {/* <div className="number">03</div>
                  <div className="pointsLine pointsLine3"></div>
                  <div className="text">
                    The perfect combination of entertainment and practicality in form of Gamefi and Testfi
                  </div> */}
                </TextContainer>
                <TextContainer left="8.38rem" top="5.66rem" className="position4 position">
                  {/* <div className="number">04</div>
                  <div className="pointsLine pointsLine4"></div>
                  <div className="text">
                    Early stage members with specific NFTs  participate in the tiering of project revenues
                  </div> */}
                </TextContainer>
                <TextContainer right="3.13rem" top="5.4rem" className="position5 position">
                  {/* <div className="number">05</div>
                  <div className="pointsLine pointsLine5"></div>
                  <div className="text">
                    Bring financial rewards for community members to explore early and high quality projects
                  </div> */}
                </TextContainer>
              </WidthDiv>
            </WidthDiv>
          </FullPage>
        </div>
        {/* home4 */}
        <div className="swiper-slide">
          <FullPage className="home2">
            <WidthDiv
              className="homeContainer animate__animated animate__fadeIn animate__delay-0.7s animate__slower"
              id="home4_con"
            >
              <WidthDiv className="home4_title">
                <WidthDiv className="home4_title_up">
                  <ShowTextImg id="home4_title"></ShowTextImg>
                  <ButtonsGrop>
                    <div
                      className="left"
                      onClick={() => {
                        history.push('/battleground')
                      }}
                    >
                      Go to pledge <span></span>
                    </div>
                    <div
                      className="right"
                      onClick={() => {
                        history.push('/compose')
                      }}
                    >
                      Get the Spaceship<span></span>
                    </div>
                  </ButtonsGrop>
                </WidthDiv>
                <WidthDiv className="home4_title_down ">
                  <TextIntro>Own the Spaceships to unlock more gameplay and rights</TextIntro>
                  <WidthDiv className="showBall">
                    <TitleText>STARS</TitleText>
                    <Ball color=" #D85111"></Ball>
                  </WidthDiv>
                </WidthDiv>
              </WidthDiv>
              <WidthDiv className="home4_Con ">
                <LeftText>
                  <TextRegular>
                    On the Triathon platform, you only need to own a spaceship NFT to open all platform services and
                    receive token rewards at the same time, so having a spaceship is the first step to interstellar
                    exploration. By pledging, doing test missions, you will discover more early-stage investment
                    opportunities and get deeply involved on your way to the Web3 World. Let Triathon bring and capture
                    more early value for Web3 explorers!
                  </TextRegular>
                  <div className="lines"></div>
                </LeftText>
                <ShowPic1></ShowPic1>
              </WidthDiv>
            </WidthDiv>
          </FullPage>
        </div>
        {/* home5 */}
        <div className="swiper-slide">
          <FullPage className="home2">
            <WidthDiv className="homeContainer">
              <WidthDiv className="home5_title animate__animated animate__fadeInDown" id="home5_title">
                <WidthDiv>
                  <TitleText>Web3 </TitleText>
                  <WidthDiv className="showBall">
                    <TitleTextImage></TitleTextImage>
                    <Ball color=" #D85111"></Ball>
                  </WidthDiv>
                </WidthDiv>
                <TextIntro width={224} className="showText">
                  {/* <div className="lines"></div> */}
                  {/* Quality communities<br/> take you to get more <br/>value in return ! */}
                </TextIntro>
              </WidthDiv>
              <WidthDiv
                className="home5_Con animate__animated animate__fadeIn animate__delay-0.7s animate__slower"
                id="home5_con"
              >
                {baseIntro.map((item, index) => {
                  return (
                    <Items key={index} num={index + 1}>
                      <div className="show"></div>
                      <div className="intro">
                        <div className="icon"></div>
                        <div className="info">{item.text}</div>
                      </div>
                    </Items>
                  )
                })}
              </WidthDiv>
            </WidthDiv>
          </FullPage>
        </div>
        {/* home6 */}
        <div className="swiper-slide">
          <FullPage className="home2">
            <WidthDiv className="homeContainer">
              <Line height="72px"></Line>
              <WidthDiv className="home6_con">
                <HomeShow>
                  <div id="home6_title" className="text animate__animated animate__fadeInLeft ">
                    <WidthDiv className="showBall">
                      <TitleText>Milestone</TitleText>
                      <Ball color=" #D85111"></Ball>
                    </WidthDiv>
                  </div>
                  <span
                    className="animate__animated animate__fadeIn animate__delay-0.7s animate__slower"
                    id="home6_con"
                  >
                    <div className="pic"></div>
                    <div className="con">
                      {introInfo.map((item, index) => {
                        return (
                          <div className="items" key={index}>
                            <div className="number">{`0${index + 1}.`}</div>
                            {item.text.map((_t, _i) => {
                              return (
                                <div className="introtext" key={_i}>
                                  {_t}
                                </div>
                              )
                            })}
                          </div>
                        )
                      })}
                    </div>
                  </span>
                </HomeShow>
              </WidthDiv>
            </WidthDiv>
            <SelfFooter>
              <div className="left">© Copyright Triathon Ltd 2022</div>
              <FlexContainer intro="icon">
                {basicIcons.map((item, index) => {
                  return (
                    // eslint-disable-next-line
                    <a
                      href={item.link}
                      rel="noopener noreferrer"
                      target="view_window"
                      key={index}
                      className={`footer${index + 1} footer`}
                    ></a>
                  )
                })}
              </FlexContainer>
            </SelfFooter>
          </FullPage>
        </div>
      </SwiperContainer>
      <canvas id="space"></canvas>
    </Container>
  )
};
