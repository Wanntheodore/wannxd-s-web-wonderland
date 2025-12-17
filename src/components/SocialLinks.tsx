import { Github, Twitter, Instagram, Mail } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/wannxd", label: "GitHub" },
  { icon: Twitter, href: "https://twitter.com/wannxd", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com/wannxd", label: "Instagram" },
  { icon: Mail, href: "mailto:wannxd@email.com", label: "Email" },
];

const SocialLinks = () => {
  return (
    <div className="flex items-center gap-4 animate-fade-in" style={{ animationDelay: "0.8s", opacity: 0 }}>
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="p-3 rounded-xl border border-border bg-muted/30 text-muted-foreground hover:text-primary hover:border-primary hover:box-glow-subtle transition-all duration-300 hover:scale-110"
        >
          <Icon className="w-5 h-5" />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
