import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "チートスキル完全ガイド｜異世界転生で最強になれるスキル一覧 | 転生メーカー",
  description:
    "異世界転生でおなじみのチートスキルを徹底解説。時間操作、無限収納、全言語理解など人気スキルランキングと活用法。あなたに合ったチートスキルをAI診断で発見しよう。",
  keywords: [
    "チートスキル",
    "異世界転生 スキル",
    "チートスキル 一覧",
    "最強スキル 異世界",
    "転生 チート",
    "チートスキル ランキング",
  ],
  openGraph: {
    title: "チートスキル完全ガイド｜異世界転生で最強になれるスキル一覧",
    description:
      "時間操作、無限収納、全言語理解…人気チートスキルを完全解説。あなたに合ったスキルをAIが診断。",
  },
};

export default function CheatSkillGuide() {
  const skills = [
    {
      name: "時間操作（クロノスコントロール）",
      desc: "時間を止める、巻き戻す、加速する。戦闘でも日常でも最強クラスのスキル。多くの異世界作品で「反則級」と称される。",
      type: "攻撃・支援",
    },
    {
      name: "無限収納（インフィニット・ストレージ）",
      desc: "異次元空間にあらゆるものを収納できる。冒険者必須スキル。素材・武器・食料を無制限に持ち運び可能。",
      type: "補助",
    },
    {
      name: "全言語理解（バベルトランスレーション）",
      desc: "あらゆる種族・モンスターの言語を即座に理解し、話せる。異世界到着直後から無双できる交渉系チートスキル。",
      type: "交渉・情報",
    },
    {
      name: "鑑定（アナライズ）",
      desc: "対象のステータス、スキル、弱点を全て見通す。情報こそ最大の武器。RPGの「ライブラ」に相当するスキル。",
      type: "情報",
    },
    {
      name: "創造魔法（クリエイション）",
      desc: "想像したものを魔力で現実化する。武器・道具・建築物まで何でも生み出せる究極の生産系チートスキル。",
      type: "生産・攻撃",
    },
    {
      name: "不死身（イモータル）",
      desc: "あらゆるダメージから自動回復し、死亡しても復活する。最終防衛ラインとなるチートスキル。",
      type: "防御",
    },
    {
      name: "魅了（カリスマ）",
      desc: "人や魔物を自然と惹きつけ、味方にする。戦わずして勝つ。仲間集めや国家運営に最適なスキル。",
      type: "交渉・支援",
    },
    {
      name: "空間転移（テレポート）",
      desc: "任意の場所へ瞬間移動。逃走・奇襲・移動のすべてに使える万能スキル。上位互換では異世界間の移動も可能。",
      type: "移動・攻撃",
    },
  ];

  return (
    <article>
      <time className="text-sm text-[#555]">2025年2月9日</time>
      <h1 className="text-3xl font-black text-[#d4a847] mt-2 mb-6">
        チートスキル完全ガイド｜異世界転生で最強になれるスキル一覧
      </h1>

      <div className="prose prose-invert max-w-none space-y-6 text-[#ccc] leading-relaxed">
        <p>
          異世界転生モノで主人公が授かる<strong className="text-[#ffd700]">チートスキル</strong>。
          「この世界では普通ですが？」と言いながら規格外の力を振るう——そんな爽快感が人気の秘密です。
          この記事では、異世界転生作品に登場する代表的なチートスキルを完全ガイドします。
        </p>

        <h2 className="text-xl font-bold text-[#e8e6df] mt-8 mb-4">
          人気チートスキル TOP 8
        </h2>

        <div className="space-y-4">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="bg-[#1a1a2e] rounded-xl p-5 border border-[#d4a84720]"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-bold text-[#ffd700]">
                  {i + 1}. {skill.name}
                </h3>
                <span className="text-xs text-[#d4a847] border border-[#d4a84740] rounded-full px-3 py-1">
                  {skill.type}
                </span>
              </div>
              <p className="text-sm text-[#aaa]">{skill.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-xl font-bold text-[#e8e6df] mt-8 mb-3">
          あなたに合ったチートスキルは？
        </h2>
        <p>
          チートスキルは、持ち主の性格や特技と相性が良いほど強力に発動します。
          例えば、リーダーシップがある人なら「魅了（カリスマ）」、
          手先が器用な人なら「創造魔法（クリエイション）」が適しています。
        </p>
        <p>
          転生メーカーでは、<strong className="text-[#d4a847]">あなたの趣味・特技・性格をAIが分析</strong>し、
          最適なチートスキルを自動で選出します。
          定番スキルだけでなく、あなただけのオリジナルスキルが生まれることも。
        </p>

        <h2 className="text-xl font-bold text-[#e8e6df] mt-8 mb-3">
          チートスキルの活用シーン
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>戦闘</strong> — 圧倒的な火力や防御力でモンスターを一蹴</li>
          <li><strong>冒険</strong> — 移動・探索・収納で効率的なダンジョン攻略</li>
          <li><strong>日常</strong> — 料理・建築・交渉で異世界ライフを満喫</li>
          <li><strong>政治</strong> — 国家運営・外交・革命で世界を動かす</li>
        </ul>

        <div className="mt-10 text-center">
          <a
            href="/"
            className="inline-block bg-[#d4a847] text-[#0a0a12] font-bold px-8 py-4 rounded-lg text-lg hover:opacity-90 transition"
          >
            あなたのチートスキルを診断する →
          </a>
        </div>
      </div>
    </article>
  );
}
