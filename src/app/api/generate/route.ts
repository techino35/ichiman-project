import { NextRequest, NextResponse } from "next/server";

const SYSTEM_PROMPT = `あなたは異世界転生の神です。現世の人間のプロフィールを受け取り、その人物が異世界に転生した場合のステータスを生成してください。

必ず以下のJSON形式で返してください。JSON以外の文字は一切出力しないでください。

{
  "title": "二つ名（例: 闇を統べる魔導経理士）",
  "race": "種族（例: ハーフエルフ、竜人族、魔族、etc.）",
  "class": "職業クラス（例: 聖騎士、魔導士、錬金術師、etc. 現世の職業を異世界風にアレンジ）",
  "level": 数値（1-99、年齢や経験値から算出）,
  "hp": 数値（1000-9999）,
  "mp": 数値（1000-9999）,
  "attack": 数値（1-99）,
  "defense": 数値（1-99）,
  "magic": 数値（1-99）,
  "speed": 数値（1-99）,
  "luck": 数値（1-99）,
  "cheat_skill_name": "チートスキル名（ユニークで面白いもの）",
  "cheat_skill_desc": "チートスキルの説明（30文字以内）",
  "weakness": "弱点（面白くて共感できるもの）",
  "world": "転生先の異世界の名前と一行説明",
  "quote": "運命の一言（その人物らしいセリフ、20文字以内）"
}

ルール:
- 現世のプロフィールを異世界風に面白く変換すること
- ステータスは入力に基づいてバランスよく配分すること
- 二つ名は厨二病っぽくカッコよく
- チートスキルは現世のスキルをぶっ壊れ異世界能力に変換
- 弱点は共感できるユーモアのあるものに
- 全て日本語で出力
- JSONのみ出力。説明文やマークダウンは一切不要`;

export async function POST(request: NextRequest) {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "API key not configured" },
      { status: 500 }
    );
  }

  const { name, job, hobbies, personality, desire } = await request.json();

  if (!name || !job) {
    return NextResponse.json(
      { error: "name and job are required" },
      { status: 400 }
    );
  }

  const userPrompt = `【転生者プロフィール】
名前: ${name}
現世の職業: ${job}
趣味・特技: ${hobbies || "特になし"}
性格タイプ: ${personality || "普通"}
異世界でやりたいこと: ${desire || "冒険"}`;

  try {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [{ text: SYSTEM_PROMPT + "\n\n" + userPrompt }],
            },
          ],
          generationConfig: {
            temperature: 1.0,
            maxOutputTokens: 1024,
            responseMimeType: "application/json",
          },
        }),
      }
    );

    if (!res.ok) {
      const errorText = await res.text();
      console.error("Gemini API error:", errorText);
      return NextResponse.json(
        { error: "AI generation failed" },
        { status: 500 }
      );
    }

    const data = await res.json();
    const text =
      data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!text) {
      return NextResponse.json(
        { error: "Empty response from AI" },
        { status: 500 }
      );
    }

    const profile = JSON.parse(text);
    return NextResponse.json({ profile });
  } catch (error) {
    console.error("Generation error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
