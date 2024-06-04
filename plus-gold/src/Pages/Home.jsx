import AppWorkSection from "../Components/AppWorkSection"
import DownloadApp from "../Components/DownloadApp"
import HomeSection1 from "../Components/HomeSection1"
import Media from "../Components/Media"
import SaveGold from "../Components/SaveGold"
import SharkTank from "../Components/SharkTank"
import Trusted from "../Components/Trusted"

function Home() {
    return (<>
        <HomeSection1 />
        <AppWorkSection/>
        <SharkTank/>
        <SaveGold/>
        <Trusted/>
        <Media/>
        <DownloadApp/>
    </>)
}

export default Home