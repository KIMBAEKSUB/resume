import { useCallback, useState } from "react";
import axios, { Method } from "axios";
import { RESULT } from "../const/common/result";

const useHttp = () => {

    const [isLoading, setIsLoading] = useState(false);

    const request = useCallback(() => {

        const executeHttpRequest = async (url: string, method: Method, params: any, body: any) => {

            try {
                setIsLoading(true);
                const { data: result } = await axios({url, method, params, data: body});
                if (result.isError) {
                    return RESULT.ERROR(result.message);
                }
                return RESULT.SUCCESS(result.data, result.message);
            } catch (error) {
                return RESULT.ERROR("The request is failed");
            } finally {
                setIsLoading(false);
            };
        };

        const get = async (url: string, params: any = null) => {
            return await executeHttpRequest(url, "GET", params, null);
        };

        const post = async (url: string, data: any = null) => {
            return await executeHttpRequest(url, "POST", null, data);
        };

        const del = async (url: string, params: any = null) => {
            return await executeHttpRequest(url, "DELETE", params, null);
        };

        const put = async (url: string, data: any = null) => {
            return await executeHttpRequest(url, "PUT", null, data);
        };

        return { get, post, delete: del, put }
        
    }, []);

    const http = request();

    return {
        isLoading,
        http
    }
};

export default useHttp