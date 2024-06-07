import { type Doc, type APISpaceXResponse } from "../types/api";

export const getLatestLaunches = async () => {
    // Aqui se puede ejecutar el JS que quieras
    const res = await fetch("https://api.spacexdata.com/v5/launches/query", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: {},
            options: {
                sort: {
                    date_unix: "asc",
                },
                limit: 12,
            },
        }),
    });
    const { docs: launches } = (await res.json()) as APISpaceXResponse;
    return launches
}

export const getLaunchBy = async ({ id }: { id: string }) => {
    // Aqui se puede ejecutar el JS que quieras
    const res = await fetch(`https://api.spacexdata.com/v5/launches/${id}`);
    const launch = (await res.json()) as Doc;
    return launch
}


export const getLaunchesIds = async () => {
    const res = await fetch("https://api.spacexdata.com/v5/launches/query", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: {},
            options: {
                sort: {
                    date_unix: "asc",
                },
                limit: 12,
            },
        }),
    });
    const { docs: launches } = (await res.json()) as APISpaceXResponse;
    const ids = launches.map(launch => {
        return { params: { id: launch.id } }
    })
    return ids
}