import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
export const URL = "https://egypttourguide.herokuapp.com"
 
const GetToken = async()=>{
  try{
  const data = await JSON.parse(await AsyncStorage.getItem("user"))  
  const refreshToken = data.refreshToken
  const token = await (await axios(`${URL}/token`, {refreshToken})).data.token
  console.log('Token: '+token)
  await AsyncStorage.setItem('user', JSON.stringify({...data, token}))
  return token
  }catch(err){
      await AsyncStorage.clear()
      console.warn('Async Cleared')
  }
}

export const Authaxios = axios.create()
Authaxios.interceptors.request.use(async config=>{
config.headers.authorization = await JSON.parse(await AsyncStorage.getItem("user")).token
return config
},
err => Promise.reject(err)
)
Authaxios.interceptors.response.use(response=>response,
    async function(error){
        try{
        if(error === null) return Promise.reject('Refresh Token Expired!') 
        console.log(error)
        let orignalRequest = error.config
        if (error.response.status === 403){
            const token = await GetToken()
            axios.defaults.headers.common['authorization'] = token
            return Authaxios(orignalRequest)
        }
        return Promise.reject(error)
    }catch(e){
        console.log('Error inside response: '+e)
    }
    }

    )