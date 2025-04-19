要件をいったん“箇条書き 1  シート”に整理

項目 決定事項
フロント Next.js 14（App Router）＋ Tailwind CSS（shadcn/ui）
バックエンド Next.js Route Handlers / Server Actions だけで完結（＝フルスタック Next）
AWS 連携 - S3: レシート画像保存（presigned URL で直アップロード）

- Textract: 画像 → テキスト/OCR 解析
- RDS (PostgreSQL) + Prisma: メタデータ永続化
- ※Textract→Server Actions 呼び出しで同期処理（β 版なら Lambda + S3 イベントでも可）
  認証 NextAuth.js + Cognito（or GitHub OAuth）
  CI/CD GitHub Actions → Vercel デプロイ（環境変数で AWS IAM キー注入）
  テスト Vitest（ユニット）＋ Playwright（E2E）
  非機能 - モバイル対応
- PWA オフライン閲覧（IndexedDB キャッシュ）
  MVP 期日 4  週間（平日 2h / 週末 6h 想定）

1. アーキテクチャ概要
   text
   コピーする
   編集する
   Browser
   └─▶ PUT file (presigned URL) ─▶ S3 bucket
   ▲ │ (S3 event opt.)
   │ ▼
   Server Action: │ Lambda -> Textract OCR 1) getPresigned | │ 2) saveMeta └──── JSON result ◀─┘
   │
   Next.js Route Handler ─▶ DB (RDS via Prisma)
   presigned URL でフロントから直接 S3 へアップロード → 帯域課金を最小化
   AWS ドキュメント
   AWS ドキュメント
   DEV Community

Textract は画像キーを渡して同期呼び出し (AnalyzeExpenseCommand) → 店名・日付・合計を抽出
Amazon Web Services, Inc.
Amazon Web Services, Inc.

OCR 結果＋画像 URL を Prisma に保存し /dashboard ISR を再生成。

2. データモデル（Prisma）
   prisma
   コピーする
   編集する
   model Receipt {
   id String @id @default(cuid())
   userId String
   s3Key String @unique
   merchant String?
   total Decimal @db.Money
   spentAt DateTime
   rawOcrJson Json
   createdAt DateTime @default(now())
   user User @relation(fields: [userId], references: [id])
   }

model User {
id String @id @default(cuid())
email String @unique
receipts Receipt[]
}
Money を float で持たない点を面接で語れる。

3. 画面／ルート構成
   cpp
   コピーする
   編集する
   app/
   ├─ layout.tsx // AuthProvider / ThemeProvider
   ├─ receipts/
   │ ├─ page.tsx // 一覧＋検索
   │ ├─ new/
   │ │ └─ page.tsx // アップロード (Dropzone)
   │ └─ [id]/page.tsx // 詳細・編集
   └─ dashboard/page.tsx // 月次サマリ (円グラフ)
   actions/receipt.ts に

generateUploadUrl()

saveReceiptMeta()

deleteReceipt() を実装。

4. タイムライン（4  週間）

週 ゴール
1 リポジトリ雛形 / Tailwind / shadcn/ui セットアップ
Prisma schema + RDS 接続
2 presigned URL 生成 → S3 直アップロード動作確認（ローカル）
DEV Community
3 Textract OCR 組込 & Server Actions 経由でメタ保存
一覧・詳細 UI／円グラフ (recharts)
4 Playwright シナリオ・GitHub Actions CI / README 充実 → Vercel 公開 5. コスト試算（東京リージョンざっくり）

サービス 無料枠消化後の目安
S3 0.025 USD/GB 月 = 1000 枚 ≒ 70  円
Textract 1,000  ページ/月 無料 → 超過 0.065 USD/ページ
RDS t4g.micro 約 1,150  円/月 (常時起動)
開発段階なら月 2,000  円以内 に収まる。

6. 面接で刺さる“語りネタ”
   「直アップロード × Server Actions」でレイテンシ体感 30→3  秒

Textract の精度 92 %→ 手動修正 UI を設計し DX/UX のバランス説明

GitHub Actions → Vercel Preview URL を PR ごとに発行＝レビュープロセス効率化

最後に
Next.js + AWS で “レシート → 数字” を 1 分で完結させる――
