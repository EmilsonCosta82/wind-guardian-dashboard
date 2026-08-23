// Field-proven treatments extracted from CTG Serra da Palmeira Daily Log Report (2025-2026)
// Source: 2026_CTG_Serra_da_Palmeira_Daily_Log_Report_-_20082026.xlsx

export interface FieldTreatment { action: string; occurrences: number; }

export const fieldTreatments: Record<string, FieldTreatment> = {
  "1442": {
    "action": "Após a ocorrência de falha no WTG, foi realizada uma inspeção no sistema de monitoramento de temperatura do Yaw para identificação da causa da anomalia. Durante a análise, foi constatado que o módulo responsável pelo alarme de temperatura apresentava mau funcionamento, ocasionando a falha no sistema. Diante disso, foi realizada a substituição do módulo defeituoso. Após a intervenção, foram executados testes funcio...",
    "occurrences": 8
  },
  "8573": {
    "action": "Após falha no WTG, foi realizada uma inspeção no sistema dos suportes elásticos da gearbox, incluindo os sensores responsáveis pelo monitoramento desse sistema, onde foi identificado que a pressão estava zerada. Foi realizado o ajuste das pressões, bem como o ajuste dos sensores dos suportes elásticos para uma distância de 5 mm. Em seguida, foram realizadas medições e testes operacionais para validação do sistema....",
    "occurrences": 7
  },
  "365130101": {
    "action": "Após normalização do GRID, foi realizado reset remoto, em seguida realizado o start do WTG e o mesmo entrou em operação.",
    "occurrences": 7
  },
  "316035003": {
    "action": "Foi realizado reset remoto, em seguida realizado o start do WTG e o mesmo entrou em operação.",
    "occurrences": 151
  },
  "307091201": {
    "action": "Realizada inspeção no sistema de arrefecimento da gearbox devido ao alarme de baixo nível no reservatório de água. Efetuada verificação do nível do fluido, inspeção visual quanto a possíveis vazamentos e complementação do reservatório conforme necessidade. Após a intervenção, o nível foi restabelecido e o sistema permaneceu operando normalmente, sem novas anomalias.",
    "occurrences": 7
  },
  "316032815": {
    "action": "Foi realizado reset remoto, em seguida realizado o start do WTG e o mesmo entrou em operação.",
    "occurrences": 18
  },
  "304230301": {
    "action": "Foi realizado reset remoto, em seguida realizado o start do WTG e o mesmo entrou em operação.",
    "occurrences": 35
  },
  "316032813": {
    "action": "Devido a uma falha no WTG, foi identificado via Webpage que o sistema de Pitch estava sem comunicação. Durante a inspeção, foi visto que o disjuntor 701F1 encontrava-se desligado. Após religar o disjuntor, verificou-se que a Blade 3 estava travada em 51°. Foi realizada a volta manual da pá e, em seguida, foram feitos testes operacionais. Após constatar que o sistema estava normal, o WTG foi colocado em operação.",
    "occurrences": 1
  },
  "156": {
    "action": "Após o retorno do Grid. O WTG apresentou falha de comunicação, foi realizado uma inspeção na mesma e reestabelecido a comunicação. Em seguida foi realizado teste operacionais e colocamos o WTG em operação.",
    "occurrences": 1
  },
  "1303": {
    "action": "Após falha no WTG, foi realizada uma inspeção no sistema de segurança da nacelle, onde foi identificado que o relé de segurança apresentava mau funcionamento. Foi realizada a substituição do componente, seguida de testes operacionais para validação do sistema. Após a confirmação do funcionamento normal, o WTG foi colocado em operação.",
    "occurrences": 5
  },
  "321001201": {
    "action": "Devido à falha no WTG, foram realizadas análises no motor da pitch 1, sendo identificado um ruído anormal durante seu funcionamento. Em seguida, foi efetuada a substituição do motor. Também foram realizados a substituição dos cabos de potência dos motores de pitch 01 e 03. Em seguida realizado testes operacionais. Após a constatação de normalidade dos componentes, o WTG foi colocado em operação.",
    "occurrences": 4
  },
  "321012013": {
    "action": "Foi realizado reset remoto, em seguida realizado o start do WTG e o mesmo entrou em operação.",
    "occurrences": 5
  },
  "365020802": {
    "action": "Realizamos uma avaliação preliminar do cenário e constatamos que houve um curto na parte do gerador, que posteriormente, será realizado uma inspeção mais aprofundada para se entender o que de fato ocorreu. Dessa forma, o WTG permanecerá parado até que novas análises sejam concluídas.",
    "occurrences": 1
  },
  "302011117": {
    "action": "Após análises detalhada da falha, foi realizado o reset remoto e em seguida start do WTG.",
    "occurrences": 3
  },
  "302011114": {
    "action": "Após análises detalhada da falha, foi realizado o reset remoto e em seguida start do WTG.",
    "occurrences": 3
  },
  "316032829": {
    "action": "Após análises detalhada da falha, foi realizado o reset remoto e em seguida start do WTG.",
    "occurrences": 11
  },
  "302011113": {
    "action": "Após análises detalhada da falha, foi realizado o reset remoto e em seguida start do WTG.",
    "occurrences": 1
  },
  "321002013": {
    "action": "Após análises detalhada da falha, foi realizado o reset remoto e em seguida start do WTG.",
    "occurrences": 1
  },
  "304152701": {
    "action": "Após inspeção visual no sistema de Yaw e não percebida nenhuma anormalidade física, fora aplicado um reset no alarme de falha do Yaw mas que não surtiu nenhum efeito. A única anormalidade percebida foi que a luz da botoeira do controle manual referente ao rotor destravado estava inadvertidamente apagada quando deveria estar acesa. Fora dado o comando de destravar o rotor mesmo com o rotor já destravado, que result...",
    "occurrences": 3
  },
  "307100902": {
    "action": "Foi realizado reset remoto, em seguida realizado o start do WTG e o mesmo entrou em operação.",
    "occurrences": 159
  },
  "316035006": {
    "action": "Foi realizado reset remoto, em seguida realizado o start do WTG e o mesmo entrou em operação.",
    "occurrences": 29
  },
  "365250103": {
    "action": "Após normalização do GRID, foi realizado reset remoto, em seguida realizado o start do WTG e o mesmo entrou em operação.",
    "occurrences": 15
  },
  "321001218": {
    "action": "Inspeções realizadas nas conexões do sistema de Pitch, Inspeção no PD802, Verificação das tensões de alimentação, Movimentações na Pá 1 para verificação das tensões, correntes e parâmetros elétricos, Testes operacionais e colocado WTG em operação.",
    "occurrences": 1
  },
  "316032812": {
    "action": "Foi detectado erro de ângulo na pitch 2. Durante a inspeção, foi identificado curto-circuito no Slip e no cabo de potência da pitch, causado por conectores Harting danificados. O Splip e o cabo de potência da pitch foram substituídos, o sistema foi testado e retornou à operação normal.",
    "occurrences": 2
  },
  "330032803": {
    "action": "Foi realizado reset remoto, em seguida realizado o start do WTG e o mesmo entrou em operação.",
    "occurrences": 14
  },
  "321060064": {
    "action": "Foi realizado reset remoto, em seguida realizado o start do WTG e o mesmo entrou em operação.",
    "occurrences": 8
  },
  "365020201": {
    "action": "Durante a inspeção, foram identificados três IGBT's avariados, que foram substituídos. Durante o processo de substituição, fizemos a limpeza do gabinete que apresentava diversos estilhaços de componentes avariados. Além disso, foi realizada a substituição do fusível (FU7), que apresentou falha. Para realização da atividade de substituição dos IGBT’s, se fez necessário a drenagem do líquido de arrefecimento (Glicol...",
    "occurrences": 2
  },
  "306852803": {
    "action": "Foi realizado reset remoto, em seguida realizado o start do WTG e o mesmo entrou em operação.",
    "occurrences": 10
  },
  "307010702": {
    "action": "Foi realizado reset remoto, em seguida realizado o start do WTG e o mesmo entrou em operação.",
    "occurrences": 13
  },
  "365040101": {
    "action": "Após análise do conversor, foi verificado que o contato auxiliar que fica no contactor K30 estava mal encaixado, foi realizado o ajuste, foi realizado a inspeção visual detalhada no circuito dos capacitores (C2.1 / C2.3), (C2.4 / C2.6), (C2.7 / C2.9) Todas as conexões estavam ok. Foi verificado as as conexões da placa GPUCM1 se estavam mal conectada. Todas estavam ok. Após ter encontrado apenas o contato auxiliar...",
    "occurrences": 2
  },
  "365060101": {
    "action": "Foi realizado reset remoto, em seguida realizado o start do WTG e o mesmo entrou em operação.",
    "occurrences": 19
  },
  "306832701": {
    "action": "Manutenção corretiva realizada - (Aguardando descrição da atividade executada).",
    "occurrences": 118
  },
  "365040201": {
    "action": "Realizado intervenção no WTG para identificar falhar ocorrida no converter. Realizado check de IGBT, fusíveis, placas eletrnicas, capacitores, onde foi identificado que um relé estava apresentando mal funcionamento. Realizado a correção do relé e colocado o WTG em operação.",
    "occurrences": 1
  },
  "304282722": {
    "action": "Foi realizado reset remoto, em seguida realizado o start do WTG e o mesmo entrou em operação.",
    "occurrences": 8
  },
  "365160701": {
    "action": "Foi realizado reset remoto, em seguida realizado o start do WTG e o mesmo entrou em operação.",
    "occurrences": 1
  },
  "365160601": {
    "action": "Após normalização do GRID, foi realizado reset remoto, em seguida realizado o start do WTG e o mesmo entrou em operação.",
    "occurrences": 2
  },
  "304282720": {
    "action": "Foi realizado reset remoto, em seguida realizado o start do WTG e o mesmo entrou em operação.",
    "occurrences": 3
  },
  "365190131": {
    "action": "Foi realizado reset remoto, em seguida realizado o start do WTG e o mesmo entrou em operação.",
    "occurrences": 1
  },
  "321011218": {
    "action": "Foi Realizado uma inspeção visual nas fichas de entrada das boxes do pitch, onde foi constatado que alguns PG estavam folgados. com isso, foi feito o aperto nos mesmos, feito teste operacionais colocado o WTG em operação.",
    "occurrences": 3
  },
  "321001002": {
    "action": "Ao chegar na WTG, foi verificado na webpage que a tensão “PITCH DC VOLTAGE” da blade 01 encontrava-se zerada. Após acesso ao hub e inspeção das boxes referentes à pá 01, foram realizadas medições de tensão DC, as quais apresentaram valores dentro da normalidade. No entanto, o visor do Pitch Drive indicava condição de falha. Foi realizado o reset das boxes, restabelecendo o funcionamento normal do Pitch Drive. Falh...",
    "occurrences": 2
  },
  "365040301": {
    "action": "O WTG apresentou falha no sistema dos capacitores, com isso, foi feito novas inspeções no sistema, onde foi encontrado um conector do TC13 com um mal contato. Foi reposicionado e assim, a falha foi sanada.",
    "occurrences": 2
  },
  "316032811": {
    "action": "Devido à falha no WTG, foi realizada uma inspeção no slip ring, onde foi identificado um ponto quente no cabo de potência. Após a substituição do cabo, a falha foi sanada. Em seguida, foram realizados testes operacionais, e o WTG foi colocado em operação.",
    "occurrences": 1
  },
  "305092701": {
    "action": "Wtg apresentou falha de (Feedback signal lost of Hydraulic Pump).Foi realizado uma inspeção no disjuntor e cabos responsavel pela alimentação da unidade hidráulica e não foi constatado nem uma anormalidade. Logo após foi realizado um reset do mesmo, feito testes operacionais e colocado o wtg em operação.",
    "occurrences": 2
  },
  "365160402": {
    "action": "Foi realizado reset remoto, em seguida realizado o start do WTG e o mesmo entrou em operação.",
    "occurrences": 4
  },
  "304272803": {
    "action": "Realizado uma inspeção no sistema elétrico do sistema, inspeção de relé, contactores, dijuntores, onde foi encontrado um cabo solto no relé (1901A1, realizado a correção.Teste operacionais e colocado o WTG em operação.",
    "occurrences": 1
  },
  "4971": {
    "action": "Falha: (330032803) 1#Converter Safety Chain Triggered; (365250102) HP_CVT_1# (Three-Level) System Information – Fault Summary: Generator Side Fault. Após a ocorrência da falha, foi realizada inspeção no painel dos IGBTs do conversor, não sendo identificada qualquer anomalia visual ou indício de falha nos componentes. Durante a análise, foi constatado o disjuntor Q20 em condição de Trip. Com base no esquema elétric...",
    "occurrences": 5
  },
  "316032845": {
    "action": "Foi realizado reset remoto, em seguida realizado o start do WTG e o mesmo entrou em operação.",
    "occurrences": 1
  },
  "1207": {
    "action": "WTG com temperatura alta do transformador auxiliar. Foi realizado teste no PT100 do transformador e constatado que o mesmo estava em perfeitas condições funcionais. Durante a inspeção nas conexões do PT100, foi diagnosticado que o cabo do PT100 estava mal conectado, ocasionando uma variação de temperatura. Após análise foi conectado o cabo e normalizado o sistema de monitoramento de temperatura. WTG em operação",
    "occurrences": 1
  },
  "365010203": {
    "action": "Foi realizado reset remoto, em seguida realizado o start do WTG e o mesmo entrou em operação.",
    "occurrences": 3
  },
  "321001001": {
    "action": "Foi realizado reset remoto, em seguida realizado o start do WTG e o mesmo entrou em operação.",
    "occurrences": 1
  },
  "204262701": {
    "action": "De acordo com o Warning apresentado no WTG, Identificamos de imediado que uma das saidas do centro de distribuição estava com obstrução, impedindo que a graxa chegasse ao seu destino. Fizemos a limpeza de todas as saídas, juntamente com a tentativa de encontrar alguma outra obstrução. Finalizados os testes operacionais e colocamos o WTG em operação.",
    "occurrences": 4
  },
  "1443": {
    "action": "Após falha no WTG, foi realizada uma inspeção no limit switch do Yaw Slip Ring, onde foi identificado que os cabos de feedback do limit switch (T:02) e de temperatura (BC:2) estavam conectados de forma invertida. A falha apresentada pela máquina foi Yaw Slip Temp High. Após análise do sistema de temperatura, foi constatado que os fans não estavam acionando. Foi realizada a substituição do módulo de temperatura, sa...",
    "occurrences": 2
  },
  "220042701": {
    "action": "Durante a inspeção no sensor inductivo 16W6 foi identificado que o êmbulo que aciona o sensor estava travado. Na ocasião o mesmo foi limpo e reajustado, com isso voltou a funcionar normalmente.",
    "occurrences": 1
  },
  "204261201": {
    "action": "Realizado uma verificação no sistema de lubrificação do Yaw",
    "occurrences": 2
  },
  "211062702": {
    "action": "Após inspeção no circuito eletrico da UPS do painel do main control foi identificado que a UPS encontrava-se em falha a mesma apresentando falha e erro de leitura, a mesma foi substituida, realizado testes operacionais e logo em seguida WTG em operação",
    "occurrences": 2
  },
  "206280301": {
    "action": "Ao realizar uma inspeção no sistema de temperatura do gerador foi identificado que a leitura de um dos PT100 estava com a leitura muito alta, foi realizado uma inspeção no circuito dos PT100 e foi identificado que o PT100 se encontrava com uma pequena folga causando mal contato e erro de leitura para o fedebaack e leitura do mesmo, foi feita a correção o aperto no PT100, realizado testes de tensão e continuidade e...",
    "occurrences": 1
  },
  "220042800": {
    "action": "WTG apresentou alarme de falta de lubrificação no pitch e low grease. Em inspeção, nível de graxa ok no reservatório. Ao acionar a bomba, não foi identificado fluxo de graxa nas linhas. Constatado bloqueio no bloco de lubrificação. Realizada desobstrução, remontagem e teste funcional, normalizando o sistema.",
    "occurrences": 1
  },
  "320032902": {
    "action": "Foi realizada a troca e atualização do software do PIC e PD. Após a atualização, constatou-se que o pitch ainda estava sem comunicação com a Nacelle. Após análise, foi identificado que o cartão 1701C1.02 estava danificado, impedindo a comunicação entre a Nacelle e o Hub. O cartão foi substituído, sanando a falha de comunicação. WTG voltou à operação normal",
    "occurrences": 1
  },
  "1486": {
    "action": "Foi realizada verificação no sistema de lubrificação do pitch, com testes na bomba e conferência da alimentação dos sensores, estando todos com tensão normal. Durante a inspeção, foi identificado que o bloco principal de distribuição estava obstruído, impedindo a passagem de graxa. Foi feita a substituição do componente. Após a intervenção, o sistema foi testado e voltou a operar normalmente, realizando a lubrific...",
    "occurrences": 1
  },
  "304222701": {
    "action": "Após falha no WTG, foi realizada uma inspeção no limit switch do Yaw Slip Ring, onde foi identificado que os cabos de feedback do limit switch (T:02) e de temperatura (BC:2) estavam invertidos. A falha genuína da maquina foi: Yaw Slip Temp High Após análise do sistema de temperatura, foi verificado que todos os ventiladores (fans) estavam acionando corretamente e que o sistema se encontrava em condições normais de...",
    "occurrences": 2
  },
  "330012809": {
    "action": "WTG apresentou falha *(330012809)Signal Rdy_ref of 1#Converter Lost after Modulation;(330012809)Signal Rdy_ref of 1#Converter Lost after Modulation*. Durante a inspeção foi identificado que o nível de glicol do sistema de arrefecimento do conversor estava baixo, foi adicionado glicol no sistema. Logo após durante as inspeção no painel do conversor foi identificado que os disjuntores 91Q2 e 91Q3 estavam desligado a...",
    "occurrences": 1
  },
  "365110101": {
    "action": "HP_CVT_1# (Three-Level) – UPS battery failure Foram realizadas medições na tensão de entrada, não sendo identificadas anomalias na alimentação elétrica. Durante os testes, constatou-se que a UPS não estava sustentando a carga, caracterizando falha no equipamento. Foi realizada a substituição da UPS defeituosa e, após testes operacionais, o sistema voltou a operar normalmente, sem novos alarmes. Status: Sistema nor...",
    "occurrences": 1
  },
  "1411": {
    "action": "Após falha no WTG, foi realizada uma inspeção no sistema de feedback do yaw, sendo identificado que o cabo correspondente à porta 2 do cartão 1701DIO7 estava conectado incorretamente na porta 12. Foi realizada a correção da ligação, conectando o cabo na porta correta e sanando a falha. Em seguida, foram realizados testes operacionais, e o WTG foi colocado em operação.",
    "occurrences": 1
  },
  "306922701": {
    "action": "Após falha no wtg foi realizado uma inspeção no sistema eletrico de resfriamento do gerador e foi constatado que a contactora 409M1 se encontrava travada .Foi realizado swapped da mesma por a contactora 21KM1 em seguida realizado testes operacionais e colocado o wtg em operação.",
    "occurrences": 14
  },
  "330153001": {
    "action": "Devido à ocorrência da falha (330153001) Converter Cabinet A Heartbeat Signal Abnormal, foi realizada análise completa do sistema do conversor visando identificar a origem da anomalia. Durante a intervenção, foram efetuadas medições e análises das correntes e tensões do sistema, não sendo constatadas irregularidades nos parâmetros elétricos avaliados. Também foi realizada inspeção no circuito dos transformadores d...",
    "occurrences": 1
  },
  "306832702": {
    "action": "Durante os testes de controle de tensão em 500 kV da subestação do site, o WTG apresentou falha no sistema de refrigeração do gerador/ gearbox. Na inspeção, foi constatado que o disjuntor 1501Q2, responsável pela alimentação do motor do Fan 02 em alta rotação, encontrava-se desarmado, após o rearme do disjuntor. Na inspeção do circuito foi encontrado o contato 1502KM2 travado, feito o destravamento do contato, for...",
    "occurrences": 13
  },
  "311212905": {
    "action": "Após a falha no WTG, foi realizado uma inspeção no sistema de Comunicação do Conversor e foi identificado que o WTG apresentou falha relacionada à perda de comunicação com o conversor, então foi realizada uma inspeção no sistema de comunicação do conversor e foi constatada anormalidade no funcionamento do switch de rede, resultando na indisponibilidade da comunicação. Foram executados testes de diagnóstico no swit...",
    "occurrences": 4
  },
  "1306": {
    "action": "Após falha no WTG, foi realizada uma inspeção no sistema de Pitch da turbina, onde foi identificado que o sensor de 3° da Pitch 03 permanecia acionado devido ao mau funcionamento do sensor indutivo. Foi realizada a substituição do sensor, sanando a falha. Em seguida, foram realizados testes operacionais, confirmando o correto funcionamento do sistema, e o WTG foi colocado em operação.",
    "occurrences": 1
  },
  "2233": {
    "action": "Após falha no WTG, foi realizada uma análise via Web Page no sistema de Pitch, onde foi identificado que a Pitch 02 apresentava indicação de ausência de alimentação. Em seguida, foi realizada uma inspeção na Pitch 02, porém nenhuma anormalidade foi encontrada. Foi então realizado o reboot do sistema, restabelecendo as leituras de tensão e normalizando o funcionamento, sanando a falha. Após isso, foram realizados t...",
    "occurrences": 1
  },
  "4970": {
    "action": "Após parada do WTG, foi realizada uma inspeção no conversor, onde foi efetuada a substituição da placa do IGBT, sanando uma das falhas apresentadas. No entanto, permaneceu uma falha relacionada à corrente elevada na fase AB. Durante a análise, foi realizado um swapped entre os TCs CT7 e CT9, porém a falha continuou na mesma fase. Em seguida, foi realizada uma inspeção nos conectores dos TCs, onde foram identificad...",
    "occurrences": 1
  },
  "320042704": {
    "action": "Após falha no WTG, foi realizada uma inspeção no sistema de pitch, sendo identificado que a fonte de alimentação de 24 V do sistema estava danificada. Foi realizada a substituição da fonte, sanando a falha. Em seguida, foram realizados testes operacionais, e o WTG foi colocado em operação.",
    "occurrences": 1
  },
  "306920303": {
    "action": "Foi identificado o mau funcionamento do FAN2, sendo realizada sua substituição. Em seguida, foram efetuados testes operacionais, constatando-se a eliminação da falha do aerogerador. Após a conclusão dos testes, o aerogerador foi colocado em operação.",
    "occurrences": 1
  },
  "303001603": {
    "action": "Foi realizada a identificação dos disjuntores 409Q1 e 1501Q2. As contatoras são do fabricante Nader. Os disjuntores foram inspecionados e rearmados. Em seguida, foram realizados testes nos FANS 01 e 02 durante alguns minutos, sem identificação de novas falhas. A máquina foi resetada e permaneceu sem falhas. Após a conclusão dos testes, a equipe realizará a descida e o start da máquina.",
    "occurrences": 1
  }
};
