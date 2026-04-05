# SPEC.md - Portfolio Diogenes Polanco
## "AI Terminal" - Modern Minimal Portfolio

---

## 1. CONCEPTO DE DISEÑO

### Dirección Aesthetic
**"Terminal meets AI"** - Uniendo la nostalgia de la terminal que caracteriza tu sitio actual con la estética moderna de interfaces de IA como ChatGPT, v0, Bolt.new.

### Tone
- **Brutalista técnico** con toques de terminal retro
- **Minimalista funcional** sin ornamentos innecesarios
- **Dark-first** con acentos de color estratégicos

### Diferenciación (El "Uno cosa")
> **Un "chat" interactivo como corazón del sitio** - Los visitantes pueden conversar con una versión "IA" de ti, haciendo preguntas sobre tu trayectoria, skills, proyectos.

---

## 2. PALETA DE COLORES

```css
:root {
  /* Backgrounds */
  --bg-deep: #030307;           /* Más negro que negro */
  --bg-primary: #0a0a0f;        /* Fondo principal */
  --bg-secondary: #0f0f16;     /* Cards, secciones */
  --bg-elevated: #16161f;       /* Hover states */
  --bg-glass: rgba(255, 255, 255, 0.02);
  
  /* Acentos - Terminal Green + AI Purple */
  --accent-primary: #00ff9d;    /* Verde terminal */
  --accent-secondary: #7c3aed;  /* Púrpura IA */
  --accent-tertiary: #06b6d4;  /* Cyan */
  --accent-warning: #f59e0b;    /* Amber */
  
  /* Gradientes */
  --gradient-ai: linear-gradient(135deg, #00ff9d 0%, #7c3aed 50%, #06b6d4 100%);
  --gradient-glow: radial-gradient(circle at 50% 50%, rgba(0, 255, 157, 0.15) 0%, transparent 70%);
  
  /* Textos */
  --text-primary: #f4f4f5;
  --text-secondary: #a1a1aa;
  --text-muted: #52525b;
  --text-accent: #00ff9d;
  
  /* Bordes */
  --border-subtle: rgba(255, 255, 255, 0.06);
  --border-glow: rgba(0, 255, 157, 0.3);
  
  /* Shadows */
  --glow-green: 0 0 30px rgba(0, 255, 157, 0.3);
  --glow-purple: 0 0 30px rgba(124, 58, 237, 0.3);
}
```

---

## 3. TIPOGRAFÍA

```css
/* Import fonts */
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Space+Grotesk:wght@400;500;700&display=swap');

:root {
  --font-display: 'Space Grotesk', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  
  --text-xs: 0.75rem;    /* 12px */
  --text-sm: 0.875rem;  /* 14px */
  --text-base: 1rem;    /* 16px */
  --text-lg: 1.125rem;  /* 18px */
  --text-xl: 1.25rem;   /* 20px */
  --text-2xl: 1.5rem;   /* 24px */
  --text-3xl: 2rem;     /* 32px */
  --text-4xl: 3rem;     /* 48px */
  --text-5xl: 4rem;    /* 64px */
  
  --leading-tight: 1.1;
  --leading-normal: 1.5;
  --leading-relaxed: 1.75;
}
```

---

## 4. WIREFRAMES DETALLADOS

### 4.1 HERO SECTION

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│                           ╭──────────────╮                          │
│                          │   ○ ○ ○       │  diogenespolanco.com    │
│                          │   (avatar)    │  ──────────────────     │
│                           ╰──────────────╯  v1.0.0  •  last-upd: today
│                                                                     │
│                  ╭─────────────────────────────────────╮           │
│                  │                                     │           │
│                  │   DIogenes POLANCO                  │           │
│                  │   Senior Software Engineer          │           │
│                  │                                     │           │
│                  │   ─────────────────────────────────  │           │
│                  │                                     │           │
│                  │   > .NET  •  TypeScript  •  Angular │           │
│                  │   > Vue.js  •  Node.js  •  Docker   │           │
│                  │                                     │           │
│                  │   ┌─────────────────────────────┐   │           │
│                  │   │  ●  Available for work      │   │           │
│                  │   └─────────────────────────────┘   │           │
│                  │                                     │           │
│                  │   [GitHub] [Twitter] [LinkedIn] [Email] │        │
│                  │                                     │           │
│                  ╰─────────────────────────────────────╯           │
│                                                                     │
│                             ↓ scroll                                │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

**Componentes:**
- Avatar: imagen circular con border glow animado (pulsing)
- Nombre: font-display, tamaño gigante, tracking reducido
- Subtitle: font-mono, color muted
- Skills: tags con glow en hover
- Status badge: pulsing dot + texto
- Social icons: iconos minimal con hover glow

**Animaciones:**
- Typing effect en "Diogenes Polanco" (letra por letra)
- Avatar glow: `animation: pulse 3s ease-in-out infinite`
- Skills tags: stagger reveal con delay
- Status badge: blink animation

---

### 4.2 AI CHAT SECTION (CORE FEATURE)

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  ╭──────────────────────────────────────────────────────────────╮  │
│  │                                                               │  │
│  │   ╭──────────────────────────────────────────────────────╮   │  │
│  │   │                                                      │   │  │
│  │   │   💬  Ask me anything about Diogenes                 │   │  │
│  │   │   ─────────────────────────────────────────────────  │   │  │
│  │   │                                                      │   │  │
│  │   │   [?] What are your main skills?                    │   │  │
│  │   │   ─────────────────────────────────────────────────  │   │  │
│  │   │   ● I specialize in .NET Core, TypeScript, Angular   │   │  │
│  │   │     and Vue.js. I've been building web apps for      │   │  │
│  │   │     10+ years...                                     │   │  │
│  │   │                                                      │   │  │
│  │   │   [?] Tell me about your experience                 │   │  │
│  │   │   ─────────────────────────────────────────────────  │   │  │
│  │   │   ● Currently Senior Engineer at APAP, previously    │   │  │
│  │   │     at Claro Dominicana...                           │   │  │
│  │   │                                                      │   │  │
│  │   │   ╭──────────────────────────────────────────╮       │   │  │
│  │   │   │  Type your question...            [Send] │       │   │  │
│  │   │   ╰──────────────────────────────────────────╯       │   │  │
│  │   │                                                      │   │  │
│  │   ╰──────────────────────────────────────────────────────╯   │  │
│  │                                                               │  │
│  ╰──────────────────────────────────────────────────────────────╯  │
│                                                                     │
│  Quick questions:                                                  │
│  [Skills] [Projects] [Experience] [Contact]                        │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

**Componentes:**
- Chat container: glassmorphism, border sutil
- Messages: user (right) vs AI (left)
- Quick question buttons: pill-shaped, glow en hover
- Input field: terminal-style con cursor blink
- Send button: icon only con hover state

**Datos para el chat:**
```javascript
const faqData = {
  skills: "I work with .NET, TypeScript, Angular, Vue.js, Node.js, Docker, and cloud services. I'm passionate about clean architecture and clean code.",
  projects: "I have 376 public repos on GitHub. Highlights include nopCommerce contributions, Coderr.Server, and various Angular libraries.",
  experience: "Currently Senior Software Engineer at APAP. Previously at Claro Dominicana. 10+ years building enterprise applications.",
  contact: "You can reach me at diogenes@polanco.com or find me on GitHub/Twitter."
}
```

**Animaciones:**
- Message appear: fade + slide up
- Typing indicator: 3 dots bouncing
- Input cursor: blink animation
- Quick buttons: scale en hover

---

### 4.3 PROJECTS SECTION

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│   ════════════════════════════════════════════════════════════     │
│   PROJECTS                                             [+ All repos] │
│   ════════════════════════════════════════════════════════════     │
│                                                                     │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐   │
│  │  ┌───────────┐  │  │  ┌───────────┐  │  │  ┌───────────┐  │   │
│  │  │  [SCREEN] │  │  │  │  [SCREEN] │  │  │  │  [SCREEN] │  │   │
│  │  └───────────┘  │  │  └───────────┘  │  │  └───────────┘  │   │
│  │                 │  │                 │  │                 │   │
│  │  nopCommerce    │  │  Coderr.Server  │  │  Angular Auth   │   │
│  │  ─────────────  │  │  ─────────────  │  │  ─────────────  │   │
│  │  E-commerce     │  │  Error tracking │  │  VS Auth lib    │   │
│  │  ASP.NET Core   │  │  C#             │  │  TypeScript     │   │
│  │                 │  │                 │  │                 │   │
│  │  ★ 2.4k  🔗 12  │  │  ★ 89   🔗 5   │  │  ★ 156  🔗 8   │   │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘   │
│                                                                     │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐   │
│  │  ┌───────────┐  │  │  ┌───────────┐  │  │  ┌───────────┐  │   │
│  │  │  [SCREEN] │  │  │  │  [SCREEN] │  │  │  │  [SCREEN] │  │   │
│  │  └───────────┘  │  │  └───────────┘  │  │  └───────────┘  │   │
│  │                 │  │                 │  │                 │   │
│  │  Vue Dashboard  │  │  Docker Stack   │  │  Personal CLI   │   │
│  │  ─────────────  │  │  ─────────────  │  │  ─────────────  │   │
│  │  Admin panel    │  │  Dev env setup  │  │  Terminal tools │   │
│  │  Vue 3 + Vite   │  │  Compose        │  │  Rust           │   │
│  │                 │  │                 │  │                 │   │
│  │  ★ 234  🔗 8   │  │  ★ 67   🔗 3   │  │  ★ 45   🔗 2   │   │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘   │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

**Componentes:**
- Section header: título + "View all" link
- Project cards: imagen, título, descripción, tags, stats
- Tags: tech stack pills
- Stats: stars + forks

**Data source:**
- GitHub API fetch para stats
- Static fallback si API fails
- Lazy load imágenes

**Animaciones:**
- Cards: stagger fade-in en scroll
- Hover: scale(1.02) + glow border
- Tags: subtle pulse en hover

---

### 4.4 EXPERIENCE SECTION

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│   ════════════════════════════════════════════════════════════     │
│   EXPERIENCE                                                        │
│   ════════════════════════════════════════════════════════════     │
│                                                                     │
│                                                                     │
│    ● ○─────────────────────────○──────────────────────────○      │
│      │                         │                              │     │
│      │    APAP                 │    Claro Dominicana         │     │
│      │    ───────────         │    ───────────             │     │
│      │    Senior Software     │    Software Developer      │     │
│      │    Engineer            │    (2015-2019)             │     │
│      │    (2021-Present)      │                              │     │
│      │                        │    • Built customer portal  │     │
│      │    • Led team of 8     │    • Migrated to Angular    │     │
│      │    • Built fintech    │    • Reduced load time 40%   │     │
│      │    • 10M+ users        │                              │     │
│      │                        │    [Tech:] Angular, .NET,   │     │
│      │    [Tech:] C#, .NET,  │           SQL Server, Azure  │     │
│      │           Angular,                             │     │
│      │           Azure, K8s                            │     │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

**Componentes:**
- Timeline: línea vertical con nodos
- Job cards: contenido a la derecha del nodo
- Tech tags: pills dentro de cada posición

**Animaciones:**
- Scroll-trigger reveal
- Nodos: sequential highlight
- Cards: slide-in desde sides

---

### 4.5 SKILLS SECTION

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│   ════════════════════════════════════════════════════════════     │
│   TOOLS & TECHNOLOGIES                                              │
│   ════════════════════════════════════════════════════════════     │
│                                                                     │
│   LANGUAGES                                                         │
│   ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐          │
│   │ .NET │ │  TS  │ │  JS  │ │  C#  │ │ Rust │ │ SQL │          │
│   └──────┘ └──────┘ └──────┘ └──────┘ └──────┘ └──────┘          │
│                                                                     │
│   FRAMEWORKS                                                        │
│   ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐        │
│   │ Angular │ │  Vue   │ │ React  │ │  ASP   │ │ Node   │        │
│   │         │ │        │ │        │ │  .NET  │ │  .js   │        │
│   └────────┘ └────────┘ └────────┘ └────────┘ └────────┘        │
│                                                                     │
│   TOOLS & PLATFORM                                                  │
│   ┌───────┐ ┌───────┐ ┌───────┐ ┌───────┐ ┌───────┐ ┌───────┐    │
│   │Docker │ │GitHub │ │Azure │ │ AWS  │ │Linux │ │Figma │    │
│   └───────┘ └───────┘ └───────┘ └───────┘ └───────┘ └───────┘    │
│                                                                     │
│   SOFT SKILLS                                                       │
│   ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐   │
│   │Leadship │ │Mentoring│ │Agile   │ │System  │ │Communi- │   │
│   │         │ │         │ │        │ │Design  │ │cation  │   │
│   └─────────┘ └─────────┘ └─────────┘ └─────────┘ └─────────┘   │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

**Componentes:**
- Categorías: grouping de skills
- Pills: cada tech individual
- Grid: responsive según categoría

**Animaciones:**
- Stagger reveal por categoría
- Hover: glow effect en cada pill

---

### 4.6 CONTACT SECTION

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│   ════════════════════════════════════════════════════════════     │
│   GET IN TOUCH                                                      │
│   ════════════════════════════════════════════════════════════     │
│                                                                     │
│         Let's build something together.                           │
│              I'm always open to discuss                            │
│              new projects or opportunities.                       │
│                                                                     │
│    ┌─────────────────────────────────────────────────────────┐    │
│    │                                                         │    │
│    │   Your name                                            │    │
│    │   ─────────────────────────────────────────────────────│    │
│    │                                                         │    │
│    │   your@email.com                                       │    │
│    │   ─────────────────────────────────────────────────────│    │
│    │                                                         │    │
│    │   Your message...                                      │    │
│    │   ─────────────────────────────────────────────────────│    │
│    │   (Or just say hi!)                                    │    │
│    │                                                         │    │
│    │                       [Send Message]                    │    │
│    │                                                         │    │
│    └─────────────────────────────────────────────────────────┘    │
│                                                                     │
│    Or reach me directly:                                           │
│                                                                     │
│    [diogenes@polanco.com]  [GitHub]  [Twitter]  [LinkedIn]       │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

**Componentes:**
- Form: name, email, message
- Direct links: email, social
- Background: subtle gradient mesh

**Animaciones:**
- Form inputs: focus glow
- Button: gradient animation
- Social links: hover scale + glow

---

### 4.7 FOOTER

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│    ═══════════════════════════════════════════════════════════     │
│                                                                     │
│    © 2024 Diogenes Polanco     •     Built with Astro + React     │
│                                •     Hosted on Vercel              │
│                                                                     │
│    [Terminal]:  echo "Hello, World!"                              │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 5. ANIMACIONES ESPECÍFICAS

### 5.1 Page Load Sequence

```css
/* Sequencia de carga */
.hero-content > * {
  animation: fadeSlideUp 0.6s ease-out forwards;
  opacity: 0;
}

.hero-content > *:nth-child(1) { animation-delay: 0.1s; }  /* Avatar */
.hero-content > *:nth-child(2) { animation-delay: 0.2s; }  /* Name */
.hero-content > *:nth-child(3) { animation-delay: 0.3s; }  /* Subtitle */
.hero-content > *:nth-child(4) { animation-delay: 0.4s; }  /* Skills */
.hero-content > *:nth-child(5) { animation-delay: 0.5s; }  /* Status */
.hero-content > *:nth-child(6) { animation-delay: 0.6s; }  /* Socials */

@keyframes fadeSlideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### 5.2 Avatar Glow Pulse

```css
.avatar-container {
  position: relative;
}

.avatar-glow {
  position: absolute;
  inset: -20%;
  background: radial-gradient(circle, var(--accent-primary) 0%, transparent 70%);
  opacity: 0.4;
  animation: pulse-glow 3s ease-in-out infinite;
  filter: blur(20px);
}

@keyframes pulse-glow {
  0%, 100% { transform: scale(1); opacity: 0.4; }
  50% { transform: scale(1.1); opacity: 0.6; }
}
```

### 5.3 Typing Effect (Hero Title)

```javascript
// React hook para typing effect
const useTypingEffect = (text, speed = 100) => {
  const [displayed, setDisplayed] = useState('');
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);
  
  return displayed;
};
```

### 5.4 Chat Typing Indicator

```css
.typing-indicator {
  display: flex;
  gap: 4px;
}

.typing-indicator span {
  width: 8px;
  height: 8px;
  background: var(--accent-primary);
  border-radius: 50%;
  animation: bounce 1.4s ease-in-out infinite;
}

.typing-indicator span:nth-child(2) { animation-delay: 0.2s; }
.typing-indicator span:nth-child(3) { animation-delay: 0.4s; }

@keyframes bounce {
  0%, 60%, 100% { transform: translateY(0); }
  30% { transform: translateY(-8px); }
}
```

### 5.5 Card Hover Glow

```css
.project-card {
  position: relative;
  background: var(--bg-secondary);
  border: 1px solid var(--border-subtle);
  transition: all 0.3s ease;
}

.project-card::before {
  content: '';
  position: absolute;
  inset: -1px;
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  border-radius: inherit;
  opacity: 0;
  z-index: -1;
  transition: opacity 0.3s ease;
}

.project-card:hover::before {
  opacity: 0.5;
}

.project-card:hover {
  transform: translateY(-4px);
  border-color: transparent;
}
```

### 5.6 Command Palette (Cmd+K)

```javascript
// Quick actions disponibles
const commands = [
  { id: 'projects', label: 'Go to Projects', action: () => scrollTo('projects') },
  { id: 'experience', label: 'View Experience', action: () => scrollTo('experience') },
  { id: 'contact', label: 'Contact Me', action: () => scrollTo('contact') },
  { id: 'github', label: 'Open GitHub', action: () => window.open('https://github.com/DiogenesPolanco') },
  { id: 'chat', label: 'Start Chat', action: () => scrollTo('chat') },
];
```

### 5.7 Scroll-trigger Animations

```css
/* Usar Intersection Observer o scroll-driven animations */
.reveal-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.reveal-on-scroll.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Stagger children */
.stagger-children > * {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.5s ease;
}

.stagger-children.visible > *:nth-child(1) { transition-delay: 0s; }
.stagger-children.visible > *:nth-child(2) { transition-delay: 0.1s; }
.stagger-children.visible > *:nth-child(3) { transition-delay: 0.2s; }
/* etc */
```

### 5.8 Background Grid + Noise

```css
.page-background {
  position: fixed;
  inset: 0;
  z-index: -1;
  
  /* Grid pattern */
  background-image: 
    linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  
  /* Noise overlay */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: url('/noise.png');
    opacity: 0.03;
  }
}
```

---

## 6. COMPONENTES TÉCNICOS

### 6.1 Estructura de Componentes (Astro + React)

```
src/
├── components/
│   ├── Hero/
│   │   ├── Hero.tsx           # Componente principal
│   │   ├── Avatar.tsx         # Avatar con glow
│   │   ├── TypingTitle.tsx    # Título con typing effect
│   │   ├── Skills.tsx         # Tags de skills
│   │   └── SocialLinks.tsx   # Links sociales
│   │
│   ├── Chat/
│   │   ├── ChatContainer.tsx # Wrapper del chat
│   │   ├── Message.tsx        # Mensaje individual
│   │   ├── ChatInput.tsx      # Input del usuario
│   │   ├── QuickButtons.tsx   # Botones FAQ
│   │   └── useChat.ts         # Hook de lógica
│   │
│   ├── Projects/
│   │   ├── ProjectsGrid.tsx   # Grid de proyectos
│   │   ├── ProjectCard.tsx    # Card individual
│   │   └── useGitHub.ts       # Hook para GitHub API
│   │
│   ├── Experience/
│   │   ├── Timeline.tsx       # Línea de tiempo
│   │   └── JobCard.tsx        # Tarjeta de trabajo
│   │
│   ├── Skills/
│   │   ├── SkillsGrid.tsx     # Grid de skills
│   │   └── SkillPill.tsx      # Pill individual
│   │
│   ├── Contact/
│   │   ├── ContactForm.tsx    # Formulario
│   │   └── DirectLinks.tsx    # Links directos
│   │
│   └── UI/
│       ├── Button.tsx
│       ├── Section.tsx
│       ├── Container.tsx
│       ├── GlowBorder.tsx
│       └── TypingCursor.tsx
│
├── layouts/
│   └── Layout.astro           # Layout principal
│
├── pages/
│   └── index.astro           # Página principal
│
├── styles/
│   ├── global.css            # Variables + reset
│   └── animations.css        # Keyframes
│
├── data/
│   ├── experience.json       # Datos de experiencia
│   ├── skills.json          # Skills categorizadas
│   └── faq.json             # Preguntas frecuentes
│
└── hooks/
    ├── useTyping.ts
    ├── useScrollReveal.ts
    └── useGitHub.ts
```

### 6.2 GitHub API Integration

```typescript
// src/hooks/useGitHub.ts
export async function fetchProjects() {
  const username = 'DiogenesPolanco';
  const response = await fetch(
    `https://api.github.com/users/${username}/repos?sort=updated&per_page=12`
  );
  
  const repos = await response.json();
  
  return repos.map(repo => ({
    name: repo.name,
    description: repo.description,
    url: repo.html_url,
    stars: repo.stargazers_count,
    forks: repo.forks_count,
    language: repo.language,
    updated: repo.updated_at
  }));
}
```

### 6.3 Chat Logic

```typescript
// src/components/Chat/useChat.ts
interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  typing?: boolean;
}

const responses: Record<string, string> = {
  skills: "I specialize in .NET Core, TypeScript, Angular, Vue.js, Node.js, Docker, and cloud platforms. I've been building web applications for over 10 years...",
  projects: "I have 376 public repositories on GitHub. My most starred projects include contributions to nopCommerce, Coderr.Server, and various Angular libraries...",
  experience: "Currently I'm a Senior Software Engineer at APAP in the Dominican Republic. Previously I worked at Claro Dominicana building customer-facing portals...",
  contact: "You can reach me at diogenes@polanco.com or find me on GitHub and Twitter. I'm always open to discussing new projects or opportunities!"
};

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', role: 'assistant', content: 'Hi! Ask me anything about Diogenes. Try: "What are your skills?" or "Show me your projects."' }
  ]);
  
  const sendMessage = (text: string) => {
    // Add user message
    const userMsg: Message = { id: Date.now().toString(), role: 'user', content: text };
    setMessages(prev => [...prev, userMsg]);
    
    // Find response
    const key = Object.keys(responses).find(k => text.toLowerCase().includes(k));
    const response = responses[key] || responses.contact;
    
    // Add typing indicator
    const typingMsg: Message = { 
      id: (Date.now() + 1).toString(), 
      role: 'assistant', 
      content: response,
      typing: true 
    };
    setMessages(prev => [...prev, typingMsg]);
  };
  
  return { messages, sendMessage };
}
```

---

## 7. RESPONSIVE BREAKPOINTS

```css
/* Mobile First */
:root {
  --container-padding: 1rem;
  --section-spacing: 4rem;
}

/* Tablet */
@media (min-width: 768px) {
  :root {
    --container-padding: 2rem;
    --section-spacing: 6rem;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  :root {
    --container-padding: 4rem;
    --section-spacing: 8rem;
  }
}

/* Large Desktop */
@media (min-width: 1440px) {
  :root {
    --container-max-width: 1400px;
  }
}
```

**Layout adjustments:**
- Hero: single column → centered max-width
- Projects: 1 col → 2 col → 3 col
- Chat: full-width → centered max-width
- Skills: 2 col → 4 col grid

---

## 8. PERFORMANCE CHECKLIST

- [ ] Lighthouse score > 90
- [ ] Images: WebP format, lazy load
- [ ] Fonts: Google Fonts optimized, subset
- [ ] CSS: purge unused, critical inline
- [ ] JS: code split por sección
- [ ] Prefetch: páginas relacionadas
- [ ] PWA: manifest + service worker (opcional)

---

## 9. ACCESIBILIDAD

- [ ] Contrast ratio > 4.5:1
- [ ] Focus states visibles
- [ ] Keyboard navigation completa
- [ ] Screen reader friendly
- [ ] Reduced motion support

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 10. ARCHIVO DE IMPLEMENTACIÓN (TODO)

```markdown
- [ ] Setup Astro project
- [ ] Install dependencies (React, Framer Motion)
- [ ] Create global styles + CSS variables
- [ ] Build Hero section
- [ ] Build Chat component
- [ ] Build Projects section + GitHub API
- [ ] Build Experience timeline
- [ ] Build Skills grid
- [ ] Build Contact form
- [ ] Add animations
- [ ] Responsive testing
- [ ] Lighthouse audit
- [ ] Deploy to Vercel
```

---

## 11. RECURSOS EXTRAS

### Imágenes placeholder para proyectos
```javascript
// Usar este servicio para screenshots de repos
const getRepoImage = (repo) => `https://repokeeps.github.io/screenshot?repo=${repo}&theme=dark`
// O generar con: https://github-readme-stats.vercel.app
```

### Favicon
- Generar: https://favicon.io/
- Suggestion: Terminal icon + gradient

### Open Graph
```html
<meta property="og:title" content="Diogenes Polanco - Senior Software Engineer">
<meta property="og:description" content="Portfolio of a .NET & TypeScript developer from Dominican Republic">
<meta property="og:image" content="/og-image.png">
<meta property="og:url" content="https://diogenespolanco.com">
```

---

*SPEC.md creado para el proyecto de portfolio de Diogenes Polanco*
*Versión 1.0 - 2024*