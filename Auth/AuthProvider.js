import React, { createContext, useState } from 'react'
import AsyncStorage  from '@react-native-async-storage/async-storage'

export const AuthContext = createContext({
    user: null,
    
    login: ()=>{},
    logout: ()=>{},
    saveUser: async()=>{}
})
export class AuthProvider extends React.Component{

    state = {
        user: null
    }
    render(){
    return(
        <AuthContext.Provider
        value={{
            user: this.state.user,
            saveUser: async(newUser)=>{
                try{
                    console.warn(newUser)
                    await AsyncStorage.setItem('user', JSON.stringify(newUser))
                    this.setState({user: newUser})
                }catch(e){
                    console.log(e)
                }
            },
            login: (newUser)=>{
                console.warn(newUser)
                this.setState({user: newUser})
            },
            logout: async()=>{
                try{
                    await AsyncStorage.removeItem('user')
                    this.setState({user: null})
                }catch(e){
                    this.setState({user: null})
                    console.log(e)
                }
            }
            }}
        >
         {this.props.children}
       </AuthContext.Provider>
    )
    }
}