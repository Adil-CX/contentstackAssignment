import Contentstack from "contentstack";
const stack = Contentstack.Stack({ "api_key": "bltea89fdfdf93cc1e0", "delivery_token": "csa08a797133940915bc507eb9", "environment": "development" })
const query = stack.ContentType('character').Query();
const getData = async () => {
    return await query
    .toJSON()
    .find()
    .then((res)=>{
        console.log("BE Res",res);
        return res;
    },(err)=>{
        console.log("error",err);
    }
    )
}

let result = await getData();
console.log("Rec result",result);

export default result;