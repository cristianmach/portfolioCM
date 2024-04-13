interface ContainerProps {
    children: React.ReactNode
}

const ContainerPage = (props: ContainerProps) => {
    const {children} = props
    return (
        <div className="w-full max-w-6xl px-4 mx-auto mt-64 md:pb-0 md:px-6">
            {children}
        </div>
    )
}

export default ContainerPage