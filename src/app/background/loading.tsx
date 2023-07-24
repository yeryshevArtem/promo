import { FC } from "react"
import Spinner from "@/components/spinner/Spinner";

interface loadingProps { }

const loading: FC<loadingProps> = ({ }) => {
    return (
        <Spinner />
    )
}

export default loading