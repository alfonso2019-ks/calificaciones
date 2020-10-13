export interface IAsignatura {
    id: number;
    codigo: string;
    nombre: string;
 }

export interface ICorte{
    items: IItem[];
    definitiva: number;
}

export interface IItem{
    nombre: String;
    porcentaje: number;
    valor: number;
 }
 export interface INota{
    estudiante: String;
    asignatura: IAsignatura;
    cortes: ICorte[];
    definitiva: number;
 }
 