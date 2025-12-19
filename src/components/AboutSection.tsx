import { Code, Palette, Zap, Sparkles } from "lucide-react";

const skills = [
  { icon: Database, name: "Panel Pterodactyl", desc: "Panel Run Bot Wa/Telegram" },
  { icon: Code, name: "Pembuatan Script", desc: "Script Bot WhatsApp, Add Fitur WhatsApp dll" },
  { icon: Cloud, name: "Create Website", desc: "Create Website Dengan Request Anda" },
  { icon: Application, name: "Aplikasi Premium", desc: " Alight Motion, Piscart, Iqiyi, Netflix & dll" },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 px-4">
      <div className="absolute inset-0 bg-grid opacity-20" />
      
      <div className="relative z-10 max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          Cara <span className="text-primary text-glow">Membeli</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
          Berikut adalah langkah-langkah cara untuk membeli
        </p>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Bio Card */}
          <div className="p-6 rounded-2xl bg-card/50 border border-border backdrop-blur-sm">
            <p className="text-muted-foreground leading-relaxed">
              Click button produk yang dipilih <span className="text-foreground font-medium">Creative Developer</span> dan 
              <span className="text-foreground font-medium"> Digital Artist</span> yang berfokus pada 
              pengembangan web modern dan desain interaktif. Dengan pengalaman dalam berbagai teknologi 
              web terkini, saya menciptakan pengalaman digital yang unik dan memorable.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Selalu terbuka untuk proyek-proyek menarik dan kolaborasi kreatif.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 gap-4">
            {skills.map(({ icon: Icon, name, desc }, index) => (
              <div
                key={name}
                className="p-4 rounded-xl bg-muted/30 border border-border hover:border-primary/50 hover:bg-muted/50 transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-sm mb-1">{name}</h3>
                <p className="text-xs text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
