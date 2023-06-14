import api from "./api";

export interface CrudExample2 {
    id?: number;
    field1: string;
    field2: string;
    field3: string;
}

export const createItem = async (item: CrudExample2): Promise<CrudExample2> => {
    const response = await api.post<CrudExample2>("/crud-example2", item);
    return response.data;
}

export const getItems = async (): Promise<CrudExample2[]> => {
    const response = await api.get<CrudExample2[]>("/crud-example2");
    return response.data;
}

export const getItemById = async (id: number): Promise<CrudExample2> => {
    const response = await api.get<CrudExample2>(`/crud-example2/${id}`);
    return response.data;
}

export const updateItem = async (item: CrudExample2): Promise<CrudExample2> => {
    const response = await api.put<CrudExample2>(`/crud-example2/${item.id}`, item);
    return response.data;
}

export const deleteItem = async (id: number | undefined): Promise<CrudExample2> => {
    const response = await api.delete<CrudExample2>(`/crud-example2/${id}`);
    return response.data;
}

export const createOrUpdateItem = async (item: CrudExample2): Promise<CrudExample2> => {
    if (!item.id) {
        return await createItem(item);
    } else {
        return await updateItem(item);
    }
}
