"use client";

import { useState, useEffect } from "react";

const PERSONALITIES = [
  "熱血タイプ",
  "クールタイプ",
  "天然タイプ",
  "策士タイプ",
  "努力家タイプ",
  "ムードメーカー",
];

const DESIRES = [
  "魔王を倒す",
  "のんびりスローライフ",
  "商売で大儲け",
  "最強になる",
  "みんなを救う",
  "世界を支配する",
];

interface Profile {
  title: string;
  race: string;
  class: string;
  level: number;
  hp: number;
  mp: number;
  attack: number;
  defense: number;
  magic: number;
  speed: number;
  luck: number;
  cheat_skill_name: string;
  cheat_skill_desc: string;
  weakness: string;
  world: string;
  quote: string;
}

// --- レア度判定 ---
type Rarity = "N" | "R" | "SR" | "SSR" | "UR";

function getRarity(profile: Profile): Rarity {
  const total =
    profile.attack + profile.defense + profile.magic + profile.speed + profile.luck;
  if (total >= 420) return "UR";
  if (total >= 370) return "SSR";
  if (total >= 300) return "SR";
  if (total >= 200) return "R";
  return "N";
}

const RARITY_CONFIG: Record<
  Rarity,
  { label: string; color: string; glow: string; bg: string }
> = {
  UR: {
    label: "UR - Universe Rare",
    color: "#ff2d55",
    glow: "0 0 30px rgba(255,45,85,0.6), 0 0 60px rgba(255,45,85,0.3)",
    bg: "linear-gradient(135deg, rgba(255,45,85,0.15), rgba(255,150,50,0.1))",
  },
  SSR: {
    label: "SSR - Super Special Rare",
    color: "#ffd700",
    glow: "0 0 25px rgba(255,215,0,0.5), 0 0 50px rgba(255,215,0,0.2)",
    bg: "linear-gradient(135deg, rgba(255,215,0,0.15), rgba(255,180,0,0.05))",
  },
  SR: {
    label: "SR - Special Rare",
    color: "#a855f7",
    glow: "0 0 20px rgba(168,85,247,0.4)",
    bg: "linear-gradient(135deg, rgba(168,85,247,0.1), rgba(100,50,200,0.05))",
  },
  R: {
    label: "R - Rare",
    color: "#3b82f6",
    glow: "0 0 15px rgba(59,130,246,0.3)",
    bg: "linear-gradient(135deg, rgba(59,130,246,0.1), rgba(30,64,175,0.05))",
  },
  N: {
    label: "N - Normal",
    color: "#9ca3af",
    glow: "none",
    bg: "transparent",
  },
};

// --- 無料回数管理 ---
const FREE_DAILY_LIMIT = 3;

function getTodayKey(): string {
  const d = new Date();
  return `tensei_${d.getFullYear()}${d.getMonth()}${d.getDate()}`;
}

function getUsageCount(): number {
  if (typeof window === "undefined") return 0;
  return parseInt(localStorage.getItem(getTodayKey()) || "0", 10);
}

function incrementUsage(): void {
  if (typeof window === "undefined") return;
  const key = getTodayKey();
  const current = parseInt(localStorage.getItem(key) || "0", 10);
  localStorage.setItem(key, String(current + 1));
}

// --- Components ---

function StatBar({
  label,
  value,
  type,
}: {
  label: string;
  value: number;
  type: string;
}) {
  return (
    <div className={`stat-${type}`}>
      <div className="mb-1 flex justify-between text-xs">
        <span className="text-gray-400">{label}</span>
        <span className="font-bold text-gray-300">{value}</span>
      </div>
      <div className="stat-bar">
        <div
          className="stat-bar-fill"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

function RarityBadge({ rarity }: { rarity: Rarity }) {
  const config = RARITY_CONFIG[rarity];
  return (
    <div
      className="mx-auto mb-4 inline-block rounded-full px-4 py-1.5 text-sm font-black tracking-widest"
      style={{
        color: config.color,
        border: `2px solid ${config.color}`,
        boxShadow: config.glow,
        background: config.bg,
      }}
    >
      {config.label}
    </div>
  );
}

function StatusCard({
  profile,
  name,
}: {
  profile: Profile;
  name: string;
}) {
  const rarity = getRarity(profile);
  const config = RARITY_CONFIG[rarity];

  const shareText = `【異世界転生診断】${rarity}キタ！！

${name}の転生結果:

🏷️「${profile.title}」
⚔️ ${profile.class}（${profile.race}）
⭐ Lv.${profile.level}
💥 チートスキル:「${profile.cheat_skill_name}」
😅 弱点: ${profile.weakness}

🗣️「${profile.quote}」

お前も転生してみろ👇`;

  const shareUrl =
    typeof window !== "undefined" ? window.location.origin : "";

  const handleShare = () => {
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}&hashtags=転生メーカー,異世界転生`;
    window.open(tweetUrl, "_blank");
  };

  return (
    <div className="animate-fade-in-up">
      <div className="text-center">
        <RarityBadge rarity={rarity} />
      </div>

      <div
        className="status-card mx-auto max-w-lg rounded-2xl p-6"
        style={{
          borderColor: config.color,
          boxShadow: `${config.glow}, inset 0 0 30px rgba(0,0,0,0.3)`,
        }}
      >
        {/* Header */}
        <div className="mb-6 text-center">
          <p className="mb-1 text-xs tracking-widest text-yellow-600/80">
            ― ISEKAI STATUS ―
          </p>
          <h2
            className="title-glow mb-1 text-2xl font-black"
            style={{ color: config.color }}
          >
            {profile.title}
          </h2>
          <p className="text-lg font-bold text-gray-200">{name}</p>
          <div className="mt-2 flex items-center justify-center gap-3 text-sm text-gray-400">
            <span>{profile.race}</span>
            <span style={{ color: config.color }}>|</span>
            <span>{profile.class}</span>
            <span style={{ color: config.color }}>|</span>
            <span>Lv.{profile.level}</span>
          </div>
        </div>

        {/* HP / MP */}
        <div className="mb-5 grid grid-cols-2 gap-4">
          <div>
            <div className="mb-1 flex justify-between text-xs">
              <span className="font-bold text-red-400">HP</span>
              <span className="text-gray-400">{profile.hp}</span>
            </div>
            <div className="stat-bar">
              <div
                className="stat-bar-fill"
                style={{
                  width: `${(profile.hp / 9999) * 100}%`,
                  background: "linear-gradient(90deg, #e74c3c, #ff6b6b)",
                }}
              />
            </div>
          </div>
          <div>
            <div className="mb-1 flex justify-between text-xs">
              <span className="font-bold text-blue-400">MP</span>
              <span className="text-gray-400">{profile.mp}</span>
            </div>
            <div className="stat-bar">
              <div
                className="stat-bar-fill"
                style={{
                  width: `${(profile.mp / 9999) * 100}%`,
                  background: "linear-gradient(90deg, #3498db, #74b9ff)",
                }}
              />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mb-6 space-y-2.5">
          <StatBar label="攻撃力 ATK" value={profile.attack} type="atk" />
          <StatBar label="防御力 DEF" value={profile.defense} type="def" />
          <StatBar label="魔力 MAG" value={profile.magic} type="mag" />
          <StatBar label="素早さ SPD" value={profile.speed} type="spd" />
          <StatBar label="運 LUK" value={profile.luck} type="luk" />
        </div>

        {/* Total Stats */}
        <div className="mb-5 text-center">
          <span className="text-xs text-gray-500">TOTAL POWER: </span>
          <span className="font-black" style={{ color: config.color }}>
            {profile.attack + profile.defense + profile.magic + profile.speed + profile.luck}
          </span>
          <span className="text-xs text-gray-500"> / 495</span>
        </div>

        {/* Cheat Skill */}
        <div className="skill-badge mb-4 rounded-xl p-4">
          <p className="mb-1 text-xs font-bold tracking-wider text-yellow-500">
            CHEAT SKILL
          </p>
          <p className="text-lg font-black text-yellow-300">
            {profile.cheat_skill_name}
          </p>
          <p className="mt-1 text-sm text-gray-400">
            {profile.cheat_skill_desc}
          </p>
        </div>

        {/* Weakness & World */}
        <div className="mb-4 grid grid-cols-2 gap-3">
          <div className="rounded-lg bg-white/5 p-3">
            <p className="mb-1 text-xs text-gray-500">弱点</p>
            <p className="text-sm font-medium text-red-300">
              {profile.weakness}
            </p>
          </div>
          <div className="rounded-lg bg-white/5 p-3">
            <p className="mb-1 text-xs text-gray-500">転生先</p>
            <p className="text-sm font-medium text-blue-300">
              {profile.world}
            </p>
          </div>
        </div>

        {/* Quote */}
        <div className="mb-6 text-center">
          <p className="text-sm italic text-gray-400">
            &ldquo;{profile.quote}&rdquo;
          </p>
        </div>

        {/* Share */}
        <div className="space-y-2">
          <button
            onClick={handleShare}
            className="w-full rounded-xl bg-[#1DA1F2] py-3 text-center font-bold text-white transition hover:bg-[#1a91da]"
          >
            Xで結果をシェアする
          </button>
          <button
            onClick={() => {
              const lineUrl = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`;
              window.open(lineUrl, "_blank");
            }}
            className="w-full rounded-xl bg-[#06C755] py-3 text-center font-bold text-white transition hover:bg-[#05b34c]"
          >
            LINEで送る
          </button>
        </div>
      </div>

      {/* Retry */}
      <div className="mt-6 text-center">
        <button
          onClick={() => window.location.reload()}
          className="text-sm text-gray-500 underline hover:text-gray-300"
        >
          もう一度転生する
        </button>
      </div>
    </div>
  );
}

function PremiumModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
      <div className="w-full max-w-md rounded-2xl bg-[#1a1a2e] border border-yellow-800/50 p-6 text-center">
        <p className="mb-2 text-3xl">⚡</p>
        <h3 className="mb-2 text-xl font-black text-yellow-400">
          本日の無料転生を使い切りました
        </h3>
        <p className="mb-6 text-sm text-gray-400">
          1日{FREE_DAILY_LIMIT}回まで無料で転生できます。明日またお試しください。
        </p>

        <div className="mb-6 rounded-xl border border-yellow-700/30 bg-yellow-900/10 p-4 text-left">
          <p className="mb-3 text-sm font-bold text-yellow-400">
            Proプラン（¥980/月）なら:
          </p>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>✨ 無制限に転生し放題</li>
            <li>📖 詳細な異世界バックストーリー生成</li>
            <li>⚔️ パーティメンバー自動生成</li>
            <li>🖼️ 高画質ステータスカード画像DL</li>
            <li>🌍 5つのワールドテーマから選択</li>
          </ul>
        </div>

        <button
          className="mb-3 w-full rounded-xl py-3 font-bold text-gray-900"
          style={{
            background: "linear-gradient(135deg, #d4a847, #f0d78c)",
          }}
          onClick={async () => {
            try {
              const res = await fetch("/api/checkout", { method: "POST" });
              const data = await res.json();
              if (data.url) {
                window.location.href = data.url;
              } else {
                alert("Proプランは準備中です。もうしばらくお待ちください！");
              }
            } catch {
              alert("Proプランは準備中です。もうしばらくお待ちください！");
            }
          }}
        >
          Proプランを始める
        </button>
        <button
          onClick={onClose}
          className="text-sm text-gray-500 hover:text-gray-300"
        >
          閉じる
        </button>
      </div>
    </div>
  );
}

export default function Home() {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [hobbies, setHobbies] = useState("");
  const [personality, setPersonality] = useState(PERSONALITIES[0]);
  const [desire, setDesire] = useState(DESIRES[0]);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPremium, setShowPremium] = useState(false);
  const [remaining, setRemaining] = useState(FREE_DAILY_LIMIT);

  useEffect(() => {
    setRemaining(FREE_DAILY_LIMIT - getUsageCount());
  }, []);

  const handleSubmit = async () => {
    if (!name.trim() || !job.trim()) {
      setError("名前と職業は必須です");
      return;
    }

    if (getUsageCount() >= FREE_DAILY_LIMIT) {
      setShowPremium(true);
      return;
    }

    setLoading(true);
    setError("");
    setProfile(null);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, job, hobbies, personality, desire }),
      });

      if (!res.ok) throw new Error("生成に失敗しました");

      const data = await res.json();
      setProfile(data.profile);
      incrementUsage();
      setRemaining(FREE_DAILY_LIMIT - getUsageCount());
    } catch {
      setError("転生に失敗しました...もう一度お試しください。");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      {showPremium && (
        <PremiumModal onClose={() => setShowPremium(false)} />
      )}

      {/* Header */}
      <header className="border-b border-gray-800">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-3">
          <h1
            className="text-lg font-black"
            style={{ color: "var(--gold)" }}
          >
            転生メーカー
          </h1>
          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-500">
              残り{remaining}回
            </span>
            <span className="rounded-full bg-yellow-900/30 px-3 py-1 text-xs text-yellow-500">
              無料診断
            </span>
          </div>
        </div>
      </header>

      {/* Hero */}
      {!profile && !loading && (
        <section className="hero-bg py-16">
          <div className="mx-auto max-w-2xl px-4 text-center">
            <p className="mb-3 text-sm font-bold tracking-widest text-yellow-600/80">
              AI ISEKAI DIAGNOSTIC
            </p>
            <h2 className="mb-4 text-3xl font-black leading-tight sm:text-4xl">
              異世界に転生したら
              <br />
              <span style={{ color: "var(--gold)" }}>何者になる？</span>
            </h2>
            <p className="mb-2 text-gray-400">
              あなたのプロフィールからAIが
              <br className="sm:hidden" />
              異世界転生ステータスを診断
            </p>
            <div className="mt-4 flex items-center justify-center gap-4 text-xs text-gray-600">
              <span>👥 累計診断数: 増加中</span>
              <span>|</span>
              <span>⭐ レア度: N〜UR</span>
            </div>
          </div>
        </section>
      )}

      <div className="mx-auto max-w-lg px-4 py-12">
        {!profile && !loading ? (
          /* Form */
          <div className="space-y-5">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-300">
                名前 <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="あなたの名前（ニックネーム可）"
                className="w-full rounded-xl border border-gray-700 bg-gray-900 px-4 py-3 text-gray-100 placeholder-gray-600 focus:border-yellow-600 focus:outline-none focus:ring-1 focus:ring-yellow-600/50"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-300">
                現世の職業 <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                value={job}
                onChange={(e) => setJob(e.target.value)}
                placeholder="例: エンジニア、学生、営業、主婦"
                className="w-full rounded-xl border border-gray-700 bg-gray-900 px-4 py-3 text-gray-100 placeholder-gray-600 focus:border-yellow-600 focus:outline-none focus:ring-1 focus:ring-yellow-600/50"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-300">
                趣味・特技
              </label>
              <input
                type="text"
                value={hobbies}
                onChange={(e) => setHobbies(e.target.value)}
                placeholder="例: ゲーム、料理、筋トレ、読書"
                className="w-full rounded-xl border border-gray-700 bg-gray-900 px-4 py-3 text-gray-100 placeholder-gray-600 focus:border-yellow-600 focus:outline-none focus:ring-1 focus:ring-yellow-600/50"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-300">
                性格タイプ
              </label>
              <div className="grid grid-cols-3 gap-2">
                {PERSONALITIES.map((p) => (
                  <button
                    key={p}
                    onClick={() => setPersonality(p)}
                    className={`rounded-lg border px-3 py-2 text-sm transition ${
                      personality === p
                        ? "border-yellow-600 bg-yellow-900/30 text-yellow-400"
                        : "border-gray-700 text-gray-400 hover:border-gray-500"
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-300">
                異世界でやりたいこと
              </label>
              <div className="grid grid-cols-2 gap-2">
                {DESIRES.map((d) => (
                  <button
                    key={d}
                    onClick={() => setDesire(d)}
                    className={`rounded-lg border px-3 py-2 text-sm transition ${
                      desire === d
                        ? "border-yellow-600 bg-yellow-900/30 text-yellow-400"
                        : "border-gray-700 text-gray-400 hover:border-gray-500"
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            {error && <p className="text-sm text-red-400">{error}</p>}

            <button
              onClick={handleSubmit}
              className="w-full rounded-xl py-4 text-lg font-black text-gray-900 transition hover:brightness-110"
              style={{
                background:
                  "linear-gradient(135deg, var(--gold), var(--gold-light))",
              }}
            >
              転生する
            </button>

            <p className="text-center text-xs text-gray-600">
              1日{FREE_DAILY_LIMIT}回まで無料 ・ 残り{remaining}回
            </p>
          </div>
        ) : loading ? (
          /* Loading */
          <div className="flex flex-col items-center justify-center py-20">
            <div className="relative mb-6 h-24 w-24">
              <div
                className="portal-ring absolute inset-0 rounded-full border-4 border-transparent"
                style={{
                  borderTopColor: "var(--gold)",
                  borderRightColor: "var(--gold-dark)",
                }}
              />
              <div
                className="portal-ring absolute inset-2 rounded-full border-4 border-transparent"
                style={{
                  borderBottomColor: "var(--gold-light)",
                  borderLeftColor: "var(--gold)",
                  animationDirection: "reverse",
                  animationDuration: "1.5s",
                }}
              />
              <div
                className="absolute inset-4 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(212,168,71,0.3), transparent)",
                }}
              />
            </div>
            <p
              className="text-lg font-bold"
              style={{ color: "var(--gold)" }}
            >
              異世界へ転送中...
            </p>
            <p className="mt-2 text-sm text-gray-500">
              あなたのステータスを算出しています
            </p>
          </div>
        ) : profile ? (
          <StatusCard profile={profile} name={name} />
        ) : null}
      </div>

      {/* Features (only on main view) */}
      {!profile && !loading && (
        <section className="border-t border-gray-800 py-16">
          <div className="mx-auto max-w-3xl px-4">
            <h3 className="mb-8 text-center text-xl font-bold text-gray-300">
              転生メーカーの特徴
            </h3>
            <div className="grid gap-6 sm:grid-cols-3">
              <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-5 text-center">
                <p className="mb-2 text-3xl">🤖</p>
                <h4 className="mb-1 font-bold text-gray-200">AI診断</h4>
                <p className="text-sm text-gray-500">
                  AIがあなたのプロフィールから最適な異世界ステータスを生成
                </p>
              </div>
              <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-5 text-center">
                <p className="mb-2 text-3xl">⭐</p>
                <h4 className="mb-1 font-bold text-gray-200">レア度判定</h4>
                <p className="text-sm text-gray-500">
                  N〜URの5段階。SSR以上を引けるか？運命はAIが決める
                </p>
              </div>
              <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-5 text-center">
                <p className="mb-2 text-3xl">🔄</p>
                <h4 className="mb-1 font-bold text-gray-200">何度でも</h4>
                <p className="text-sm text-gray-500">
                  毎回異なる結果。友達と比べて盛り上がろう
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="border-t border-gray-800 py-6">
        <div className="mx-auto max-w-3xl px-4 text-center text-xs text-gray-600">
          <p>&copy; 2025 転生メーカー - AI Isekai Status Diagnostic</p>
        </div>
      </footer>
    </div>
  );
}
