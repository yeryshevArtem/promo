import { FC } from "react"
import Spinner from "@/components/common/spinner/Spinner"

interface loadingProps { }

const loading: FC<loadingProps> = ({ }) => {
    return (
        <Spinner />
    )
}

export default loading