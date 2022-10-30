import './scss/WalletConnector.scss';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Web3 from 'web3';
import WalletConnectProvider from '@walletconnect/web3-provider';
import CoinbaseWalletSDK from '@coinbase/wallet-sdk';


import MetamaskSVG from '../../assets/images/metamask.svg'
import CoinbaseSVG from '../../assets/images/coinbase.svg'
import WalletConnectSVG from '../../assets/images/walletconnect.svg'
import { selectWalletStatus, setupWallet } from '../../features/WalletSlice';
import { alertMsg } from '../../features/MessageSlice';


const WalletConnector = (prop) => {
    const { onWalletBackgroundClick, autoConnect, walletBlockClass } = prop;
    const MetamaskIcon = useRef(null);
    const CoinbaseIcon = useRef(null);
    const WalletConnectIcon = useRef(null);

    const [walletHint, setWalletHint] = useState(false);
    const selectedChain = useRef('bsc_testnet');
    const walletHintImg = useRef(null);
    const [walletBlockClassName, setWalletBlockClassName] = useState('walletBlock')

    const walletStatus = useSelector(selectWalletStatus)

    const dispatch = useDispatch();

    const providers = {
        'bsc': "https://hardworking-divine-ensemble.bsc.discover.quiknode.pro/43958efedb5ffdfbb03ed542992a33da7b09a51f/",
        'bsc_testnet': "https://special-young-spree.bsc-testnet.discover.quiknode.pro/1ced5f728c8c04d6f10b2709d9c03606b0e6ae13/"
    }
    const CHAIN_ID = {
        'bsc': 56,
        'bsc_testnet': 97
    }

    let MetamaskExtension = false;
    if(window.ethereum !== undefined){
        MetamaskExtension = window.ethereum.isMetaMask;
    }


    const mobile = window.innerWidth < 768 ? true : false;
    //console.log(mobile)
    //console.log(window.innerWidth)

    

    const connectMetamask = async()=>{

       
        if(!MetamaskExtension){
            setWalletHint(true);
            return;
        }

        

        try{
            const provider = (window.ethereum.providers === undefined ? window.ethereum : window.ethereum.providers.find((provider) => provider.isMetaMask));
            const web3 = new Web3(provider);

            const accounts = await provider.request({ method: 'eth_requestAccounts' });
            let chain_id = await web3.eth.getChainId();
            if(chain_id !== 56 && chain_id !== 97){
                await provider.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: web3.utils.toHex(97) }]
                });
            }
            chain_id = await web3.eth.getChainId();
            
            const account = accounts[0];

            walletListener(web3, provider, "MetaMask", account, chain_id);
        }catch(e){
            if(e.hasOwnProperty('message')){
                dispatch(alertMsg(e.message));
            }else{
                dispatch(alertMsg(e));
            }
        }
    }

    const connectWalletConnect = async()=>{
        if(selectedChain.current === ''){
            dispatch(alertMsg("Please choose a network"))
            return;
        }
        const provider = new WalletConnectProvider({
            rpc: {
                56: "https://hardworking-divine-ensemble.bsc.discover.quiknode.pro/43958efedb5ffdfbb03ed542992a33da7b09a51f/",
                97: "https://special-young-spree.bsc-testnet.discover.quiknode.pro/1ced5f728c8c04d6f10b2709d9c03606b0e6ae13/"
            },
            chainId: CHAIN_ID[selectedChain.current]
        });
        try{
            await provider.enable();
            const web3 = new Web3(provider);
            var accounts = await web3.eth.getAccounts();
            var chain_id = await web3.eth.getChainId();

            const account = accounts[0];
            walletListener(web3, provider, "WalletConnect", account, chain_id);
        }catch(e){
            if(e.hasOwnProperty('message')){
                dispatch(alertMsg(e.message));
            }else{
                dispatch(alertMsg(e));
            }
        }
    }

    const connectCoinbase = async()=>{
        
        if(selectedChain.current === ''){
            dispatch(alertMsg("Please choose a network"))
            return;
        }
        const client = new CoinbaseWalletSDK({
            appName: 'NFT-displayer',
            appLogoUrl: '',
            darkMode: false
        });
        const provider = client.makeWeb3Provider(
            providers[selectedChain.current],
            CHAIN_ID[selectedChain.current]
        );
        try{
            const web3 = new Web3(provider);
            var accounts = await provider.request({ method: 'eth_requestAccounts' });
            const account = accounts[0];
            walletListener(web3, provider, "Coinbase", account, CHAIN_ID[selectedChain.current]);
            // walletListener(window.ethereum, account);
        }catch(e){
            if(e.hasOwnProperty('message')){
                dispatch(alertMsg(e.message));
            }else{
                dispatch(alertMsg(e));
            }
        }
        // console.log(window.ethereum)
    }
    const mobileConnect = ()=>{
        if(typeof window.ethereum !== "undefined"){
            connectMetamask();
        }else{
            connectWalletConnect();
        }
    }

    if(mobile && walletStatus === 'unconnected'){
        mobileConnect();
    }

    const walletListener = async (web3, provider,  providerName, account, chain_id)=>{
        provider.on("accountsChanged", async function(accounts){
            account = accounts[0];
            // console.log(account)
            const chain_id = await window.web3.eth.getChainId();
            const balanceWei = await window.web3.eth.getBalance(account);
            const balance = await web3.utils.fromWei(balanceWei, "ether");
            localStorage.setItem('wallet_address', account);
            dispatch(setupWallet({
                address: account,
                providerName: localStorage.getItem('providerName', providerName),
                chain_id: chain_id,
                balance: balance
            }))
        });
        window.web3 = web3;
        window.provider = provider;
        const balanceWei = await window.web3.eth.getBalance(account);
        const balance = await web3.utils.fromWei(balanceWei, "ether");
        localStorage.setItem('providerName', providerName);
        localStorage.setItem('wallet_address', account);
        dispatch(setupWallet({
            address: account,
            providerName: providerName,
            chain_id: chain_id,
            balance: balance
        }))

        console.log(window.provider)
        onWalletBackgroundClick();
        if(autoConnect !== null){
            if(autoConnect.account !== "null"){
                return;
            }
        }
        dispatch(alertMsg("Connected"));

    }

    
    useEffect(()=>{
        setWalletBlockClassName(walletBlockClass);
        if(autoConnect !== null){
            if(autoConnect.providerName === 'MetaMask'){
                connectMetamask()
            }else if(autoConnect.providerName === 'Coinbase'){
                connectCoinbase()
            }else if(autoConnect.providerName === 'WalletConnect'){
                connectWalletConnect()
            }
        }
        if(!mobile){
            MetamaskIcon.current.src = MetamaskSVG;
            CoinbaseIcon.current.src = CoinbaseSVG;
            WalletConnectIcon.current.src = WalletConnectSVG;
        }
    }, []);

    useEffect(()=>{
        if(walletHint !== false){
            walletHintImg.current.src = MetamaskSVG;
        }   
    }, [walletHint])

    return (
        <>
            <div className={walletBlockClassName}>
                <div className="walletContainer">
                    <div className='WBtitle'>
                        Providers
                    </div>
                    {mobile || <div className="wallet" onClick={(e)=>{ document.querySelector(".selectedProvider")?.classList.remove("selectedProvider"); e.currentTarget.classList.add("selectedProvider"); connectMetamask();}}>
                        <div className="walletIcon">
                            <img ref={MetamaskIcon} className="MetamaskIcon" alt=''></img>
                        </div>
                        <span>
                            Metamask
                        </span>
                    </div>}
                    {mobile || <div className="wallet" onClick={(e)=>{ document.querySelector(".selectedProvider")?.classList.remove("selectedProvider"); e.currentTarget.classList.add("selectedProvider"); connectCoinbase()}}>
                        <div className="walletIcon">
                            <img ref={CoinbaseIcon} className="CoinbaseIcon" alt=''></img>
                        </div>
                        <span>
                            Coinbase
                        </span>
                    </div> }
                    {mobile || <div className="wallet" onClick={(e)=>{document.querySelector(".selectedProvider")?.classList.remove("selectedProvider"); e.currentTarget.classList.add("selectedProvider"); connectWalletConnect()}}>
                        <div className="walletIcon">
                            <img ref={WalletConnectIcon} className="WalletConnectIcon" alt=''></img>
                        </div>
                        <span>
                            WalletConnect
                        </span>
                    </div>}
                </div>
                {walletHint && <div className='walletHint'>
                    <div className='WBtitle'>
                        Metamask is not installed
                    </div>
                    <img className='walletHintImg' ref={walletHintImg} alt=""></img>
                    <div className='walletHintButton' onClick={()=>{window.open('https://metamask.io/', '_blank');}}>
                        go to install
                    </div>
                    <div className='walletHintButton' onClick={connectWalletConnect}>
                        connect mobile with QRcode
                    </div>
                </div> }
            </div>
            <div className='walletBackground' onClick={onWalletBackgroundClick}></div>
        </>
    )
}

export default WalletConnector