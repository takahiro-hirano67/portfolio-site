# Takahiro Hirano - Portfolio Site

平野貴大のポートフォリオサイトです。これまでの経歴、制作物、研究内容、およびスキルセットをまとめています。

**ポートフォリオサイトへのリンク:** [https://takahiro-hirano67.vercel.app](https://takahiro-hirano67.vercel.app)

## 技術スタック

- **フレームワーク:** Next.js 16 (App Router)
- **言語:** TypeScript 5
- **スタイリング:** Tailwind CSS v4
- **リンター/フォーマッター:** Biome 2
- **デプロイ:** Vercel

## 特徴

本サイトは、パフォーマンスと保守性を重視したモダンなフロントエンド技術を用いて構築されています。

- **静的データとUIの分離**: `src/data/index.ts` を静的なヘッドレスCMSのように見立て、UIコンポーネントからデータを分離。コードを触らずにコンテンツの追加・更新が可能な設計にしています。
- **Server Components の最大化**: Next.js (App Router) の強みを活かし、状態管理が必要な最小限のコンポーネント（スライドビューアーなど）やアニメーションラッパーのみに `"use client"` を指定。ベースとなるレイアウトはサーバー側でレンダリングし、高速な表示を実現しています。
- **堅牢な型定義**: コンテンツデータはすべて `src/types` に定義したインターフェースに依存しており、開発時のタイポ防止や入力補完の恩恵を最大限に受けています。

## 主要な構成

```text
src/
├── app/                  # Next.js App Router (ページ、レイアウト、SEO設定)
├── components/           # UIコンポーネント群
│   └── FadeIn.tsx        # アニメーション用クライアントラッパー
├── config/               # サイト全体の静的設定 (フォント、メタデータ)
├── data/                 # ポートフォリオのコンテンツデータ (簡易CMS)
└── types/                # データ構造の型定義
```

## ローカル環境の構築手順

リポジトリをクローンし、ローカルで動かす手順です。

1. **パッケージのインストール**

```bash
npm install

```

2. **開発サーバーの起動**

```bash
npm run dev

```

3. **ブラウザで確認**
   [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) にアクセスして確認します。

## コード整形

Biomeを使用して、コードのフォーマットとLintを行っています。

```bash
# チェックのみ
npm run lint-check

# 自動修正とフォーマット
npm run lint

```

## 開発者

**平野 貴大**

- GitHub: [@takahiro-hirano67](https://github.com/takahiro-hirano67)
- Qiita: [@takahiro-hirano67](https://qiita.com/takahiro-hirano67)
