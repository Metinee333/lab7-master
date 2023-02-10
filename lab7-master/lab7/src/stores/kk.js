import { ref } from "vue";
import { defineStore } from "pinia";

export const kk = defineStore("Yam", () => {
  const Yam = ref([
    {
        Code:"คพ313",
        Name:"พัฒนาโปรเเกรมเว็บ",
        group:"1",
    },
    {
        Code:"คพ343",
        Name:"ออกแบบเชิงวัตถุ",
        group:"1",
    },{
        Code:"คพ252",
        Name:"คณิตศาสตร์สำหรับคอมพิวเตอร์",
        group:"1",
    },{
        Code:"ศท242",
        Name:"Engเชิงวิทย์ 2",
        group:"1",
    },{
        Code:"สต301",
        Name:"หลักสถิติ    ",
        group:"6",
    },{
        Code:"คพ232",
        Name:"สถาปัตยกรรมคอม",
        group:"1",
    },
  ]);


  return { Yam };
});