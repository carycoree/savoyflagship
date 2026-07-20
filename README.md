# Savoy Cigar Flagship · Cloudflare Workers

完整的 Cloudflare Workers 專案版本，包含雙語網站、所有已使用的圖片與網站設定。

## 上傳到 GitHub

1. 解壓縮本專案。
2. 將所有檔案上傳到新的 GitHub repository 根目錄。
3. 確認 `wrangler.jsonc`、`package.json`、`app`、`public` 與 `worker` 都位於根目錄。

## Cloudflare Workers 設定

在 Cloudflare Dashboard 選擇 **Workers & Pages → Create application → Import a repository**，連接 GitHub 並選取此 repository。

- Production branch: `main`
- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`

首次部署時，請確認 Cloudflare Worker 名稱和 `wrangler.jsonc` 中的 `name` 相同；預設為 `savoy-cigar-kaohsiung`。若 Cloudflare 要求改名，請同時修改該檔案的 `name`。

## 日後更新

每次修改完成後，將變更推送至 GitHub 的 `main` 分支，Cloudflare 就會自動建置與部署。

## 本機測試（選用）

```bash
npm install
npm run dev
```

部署前可在本機執行：

```bash
npm run build
```
Cloudflare deployment refresh
