# 32-Dot Pixel Art Converter

JPEGまたはPNG画像を32×32ドットのピクセルアートに変換するシンプルなウェブアプリケーションです。

## 機能の説明

- JPEG/PNG画像のアップロード
- 自動的に32×32ドットに変換
- グリッド表示で見やすい出力
- レスポンシブデザイン対応

## 変換イメージ

### 元画像:
![元画像](https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202025-01-05%2019.03.28-5UmipnJvfP2qnbVYOHMheeQOuGCyG7.png)

### 32×32ドット変換後:
![変換後](https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202025-01-06%2010.31.53-IEOOxfK5MTteqv2TgoWCbaCyQDSlUY.png)

## 技術スタック

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui コンポーネント

## 使用方法

1. アプリケーションにアクセス
2. "Upload JPEG or PNG image" の下にある入力フィールドをクリック
3. 変換したい画像（JPEGまたはPNG）を選択
4. 自動的に32×32ドットのピクセルアートに変換され表示

## インストール方法

```bash
# リポジトリのクローン
git clone <repository-url>

# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
