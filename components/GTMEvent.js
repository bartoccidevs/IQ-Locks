import { sendGTMEvent } from '@next/third-parties/google';

export default function GTMEvent({ eventName, eventVal }) {
    return sendGTMEvent({ event: eventName, value: eventVal })
}