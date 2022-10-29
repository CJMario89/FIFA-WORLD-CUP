

const createContract = async()=>{
    const abi = await fetch('/FIFFA_abi.json');
    const abiJson = await abi.json();
    const contract = new window.web3.eth.Contract(abiJson, window.contractAddress)
    return contract;
}

const freemintValue = async()=>{
    const aggregatorV3InterfaceABI = [{ "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "description", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint80", "name": "_roundId", "type": "uint80" }], "name": "getRoundData", "outputs": [{ "internalType": "uint80", "name": "roundId", "type": "uint80" }, { "internalType": "int256", "name": "answer", "type": "int256" }, { "internalType": "uint256", "name": "startedAt", "type": "uint256" }, { "internalType": "uint256", "name": "updatedAt", "type": "uint256" }, { "internalType": "uint80", "name": "answeredInRound", "type": "uint80" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "latestRoundData", "outputs": [{ "internalType": "uint80", "name": "roundId", "type": "uint80" }, { "internalType": "int256", "name": "answer", "type": "int256" }, { "internalType": "uint256", "name": "startedAt", "type": "uint256" }, { "internalType": "uint256", "name": "updatedAt", "type": "uint256" }, { "internalType": "uint80", "name": "answeredInRound", "type": "uint80" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "version", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }]
    const addr = "0x0630521aC362bc7A19a4eE44b57cE72Ea34AD01c"
    const priceFeed = new window.web3.eth.Contract(aggregatorV3InterfaceABI, addr)

    return await priceFeed.methods.latestRoundData().call()
        .then((roundData) => {
            const value = roundData[1] / 2 + 1;
            console.log(value);
            return value;
        })
}

const parseError = async(err)=>{
    const errorJsonString = err.replace("Internal JSON-RPC error.", "");
    const errJson = await JSON.parse(errorJsonString);
    if(errJson.hasOwnProperty("message")){
        return errJson.message;
    }else{
        return errJson;
    }
}


export const mint = async(value, account)=>{
    try{
        try{
            await window.provider.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: window.web3.utils.toHex(97) }]
            });
        }catch(err){
            throw err;
        }
        const wei = window.web3.utils.toWei(value, 'ether');
        const contract = await createContract();
        const estimateGasMint = await contract.methods.mint(account).estimateGas({from: account, to: contract._address, value: wei});
        const resultMint = await contract.methods.mint(account).send({gas: estimateGasMint, from: account, to: contract._address, value: wei});
        return;
    }catch(err){
        if(err.hasOwnProperty('message')){
            if(err.message.includes("invalid address")){
                throw 'invalid address';
            }else if(err.message.includes("transaction underpriced")){
                throw 'Gas fee is not enough';
            }else if(err.message.includes("approve to caller")){
                throw 'approve to caller';
            }else if(err.message.includes("Internal JSON-RPC error.")){
                const message = await parseError(err.message);
                if(message.includes("insufficient funds")){
                    throw "insufficient funds"
                }
                throw message;
            }else{
                throw err.message;
            }
        }else{
            throw "Something when wrong!";
        }
    }
}

export const freemint = async(account)=>{
    try{
        try{
            await window.provider.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: window.web3.utils.toHex(97) }]
            });
        }catch(err){
            throw err;
        }
        const value = await freemintValue()
        const contract = await createContract();

        const estimateGasFreemint = await contract.methods.freemint(account).estimateGas({from: account, to:contract._address, value:value});
        const resultFreemint = await contract.methods.freemint(account).send({gas:estimateGasFreemint, from: account, to:contract._address, value: value});
        return;
    }catch(err){
        if(err.hasOwnProperty('message')){
            if(err.message.includes("invalid address")){
                throw 'invalid address';
            }else if(err.message.includes("transaction underpriced")){
                throw 'Gas fee is not enough';
            }else if(err.message.includes("approve to caller")){
                throw 'approve to caller';
            }else if(err.message.includes("Internal JSON-RPC error.")){
                const message = await parseError(err.message);
                throw message;
            }else{
                throw err.message;
            }
        }else{
            throw "Something when wrong!";
        }
    }
}