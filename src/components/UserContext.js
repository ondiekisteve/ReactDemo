import React,{Component} from "react";

const UserContext = React.createContext("Cynthia");

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export {UserProvider,UserConsumer}