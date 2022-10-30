import './scss/TokenSales.scss'
import React, { useRef } from 'react'
import soccer from '../../assets/images/part2/soccer.png'
import soccer_square from '../../assets/images/part2/soccer_square.png'
import FIFA from '../../assets/images/part2/FIFA.png'
import { v4 as uuidv4 } from 'uuid'
import { useDispatch, useSelector } from 'react-redux'
import { selectWallet, selectWalletStatus } from '../../features/WalletSlice'
import { freemint, mint } from '../../features/ContractInteraction'
import { alertMsg } from '../../features/MessageSlice'

const TokenSales = () => {
    const walletStatus = useSelector(selectWalletStatus);
    const wallet = useSelector(selectWallet);
    const TokenSalesAPIInput = useRef(null);
    const TokenSalesAPIReferralURL = useRef(null);
    const dispatch = useDispatch();



    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
      });

    const importToken = async()=>{
        if(typeof window.provider !== 'undefined'){
            await window.provider.request({
                method: 'wallet_watchAsset',
                params: {
                type: 'ERC20',
                options: {
                    address: window.contractAddress,
                    symbol: "FIFFA",
                    decimals: 18,
                    image: soccer_square
                },
                },
            });
        }else{
            dispatch(alertMsg("Please connect wallet first"));
        }
    }

    const onFreemint = async()=>{
        const referral = (params.ref === null ? "0x0000000000000000000000000000000000000000" : params.ref);
        if(walletStatus !== 'unconnected'){
            dispatch(alertMsg("Free minting"));
            try{
                await freemint(wallet.address, referral);
                dispatch(alertMsg("Free minted"))
                importToken();
            }catch(e){
                if(e.hasOwnProperty('message')){
                    console.log(e);
                }else{
                    dispatch(alertMsg(e));
                }
            }
            
        }else{
            dispatch(alertMsg("Please connect wallet first"));
        }
    }

    const onMint = async()=>{
        const referral = (params.ref === null ? "0x0000000000000000000000000000000000000000" : params.ref);
        if(walletStatus !== 'unconnected'){
            dispatch(alertMsg("Minting"));
            try{
                await mint(wallet.address, TokenSalesAPIInput.current.value, referral);
                dispatch(alertMsg("Minted"))
                importToken();
            }catch(e){
                if(e.hasOwnProperty('message')){
                    console.log(e);
                }else{
                    dispatch(alertMsg(e));
                }
            }
        }else{
            dispatch(alertMsg("Please connect wallet first"));
        }
    }

    const copyReferralLink = async()=>{
        await navigator.clipboard.writeText(TokenSalesAPIReferralURL.current.value);
        dispatch(alertMsg("Copied"))
    }

    window.contractAddress = '0x554E312954749f5F54a912F7d9E76c89aAba2389';

  return (
    <div className='TokenSales'>
        <div className='TokenSalesContainer'>
            <div className='TokenSalesMobileTitle'>
                FIFA2022<br/>
                WORLD CUP<br/>
                <span style={{color: '#EEC73C'}}>MINT</span> YOUR<br/>
                FIFFA TOKEN!! 
            </div>
            <div className='TokenSalesMobileDescription'>
                Win hundreds and thousands of dollars every day all day long with 24/7 lucky draw, automated and fulfilled by our smart contract. Purchase FIFFA with the minimum qualifying buy amount of $20 equivalent and get automatically enrolled to win the jackpot. Lucky draw is designed to make buying a habit.FIFFA token will be the best way to support your dream team!
            </div>
            <hr className='TokenSalesMobileAPIBuyHR'/>
            <div className='TokenSalesMobileAPIBuy' onClick={()=>{document.getElementById('TokenSalesLaunched').scrollIntoView({'behavior':'smooth'})}}>
                🔥BUY FIFFA
            </div>
            <div className='TokenSalesDescription'>
                <div className='TokenSalesDescriptionTitle' id='TokenSalesDescriptionTitle'>
                    FIFA WORLD CUP 2022’S<br/>
                    <span style={{color: '#EEC73C'}}>TOKEN SALE</span>
                </div>
                <div className='TokenSalesDescriptionContent'>
                    Listing Price: 1 FIFFA = 0.0001 USD<br/>
                    Liquidity will add on the <span className='link' onClick={()=>{window.open(`https://pancakeswap.finance/swap?outputCurrency=${window.contractAddress}&chainId=97`, '_blank')}}>Pancakeswap</span> exchanges at Nov 20, 2022.<br/>
                    <br/>
                    Airdrop & Pre-Sale Ends in
                </div>
                <div className='TokenSalesLaunched' id="TokenSalesLaunched">
                    5d  ：  6h  ：  48m  ：  15s
                </div>
                <div className='TokenSalesAddress'>
                    { window.contractAddress }
                    <div className='TokenSalesImportToken' onClick={()=>{importToken()}}>Import FIFFA token</div>
                </div>
                <div className='TokenSalesDescriptionImg'>
                    <img src={FIFA} alt=""></img>
                    <img src={soccer} className="SoccerImg" alt=""></img>
                </div>
            </div>
            <div className='TokenSalesAPI'>
                <div className='TokenSalesAPIDescription' id="TokenSalesAPIDescription">
                    Buy FIFFA<br/>
                    Buy 0.01 BNB = 1,000,000 FIFA<br/>
                    Buy 1 BNB = 100,000,000 FIFA<br/>
                    Buy 10 BNB = 1,000,000,000 FIFA
                </div>
                <input className='TokenSalesAPIInput' ref={TokenSalesAPIInput} defaultValue="0.5"></input>
                <div className='TokenSalesAPIBuy' onClick={()=>{onMint()}}>
                    🔥BUY FIFFA
                </div>
                <div className='TokenSalesAPIFreemint' onClick={()=>{onFreemint()}}>
                    <span>
                        💰 CLAIM FREE $FIFFA
                    </span>
                </div>
                <div className='TokenSalesAPIReferral'>
                    <div className='TokenSalesAPIReferralSquareMark'></div>
                    <div className='TokenSalesAPIReferralTitle'>
                        GENERATE REFERRAL LINK
                    </div>
                    <input className='TokenSalesAPIReferralURL' ref={TokenSalesAPIReferralURL} value={`${window.location.host}/?ref=${wallet.address !== '' ? wallet.address : '0x0000000000000000000000000000000000000000'}`} disabled></input>
                    <div className='TokenSalesAPIReferralCopy' onClick={()=>{copyReferralLink()}}>
                        COPY LINK
                    </div>
                </div>
            </div>
        </div>
        <div className='TokenSalesProviders'>
            <div className='ProviderImg' key={uuidv4()} onClick={()=>{window.open("https://www.hotbit.io/exchange?symbol=BNB_FIFFA", "_blank")}}>
                <img src={require(`../../assets/images/part2/part2_1.png`)} alt=''></img>
            </div>
            <div className='ProviderImg' key={uuidv4()} onClick={()=>{window.open(`https://pancakeswap.finance/swap?outputCurrency=${window.contractAddress}&chainId=97`,"_blank")}}>
                <img src={require(`../../assets/images/part2/part2_2.png`)} alt='' style={{width: '57%'}}></img>
            </div>
            <div className='ProviderImg' key={uuidv4()} onClick={()=>{window.open("https://www.coinbase.com/price/bnb", "_blank")}}>
                <img src={require(`../../assets/images/part2/part2_3.png`)} alt='' style={{width: '57%'}}></img>
            </div>
            <div className='ProviderImg' key={uuidv4()} onClick={()=>{window.open("https://coinmarketcap.com/currencies/bnb/", "_blank")}}>
                <img src={require(`../../assets/images/part2/part2_4.png`)} alt='' style={{width: '57%'}}></img>
            </div>
            <div className='ProviderImg' key={uuidv4()} onClick={()=>{window.open("https://www.coingecko.com/en/coins/bnb", "_blank")}}>
                <img src={require(`../../assets/images/part2/part2_5.png`)} alt='' style={{width: '57%'}}></img>
            </div>
            <div className='ProviderImg' key={uuidv4()} onClick={()=>{window.open(`https://poocoin.app/tokens/${window.contractAddress}`, "_blank")}}>
                <img src={require(`../../assets/images/part2/part2_6.png`)} alt=''></img>
            </div>
            <div className='ProviderImg' key={uuidv4()} onClick={()=>{window.open(`https://charts.bogged.finance/?c=bsc&t=${window.contractAddress}`, "_blank")}}>
                <img src={require(`../../assets/images/part2/part2_7.png`)} alt=''></img> 
            </div>
        </div>
    </div>
  )
}

export default TokenSales