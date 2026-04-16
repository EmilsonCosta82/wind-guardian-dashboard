import { useState } from "react";
import { CheckCircle2, Circle, AlertTriangle, Zap, Wind, Compass, Droplets, Cpu, Gauge, ClipboardList, Shield, ChevronDown, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface CheckItem {
  text: string;
  critical?: boolean;
}

interface CommissioningPhase {
  id: string;
  title: string;
  icon: React.ElementType;
  description: string;
  status: "info" | "warning" | "success";
  items: CheckItem[];
}

const phases: CommissioningPhase[] = [
  {
    id: "preparation",
    title: "Preparativos para Comissionamento",
    icon: ClipboardList,
    description: "Materiais, pessoal qualificado e preparativos de segurança necessários antes de iniciar o comissionamento.",
    status: "info",
    items: [
      { text: "Ferramentas de comissionamento e software (hopeInsight) disponíveis" },
      { text: "Manual de comissionamento e diagramas elétricos esquemáticos em mãos" },
      { text: "Templates: registro de comissionamento, relatório de teste, lista de aceitação" },
      { text: "Técnicos eletricistas qualificados com NR10 e certificado de trabalho em altura", critical: true },
      { text: "Treinamento Goldwind concluído para instalação e operação de hardware/software", critical: true },
      { text: "Treinamento de segurança para novos funcionários e visitantes" },
      { text: "EPIs verificados: luvas isolantes, capacete, calçados e roupas isolantes" },
      { text: "Banco isolante disponível para operação de chaveamentos da MV Station", critical: true },
      { text: "Procedimento LOTO aplicado com cadeados individuais", critical: true },
      { text: "Contramedidas para emergências documentadas e comunicadas à equipe" },
    ],
  },
  {
    id: "safety",
    title: "Riscos e Prevenção",
    icon: Shield,
    description: "Identificação dos principais riscos durante o comissionamento e medidas preventivas obrigatórias.",
    status: "warning",
    items: [
      { text: "Choque elétrico: usar luvas isolantes durante energização, verificar ausência de tensão antes de substituir componentes", critical: true },
      { text: "Vazamento de líquido: verificar sistema de tubulação (reator, IGBT, tubo hidráulico) antes de abastecer" },
      { text: "Corrosão: usar máscara, luvas e óculos ao manusear líquido de arrefecimento", critical: true },
      { text: "Arranhão: usar fontes de luz visíveis, evitar superfícies escorregadias" },
      { text: "Queda: usar cinto de segurança preso a ponto de ancoragem ao trabalhar em altura", critical: true },
      { text: "Queda de objetos: ferramentas amarradas a ponto de ancoragem antes de usar" },
      { text: "Compressão: cooperar com colega ao mover bomba de água; controlar porta da torre em vento forte" },
    ],
  },
  {
    id: "energization",
    title: "Energização",
    icon: Zap,
    description: "Processo de energização sequencial dos sistemas da turbina: MV Station → Base da torre → Nacele → Hub.",
    status: "info",
    items: [
      { text: "Energizar MV Station: fechar seccionadora RMT, ligar disjuntor BT", critical: true },
      { text: "Energizar gabinetes na base da torre: disjuntor principal do conversor" },
      { text: "Verificar alimentação auxiliar (transformador auxiliar 400V)" },
      { text: "Energizar gabinete de controle principal → verificar LEDs do Beckhoff CX5130" },
      { text: "Energizar gabinete da nacele e verificar sensores de temperatura" },
      { text: "Energizar caixa de medição e controle do Hub" },
      { text: "Confirmar comunicação EtherCAT e PROFIBUS-DP entre todos os nós" },
      { text: "Verificar sequência e segurança antes de prosseguir para testes off-grid", critical: true },
    ],
  },
  {
    id: "maincontrol",
    title: "Comissionamento do Controle Principal",
    icon: Cpu,
    description: "Verificação do CLP Beckhoff, módulos I/O, cadeia de segurança e comunicação com subsistemas.",
    status: "info",
    items: [
      { text: "Verificar status do controlador CX5130 (LEDs de diagnóstico)" },
      { text: "Confirmar mapeamento de variáveis de software nos módulos I/O" },
      { text: "Testar cadeia de segurança – verificar todos os indicadores do relé de segurança (I1-I19)" },
      { text: "Verificar comunicação com sistema de pitch via CANopen" },
      { text: "Verificar comunicação com conversor via PROFIBUS-DP" },
      { text: "Testar HMI web – navegação, exibição de dados, comandos" },
      { text: "Verificar sensores: anemômetro, biruta, velocidade rotor/gerador, aceleração nacele" },
      { text: "Testar botão de parada de emergência em todos os pontos", critical: true },
    ],
  },
  {
    id: "cooling",
    title: "Comissionamento do Sistema de Resfriamento",
    icon: Droplets,
    description: "Verificação do circuito de resfriamento líquido do conversor e gerador.",
    status: "info",
    items: [
      { text: "Verificar nível de líquido de arrefecimento no tanque alto" },
      { text: "Purgar ar do circuito de resfriamento" },
      { text: "Testar bomba de circulação (partida/parada via HMI)" },
      { text: "Verificar ausência de vazamentos em todas as conexões" },
      { text: "Testar radiadores (partida/parada dos ventiladores via HMI)" },
      { text: "Monitorar temperaturas de entrada e saída do conversor" },
    ],
  },
  {
    id: "converter",
    title: "Comissionamento do Conversor",
    icon: Gauge,
    description: "Inspeção dos gabinetes, configuração via hopeInsight, carregamento de barramento e testes de etapa única.",
    status: "info",
    items: [
      { text: "Inspeção visual dos 3 gabinetes: conexões, fusíveis, SPDs, portas fechadas" },
      { text: "Verificar disjuntor lado gerador e lado rede (abertos)" },
      { text: "Iniciar hopeInsight – login com usuário avançado", critical: true },
      { text: "Calibração do relógio do conversor" },
      { text: "Configuração de parâmetros básicos do sistema" },
      { text: "Configuração de parâmetros do gerador" },
      { text: "Debugação de etapa única: carregamento de barramento CC" },
      { text: "Verificar R68.03 bit4 = 1 na configuração de parâmetros" },
      { text: "Correção dos parâmetros de corrente" },
      { text: "Teste de modulação lado rede e manter disjuntor lado rede ligado para estabilidade do barramento" },
    ],
  },
  {
    id: "nacelle",
    title: "Comissionamento da Nacele",
    icon: Compass,
    description: "Testes do sistema hidráulico, yaw, sensores de vento, radiadores e interruptores de segurança.",
    status: "info",
    items: [
      { text: "Sistema hidráulico: verificar nível de óleo, pressão, acumulador" },
      { text: "Testar freio do gerador (posições 6h e 12h) – aplicar e liberar" },
      { text: "Testar pino de travamento do rotor (rotor lock) – inserir e retirar" },
      { text: "Testar sensor de posição do Yaw" },
      { text: "Teste de controle manual do Yaw (esquerda/direita via HMI)" },
      { text: "Verificar anemômetro mecânico e ultrassônico" },
      { text: "Verificar biruta (direção do vento)" },
      { text: "Testar partida e parada dos radiadores via HMI" },
      { text: "Verificar sistema de lubrificação automática" },
      { text: "Teste de simulação no interruptor de fim de curso do cabo de tração", critical: true },
    ],
  },
  {
    id: "pitch",
    title: "Comissionamento do Sistema de Pitch",
    icon: Wind,
    description: "Verificação das 3 caixas de pitch, inversores, motores, ultracapacitores e modos de operação.",
    status: "info",
    items: [
      { text: "Verificar alimentação das 3 caixas de pitch (400V AC)" },
      { text: "Verificar CLP da caixa #1 (status e comunicação CANopen)" },
      { text: "Testar inversor PD802 de cada pá – verificar parâmetros" },
      { text: "Verificar tensão dos ultracapacitores (≈225V CC)" },
      { text: "Testar modo manual: mover cada pá individualmente" },
      { text: "Verificar resolver do motor de pitch (feedback de posição)" },
      { text: "Teste de pitch automático para posição 89.01° (feathering)" },
      { text: "Testar pitch automático das caixas #1, #2 e #3" },
      { text: "Verificar intertravamento: não operar duas pás simultaneamente em manual", critical: true },
      { text: "Teste de emergência: pitch para feathering com ultracapacitor (sem rede)", critical: true },
    ],
  },
];

export default function Commissioning() {
  const [expandedPhases, setExpandedPhases] = useState<string[]>(["preparation"]);
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const togglePhase = (id: string) => {
    setExpandedPhases((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  const toggleItem = (phaseId: string, index: number) => {
    const key = `${phaseId}-${index}`;
    setCheckedItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const getPhaseProgress = (phase: CommissioningPhase) => {
    const total = phase.items.length;
    const checked = phase.items.filter((_, i) => checkedItems[`${phase.id}-${i}`]).length;
    return { checked, total, percent: total > 0 ? (checked / total) * 100 : 0 };
  };

  const totalItems = phases.reduce((acc, p) => acc + p.items.length, 0);
  const totalChecked = Object.values(checkedItems).filter(Boolean).length;
  const overallPercent = totalItems > 0 ? (totalChecked / totalItems) * 100 : 0;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold">Comissionamento</h2>
        <p className="text-sm text-muted-foreground">
          Procedimentos de comissionamento off-grid e on-grid – WTG V11 GWH171-6.0MW
        </p>
      </div>

      {/* Overall Progress */}
      <Card className="glass-card">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Progresso Geral</span>
            <span className="text-sm text-muted-foreground">
              {totalChecked}/{totalItems} itens ({Math.round(overallPercent)}%)
            </span>
          </div>
          <Progress value={overallPercent} className="h-2" />
          <div className="flex gap-4 mt-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1"><Circle className="h-3 w-3" /> Pendente</span>
            <span className="flex items-center gap-1"><CheckCircle2 className="h-3 w-3 text-success" /> Concluído</span>
            <span className="flex items-center gap-1"><AlertTriangle className="h-3 w-3 text-warning" /> Item crítico</span>
          </div>
        </CardContent>
      </Card>

      {/* Phase Cards */}
      <div className="space-y-3">
        {phases.map((phase) => {
          const isExpanded = expandedPhases.includes(phase.id);
          const progress = getPhaseProgress(phase);
          const Icon = phase.icon;

          return (
            <Card key={phase.id} className={`transition-all ${isExpanded ? "ring-1 ring-primary/30" : ""}`}>
              <CardHeader
                className="cursor-pointer pb-3"
                onClick={() => togglePhase(phase.id)}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${
                    progress.percent === 100 ? "bg-success/10" : "bg-primary/10"
                  }`}>
                    <Icon className={`h-5 w-5 ${
                      progress.percent === 100 ? "text-success" : "text-primary"
                    }`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-sm">{phase.title}</CardTitle>
                      <div className="flex items-center gap-2">
                        <Badge variant={progress.percent === 100 ? "default" : "outline"} className="text-[10px]">
                          {progress.checked}/{progress.total}
                        </Badge>
                        {isExpanded ? <ChevronDown className="h-4 w-4 text-muted-foreground" /> : <ChevronRight className="h-4 w-4 text-muted-foreground" />}
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5 truncate">{phase.description}</p>
                    <Progress value={progress.percent} className="h-1 mt-2" />
                  </div>
                </div>
              </CardHeader>

              {isExpanded && (
                <CardContent className="pt-0 space-y-1">
                  {phase.items.map((item, i) => {
                    const key = `${phase.id}-${i}`;
                    const isChecked = !!checkedItems[key];

                    return (
                      <button
                        key={i}
                        onClick={(e) => { e.stopPropagation(); toggleItem(phase.id, i); }}
                        className={`w-full flex items-start gap-3 p-2.5 rounded-lg text-left transition-colors ${
                          isChecked ? "bg-success/5" : item.critical ? "bg-warning/5" : "hover:bg-muted/50"
                        }`}
                      >
                        {isChecked ? (
                          <CheckCircle2 className="h-4 w-4 text-success shrink-0 mt-0.5" />
                        ) : (
                          <Circle className={`h-4 w-4 shrink-0 mt-0.5 ${item.critical ? "text-warning" : "text-muted-foreground"}`} />
                        )}
                        <span className={`text-xs ${isChecked ? "line-through text-muted-foreground" : ""}`}>
                          {item.text}
                        </span>
                        {item.critical && !isChecked && (
                          <Badge variant="outline" className="text-[9px] shrink-0 text-warning border-warning/30">
                            CRÍTICO
                          </Badge>
                        )}
                      </button>
                    );
                  })}
                </CardContent>
              )}
            </Card>
          );
        })}
      </div>
    </div>
  );
}
