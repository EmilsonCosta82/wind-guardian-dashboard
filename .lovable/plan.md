# Ações corretivas 1, 2 e 3 vindas do Daily Log

## Objetivo
Substituir a lógica atual (apenas a Ação 1 recebia o tratamento de campo) por uma busca automática que preenche até as três ações corretivas com os tratamentos reais registrados na planilha, e remover o texto injetado anteriormente.

## O que será feito

1. **Reprocessar a planilha enviada**
   - Aba "SDP Daily Log - 2026": par `Código` + `Treatment`.
   - Aba "SDP Daily Log - 2025": código extraído do texto da coluna "WTG Downtime Name / Activity in Detail" (padrão `(123456789)`) + `Treatment`.
   - Agrupar tratamentos distintos por código de falha e ordenar por número de ocorrências (mais frequente primeiro).

2. **Novo arquivo de dados de campo**
   - `src/data/fieldTreatments.ts` passa a exportar, por código, uma lista de até 3 tratamentos (`{ action, occurrences }`), no lugar do objeto de tratamento único atual.

3. **Aplicação nas ações corretivas**
   - Para cada falha com registro de campo: a Ação 1 recebe o tratamento mais frequente, a Ação 2 o segundo e a Ação 3 o terceiro (quando existirem).
   - Slots sem tratamento correspondente mantêm a ação técnica padrão da matriz.
   - Cada ação vinda da planilha é marcada como "Registro de Campo" com a contagem de ocorrências; as demais ficam sem badge.

4. **Limpeza do que foi adicionado antes**
   - Remover a injeção anterior fixa na Ação 1 em `FaultDetailDialog.tsx` e o uso do mapa antigo, evitando texto duplicado.
   - Ajustar a exportação PDF/Excel (`src/lib/exportProtectionMatrix.ts`) para refletir as três ações atualizadas.

## Observação sobre cobertura
A planilha traz tratamentos para cerca de 54 códigos de falha; desses, aproximadamente 24 possuem 3 ou mais tratamentos distintos suficientes para preencher as três opções. Os demais códigos combinam registros de campo com as ações técnicas padrão.

## Detalhes técnicos
- Script Python (pandas/openpyxl) apenas para gerar o arquivo TS; nada de dependência nova no app.
- Tratamentos truncados serão limitados a ~600 caracteres para manter a leitura na tabela e nas exportações.
- Tipos atualizados: `FieldTreatment[]` por código e flag `source: "field" | "standard"` em `CorrectiveAction`.
