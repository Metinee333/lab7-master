import { ref } from "vue";
import { defineStore } from "pinia";

export const Ad = defineStore("AP", () => {
  const AP = ref([]);
  const Puss = (cd,nm,gp) => {
    const sbj ={
        code:cd,
        name:nm,
        group:gp,
    };
    AP.value.push(sbj);
  };
  const ST = (n) => {
    AP.value.splice(n,1);
  };
  return { AP,Puss,ST};
});