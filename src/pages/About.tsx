import Main from "../components/Main"
import Text from "../components/Text"
import { BsInstagram, BsFacebook } from "react-icons/bs"
import { Body, ProfilePicure, SocialMedias } from "../components/About"
import { listAll, getDownloadURL, getMetadata } from "firebase/storage"
import { useEffect, useState } from "react"
import { Triangle } from "react-loader-spinner"
import generateRef from "../utils/generateRef"
import ReactMarkdown from "react-markdown"
import remarkGfm from 'remark-gfm'
import useLocation from "../hooks/useLocation"
import translate from "../utils/translate"
import ErrorAction from "../components/ErrorAction"

function About() {
    const bucketRef = generateRef("about")
    const [markdown, setMarkdown] = useState("")
    const [profilePicture, setProfilePicture] = useState("")
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState<string | undefined>()
    const location = useLocation()
    const [language, setLanguage] = useState("pt")

    useEffect(() => {
        const userLocation = location?.country_code2
        setLanguage(userLocation === "BR" ? "pt" : "en")

        const directoryItems = async () => {
            setLoading(true)
            const { items } = await listAll(bucketRef)
            await Promise.all(items.map(async (item) => {
                const metadata = await getMetadata(item)
                if (language === "pt" && metadata.name === "about.md") {
                    const url = await getDownloadURL(item)
                    const response = await fetch(url)
                    const data = await response.text()
                    setMarkdown(data)
                }
                if (language === "en" && metadata.name === "about-en.md") {
                    const url = await getDownloadURL(item)
                    const response = await fetch(url)
                    const data = await response.text()
                    setMarkdown(data)
                }

                if (metadata.name === "profile.jpeg") {
                    const url = await getDownloadURL(item)
                    setProfilePicture(url)
                }
            }))
                .catch((error) => {
                    console.log(error)
                    setErrorMessage(translate("firebaseConnectionError"))
                })
                .finally(() => {
                    setLoading(false)
                }
                )
        }

        directoryItems()
    }, [])
    return (
        <Main
            style={{ alignItems: "center", justifyContent: "center" }} >
            {
                loading ?
                    <Triangle
                        height="80"
                        width="80"
                        color="#4fa94d"
                        ariaLabel="triangle-loading"
                        wrapperStyle={{}}
                        visible={true}
                    />
                    :
                    <Body>
                        <ProfilePicure 
                            effect="blur"
                            src={profilePicture} />
                        <Text>
                            <ReactMarkdown
                                children={markdown}
                                remarkPlugins={[remarkGfm]} />
                            <SocialMedias>
                                <a href="https://www.instagram.com/fabiopeixotoo/" target="_blank" rel="noreferrer">
                                    <BsInstagram size={40} />
                                </a>
                                <a href="https://www.facebook.com/fabiopeixoto.fot.br" target="_blank" rel="noreferrer">
                                    <BsFacebook size={40} />
                                </a>
                            </SocialMedias>
                        </Text>
                    </Body>
            }
            {
                errorMessage &&
                    <ErrorAction
                        text={errorMessage}
                        type="error" />
            }

        </Main>
    )
}

export default About