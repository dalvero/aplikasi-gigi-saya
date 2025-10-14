 export default function HomePage() {
  return (
    <main>
      {/* Header / Navbar */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
        <div className="container flex items-center justify-between h-14">
          <a href="#home" className="font-semibold text-sky-600">Edukasi Gigi Saya</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#menyikat" className="hover:text-sky-600">Menyikat</a>
            <a href="#karies" className="hover:text-sky-600">Karies</a>
            <a href="#tips" className="hover:text-sky-600">Tips</a>
            <a href="#faq" className="hover:text-sky-600">FAQ</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="bg-sky-50">
        <div className="container py-16 sm:py-24">
          <div className="grid sm:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
                Jaga Kesehatan Gigi dan Mulut Sejak Dini
              </h1>
              <p className="mt-3 text-slate-600">
                Pelajari cara menyikat gigi yang benar, kenali karies, dan dapatkan
                tips praktis untuk mulut yang sehat. Cocok untuk anak, remaja, hingga dewasa.
              </p>
              <div className="mt-6 flex gap-3">
                <a href="#menyikat" className="inline-flex items-center rounded-md bg-sky-600 text-white px-4 py-2 text-sm font-medium hover:bg-sky-700">
                  Mulai Belajar
                </a>
                <a href="#faq" className="inline-flex items-center rounded-md border border-slate-300 px-4 py-2 text-sm font-medium hover:bg-slate-50">
                  Lihat FAQ
                </a>
              </div>
            </div>
            <div className="sm:block hidden">
              <div className="aspect-video rounded-xl bg-white shadow-sm border border-slate-200 flex items-center justify-center text-slate-500">
                🦷 Edukasi Gigi Sederhana
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Topik ringkas */}
      <section className="container py-12">
        <div className="grid sm:grid-cols-3 gap-6">
          <div className="rounded-xl border border-slate-200 p-5">
            <h3 className="font-semibold">Cara Menyikat Gigi</h3>
            <p className="mt-2 text-slate-600 text-sm">
              Teknik menyikat yang benar untuk membersihkan plak dan mencegah gusi berdarah.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 p-5">
            <h3 className="font-semibold">Kenali Karies</h3>
            <p className="mt-2 text-slate-600 text-sm">
              Penyebab gigi berlubang, tanda-tanda awal, dan kapan harus ke dokter gigi.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 p-5">
            <h3 className="font-semibold">Tips Harian</h3>
            <p className="mt-2 text-slate-600 text-sm">
              Rutin flossing, batasi gula, dan gunakan pasta gigi berfluorida untuk perlindungan.
            </p>
          </div>
        </div>
      </section>

      {/* Menyikat Gigi */}
      <section id="menyikat" className="bg-white border-t border-slate-200">
        <div className="container py-12">
          <h2 className="text-2xl font-bold">Cara Menyikat Gigi yang Benar</h2>
          <ol className="mt-4 grid sm:grid-cols-2 gap-4 text-slate-700">
            <li className="rounded-lg border border-slate-200 p-4">
              1. Gunakan sikat berbulu halus dan pasta gigi berfluorida.
            </li>
            <li className="rounded-lg border border-slate-200 p-4">
              2. Sudutkan sikat 45° ke arah garis gusi, gerakkan lembut melingkar.
            </li>
            <li className="rounded-lg border border-slate-200 p-4">
              3. Sikat permukaan luar, dalam, dan permukaan kunyah setiap gigi.
            </li>
            <li className="rounded-lg border border-slate-200 p-4">
              4. Sikat lidah untuk mengurangi bakteri dan bau mulut.
            </li>
            <li className="rounded-lg border border-slate-200 p-4">
              5. Durasi ideal 2 menit, dua kali sehari (pagi & malam).
            </li>
          </ol>
        </div>
      </section>

      {/* Karies */}
      <section id="karies" className="bg-sky-50 border-t border-slate-200">
        <div className="container py-12">
          <h2 className="text-2xl font-bold">Apa itu Karies (Gigi Berlubang)?</h2>
          <div className="mt-4 grid sm:grid-cols-2 gap-6">
            <div className="rounded-xl border border-slate-200 p-5">
              <h3 className="font-semibold">Penyebab</h3>
              <p className="mt-2 text-slate-700 text-sm">
                Plak yang bertemu gula menghasilkan asam yang merusak email gigi.
                Kebiasaan ngemil manis dan kebersihan mulut yang kurang teratur mempercepat prosesnya.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 p-5">
              <h3 className="font-semibold">Tanda Awal</h3>
              <p className="mt-2 text-slate-700 text-sm">
                Noda putih/coklat, gigi sensitif, atau nyeri saat makan manis/dingin.
                Segera konsultasi bila gejala muncul.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section id="tips" className="bg-white border-t border-slate-200">
        <div className="container py-12">
          <h2 className="text-2xl font-bold">Tips Kesehatan Mulut Harian</h2>
          <ul className="mt-4 grid sm:grid-cols-2 gap-4 text-slate-700">
            <li className="rounded-lg border border-slate-200 p-4">Flossing setiap hari untuk membersihkan sela gigi.</li>
            <li className="rounded-lg border border-slate-200 p-4">Batasi makanan/minuman tinggi gula.</li>
            <li className="rounded-lg border border-slate-200 p-4">Gunakan mouthwash bila perlu.</li>
            <li className="rounded-lg border border-slate-200 p-4">Kontrol rutin ke dokter gigi setiap 6–12 bulan.</li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-sky-50 border-t border-slate-200">
        <div className="container py-12">
          <h2 className="text-2xl font-bold">FAQ</h2>
          <div className="mt-4 space-y-3">
            <details className="rounded-lg border border-slate-200 p-4">
              <summary className="font-medium cursor-pointer">Berapa kali harus menyikat gigi?</summary>
              <p className="mt-2 text-sm text-slate-700">Minimal dua kali sehari, pagi setelah sarapan dan malam sebelum tidur.</p>
            </details>
            <details className="rounded-lg border border-slate-200 p-4">
              <summary className="font-medium cursor-pointer">Apakah perlu flossing?</summary>
              <p className="mt-2 text-sm text-slate-700">Ya, flossing membantu membersihkan sisa makanan di sela gigi yang tidak terjangkau sikat.</p>
            </details>
            <details className="rounded-lg border border-slate-200 p-4">
              <summary className="font-medium cursor-pointer">Kapan harus ke dokter gigi?</summary>
              <p className="mt-2 text-sm text-slate-700">Setiap 6–12 bulan untuk pemeriksaan rutin, atau segera jika ada keluhan.</p>
            </details>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200">
        <div className="container py-8 text-sm text-slate-600">
          <p>© {new Date().getFullYear()} Edukasi Gigi Saya. Semua hak dilindungi.</p>
        </div>
      </footer>
    </main>
  );
}
