import VkUserGender from "@/types/vk/VkUserGender";
import {computed} from "vue";

class VkUser {
    private _id: number
    private _screen_name: string
    private _first_name: string
    private _last_name: string
    private _sex: number
    private _bdate: string
    private _counters: VkUserCounters
    private _photo_400_orig: string

    constructor(id: number, screen_name: string, first_name: string, last_name: string, sex: number, bdate: string, counters: VkUserCounters, photo_400_orig: string) {
        this._id = id;
        this._screen_name = screen_name;
        this._first_name = first_name;
        this._last_name = last_name;
        this._sex = sex;
        this._bdate = bdate;
        this._counters = counters;
        this._photo_400_orig = photo_400_orig;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get screen_name(): string {
        return this._screen_name;
    }

    set screen_name(value: string) {
        this._screen_name = value;
    }

    get first_name(): string {
        return this._first_name;
    }

    set first_name(value: string) {
        this._first_name = value;
    }

    get last_name(): string {
        return this._last_name;
    }

    set last_name(value: string) {
        this._last_name = value;
    }

    get sex(): number {
        return this._sex;
    }

    set sex(value: number) {
        this._sex = value;
    }

    get bdate(): string {
        return this._bdate;
    }

    set bdate(value: string) {
        this._bdate = value;
    }

    get counters(): VkUserCounters {
        return this._counters;
    }

    set counters(value: VkUserCounters) {
        this._counters = value;
    }

    get photo_400_orig(): string {
        return this._photo_400_orig;
    }

    set photo_400_orig(value: string) {
        this._photo_400_orig = value;
    }
}

interface VkUserCounters {
    friends: number
}

export default VkUser