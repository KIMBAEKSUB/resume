import { useRouter } from "next/router";

const usePathHelper = () => {
    
    const router = useRouter();

    const createHelper = () => {

        const isCurrentPath = (path: string) => {
            return router.pathname === path;
        }

        return {
            isCurrentPath,
        }
    }

    const pathHelper = createHelper();

    return pathHelper
}

export default usePathHelper;