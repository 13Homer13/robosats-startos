import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.8.7:4',
  releaseNotes: {
    en_US:
      'RoboSats now uses less memory over long uptimes. This version requires StartOS 0.4.1 or later.',
    es_ES:
      'RoboSats ahora usa menos memoria cuando lleva mucho tiempo en funcionamiento. Esta versión requiere StartOS 0.4.1 o posterior.',
    de_DE:
      'RoboSats verbraucht bei langer Laufzeit jetzt weniger Arbeitsspeicher. Diese Version erfordert StartOS 0.4.1 oder neuer.',
    pl_PL:
      'RoboSats zużywa teraz mniej pamięci przy długim czasie działania. Ta wersja wymaga StartOS 0.4.1 lub nowszego.',
    fr_FR:
      "RoboSats utilise désormais moins de mémoire lors d'un fonctionnement prolongé. Cette version nécessite StartOS 0.4.1 ou une version ultérieure.",
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
