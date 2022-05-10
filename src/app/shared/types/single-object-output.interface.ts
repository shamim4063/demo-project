export interface SingleObjectOutput<T> {
    status?: boolean;
    message?: string;
    data: T;
}
