export interface PaginatetOutput<T> {
    status?: boolean;
    message?: string;
    count: number;
    data: Array<T>;
}
