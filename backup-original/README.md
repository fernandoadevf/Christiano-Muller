# 🎯 Linktree React com UnicornScene

Um Linktree moderno e elegante construído com React, TypeScript, Tailwind CSS e shadcn/ui, com background animado usando UnicornScene.

## ✨ **Funcionalidades**

- 🎨 **Background animado** com UnicornScene
- 🎵 **Player do Spotify** integrado
- 🔗 **Links personalizáveis** com efeitos de hover
- 📱 **Design responsivo** para todos os dispositivos
- 🎭 **Animações suaves** e transições elegantes
- 🌙 **Tema escuro** otimizado

## 🚀 **Tecnologias**

- **React 18** com TypeScript
- **Tailwind CSS** para estilização
- **shadcn/ui** para componentes
- **UnicornScene** para background animado
- **Lucide React** para ícones
- **Vite** para build e desenvolvimento

## 📦 **Instalação**

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview
```

## 🎨 **Componentes**

### **UnicornScene Background**
- Background animado responsivo
- Ajusta automaticamente ao tamanho da tela
- Projeto ID: `cbmTT38A0CcuYxeiyj5H`

### **Linktree Component**
- Perfil com foto e bio
- Player do Spotify integrado
- Links com efeitos de hover
- Footer personalizado

## 🔧 **Configuração**

### **Personalizar Links**
Edite o array `links` em `src/components/Linktree.tsx`:

```typescript
const links: LinkItem[] = [
  {
    id: 'instagram',
    title: 'Instagram',
    url: 'https://instagram.com/seu-usuario',
    icon: <Instagram className="w-5 h-5" />,
    color: '#E4405F'
  },
  // Adicione mais links aqui
];
```

### **Trocar Música do Spotify**
Altere o `src` do iframe no componente Linktree:

```tsx
<iframe 
  src="https://open.spotify.com/embed/track/SEU_TRACK_ID?utm_source=generator&theme=0"
  // ... outras props
/>
```

## 📁 **Estrutura do Projeto**

```
src/
├── components/
│   ├── ui/                    # Componentes shadcn
│   │   ├── button.tsx
│   │   └── raycast-animated-background.tsx
│   └── Linktree.tsx           # Componente principal
├── lib/
│   └── utils.ts               # Utilitários
└── App.tsx                    # App principal
```

## 🎯 **Efeitos Visuais**

- **Hover nos links**: Seta desliza e brilho passa
- **Background animado**: UnicornScene responsivo
- **Glassmorphism**: Efeito de vidro nos cards
- **Transições suaves**: Animações com timing perfeito

## 🚀 **Deploy**

### **Vercel (Recomendado)**
```bash
npm run build
# Fazer upload da pasta dist/
```

### **Netlify**
```bash
npm run build
# Arrastar a pasta dist/ para o Netlify
```

### **GitHub Pages**
```bash
npm run build
# Fazer commit da pasta dist/ e ativar GitHub Pages
```

## 📱 **Responsividade**

- **Desktop**: Layout otimizado para telas grandes
- **Tablet**: Adaptação para dispositivos médios
- **Mobile**: Experiência touch-friendly
- **UnicornScene**: Ajusta automaticamente ao viewport

## 🎨 **Personalização**

### **Cores**
Edite as variáveis CSS em `src/index.css` ou use classes Tailwind.

### **Fontes**
Altere a fonte no `tailwind.config.js` ou importe no CSS.

### **Animações**
Modifique as transições nos componentes ou adicione novas keyframes.

## 🤝 **Contribuição**

1. Fork o projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📄 **Licença**

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

**🎉 Seu Linktree React está pronto para usar!**
