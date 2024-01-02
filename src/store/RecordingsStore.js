import { defineStore } from "pinia";
import recordings from "@/utils/Recordings";

export const useRecordings = defineStore("recordings",{
    state: ()=>{
        return {
            data:recordings
        }
    },

    getters: {
        recordings(state){
            return state.data;
        }
    }
})