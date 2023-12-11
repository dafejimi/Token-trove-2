import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { CreateStudio, Studio} from "./components/index";
import { UserPage, Explore, MyStudio } from "./containers/index";

function App() {
  const [studioAddress, setStudioAddress] = useState(null)
  const [isAlias, setIsAlias] = useState(false)
  const [alias, setAlias] = useState(null)
  const [avatarURI, setAvatarURI] = useState(null)
  const [studioName, setStudioName] = useState(null)
  const [studioChain, setStudioChain] = useState(null)
  const [studioDescriptiveText, setStudioDescriptiveText]= useState(null)

  return (
    <Box sx={{ backgroundColor: '#000'}}>
        <Routes>
          <Route path="/" exact element={
            <Explore 
              isAlias={isAlias}  
              setIsAlias={setIsAlias} 
              alias={alias} 
              setAlias={setAlias} 
              avatarURI={avatarURI} 
              setAvatarURI={setAvatarURI} 
              setStudioName={setStudioName} 
              setStudioChain={setStudioChain}
              setStudioDescriptiveText={setStudioDescriptiveText}
              setStudioAddress={setStudioAddress}
            />} />
          <Route path="/studio/:name" exact element={<Studio studioAddress={studioAddress} studioChain={studioChain} studioName={studioName} studioDescriptiveText={studioDescriptiveText}/>} />            
          <Route path="/my-studio" exact element={<MyStudio />} /> 
          <Route path="/user-page" exact element={<UserPage />} />
          <Route path="/create-studio" exact element={
          <CreateStudio 
            studioAddress={studioAddress} 
            setStudioAddress={setStudioAddress} 
            isAlias={isAlias} 
            setIsAlias={setIsAlias} 
            alias={alias} 
            setAlias={setAlias} 
            avatarURI={avatarURI} 
            setAvatarURI={setAvatarURI}
          />} /> 
        </Routes>
    </Box>
  );
}

export default App;

//<Route path="/studio/:id" exact element={<Studio studioAddress={studioAddress}/>} />
