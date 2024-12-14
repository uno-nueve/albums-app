import { useEffect, useRef } from "react";

export const useTitle = (newTitle) => {
    const docDefined = typeof document !== "undefined";
    const title = useRef(docDefined ? document.title : null);

    useEffect(() => {
        if (!docDefined) return;

        if (document.title !== newTitle) {
            document.title = newTitle;
        }

        return () => {
            document.title = title.current;
        };
    }, []);
};
