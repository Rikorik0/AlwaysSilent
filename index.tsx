import { Settings } from "@api/Settings";
import { addPreSendListener, removePreSendListener } from "@api/MessageEvents";
import definePlugin from "@utils/types";

export default definePlugin({
    name: "AlwaysSilent",
    description: "Always silent your messages (@silent)",
    authors: [
        {
            id: 687562947790503974n,
            name: "Rikoring",
        },
    ],

    start() {
        this.preSend = addPreSendListener(async (_, message) => {
            if (!message.content) return;

            message.content = "@silent " + message.content;
        });
    },

    stop() {
        removePreSendListener(this.preSend);
    },
});