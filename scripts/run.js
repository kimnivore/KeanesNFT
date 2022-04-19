const main = async () => {
    const nftContractFactory = await hre.ethers.getContractFactory('KeanesNFT');
    const nftContract = await nftContractFactory.deploy();
    await nftContract.deployed();
    console.log('Contract deployed to:', nftContract.address);

    
    let txn = await nftContract.makeAnEpicNFT()
    await txn.wait

    //Mint another NFT
    txn = await nftContract.makeAnEpicNFT()
    await txn.wait()

    let mint_count = await nftContract.getTotalNFTsMintedSoFar();
};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();