# Takahiro Hirano - Portfolio Site

平野貴大の個人的なポートフォリオサイトです。これまでの経歴、制作物、研究内容、スキルセットの紹介に加え、開発の裏側やの思想など、技術的な探求の記録をまとめた記事を統合しています。

**ポートフォリオサイトへのリンク:** [https://takahiro-hirano67.vercel.app](https://takahiro-hirano67.vercel.app)

## 技術スタック

| 項目                      | 技術名                                                |
| ------------------------- | ----------------------------------------------------- |
| フレームワーク            | Next.js 16 (App Router)                               |
| 言語                      | TypeScript 5                                          |
| スタイリング              | Tailwind CSS v4                                       |
| Markdown関連              | react-markdown, remark-gfm, remark-math, rehype-katex |
| リンター / フォーマッター | Biome 2                                               |
| デプロイ                  | Vercel                                                |

## 特徴

本サイトは、パフォーマンスと保守性、そして「読む体験」を重視したモダンなアーキテクチャで構築されています。

- **静的データとUIの完全な分離**: コンテンツデータは `src/data/` 配下にドメインごと（ポートフォリオ/記事/共通）に分割して管理。ヘッドレスCMSのような構成にし、コードを触らずにコンテンツの拡張が可能な設計にしています。
- **Markdownベースのブログ機能 (SSG)**: `public/articles/` 配下に配置したMarkdownファイルを読み込み、ビルド時に静的ページとして生成（Static Site Generation）。高速なページロードと高いSEO性能を実現しています。
- **リッチなMarkdownビューアー**: `react-markdown` をベースに、シンタックスハイライト、KaTeX（数式描画）、Mermaid（ダイアグラム生成・画像ダウンロード対応）、GitHubライクなアラート記法など、技術記事の表現に必要な拡張をフルスクラッチで組み込んでいます。
- **Server Components の最大化**: Next.js (App Router) の強みを活かし、状態管理が必要な最小限のコンポーネントのみに `"use client"` を指定。ベースとなるレイアウトやMarkdownのパース処理の多くをサーバー側で完結させています。
- **堅牢な型定義**: コンテンツデータはすべて `src/types` に定義したインターフェースに依存しており、開発時のタイポ防止や入力補完の恩恵を最大限に受けています。

## 主要な構成

```text
.
├── public/               # 画像ファイルや記事の配置場所
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── articles/     # 記事一覧・詳細ページ (SSG)
│   │   └── portfolio/    # ポートフォリオトップページ
│   ├── components/       # UIコンポーネント群
│   │   └── markdown/     # Markdownレンダリング用カスタムコンポーネント
│   ├── config/           # サイト全体の静的設定 (フォント、メタデータ)
│   ├── data/             # コンテンツデータ (簡易CMS)
│   └── types/            # データ構造の型定義
└── next.config.ts        # ルート(/)から /portfolio へのリダイレクト等
```

## ローカル環境の構築

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
   [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) にアクセスして確認します（自動的に `/portfolio` へリダイレクトされます）。

## コード整形

Biomeを使用して、コードのフォーマットとLintを行っています。

```bash
# チェックのみ
npm run lint-check

# 自動修正とフォーマット
npm run lint
```

## 開発者

**平野貴大 (takahiro-hirano67)**

- GitHub: [@takahiro-hirano67](https://github.com/takahiro-hirano67)
- Qiita: [@takahiro-hirano67](https://qiita.com/takahiro-hirano67)
