export const normalizeError = (error: any) => {
    if (error) {
        if (error === 'Failed to fetch') {
            return "failed to fetch";
        } else {
            if ("status" in error) {
                const errMsg = "error" in error ? error.error : error.data?.error;
                return errMsg;
            } else {
                return error?.message as any
            }
        }
    }
}