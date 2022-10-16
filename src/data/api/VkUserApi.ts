import VK from "vk-openapi";
import {APP_ID} from "@/data/api/token";
import VkUser from "@/types/VkUser";
import VkCallResult from "@/types/VkCallResult";
const API_VERSION = "5.131"

class VkUserApi {
    static {
        VK.init({apiId: APP_ID});
    }

    static async getUser(username: string): Promise<VkUser> {
        const method = "users.get";
        const options = {
            user_ids: username,
            v: API_VERSION,
        }

        return new Promise((resolve, reject) => {
            try {
                VK.Api.call(method, options, (result: VkCallResult<VkUser>) => {
                    const {response} = result;
                    if (response.length > 0) {
                        resolve(response[0]);
                    } else {
                        reject({
                            message: "User not found"
                        })
                    }
                });
            } catch (e) {
                console.log("error");
                reject(e);
            }
        })
    }

    static async getAllUsers(): Promise<Array<VkUser>> {
        const method = "users.get";
        const options = {
            user_ids: "somewell_sg",
            v: API_VERSION,
        }

        return new Promise((resolve, reject) => {
            VK.Api.call(method, options, (result: VkCallResult<VkUser>) => {
                const { response } = result;
                if (response) {
                    resolve(response);
                }
            });
        })
    }

    static async getUserWall(id: string): Promise<any> {
        const method = "wall.get";
        const options = {
            owner_id: id,
            v: API_VERSION,
        }

        return new Promise((resolve, reject) => {
            VK.Api.call(method, options, (result: VkCallResult<VkUser>) => {
                const { response } = result;
                if (response) {
                    resolve(response);
                } else {
                    reject({
                        message: "User not found"
                    })
                }
            });
        })
    }
}

export default VkUserApi