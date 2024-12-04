import HoveringPhone from "./HoveringPhone"
import HoveringEmail from "./HoveringEmail"

export default function Hoverables({children}) {
    return (
        <div className="fixed h-screen w-screen flex pointer-events-none">
            <HoveringPhone />
            <HoveringEmail />
        </div>
    )
}