export type actionsTypeRegister = firstACType

type firstACType = ReturnType<typeof firstAC>


const firstAC = () => {
    return {
        type: 'firstType'
    } as const
}
