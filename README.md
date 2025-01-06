# 32-Dot Pixel Art Converter

JPEGまたはPNG画像を32×32ドットのピクセルアートに変換します。
※子どものアイロンビーズ向けに作りました。

## 機能

- JPEG/PNG画像のアップロード
- 自動的に32×32ドットに変換
- グリッド表示で見やすい出力
- レスポンシブデザイン対応

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
