# Plano — Ajustes visuais com logo CTG Brasil

## O que será feito

1. **Logo CTG Brasil no cabeçalho**
   - Criar asset CDN a partir de `user-uploads://logo.png` (`lovable-assets`).
   - Exibir o logo no cabeçalho superior (`AppLayout.tsx`), ao lado do texto "Matriz de Proteção WTG".

2. **Barra lateral — remover nome e imagem completa**
   - Remover os textos "Serra da Palmeira" e "GWH171 · 6.0MW" do topo da sidebar, mantendo apenas o ícone.
   - Ajustar a imagem do parque eólico na sidebar para exibição completa (`object-contain` / altura automática), mostrando os aerogeradores inteiros sem corte.

3. **Favicon**
   - Gerar `public/favicon.png` quadrado a partir do logo (com padding para não distorcer a marca larga) e apontar o `index.html` para ele, removendo `public/favicon.ico`.

4. **Dashboard — remover painel "Falhas Críticas - Ação Imediata Necessária"**
   - Remover a tabela de falhas críticas e o código associado (`recentCritical`, imports não utilizados) de `src/pages/Dashboard.tsx`, mantendo KPIs e gráficos.

## Detalhes técnicos

- Asset: `src/assets/ctg-brasil-logo.png.asset.json` via CLI `lovable-assets` (logo não fica no repositório).
- Favicon: cópia real em `public/favicon.png` (exceção à regra de assets), redimensionada 64x64 com fundo transparente.
- Nenhuma alteração em dados da matriz ou lógica de edição.
