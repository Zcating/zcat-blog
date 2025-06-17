export namespace HttpClient {
  export async function get<T>(path: string, params?: Record<string, any>) {
    const queryString = params ? new URLSearchParams(params).toString() : "";
    const res = await fetch(`${path}? ${queryString}`);
    return res.json() as Promise<T>;
  }

  export async function post<T>(path: string, body: unknown) {
    const res = await fetch(`${path}`, {
      method: "POST",
      body: JSON.stringify(body),
    });
    return res.json() as Promise<T>;
  }
}
