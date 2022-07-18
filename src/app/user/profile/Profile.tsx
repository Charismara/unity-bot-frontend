import {useGetProfileQuery} from "../../reducer/backendApi";

export function Profile() {
    const profile = useGetProfileQuery();

    if (!profile.isSuccess) {
        console.log("State: ", profile);
        return (
            <div>
                <span>Loading...</span>
            </div>
        )
    }

    return (<div/>)
}