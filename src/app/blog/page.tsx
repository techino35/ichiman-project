import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ブログ | 転生メーカー - 異世界転生の全てがわかる",
  description:
    "異世界転生診断、チートスキル、RPGステータスに関する記事まとめ。転生メーカーの使い方から異世界知識まで。",
};

const articles = [
  {
    slug: "isekai-tensei-shindan",
    title: "異世界転生診断とは？AIが判定するあなたの転生先",
    description:
      "異世界転生診断の仕組みを徹底解説。名前・職業・趣味からAIがRPG風ステータスカードを自動生成。レア度やチートスキルの判定ロジックも公開。",
    date: "2025-02-08",
  },
  {
    slug: "cheat-skill-guide",
    title: "チートスキル完全ガイド｜異世界転生で最強になれるスキル一覧",
    description:
      "異世界転生でおなじみのチートスキルを徹底解説。時間操作、無限収納、全言語理解など人気スキルランキングと、あなたに合ったスキルの見つけ方。",
    date: "2025-02-09",
  },
  {
    slug: "rpg-status-shindan",
    title: "RPGステータス診断の楽しみ方｜攻撃力・防御力・魔力の意味",
    description:
      "RPGステータス診断で表示される各パラメータの意味と楽しみ方を解説。攻撃力・防御力・魔力・素早さ・運の数値があなたの性格をどう反映しているかを紹介。",
    date: "2025-02-10",
  },
];

export default function BlogIndex() {
  return (
    <div>
      <h1 className="text-3xl font-black text-[#d4a847] mb-2">ブログ</h1>
      <p className="text-[#888] mb-10">
        異世界転生・診断・RPGに関する記事
      </p>

      <div className="space-y-8">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/blog/${article.slug}`}
            className="block border border-[#d4a84730] rounded-xl p-6 hover:border-[#d4a847] transition group"
          >
            <time className="text-sm text-[#555]">{article.date}</time>
            <h2 className="text-xl font-bold text-[#e8e6df] mt-1 group-hover:text-[#d4a847] transition">
              {article.title}
            </h2>
            <p className="text-[#888] mt-2 text-sm leading-relaxed">
              {article.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
