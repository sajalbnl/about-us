import './about.css'

const About=()=>{
    return (
        <>
        <h2>ABOUT US</h2> 
        <br/>  
        <div className='part1'>
        <div className='img1'><img src={require('./image2.png')} className='allimg1'/><img src={require('./image3.png')} className='allimg1'/></div>
        <div className='img2'><img src={require('./image1.png') } className='allimg' /></div>
        
        </div>
       
        <div className="part2">
        <p>Captain club is a collection of 9999 randomly generated
            NFTs, living on the polygon network, each NFT gives the
            exclusive access to the club members from setting up a company 
            to hiring up a team,The only NFT for all your Web3 needs, to 
            launch your web3 venture
</p></div>
   
</>
        
    )

}
export default About;

