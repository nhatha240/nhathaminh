import { defineStore } from "pinia";
import QuestionService from '../services/QuestionService' 

const uniqId = () => {
    const id = String(
        Date.now().toString(32) +
          Math.random().toString(16)
      ).replace(/\./g, '')
    return id;
}
export const useQuestionStore = defineStore('question', {
    state: () => ({
        question: localStorage.getItem('question') ? localStorage.getItem('question') : 0,
        answer: JSON.parse(localStorage.getItem('answer')) ? JSON.parse(localStorage.getItem('answer')) : {},
        item: JSON.parse(localStorage.getItem('item')) ? JSON.parse(localStorage.getItem('item')) : {},
        userInfo: {},
        uuid: localStorage.getItem('uuid') ? localStorage.getItem('uuid') : localStorage.setItem('uuid', uniqId()),
    }),
    getters: {
    },
    actions: {
        setQuestionProcedure(question) {
            this.question = question;
            localStorage.setItem("question", question);
        },
        setAnswerProcedure(answer) {
            this.answer = answer;
            localStorage.setItem("answer", JSON.stringify(answer));
        },
        getQuestionList() {
            return new Promise((resolve, reject) => {
                QuestionService.getQuestionList()
                    .then(({ data }) => {
                        resolve(data);
                    })
                    .catch(({ response }) => reject(response));
            });
        },
        async getItemByAnswer(payload) {
            return new Promise((resolve, reject) => {
                QuestionService.getItemByAnswer(payload)
                    .then(({ data }) => {
                        this.item = data?.result?.mobilityInfo;
                        localStorage.setItem("item", JSON.stringify(this.item))
                        resolve(data);
                    })
                    .catch(({ response }) => reject(response));
            });
        },
        async saveAnswerHistory(payload) {
            return new Promise((resolve, reject) => {
                QuestionService.saveAnswerHistory(payload)
                    .then(({ data }) => {
                        resolve(data);
                    })
                    .catch(({ response }) => reject(response));
            });
        },
        async getUserInfo(payload) {
            try {
                let {data} = await QuestionService.getUserInfo(payload)
                this.userInfo = data?.result?.userInfo ? data?.result?.userInfo : {};
                this.uuid = this.uuid ?  this.uuid : uniqId();
                localStorage.setItem("uuid", this.uuid)
                return data?.result;
            } catch (error) {
                console.error(error)
            }
        },
        async getMobilityDetail(payload) {
            try {
                let {data} = await QuestionService.getMobilityDetail(payload)
                return data?.result;
            } catch (error) {
                console.error(error)
            }
        },
        saveUserAnswer(payload) {
            return new Promise((resolve, reject) => {
                QuestionService.saveUserAnswer(payload)
                    .then(({ data }) => {
                        resolve(data);
                    })
                    .catch(({ response }) => reject(response));
            });
        },
    }
})
