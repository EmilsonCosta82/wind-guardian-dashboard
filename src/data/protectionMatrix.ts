export type Severity = "critical" | "high" | "medium" | "low";
export type SystemStatus = "operational" | "warning" | "fault" | "offline";

export interface CorrectiveAction {
  step: number;
  action: string;
  responsible: string;
  timeEstimate: string;
}

export interface FaultEntry {
  id: string;
  subsystem: string;
  subsystemIcon: string;
  component: string;
  faultCode: string;
  faultDescription: string;
  severity: Severity;
  stopLevel: string;
  resetLevel: string;
  systemImpact: string;
  affectedSystems: string[];
  correctiveActions: CorrectiveAction[];
  safetyChainTriggered: boolean;
}

export interface SubsystemSummary {
  name: string;
  icon: string;
  totalFaults: number;
  criticalFaults: number;
  status: SystemStatus;
  components: string[];
}

export const subsystems: SubsystemSummary[] = [
  { name: "Sistema de Pitch", icon: "🔄", totalFaults: 12, criticalFaults: 3, status: "operational", components: ["Pá 1", "Pá 2", "Pá 3", "Controlador de Pitch", "Baterias", "Motor de Pitch", "Encoder"] },
  { name: "Sistema Yaw", icon: "🧭", totalFaults: 8, criticalFaults: 1, status: "warning", components: ["Motor Yaw", "Freio Yaw", "Sensor de Posição", "Sensor de Torção", "Encoder Yaw"] },
  { name: "Caixa de Engrenagens", icon: "⚙️", totalFaults: 15, criticalFaults: 4, status: "operational", components: ["Bomba de Óleo", "Filtro de Óleo", "Aquecedor de Óleo", "Ventilador de Resfriamento", "Sensor de Temperatura", "Sensor de Pressão", "Sensor de Nível"] },
  { name: "Gerador", icon: "⚡", totalFaults: 10, criticalFaults: 2, status: "operational", components: ["Enrolamento Estator", "Enrolamento Rotor", "Sistema de Resfriamento", "Sensor de Temperatura", "Rolamento DE", "Rolamento NDE"] },
  { name: "Conversor", icon: "🔌", totalFaults: 11, criticalFaults: 3, status: "operational", components: ["Conversor #1", "Conversor #2", "Módulo Grid Side", "Módulo Machine Side", "Filtro", "Chopper"] },
  { name: "Cadeia de Segurança", icon: "🛡️", totalFaults: 7, criticalFaults: 5, status: "operational", components: ["E-Stop Nacele", "E-Stop Base Torre", "Sensor Torção Cabo", "Sensor Vibração (SSD)", "Sobrevelocidade Rotor", "Relé Segurança Pitch"] },
  { name: "Sistema Grid/Rede", icon: "🌐", totalFaults: 9, criticalFaults: 2, status: "operational", components: ["Medidor de Energia", "Disjuntor Principal", "Transformador", "Proteção Anti-Islanding", "Monitor de Frequência"] },
  { name: "Sistema Hidráulico", icon: "💧", totalFaults: 6, criticalFaults: 1, status: "operational", components: ["Bomba Hidráulica", "Acumulador", "Freio do Rotor", "Válvulas", "Sensor de Pressão"] },
  { name: "Sensores Meteorológicos", icon: "🌬️", totalFaults: 5, criticalFaults: 0, status: "operational", components: ["Anemômetro #1", "Anemômetro #2", "Biruta #1", "Biruta #2", "Sensor de Temperatura Ambiente"] },
  { name: "UPS / Alimentação", icon: "🔋", totalFaults: 4, criticalFaults: 1, status: "operational", components: ["UPS 24V", "Bateria 24V", "Fonte DC", "Gerador Diesel"] },
  { name: "Lubrificação", icon: "🛢️", totalFaults: 5, criticalFaults: 0, status: "operational", components: ["Bomba Lub. Mancal Principal", "Bomba Lub. Pitch", "Bomba Lub. Yaw", "Sensor de Nível Graxa"] },
  { name: "Monitoramento de Vibração", icon: "📳", totalFaults: 6, criticalFaults: 2, status: "operational", components: ["PCH Sensor X", "PCH Sensor Y", "SSD Switch", "Inclinômetro Nacele", "Acelerômetro Torre"] },
];

export const faultEntries: FaultEntry[] = [
  // PITCH SYSTEM
  {
    id: "PIT-001", subsystem: "Sistema de Pitch", subsystemIcon: "🔄", component: "Motor de Pitch - Pá 1",
    faultCode: "PIT_OVR_TEMP_B1", faultDescription: "Sobretemperatura do motor de pitch da Pá 1",
    severity: "critical", stopLevel: "Nível 2 - Parada Normal", resetLevel: "Reset Manual",
    systemImpact: "Perda de controle de ângulo da Pá 1. Turbina entra em modo de emergência com as 3 pás indo para posição de bandeira via sistema de backup por bateria.",
    affectedSystems: ["Cadeia de Segurança", "Conversor", "Sistema Grid/Rede"],
    correctiveActions: [
      { step: 1, action: "Verificar a temperatura ambiente da nacele e ventilação do compartimento de pitch. Inspecionar obstrução dos dutos de ar.", responsible: "Técnico O&M", timeEstimate: "30 min" },
      { step: 2, action: "Medir a resistência de isolamento do motor de pitch com megôhmetro. Verificar terminais e conexões do motor.", responsible: "Eletricista", timeEstimate: "1h" },
      { step: 3, action: "Substituir o motor de pitch se a resistência de isolamento estiver abaixo de 1MΩ. Realizar teste funcional completo.", responsible: "Equipe Especializada", timeEstimate: "4h" },
    ],
    safetyChainTriggered: false,
  },
  {
    id: "PIT-002", subsystem: "Sistema de Pitch", subsystemIcon: "🔄", component: "Encoder de Pitch - Pá 2",
    faultCode: "PIT_ENC_FAIL_B2", faultDescription: "Falha do encoder de posição da Pá 2",
    severity: "critical", stopLevel: "Nível 1 - Parada de Emergência", resetLevel: "Reset Manual",
    systemImpact: "Impossibilidade de determinar posição angular da Pá 2. Sistema não consegue controlar o pitch corretamente, levando a parada de emergência com acionamento de freio do rotor.",
    affectedSystems: ["Cadeia de Segurança", "Sistema Hidráulico", "Conversor"],
    correctiveActions: [
      { step: 1, action: "Verificar conexão elétrica do encoder. Inspecionar cabo e conector contra umidade e oxidação.", responsible: "Técnico O&M", timeEstimate: "45 min" },
      { step: 2, action: "Realizar calibração do encoder com ferramenta de diagnóstico. Verificar se o problema é de comunicação ou mecânico.", responsible: "Eng. de Controle", timeEstimate: "1.5h" },
      { step: 3, action: "Substituir encoder completo e recalibrar referência angular zero da pá.", responsible: "Equipe Especializada", timeEstimate: "3h" },
    ],
    safetyChainTriggered: true,
  },
  {
    id: "PIT-003", subsystem: "Sistema de Pitch", subsystemIcon: "🔄", component: "Bateria de Pitch - Pá 3",
    faultCode: "PIT_BAT_LOW_B3", faultDescription: "Tensão baixa da bateria de backup do pitch Pá 3",
    severity: "high", stopLevel: "Nível 3 - Alarme", resetLevel: "Auto Reset",
    systemImpact: "Em caso de perda de energia, a Pá 3 não terá backup para ir para posição de bandeira. Compromete a segurança da parada de emergência.",
    affectedSystems: ["Cadeia de Segurança", "UPS / Alimentação"],
    correctiveActions: [
      { step: 1, action: "Medir tensão individual de cada célula do banco de baterias. Verificar balanceamento.", responsible: "Técnico O&M", timeEstimate: "30 min" },
      { step: 2, action: "Realizar ciclo de carga/descarga completo. Verificar carregador de bateria e fusíveis.", responsible: "Eletricista", timeEstimate: "2h" },
      { step: 3, action: "Substituir banco de baterias completo. Registrar data de instalação para controle de vida útil.", responsible: "Equipe Especializada", timeEstimate: "2h" },
    ],
    safetyChainTriggered: false,
  },
  // YAW SYSTEM
  {
    id: "YAW-001", subsystem: "Sistema Yaw", subsystemIcon: "🧭", component: "Sensor de Torção de Cabo",
    faultCode: "YAW_TWIST_TRIP", faultDescription: "Acionamento do sensor de torção de cabos (cable twist)",
    severity: "critical", stopLevel: "Nível 1 - Parada de Emergência", resetLevel: "Reset Manual (local)",
    systemImpact: "Cadeia de segurança interrompida. Turbina para imediatamente. Todos os cabos de potência e controle podem estar comprometidos por excesso de rotação da nacele.",
    affectedSystems: ["Cadeia de Segurança", "Conversor", "Sistema Grid/Rede", "UPS / Alimentação"],
    correctiveActions: [
      { step: 1, action: "Verificar contagem de voltas do yaw no SCADA. Inspecionar fisicamente os cabos na plataforma de torção.", responsible: "Técnico O&M", timeEstimate: "1h" },
      { step: 2, action: "Realizar unwinding manual via interface web. Monitorar condição dos cabos durante o processo.", responsible: "Técnico O&M", timeEstimate: "2h" },
      { step: 3, action: "Inspecionar e substituir cabos danificados. Verificar e recalibrar sensor de torção.", responsible: "Equipe Especializada", timeEstimate: "6h" },
    ],
    safetyChainTriggered: true,
  },
  {
    id: "YAW-002", subsystem: "Sistema Yaw", subsystemIcon: "🧭", component: "Motor Yaw",
    faultCode: "YAW_MOT_OVR_CUR", faultDescription: "Sobrecorrente no motor de yaw",
    severity: "high", stopLevel: "Nível 2 - Parada Normal", resetLevel: "Reset Manual",
    systemImpact: "Yaw não opera. Turbina permanece na última posição angular. Com desalinhamento prolongado, potência gerada diminui e cargas mecânicas aumentam.",
    affectedSystems: ["Gerador", "Caixa de Engrenagens"],
    correctiveActions: [
      { step: 1, action: "Verificar corrente nominal do motor yaw. Inspecionar freio yaw - se travado causa sobrecorrente.", responsible: "Técnico O&M", timeEstimate: "45 min" },
      { step: 2, action: "Medir resistência de isolamento do motor. Verificar condição da caixa redutora do yaw.", responsible: "Eletricista", timeEstimate: "1.5h" },
      { step: 3, action: "Substituir motor yaw ou reparar caixa redutora. Lubrificar engrenagem da coroa de yaw.", responsible: "Equipe Especializada", timeEstimate: "8h" },
    ],
    safetyChainTriggered: false,
  },
  // GEARBOX
  {
    id: "GBX-001", subsystem: "Caixa de Engrenagens", subsystemIcon: "⚙️", component: "Sensor de Temperatura Óleo",
    faultCode: "GBX_OIL_HI_TEMP", faultDescription: "Sobretemperatura do óleo da caixa de engrenagens",
    severity: "high", stopLevel: "Nível 2 - Parada Normal", resetLevel: "Auto Reset (temperatura)",
    systemImpact: "Degradação acelerada do óleo lubrificante. Limitação de potência progressiva. Se persistir, parada da turbina para proteção de engrenagens e rolamentos.",
    affectedSystems: ["Gerador", "Conversor"],
    correctiveActions: [
      { step: 1, action: "Verificar operação dos ventiladores de resfriamento e bombas de circulação de óleo. Inspecionar radiador.", responsible: "Técnico O&M", timeEstimate: "1h" },
      { step: 2, action: "Coletar amostra de óleo para análise laboratorial. Verificar condição do filtro de óleo e nível.", responsible: "Téc. Lubrificação", timeEstimate: "2h" },
      { step: 3, action: "Substituir óleo lubrificante e filtros. Inspecionar sistema de resfriamento completo (radiador, bombas, válvulas).", responsible: "Equipe Especializada", timeEstimate: "6h" },
    ],
    safetyChainTriggered: false,
  },
  {
    id: "GBX-002", subsystem: "Caixa de Engrenagens", subsystemIcon: "⚙️", component: "Bomba de Óleo",
    faultCode: "GBX_OIL_PUMP_FAIL", faultDescription: "Falha da bomba de óleo principal da caixa de engrenagens",
    severity: "critical", stopLevel: "Nível 1 - Parada de Emergência", resetLevel: "Reset Manual",
    systemImpact: "Sem lubrificação forçada. Engrenagens e rolamentos operam sem pressão de óleo adequada, causando desgaste extremo e possível travamento.",
    affectedSystems: ["Gerador", "Sistema Hidráulico"],
    correctiveActions: [
      { step: 1, action: "Verificar alimentação elétrica da bomba (fusíveis, contator, proteção térmica). Verificar nível de óleo.", responsible: "Técnico O&M", timeEstimate: "30 min" },
      { step: 2, action: "Inspecionar bomba mecanicamente. Verificar acoplamento e verificar se há bloqueio por contaminação.", responsible: "Técnico Mecânico", timeEstimate: "2h" },
      { step: 3, action: "Substituir bomba de óleo. Realizar flushing do sistema e trocar filtros antes de reiniciar.", responsible: "Equipe Especializada", timeEstimate: "5h" },
    ],
    safetyChainTriggered: false,
  },
  {
    id: "GBX-003", subsystem: "Caixa de Engrenagens", subsystemIcon: "⚙️", component: "Sensor de Pressão de Óleo",
    faultCode: "GBX_OIL_LOW_PRESS", faultDescription: "Pressão de óleo abaixo do limite na saída da bomba",
    severity: "critical", stopLevel: "Nível 2 - Parada Normal", resetLevel: "Reset Manual",
    systemImpact: "Lubrificação insuficiente nos rolamentos de alta velocidade. Risco de dano permanente ao eixo de alta e engrenagens planetárias.",
    affectedSystems: ["Gerador"],
    correctiveActions: [
      { step: 1, action: "Verificar nível de óleo no cárter. Inspecionar visualmente se há vazamentos nas mangueiras e conexões.", responsible: "Técnico O&M", timeEstimate: "45 min" },
      { step: 2, action: "Calibrar sensor de pressão. Verificar condição do filtro de óleo (pressão diferencial).", responsible: "Instrumentista", timeEstimate: "1.5h" },
      { step: 3, action: "Substituir sensor de pressão ou reparar vazamentos. Completar nível de óleo com produto especificado.", responsible: "Equipe Especializada", timeEstimate: "3h" },
    ],
    safetyChainTriggered: false,
  },
  // GENERATOR
  {
    id: "GEN-001", subsystem: "Gerador", subsystemIcon: "⚡", component: "Enrolamento Estator",
    faultCode: "GEN_WIND_HI_TEMP", faultDescription: "Sobretemperatura do enrolamento do estator do gerador",
    severity: "critical", stopLevel: "Nível 2 - Parada Normal", resetLevel: "Auto Reset (temperatura)",
    systemImpact: "Degradação do isolamento do enrolamento. Limitação de potência ativa para reduzir corrente. Risco de curto-circuito entre espiras se a temperatura exceder 155°C.",
    affectedSystems: ["Conversor", "Sistema Grid/Rede"],
    correctiveActions: [
      { step: 1, action: "Verificar sistema de resfriamento do gerador (ventiladores, radiador água-ar). Inspecionar fluxo de ar.", responsible: "Técnico O&M", timeEstimate: "1h" },
      { step: 2, action: "Medir resistência de isolamento do estator e verificar tendência de temperatura nos últimos dias via SCADA.", responsible: "Eng. Elétrico", timeEstimate: "2h" },
      { step: 3, action: "Limpar sistema de resfriamento. Se degradação de isolamento confirmada, planejar rebobinamento ou troca de gerador.", responsible: "Equipe Especializada", timeEstimate: "8h+" },
    ],
    safetyChainTriggered: false,
  },
  {
    id: "GEN-002", subsystem: "Gerador", subsystemIcon: "⚡", component: "Rolamento DE (Drive End)",
    faultCode: "GEN_BEAR_DE_TEMP", faultDescription: "Sobretemperatura do rolamento lado acionamento do gerador",
    severity: "high", stopLevel: "Nível 2 - Parada Normal", resetLevel: "Auto Reset (temperatura)",
    systemImpact: "Desgaste acelerado do rolamento. Se não tratado, pode levar a travamento do gerador e danos ao eixo. Limitação de potência automática.",
    affectedSystems: ["Caixa de Engrenagens", "Conversor"],
    correctiveActions: [
      { step: 1, action: "Verificar sistema de lubrificação do mancal. Confirmar se a bomba de graxa está operando e o intervalo de lubrificação.", responsible: "Técnico O&M", timeEstimate: "30 min" },
      { step: 2, action: "Analisar dados de vibração do rolamento. Comparar com baseline. Verificar condição da graxa (coloração, consistência).", responsible: "Analista de Vibração", timeEstimate: "2h" },
      { step: 3, action: "Substituir rolamento do gerador. Operação requer guindaste e equipe especializada.", responsible: "Equipe Especializada", timeEstimate: "24h+" },
    ],
    safetyChainTriggered: false,
  },
  // CONVERTER
  {
    id: "CNV-001", subsystem: "Conversor", subsystemIcon: "🔌", component: "Conversor #1 - Módulo IGBT",
    faultCode: "CNV1_IGBT_FAULT", faultDescription: "Falha do módulo IGBT no conversor #1",
    severity: "critical", stopLevel: "Nível 1 - Parada de Emergência", resetLevel: "Reset Manual",
    systemImpact: "Conversor #1 inoperante. Se dual converter, turbina opera com potência limitada (50%). Se single, parada total da produção de energia.",
    affectedSystems: ["Gerador", "Sistema Grid/Rede"],
    correctiveActions: [
      { step: 1, action: "Verificar código de erro detalhado no display do conversor. Resetar e verificar se o erro persiste.", responsible: "Técnico O&M", timeEstimate: "30 min" },
      { step: 2, action: "Inspecionar módulos IGBT visualmente (marcas de queima). Medir resistência de isolamento entre fases.", responsible: "Eng. Elétrico", timeEstimate: "2h" },
      { step: 3, action: "Substituir módulo IGBT defeituoso. Realizar teste de comissionamento completo do conversor.", responsible: "Equipe Fabricante", timeEstimate: "6h" },
    ],
    safetyChainTriggered: false,
  },
  {
    id: "CNV-002", subsystem: "Conversor", subsystemIcon: "🔌", component: "Conversor - Comunicação",
    faultCode: "CNV_COMM_LOSS", faultDescription: "Perda de comunicação entre PLC principal e conversor",
    severity: "high", stopLevel: "Nível 2 - Parada Normal", resetLevel: "Auto Reset",
    systemImpact: "PLC não consegue enviar comandos de torque/potência ao conversor. Turbina para por segurança até comunicação ser restabelecida.",
    affectedSystems: ["Gerador", "Sistema Grid/Rede"],
    correctiveActions: [
      { step: 1, action: "Verificar cabos de comunicação (Ethernet/fibra óptica) entre PLC e conversor. Verificar LEDs de status da rede.", responsible: "Técnico O&M", timeEstimate: "30 min" },
      { step: 2, action: "Reiniciar interface de comunicação do conversor. Verificar configuração IP e parâmetros de rede.", responsible: "Eng. Automação", timeEstimate: "1h" },
      { step: 3, action: "Substituir switch de rede ou cabo de comunicação. Atualizar firmware se necessário.", responsible: "Equipe Especializada", timeEstimate: "3h" },
    ],
    safetyChainTriggered: false,
  },
  // SAFETY CHAIN
  {
    id: "SAF-001", subsystem: "Cadeia de Segurança", subsystemIcon: "🛡️", component: "E-Stop Nacele",
    faultCode: "SAF_ESTOP_NAC", faultDescription: "Botão de emergência da nacele acionado",
    severity: "critical", stopLevel: "Nível 0 - Parada Imediata", resetLevel: "Reset Manual (local)",
    systemImpact: "Cadeia de segurança totalmente interrompida. Todas as pás vão para posição de bandeira. Conversor desliga. Freio do rotor acionado. Turbina completamente desenergizada para produção.",
    affectedSystems: ["Sistema de Pitch", "Conversor", "Sistema Grid/Rede", "Sistema Hidráulico"],
    correctiveActions: [
      { step: 1, action: "Verificar se o acionamento foi intencional (manutenção). Inspecionar o botão fisicamente.", responsible: "Técnico O&M", timeEstimate: "15 min" },
      { step: 2, action: "Desbloquear botão de emergência (girar). Verificar se não há condição insegura na nacele antes do reset.", responsible: "Técnico O&M", timeEstimate: "30 min" },
      { step: 3, action: "Realizar inspeção completa da nacele se acionamento não foi planejado. Documentar no sistema.", responsible: "Supervisor O&M", timeEstimate: "2h" },
    ],
    safetyChainTriggered: true,
  },
  {
    id: "SAF-002", subsystem: "Cadeia de Segurança", subsystemIcon: "🛡️", component: "Sensor de Vibração (SSD)",
    faultCode: "SAF_VIBR_TRIP", faultDescription: "Acionamento do sensor de vibração SSD por excesso de vibração",
    severity: "critical", stopLevel: "Nível 0 - Parada Imediata", resetLevel: "Reset Manual",
    systemImpact: "Indica condição de vibração perigosa na estrutura. Cadeia de segurança interrompida. Possível dano estrutural na torre, nacele ou fundação.",
    affectedSystems: ["Sistema de Pitch", "Conversor", "Caixa de Engrenagens", "Gerador"],
    correctiveActions: [
      { step: 1, action: "Analisar dados de vibração do SCADA antes do trip. Identificar padrão (ressonância, desbalanceamento, falha mecânica).", responsible: "Analista de Vibração", timeEstimate: "2h" },
      { step: 2, action: "Inspecionar visualmente torre, nacele e rotor. Verificar parafusos de fixação e integridade estrutural.", responsible: "Eng. Estrutural", timeEstimate: "4h" },
      { step: 3, action: "Resetar sensor SSD (via web ou localmente). Se falha recorrente, substituir sensor ou investigar causa raiz mecânica.", responsible: "Equipe Especializada", timeEstimate: "6h" },
    ],
    safetyChainTriggered: true,
  },
  {
    id: "SAF-003", subsystem: "Cadeia de Segurança", subsystemIcon: "🛡️", component: "Sobrevelocidade Rotor",
    faultCode: "SAF_OVERSPEED", faultDescription: "Sobrevelocidade do rotor detectada pelo sensor de segurança",
    severity: "critical", stopLevel: "Nível 0 - Parada Imediata", resetLevel: "Reset Manual",
    systemImpact: "Condição extremamente perigosa. Todas as proteções ativas simultaneamente. Pás para bandeira, freio do rotor acionado, cadeia de segurança interrompida. Risco de dano catastrófico se não atuada.",
    affectedSystems: ["Sistema de Pitch", "Conversor", "Caixa de Engrenagens", "Gerador", "Sistema Hidráulico"],
    correctiveActions: [
      { step: 1, action: "NÃO RESETAR IMEDIATAMENTE. Aguardar parada completa do rotor. Verificar velocidade do vento e condições meteorológicas.", responsible: "Supervisor O&M", timeEstimate: "1h" },
      { step: 2, action: "Inspecionar sistema de pitch (posição das pás), sistema de freio, e condição do conversor. Verificar se sobrevelocidade foi real ou falha de sensor.", responsible: "Eng. de Controle", timeEstimate: "3h" },
      { step: 3, action: "Se falha de sensor: calibrar/substituir. Se sobrevelocidade real: inspeção completa de trem de potência antes de reiniciar.", responsible: "Equipe Especializada", timeEstimate: "8h+" },
    ],
    safetyChainTriggered: true,
  },
  // GRID
  {
    id: "GRD-001", subsystem: "Sistema Grid/Rede", subsystemIcon: "🌐", component: "Disjuntor Principal",
    faultCode: "GRD_BREAKER_TRIP", faultDescription: "Abertura inesperada do disjuntor principal",
    severity: "high", stopLevel: "Nível 2 - Parada Normal", resetLevel: "Reset Manual",
    systemImpact: "Turbina desconectada da rede. Sem exportação de energia. Conversor entra em modo standby. Turbina consome energia do grid via circuito auxiliar.",
    affectedSystems: ["Conversor", "Gerador"],
    correctiveActions: [
      { step: 1, action: "Verificar relé de proteção do disjuntor (código do trip). Analisar registro de eventos para correntes de falta.", responsible: "Técnico O&M", timeEstimate: "30 min" },
      { step: 2, action: "Verificar condição do disjuntor (contatos, mecanismo de mola). Testar operação manual.", responsible: "Eletricista", timeEstimate: "1.5h" },
      { step: 3, action: "Se defeito no disjuntor: substituir. Se trip por proteção: investigar causa (curto-circuito, sobrecarga, falta à terra).", responsible: "Equipe Especializada", timeEstimate: "4h" },
    ],
    safetyChainTriggered: false,
  },
  {
    id: "GRD-002", subsystem: "Sistema Grid/Rede", subsystemIcon: "🌐", component: "Monitor de Frequência",
    faultCode: "GRD_FREQ_OUT", faultDescription: "Frequência da rede fora dos limites operacionais (< 47.5Hz ou > 52Hz)",
    severity: "high", stopLevel: "Nível 2 - Parada Normal", resetLevel: "Auto Reset",
    systemImpact: "Turbina desconecta da rede por proteção de frequência. Conformidade com requisitos do ONS/ANEEL. Retorna automaticamente quando frequência normalizar.",
    affectedSystems: ["Conversor"],
    correctiveActions: [
      { step: 1, action: "Verificar frequência atual da rede no medidor de energia. Confirmar se é problema sistêmico (todas as turbinas afetadas).", responsible: "Técnico O&M", timeEstimate: "15 min" },
      { step: 2, action: "Contactar operador do sistema (ONS) se problema persistente. Verificar parâmetros de proteção de frequência.", responsible: "Eng. Elétrico", timeEstimate: "1h" },
      { step: 3, action: "Ajustar setpoints de frequência se requisitado pelo ONS. Verificar calibração do medidor de frequência.", responsible: "Eng. de Proteção", timeEstimate: "2h" },
    ],
    safetyChainTriggered: false,
  },
  // HYDRAULIC
  {
    id: "HYD-001", subsystem: "Sistema Hidráulico", subsystemIcon: "💧", component: "Bomba Hidráulica",
    faultCode: "HYD_PUMP_FAIL", faultDescription: "Falha da bomba hidráulica - pressão não atinge setpoint",
    severity: "high", stopLevel: "Nível 2 - Parada Normal", resetLevel: "Reset Manual",
    systemImpact: "Sem pressão hidráulica para operar freio do rotor. Em emergência, o freio não será acionado. Yaw brake pode não operar corretamente.",
    affectedSystems: ["Sistema Yaw", "Cadeia de Segurança"],
    correctiveActions: [
      { step: 1, action: "Verificar nível do fluido hidráulico no reservatório. Inspecionar mangueiras e conexões contra vazamentos.", responsible: "Técnico O&M", timeEstimate: "30 min" },
      { step: 2, action: "Verificar alimentação elétrica da bomba e condição do motor. Medir pressão com manômetro calibrado.", responsible: "Téc. Hidráulica", timeEstimate: "1.5h" },
      { step: 3, action: "Substituir bomba hidráulica ou reparar válvulas. Purgar ar do sistema e pressurizar.", responsible: "Equipe Especializada", timeEstimate: "4h" },
    ],
    safetyChainTriggered: false,
  },
  // METEOROLOGICAL
  {
    id: "MET-001", subsystem: "Sensores Meteorológicos", subsystemIcon: "🌬️", component: "Anemômetro #1",
    faultCode: "MET_ANEM1_FAIL", faultDescription: "Falha do anemômetro primário - leitura fora de faixa",
    severity: "medium", stopLevel: "Nível 3 - Alarme", resetLevel: "Auto Reset",
    systemImpact: "Sistema chaveia para anemômetro secundário automaticamente. Se ambos falharem, turbina para por impossibilidade de medir velocidade do vento para controle de potência.",
    affectedSystems: ["Conversor"],
    correctiveActions: [
      { step: 1, action: "Verificar sinal do anemômetro no PLC. Comparar leitura com anemômetro #2 e dados da estação meteorológica.", responsible: "Técnico O&M", timeEstimate: "30 min" },
      { step: 2, action: "Inspecionar fisicamente o anemômetro na nacele. Verificar se há gelo, sujeira ou dano mecânico.", responsible: "Técnico O&M", timeEstimate: "1h" },
      { step: 3, action: "Substituir anemômetro. Recalibrar e verificar parâmetros de escala no PLC.", responsible: "Instrumentista", timeEstimate: "2h" },
    ],
    safetyChainTriggered: false,
  },
  // UPS
  {
    id: "UPS-001", subsystem: "UPS / Alimentação", subsystemIcon: "🔋", component: "UPS 24V",
    faultCode: "UPS_24V_FAIL", faultDescription: "Falha do sistema UPS 24V da nacele",
    severity: "critical", stopLevel: "Nível 2 - Parada Normal", resetLevel: "Reset Manual",
    systemImpact: "Sem backup de energia para o sistema de controle. Em caso de queda de energia do grid, PLC perde alimentação e turbina fica sem controle. Pitch depende apenas de bateria própria.",
    affectedSystems: ["Cadeia de Segurança", "Sistema de Pitch"],
    correctiveActions: [
      { step: 1, action: "Verificar LEDs de status do UPS. Verificar tensão de entrada e saída com multímetro.", responsible: "Técnico O&M", timeEstimate: "30 min" },
      { step: 2, action: "Testar baterias do UPS com teste de carga. Verificar condição do carregador e fusíveis.", responsible: "Eletricista", timeEstimate: "1h" },
      { step: 3, action: "Substituir UPS ou baterias. Realizar teste de transferência (simular queda de rede).", responsible: "Equipe Especializada", timeEstimate: "3h" },
    ],
    safetyChainTriggered: false,
  },
  // VIBRATION MONITORING
  {
    id: "VIB-001", subsystem: "Monitoramento de Vibração", subsystemIcon: "📳", component: "PCH Sensor X/Y",
    faultCode: "VIB_PCH_HI_LEVEL", faultDescription: "Nível de vibração acima do limite de alerta no sensor PCH",
    severity: "high", stopLevel: "Nível 3 - Alarme → Nível 2 se persistir", resetLevel: "Auto Reset",
    systemImpact: "Indica possível desbalanceamento do rotor, problema em rolamento ou desalinhamento. Se nível continuar subindo, turbina reduz potência e eventualmente para.",
    affectedSystems: ["Caixa de Engrenagens", "Gerador"],
    correctiveActions: [
      { step: 1, action: "Analisar espectro de vibração no SCADA/CMS. Comparar com baseline e identificar frequências dominantes.", responsible: "Analista de Vibração", timeEstimate: "2h" },
      { step: 2, action: "Correlacionar com velocidade do vento e potência. Verificar se é transitório ou permanente. Inspecionar pás visualmente.", responsible: "Eng. de Confiabilidade", timeEstimate: "3h" },
      { step: 3, action: "Se desbalanceamento de rotor: realizar balanceamento aerodinâmico. Se rolamento: programar substituição.", responsible: "Equipe Especializada", timeEstimate: "8h+" },
    ],
    safetyChainTriggered: false,
  },
  // LUBRICATION
  {
    id: "LUB-001", subsystem: "Lubrificação", subsystemIcon: "🛢️", component: "Bomba Lub. Mancal Principal",
    faultCode: "LUB_MAIN_PUMP_FAIL", faultDescription: "Falha da bomba de lubrificação do mancal principal",
    severity: "high", stopLevel: "Nível 2 - Parada Normal", resetLevel: "Reset Manual",
    systemImpact: "Mancal principal opera sem lubrificação adequada. Desgaste acelerado que pode causar dano irreversível ao rolamento principal, resultando em troca major (crane needed).",
    affectedSystems: ["Gerador", "Caixa de Engrenagens"],
    correctiveActions: [
      { step: 1, action: "Verificar alimentação da bomba (fusível, contator). Verificar nível de graxa no reservatório central.", responsible: "Técnico O&M", timeEstimate: "30 min" },
      { step: 2, action: "Inspecionar bomba mecanicamente. Verificar se mangueiras estão obstruídas ou pinchadas. Testar bomba manualmente.", responsible: "Téc. Lubrificação", timeEstimate: "1.5h" },
      { step: 3, action: "Substituir bomba ou reparar sistema de distribuição de graxa. Verificar pontos de lubrificação com graxa adequada.", responsible: "Equipe Especializada", timeEstimate: "3h" },
    ],
    safetyChainTriggered: false,
  },
];

export const getStats = () => {
  const total = faultEntries.length;
  const critical = faultEntries.filter(f => f.severity === "critical").length;
  const high = faultEntries.filter(f => f.severity === "high").length;
  const medium = faultEntries.filter(f => f.severity === "medium").length;
  const safetyChain = faultEntries.filter(f => f.safetyChainTriggered).length;
  const subsystemCount = new Set(faultEntries.map(f => f.subsystem)).size;
  return { total, critical, high, medium, safetyChain, subsystemCount };
};
