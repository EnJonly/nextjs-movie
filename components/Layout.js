import { Box } from "@chakra-ui/react"
import Header from "./header"
import Navigation from "./Navigation"


export default function layout({ children }) {
  return <Box pb={200}>
    <Header />
    <Navigation />
    {children}
  </Box>
}