import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "RPGステータス診断の楽しみ方｜攻撃力・防御力・魔力の意味 | 転生メーカー",
  description:
    "RPGステータス診断で表示される各パラメータの意味と楽しみ方を解説。攻撃力・防御力・魔力・素早さ・運の数値があなたの性格をどう反映しているか紹介。友達と比較して盛り上がろう。",
  keywords: [
    "RPG ステータス 診断",
    "ステータス 診断",
    "攻撃力 診断",
    "ステータス 意味",
    "RPG パラメータ",
    "ステータス 性格診断",
  ],
  openGraph: {
    title: "RPGステータス診断の楽しみ方｜攻撃力・防御力・魔力の意味",
    description:
      "RPGステータスの各パラメータがあなたの性格をどう反映しているか解説。友達と比べて楽しもう。",
  },
};

export default function RpgStatusShindan() {
  const stats = [
    {
      name: "攻撃力（ATK）",
      meaning: "行動力・決断力・推進力",
      desc: "高い人は即断即決タイプ。目標に向かってガンガン突き進む実行力の持ち主。営業職やリーダーに多い傾向。",
      color: "#ef4444",
    },
    {
      name: "防御力（DEF）",
      meaning: "忍耐力・安定感・信頼性",
      desc: "高い人はどっしり構えた安定タイプ。ストレス耐性が高く、周囲の柱になる存在。管理職やエンジニアに多い。",
      color: "#f59e0b",
    },
    {
      name: "魔力（MAG）",
      meaning: "創造力・直感力・感性",
      desc: "高い人はクリエイティブタイプ。独創的なアイデアを生み出す天才肌。アーティストやデザイナーに多い。",
      color: "#a855f7",
    },
    {
      name: "素早さ（SPD）",
      meaning: "適応力・柔軟性・機転",
      desc: "高い人は変化に強い万能タイプ。新しい環境にすぐ馴染み、臨機応変に対応できる。スタートアップ人材に多い。",
      color: "#22c55e",
    },
    {
      name: "運（LUK）",
      meaning: "引き・直感・偶然力",
      desc: "高い人は天然の強運タイプ。意図せず良い結果を引き寄せる。「なんとかなる」精神の楽天家に多い。",
      color: "#3b82f6",
    },
  ];

  return (
    <article>
      <time className="text-sm text-[#555]">2025年2月10日</time>
      <h1 className="text-3xl font-black text-[#d4a847] mt-2 mb-6">
        RPGステータス診断の楽しみ方｜攻撃力・防御力・魔力の意味
      </h1>

      <div className="prose prose-invert max-w-none space-y-6 text-[#ccc] leading-relaxed">
        <p>
          RPGでおなじみの<strong className="text-[#d4a847]">ステータスパラメータ</strong>。
          攻撃力・防御力・魔力・素早さ・運——これらの数値は、実はあなたの性格や特性を反映しています。
          転生メーカーのAI診断では、回答内容からこれらのステータスを算出し、
          RPG風のステータスカードとして可視化します。
        </p>

        <h2 className="text-xl font-bold text-[#e8e6df] mt-8 mb-4">
          各ステータスの意味と性格傾向
        </h2>

        <div className="space-y-4">
          {stats.map((stat) => (
            <div
              key={stat.name}
              className="bg-[#1a1a2e] rounded-xl p-5 border border-[#d4a84720]"
            >
              <div className="flex items-center gap-3 mb-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: stat.color }}
                />
                <h3 className="text-lg font-bold text-[#e8e6df]">
                  {stat.name}
                </h3>
              </div>
              <p className="text-sm text-[#d4a847] mb-1">
                現実での意味：{stat.meaning}
              </p>
              <p className="text-sm text-[#aaa]">{stat.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-xl font-bold text-[#e8e6df] mt-8 mb-3">
          ステータスの読み方
        </h2>
        <div className="bg-[#1a1a2e] rounded-xl p-5 border border-[#d4a84720] space-y-3">
          <p>
            <strong className="text-[#ffd700]">バランス型</strong>
            ：全ステータスが均等 → 万能タイプ。どんな状況にも対応できるオールラウンダー。
          </p>
          <p>
            <strong className="text-[#ff2d55]">一点特化型</strong>
            ：一つだけ突出 → スペシャリスト。その分野では無敵だが弱点も明確。
          </p>
          <p>
            <strong className="text-[#a855f7]">二極型</strong>
            ：2つが高く他が低い → ギャップタイプ。意外な組み合わせがユニークな個性に。
          </p>
        </div>

        <h2 className="text-xl font-bold text-[#e8e6df] mt-8 mb-3">
          友達と比べて楽しもう
        </h2>
        <p>
          RPGステータス診断の醍醐味は<strong>友達と比較すること</strong>。
          TwitterやLINEで診断結果をシェアして、パーティメンバーを組んでみてください。
          攻撃特化の人と防御特化の人が組めば最強パーティの完成です。
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>「私ATK特化だから前衛ね」「俺MAG高いから後衛で」</li>
          <li>URが出るまでみんなでガチャ回し</li>
          <li>チートスキルの相性を語り合う</li>
        </ul>

        <h2 className="text-xl font-bold text-[#e8e6df] mt-8 mb-3">
          HP・MPの意味
        </h2>
        <p>
          ステータスカードに表示される<strong className="text-[#22c55e]">HP（体力）</strong>はあなたのスタミナ・持続力、
          <strong className="text-[#3b82f6]">MP（魔力）</strong>は集中力・精神力を表しています。
          HPが高い人は長期戦に強く、MPが高い人は短時間で高い成果を出すタイプです。
        </p>

        <div className="mt-10 text-center">
          <a
            href="/"
            className="inline-block bg-[#d4a847] text-[#0a0a12] font-bold px-8 py-4 rounded-lg text-lg hover:opacity-90 transition"
          >
            あなたのRPGステータスを診断する →
          </a>
        </div>
      </div>
    </article>
  );
}
