import axios, { AxiosInstance, AxiosResponse } from "axios"

const axiosInstance: AxiosInstance = axios.create({
    baseURL: "https://crmtest.zzbjr.cn/stage-api",
    headers: {
        "Content-type": "application/json",
        Authorization: "",
    },
})
axiosInstance.interceptors.request.use(config => {
    config.headers!["Authorization"] =
        "Bearer eyJhbGciOiJIUzUxMiJ9.eyJleHAiOjE2NDIxNzYzNTUsInVzZXJJZCI6MX0.HP28DZGXlgyXzgpyvE02-xrurfVBWmcc124NrIupjsD5shVnuXSg3j3uCMXEEupBl-S5sKPh-nqkAWyvW2UE0g"
    return config
})

const Get = (url: string, data?: unknown): Promise<AxiosResponse<any, any>> => {
    return axiosInstance.get(url, {
        params: data,
    })
}
const Post = (
    url: string,
    data?: unknown
): Promise<AxiosResponse<any, any>> => {
    return axiosInstance.post(url, data)
}
export { Get, Post }
