# ⚡ Instruções Rápidas - Linktree Personalizado

## 🚀 Começar em 3 Passos

### 1. Abrir o Projeto
```bash
# Simplesmente clique duas vezes no arquivo index.html
# Ou arraste para o navegador
```

### 2. Personalizar (Opcional)
Edite `config.js` para suas informações:
```javascript
username: 'seu-usuario',
bio: 'Sua descrição',
profileImage: 'URL-da-sua-foto'
```

### 3. Usar!
- ✅ Funciona imediatamente
- ✅ Totalmente responsivo
- ✅ Tema escuro/claro
- ✅ Links editáveis

## 🎯 Funcionalidades Principais

- **🎬 Vídeo de Fundo**: Roda automaticamente sem player
- **🔗 Links**: Clique para abrir, clique longo para editar
- **📱 Mobile**: Otimizado para todos os dispositivos

## 🔧 Personalização Rápida

### Mudar Nome e Bio
```javascript
// config.js
username: 'Meu Nome',
bio: 'Minha descrição personalizada'
```

### Configurar Player do Spotify
```javascript
// config.js
spotify: {
    title: '🎵 Música da Semana',
    trackId: '62MEz6nR7fEtrUVwGLLNxq'
}
```

**🎵 Player oficial do Spotify**: Funciona imediatamente sem configuração adicional!

### Adicionar/Remover Links
```javascript
// config.js
const LINKS_CONFIG = {
    instagram: { title: 'Instagram', url: 'https://...' },
    consultoria: { title: 'Consultoria de IA', url: 'https://calendly.com/...' },
    // Adicione mais aqui
};
```

### Mudar Cores
```css
/* styles.css */
body { background-color: #000000; }
.link-item { background: #1a1a1a; }
```

### Configurar Vídeo de Fundo
```html
<!-- index.html -->
<video autoplay muted loop playsinline>
    <source src="seu-video.mp4" type="video/mp4">
</video>
```

## 📱 Deploy Rápido

### GitHub Pages
1. Crie repositório no GitHub
2. Faça upload dos arquivos
3. Ative GitHub Pages
4. Pronto! 🎉

### Netlify
1. Acesse netlify.com
2. Arraste a pasta do projeto
3. Deploy automático! 🚀

## 🆘 Ajuda Rápida

- **Links não funcionam?** Verifique se as URLs começam com `https://`
- **Tema não muda?** Recarregue a página
- **Modal não abre?** Use clique longo (500ms) nos links

## 📚 Documentação Completa

- **README.md** - Instruções detalhadas
- **DEMO.md** - Como testar tudo
- **exemplo-personalizacao.md** - Exemplos práticos

---

**🎉 Seu Linktree está pronto para usar!**
