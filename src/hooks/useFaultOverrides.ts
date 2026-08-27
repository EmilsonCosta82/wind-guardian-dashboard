import { useCallback, useEffect, useState } from "react";
import { faultEntries, type FaultEntry } from "@/data/protectionMatrix";

const STORAGE_KEY = "wtg-protection-matrix-overrides-v1";

type Overrides = Record<string, Partial<FaultEntry>>;

function readOverrides(): Overrides {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Overrides) : {};
  } catch {
    return {};
  }
}

let cache: Overrides | null = null;
const listeners = new Set<(o: Overrides) => void>();

function getOverrides(): Overrides {
  if (!cache) cache = readOverrides();
  return cache;
}

function setOverrides(next: Overrides) {
  cache = next;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    /* storage full or unavailable */
  }
  listeners.forEach((l) => l(next));
}

export function useFaultOverrides() {
  const [overrides, setLocal] = useState<Overrides>(getOverrides);

  useEffect(() => {
    listeners.add(setLocal);
    return () => {
      listeners.delete(setLocal);
    };
  }, []);

  const applyOverride = useCallback((fault: FaultEntry): FaultEntry => {
    const patch = overrides[String(fault.id)];
    return patch ? { ...fault, ...patch } : fault;
  }, [overrides]);

  const saveFault = useCallback((id: number, patch: Partial<FaultEntry>) => {
    const current = getOverrides();
    setOverrides({ ...current, [String(id)]: { ...current[String(id)], ...patch } });
  }, []);

  const resetFault = useCallback((id: number) => {
    const current = { ...getOverrides() };
    delete current[String(id)];
    setOverrides(current);
  }, []);

  const resetAll = useCallback(() => setOverrides({}), []);

  return {
    overrides,
    editedCount: Object.keys(overrides).length,
    applyOverride,
    saveFault,
    resetFault,
    resetAll,
  };
}

export function getMergedEntries(overrides: Overrides): FaultEntry[] {
  if (Object.keys(overrides).length === 0) return faultEntries;
  return faultEntries.map((f) => {
    const patch = overrides[String(f.id)];
    return patch ? { ...f, ...patch } : f;
  });
}
