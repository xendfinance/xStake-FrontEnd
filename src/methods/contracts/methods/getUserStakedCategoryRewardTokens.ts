import abiManager from "abiManager";
import moment from "moment";
import Web3 from "web3";
import createContract from "../contract-creator";

async function GetUserStakedCategoriesRewardTokens(categoryId:any) {
    try {
       
        const stakingContract = await createContract(abiManager.XSTAKING, "0x4150f98C94BA89Ac78eC28131Be6a0c1B41224E2");
      
        const res = await stakingContract.methods.getTokenRewardDetailsByStakingId(categoryId).call();

        return Web3.utils.fromWei(res.toString(), 'ether');
        
    } catch (err :any) {
        console.log(err);
        return {
            status: false,
            message: err.message
        };
    }
}

export default GetUserStakedCategoriesRewardTokens;