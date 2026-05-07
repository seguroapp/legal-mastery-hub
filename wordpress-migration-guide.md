# Migrar a página para WordPress

Este guia descreve o passo a passo para recriar a página atual do projeto React/Vite no WordPress.

## 1. Preparação

1. Verifique o conteúdo da página atual:
   - Headline e subtítulo
   - Seções de benefícios
   - CTA principal
   - Depoimentos e prova social
   - Oferta e diferenciais
   - Rodapé

2. Reúna recursos visuais:
   - Imagens usadas no site (`hero-mentoria.jpg` ou equivalentes)
   - Logotipo, ícones e cores da identidade
   - Texto da página extraído do `Headline.docx`

3. Acesse o painel do WordPress:
   - Faça login no painel de administração (`/wp-admin`)
   - Confirme que o tema e o construtor de páginas estão instalados
   - Recomendação: use um tema leve e compatível com blocos, ou um page builder como Elementor, Bricks, Oxygen ou Gutenberg.

## 2. Criar página no WordPress

1. No painel, vá em **Páginas > Adicionar nova**.
2. Defina o título da página, por exemplo: `Mentoria Jurídica`.
3. Escolha o editor:
   - Gutenberg: use blocos para estruturar conteúdo
   - Elementor/Bricks/Oxygen: use o construtor visual para facilitar a montagem

## 3. Estrutura da página

### 3.1 Cabeçalho

- Adicione o título da marca e um botão de navegação ou âncora.
- Use a mesma mensagem: `Quero participar` ou `Garantir minha vaga`.
- Garanta que o botão aponte para o bloco de CTA (`#cta`) ou para formulário de inscrição.

### 3.2 Hero

- Inserir título principal:
  - `A advocacia que você sente, com a estratégia que ela merece.`
- Inserir texto descritivo:
  - `Uma mentoria desenhada para advogados que não querem caber em fórmulas prontas...`
- Botão de ação:
  - `Garantir minha vaga`
- Imagem hero (use `hero-mentoria.jpg` ou substituta)
- Destaque de prova social: `+800 advogados mentorados`

### 3.3 Seção de headline extraída

- Headline de impacto:
  - `Se o seu cliente vai mal preparado para a perícia… você já perdeu o benefício antes mesmo do resultado sair.`
- Subheadline:
  - `Aprenda como orientar seu cliente (e sua equipe) para a perícia médica e aumente suas chances reais de concessão nos benefícios por incapacidade.`
- CTA secundário: `Quero participar do encontro`

### 3.4 Seção de quebras de realidade e aprendizados

- Título: `Quebra de realidade`
- Texto explicativo e itens:
  - cliente despreparado
  - fala o que não deveria
  - não apresenta corretamente a limitação
  - benefício negado
- Adicione a frase: `E o advogado… nem percebe onde errou.`

### 3.5 Lista de aprendizados

- Como preparar seu cliente para a perícia médica
- O que o cliente pode e não pode falar
- Como evitar erros que fazem o benefício ser negado
- Como conduzir o caso antes da perícia
- O que observar no comportamento do perito
- O que fazer após uma negativa
- Como aumentar sua taxa de concessão

### 3.6 Seções de público perfeito e exclusão

- `Para quem é`:
  - advogados que atuam com benefícios por incapacidade
  - equipes que querem aumentar concessões
  - profissionais que querem parar de perder caso por erro simples
  - quem quer atuar com mais segurança
  - quem quer melhorar a orientação ao cliente
- `Para quem não é`:
  - quem quer teoria sem aplicação
  - quem não aplica o que aprende
  - quem acredita que perícia é sorte

### 3.7 Diferencial e oferta

- Título: `Diferencial`
- Texto: `Aqui você não vai ver teoria...`
- Oferta: `Encontro ao vivo por apenas R$ 59,90.`
- Benefícios: aula ao vivo, conteúdo técnico aplicado, estratégia prática, direcionamento claro.

### 3.8 Fechamento

- CTA Final: `Quero garantir minha vaga`
- Frase de impacto: `Você não perde o benefício na perícia. Você perde antes dela… quando não sabe orientar o seu cliente.`

## 4. Ajustes de layout e estilo

1. Escolha cores semelhantes ao projeto existente.
2. Use tipografia parecida: títulos grandes e seções com contraste.
3. Ajuste espaçamento entre blocos para deixar a leitura limpa.
4. Verifique responsividade em celular e tablet.

## 5. Publicar e testar

1. Clique em **Publicar**.
2. Abra a página no navegador.
3. Teste o botão de CTA.
4. Verifique imagens e textos.
5. Ajuste links de navegação e âncoras.

## 6. Opcional: formulário de captura

1. Se quiser aceitar inscrições diretamente, adicione um formulário.
2. Use plugin de formulário: Contact Form 7, WPForms, Fluent Forms, Elementor Forms, etc.
3. Configure envio para e-mail ou integração com CRM.

## 7. Dicas extras

- Use plugin de cache leve para acelerar a página.
- Ative SSL no WordPress e no domínio.
- Utilize título e descrição SEO na página.
- Se usar editor de blocos, salve como modelo para repetir em páginas similares.
