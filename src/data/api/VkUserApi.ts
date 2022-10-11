import VK from "vk-openapi";
import {APP_ID} from "@/data/api/token";

class VkUserApi {
    static async getAllUsers(): Promise<void> {

        VK.init({apiId: APP_ID});

        VK.Api.call('users.get', {user_ids: "somewell_sg", v: "5.131"}, (r: any) => {
            if (r.response) {
                console.log(r.response)
            }
        });
    }
}

export default VkUserApi