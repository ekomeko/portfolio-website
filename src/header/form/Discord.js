import axios from "axios";

function Discord() {
    const Send = async (data) => {
            const body = {
                content: "New Message",
                tts: false,
                color: "white",
                embeds: [
                    {
                        title: "New Message",
                        description: data,
                       
                    },    
                    ]


            }


        try {
            const data = await axios.post(
                "https://discord.com/api/webhooks/1075677467269931049/Or8_QYvV2Cy5T9qKZpfZ-iqIVR3iTK3BdnJtrNEcg_F1uzlFm8FfcLGvtoATs49pOiS_",
                body
            )
        console.log(data);
        } catch (error) {   
            console.log(error);
        }
    }
    return {
        Send,
        };
}


export default Discord;