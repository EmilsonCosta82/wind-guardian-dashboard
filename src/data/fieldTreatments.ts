// Field-proven treatments extracted from CTG Serra da Palmeira Daily Log Report (2025-2026)
// Source: 2026_CTG_Serra_da_Palmeira_Daily_Log_Report_-_20082026-2.xlsx
// Up to 3 distinct treatments per fault code, ordered by occurrence count.

export interface FieldTreatment { action: string; occurrences: number; }

export const fieldTreatments: Record<string, FieldTreatment[]> = {
  "7": [
    {
      "action": "Foi realizado reset remoto, em seguida realizado o start do WTG e o mesmo entrou em operação.",
      "occurrences": 60
    },
    {
      "action": "Manutenção corretiva realizada - (Aguardando descrição da atividade executada).",
      "occurrences": 17
    },
    {
      "action": "Após WTG apresentar falha , foram realizadas análises elétricas e inspeções nos circuitos de acionamento dos Fan 1 e Fan 2. Durante a inspeção, foi identificado que os disjuntores 1501Q1 e 1501Q2, 409Q1 encontravam-se desarmados (tripados). Foi realizado o rearme dos disjuntores, em seguida realizado testes operacionais, que confirmaram o funcionamento normal dos circuitos. Logo após o WTG foi colocado em operação.",
      "occurrences": 12
    }
  ],
  "4": [
    {
      "action": "Foi realizado reset remoto, em seguida realizado o start do WTG e o mesmo entrou em operação.",
      "occurrences": 23
    },
    {
      "action": "Após inspeção no circuito eletrico da UPS do painel do main control foi identificado que a UPS encontrava-se em falha a mesma apresentando falha e erro de leitura, a mesma foi substituida, realizado testes operacionais e logo em seguida WTG em operação",
      "occurrences": 2
    },
    {
      "action": "Devido à ocorrência da falha (330153001) Converter Cabinet A Heartbeat Signal Abnormal, foi realizada análise completa do sistema do conversor visando identificar a origem da anomalia. Durante a intervenção, foram efetuadas medições e análises das correntes e tensões do sistema, não sendo constatadas irregularidades nos parâmetros elétricos avaliados. Também foi realizada inspeção no circuito dos transformadores de corrente (TCs), não sendo identificadas falhas ou desvios operacionais. Adicionalmente, foi executada uma inspeção detalhada nos conectores, terminais e pontos de conexão das pla...",
      "occurrences": 2
    }
  ],
  "8": [
    {
      "action": "Foi realizado reset remoto, em seguida realizado o start do WTG e o mesmo entrou em operação.",
      "occurrences": 15
    },
    {
      "action": "Realizada atividade de remoção de parafuso travado da conexão entre a blade e o rolamento de pitch,",
      "occurrences": 2
    },
    {
      "action": "Após a ocorrência de um Warning no WTG, foi realizada uma inspeção no sistema de lubrificação dos rolamentos das pás, sendo identificado baixo nível de graxa no reservatório. Foi efetuado o reabastecimento do reservatório e, na sequência, realizados testes funcionais em todo o sistema de lubrificação. Durante os testes, foi constatado que o sistema operava normalmente, sem a identificação de novas anomalias. Dessa forma, o WTG foi restabelecido à operação normal.",
      "occurrences": 2
    }
  ],
  "0": [
    {
      "action": "Foi realizado a parada do WTG para inspeção do gerador.",
      "occurrences": 262
    },
    {
      "action": "Realização das atividades de manutenção Semianual (2nd time / 0.5 Year) de acordo com a Tasklist do FEMS. Baseando-se no manual GW-19FW.0086 (Versão D)",
      "occurrences": 157
    },
    {
      "action": "Realização das atividades de manutenção de acordo com a Tasklist do FEMS. Baseando-se no manual GW-19FW.0086 (Versão B).",
      "occurrences": 148
    }
  ],
  "1": [
    {
      "action": "Lubrificação dos Parafusos da Fundação",
      "occurrences": 10
    }
  ],
  "2": [
    {
      "action": "Realizado a substituição das pastilhas de freio e regulador centrifugo do motor do elevador 3SLift. Material utilizado: Pastilha de freio do motor elevador - 01 PÇ Regualdor centrifugo do motor do elevador - 01 PÇ",
      "occurrences": 93
    },
    {
      "action": "Inspeção e Certificação - Elevador; Escada e Linha de vida - (ARTAMA)",
      "occurrences": 52
    },
    {
      "action": "Foi realizado reset remoto, em seguida realizado o start do WTG e o mesmo entrou em operação.",
      "occurrences": 24
    }
  ],
  "3": [
    {
      "action": "Devido à falha de comunicação da MV Station com o sistema supervisório SCADA, foi realizada uma inspeção no equipamento. Durante a verificação, constatou-se que o transformador auxiliar TM01 (SG-10 kVA / AC 900 / 400 V) apresentava falha de funcionamento, ocasionando a perda de alimentação da UPS, do relé de proteção e dos demais dispositivos associados. Em função dessa condição, o WTG permaneceu indisponível/parado.",
      "occurrences": 9
    },
    {
      "action": "Devido à falha de comunicação da MV Station com o supervisório SCADA, foi realizada inspeção no sistema da MV, sendo constatado que o transformador auxiliar TM01 (SG-10 kVA / AC 900 V / 400 V) encontrava-se danificado. A falha ocasionava ausência de tensão para os equipamentos auxiliares, incluindo o relé de proteção e o switch de comunicação. Foi realizada a substituição do transformador danificado e, na sequência, executados testes de comunicação. Durante as verificações, constatou-se o restabelecimento da comunicação com o supervisório, bem como o pleno funcionamento dos dispositivos e d...",
      "occurrences": 8
    },
    {
      "action": "Realizada abertura do plug de Dreno e Janelas de Drenagem.",
      "occurrences": 7
    }
  ],
  "5": [
    {
      "action": "A turbina não apresentava comunicação e foi realizado um reset local, dessa forma ela voltou a comunicar.",
      "occurrences": 1
    },
    {
      "action": "O WTG apresentou a falha de Falta de comunicação no PLC. Foi verificado os cabos de fibra. Foi realizado a conexão dos cartões Beckoff junto com o PLC. não apresentava folga. Foi verificado se havia terminal nos cabos folgados. Após serem realizado os testes, foi realizado um reset no PLC, e o mesmo voltou a operar normal. Foi colocado a WTG em operação.",
      "occurrences": 1
    },
    {
      "action": "Após a máquina ficar sem comunicação no PLC, foi realizada uma análise no MCC, onde foi identificado que o CX5130 estava avariado. Em seguida, foi realizada a substituição do componente, sanando a falha. Em seguida, foram executados testes operacionais e, após o WTG apresentar normalidade, o equipamento foi colocado em operação..",
      "occurrences": 1
    }
  ],
  "6": [
    {
      "action": "Realizada inspeção no sistema de arrefecimento da gearbox devido ao alarme de baixo nível no reservatório de água. Efetuada verificação do nível do fluido, inspeção visual quanto a possíveis vazamentos e complementação do reservatório conforme necessidade. Após a intervenção, o nível foi restabelecido e o sistema permaneceu operando normalmente, sem novas anomalias.",
      "occurrences": 1
    },
    {
      "action": "Após falha no WTG, foi realizada uma inspeção no sistema de arrefecimento do conversor para identificação de um vazamento de glicol. Durante a inspeção, foi identificado que uma peça da bomba de arrefecimento havia se desencaixado, comprometendo a vedação e ocasionando o vazamento. Foi realizado o ajuste e o correto reposicionamento da peça, sanando a anomalia. Em seguida, foram realizados testes operacionais e inspeção no sistema, não sendo identificado nenhum novo vazamento. Após o sistema apresentar normalidade, o WTG foi colocado em operação.",
      "occurrences": 1
    },
    {
      "action": "Foi realizado o desligamento da MV para a realização de trabalhos da empresa GEL pela parte da manhã. Na parte da tarde ao restabelecer a energização da MV, o WTG apresentou nível baixo de Glicol no sistema do conversor. Foi identificado um pequeno vazamento com uma válvula folgada. Foi realizado o aperto da válvula, sanando o vazamento. Foi realizado a aplicação do glicol, deixando o nível ok do sistema. Após a correção, foi realizado os teste operacionais e colocado o WTG em operação.",
      "occurrences": 1
    }
  ],
  "1442": [
    {
      "action": "Devido a falha apresentada no WTG, realizamos análises no sistema de controle de temperatura e umidade do yaw slip ring e identificamos que o módulo de controle não estava funcionando corretamentne. Foi realizado ajuste de parâmetros e testes operacionais. Em seguida colocamos o WTG em operação.",
      "occurrences": 1
    }
  ],
  "365130101": [
    {
      "action": "Falha de GRID",
      "occurrences": 8
    },
    {
      "action": "Após normalização do GRID, foi realizado reset remoto, em seguida realizado o start do WTG e o mesmo entrou em operação.",
      "occurrences": 3
    },
    {
      "action": "FALHA DE GRID",
      "occurrences": 2
    }
  ],
  "365250103": [
    {
      "action": "Falha de GRID",
      "occurrences": 5
    },
    {
      "action": "Foi realizado reset remoto, em seguida realizado o start do WTG e o mesmo entrou em operação.",
      "occurrences": 5
    },
    {
      "action": "Após normalização do GRID, foi realizado reset remoto, em seguida realizado o start do WTG e o mesmo entrou em operação.",
      "occurrences": 5
    }
  ],
  "365160402": [
    {
      "action": "Falha de GRID",
      "occurrences": 3
    }
  ],
  "8573": [
    {
      "action": "Devido a falha apresentada no WTG, foi realizada inspeção nos suportes elástico da gearbox. Onde foi identificado algumas anomalias nos mesmos. Para a resolução das anomalias foi realizado a substituição das borrachas de amortecimento, ajustes das dimensões e da pressão dos 02 sistemas do suporte elástico da gearbox. Em seguida realizamos testes operacionais e colocamos o WTG em operação.",
      "occurrences": 1
    },
    {
      "action": "Ap ó s analise no sistema do suporte do elastomerico foi identifcado que o mesmo estava danificado, com as medições inrregulares e as pressões baixa, foi realizado os registros para analises e correção do mesmo.",
      "occurrences": 1
    },
    {
      "action": "Devido ao problema identificado anteriormente no suporte elástico da gerabox, foi realizado a substituição de 02 borrachas de amortecimento, ajustes das dimensões e da pressão dos 02 sistemas do suporte elástico da gearbox. Em seguida realizamos testes operacionais e colocamos o WTG em operação.",
      "occurrences": 1
    }
  ],
  "365010203": [
    {
      "action": "Falha de GRID",
      "occurrences": 1
    }
  ],
  "316035003": [
    {
      "action": "Foi realizado reset remoto, em seguida realizado o start do WTG e o mesmo entrou em operação.",
      "occurrences": 80
    },
    {
      "action": "Após normalização do GRID, foi realizado reset remoto, em seguida realizado o start do WTG e o mesmo entrou em operação.",
      "occurrences": 3
    },
    {
      "action": "Após análises detalhada da falha, foi realizado o reset remoto e em seguida start do WTG.",
      "occurrences": 1
    }
  ],
  "307091201": [
    {
      "action": "Devido a falha no WTG, Foi realizado uma inspeção no sistema de refrigeração, foi identificado que a conexão estava folgada. Realizamos o reaperto da mesma e foi adicionado glicol ao sistema. Em seguida foi realizado testes operacionais e colocamos o WTG em operação.",
      "occurrences": 1
    },
    {
      "action": "Após falha apresentado no WTG. Foi realizado inspeção no sistema de refrigeração (Water tank) e constado vazamento na conexão do reservatório do sistema. Após constatação, foi realizado reaperto na conexão e inserido glicol no sistema. WTG em operação.",
      "occurrences": 1
    },
    {
      "action": "Foi realizado a inspeção nas conexões do radiador em seguida, em seguida foi inserido o liquido de arrefecimento (glicol) no sistema para normalização do nível.",
      "occurrences": 1
    }
  ],
  "316032815": [
    {
      "action": "Foi realizado reset remoto, em seguida realizado o start do WTG e o mesmo entrou em operação.",
      "occurrences": 18
    }
  ],
  "304230301": [
    {
      "action": "Foi realizado reset remoto, em seguida realizado o start do WTG e o mesmo entrou em operação.",
      "occurrences": 2
    },
    {
      "action": "Devido a falha no WTG, foi realizado uma inspeção no Yaw Coletor, indentificando assim, que o switch de alimentação do mesmo estava desligado. O switch foi ligado e foram realizados testes operacionais, logo após, o WTG foi colocado em operação.",
      "occurrences": 1
    },
    {
      "action": "Devido a falha (Yaw Slip Ring Temp High) no WTG, foi realizado uma inspeção no Yaw Coletor, e visto que o switch de alimentação encontrava-se desligado. O mesmo foi religado. Logo em seguida foram feitos testes operacionais e o WTG foi colocado em operação.",
      "occurrences": 1
    }
  ],
  "316032813": [
    {
      "action": "Devido a uma falha no WTG, foi identificado via Webpage que o sistema de Pitch estava sem comunicação. Durante a inspeção, foi visto que o disjuntor 701F1 encontrava-se desligado. Após religar o disjuntor, verificou-se que a Blade 3 estava travada em 51°. Foi realizada a volta manual da pá e, em seguida, foram feitos testes operacionais. Após constatar que o sistema estava normal, o WTG foi colocado em operação.",
      "occurrences": 1
    }
  ],
  "156": [
    {
      "action": "Após o retorno do Grid. O WTG apresentou falha de comunicação, foi realizado uma inspeção na mesma e reestabelecido a comunicação. Em seguida foi realizado teste operacionais e colocamos o WTG em operação.",
      "occurrences": 1
    }
  ],
  "1303": [
    {
      "action": "O WTG apresentou falha de overspeed. Foi Feito a substituição do modolo overspeed e reajuste dos sensores. Realizado testes operacionais e colocamos o WTG em operação.",
      "occurrences": 1
    },
    {
      "action": "Após a falha do WTG por (Overspeed of safety chain) realizamos a intervenção de substituição do sensor 2. Em seguida colocado o WTG em operação.",
      "occurrences": 1
    },
    {
      "action": "Após analise da falha no WTG, foi identificado um pico no sensor rotativo. Realizado a troca do sensor indutivo 2 do overspeed, ajustado a distância para 3mm e desfeito o swapped dos cabos (1805K1/6 e 1805K1/8) e (1805K1/5 e 1805K1/7). Após isso, foram feitos testes operacionais e o WTG foi colocado em operação.",
      "occurrences": 1
    }
  ],
  "321001201": [
    {
      "action": "Devido a falha (SVPS-1 # Pitch over current summary fault(PD);Pitch Inner Safety Chain Triggered) no WTG, foi iniciada a inspeção do sistema de pitch, onde foi constatado uma falha no Drive (PD802). Em seguida, foi realizado a substituição do drive, parametrização e testes operacionais. Colocado WTG em operação.",
      "occurrences": 1
    },
    {
      "action": "Devido a falha ( Pitch over current summary fault (PD)] no WTG, realizamos uma inspeção no sistema de pitch 01, motor, redutor, engrenagens e top box, onde não foi encontrado falha. Em seguida realizado testes operacionais e colocado o WTG em operação.",
      "occurrences": 1
    },
    {
      "action": "Devido à falha no WTG, foram realizadas análises no motor da pitch 1, sendo identificado um ruído anormal durante seu funcionamento. Em seguida, foi efetuada a substituição do motor. Também foram realizados a substituição dos cabos de potência dos motores de pitch 01 e 03. Em seguida realizado testes operacionais. Após a constatação de normalidade dos componentes, o WTG foi colocado em operação.",
      "occurrences": 1
    }
  ],
  "321012013": [
    {
      "action": "Foi realizado reset remoto, em seguida realizado o start do WTG e o mesmo entrou em operação.",
      "occurrences": 3
    },
    {
      "action": "Verificado cabo 701w com folga no Hub, ocasionando a falha intermitente. Foi fixado o cabo e apertado conexões. WTG ok.",
      "occurrences": 1
    },
    {
      "action": "Foi realizado inspeção nos cabos de comando e de potência das blades e constatado alguns entre si folgados. Foi feito a correção. Logo após, foi verificado as conexões do slip ring. Sendo assim nada de anormal encontrado! Feito testes operacionais e em seguida colocamos o WTG em operação.",
      "occurrences": 1
    }
  ],
  "365020802": [
    {
      "action": "Realizamos uma avaliação preliminar do cenário e constatamos que houve um curto na parte do gerador, que posteriormente, será realizado uma inspeção mais aprofundada para se entender o que de fato ocorreu. Dessa forma, o WTG permanecerá parado até que novas análises sejam concluídas.",
      "occurrences": 1
    }
  ],
  "302011117": [
    {
      "action": "Após análises detalhada da falha, foi realizado o reset remoto e em seguida start do WTG.",
      "occurrences": 3
    }
  ],
  "302011114": [
    {
      "action": "Após análises detalhada da falha, foi realizado o reset remoto e em seguida start do WTG.",
      "occurrences": 3
    }
  ],
  "316032829": [
    {
      "action": "Após análises detalhada da falha, foi realizado o reset remoto e em seguida start do WTG.",
      "occurrences": 11
    }
  ],
  "302011113": [
    {
      "action": "Após análises detalhada da falha, foi realizado o reset remoto e em seguida start do WTG.",
      "occurrences": 1
    }
  ],
  "321002013": [
    {
      "action": "Após análises detalhada da falha, foi realizado o reset remoto e em seguida start do WTG.",
      "occurrences": 1
    }
  ],
  "304152701": [
    {
      "action": "Reaperto e fixação do cabo solto na contatora 903KM4.",
      "occurrences": 1
    },
    {
      "action": "Foi realizado inspeção no circuito do FB do yaw right e foi detectado um cabo folgado no rele 903K4 de onde foi realizado o aperto no respectivo borne, e também nos nos outros relés que também se encontravam folgados. O sinal FB-02 voltou ao normal de acordo com o Beckhoff EL1857/DIO07.",
      "occurrences": 1
    }
  ],
  "307100902": [
    {
      "action": "Foi realizado reset remoto, em seguida realizado o start do WTG e o mesmo entrou em operação.",
      "occurrences": 110
    },
    {
      "action": "Após análise no sistema elástico da gearbox, foi identificado que as bolsas estavam com a pressão baixa. Entao, foi realizado a inserção do liquido nas bolsas, ajuste das pressões, coleta das medidas e em seguida, colocado o WTG em operação.",
      "occurrences": 3
    },
    {
      "action": "Após análise no sistema elástico da gearbox, foi identificado que as bolsas estavam com a pressão baixa, na posição de H2 a bolsa está danificada e h1 esta com inicio de deformação. Então, foi realizado a inserção do liquido nas bolsas, ajuste das pressões, coleta das medidas e em seguida, colocado o WTG em operação.",
      "occurrences": 3
    }
  ],
  "365030102": [
    {
      "action": "FALHA DE GRID",
      "occurrences": 2
    }
  ],
  "320032902": [
    {
      "action": "FALHA DE GRID",
      "occurrences": 1
    }
  ],
  "316035006": [
    {
      "action": "Foi realizado reset remoto, em seguida realizado o start do WTG e o mesmo entrou em operação.",
      "occurrences": 8
    },
    {
      "action": "Foi realizado uma inspeção nos plugs das 3 Pitch box e foi identificado que na box 02 e 03 estavam com as conexões de fixação dos cabos nos plug folgados. Foi realizado o aperto dos plug's, realizado testes operacionais e colocado a turbina em operação.",
      "occurrences": 2
    },
    {
      "action": "Devido a falha (Pitch Inner Safety Chain Triggered) no WTG, foi realizado uma inspeção no sistema, onde não foi encontrado nada de anormal. Realizado o reset da falha e colocado o WTG em operação.",
      "occurrences": 1
    }
  ],
  "321001218": [
    {
      "action": "Inspeções realizadas nas conexões do sistema de Pitch, Inspeção no PD802, Verificação das tensões de alimentação, Movimentações na Pá 1 para verificação das tensões, correntes e parâmetros elétricos, Testes operacionais e colocado WTG em operação.",
      "occurrences": 1
    }
  ],
  "316032812": [
    {
      "action": "Devido a falha apresentada no WTG, foi realizado uma inspeção nos conectores do Slipring onde foi identificado um ponto quente que veio a danificar alguns pinos de conexão. Com isso, será necessário realizar a substuição do cabo de conexão do Slipring.",
      "occurrences": 1
    }
  ],
  "330032803": [
    {
      "action": "Foi realizado reset remoto, em seguida realizado o start do WTG e o mesmo entrou em operação.",
      "occurrences": 2
    }
  ],
  "321060064": [
    {
      "action": "Foi realizado reset remoto, em seguida realizado o start do WTG e o mesmo entrou em operação.",
      "occurrences": 3
    },
    {
      "action": "Após falha do WTG, foi realizado uma inspeção na turbina, onde constatmos que um dos dispositivos de bloqueio do rotor (lado direito) estava um pouco atuado. Assim emitindo o sinal de rotor bloqueado. Realizamos o retorno completo da trava, resetamos a falha e colocamos o WTG em operação.",
      "occurrences": 1
    },
    {
      "action": "Realizado inspeção no controle de acionamento manual (Yaw, blades, freio do gerador), Led branco que indica retorno total do bloqueio do rotor não estava acionado, então, foi realizado o retorno total do bloqueio acionando o led. Realizado inspeção no armário top box da nacele. tudo normal. Realizado o reset do WTG e coloca o mesmo em operação.",
      "occurrences": 1
    }
  ],
  "365020201": [
    {
      "action": "Durante a inspeção, foram identificados três IGBT's avariados, que foram substituídos. Durante o processo de substituição, fizemos a limpeza do gabinete que apresentava diversos estilhaços de componentes avariados. Além disso, foi realizada a substituição do fusível (FU7), que apresentou falha. Para realização da atividade de substituição dos IGBT’s, se fez necessário a drenagem do líquido de arrefecimento (Glicol). Após término da substituição, foi realizado a inserção do glicol de volta ao sistema. Também realizamos a limpeza da turbina.",
      "occurrences": 1
    }
  ],
  "306852803": [
    {
      "action": "Foi realizado reset remoto, em seguida realizado o start do WTG e o mesmo entrou em operação.",
      "occurrences": 2
    }
  ],
  "307010702": [
    {
      "action": "Foi realizado reset remoto, em seguida realizado o start do WTG e o mesmo entrou em operação.",
      "occurrences": 6
    },
    {
      "action": "Foi realizada uma avaliação prévia no circuito de acionamento da bomba de óleo da Gearbox. Durante a inspeção, foi identificado que o disjuntor 1401Q2 encontrava-se desarmado. Foram realizados testes nas bobinas do motor e verificação do circuito da caixa de passagem. Constatou-se que o contator de fechamento 1402KM3 estava travado. O componente foi ajustado e retornou ao funcionamento normal. Em seguida, foram realizados testes operacionais do motor em ambas as velocidades, verificando-se o funcionamento adequado.",
      "occurrences": 1
    },
    {
      "action": "Após realizar inspeção no circuito do motor gaerbox, foi identificado situações como: * Realizado inspeção na caixa de alimentação do mogor da gearbox * Realizado inspeção na contactora 1402KM2 * Realizado inspeção no relé 1402K2 * Realizado inspeção no dijuntor 1401Q2 * Realizado inspeção na contactora 1402KM1 (onde encontramos os 2 cabos folgados), realizamos testes operacionais e colocamos o WTG em operação.",
      "occurrences": 1
    }
  ],
  "365040101": [
    {
      "action": "* Foi realizado a Inspeção nos Gabinete da plataforma do conversor. * Foi realizado o teste em todos os Fusíveis. Todos ok * Foi realizado a inspeção no Gabinete do Fosso. * Foi testado todos os Fusíveis. Todos estando ok * Foi realizado a inspeção do Gabinete do Conversor. Foi inspecionado os Fusíveis do conversor. Estando os 3 ok.",
      "occurrences": 1
    },
    {
      "action": "Após análise do conversor, foi verificado que o contato auxiliar que fica no contactor K30 estava mal encaixado, foi realizado o ajuste, foi realizado a inspeção visual detalhada no circuito dos capacitores (C2.1 / C2.3), (C2.4 / C2.6), (C2.7 / C2.9) Todas as conexões estavam ok. Foi verificado as as conexões da placa GPUCM1 se estavam mal conectada. Todas estavam ok. Após ter encontrado apenas o contato auxiliar do contactor K30 folgado, foi realizado o Reset. E colocado a WTG em Operação.",
      "occurrences": 1
    }
  ],
  "365060101": [
    {
      "action": "Foi realizado reset remoto, em seguida realizado o start do WTG e o mesmo entrou em operação.",
      "occurrences": 6
    },
    {
      "action": "Devido a falha no WTG iniciamos uma inspeção para identificar a causa da parada, onde realizamos teste operacionais nos radiadores externo, nos fan do gabinete converter control, teste da bomba de circulação do liquido de resfriamento, onde não identificamos nada de anormal. Em seguida, foi realizado o reset do WTG e colocado em operação.",
      "occurrences": 1
    },
    {
      "action": "Após a falha apresentada no WTG, foi realizado uma inspeção no sistema converter, onde foi checado fusíveis, testes dos fans, sistema de resfriamento e nada de anormal foi encontrado. Realizado o reset da falha e colocado o WTG em operação.",
      "occurrences": 1
    }
  ],
  "306832701": [
    {
      "action": "Após a falha do WTG, foram realizados testes para identificar a causa da falha, onde foi constatado a falha no motor do Fan 1 responsável pela refrigeração internna do gerador. Sendo realizado a substituição do motor, testes operacionais e colcado o WTg em operação.",
      "occurrences": 1
    },
    {
      "action": "Devido a falha foi realizado a inspeção do circuito elétrico, inspeção do motor e teste operacionais, onde não foi encontrado nada de anormal. Realizado o reset do WTG e colocado em operação.",
      "occurrences": 1
    },
    {
      "action": "Devido a falha no WTG, foi realizada a inspeção e testes na contactora e do disjuntor-motor no circuito do fan 1 do gerador. Também incluindo avaliações mecânicas e elétricas do próprio fan do gerador. Constatou-se que todos os componentes estavam operando normalmente. Em seguida, foram realizados testes operacionais, e o WTG foi colocado em operação.",
      "occurrences": 1
    }
  ],
  "365040201": [
    {
      "action": "Realizado intervenção no WTG para identificar falhar ocorrida no converter. Realizado check de IGBT, fusíveis, placas eletrnicas, capacitores, onde foi identificado que um relé estava apresentando mal funcionamento. Realizado a correção do relé e colocado o WTG em operação.",
      "occurrences": 1
    }
  ],
  "304282722": [
    {
      "action": "Foi realizado reset remoto, em seguida realizado o start do WTG e o mesmo entrou em operação.",
      "occurrences": 5
    },
    {
      "action": "De acordo com a falha apresentada no WTG, foi realizada uma inspeção no sistema de freio de liberação do Yaw. Durante a intervenção, foram efetuados testes de operação nos relés 1005K1 e 1005K2. Observou-se a possibilidade de que os relés não estivessem operando normalmente, considerando que a contactora 1005KM1 foi testada e encontrada em condições adequadas de funcionamento. Diante disso, realizou-se o swapped entre os seguintes relés: 1005K1 - 903K2 1005K2 - 903K1 Após a troca, foram executados novos testes operacionais e, com tudo em conformidade, o WTG foi colocado em operação.",
      "occurrences": 1
    },
    {
      "action": "Devido a falha apresentada no WTG, foi realizado novamente uma inspeção no circuito do contatactor (10005km1) e identificado a necesidade de substituição do contactor.",
      "occurrences": 1
    }
  ],
  "365160701": [
    {
      "action": "Foi realizado reset remoto, em seguida realizado o start do WTG e o mesmo entrou em operação.",
      "occurrences": 1
    }
  ],
  "365160601": [
    {
      "action": "Após normalização do GRID, foi realizado reset remoto, em seguida realizado o start do WTG e o mesmo entrou em operação.",
      "occurrences": 2
    }
  ],
  "304282720": [
    {
      "action": "Foi realizado reset remoto, em seguida realizado o start do WTG e o mesmo entrou em operação.",
      "occurrences": 2
    }
  ],
  "365190131": [
    {
      "action": "Foi realizado reset remoto, em seguida realizado o start do WTG e o mesmo entrou em operação.",
      "occurrences": 1
    }
  ],
  "321011218": [
    {
      "action": "Foi Realizado uma inspeção visual nas fichas de entrada das boxes do pitch, onde foi constatado que alguns PG estavam folgados. com isso, foi feito o aperto nos mesmos, feito teste operacionais colocado o WTG em operação.",
      "occurrences": 2
    },
    {
      "action": "Foi realizado reset remoto, em seguida realizado o start do WTG e o mesmo entrou em operação.",
      "occurrences": 1
    }
  ],
  "321001002": [
    {
      "action": "Ao chegar na WTG, foi verificado na webpage que a tensão “PITCH DC VOLTAGE” da blade 01 encontrava-se zerada. Após acesso ao hub e inspeção das boxes referentes à pá 01, foram realizadas medições de tensão DC, as quais apresentaram valores dentro da normalidade. No entanto, o visor do Pitch Drive indicava condição de falha. Foi realizado o reset das boxes, restabelecendo o funcionamento normal do Pitch Drive. Falha sanada e WTG retornada à operação normal.",
      "occurrences": 1
    }
  ],
  "365040301": [
    {
      "action": "Foi realizado reset remoto, em seguida realizado o start do WTG e o mesmo entrou em operação.",
      "occurrences": 1
    },
    {
      "action": "O WTG apresentou falha no sistema dos capacitores, com isso, foi feito novas inspeções no sistema, onde foi encontrado um conector do TC13 com um mal contato. Foi reposicionado e assim, a falha foi sanada.",
      "occurrences": 1
    }
  ]
};
