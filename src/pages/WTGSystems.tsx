import { useState } from "react";
import { Zap, Wind, Compass, Droplets, Cog, Cpu, Building2, ChevronDown, ChevronRight, Info, Wrench, AlertTriangle, Settings } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface SystemSection {
  id: string;
  title: string;
  icon: React.ElementType;
  color: string;
  description: string;
  specs: { label: string; value: string }[];
  components: { name: string; description: string }[];
  maintenance: string[];
  faults?: { fault: string; cause: string; solution: string }[];
}

const systems: SystemSection[] = [
  {
    id: "converter",
    title: "Sistema Conversor",
    icon: Zap,
    color: "text-chart-1",
    description: "Conversor full-scale composto por três gabinetes: gabinete de chaveamento do lado da máquina, gabinete de chaveamento do lado da rede e gabinete de energia (que integra controle do conversor e controle principal). Responsável pela conversão de energia CA do gerador para a rede.",
    specs: [
      { label: "Topologia", value: "Back-to-back, Full-scale" },
      { label: "Gabinetes", value: "3 (Lado Máquina, Lado Rede, Energia)" },
      { label: "Refrigeração", value: "Líquida (Water cooling)" },
      { label: "Software", value: "hopeInsight" },
      { label: "Comunicação", value: "Fibra óptica + CAN" },
    ],
    components: [
      { name: "Interruptor de desconexão do lado do gerador", description: "Isola o conversor do gerador para manutenção segura" },
      { name: "Componentes de absorção RC", description: "Proteção contra surtos de tensão transitórios" },
      { name: "Dispositivo de proteção contra surtos (SPD)", description: "Proteção contra descargas atmosféricas" },
      { name: "Resistor de Chopper", description: "Dissipa energia excedente do barramento CC durante LVRT" },
      { name: "Indutor do lado do gerador", description: "Filtra harmônicos da corrente do lado máquina" },
      { name: "Módulo de potência (IGBT)", description: "Chaveamento de potência – conversão CA/CC/CA" },
      { name: "Capacitor de barramento CC", description: "Armazena energia e estabiliza tensão do barramento CC" },
      { name: "UPS", description: "Alimentação ininterrupta para o sistema de controle" },
      { name: "Disjuntor do lado da rede", description: "Conexão/desconexão segura com a rede elétrica" },
      { name: "Capacitor de filtro", description: "Filtra harmônicos na saída do lado da rede" },
      { name: "Indutor do lado da rede", description: "Filtra harmônicos da corrente injetada na rede" },
    ],
    maintenance: [
      "Verificar conexões elétricas e torque dos terminais a cada 6 meses",
      "Inspecionar sistema de refrigeração por água (entrada/saída marcadas como Inlet/Outlet)",
      "Verificar nível e qualidade do líquido refrigerante",
      "Inspecionar ventiladores de dissipação de calor dos indutores",
      "Verificar estado dos fusíveis da placa de distribuição",
      "Inspecionar SPDs e componentes RC visualmente",
      "Calibrar relógio do conversor via hopeInsight",
    ],
    faults: [
      { fault: "Sobrecorrente lado máquina", cause: "Curto-circuito nos cabos do gerador ou IGBT danificado", solution: "Verificar isolamento dos cabos, inspecionar módulos IGBT, medir resistência de isolamento" },
      { fault: "Sobretensão do barramento CC", cause: "Falha no chopper ou desconexão súbita da rede", solution: "Verificar resistor chopper e circuito de acionamento, inspecionar disjuntor lado rede" },
      { fault: "Sobretemperatura do conversor", cause: "Falha no sistema de refrigeração por água", solution: "Verificar bomba de circulação, nível de líquido refrigerante, limpar radiador" },
      { fault: "Fio neutro do transformador desaterrado", cause: "Conexão de aterramento do transformador da box unit anormal", solution: "Verificar e reconectar o aterramento do neutro do transformador" },
    ],
  },
  {
    id: "pitch",
    title: "Sistema de Pitch",
    icon: Wind,
    color: "text-success",
    description: "Sistema de controle de passo das pás com acionamento elétrico. Cada pá possui motor de pitch, inversor e ultracapacitor independentes. Controlado via CLP dedicado na caixa de pitch #1, comunicação CANopen com o controle principal.",
    specs: [
      { label: "Tipo de acionamento", value: "Elétrico (motor + inversor)" },
      { label: "Caixas de pitch", value: "3 (uma por pá)" },
      { label: "Backup de energia", value: "Ultracapacitor (225V CC)" },
      { label: "CLP", value: "Apenas na caixa #1" },
      { label: "Comunicação", value: "CANopen" },
      { label: "Frenagem", value: "Resistor de frenagem 15kW" },
      { label: "Motor", value: "Sem ventilador, conector aeronáutico, resolver" },
    ],
    components: [
      { name: "Controlador de pitch (CLP)", description: "Controle lógico do sistema, presente apenas na caixa #1" },
      { name: "Inversor de pitch PD802", description: "Aciona o motor de pitch com controle de velocidade e posição" },
      { name: "Motor de pitch", description: "Motor sem ventilador com resolver, conexão com plugue aeronáutico" },
      { name: "Relé de segurança", description: "Monitora cadeia de segurança interna e externa do pitch" },
      { name: "Ultracapacitor", description: "Backup de energia para emergência (feathering) – tensão 225V CC" },
      { name: "Resistor de frenagem", description: "Dissipa energia regenerativa durante frenagem – 15kW" },
      { name: "Reator", description: "Filtragem de harmônicos na entrada de alimentação CA" },
      { name: "Transmissão (engrenagem/correia)", description: "Transfere torque do motor para o rolamento de pitch" },
    ],
    maintenance: [
      "Verificar tensão dos ultracapacitores periodicamente",
      "Inspecionar conexões do conector aeronáutico do motor",
      "Verificar estado do resolver do motor de pitch",
      "Inspecionar cadeia de segurança (interna e externa)",
      "Verificar desgaste de engrenagens e correias dentadas",
      "Lubrificar rolamento de pitch conforme plano de manutenção",
    ],
    faults: [
      { fault: "Falha de comunicação pitch", cause: "Cabo CANopen danificado ou CLP defeituoso", solution: "Verificar cabos de comunicação, reiniciar CLP, verificar terminadores de rede CAN" },
      { fault: "Pitch não atinge posição", cause: "Motor travado, encoder defeituoso ou engrenagem danificada", solution: "Verificar motor, calibrar resolver, inspecionar transmissão mecânica" },
      { fault: "Ultracapacitor com tensão baixa", cause: "Capacitor degradado ou circuito de carga defeituoso", solution: "Medir tensão individual dos módulos, substituir módulos degradados" },
    ],
  },
  {
    id: "yaw",
    title: "Sistema de Yaw",
    icon: Compass,
    color: "text-warning",
    description: "Sistema de orientação da nacele com 8 motorredutores, 4 estágios de engrenagens planetárias, rolamento deslizante e 14 freios passivos. Utiliza anel coletor em vez de sistema de torção de cabos. Motores assíncronos trifásicos 400V, 2.2kW com freio eletromagnético.",
    specs: [
      { label: "Motores", value: "8 × 2.2kW (400V, trifásico)" },
      { label: "Redutores", value: "8 × planetário 4 estágios" },
      { label: "Relação de transmissão", value: "i = 2043,31" },
      { label: "Torque de saída nominal", value: "48.530 N.m" },
      { label: "Torque estático máximo", value: "120.000 N.m" },
      { label: "Freios passivos", value: "14 × 80kN (força de mola)" },
      { label: "Freio eletromagnético", value: "45 N.m ±10%" },
      { label: "Óleo lubrificante", value: "Shell Omala S4 GX 150 / Mobil SHC 150" },
      { label: "Dentes do pinhão", value: "Z1 = 14, módulo m = 20mm" },
    ],
    components: [
      { name: "Motor de Yaw", description: "Motor assíncrono trifásico 2.2kW com freio eletromagnético integrado" },
      { name: "Redutor de Yaw", description: "Caixa planetária 4 estágios, lubrificação por imersão em óleo" },
      { name: "Anel dentado do Yaw", description: "Engrenagem fixa na torre onde os pinhões atuam" },
      { name: "Rolamento deslizante", description: "Suporta nacele com baixa velocidade e alta carga" },
      { name: "Freio passivo (Caliper)", description: "14 unidades com pastilhas de atrito, torque contínuo de frenagem" },
      { name: "Anel coletor", description: "Substitui torção de cabos, permite rotação contínua sem torcimento" },
      { name: "Anemômetro e biruta", description: "Sensores no teto da nacele para medição de velocidade e direção do vento" },
      { name: "Sensor de posição Yaw", description: "Detecta posição angular da nacele em relação à torre" },
    ],
    maintenance: [
      "Verificar nível de óleo dos redutores pelo visor (Shell Omala S4 GX 150)",
      "Inspecionar desgaste das pastilhas dos freios passivos",
      "Verificar folga do anel dentado e pinhões",
      "Lubrificação automática – verificar máquina de graxa e distribuição",
      "Inspecionar estado do anel coletor e escovas",
      "Verificar freio eletromagnético dos motores (gap de trabalho)",
    ],
  },
  {
    id: "hydraulic",
    title: "Sistema Hidráulico",
    icon: Droplets,
    color: "text-info",
    description: "Sistema hidráulico para acionamento dos freios do gerador (posições 6h e 12h) e pinos de travamento do rotor (rotor lock). Estações hidráulicas Hawe (1.5kW, 190bar) ou Hine. Utiliza óleo Shell Tellus VX 32.",
    specs: [
      { label: "Potência do motor", value: "1.5 kW" },
      { label: "Tensão", value: "400 VAC 60Hz / 24VDC controle" },
      { label: "Pressão nominal", value: "190 bar" },
      { label: "Pressão de alívio", value: "225 bar" },
      { label: "Vazão nominal", value: "2.7–4 L/min" },
      { label: "Óleo hidráulico", value: "Shell Tellus VX 32" },
      { label: "Capacidade Hawe", value: "11.1 L" },
      { label: "Capacidade Hine", value: "18 L" },
    ],
    components: [
      { name: "Estação hidráulica (Hawe/Hine)", description: "Unidade motobomba que fornece pressão ao sistema" },
      { name: "Freio do gerador (6h e 12h)", description: "Freio de serviço acionado hidraulicamente" },
      { name: "Pino de travamento do rotor", description: "Trava mecânica do rotor para manutenção" },
      { name: "Válvula solenoide direcional", description: "Controla direção do fluxo de óleo para os atuadores" },
      { name: "Válvula de transbordamento", description: "Mantém pressão constante para segurança" },
      { name: "Válvula de sequência", description: "Controla abertura/fechamento baseado em pressão de óleo" },
      { name: "Acumulador (bexiga)", description: "Armazena energia hidráulica para atuação rápida" },
      { name: "Filtro", description: "Remove partículas do óleo hidráulico" },
    ],
    maintenance: [
      "Verificar nível de óleo hidráulico periodicamente",
      "Inspeção de amostragem de óleo após 4 anos (primeira vez), depois anualmente",
      "Verificar pressão do acumulador (pré-carga de nitrogênio)",
      "Substituir elemento de filtro quando indicador de obstrução ativar",
      "Inspecionar mangueiras e conexões por vazamentos",
      "Verificar vedações dos cilindros dos freios e pinos",
    ],
  },
  {
    id: "drivetrain",
    title: "Trem de Potência e Gerador",
    icon: Cog,
    color: "text-chart-5",
    description: "Sistema de eixo principal com suporte em 2 pontos (TRBs), caixa de engrenagens com relação i=41 e gerador de ímãs permanentes de média velocidade. O eixo principal transmite torque para a gearbox, que acelera a rotação para o gerador.",
    specs: [
      { label: "Suporte do eixo", value: "2 pontos (TRB – rolamentos cônicos)" },
      { label: "Relação da gearbox", value: "i = 41" },
      { label: "Velocidade de entrada", value: "10.3 rpm" },
      { label: "Velocidade de saída", value: "422 rpm" },
      { label: "Tipo de gerador", value: "Ímãs permanentes, média velocidade" },
      { label: "Refrigeração do gerador", value: "Jaqueta de água (water jacket)" },
      { label: "Lubrificação eixo", value: "Manual (graxa)" },
    ],
    components: [
      { name: "Eixo principal", description: "Suporta sistema de transmissão, transmite torque. Suporte 2 pontos com TRBs" },
      { name: "Caixa de engrenagens (Gearbox)", description: "Planetária, relação i=41, aumenta velocidade de rotação" },
      { name: "Conjunto do estator", description: "Estrutura com jaqueta de água, núcleo soldado, placa perfurada traseira" },
      { name: "Conjunto do rotor", description: "Suporte do rotor, caixas de polo magnético, pastilha de freio, tambor conversor" },
      { name: "Sistema de refrigeração", description: "Bomba de água, tanque alto, radiador e tubulações" },
      { name: "Sistema de lubrificação da gearbox", description: "Lubrificação por imersão com filtro e bomba" },
    ],
    maintenance: [
      "Substituir filtro de ar da gearbox a cada 6-12 meses (quando descolorir)",
      "Utilizar óleo lubrificante especificado na etiqueta da gearbox",
      "Verificar vazamento de óleo em flanges, vedações e bujões",
      "Manutenção do sistema de lubrificação (trocar elemento filtrante após aviso de pressão)",
      "Verificar pressão de vácuo do suporte elástico conforme altitude",
      "Limpar dissipador de calor do sistema de resfriamento a água",
    ],
    faults: [
      { fault: "Filtro da gearbox bloqueado", cause: "Elemento filtrante entupido", solution: "Substituir o elemento do filtro" },
      { fault: "Temperatura do óleo da gearbox alta", cause: "Falha na válvula de controle de temperatura, obstrução do resfriamento", solution: "Substituir válvula, limpar filtro e dissipador de calor" },
      { fault: "Nível baixo de óleo na gearbox", cause: "Falta de óleo ou medidor danificado", solution: "Repor nível de óleo, verificar/substituir medidor" },
      { fault: "Tanque de resfriamento nível baixo", cause: "Falta de líquido de arrefecimento", solution: "Adicionar líquido de arrefecimento ao tanque alto" },
      { fault: "Bomba de lubrificação velocidade anormal", cause: "Problema no contator ou fiação", solution: "Verificar conexão e substituir contator" },
    ],
  },
  {
    id: "maincontrol",
    title: "Sistema de Controle Principal",
    icon: Cpu,
    color: "text-primary",
    description: "Cérebro da turbina eólica composto por 20 módulos, responsável por controle lógico, proteção contra falhas, comunicação (EtherCAT/PROFIBUS-DP) e interação homem-máquina. Utiliza controlador Beckhoff CX5130 e relé de segurança programável.",
    specs: [
      { label: "Controlador", value: "Beckhoff CX5130-0125" },
      { label: "Barramento", value: "EtherCAT + PROFIBUS-DP" },
      { label: "Módulos", value: "20 módulos funcionais" },
      { label: "Fibra óptica", value: "Base ↔ Topo da torre" },
      { label: "Cabos internos", value: "DP para demais links" },
    ],
    components: [
      { name: "Controlador mestre (Beckhoff CX5130)", description: "CLP principal com terminais E-bus para I/O digital e analógico" },
      { name: "Relé de segurança programável", description: "Monitora cadeia de segurança com 19+ entradas" },
      { name: "Transdutor de medição", description: "Mede tensão/corrente da rede (900V→400V via PT)" },
      { name: "Sensor de aceleração da nacele", description: "Detecta vibrações e inclinação da nacele" },
      { name: "Sensor de posição da nacele", description: "Determina posição angular via cames e chaves" },
      { name: "Módulo de sobrerotação", description: "Monitoramento independente de velocidade excessiva do rotor" },
      { name: "Gabinete de controle principal", description: "Abriga CLP, módulos I/O, fontes e comunicação" },
      { name: "Gabinete da nacele", description: "Distribuição de energia e controle na nacele" },
      { name: "Caixa de medição do Hub", description: "Sensores e controle no cubo do rotor" },
    ],
    maintenance: [
      "Verificar LEDs de status dos módulos Beckhoff (vermelho = falha)",
      "Inspecionar conexões de fibra óptica entre base e topo da torre",
      "Verificar sensores de temperatura (gabinete, nacele, ambiente)",
      "Testar cadeia de segurança – verificar indicadores do relé de segurança",
      "Verificar UPS do sistema de controle (bateria e carga)",
    ],
  },
  {
    id: "mvstation",
    title: "Estação MT (MV Station)",
    icon: Building2,
    color: "text-destructive",
    description: "Subestação pré-fabricada tipo contêiner que transforma energia CA de baixa tensão do WTG em média tensão para conexão à rede. Composta por seccionadora RMT SF6, transformador trifásico imerso em óleo, painel de baixa tensão e relé de proteção.",
    specs: [
      { label: "Isolamento MT", value: "SF6 (seccionadora RMT)" },
      { label: "Transformador", value: "Trifásico, imerso em óleo" },
      { label: "Proteção IP", value: "IP 54" },
      { label: "Relé de proteção", value: "HF-XBJK2000N" },
      { label: "Estrutura", value: "Contêiner em chapa de aço" },
    ],
    components: [
      { name: "Gabinete de Baixa Tensão (BT)", description: "Recebe, controla e distribui energia BT do transformador. Inclui disjuntor a ar e proteções" },
      { name: "Transformador de média tensão", description: "Componente central que eleva a tensão do conversor para conexão à rede" },
      { name: "Seccionadora RMT SF6", description: "Disjuntor seccionador de carga, câmara SF6, manômetro, TC integrado" },
      { name: "Dispositivo de Proteção (Relé)", description: "Monitoramento em tempo real, proteção contra sobrecarga, curto-circuito" },
      { name: "UPS e Bateria", description: "Alimentação de backup para sistemas de controle e proteção" },
      { name: "Transformador auxiliar", description: "Alimentação auxiliar para circuitos de controle" },
    ],
    maintenance: [
      "Verificar pressão de SF6 na seccionadora (manômetro)",
      "Inspecionar nível e temperatura do óleo do transformador",
      "Testar disjuntor a ar do painel BT – contagem de operações",
      "Verificar estado dos fusíveis e chaves seccionadoras",
      "Inspeção visual de terminais e barras de cobre",
      "Verificar aterramento e estado da chave de aterramento",
      "Limpeza de contatos e verificação de torque a cada 5 anos",
    ],
  },
];

export default function WTGSystems() {
  const [expandedSystem, setExpandedSystem] = useState<string | null>("converter");

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold">Sistemas WTG</h2>
        <p className="text-sm text-muted-foreground">
          Referência técnica dos subsistemas do aerogerador GWH171-6.0MW
        </p>
      </div>

      {/* System Grid Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
        {systems.map((sys) => {
          const Icon = sys.icon;
          const isActive = expandedSystem === sys.id;
          return (
            <button
              key={sys.id}
              onClick={() => setExpandedSystem(isActive ? null : sys.id)}
              className={`flex flex-col items-center gap-2 p-4 rounded-xl border transition-all ${
                isActive
                  ? "bg-primary/10 border-primary shadow-sm"
                  : "bg-card border-border hover:bg-accent/50"
              }`}
            >
              <Icon className={`h-6 w-6 ${isActive ? "text-primary" : sys.color}`} />
              <span className={`text-xs font-medium text-center leading-tight ${isActive ? "text-primary" : "text-foreground"}`}>
                {sys.title.replace("Sistema ", "").replace("Trem de Potência e ", "")}
              </span>
            </button>
          );
        })}
      </div>

      {/* Expanded System Detail */}
      {expandedSystem && (() => {
        const sys = systems.find((s) => s.id === expandedSystem);
        if (!sys) return null;
        const Icon = sys.icon;
        return (
          <Card className="glass-card">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className={`p-2.5 rounded-lg bg-primary/10`}>
                  <Icon className={`h-6 w-6 ${sys.color}`} />
                </div>
                <div>
                  <CardTitle className="text-lg">{sys.title}</CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">{sys.description}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="specs" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="specs" className="text-xs"><Settings className="h-3.5 w-3.5 mr-1" />Especificações</TabsTrigger>
                  <TabsTrigger value="components" className="text-xs"><Info className="h-3.5 w-3.5 mr-1" />Componentes</TabsTrigger>
                  <TabsTrigger value="maintenance" className="text-xs"><Wrench className="h-3.5 w-3.5 mr-1" />Manutenção</TabsTrigger>
                  {sys.faults && <TabsTrigger value="faults" className="text-xs"><AlertTriangle className="h-3.5 w-3.5 mr-1" />Falhas</TabsTrigger>}
                </TabsList>

                <TabsContent value="specs" className="mt-4">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {sys.specs.map((spec) => (
                      <div key={spec.label} className="bg-muted/50 rounded-lg p-3">
                        <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">{spec.label}</p>
                        <p className="text-sm font-semibold mt-1">{spec.value}</p>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="components" className="mt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {sys.components.map((comp) => (
                      <div key={comp.name} className="flex gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                        <div className="h-2 w-2 rounded-full bg-primary mt-1.5 shrink-0" />
                        <div>
                          <p className="text-sm font-medium">{comp.name}</p>
                          <p className="text-xs text-muted-foreground mt-0.5">{comp.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="maintenance" className="mt-4">
                  <div className="space-y-2">
                    {sys.maintenance.map((item, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-muted/30">
                        <Badge variant="outline" className="text-[10px] shrink-0 mt-0.5">{i + 1}</Badge>
                        <p className="text-sm">{item}</p>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                {sys.faults && (
                  <TabsContent value="faults" className="mt-4">
                    <div className="space-y-3">
                      {sys.faults.map((f, i) => (
                        <div key={i} className="rounded-lg border border-border p-4 space-y-2">
                          <div className="flex items-center gap-2">
                            <AlertTriangle className="h-4 w-4 text-warning shrink-0" />
                            <p className="text-sm font-semibold">{f.fault}</p>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                            <div className="bg-destructive/5 rounded p-2">
                              <span className="font-medium text-destructive">Causa:</span>
                              <span className="ml-1 text-muted-foreground">{f.cause}</span>
                            </div>
                            <div className="bg-success/5 rounded p-2">
                              <span className="font-medium text-success">Solução:</span>
                              <span className="ml-1 text-muted-foreground">{f.solution}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                )}
              </Tabs>
            </CardContent>
          </Card>
        );
      })()}
    </div>
  );
}
