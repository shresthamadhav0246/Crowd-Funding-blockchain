const hre = require("hardhat")

async function main() {
    const Crowdfunding = await hre.ethers.getContractFactory("CrowdFunding")
    const crowdFunding = await Crowdfunding.deploy()

    console.log(`Crowdfunding deployed to ${crowdFunding.target}`)
}

main().catch((error) => {
    console.error(error)
    process.exit(1)
})
