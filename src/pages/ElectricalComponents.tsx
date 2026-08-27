import { useState } from "react";
import { Search } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

interface ElectricalComponent {
  id: string;
  category: string;
  name: string;
  description: string;
  principle: string;
  symbol: string;
  specs: string[];
  application: string;
}

const components: ElectricalComponent[] = [
  {
    id: "main-switch",
    category: "Chaveamento",
    name: "Chave Principal e Luzes Indicadoras",
    description: "Botões luminosos, botões cogumelo com trava, chaves seletoras (curta/longa), chave tipo código e luzes indicadoras de status.",
    principle: "Contatos NO (normalmente aberto) e NC (normalmente fechado) acionados mecanicamente. Indicadores exibem status de falha, pronto, operação e conexão à rede.",
    symbol: "NO / NC / Cogumelo / Seletor / Indicador",
    specs: ["Botão de parada de emergência (cogumelo com trava)", "Indicador de falha / pronto / operação / grid", "Controles: yaw, pitch, freio de serviço, rotor lock"],
    application: "Painel de controle principal na base da torre – interface operador/técnico",
  },
  {
    id: "terminals",
    category: "Conexão",
    name: "Terminais de Fiação",
    description: "Blocos de terminais para conexão organizada de cabos de controle e potência dentro dos gabinetes elétricos.",
    principle: "Conexão mecânica por parafuso ou mola que garante contato elétrico seguro entre condutores.",
    symbol: "Barra / Bloco de terminais",
    specs: ["Terminais de passagem", "Terminais de terra (PE)", "Terminais fusíveis"],
    application: "Todos os gabinetes de controle, distribuição e potência da turbina",
  },
  {
    id: "contactor",
    category: "Chaveamento",
    name: "Contator",
    description: "Dispositivo eletromecânico para chaveamento de cargas de potência (motores, aquecedores, bombas). Marcas utilizadas: Schneider TeSys, ABB A-series.",
    principle: "Quando a bobina é energizada, a armadura é atraída, fechando os 3 pares de contatos principais. Quando a bobina é desenergizada, a mola de retorno libera a armadura e os contatos abrem. Contatos auxiliares NO/NC controlam circuitos de sinalização.",
    symbol: "KM (bobina) / KM (contato principal) / KM (NO) / KM (NC)",
    specs: ["Bobina: AC 380/220/110/24V ou DC 24V", "Contatos principais: liga com >85% prata", "Contatos auxiliares: NO e NC adicionais (1-2)"],
    application: "Gabinete de resfriamento por água, acionamento de motores yaw, bomba hidráulica",
  },
  {
    id: "relay",
    category: "Controle",
    name: "Relé Intermediário",
    description: "Relé eletromagnético usado para amplificação de sinal, isolamento de circuitos e expansão de contatos em circuitos de controle.",
    principle: "Quando a bobina recebe energia, a armadura é atraída e os contatos fecham/abrem, conectando/desconectando circuitos. A mola de retorno restaura a posição quando a bobina é desenergizada.",
    symbol: "K (bobina) / K (contatos)",
    specs: ["Múltiplos contatos NO e NC", "Tensões: 24VDC, 110/220VAC", "Corrente de contato: 5-10A típico"],
    application: "Circuitos de intertravamento, sinalização, expansão de I/O do CLP",
  },
  {
    id: "thermal-relay",
    category: "Proteção",
    name: "Relé Térmico",
    description: "Dispositivo de proteção contra sobrecarga por aquecimento excessivo de motores e equipamentos.",
    principle: "Lâmina bimetálica aquece com a corrente. Ao atingir o limite ajustado, a deformação da lâmina aciona o mecanismo de disparo, abrindo o contato NC do circuito de controle.",
    symbol: "FR (contato térmico)",
    specs: ["Ajuste de corrente via parafuso", "Classe de disparo configurável", "Reset manual ou automático"],
    application: "Proteção dos motores de yaw, bomba hidráulica, bomba de resfriamento",
  },
  {
    id: "time-relay",
    category: "Controle",
    name: "Relé de Tempo (Temporizador)",
    description: "Relé com função de temporização para atraso na energização ou desenergização de circuitos.",
    principle: "Utiliza mecanismo eletrônico ou pneumático para gerar atraso programável. Inclui pistão, mola e micro switch para acionamento temporizado.",
    symbol: "KT (com retardo na energização / desenergização)",
    specs: ["Faixas de tempo ajustáveis", "Tipos: on-delay, off-delay", "Contatos temporizado NO/NC"],
    application: "Sequenciamento de partida de motores, temporização de freios, lógica de controle",
  },
  {
    id: "safety-relay",
    category: "Segurança",
    name: "Relé de Segurança",
    description: "Dispositivo certificado para monitoramento de funções de segurança: parada de emergência, portas de segurança, cortinas de luz.",
    principle: "Arquitetura redundante com canais duplos de monitoramento. Verifica consistência dos sinais de entrada e libera saídas de segurança apenas quando todas as condições são satisfeitas. Função de diagnóstico integrada.",
    symbol: "KS (safety relay)",
    specs: ["Entradas redundantes (dual-channel)", "Saídas de segurança com monitoramento", "Reset manual obrigatório", "Conformidade: SIL 3 / Cat. 4 / PLe"],
    application: "Cadeia de segurança principal, monitoramento de parada de emergência, proteção do pitch",
  },
  {
    id: "fuse",
    category: "Proteção",
    name: "Fusível",
    description: "Dispositivo de proteção contra curto-circuito e sobrecorrente por fusão do elemento condutor.",
    principle: "O elemento fusível derrete quando a corrente excede o valor nominal por tempo suficiente, interrompendo o circuito permanentemente até a substituição.",
    symbol: "FU (fusível) / QS (seccionador fusível)",
    specs: ["Tipos: cilíndrico, NH (faca)", "Seccionador fusível: combina isolamento + proteção", "Correntes: 1A a 630A"],
    application: "Proteção de circuitos auxiliares, placa de distribuição do conversor, alimentação do CLP",
  },
  {
    id: "circuit-breaker",
    category: "Proteção",
    name: "Disjuntor",
    description: "Dispositivo de proteção automática contra sobrecorrente e curto-circuito, com capacidade de religamento. Tipos: MCCB (caixa moldada), MCB (miniatura), ACB (ar).",
    principle: "Mecanismo de disparo eletromagnético (curto-circuito) e térmico (sobrecarga). Ao detectar anomalia, abre os contatos principais automaticamente. Pode ser operado manual ou remotamente.",
    symbol: "QF (disjuntor)",
    specs: ["MCB: até 63A, DIN rail", "MCCB: 63A a 1600A", "ACB: até 6300A (frame type)", "Curva de disparo: B, C, D"],
    application: "Disjuntor lado rede do conversor, proteção de circuitos de distribuição, painel BT da MV Station",
  },
  {
    id: "battery-capacitor",
    category: "Armazenamento",
    name: "Bateria e Capacitor",
    description: "Dispositivos de armazenamento de energia elétrica para backup (UPS) e filtragem (capacitores de barramento e filtro).",
    principle: "Baterias: conversão eletroquímica reversível. Capacitores: armazenamento de carga elétrica entre placas condutoras separadas por dielétrico.",
    symbol: "GB (bateria) / C (capacitor)",
    specs: ["UPS: 24VDC para sistemas de controle", "Capacitores de barramento CC do conversor", "Ultracapacitores do pitch: 225V CC"],
    application: "UPS do controle principal, barramento CC do conversor, backup de energia do pitch",
  },
  {
    id: "transformer",
    category: "Conversão",
    name: "Transformador e Reator",
    description: "Transformadores para conversão de tensão e reatores para filtragem de harmônicos e limitação de corrente.",
    principle: "Transformador: indução eletromagnética entre enrolamentos primário e secundário acoplados por núcleo magnético. Reator: indutância para oposição a variações de corrente.",
    symbol: "T (transformador) / L (reator)",
    specs: ["Transformador auxiliar: 400V auxiliar", "Transformador MT: BT→MT (MV Station)", "Reatores: lado máquina e lado rede do conversor"],
    application: "Elevação de tensão na MV Station, filtragem no conversor, alimentação auxiliar",
  },
  {
    id: "ct-pt",
    category: "Medição",
    name: "Transformador de Corrente (TC) e Tensão (TP)",
    description: "Transdutores que reduzem correntes e tensões elevadas para valores mensuráveis por instrumentos de proteção e medição.",
    principle: "TC: transforma corrente elevada em corrente proporcional reduzida (ex: 1000A → 5A). TP: transforma tensão elevada em tensão proporcional reduzida (ex: 900V → 400V).",
    symbol: "TA (TC) / TV (TP)",
    specs: ["TC: secundário 5A ou 1A", "TP: 900V → 400V no conversor", "Classe de precisão: 0.5 / 1.0"],
    application: "Medição de potência do conversor, proteção na MV Station, transdutor de medição do controle principal",
  },
  {
    id: "limit-switch",
    category: "Sensores",
    name: "Chave de Fim de Curso",
    description: "Sensor mecânico que detecta posição ou presença de um objeto por contato físico.",
    principle: "Atuador mecânico (alavanca, rolete, êmbolo) aciona contatos NO/NC quando um objeto atinge o ponto de limite.",
    symbol: "SQ (chave fim de curso)",
    specs: ["Tipos: alavanca, rolete, êmbolo", "Contatos: NO + NC", "IP65 ou superior"],
    application: "Detecção de posição de yaw (cabo torcido), portas de gabinetes, fins de curso mecânicos",
  },
  {
    id: "power-supply",
    category: "Alimentação",
    name: "Fonte de Alimentação Chaveada",
    description: "Converte tensão AC da rede em tensão DC regulada para alimentação dos sistemas de controle e instrumentação.",
    principle: "Retificação AC→DC, chaveamento em alta frequência, transformação, retificação e regulação de saída. Alta eficiência e tamanho compacto.",
    symbol: "PS (fonte)",
    specs: ["Entrada: 85-264 VAC", "Saída: 24VDC típico", "Proteções: OVP, OCP, SCP"],
    application: "Alimentação do CLP Beckhoff, sensores, relés, sistema de comunicação",
  },
  {
    id: "spd",
    category: "Proteção",
    name: "Dispositivo de Proteção contra Surtos (DPS/SPD)",
    description: "Protege equipamentos contra sobretensões transitórias causadas por descargas atmosféricas ou chaveamentos.",
    principle: "Varistores (MOV) ou centelhadores desviam a corrente de surto para o terra quando a tensão excede o limiar, protegendo os equipamentos a jusante.",
    symbol: "F (SPD)",
    specs: ["Classes: I, II, III (conforme IEC 61643)", "Indicador visual de status", "Módulos substituíveis"],
    application: "Entrada do conversor (lado máquina e rede), gabinete de controle principal, MV Station",
  },
  {
    id: "temp-humidity",
    category: "Sensores",
    name: "Sensor de Temperatura e Umidade",
    description: "Sensores para monitoramento ambiental dentro da nacele, gabinetes e ambiente externo.",
    principle: "PT100/PT1000: variação de resistência com temperatura. Sensores de umidade: variação de capacitância com umidade relativa.",
    symbol: "TE (temperatura) / ME (umidade)",
    specs: ["PT100: -50°C a +250°C", "Precisão: ±0.3°C", "Umidade: 0-100% RH"],
    application: "Monitoramento de temperatura da gearbox, gerador, conversor, ambiente da nacele e exterior",
  },
  {
    id: "energy-meter",
    category: "Medição",
    name: "Medidor de Energia",
    description: "Instrumento para medição e registro de energia elétrica gerada e consumida pela turbina.",
    principle: "Amostragem digital de tensão e corrente para cálculo de potência ativa, reativa, fator de potência e energia acumulada.",
    symbol: "PJ (medidor)",
    specs: ["Medição trifásica", "Classe de precisão: 0.5s ou 1.0", "Comunicação: RS485/Modbus"],
    application: "Medição de produção na MV Station, controle de faturamento, SCADA",
  },
  {
    id: "sensors",
    category: "Sensores",
    name: "Sensores (Proximidade, Velocidade, Posição)",
    description: "Conjunto de sensores para medição de velocidade do rotor/gerador, posição da nacele, aceleração e detecção de presença.",
    principle: "Sensores indutivos: detectam objetos metálicos por variação de campo magnético. Encoders: pulsos proporcionais à velocidade. Acelerômetros: medição de vibração por efeito piezoelétrico.",
    symbol: "BQ (proximidade) / BR (encoder) / BA (aceleração)",
    specs: ["Chaves de proximidade: velocidade do rotor e gerador", "Encoder: posição de yaw", "Acelerômetro: vibração da nacele", "LiDAR: folga da torre"],
    application: "Controle de velocidade, proteção contra sobrerotação, detecção de vibração, medição de vento",
  },
];

const categories = [...new Set(components.map((c) => c.category))];

export default function ElectricalComponents() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered = components.filter((c) => {
    const matchesSearch =
      !search ||
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.description.toLowerCase().includes(search.toLowerCase()) ||
      c.category.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = !selectedCategory || c.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold">Componentes Elétricos</h2>
        <p className="text-sm text-muted-foreground">
          Referência técnica dos componentes elétricos utilizados no aerogerador GWH171-6.0MW
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 items-center">
        <div className="relative flex-1 min-w-[200px] max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar componente..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9 h-9"
          />
        </div>
        <div className="flex flex-wrap gap-1.5">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
              !selectedCategory ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-accent"
            }`}
          >
            Todos ({components.length})
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(selectedCategory === cat ? null : cat)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                selectedCategory === cat ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-accent"
              }`}
            >
              {cat} ({components.filter((c) => c.category === cat).length})
            </button>
          ))}
        </div>
      </div>

      {/* Component Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((comp) => {
          const isExpanded = expandedId === comp.id;
          return (
            <Card
              key={comp.id}
              className={`cursor-pointer transition-all hover:shadow-md ${isExpanded ? "ring-1 ring-primary" : ""}`}
              onClick={() => setExpandedId(isExpanded ? null : comp.id)}
            >
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <Badge variant="outline" className="text-[10px] mb-2">{comp.category}</Badge>
                    <CardTitle className="text-sm">{comp.name}</CardTitle>
                  </div>
                  <span className="text-[10px] font-mono text-muted-foreground bg-muted px-2 py-1 rounded shrink-0">
                    {comp.symbol}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-xs text-muted-foreground">{comp.description}</p>

                {isExpanded && (
                  <div className="space-y-4 pt-2 border-t border-border">
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium mb-1">Princípio de Funcionamento</p>
                      <p className="text-xs">{comp.principle}</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium mb-1">Especificações</p>
                      <ul className="space-y-1">
                        {comp.specs.map((s, i) => (
                          <li key={i} className="text-xs flex items-start gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium mb-1">Aplicação no WTG</p>
                      <p className="text-xs text-accent-foreground bg-accent/30 rounded-lg p-2">{comp.application}</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          <p className="text-sm">Nenhum componente encontrado para "{search}"</p>
        </div>
      )}
    </div>
  );
}
