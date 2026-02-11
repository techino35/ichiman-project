import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "異世界転生診断とは？AIが判定するあなたの転生先 | 転生メーカー",
  description:
    "異世界転生診断の仕組みを徹底解説。名前・職業・趣味からAIがRPG風ステータスカードを自動生成。レア度N〜URの判定ロジックやチートスキルの決定方法も公開。無料で診断できます。",
  keywords: [
    "異世界転生 診断",
    "転生診断",
    "異世界 診断 無料",
    "AI 転生診断",
    "異世界転生 テスト",
    "転生 ステータス",
  ],
  openGraph: {
    title: "異世界転生診断とは？AIが判定するあなたの転生先",
    description:
      "あなたの名前・職業・趣味からAIが異世界転生後のステータスを判定。レア度やチートスキルまで自動生成。",
  },
};

export default function IsekaiTenseiShindan() {
  return (
    <article>
      <time className="text-sm text-[#555]">2025年2月8日</time>
      <h1 className="text-3xl font-black text-[#d4a847] mt-2 mb-6">
        異世界転生診断とは？AIが判定するあなたの転生先
      </h1>

      <div className="prose prose-invert max-w-none space-y-6 text-[#ccc] leading-relaxed">
        <p>
          「もし異世界に転生したら、自分はどんな存在になるんだろう？」——そんな妄想を形にするのが<strong className="text-[#d4a847]">異世界転生診断</strong>です。
          転生メーカーでは、最新のAI技術を使って、あなただけの転生後ステータスを自動生成します。
        </p>

        <h2 className="text-xl font-bold text-[#e8e6df] mt-8 mb-3">
          異世界転生診断の仕組み
        </h2>
        <p>
          診断はとてもシンプル。5つの質問に答えるだけで、AIがあなたの異世界での姿を判定します。
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>名前</strong> — 転生後の二つ名のベースに</li>
          <li><strong>現世の職業</strong> — 転生後の職業（クラス）に影響</li>
          <li><strong>趣味・特技</strong> — チートスキルの方向性を決定</li>
          <li><strong>性格タイプ</strong> — ステータス配分に反映</li>
          <li><strong>異世界での望み</strong> — 転生先の世界観を決定</li>
        </ul>

        <h2 className="text-xl font-bold text-[#e8e6df] mt-8 mb-3">
          レア度システム：N〜URの5段階
        </h2>
        <p>
          転生メーカーでは、あなたの転生後ステータスの合計値に応じて<strong className="text-[#d4a847]">レア度</strong>が決定されます。
        </p>
        <div className="bg-[#1a1a2e] rounded-xl p-5 space-y-2 border border-[#d4a84720]">
          <p><span className="text-[#9ca3af] font-bold">N（ノーマル）</span> — 合計200未満。平凡な村人転生</p>
          <p><span className="text-[#3b82f6] font-bold">R（レア）</span> — 合計200〜299。冒険者の素質あり</p>
          <p><span className="text-[#a855f7] font-bold">SR（スーパーレア）</span> — 合計300〜369。英雄候補</p>
          <p><span className="text-[#ffd700] font-bold">SSR（ダブルスーパーレア）</span> — 合計370〜419。伝説級の存在</p>
          <p><span className="text-[#ff2d55] font-bold">UR（ウルトラレア）</span> — 合計420以上。世界を変える規格外の転生者</p>
        </div>

        <h2 className="text-xl font-bold text-[#e8e6df] mt-8 mb-3">
          AIによるチートスキル判定
        </h2>
        <p>
          異世界転生モノの醍醐味といえば<strong className="text-[#ffd700]">チートスキル</strong>。
          転生メーカーのAIは、あなたの趣味・特技・性格から最適なチートスキルを判定します。
          「時間操作」「無限収納」「全言語理解」など定番スキルから、あなただけのオリジナルスキルまで、
          AIが創造力を発揮して生成します。
        </p>

        <h2 className="text-xl font-bold text-[#e8e6df] mt-8 mb-3">
          診断結果をSNSでシェア
        </h2>
        <p>
          診断結果はRPG風のステータスカードとして表示され、TwitterやLINEでワンタップシェアできます。
          友達と結果を比べ合うのも楽しみ方の一つ。レア度URを引くまで何度でもチャレンジしてみてください。
        </p>

        <div className="mt-10 text-center">
          <a
            href="/"
            className="inline-block bg-[#d4a847] text-[#0a0a12] font-bold px-8 py-4 rounded-lg text-lg hover:opacity-90 transition"
          >
            今すぐ無料で転生診断する →
          </a>
        </div>
      </div>
    </article>
  );
}
