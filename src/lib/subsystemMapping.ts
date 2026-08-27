// Maps Protection Matrix subsystem names to WTG Systems page IDs
const subsystemToSystemId: Record<string, string> = {
  "Converter": "converter",
  "Grid Connection": "converter",
  "Pitch System": "pitch",
  "Blades": "pitch",
  "Yaw System": "yaw",
  "Hydraulic System": "hydraulic",
  "Brake System": "hydraulic",
  "Gearbox": "drivetrain",
  "Generator": "drivetrain",
  "Rotor": "drivetrain",
  "General System": "maincontrol",
  "Control Cabinet": "maincontrol",
  "Communication": "maincontrol",
  "SCADA": "maincontrol",
  "Safety Chain": "maincontrol",
  "Speed Monitoring": "maincontrol",
  "Sensors": "maincontrol",
  "Box Transformer": "mvstation",
  "Power Supply": "mvstation",
  "Power Meter": "mvstation",
  "Lightning Protection": "mvstation",
};

export function getSystemIdForSubsystem(subsystem: string): string | null {
  return subsystemToSystemId[subsystem] ?? null;
}

export function getSubsystemsForSystemId(systemId: string): string[] {
  return Object.entries(subsystemToSystemId)
    .filter(([, id]) => id === systemId)
    .map(([sub]) => sub);
}
