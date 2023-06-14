import api from "./api";

export interface CrudExample1 {
    id?: number;
    field1: string;
    field2: string;
    field3: string;
}

export const createItem = async (item: CrudExample1): Promise<CrudExample1> => {
    const response = await api.post<CrudExample1>("/crud-example1", item);
    return response.data;
}

export const getItems = async (): Promise<CrudExample1[]> => {
    const response = await api.get<CrudExample1[]>("/crud-example1");
    return response.data;
}

export const getItemById = async (id: number): Promise<CrudExample1> => {
    const response = await api.get<CrudExample1>(`/crud-example1/${id}`);
    return response.data;
}

export const updateItem = async (item: CrudExample1): Promise<CrudExample1> => {
    const response = await api.put<CrudExample1>(`/crud-example1/${item.id}`, item);
    return response.data;
}

export const deleteItem = async (id: number | undefined): Promise<CrudExample1> => {
    const response = await api.delete<CrudExample1>(`/crud-example1/${id}`);
    return response.data;
}

export const createOrUpdateItem = async (item: CrudExample1): Promise<CrudExample1> => {
    if (!item.id) {
        return await createItem(item);
    } else {
        return await updateItem(item);
    }
}
