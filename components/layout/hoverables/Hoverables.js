import HoveringPhone from "./HoveringPhone"

export default function Hoverables({children}) {
    return (
        <div className="fixed h-screen w-screen flex pointer-events-none">
            <HoveringPhone />
        </div>
    )
}