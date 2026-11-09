# Guanwei's Website

> 2026 全新改版的個人網站。A new version of my personal website, rebuilt in 2026.

這個網站記錄我的專業經歷、系統整合能力、可公開專案與持續研究方向，內容涵蓋智慧工廠、製造與倉儲系統、全端軟體開發，以及 AI 相關研究。

Website: [https://guanwei514.github.io/guanwei-website/](https://guanwei514.github.io/guanwei-website/)

## Technology

- React
- TypeScript
- Vite
- Oxlint

## Local Development

```bash
npm install
npm run dev
```

預設開發網址為 `http://localhost:5173`。

## Verification

```bash
npm run lint
npm run build
```

## Visual theme

保留一頁式區塊與響應式 Layout，使用 GW development 的主綠 `#1B4A46`、極黑綠 `#081311`、近白 `#F5F3ED` 與訊號綠 `#9ED9BE`。樣式 tokens 集中於 `src/styles/foundation.css`。

全站共用字型鏈：`Noto Sans, Microsoft JhengHei UI, 微軟正黑體, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif`。Noto Sans 一般／斜體變數字型隨網站提供，不依賴外部字型服務；繁體中文由系統 fallback 顯示。SIL OFL 授權隨部署提供於 `public/fonts/OFL.txt`，正式 GW 圖騰位於 `src/assets/brand/`。

## Personal products

`src/sections/ProductsSection.tsx` 提供個人產品區塊，中英文內容集中在 `src/content/siteContent.ts` 的 `products`。首項產品為 GW API Master 2.2.0，影片位於 `public/videos/gw-api-master-2.2.0.mp4`，封面由原影片抽幀產生，位於 `src/assets/products/`。

播放器提供原生播放／暫停、音量、進度與全螢幕控制，使用 `playsInline`、`preload="none"`，不自動播放。影片 URL 使用 Vite `BASE_URL`，相容 GitHub Pages 的 `/guanwei-website/` 子路徑。新增產品時擴充 `products.items`，並提供對應影片及封面。

Last updated: 2026/11/09
