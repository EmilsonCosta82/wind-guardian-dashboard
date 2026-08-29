# Plano — Imagem de fundo no quadro "Distribuição por Severidade"

## O que será feito

1. **Criar asset CDN da imagem enviada**
   - Upload de `user-uploads://ChatGPT_Image_27_de_ago._de_2026_22_54_53.png` (foto de parque eólico) via `lovable-assets`.
   - Criar `src/assets/parque-fundo-severidade.png.asset.json`.

2. **Aplicar a imagem como fundo do card "Distribuição por Severidade"** em `src/pages/Dashboard.tsx`
   - Importar o pointer do asset.
   - No container do card de severidade (atualmente `<div className="kpi-card">`), adicionar a imagem como fundo com baixa opacidade (overlay) para não prejudicar a leitura do gráfico de pizza e da legenda.
   - Estrutura: camada de fundo com a imagem (`background-image`, `background-size: cover`, `opacity ~0.18`) + camada branca/gradient por cima + conteúdo (título, pie chart, legenda) no topo.
   - Garantir que o card mantenha o `kpi-card` (fundo/sombra) e que o texto continue legível.

## Detalhes técnicos

- Asset: `src/assets/parque-fundo-severidade.png.asset.json` via CLI `lovable-assets` (imagem não fica no repositório).
- Nenhuma alteração em dados da matriz, lógica de edição ou demais cards.
- Verificação: build sem erros após a edição.
