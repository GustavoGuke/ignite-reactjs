type ContasProps = {
    name?: string
}

export function Contas(props:ContasProps){
    return (
        <h2>{props.name ?? "default"}</h2>
    )
}