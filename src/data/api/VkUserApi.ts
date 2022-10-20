import VK from "vk-openapi";
import {APP_ID} from "@/data/api/token";
import VkUser from "@/types/vk/VkUser";
import VkCallResult from "@/types/vk/results/VkCallResult";
import VkSearchCallResult from "@/types/vk/results/VkSearchCallResult";

const API_VERSION = "5.131";
const USER_FIELDS = "screen_name,first_name,last_name,sex,counters,bdate,photo_400_orig"

class VkUserApi {
    static {
        VK.init({apiId: APP_ID});
    }

    static async getUser(username: string): Promise<VkUser> {
        const method = "users.get";
        const options = {
            user_ids: username,
            fields: USER_FIELDS,
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

    static async getUsersByIds(ids: Array<string>): Promise<Array<VkUser>> {
        const method = "users.get";
        const options = {
            user_ids: ids.join(","),
            fields: USER_FIELDS,
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

    static async searchUsers(query: string, count: number): Promise<Array<VkUser>> {
        const method = "users.search";
        const options = {
            q: query,
            fields: USER_FIELDS,
            count: count,
            v: API_VERSION,
        }

        return new Promise((resolve, reject) => {
            VK.Api.call(method, options, (result: VkSearchCallResult<VkUser>) => {
                const { response } = result;
                if (response) {
                    resolve(response.items);
                }
            });
        })
    }

    static async getUserWall(user_id: string): Promise<any> {
        const method = "wall.get";
        const options = {
            owner_id: user_id,
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