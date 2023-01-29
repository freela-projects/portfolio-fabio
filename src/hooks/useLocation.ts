import { useState, useEffect } from "react"
import axios from "axios"
interface ILocation {
calling_code: string
city: string
connection_type: string
continent_code: string
continent_name: string
country_capital: string
country_code2: string
country_code3: string
country_flag: string
country_name: string
country_tld: string
currency: object
district: ""
geoname_id: string
ip: string
is_eu: boolean
isp: string
languages: string
latitude: string
longitude: string
organization: string
state_prov: string
time_zone: object
zipcode: string
}

function useLocation() {
    const [location, setLocation] = useState<ILocation>()

    useEffect(() => {
        axios.get("https://api.ipify.org?format=json").then((response) => {
            const ip = response.data.ip
            axios.get(`https://api.ipgeolocation.io/ipgeo?apiKey=4850202ce09d45e6888b5d8ac967f952&ip=${ip}`)
                .then((response) => {
                    setLocation(response.data as ILocation)
                }
            )

        })
    }, [])

    return location
}

export default useLocation
