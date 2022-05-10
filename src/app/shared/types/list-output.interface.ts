export interface ListOutput<T> {
    status?: boolean;
    message?: string;
    data: Array<T>;
}
