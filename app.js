import { useState } from "react";

const ORANGE = "#FF6A00";
const BLACK = "#0D0D0D";
const DARK = "#161616";
const CARD = "#1C1C1C";
const CARD2 = "#222222";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@400;500;600;700&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    background: ${BLACK};
    font-family: 'Montserrat', sans-serif;
    color: #fff;
  }

  .app {
    max-width: 420px;
    margin: 0 auto;
    min-height: 100vh;
    background: ${BLACK};
    position: relative;
    overflow: hidden;
  }

  .topbar {
    background: ${ORANGE};
    padding: 14px 18px 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 100;
  }

  .topbar-logo {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .topbar-wordmark {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 22px;
    color: #fff;
    letter-spacing: 1px;
    line-height: 1;
  }

  .topbar-sub {
    font-size: 8px;
    color: rgba(255,255,255,0.85);
    font-weight: 600;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    margin-top: -1px;
  }

  .notif-btn {
    background: rgba(0,0,0,0.25);
    border: none;
    border-radius: 50%;
    width: 34px;
    height: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #fff;
  }

  .scroll-area {
    padding: 16px 14px 100px;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .hero {
    background: linear-gradient(135deg, #1a0a00 0%, #2d1200 40%, #1C1C1C 100%);
    border: 1px solid rgba(255,106,0,0.3);
    border-radius: 16px;
    padding: 18px 16px;
    position: relative;
    overflow: hidden;
  }

  .hero-title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 26px;
    color: #fff;
    line-height: 1.1;
  }

  .hero-title span {
    color: ${ORANGE};
  }

  .hero-subtitle {
    font-size: 11px;
    color: rgba(255,255,255,0.55);
    margin-top: 4px;
  }

  .stats-row {
    display: flex;
    gap: 10px;
  }

  .stat-card {
    flex: 1;
    background: ${CARD};
    border-radius: 12px;
    padding: 14px 12px;
    text-align: center;
  }

  .stat-num {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 26px;
    color: ${ORANGE};
  }

  .stat-lbl {
    font-size: 10px;
    color: rgba(255,255,255,0.45);
    margin-top: 4px;
  }

  .card {
    background: ${CARD};
    border-radius: 14px;
    padding: 14px;
  }

  .video-row {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .play-btn {
    background: ${ORANGE};
    width: 52px;
    height: 52px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .video-info h4 {
    font-size: 13px;
    color: #fff;
  }

  .video-info p {
    font-size: 11px;
    color: rgba(255,255,255,0.45);
  }

  .market-grid {
    display: flex;
    gap: 8px;
    overflow-x: auto;
  }

  .market-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
  }

  .market-icon {
    width: 54px;
    height: 54px;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .market-name {
    font-size: 10px;
    color: rgba(255,255,255,0.55);
  }

  .addr-card {
    background: ${CARD2};
    border-radius: 12px;
    padding: 14px;
  }

  .addr-row {
    display: flex;
    gap: 10px;
    padding: 8px 0;
    border-bottom: 1px solid rgba(255,255,255,0.05);
  }

  .addr-value {
    font-size: 13px;
    color: #fff;
  }

  .copy-all-btn {
    background: ${ORANGE};
    width: 100%;
    padding: 13px;
    border: none;
    border-radius: 10px;
    color: #fff;
    font-weight: 700;
    margin-top: 12px;
  }

  .bottom-nav {
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 420px;
    display: flex;
    background: #111;
  }

  .nav-item {
    flex: 1;
    text-align: center;
    padding: 8px 0;
    color: rgba(255,255,255,0.3);
  }

  .nav-item.active {
    color: ${ORANGE};
  }
`;

export default function BustonApp() {
  const [activeNav, setActiveNav] = useState(0);

  const USER_ID = "BC4702836";
  const WAREHOUSE_PHONE = "+7 777 000 00 00";
  const ADDRESS =
    "浙江省义乌市北苑街道柳河路8号D座1楼南1号⻔ BUSTON#BC4702836号";

  return (
    <>
      <style>{styles}</style>

      <div className="app">
        <div className="topbar">
          <div className="topbar-logo">
            <div>
              <div className="topbar-wordmark">BUSTON</div>
              <div className="topbar-sub">Cargo & Logistics</div>
            </div>
          </div>
        </div>

        <div className="scroll-area">
          <div className="hero">
            <div className="hero-title">
              ДОСТАВКА<br />
              ИЗ КИТАЯ<br />
              <span>ПОД КЛЮЧ</span>
            </div>
            <div className="hero-subtitle">
              Быстро. Надёжно. Без переплат.
            </div>
          </div>

          <div className="stats-row">
            <div className="stat-card">
              <div className="stat-num">15</div>
              <div className="stat-lbl">Дней доставки</div>
            </div>
            <div className="stat-card">
              <div className="stat-num">500+</div>
              <div className="stat-lbl">Клиентов</div>
            </div>
            <div className="stat-card">
              <div className="stat-num">0%</div>
              <div className="stat-lbl">Потерь</div>
            </div>
          </div>

          <div className="card">
            <div className="video-row">
              <div className="play-btn">▶</div>
              <div className="video-info">
                <h4>Как сделать заказ?</h4>
                <p>Видео инструкция</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="market-grid">
              <div className="market-item">
                <div className="market-icon" style={{ background: "#E02020" }}>
                  PDD
                </div>
                <div className="market-name">Pinduoduo</div>
              </div>
              <div className="market-item">
                <div className="market-icon" style={{ background: "#FF6900" }}>
                  TB
                </div>
                <div className="market-name">Taobao</div>
              </div>
              <div className="market-item">
                <div className="market-icon" style={{ background: "#C0272D" }}>
                  JD
                </div>
                <div className="market-name">JD</div>
              </div>
            </div>
          </div>

          <div className="addr-card">
            <div className="addr-row">
              <div className="addr-value">ID: {USER_ID}</div>
            </div>
            <div className="addr-row">
              <div className="addr-value">TEL: {WAREHOUSE_PHONE}</div>
            </div>
            <div className="addr-row">
              <div className="addr-value">{ADDRESS}</div>
            </div>

            <button className="copy-all-btn">СКОПИРОВАТЬ ВСЁ</button>
          </div>
        </div>

        <div className="bottom-nav">
          {["Главная", "Заказы", "SCAN", "Чат", "Профиль"].map((t, i) => (
            <div
              key={i}
              className={
                "nav-item " + (activeNav === i ? "active" : "")
              }
              onClick={() => setActiveNav(i)}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}