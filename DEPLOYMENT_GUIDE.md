# Guia de Deployment - Dra. Gabriela Marinho Site

## 🚀 Preparação para Deploy

### 1. Verificação Final
Antes de fazer deploy, certifique-se de que:

- ✅ Todos os componentes estão funcionando
- ✅ SEO está implementado e testado
- ✅ Responsividade está ok em todos os dispositivos
- ✅ Links e CTAs estão funcionando
- ✅ Formulários estão configurados
- ✅ Imagens estão otimizadas

### 2. Configurações de Ambiente

#### Variáveis de Ambiente Necessárias
```bash
# Production
NEXT_PUBLIC_SITE_URL=https://gabrielamartinho.com.br
NEXT_PUBLIC_PHONE_NUMBER=+5511999999999
NEXT_PUBLIC_EMAIL=contato@gabrielamartinho.com.br

# Opcional - Google Maps (se usar API real)
# NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=sua_chave_aqui
```

#### Arquivos de Configuração
- ✅ `next.config.ts` - Configurações de imagem e performance
- ✅ `vercel.json` - Configurações de deployment e segurança
- ✅ `package.json` - Scripts e dependências

### 3. Build Local Test

```bash
# Entrar no diretório do projeto
cd site

# Instalar dependências
npm install

# Build de produção
npm run build

# Testar build local
npm start
```

## 📋 Checklist de Deployment

### Pre-Deploy
- [ ] Atualizar informações de contato reais
- [ ] Verificar todos os links WhatsApp
- [ ] Confirmar endereço e telefone
- [ ] Testar formulário de contato
- [ ] Validar SEO com ferramentas do Google
- [ ] Testar em dispositivos móveis

### Deploy Vercel
- [ ] Conectar repositório GitHub
- [ ] Configurar variáveis de ambiente
- [ ] Deploy automático ativado
- [ ] Verificar domínio customizado
- [ ] Testar site em produção

### Pós-Deploy
- [ ] Submeter sitemap para Google
- [ ] Testar Google Rich Results
- [ ] Configurar Google Analytics
- [ ] Configurar Google Search Console
- [ ] Verificar indexação

## 🔧 Comandos de Deployment

### Build e Deploy Manual
```bash
# Build de produção
npm run build

# Deploy para Vercel (com CLI)
npx vercel --prod
```

### Scripts Disponíveis
```bash
npm run dev      # Desenvolvimento
npm run build    # Build de produção
npm start        # Iniciar servidor de produção
npm run lint     # Verificar linting
```

## 📱 Testes Pós-Deploy

### 1. Testes de Funcionalidade
- [ ] Navegação smooth scroll
- [ ] Menu mobile hamburger
- [ ] Links WhatsApp funcionando
- [ ] Formulário de contato
- [ ] Seções todas visíveis
- [ ] Animações carregando

### 2. Testes de Performance
- [ ] PageSpeed Insights > 90
- [ ] Core Web Vitals aprovados
- [ ] Imagens otimizadas
- [ ] CSS/JS minificado

### 3. Testes de SEO
- [ ] Meta tags presentes
- ] Schema.org válido
- [ ] Sitemap acessível
- [ ] Robots.txt configurado
- [ ] SSL ativo

## 🎯 Configurações de Domínio

### DNS (quando usar domínio customizado)
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com

Type: A
Name: @
Value: 76.76.19.61
```

### Email Profissional (recomendado)
- Configurar email profissional: contato@gabrielamartinho.com.br
- Integrar com Google Workspace ou similar

## 📊 Monitoramento Pós-Deploy

### Ferramentas Recomendadas
1. **Google Analytics 4** - Tráfego e comportamento
2. **Google Search Console** - Performance de busca
3. **Google My Business** - Presença local
4. **Vercel Analytics** - Performance técnica

### Métricas Importantes
- Tempo de carregamento < 3 segundos
- Taxa de rejeição < 60%
- Tempo médio de sessão > 2 minutos
- Conversões de agendamento

## 🚨 Troubleshooting

### Problemas Comuns
1. **Imagens não carregam** - Verificar remotePatterns no next.config.ts
2. **SEO não aparece** - Verificar meta tags e schemas
3. **WhatsApp link quebrado** - Verificar formato do telefone
4. **Formulário não envia** - Verificar configurações de email

### Suporte
- Documentação Next.js: https://nextjs.org/docs
- Suporte Vercel: https://vercel.com/support
- Schema.org: https://schema.org/

## 🎉 Sucesso!

Após completar todos os passos, seu site estará:
- ✅ Online e funcionando
- ✅ Otimizado para SEO
- ✅ Responsivo para mobile
- ✅ Pronto para receber pacientes
- ✅ Integrado com WhatsApp

**Boa sorte com o novo site da Dra. Gabriela Marinho!** 🏥👩‍⚕️