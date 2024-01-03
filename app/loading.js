import { ImSpinner4 } from "react-icons/im";
export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <div className="min-h-screen w-full flex justify-center items-center">
            <div className="text-fuchsia-900 text-5xl animate-spin"><ImSpinner4 /></div>
        </div>
    )

}