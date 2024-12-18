import { useEffect, useState } from "react";
import { SALES } from "../utils/urls";
import { ListItem } from "./ListItem";
import { useAxios } from "../hooks/useAxios";
import { FlexContainer } from "./ui/FlexContainer";
import { BarsScaleFade } from "react-svg-spinners";

export const List = () => {
    const [data, setData] = useState([]);
    const { handleGet, isLoading, error } = useAxios();

    const getSales = async () => {
        const res = await handleGet(`${SALES}`);
        setData(res);
    };

    useEffect(() => {
        getSales();
    }, []);

    if (isLoading) {
        return (
            <FlexContainer w="100%" h="100%" items="center" justify="center">
                <BarsScaleFade width={"4rem"} height={"auto"} />
            </FlexContainer>
        );
    }

    if (error) {
        return <div>Something went wrong. Please try again</div>;
    }

    return (
        <>
            <ul style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {data?.map((orden) => (
                    <ListItem key={orden._id} order={orden} />
                ))}
            </ul>
        </>
    );
};
