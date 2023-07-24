import { defineStore } from "pinia"
import MobilityService from '../services/MobilityService'

export const useMobilityStore = defineStore('mobility', {
    state: () => ({
        mobilities: [],
        lastPage: null,
        currentPage: null
    }),
    getters: {},
    actions: {
        async getMobility(query) {
            try {
                let {data} = await MobilityService.getMobility(query)
                this.lastPage = data?.result?.lastPage
                this.mobilities = this.mobilities.concat(data?.result?.itemInfoList);
            } catch (error) {
                console.error(error)
            }
        },
        async getMobilityRandom(query) {
            let remain = 0
            let total = 0
            try {
                let {data} = await MobilityService.getMobility(query)
                this.lastPage = data?.result?.lastPage
                remain = parseInt(query.pageSize) - data?.result?.itemInfoList.length
                console.log(remain)
                this.mobilities = data?.result?.itemInfoList;
                this.currentPage = null
            } catch (error) {
                console.error(error)
            }
            
            // while(remain > 0) {
                // try {
                //     // query.pageSize = remain
                //     let {data} = await MobilityService.getMobility(query)
                //     remain = parseInt(query.pageSize) - data?.result?.itemInfoList.length
                //     this.lastPage = data?.result?.lastPage
                //     this.mobilities = this.mobilities.concat((data?.result?.itemInfoList).slice(0, remain));
                // } catch (error) {
                //     console.error(error)
                // }
            // }
            if (remain > 0) {
                query.page = 1
                try {
                    // query.pageSize = remain
                    let {data} = await MobilityService.getMobility(query)
                    this.lastPage = data?.result?.lastPage
                    this.mobilities = this.mobilities.concat((data?.result?.itemInfoList).slice(0, remain));
                    this.currentPage = 1
                } catch (error) {
                    console.error(error)
                }
            }

            // while(total < parseInt(query.pageSize) && query.page === this.lastPage) {
            //     query.page = 1
            //     try {
            //         let {data} = await MobilityService.getMobility(query)
            //         total = total + data?.result?.itemInfoList.length
            //         remain = parseInt(query.pageSize) - total
            //         console.log(total)
            //         this.lastPage = data?.result?.lastPage
            //         this.mobilities = this.mobilities.concat((data?.result?.itemInfoList));
            //     } catch (error) {
            //         console.error(error)
            //     }
            //     if (total > parseInt(query.pageSize)) {
            //         break;
            //     }
            // }

            if (this.mobilities.length > query.pageSize) {
                this.mobilities = this.mobilities.slice(0, query.pageSize)
            }
        },

        async getMobilityRandomLoad(query) {
            let remain = 0
            let total = 0
            try {
                let {data} = await MobilityService.getMobility(query)
                this.lastPage = data?.result?.lastPage
                remain = parseInt(query.pageSize) - data?.result?.itemInfoList.length
                total = data?.result?.itemInfoList.length
                this.mobilities = data?.result?.itemInfoList;
                this.currentPage = null
            } catch (error) {
                console.error(error)
            }
            
            while(total < parseInt(query.pageSize)) {
                query.page = 1
                try {
                    let {data} = await MobilityService.getMobility(query)
                    total = total + data?.result?.itemInfoList.length
                    remain = parseInt(query.pageSize) - total
                    this.lastPage = data?.result?.lastPage
                    this.mobilities = this.mobilities.concat((data?.result?.itemInfoList));
                } catch (error) {
                    console.error(error)
                }
                if (total > parseInt(query.pageSize)) {
                    break;
                }
            }

            if (this.mobilities.length > query.pageSize) {
                this.mobilities = this.mobilities.slice(0, query.pageSize)
            }
        }
    }
})