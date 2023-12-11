// multa

export interface Multa{
    id?: string; // Identificador único de la multa
    cedulaInfractor: string;
    placaVehiculo: string;
    motivo: string;
    evidenciaFotoUrl: string; // URL de la foto almacenada en Firebase Storage
    comentario: string;
    urlNotaVoz: string; // URL de la nota de voz almacenada en Firebase Storage
    latitud: number;
    longitud: number;
    fecha: Date;
    hora: string;
  }
  