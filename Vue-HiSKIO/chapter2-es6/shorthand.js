// 物件縮寫
function makePoint(x, y) {
  return {
    x, // x: x,
    y, // y: y,
  };
};


// 計算屬性
function createObj(key, value){
    // const obj = {};
    // obj[key]=value;
    const obj = {
        [key+1] : value,
    }
    return obj;
};
const person = createObj('name', 'Jason');
// {
//     name1: 'Jason',
// }
const cat = creatObj('legs', '4');
// {
//     legs1 :4,
// }


// 函式縮寫
const options = {
    name: 'Options',
    level: 10,
    created: function(){

    },
    // 不需要打: function
    mounted(){

    },
    beforeCreate(){
        
    }
};

