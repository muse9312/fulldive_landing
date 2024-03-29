import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import i18next from "../lang/i18n";
import countries from "../countries.json"; // 국가 데이터를 가져옵니다.

const data = [
    {
        id: 1,
        imgUrl: "/images/deathdate.png",
        name: "DEATHDATE 온라인 라이브",
        artist: "DEATHDATE",
        date: "2023/04/02",
        time: "20:00",
        extraDate: "D-100",
    },
    {
        id: 2,
        imgUrl: "/images/nekiru.png",
        name: "NEKIRU 온라인 라이브",
        artist: "NEKIRU",
        date: "2023/04/05",
        time: "20:00",
        extraDate: "D-100",
    },
    {
        id: 3,
        imgUrl: "/images/clitz.png",
        name: "C.LiTZ 온라인 라이브",
        artist: "C.LITZ",
        date: "2023/04/08",
        time: "20:00",
        extraDate: "D-100",
    },
    {
        id: 4,
        imgUrl: "/images/lucidream.png",
        name: "오사카 매쉬업 라이브",
        artist: "DEATHDATE, C.LiTZ, 皆実杏奈, 愛理たん",
        date: "2023/01/01",
        time: "20:00",
        extraDate: "D-100",
    },
    {
        id: 5,
        imgUrl: "/images/osaka.png",
        name: "도쿄 매쉬업 라이브",
        artist: "NEKIRU, NTORE, ばたんキュン, Hiyorna",
        date: "2023/01/01",
        time: "20:00",
        extraDate: "D-100",
    },
    {
        id: 6,
        imgUrl: "/images/tokyo.png",
        name: "LuciDream 온라인 라이브",
        artist: "LuciDream",
        date: "2023/01/01",
        time: "20:00",
        extraDate: "D-100",
    },
];

function Main() {
    const { t } = useTranslation();
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    const [phoneCode, setPhoneCode] = useState("");

    // 선택된 국가 코드를 저장할 상태값을 생성합니다.
    const [countryCode, setCountryCode] = useState("+82"); // 초기값은 대한민국(KR)으로 설정합니다.

    // Phone Code Input이 변경될 때마다 실행될 콜백 함수를 작성합니다.
    const handlePhoneCodeChange = (event) => {
        setPhoneCode(event.target.value);
    };

    // 국가 코드가 변경될 때마다 실행될 콜백 함수를 작성합니다.
    const handleCountryCodeChange = (event) => {
        setCountryCode(event.target.value);
    };

    // 국가 옵션 리스트를 생성합니다.
    const countryOptions = countries.map((country) => (
        <option value={country.code} key={country.code}>
            {country.code}
        </option>
    ));

    const clickHandler = (lang) => {
        i18next.changeLanguage(lang);
        localStorage.setItem("lang", lang);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            const targetDate = new Date("April 14, 2023 00:00:00");
            const now = new Date();
            const timeDiff = targetDate - now;

            if (timeDiff <= 0) {
                clearInterval(intervalId);
            } else {
                const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
                const hours = Math.floor(
                    (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                );
                const minutes = Math.floor(
                    (timeDiff % (1000 * 60 * 60)) / (1000 * 60)
                );
                const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

                setTimeLeft({ days, hours, minutes, seconds });
            }
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const { days, hours, minutes, seconds } = timeLeft;

    return (
        <Wrap>
            <Container className="first">
                <div>
                    <img
                        src="/images/fulldive_logo.svg"
                        width="auto"
                        height="auto"
                        alt="logo"
                    />
                    <p>
                        {t("date")} <span>OPEN</span>
                    </p>
                    <span>
                        {`${days.toString().padStart(2, "0")} : ${hours
                            .toString()
                            .padStart(2, "0")} : ${minutes
                            .toString()
                            .padStart(2, "0")} : ${seconds
                            .toString()
                            .padStart(2, "0")}`}
                    </span>
                </div>
            </Container>
            <Container className="second">
                <div>
                    <p>
                        {t("first")} <span>{t("second")}</span>
                        {t("third")}
                    </p>
                    <span>{t("fourth")}</span>
                </div>
                <StageWrap>
                    {data.map((data, index) => (
                        <StageDiv key={index}>
                            <img src={data.imgUrl} width="100%" alt="artist" />
                            <p className="title">{data.name}</p>
                            <p className="artist">{data.artist}</p>
                            <p className="calendar">{data.date}</p>
                            <div>
                                <p>
                                    {/* <img
                                        src="/images/clock.svg"
                                        width="18px"
                                        height="18px"
                                    /> */}
                                    {data.time}
                                </p>
                                <span>{data.extraDate}</span>
                            </div>
                        </StageDiv>
                    ))}
                </StageWrap>
            </Container>
            <Container className="third">
                <div>
                    <div className="left">
                        <p>
                            Artist <span>Mash-Up</span>
                        </p>
                        <p className="des">{t("five")}</p>
                        <span>{t("six")}</span>
                    </div>
                    <div className="right">
                        <Image className="tickets" />
                        <Image className="ticket" />
                    </div>
                </div>
            </Container>
            <Container className="fourth">
                <div>
                    <div>
                        <img
                            src="/images/computer.svg"
                            width="100%"
                            alt="computer"
                        />
                    </div>
                    <div>
                        <h1>
                            <span>Escape from </span>Twitube
                        </h1>
                        <h2>{t("seven")}</h2>
                        <p>{t("eight")}</p>
                    </div>
                </div>
            </Container>
            <Container className="fifth">
                <div>
                    <div className="fifth_left">
                        <img src="/images/logo_black.svg" alt="logo_black" />
                        <p>{t("nine")}</p>
                        <span>{t("ten")}</span>
                    </div>
                    <div className="fifth_right">
                        <img src="/images/hello.svg" width="100%" alt="hello" />
                        <p>{t("eleven")}</p>
                    </div>
                </div>
            </Container>
            <Container className="sixth">
                <div>
                    <h1>{t("twelve")}</h1>
                    <span>* {t("thirteen")} : 2023/01/01 - 2023/03/31</span>
                    <p>
                        {t("eighteen")}
                        <br />
                        <span>{t("nineteen")}</span>
                        &nbsp;{t("twelever")}!
                    </p>
                    <div>
                        <Input placeholder={t("fourteen")} className="name" />
                        <Select
                            value={countryCode}
                            onChange={handleCountryCodeChange}
                        >
                            {countryOptions}
                        </Select>
                        <PhoneInput
                            type="text"
                            placeholder={t("fifteen")}
                            value={phoneCode}
                            onChange={handlePhoneCodeChange}
                        />
                    </div>
                    <button>{t("sixteen")}</button>
                </div>
            </Container>
            <Footer>
                <div>
                    <div>
                        <div>
                            <h1>FullDive</h1>
                            <IButton
                                lang={localStorage.lang}
                                name="ko"
                                onClick={() => clickHandler("ko")}
                            >
                                한국어
                            </IButton>
                            <IButton
                                lang={localStorage.lang}
                                name="jp"
                                onClick={() => clickHandler("jp")}
                            >
                                日本語
                            </IButton>
                        </div>
                        <div>
                            <a
                                href="https://www.instagram.com/fulldivelive"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src="/images/insta_icon.svg"
                                    alt="instagram"
                                    className="left"
                                    width="30px"
                                />
                            </a>
                            <a
                                href="https://twitter.com/fulldivelive"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src="/images/twitter_icon.svg"
                                    alt="twitter"
                                    height="30px"
                                />
                            </a>
                        </div>
                    </div>
                    <span>
                        상호명 : 코스모스 &nbsp; I &nbsp; 대표 : 전지환 &nbsp; I
                        &nbsp; 사업자등록번호 : 412-07-35849 &nbsp; I &nbsp;
                        주소 : 서울특별시 종로구 창경궁로 253-7 2층
                    </span>
                    <p>© 2023 Fulldive</p>
                </div>
            </Footer>
        </Wrap>
    );
}

const Select = styled.select`
    margin-top: 24px;
    margin-right: 12px;
    width: 30%;
    height: 60px;
    border: none;
    border-radius: 100px;
    background: #14141c;
    color: #ffffff;
    padding: 0 12px;
    font-size: 1rem;
`;

const PhoneInput = styled.input`
    width: 66%;
    background: #14141c;
    border: none;
    border-radius: 100px;
    color: white;
    font-size: 16px;
    height: 60px;
    text-indent: 25px;
`;

const Input = styled.input`
    width: 100%;
    background: #14141c;
    border: none;
    border-radius: 100px;
    color: white;
    font-size: 16px;
    height: 60px;
    text-indent: 60px;
    background: url("/images/landing_user.svg") no-repeat 25px 50% #14141c;
    &.phone {
        margin-top: 24px;
        background: #14141c;
        text-indent: 30px;
    }
`;

const IButton = styled.button`
    margin-left: 8px;
    background: #ffffff1a;
    color: #888888;
    border: none;
    border-radius: 100px;
    padding: 0 12px;
    font-size: 14px;
    height: 25px;
    cursor: pointer;
    color: ${(props) => props.lang === props.name && "#111117"};
    background: ${(props) => props.lang === props.name && "#A0FF27"};
`;

const Footer = styled.footer`
    width: 100%;
    position: fixed;
    bottom: 0;
    padding: 30px 0;
    background: #111117;
    color: #888888;
    > div {
        max-width: 684px;
        margin: 0 auto;
        > div {
            display: flex;
            justify-content: space-between;
            > div {
                display: flex;
                > h1 {
                    font-size: 30px;
                    font-weight: 700;
                    margin-right: 18px;
                }
            }
            > div {
                > a {
                    > img {
                        margin-right: 10px;
                        &.left {
                            margin-right: 16px;
                        }
                    }
                }
            }
        }
        > span {
            display: block;
            margin-top: 30px;
            font-size: 14px;
        }
        > p {
            margin-top: 16px;
            font-size: 14px;
        }
    }
`;

const StageDiv = styled.div`
    width: 28%;
    padding: 24px;
    background: #111117;
    margin-bottom: 24px;
    border-radius: 12px;
    text-align: initial;
    > img {
        border-radius: 12px;
    }
    > p {
        margin-top: 20px;
        margin-bottom: 14px;
        line-height: px;
        &.calendar {
            background: url("/images/calendar.svg") no-repeat 0 50%;
            background-size: 18px;
            padding-left: 25px;
            line-height: 20px;
        }
        &.title {
            margin-top: 20px;
            font-size: 24px;
            font-weight: 600;
        }
    }
    > div {
        display: flex;
        justify-content: space-between;
        text-align: end;
        p {
            background: url("/images/clock.svg") no-repeat;
            background-size: 18px;
            padding-left: 25px;
            line-height: 20px;
        }
        > span {
            padding: 10px 20px;
            background: #a0ff27;
            border-radius: 100px;
            color: #14141c;
            font-weight: 600;
        }
    }
`;

const StageWrap = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 80px;
`;

const Image = styled.div`
    width: 100%;
    &.tickets {
        height: 200px;
        background: url("/images/tickets.png") no-repeat;
        background-size: 100%;
    }
    &.ticket {
        height: 260px;
        background: url("/images/ticket.png") no-repeat;
        background-size: 100%;
    }
`;

const Container = styled.div`
    &.first {
        /* height: auto; */
        padding-top: 30%;
        padding-bottom: 120px;
        background: #111117;
        text-align: right;
        > div {
            padding: 0 10%;
            > p {
                font-size: 96px;
                font-weight: 700;
                margin-bottom: 24px;
                > span {
                    color: #a0ff27;
                }
            }
            > span {
                margin-top: 24px;
                font-size: 48px;
                font-weight: 700;
            }
        }
    }
    &.second {
        padding-top: 120px;
        text-align: center;
        > div {
            padding: 0 10%;
            > p {
                font-size: 40px;
                font-weight: 700;
                margin-bottom: 24px;
                > span {
                    color: #a0ff27;
                }
            }
            > span {
                margin-top: 12px;
                font-size: 24px;
                font-weight: 300;
            }
        }
    }
    &.third {
        background: #111117;
        padding-top: 120px;
        > div {
            padding: 0 10%;
            display: flex;
            > div {
                width: 50%;
                &.left {
                    > p {
                        font-size: 40px;
                        font-weight: 700;
                        margin-bottom: 24px;
                        > span {
                            color: #a0ff27;
                        }
                        &.des {
                            font-size: 36px;
                            font-weight: 500;
                        }
                    }
                    > span {
                        font-size: 24px;
                        font-weight: 300;
                    }
                }
                &.right {
                    margin-left: 100px;
                    padding-bottom: 110px;
                }
            }
        }
    }
    &.fourth {
        padding-top: 120px;
        padding-bottom: 100px;
        > div {
            padding: 0 10%;
            display: flex;
            > div {
                width: 50%;
                text-align: right;
                h1 {
                    font-size: 40px;
                    font-weight: 700;
                    > span {
                        color: #a0ff27;
                    }
                }
                h2 {
                    margin-top: 24px;
                    font-size: 36px;
                    font-weight: 500;
                }
                p {
                    margin-top: 48px;
                    font-size: 24px;
                    font-weight: 300;
                }
            }
        }
    }
    &.fifth {
        padding-top: 50px;
        padding-bottom: 120px;
        background: url("/images/map.png") no-repeat #a0ff27;
        background-size: 100%;
        color: #111117;
        > div {
            padding: 0 10%;
            display: flex;
            > div {
                width: 50%;
                &.fifth_left {
                    p {
                        margin-top: 90px;
                        margin-bottom: 48px;
                        font-size: 36px;
                        font-weight: 500;
                    }
                    span {
                        font-size: 24px;
                        font-weight: 300;
                    }
                }
                &.fifth_right {
                    font-size: 36px;
                    font-weight: 500;
                    text-align: right;
                    p {
                        margin-top: 50px;
                    }
                }
            }
        }
    }
    &.sixth {
        padding-top: 120px;
        > div {
            max-width: 550px;
            margin: 0 auto;
            text-align: center;
            h1 {
                font-size: 40px;
                font-weight: 700;
                margin-bottom: 12px;
            }
            span {
                color: #b5b5b5;
                font-size: 24px;
                font-weight: 400;
            }
            p {
                margin-top: 48px;
                font-size: 24px;
                font-weight: 400;
                line-height: 33.6px;
                span {
                    color: #a0ff27;
                }
            }
            div {
                margin-top: 48px;
                padding: 48px;
                border: 3px solid #a0ff27;
                border-radius: 24px;
            }
            button {
                margin-top: 80px;
                margin-bottom: 100px;
                padding: 15px 60px;
                border: none;
                background: #a0ff27;
                border-radius: 100px;
                font-size: 24px;
                font-weight: 600;
            }
        }
    }
`;

const Wrap = styled.main`
    background: #131313;
    height: 100%;
    color: white;
    padding-bottom: 207px;
`;

export default Main;
