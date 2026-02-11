export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#0a0a12] text-[#e8e6df]">
      <header className="border-b border-[#d4a84720] px-6 py-4">
        <a href="/" className="text-[#d4a847] font-bold text-lg hover:opacity-80">
          転生メーカー
        </a>
      </header>
      <main className="max-w-3xl mx-auto px-6 py-12">{children}</main>
      <footer className="border-t border-[#d4a84720] px-6 py-8 text-center">
        <a
          href="/"
          className="inline-block bg-[#d4a847] text-[#0a0a12] font-bold px-8 py-3 rounded-lg hover:opacity-90 transition"
        >
          無料で転生診断する →
        </a>
        <p className="text-[#555] text-sm mt-4">
          © 2025 転生メーカー. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
